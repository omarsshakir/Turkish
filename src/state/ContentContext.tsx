import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
  type ReactNode,
} from 'react';
import type {
  Lesson, LevelId, SentencePack, VocabItem,
} from '@/types/content';
import {
  ALPHABET, CATEGORIES, CONTENT_STATS, LESSONS, LEVELS, NUMBER_SECTIONS,
  THEME_SECTIONS,
  SENTENCE_PACKS, VOCABULARY, lessonsByLevel, sentencesByLevel, vocabByLevel,
} from '@content/index';
import { STORAGE_KEYS, readStore, writeStore } from '@/lib/storage';
import { SearchIndex, type SearchDoc } from '@/lib/search';
import { percent } from '@/lib/utils';
import { useProgress } from './ProgressContext';

/**
 * Merges the shipped curriculum with anything the teacher has authored in the
 * admin area. Components read from here, never from the raw content files, so
 * a lesson added at runtime behaves exactly like a built-in one.
 */

interface LessonOverride {
  published?: boolean;
  title?: string;
  order?: number;
}

interface ContentValue {
  lessons: Lesson[];
  vocabulary: VocabItem[];
  sentencePacks: SentencePack[];
  levels: typeof LEVELS;
  categories: typeof CATEGORIES;
  alphabet: typeof ALPHABET;
  numberSections: typeof NUMBER_SECTIONS;
  stats: typeof CONTENT_STATS;

  /** Published lessons only - what students see. */
  visibleLessons: Lesson[];
  lessonsFor: (level: LevelId) => Lesson[];
  vocabFor: (level: LevelId) => VocabItem[];
  sentencesFor: (level: LevelId) => SentencePack[];
  lessonById: (id: string) => Lesson | undefined;
  vocabById: (id: string) => VocabItem | undefined;

  /** Fraction 0-100 of a level's lessons the student has finished. */
  levelProgress: (level: LevelId) => number;
  /** All learnable units in a level, used for the progress denominators. */
  levelTotals: (level: LevelId) => { lessons: number; words: number; packs: number };

  search: SearchIndex;

  /* --- teacher authoring --- */
  customLessons: Lesson[];
  customVocab: VocabItem[];
  addLesson: (lesson: Lesson) => void;
  updateLesson: (id: string, patch: Partial<Lesson>) => void;
  deleteLesson: (id: string) => void;
  setPublished: (id: string, published: boolean) => void;
  addVocab: (item: VocabItem) => void;
  deleteVocab: (id: string) => void;
  isCustom: (id: string) => boolean;
  exportContent: () => string;
  importContent: (json: string) => { ok: boolean; message: string };
}

const ContentContext = createContext<ContentValue | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const progress = useProgress();

  const [customLessons, setCustomLessons] = useState<Lesson[]>(
    () => readStore<Lesson[]>(STORAGE_KEYS.customLessons, []),
  );
  const [customVocab, setCustomVocab] = useState<VocabItem[]>(
    () => readStore<VocabItem[]>(STORAGE_KEYS.customVocab, []),
  );
  const [overrides, setOverrides] = useState<Record<string, LessonOverride>>(
    () => readStore<Record<string, LessonOverride>>(STORAGE_KEYS.lessonOverrides, {}),
  );

  useEffect(() => writeStore(STORAGE_KEYS.customLessons, customLessons), [customLessons]);
  useEffect(() => writeStore(STORAGE_KEYS.customVocab, customVocab), [customVocab]);
  useEffect(() => writeStore(STORAGE_KEYS.lessonOverrides, overrides), [overrides]);

  const lessons = useMemo<Lesson[]>(() => {
    const merged = [...LESSONS, ...customLessons].map((lesson) => {
      const patch = overrides[lesson.id];
      return patch ? { ...lesson, ...patch } : lesson;
    });
    return merged.sort((a, b) => a.order - b.order);
  }, [customLessons, overrides]);

  const vocabulary = useMemo<VocabItem[]>(
    () => [...VOCABULARY, ...customVocab],
    [customVocab],
  );

  const visibleLessons = useMemo(
    () => lessons.filter((l) => l.published !== false),
    [lessons],
  );

  const groupedLessons = useMemo(() => lessonsByLevel(visibleLessons), [visibleLessons]);
  const groupedVocab = useMemo(() => vocabByLevel(vocabulary), [vocabulary]);
  const groupedSentences = useMemo(() => sentencesByLevel(SENTENCE_PACKS), []);

  const lessonMap = useMemo(
    () => Object.fromEntries(lessons.map((l) => [l.id, l])),
    [lessons],
  );
  const vocabMap = useMemo(
    () => Object.fromEntries(vocabulary.map((v) => [v.id, v])),
    [vocabulary],
  );

  /** The search index is rebuilt whenever content changes. */
  const search = useMemo(() => {
    const docs: SearchDoc[] = [];

    for (const letter of ALPHABET) {
      docs.push({
        id: `letter-${letter.id}`,
        kind: 'letter',
        tr: `${letter.upper} ${letter.lower}`,
        pron: letter.namePron,
        ar: letter.note.ar,
        ku: letter.note.ku,
        level: 'a1',
        href: `/alphabet?letter=${letter.id}`,
        keywords: `${letter.name} ${letter.example.tr} ${letter.ipa} harf alfabe`,
      });
    }

    /* A theme is a destination, not a word: the words inside it are already
       indexed individually, so indexing the section too would double every
       hit. What earns a row is the section itself and the headings a student
       might type — "renkler", "aile", "zıt". */
    for (const theme of THEME_SECTIONS) {
      docs.push({
        id: `theme-${theme.id}`,
        kind: 'theme',
        tr: theme.title,
        ar: theme.label.ar,
        ku: theme.label.ku,
        level: 'a1',
        href: `/themes/${theme.id}`,
        keywords: `konu ${theme.groups.map((g) => g.title).join(' ')}`,
      });
    }

    for (const section of NUMBER_SECTIONS) {
      for (const entry of section.entries) {
        docs.push({
          id: `number-${entry.id}`,
          kind: 'number',
          tr: entry.tr,
          pron: entry.pron,
          ar: entry.ar,
          ku: entry.ku,
          level: 'a1',
          href: `/numbers#${section.id}`,
          keywords: `${entry.figure} sayı rakam ${section.title}`,
        });
      }
    }

    for (const word of vocabulary) {
      // Secondary senses are folded into the indexed translation text so a
      // student searching either meaning finds the word. The DISPLAYED
      // translation stays the primary sense — the result should read as one
      // word, not as a list of glosses.
      const senseAr = (word.senses ?? []).map((x) => x.ar).join(' ');
      const senseKu = (word.senses ?? []).map((x) => x.ku).join(' ');

      docs.push({
        id: `word-${word.id}`,
        kind: 'word',
        tr: word.tr,
        pron: word.pron,
        ar: word.ar,
        ku: word.ku,
        arAll: senseAr ? `${word.ar} ${senseAr}` : undefined,
        kuAll: senseKu ? `${word.ku} ${senseKu}` : undefined,
        level: word.level,
        href: word.arabic
          ? `/connections?q=${encodeURIComponent(word.tr)}`
          : `/vocabulary?q=${encodeURIComponent(word.tr)}`,
        keywords: `${word.category} ${word.pos} ${word.example?.tr ?? ''}`,
        // The Arabic word this one descends from, so searching the source or
        // the root finds the Turkish even when the translation is a different
        // word. Both the connection source and the etymological source are
        // indexed, because they are frequently different strings.
        arAlt: [word.arabic?.ar, word.origin?.source, word.origin?.root]
          .filter(Boolean).join(' ') || undefined,
      });
    }

    for (const lesson of visibleLessons) {
      docs.push({
        id: `lesson-${lesson.id}`,
        kind: 'lesson',
        tr: lesson.title,
        ar: lesson.titleI18n.ar,
        ku: lesson.titleI18n.ku,
        level: lesson.level,
        href: `/lesson/${lesson.id}`,
        keywords: `${lesson.kind} ${(lesson.tags ?? []).join(' ')} ${lesson.objective.ar}`,
      });
    }

    for (const pack of SENTENCE_PACKS) {
      for (const [i, sentence] of pack.sentences.entries()) {
        docs.push({
          id: `sentence-${pack.id}-${i}`,
          kind: 'sentence',
          tr: sentence.tr,
          pron: sentence.pron,
          ar: sentence.ar,
          ku: sentence.ku,
          level: pack.level,
          href: `/sentences#${pack.id}`,
          keywords: `cümle ${pack.title}`,
        });
      }
    }

    for (const category of CATEGORIES) {
      docs.push({
        id: `category-${category.id}`,
        kind: 'category',
        tr: category.tr,
        ar: category.labelI18n.ar,
        ku: category.labelI18n.ku,
        level: category.level,
        href: `/vocabulary?category=${category.id}`,
        keywords: `${category.label} kategori`,
      });
    }

    return new SearchIndex(docs);
  }, [vocabulary, visibleLessons]);

  const levelTotals = useCallback((level: LevelId) => ({
    lessons: groupedLessons[level].length,
    words: groupedVocab[level].length,
    packs: groupedSentences[level].length,
  }), [groupedLessons, groupedVocab, groupedSentences]);

  /**
   * A level's progress weighs lessons most heavily (they carry the teaching),
   * then vocabulary, then sentence packs.
   */
  const levelProgress = useCallback((level: LevelId) => {
    const totals = levelTotals(level);
    const doneLessons = groupedLessons[level]
      .filter((l) => progress.completedLessons.includes(l.id)).length;
    const doneWords = groupedVocab[level]
      .filter((w) => progress.learnedWords.includes(w.id)).length;
    const donePacks = groupedSentences[level]
      .filter((p) => progress.completedSentencePacks.includes(p.id)).length;

    const parts: Array<[number, number, number]> = [
      [doneLessons, totals.lessons, 3],
      [doneWords, totals.words, 2],
      [donePacks, totals.packs, 1],
    ];

    let weighted = 0;
    let weightSum = 0;
    for (const [done, total, weight] of parts) {
      if (total === 0) continue;
      weighted += (done / total) * weight;
      weightSum += weight;
    }
    if (weightSum === 0) return 0;
    return percent(weighted, weightSum);
  }, [levelTotals, groupedLessons, groupedVocab, groupedSentences, progress]);

  const addLesson = useCallback((lesson: Lesson) => {
    setCustomLessons((prev) => [...prev.filter((l) => l.id !== lesson.id), { ...lesson, custom: true }]);
  }, []);

  const updateLesson = useCallback((id: string, patch: Partial<Lesson>) => {
    setCustomLessons((prev) => {
      const isCustomLesson = prev.some((l) => l.id === id);
      if (isCustomLesson) {
        return prev.map((l) => (l.id === id ? { ...l, ...patch } : l));
      }
      return prev;
    });
    // Built-in lessons are patched through the override map instead of copied.
    setOverrides((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  }, []);

  const deleteLesson = useCallback((id: string) => {
    setCustomLessons((prev) => prev.filter((l) => l.id !== id));
    setOverrides((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const setPublished = useCallback((id: string, published: boolean) => {
    setCustomLessons((prev) => prev.map((l) => (l.id === id ? { ...l, published } : l)));
    setOverrides((prev) => ({ ...prev, [id]: { ...prev[id], published } }));
  }, []);

  const addVocab = useCallback((item: VocabItem) => {
    setCustomVocab((prev) => [...prev.filter((v) => v.id !== item.id), item]);
  }, []);

  const deleteVocab = useCallback((id: string) => {
    setCustomVocab((prev) => prev.filter((v) => v.id !== id));
  }, []);

  const exportContent = useCallback(
    () => JSON.stringify({ version: 1, customLessons, customVocab, overrides }, null, 2),
    [customLessons, customVocab, overrides],
  );

  const importContent = useCallback((json: string) => {
    try {
      const parsed = JSON.parse(json) as {
        customLessons?: Lesson[];
        customVocab?: VocabItem[];
        overrides?: Record<string, LessonOverride>;
      };
      if (parsed.customLessons) setCustomLessons(parsed.customLessons);
      if (parsed.customVocab) setCustomVocab(parsed.customVocab);
      if (parsed.overrides) setOverrides(parsed.overrides);
      return { ok: true, message: 'İçerik yüklendi.' };
    } catch (err) {
      return { ok: false, message: err instanceof Error ? err.message : 'Geçersiz JSON.' };
    }
  }, []);

  const value = useMemo<ContentValue>(() => ({
    lessons,
    vocabulary,
    sentencePacks: SENTENCE_PACKS,
    levels: LEVELS,
    categories: CATEGORIES,
    alphabet: ALPHABET,
    numberSections: NUMBER_SECTIONS,
    stats: {
      ...CONTENT_STATS,
      words: vocabulary.length,
      lessons: lessons.length,
      exercises: lessons.reduce((s, l) => s + l.exercises.length, 0),
    },
    visibleLessons,
    lessonsFor: (level) => groupedLessons[level],
    vocabFor: (level) => groupedVocab[level],
    sentencesFor: (level) => groupedSentences[level],
    lessonById: (id) => lessonMap[id],
    vocabById: (id) => vocabMap[id],
    levelProgress,
    levelTotals,
    search,
    customLessons,
    customVocab,
    addLesson,
    updateLesson,
    deleteLesson,
    setPublished,
    addVocab,
    deleteVocab,
    isCustom: (id) => customLessons.some((l) => l.id === id) || customVocab.some((v) => v.id === id),
    exportContent,
    importContent,
  }), [
    lessons, vocabulary, visibleLessons, groupedLessons, groupedVocab, groupedSentences,
    lessonMap, vocabMap, levelProgress, levelTotals, search, customLessons, customVocab,
    addLesson, updateLesson, deleteLesson, setPublished, addVocab, deleteVocab,
    exportContent, importContent,
  ]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent(): ContentValue {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used inside <ContentProvider>');
  return ctx;
}
