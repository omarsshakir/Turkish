/**
 * In-browser content validation.
 *
 * `scripts/validate-content.mjs` checks the shipped curriculum at build time.
 * This runs the same class of checks at RUNTIME, over the merged content —
 * including whatever the teacher has authored in the admin panel — so they get
 * the same safety net for their own lessons without running a terminal.
 *
 * Kept deliberately separate from the build script: that one must run in plain
 * Node with no React, this one must run in the browser over live state. Sharing
 * one file would force one of them into the wrong environment.
 */
import type {
  Lesson, LessonBlock, SentencePack, VocabCategory, VocabItem,
} from '@/types/content';
import { LEVEL_ORDER } from '@/types/content';

export type IssueSeverity = 'error' | 'warning';

export interface ValidationIssue {
  severity: IssueSeverity;
  /** Where the problem is, e.g. "Lesson: a1-vowel-harmony". */
  where: string;
  message: string;
  /** Set when the issue belongs to teacher-authored content. */
  custom?: boolean;
  /** Deep link so the teacher can jump straight to the problem. */
  href?: string;
}

export interface ValidationReport {
  issues: ValidationIssue[];
  errors: number;
  warnings: number;
  checked: { lessons: number; words: number; packs: number; exercises: number };
  ok: boolean;
}

interface ValidateInput {
  lessons: Lesson[];
  vocabulary: VocabItem[];
  sentencePacks: SentencePack[];
  categories: VocabCategory[];
  /** Ids that came from the admin panel rather than the shipped curriculum. */
  customIds: Set<string>;
}

const LEVELS = new Set<string>(LEVEL_ORDER);

export function validateContent(input: ValidateInput): ValidationReport {
  const issues: ValidationIssue[] = [];
  const categoryIds = new Set(input.categories.map((c) => c.id));
  const vocabIds = new Set(input.vocabulary.map((v) => v.id));

  const add = (
    severity: IssueSeverity, where: string, message: string,
    id?: string, href?: string,
  ) => {
    issues.push({ severity, where, message, custom: id ? input.customIds.has(id) : false, href });
  };

  /* ---------------- vocabulary ---------------- */

  const seenVocab = new Set<string>();
  for (const word of input.vocabulary) {
    const where = `Kelime: ${word.tr || word.id}`;
    if (seenVocab.has(word.id)) add('error', where, `Yinelenen kelime id: ${word.id}`, word.id);
    seenVocab.add(word.id);

    if (!word.tr?.trim()) add('error', where, 'Türkçe alanı boş', word.id);
    if (!word.ar?.trim()) add('error', where, 'Arapça çeviri eksik', word.id);
    if (!word.ku?.trim()) add('error', where, 'Kürtçe çeviri eksik', word.id);
    if (!word.pron?.trim()) add('warning', where, 'Okunuş alanı boş', word.id);
    if (!LEVELS.has(word.level)) add('error', where, `Geçersiz seviye: ${word.level}`, word.id);
    if (!categoryIds.has(word.category)) {
      add('error', where, `Bilinmeyen kategori: ${word.category}`, word.id);
    }
    if (word.example) {
      if (!word.example.tr?.trim()) add('error', where, 'Örnek cümlenin Türkçesi boş', word.id);
      if (!word.example.ar?.trim() || !word.example.ku?.trim()) {
        add('error', where, 'Örnek cümlenin çevirisi eksik', word.id);
      }
    }
  }

  /* ---------------- lessons ---------------- */

  const seenLessons = new Set<string>();
  let exerciseCount = 0;

  for (const lesson of input.lessons) {
    const where = `Ders: ${lesson.title || lesson.id}`;
    const href = `/lesson/${lesson.id}`;

    if (seenLessons.has(lesson.id)) {
      add('error', where, `Yinelenen ders id: ${lesson.id}`, lesson.id, href);
    }
    seenLessons.add(lesson.id);

    if (!lesson.title?.trim()) add('error', where, 'Türkçe başlık boş', lesson.id, href);
    if (!lesson.titleI18n?.ar?.trim() || !lesson.titleI18n?.ku?.trim()) {
      add('error', where, 'Başlık çevirisi eksik', lesson.id, href);
    }
    if (!lesson.objective?.ar?.trim() || !lesson.objective?.ku?.trim()) {
      add('warning', where, 'Ders hedefi çevirisi eksik', lesson.id, href);
    }
    if (!LEVELS.has(lesson.level)) {
      add('error', where, `Geçersiz seviye: ${lesson.level}`, lesson.id, href);
    }
    if (!lesson.blocks || lesson.blocks.length === 0) {
      add('error', where, 'Derste hiç içerik bloğu yok', lesson.id, href);
    }

    for (const [i, block] of (lesson.blocks ?? []).entries()) {
      validateBlock(block, `${where} → blok ${i + 1} (${block.type})`, lesson.id, href, vocabIds, add);
    }

    for (const ex of lesson.exercises ?? []) {
      exerciseCount += 1;
      validateExercise(ex, `${where} → alıştırma ${ex.id}`, lesson.id, href, add);
    }

    if (lesson.exercises && lesson.exercises.length === 0 && lesson.kind === 'grammar') {
      add('warning', where, 'Dilbilgisi dersinde alıştırma yok', lesson.id, href);
    }
  }

  /* ---------------- sentence packs ---------------- */

  const seenPacks = new Set<string>();
  for (const pack of input.sentencePacks) {
    const where = `Cümle paketi: ${pack.title || pack.id}`;
    if (seenPacks.has(pack.id)) add('error', where, `Yinelenen paket id: ${pack.id}`, pack.id);
    seenPacks.add(pack.id);
    if (!pack.sentences?.length) add('error', where, 'Pakette hiç cümle yok', pack.id);
    for (const s of pack.sentences ?? []) {
      if (!s.tr?.trim()) add('error', where, 'Bir cümlenin Türkçesi boş', pack.id);
      if (!s.ar?.trim() || !s.ku?.trim()) {
        add('error', where, `"${s.tr}" cümlesinin çevirisi eksik`, pack.id);
      }
    }
  }

  /* ---------------- coverage warnings ---------------- */

  for (const category of input.categories) {
    const count = input.vocabulary.filter((v) => v.category === category.id).length;
    if (count === 0) {
      add('warning', `Kategori: ${category.tr}`, 'Bu kategoride hiç kelime yok');
    }
  }

  for (const level of LEVEL_ORDER) {
    if (input.lessons.filter((l) => l.level === level).length === 0) {
      add('warning', `Seviye: ${level.toUpperCase()}`, 'Bu seviyede hiç ders yok');
    }
  }

  const errors = issues.filter((i) => i.severity === 'error').length;
  const warnings = issues.length - errors;

  return {
    issues,
    errors,
    warnings,
    checked: {
      lessons: input.lessons.length,
      words: input.vocabulary.length,
      packs: input.sentencePacks.length,
      exercises: exerciseCount,
    },
    ok: errors === 0,
  };
}

type AddFn = (
  severity: IssueSeverity, where: string, message: string, id?: string, href?: string,
) => void;

function validateBlock(
  block: LessonBlock, where: string, lessonId: string, href: string,
  vocabIds: Set<string>, add: AddFn,
): void {
  switch (block.type) {
    case 'text':
    case 'note':
      if (!block.body?.ar?.trim() || !block.body?.ku?.trim()) {
        add('error', where, 'Açıklama çevirisi eksik', lessonId, href);
      }
      break;
    case 'examples':
      if (!block.items?.length) add('error', where, 'Örnek listesi boş', lessonId, href);
      for (const item of block.items ?? []) {
        if (!item.tr?.trim()) add('error', where, 'Bir örneğin Türkçesi boş', lessonId, href);
        if (!item.ar?.trim() || !item.ku?.trim()) {
          add('error', where, `"${item.tr}" örneğinin çevirisi eksik`, lessonId, href);
        }
      }
      break;
    case 'table':
      if (!block.headers?.length) add('error', where, 'Tablo başlığı yok', lessonId, href);
      for (const [ri, row] of (block.rows ?? []).entries()) {
        if (row.length !== block.headers.length) {
          add('error', where, `${ri + 1}. satırda ${row.length} hücre var, ${block.headers.length} olmalı`, lessonId, href);
        }
      }
      break;
    case 'conjugation':
      if (!block.rows?.length) add('error', where, 'Çekim tablosu boş', lessonId, href);
      for (const row of block.rows ?? []) {
        if (!row.tr?.trim() || !row.ar?.trim() || !row.ku?.trim()) {
          add('error', where, `"${row.person}" satırı eksik`, lessonId, href);
        }
      }
      break;
    case 'dialogue':
      if (!block.lines?.length) add('error', where, 'Diyalogda hiç replik yok', lessonId, href);
      for (const line of block.lines ?? []) {
        if (!line.tr?.trim() || !line.ar?.trim() || !line.ku?.trim()) {
          add('error', where, 'Eksik diyalog repliği', lessonId, href);
        }
      }
      break;
    case 'passage':
      if (!block.paragraphs?.length) add('error', where, 'Okuma parçasında paragraf yok', lessonId, href);
      for (const [pi, para] of (block.paragraphs ?? []).entries()) {
        if (!para.tr?.trim()) add('error', where, `${pi + 1}. paragrafın Türkçesi boş`, lessonId, href);
        if (!para.ar?.trim() || !para.ku?.trim()) {
          add('error', where, `${pi + 1}. paragrafın çevirisi eksik`, lessonId, href);
        }
      }
      for (const entry of block.glossary ?? []) {
        if (!entry.tr || !entry.pron || !entry.ar || !entry.ku) {
          add('error', where, 'Sözlükçe girdisi eksik', lessonId, href);
        }
      }
      break;
    case 'vocab':
      for (const id of block.ids ?? []) {
        if (!vocabIds.has(id)) {
          add('error', where, `Bilinmeyen kelime id: ${id}`, lessonId, href);
        }
      }
      break;
    case 'soundpairs':
      for (const pair of block.pairs ?? []) {
        if (!pair.a?.tr || !pair.b?.tr) add('error', where, 'Eksik ses çifti', lessonId, href);
        if (!pair.contrast?.ar || !pair.contrast?.ku) {
          add('error', where, 'Ses çifti açıklaması eksik', lessonId, href);
        }
      }
      break;
    default:
      add('error', where, 'Bilinmeyen blok türü', lessonId, href);
  }
}

function validateExercise(
  ex: Lesson['exercises'][number], where: string, lessonId: string, href: string, add: AddFn,
): void {
  if (ex.kind === 'mcq' || ex.kind === 'translate' || ex.kind === 'listening') {
    if (!Array.isArray(ex.options) || ex.options.length < 2) {
      add('error', where, 'En az iki seçenek olmalı', lessonId, href);
      return;
    }
    if (ex.options.some((o) => !String(o).trim())) {
      add('error', where, 'Boş seçenek var', lessonId, href);
    }
    if (new Set(ex.options).size !== ex.options.length) {
      add('error', where, 'Yinelenen seçenek var', lessonId, href);
    }
    if (typeof ex.answer !== 'number' || ex.answer < 0 || ex.answer >= ex.options.length) {
      add('error', where, `Doğru cevap indeksi (${ex.answer}) seçenek aralığı dışında`, lessonId, href);
    }
  }

  if (ex.kind === 'mcq' && (!ex.prompt?.ar?.trim() || !ex.prompt?.ku?.trim())) {
    add('error', where, 'Soru metni çevirisi eksik', lessonId, href);
  }
  if (ex.kind === 'listening' && !ex.audio?.trim()) {
    add('error', where, 'Seslendirilecek metin boş', lessonId, href);
  }
  if (ex.kind === 'translate' && !ex.source?.trim()) {
    add('error', where, 'Çevrilecek metin boş', lessonId, href);
  }
  if (ex.kind === 'match') {
    if (!ex.pairs?.length || ex.pairs.length < 3) {
      add('error', where, 'Eşleştirmede en az üç çift olmalı', lessonId, href);
    }
    const trs = (ex.pairs ?? []).map((p) => p.tr);
    if (new Set(trs).size !== trs.length) {
      add('error', where, 'Eşleştirmede yinelenen Türkçe kelime var', lessonId, href);
    }
  }
  if (ex.kind === 'order') {
    if (!ex.sentence?.trim()) add('error', where, 'Sıralanacak cümle boş', lessonId, href);
    else if (ex.sentence.split(/\s+/).length < 2) {
      add('error', where, 'Cümle karıştırmak için çok kısa', lessonId, href);
    }
  }
  if (ex.kind === 'fill') {
    if (!ex.sentence?.includes('___')) {
      add('error', where, 'Cümlede ___ boşluğu yok', lessonId, href);
    }
    if (!ex.answer?.trim()) add('error', where, 'Cevap boş', lessonId, href);
    if (ex.options && !ex.options.some((o) => normalise(o) === normalise(ex.answer))) {
      add('error', where, `Doğru cevap "${ex.answer}" seçenekler arasında yok`, lessonId, href);
    }
  }
  if (ex.kind === 'speak' && (!ex.tr?.trim() || !ex.ar?.trim() || !ex.ku?.trim())) {
    add('error', where, 'Tekrar alıştırması eksik', lessonId, href);
  }
}

function normalise(text: string): string {
  const map: Record<string, string> = {
    ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u',
  };
  return String(text)
    .toLocaleLowerCase('tr-TR')
    .split('')
    .map((c) => map[c] ?? c)
    .join('')
    .replace(/[.,!?;:()"'’]/g, '')
    .trim();
}
