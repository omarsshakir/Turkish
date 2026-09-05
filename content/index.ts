/**
 * The content registry.
 *
 * This is the single place the application reads educational content from.
 * Adding a lesson, a word or a whole level means adding it here - no component
 * anywhere in `src/` needs to change.
 */
import type {
  Lesson, LetterEntry, LevelId, NumberSection, SentencePack, SyllableSection,
  VocabItem,
} from '@/types/content';

import { LEVELS, LEVEL_BY_ID } from './levels';
import { CATEGORIES, CATEGORY_BY_ID } from './categories';
import { CONVERSATIONS } from './conversations';
import { READING_LESSONS } from './reading';
import { ADVANCED_CONVERSATIONS } from './conversations-advanced';
import { FUNCTIONAL_CONVERSATIONS } from './conversations-functional';
import { ADVANCED_SENTENCES } from './sentences-advanced';
import { EXTRA_SENTENCES } from './sentences-extra';
import { EXTRA_SENTENCES_2 } from './sentences-extra-2';
import { STRUCTURE_SENTENCES } from './sentences-structures';
import { LIVING_SENTENCES } from './sentences-living';
import { FORM_SENTENCES } from './sentences-forms';
import { SITUATION_SENTENCES } from './sentences-situations';
import { BASICS_SENTENCES } from './sentences-basics';
import { SERVICE_SENTENCES } from './sentences-services';
import { DISCOURSE_SENTENCES } from './sentences-discourse';
import { FUNCTIONAL_SENTENCES } from './sentences-functional';
import { ARABIC_CONNECTIONS } from './arabic/connections';
import { ARABIC_LINK_VOCABULARY } from './arabic/vocabulary';
import { ARABIC_LINK_VOCABULARY_2 } from './arabic/vocabulary-2';
import { SYLLABLE_SECTIONS as CORE_SYLLABLES } from './syllables';
import { SOUND_SECTIONS } from './syllables-sounds';
import { CONTRAST_SECTIONS } from './syllables-contrasts';
import { HARMONY_SECTIONS } from './syllables-harmony';
import { COLLOCATIONS } from './collocations';
import { EXTRA_SENSES } from './senses';
import { VERB_PATTERNS } from './verb-patterns';
import { applyKurdishPolicy } from './kurdish-review';
import { ARABIC_ORIGIN } from './arabic/origin';

/* -- A1 ---------------------------------------------------------------- */
import { ALPHABET, MISSING_LETTERS, SPECIAL_LETTERS, VOWELS } from './a1/alphabet';
import { NUMBER_SECTIONS as CORE_NUMBER_SECTIONS } from './a1/numbers';
import { NUMBER_SECTIONS_EXTRA } from './numbers-extra';
import { NUMBER_SECTIONS_USAGE } from './numbers-usage';
import { NOTATION_SECTIONS } from './numbers-notation';
import { A1_VOCABULARY } from './a1/vocabulary';
import { A1_VOCABULARY_MORE } from './a1/vocabulary-more';
import { A1_VOCABULARY_CORE_VERBS } from './a1/vocabulary-core-verbs';
import { A1_VOCABULARY_FUNCTION } from './a1/vocabulary-function';
import { A1_VOCABULARY_EVERYDAY } from './a1/vocabulary-everyday';
import { A1_VOCABULARY_FUNCTION_2 } from './a1/vocabulary-function-2';
import { A1_VOCABULARY_FUNCTION_3 } from './a1/vocabulary-function-3';
import { A1_GRAMMAR } from './a1/grammar';
import { A1_PRONUNCIATION } from './a1/pronunciation';
import { A1_SENTENCES } from './a1/sentences';

/* -- A2 ---------------------------------------------------------------- */
import { A2_VOCABULARY } from './a2/vocabulary';
import { A2_VOCABULARY_MORE } from './a2/vocabulary-more';
import { A2_VOCABULARY_KITCHEN } from './a2/vocabulary-kitchen';
import { A2_VOCABULARY_VERBS } from './a2/vocabulary-verbs';
import { A2_VOCABULARY_BODY } from './a2/vocabulary-body';
import { A2_VOCABULARY_VERB_PAIRS } from './a2/vocabulary-verb-pairs';
import { A2_VOCABULARY_PROPERTIES } from './a2/vocabulary-properties';
import { A2_VOCABULARY_HOUSEHOLD } from './a2/vocabulary-household';
import { A2_VOCABULARY_CORE_NOUNS } from './a2/vocabulary-core-nouns';
import { A2_GRAMMAR } from './a2/grammar';
import { A2_SENTENCES } from './a2/sentences';

/* -- B1 ---------------------------------------------------------------- */
import { B1_VOCABULARY } from './b1/vocabulary';
import { B1_VOCABULARY_EXTRA } from './b1/vocabulary-extra';
import { B1_VOCABULARY_MORE } from './b1/vocabulary-more';
import { B1_VOCABULARY_COLLOCATIONS } from './b1/vocabulary-collocations';
import { B1_VOCABULARY_PRACTICAL } from './b1/vocabulary-practical';
import { B1_VOCABULARY_LEISURE } from './b1/vocabulary-leisure';
import { B1_VOCABULARY_VERBS_DISCOURSE } from './b1/vocabulary-verbs-discourse';
import { B1_VOCABULARY_ABSTRACT } from './b1/vocabulary-abstract';
import { B1_VOCABULARY_SOCIAL_LIFE } from './b1/vocabulary-social-life';
import { B1_VOCABULARY_IDIOMS } from './b1/vocabulary-idioms';
import { B1_VOCABULARY_OTTOMAN_EVERYDAY } from './b1/vocabulary-ottoman-everyday';
import { B1_VOCABULARY_AUDIT_GAPS } from './b1/vocabulary-audit-gaps';
import { B1_GRAMMAR } from './b1/grammar';
import { B1_SENTENCES } from './b1/sentences';

/* -- B2 ---------------------------------------------------------------- */
import { B2_VOCABULARY } from './b2/vocabulary';
import { B2_VOCABULARY_EXTRA } from './b2/vocabulary-extra';
import { B2_VOCABULARY_MORE } from './b2/vocabulary-more';
import { B2_VOCABULARY_PROCESS } from './b2/vocabulary-process';
import { B2_VOCABULARY_SOCIETY } from './b2/vocabulary-society';
import { B2_VOCABULARY_CIVIC } from './b2/vocabulary-civic';
import { B2_VOCABULARY_EMPLOYMENT } from './b2/vocabulary-employment';
import { B2_VOCABULARY_DATA } from './b2/vocabulary-data';
import { B2_GRAMMAR } from './b2/grammar';
import { B2_SENTENCES } from './b2/sentences';

/* -- C1 ---------------------------------------------------------------- */
import { C1_VOCABULARY } from './c1/vocabulary';
import { C1_VOCABULARY_EXTRA } from './c1/vocabulary-extra';
import { C1_VOCABULARY_MORE } from './c1/vocabulary-more';
import { C1_VOCABULARY_ARGUMENT } from './c1/vocabulary-argument';
import { C1_VOCABULARY_QUALIFIERS } from './c1/vocabulary-qualifiers';
import { C1_VOCABULARY_DISCOURSE } from './c1/vocabulary-discourse';
import { C1_VOCABULARY_STANCE } from './c1/vocabulary-stance';
import { C1_GRAMMAR } from './c1/grammar';
import { C1_SENTENCES } from './c1/sentences';

/* -- C1+ --------------------------------------------------------------- */
import { C1PLUS_VOCABULARY } from './c1-plus/vocabulary';
import { C1PLUS_VOCABULARY_EXTRA } from './c1-plus/vocabulary-extra';
import { C1PLUS_VOCABULARY_MORE } from './c1-plus/vocabulary-more';
import { C1PLUS_VOCABULARY_RHETORIC } from './c1-plus/vocabulary-rhetoric';
import { C1PLUS_VOCABULARY_THOUGHT } from './c1-plus/vocabulary-thought';
import { C1PLUS_VOCABULARY_INTELLECT } from './c1-plus/vocabulary-intellect';
import { C1PLUS_GRAMMAR } from './c1-plus/grammar';
import { C1PLUS_SENTENCES } from './c1-plus/sentences';

export { LEVELS, LEVEL_BY_ID, CATEGORIES, CATEGORY_BY_ID };
export { ALPHABET, SPECIAL_LETTERS, VOWELS, MISSING_LETTERS };
/** Counting first, then the ways numbers are actually used. */
export const NUMBER_SECTIONS: NumberSection[] = [
  ...CORE_NUMBER_SECTIONS,
  ...NUMBER_SECTIONS_EXTRA,
  ...NUMBER_SECTIONS_USAGE,
  ...NOTATION_SECTIONS,
];
/**
 * Pronunciation drills: syllable structure first, then the sound inventory.
 * The generated word database lives in the UI, built from VOCABULARY.
 */
export const SYLLABLE_SECTIONS: SyllableSection[] = [
  ...CORE_SYLLABLES,
  ...SOUND_SECTIONS,
  ...CONTRAST_SECTIONS,
  ...HARMONY_SECTIONS,
];

const ALL_VOCABULARY: VocabItem[] = [
  ...A1_VOCABULARY,
  ...A1_VOCABULARY_MORE,
  ...A1_VOCABULARY_CORE_VERBS,
  ...A1_VOCABULARY_FUNCTION,
  ...A1_VOCABULARY_EVERYDAY,
  ...A1_VOCABULARY_FUNCTION_2,
  ...A1_VOCABULARY_FUNCTION_3,
  ...A2_VOCABULARY,
  ...A2_VOCABULARY_MORE,
  ...A2_VOCABULARY_KITCHEN,
  ...A2_VOCABULARY_VERBS,
  ...A2_VOCABULARY_BODY,
  ...A2_VOCABULARY_VERB_PAIRS,
  ...A2_VOCABULARY_PROPERTIES,
  ...A2_VOCABULARY_HOUSEHOLD,
  ...A2_VOCABULARY_CORE_NOUNS,
  ...B1_VOCABULARY,
  ...B1_VOCABULARY_EXTRA,
  ...B1_VOCABULARY_MORE,
  ...B1_VOCABULARY_COLLOCATIONS,
  ...B1_VOCABULARY_PRACTICAL,
  ...B1_VOCABULARY_LEISURE,
  ...B1_VOCABULARY_VERBS_DISCOURSE,
  ...B1_VOCABULARY_ABSTRACT,
  ...B1_VOCABULARY_SOCIAL_LIFE,
  ...B1_VOCABULARY_IDIOMS,
  ...B1_VOCABULARY_OTTOMAN_EVERYDAY,
  ...B1_VOCABULARY_AUDIT_GAPS,
  ...B2_VOCABULARY,
  ...B2_VOCABULARY_EXTRA,
  ...B2_VOCABULARY_MORE,
  ...B2_VOCABULARY_PROCESS,
  ...B2_VOCABULARY_SOCIETY,
  ...B2_VOCABULARY_CIVIC,
  ...B2_VOCABULARY_EMPLOYMENT,
  ...B2_VOCABULARY_DATA,
  ...C1_VOCABULARY,
  ...C1_VOCABULARY_EXTRA,
  ...C1_VOCABULARY_MORE,
  ...C1_VOCABULARY_ARGUMENT,
  ...C1_VOCABULARY_QUALIFIERS,
  ...C1_VOCABULARY_DISCOURSE,
  ...C1_VOCABULARY_STANCE,
  ...C1PLUS_VOCABULARY,
  ...C1PLUS_VOCABULARY_EXTRA,
  ...C1PLUS_VOCABULARY_MORE,
  ...C1PLUS_VOCABULARY_RHETORIC,
  ...C1PLUS_VOCABULARY_THOUGHT,
  ...C1PLUS_VOCABULARY_INTELLECT,
  ...ARABIC_LINK_VOCABULARY,
  ...ARABIC_LINK_VOCABULARY_2,
];

/**
 * Every vocabulary item in the curriculum, in level order.
 *
 * Arabic connections are applied here as a decoration pass rather than being
 * stored as separate records. Roughly a quarter of the connection words were
 * already in the curriculum; a parallel database would have duplicated them,
 * and duplicated data drifts. Decorating in place cannot.
 *
 * The practical consequence is that an Arabic-connection word IS a vocabulary
 * item, so it reaches SRS, favourites, search, audio, listening and exercises
 * with no feature-specific plumbing anywhere in `src/`.
 */
/*
 * Turkish has homonym pairs the curriculum teaches separately - `yüz` is both
 * "hundred" and "face", `yemek` is both "food" and "to eat". A key-based
 * overlay cannot tell them apart, so applying one would decorate the wrong
 * entry: the number `yüz` briefly acquired the "surface" sense written for the
 * face. Ambiguous words are therefore excluded from every overlay and must
 * carry their extra data inline, on the entry it actually belongs to.
 */
const AMBIGUOUS = new Set(
  Object.entries(
    ALL_VOCABULARY.reduce<Record<string, number>>((acc, v) => {
      acc[v.tr] = (acc[v.tr] ?? 0) + 1;
      return acc;
    }, {}),
  ).filter(([, n]) => n > 1).map(([word]) => word),
);

export const VOCABULARY: VocabItem[] = ALL_VOCABULARY.map((raw) => {
  // The Kurdish review policy runs first, so overlay decoration cannot mask a
  // translation that has never been checked. See `content/kurdish-review.ts`.
  const item = applyKurdishPolicy(raw);
  if (AMBIGUOUS.has(item.tr)) return item;
  const link = ARABIC_CONNECTIONS[item.tr];
  // Collocations are overlaid the same way and for the same reasons: the
  // words live across twenty files, and a pairing set is easier to review
  // as one list than scattered through the curriculum.
  const phrases = item.collocations ?? COLLOCATIONS[item.tr];
  // Etymology is a third overlay. It is kept separate from `arabic` on
  // purpose: one says where the word came from, the other says whether an
  // Arabic speaker can use that fact.
  const origin = item.origin ?? ARABIC_ORIGIN[item.tr];
  // Polysemy is the fourth overlay. Hand-written senses always win: the
  // overlay fills a gap, it never overrules an author who was more specific.
  const senses = item.senses ?? EXTRA_SENSES[item.tr];
  // Verb patterns are the fifth overlay. A note written in a vocabulary file
  // is more specific than a general pattern, so it always wins.
  const note = item.note ?? VERB_PATTERNS[item.tr];
  if (!link && !phrases && !origin && !senses && !note) return item;
  return {
    ...item,
    ...(link ? { arabic: link } : {}),
    ...(phrases ? { collocations: phrases } : {}),
    ...(origin ? { origin } : {}),
    ...(senses ? { senses } : {}),
    ...(note ? { note } : {}),
  };
});

/** Words documented as having entered Turkish from Arabic. */
export const ARABIC_ORIGIN_WORDS: VocabItem[] = VOCABULARY.filter(
  (v) => v.origin?.language === 'arabic',
);

/** Words students commonly assume are Arabic but are not. */
export const ORIGIN_MISCONCEPTIONS: VocabItem[] = VOCABULARY.filter(
  (v) => v.origin?.misconception,
);

/** Just the words that carry an Arabic connection. */
export const ARABIC_LINKED: VocabItem[] = VOCABULARY.filter((v) => v.arabic);

export { ARABIC_CONNECTIONS, COLLOCATIONS, ARABIC_ORIGIN, EXTRA_SENSES, VERB_PATTERNS };

/** Every lesson in the curriculum: grammar, pronunciation and conversation. */
export const LESSONS: Lesson[] = [
  ...A1_GRAMMAR,
  ...A1_PRONUNCIATION,
  ...A2_GRAMMAR,
  ...B1_GRAMMAR,
  ...B2_GRAMMAR,
  ...C1_GRAMMAR,
  ...C1PLUS_GRAMMAR,
  ...CONVERSATIONS,
  ...ADVANCED_CONVERSATIONS,
  ...FUNCTIONAL_CONVERSATIONS,
  ...READING_LESSONS,
].map((lesson) => ({ published: true, ...lesson }));

/** Every sentence pack. */
export const SENTENCE_PACKS: SentencePack[] = [
  ...A1_SENTENCES,
  ...A2_SENTENCES,
  ...B1_SENTENCES,
  ...B2_SENTENCES,
  ...C1_SENTENCES,
  ...C1PLUS_SENTENCES,
  ...ADVANCED_SENTENCES,
  ...EXTRA_SENTENCES,
  ...EXTRA_SENTENCES_2,
  ...STRUCTURE_SENTENCES,
  ...LIVING_SENTENCES,
  ...FORM_SENTENCES,
  ...SITUATION_SENTENCES,
  ...BASICS_SENTENCES,
  ...SERVICE_SENTENCES,
  ...DISCOURSE_SENTENCES,
  ...FUNCTIONAL_SENTENCES,
];

/* ------------------------------------------------------------------ */
/* Derived indexes - built once at module load                         */
/* ------------------------------------------------------------------ */

export const VOCAB_BY_ID: Record<string, VocabItem> = Object.fromEntries(
  VOCABULARY.map((v) => [v.id, v]),
);

export const LESSON_BY_ID: Record<string, Lesson> = Object.fromEntries(
  LESSONS.map((l) => [l.id, l]),
);

export const LETTER_BY_ID: Record<string, LetterEntry> = Object.fromEntries(
  ALPHABET.map((l) => [l.id, l]),
);

/** Lessons grouped by level, sorted by their `order` field. */
export function lessonsByLevel(lessons: Lesson[] = LESSONS): Record<LevelId, Lesson[]> {
  const grouped = {
    a1: [], a2: [], b1: [], b2: [], c1: [], c1plus: [],
  } as Record<LevelId, Lesson[]>;
  for (const lesson of lessons) grouped[lesson.level].push(lesson);
  for (const level of Object.keys(grouped) as LevelId[]) {
    grouped[level].sort((a, b) => a.order - b.order);
  }
  return grouped;
}

/** Vocabulary grouped by level. */
export function vocabByLevel(items: VocabItem[] = VOCABULARY): Record<LevelId, VocabItem[]> {
  const grouped = {
    a1: [], a2: [], b1: [], b2: [], c1: [], c1plus: [],
  } as Record<LevelId, VocabItem[]>;
  for (const item of items) grouped[item.level].push(item);
  return grouped;
}

/** Sentence packs grouped by level. */
export function sentencesByLevel(packs: SentencePack[] = SENTENCE_PACKS): Record<LevelId, SentencePack[]> {
  const grouped = {
    a1: [], a2: [], b1: [], b2: [], c1: [], c1plus: [],
  } as Record<LevelId, SentencePack[]>;
  for (const pack of packs) grouped[pack.level].push(pack);
  for (const level of Object.keys(grouped) as LevelId[]) {
    grouped[level].sort((a, b) => a.order - b.order);
  }
  return grouped;
}

/** Categories that actually have words in them, with counts. */
export function categoryCounts(items: VocabItem[] = VOCABULARY): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const item of items) counts[item.category] = (counts[item.category] ?? 0) + 1;
  return counts;
}

/** Headline numbers used on the dashboard and the landing hero. */
export const CONTENT_STATS = {
  letters: ALPHABET.length,
  numbers: NUMBER_SECTIONS.reduce((sum, s) => sum + s.entries.length, 0),
  words: VOCABULARY.length,
  lessons: LESSONS.length,
  sentences: SENTENCE_PACKS.reduce((sum, s) => sum + s.sentences.length, 0),
  exercises: LESSONS.reduce((sum, l) => sum + l.exercises.length, 0),
  categories: CATEGORIES.length,
  levels: LEVELS.length,
  arabicLinks: ARABIC_LINKED.length,
  arabicOrigin: ARABIC_ORIGIN_WORDS.length,
  syllables: SYLLABLE_SECTIONS.reduce((sum, s) => sum + s.entries.length, 0),
  syllablePairs: SYLLABLE_SECTIONS.reduce((sum, s) => sum + (s.pairs?.length ?? 0), 0),
};

export type { NumberSection };
