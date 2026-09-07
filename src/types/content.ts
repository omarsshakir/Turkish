/**
 * TurkishPath content model.
 *
 * Every piece of educational content on the platform conforms to the shapes in
 * this file. UI components never invent their own content shapes - they render
 * these. That is what lets the teacher add hundreds of lessons and thousands of
 * vocabulary items without touching a single component.
 */

/** CEFR levels supported by the curriculum. */
export type LevelId = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c1plus';

export const LEVEL_ORDER: LevelId[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c1plus'];

/** The two support languages students read explanations in. */
export type SupportLang = 'ar' | 'ku';

/** A string given in both support languages. Turkish is never translated away. */
export interface Bilingual {
  /** Modern Standard Arabic. */
  ar: string;
  /** Sorani Kurdish. */
  ku: string;
  /** Optional English, used only in the admin area and for teacher notes. */
  en?: string;
}

/** A Turkish item with pronunciation and both translations. The atom of the platform. */
export interface Phrase {
  /** Turkish text. This is what gets spoken by the audio engine. */
  tr: string;
  /** Readable pronunciation guide (syllables, stressed syllable in caps). */
  pron: string;
  ar: string;
  ku: string;
}

export type PartOfSpeech =
  | 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun'
  | 'preposition' | 'conjunction' | 'phrase' | 'number' | 'interjection'
  /* Turkish writes the question particle (mı/mi/mu/mü) as a separate word and
     it belongs to no other class. It is not a suffix: suffixes stay in the
     grammar lessons. */
  | 'particle';

/* ------------------------------------------------------------------ */
/* Alphabet                                                            */
/* ------------------------------------------------------------------ */

export interface LetterEntry {
  id: string;
  /** Uppercase form, e.g. C-cedilla. */
  upper: string;
  /** Lowercase form. */
  lower: string;
  /** Turkish name of the letter, e.g. "ce". */
  name: string;
  /** How the letter name is pronounced. */
  namePron: string;
  /** Approximate IPA of the sound. */
  ipa: string;
  /** Short pronunciation description in English (teacher reference). */
  sound: string;
  /** Explanation aimed at Arabic and Kurdish speakers. */
  note: Bilingual;
  /** Whether the letter is a vowel, and if so which harmony group. */
  kind: 'vowel' | 'consonant';
  /** For vowels: front/back, rounded/unrounded, close/open. */
  vowel?: { front: boolean; rounded: boolean; close: boolean };
  /** Example word demonstrating the letter. */
  example: Phrase;
  /** A second example word. */
  example2?: Phrase;
  /**
   * Thirteen further example words, ordered so the letter appears first at the
   * start of a word, then in the middle, then at the end. Supplied by
   * `content/a1/alphabet-examples.ts`; with `example` and `example2` this makes
   * fifteen words per letter.
   */
  more?: Phrase[];
  /** True for letters that do not exist in the English alphabet. */
  special?: boolean;
}

/* ------------------------------------------------------------------ */
/* Numbers                                                             */
/* ------------------------------------------------------------------ */

export type NumberGroup =
  | 'units' | 'teens' | 'tens' | 'hundreds' | 'thousands' | 'millions'
  | 'large' | 'ordinals' | 'dates' | 'phone' | 'prices' | 'time'
  | 'fractions' | 'distributive'
  /* Usage rather than counting: how numbers actually appear in life. */
  | 'percent' | 'measures' | 'age' | 'quantity'
  /* Situations where a number has to be produced out loud. */
  | 'address' | 'statistics' | 'duration' | 'billion'
  /* Notation and vagueness: the comma, the range, the rough estimate. */
  | 'decimals' | 'ranges' | 'approximate' | 'currency' | 'ranking';

export interface NumberEntry {
  id: string;
  /** Displayed numeral or symbol, e.g. "17", "1.000", "1." */
  figure: string;
  tr: string;
  pron: string;
  ar: string;
  ku: string;
  group: NumberGroup;
  /** Optional usage note. */
  note?: Bilingual;
}

export interface NumberSection {
  id: NumberGroup;
  title: string;
  subtitle: Bilingual;
  /** Teaching explanation shown above the grid. */
  explain: Bilingual;
  entries: NumberEntry[];
  /** Optional worked examples (dates, prices, telling the time). */
  examples?: Phrase[];
}

/* ------------------------------------------------------------------ */
/* Vocabulary                                                          */
/* ------------------------------------------------------------------ */

export interface VocabCategory {
  id: string;
  /** English label used in filters and the admin area. */
  label: string;
  /** Turkish label. */
  tr: string;
  labelI18n: Bilingual;
  /** Lucide icon name rendered by the category chip. */
  icon: string;
  /** Lowest level at which this category is introduced. */
  level: LevelId;
}

export interface VocabItem {
  id: string;
  tr: string;
  pron: string;
  ar: string;
  ku: string;
  category: string;
  level: LevelId;
  pos: PartOfSpeech;
  /** Example sentence using the word, fully translated. */
  example?: Phrase;

  /* ---- optional metadata (all added later; older items simply omit it) ---- */

  /** Turkish words worth learning alongside this one. */
  related?: string[];
  /** Turkish antonyms, where the word has a clean opposite. */
  opposite?: string[];
  /**
   * Fixed pairings the word actually occurs in. Knowing `karar vermek` rather
   * than "karar yapmak" is most of what separates B1 from B2.
   */
  collocations?: string[];
  /** Register, nuance or a trap worth warning about. */
  note?: Bilingual;
  /**
   * Set when the word has a genuine relationship to an Arabic word. Carrying
   * it on the VocabItem rather than in a parallel database is what lets the
   * Arabic-connection feature reuse SRS, favourites, audio, search and
   * exercises without a single new subsystem.
   */
  arabic?: ArabicConnection;

  /**
   * Additional meanings of the SAME Turkish word.
   *
   * `pazar` is Sunday and it is a market. `vize` is a visa and a midterm.
   * `yüz` is a face, a hundred, and the imperative of "swim". These are one
   * word a student learns once, not several words that happen to collide —
   * so they are senses of a single item rather than separate items.
   *
   * The FIRST sense lives in the item's own `ar` / `ku` / `example` fields.
   * This array holds the rest. That keeps every existing item valid, keeps
   * one SRS card per word (which is what a learner wants), and means search
   * can match any sense while the card still shows the word once.
   */
  senses?: VocabSense[];

  /**
   * Editorial review state, per language. Not shown to students — it exists
   * so the teacher panel and the content report can distinguish translations
   * that have been checked by a speaker from ones that have not.
   *
   * Absent means "not yet assessed", which is the honest default for most of
   * the curriculum.
   */
  review?: TranslationReview;

  /**
   * Where the word came INTO Turkish from.
   *
   * Distinct from `arabic`, and deliberately so:
   *
   *   `arabic`  answers "can an Arabic speaker recognise this?" — a teaching
   *             bridge, which includes false friends and pure coincidences.
   *   `origin`  answers "where did this word historically come from?" — a
   *             matter of etymology, true whether or not it helps anyone.
   *
   * A word can carry both (`hükümet`), one (`bahçe` has an origin but no
   * useful Arabic bridge), or neither. They are never merged, because
   * conflating "looks Arabic" with "is Arabic" is the exact error this
   * platform must not make.
   */
  origin?: WordOrigin;
}

/* ------------------------------------------------------------------ */
/* Etymology                                                           */
/* ------------------------------------------------------------------ */

/** The languages modern Turkish actually borrowed from at scale. */
export type OriginLanguage =
  | 'arabic' | 'persian' | 'french' | 'italian' | 'greek'
  | 'latin' | 'english' | 'turkic' | 'other' | 'uncertain';

/**
 * Register — where in the language the word lives.
 *
 * This matters more for Arabic-origin vocabulary than for anything else in
 * the curriculum: the 1930s language reform pushed much of it out of everyday
 * speech and into formal, legal and literary Turkish, so knowing a word is
 * Arabic-derived tells a student very little unless they also know whether
 * anyone still says it.
 */
export type Register =
  | 'everyday' | 'formal' | 'academic' | 'literary' | 'technical' | 'historical';

export interface WordOrigin {
  language: OriginLanguage;
  /** The source word in its own script, when there is one. */
  source?: string;
  /** How the source is read, for a student who knows it. */
  sourcePron?: string;
  /**
   * The Arabic triliteral root, spaced: 'ح ك م'. Only set where the root is
   * confidently identifiable — words that reached Arabic from Greek or
   * Persian (kanun, felsefe, defter) have no Semitic root and must not be
   * given a fabricated one.
   */
  root?: string;
  confidence: 'certain' | 'likely';
  register: Register;
  /** How the word behaves in MODERN Turkish, which is what a student needs. */
  usage?: Bilingual;
  /**
   * Set when students routinely assume the wrong origin. The entry then
   * appears in the dictionary specifically to correct that — `şehir` is
   * Persian, `avukat` is French, and saying so is the point.
   */
  misconception?: Bilingual;
}

/**
 * A secondary meaning of a Turkish word.
 *
 * Deliberately thin: it carries a meaning and, where useful, its own example
 * and register note. Everything structural — level, part of speech, audio,
 * the SRS card — belongs to the word, not the sense.
 */
export interface VocabSense {
  ar: string;
  ku: string;
  /** An example that actually shows THIS sense, not the primary one. */
  example?: Phrase;
  /** When this sense is used: register, field, or the phrase it lives in. */
  usage?: Bilingual;
  /** A trap or nuance specific to this sense. */
  note?: Bilingual;
  /**
   * Some senses sit in a different subject area than the word's primary
   * category — `vize` is travel as a visa and university as a midterm.
   */
  category?: string;
}

export type ReviewState = 'verified' | 'needs-review';

export interface TranslationReview {
  ar?: ReviewState;
  ku?: ReviewState;
  /** Why the flag is set, for whoever picks the review up. */
  note?: string;
}

/* ------------------------------------------------------------------ */
/* Arabic <-> Turkish connections                                      */
/* ------------------------------------------------------------------ */

/**
 * How a Turkish word relates to an Arabic one.
 *
 * The distinction that matters pedagogically is not "looks similar" but
 * "can I trust the similarity". `borrowing` and `direct` are safe to
 * generalise from; `false-friend` is actively dangerous; `surface` is a
 * coincidence and is labelled as one.
 */
export type ArabicRelation =
  /** Arabic speakers recognise it instantly; form and meaning both survived. */
  | 'direct'
  /** Historically borrowed from Arabic, but the form or meaning has moved. */
  | 'borrowing'
  /** The sound is recognisable even though the spelling diverged. */
  | 'pronunciation'
  /** The written forms line up more than the pronunciation does. */
  | 'spelling'
  /** Meaning is close; pronunciation has drifted far enough to obscure it. */
  | 'semantic'
  /** Looks or sounds Arabic but means something else. Always warned about. */
  | 'false-friend';

/** How much weight the etymological claim can bear. */
export type ArabicConfidence =
  /** Well documented in standard Turkish etymological sources. */
  | 'certain'
  /** Widely accepted, though the path or the semantic shift is debated. */
  | 'likely'
  /** Resemblance only. No claim of a shared origin is being made. */
  | 'surface';

export interface ArabicConnection {
  /** The related Arabic word, in Arabic script. */
  ar: string;
  /** How that Arabic word is read, for students who know the root. */
  arPron?: string;
  relation: ArabicRelation;
  confidence: ArabicConfidence;
  /**
   * What the Arabic word means IN ARABIC. Required for false friends, where
   * the whole point is that it differs from the Turkish meaning.
   */
  arMeaning?: Bilingual;
  /** The Sorani form, when the same word also travelled into Kurdish. */
  kuLink?: string;
  /** Why the pairing works, or the trap to avoid. */
  note: Bilingual;
}

/* ------------------------------------------------------------------ */
/* Syllables and pronunciation drills                                  */
/* ------------------------------------------------------------------ */

/** The shape of a Turkish syllable, written in the usual V/C notation. */
export type SyllableShape = 'V' | 'CV' | 'VC' | 'CVC' | 'CVCC' | 'VCC';

export interface SyllableEntry {
  id: string;
  tr: string;
  /** The word split at its syllable boundaries, e.g. ["ki", "tap"]. */
  syllables: string[];
  /** Full pronunciation guide with the stressed syllable in caps. */
  pron: string;
  ar: string;
  ku: string;
  /** Which syllable carries the stress, zero-indexed. */
  stress?: number;
  /** Shape of each syllable, parallel to `syllables`. */
  shapes?: SyllableShape[];
  /** A note about why this word is worth practising. */
  note?: Bilingual;
}

export type SyllableGroupId =
  | 'one' | 'two' | 'three' | 'long' | 'harmony' | 'suffixes'
  | 'special-letters' | 'for-arabic' | 'for-kurdish' | 'minimal-pairs' | 'stress'
  /* Consonant contrasts, and the sound changes suffixes trigger. */
  | 'consonants' | 'softening' | 'sentences'
  /* The eight vowels, the remaining consonants, and how a word grows. */
  | 'vowels' | 'vowel-pairs' | 'consonant-set' | 'building' | 'clusters'
  /* Diagnostics: minimal pairs and the sounds each first language misses. */
  | 'soft-g' | 'minimal-real' | 'arabic-consonants' | 'kurdish-consonants'
  | 'long-stress'
  /* Vowel harmony tested on real words, including the words that break it. */
  | 'harmony-two' | 'harmony-four' | 'harmony-exceptions';

export interface SyllableSection {
  id: SyllableGroupId;
  title: string;
  subtitle: Bilingual;
  /** The teaching point, in both support languages. */
  explain: Bilingual;
  entries: SyllableEntry[];
  /**
   * Contrasting pairs, for the sections whose whole purpose is a contrast
   * a student cannot hear yet.
   */
  pairs?: { a: Phrase; b: Phrase; contrast: Bilingual }[];
}

/* ------------------------------------------------------------------ */
/* Lessons - grammar, sentences, conversation, pronunciation           */
/* ------------------------------------------------------------------ */

export type LessonKind =
  | 'grammar' | 'pronunciation' | 'sentences' | 'conversation'
  | 'alphabet' | 'numbers' | 'vocabulary' | 'reading';

/** A lesson body is a list of blocks. Adding a block type = one renderer case. */
export type LessonBlock =
  /** Explanatory prose, written in Arabic and Kurdish. */
  | { type: 'text'; title?: string; body: Bilingual }
  /** A highlighted rule / tip / warning. */
  | { type: 'note'; tone?: 'tip' | 'warn' | 'rule'; title?: string; body: Bilingual }
  /** Turkish examples with pronunciation, translations and audio. */
  | { type: 'examples'; title?: string; items: Phrase[] }
  /** A reference table - suffix charts, conjugations, case endings. */
  | { type: 'table'; title?: string; headers: string[]; rows: string[][]; caption?: Bilingual }
  /** A conjugation paradigm; each row gets its own audio button. */
  | {
      type: 'conjugation';
      title?: string;
      verb: string;
      rows: { person: string; tr: string; pron: string; ar: string; ku: string }[];
    }
  /** Pulls vocabulary in by id so words live in one place only. */
  | { type: 'vocab'; title?: string; ids: string[] }
  /** A two-speaker dialogue. */
  | {
      type: 'dialogue';
      title?: string;
      lines: { speaker: string; tr: string; pron: string; ar: string; ku: string }[];
    }
  /**
   * A graded reading passage. Paragraphs are separate so each one can be
   * spoken, translated and studied on its own - a wall of Turkish with one
   * translation underneath is not usable at B1+.
   */
  | {
      type: 'passage';
      title?: string;
      /** Optional scene-setting shown above the text. */
      intro?: Bilingual;
      paragraphs: { tr: string; ar: string; ku: string }[];
      /** Words from the passage worth glossing inline. */
      glossary?: { tr: string; pron: string; ar: string; ku: string }[];
    }
  /** A minimal-pair / sound drill used by pronunciation lessons. */
  | {
      type: 'soundpairs';
      title?: string;
      pairs: { a: Phrase; b: Phrase; contrast: Bilingual }[];
    };

export interface Lesson {
  id: string;
  level: LevelId;
  kind: LessonKind;
  /** Turkish title - the primary heading. */
  title: string;
  /** Translated title. */
  titleI18n: Bilingual;
  /** What the student will be able to do after this lesson. */
  objective: Bilingual;
  /** Ordered position within its level. */
  order: number;
  /** Estimated minutes. */
  minutes: number;
  /** Lesson ids that should be finished first (soft guidance). */
  prerequisites?: string[];
  blocks: LessonBlock[];
  exercises: Exercise[];
  /** Unpublished lessons are hidden from students but visible to the teacher. */
  published?: boolean;
  /** Set on lessons created through the admin area. */
  custom?: boolean;
  tags?: string[];
}

/* ------------------------------------------------------------------ */
/* Exercises                                                           */
/* ------------------------------------------------------------------ */

export type ExerciseKind =
  | 'mcq' | 'translate' | 'listening' | 'match'
  | 'order' | 'fill' | 'speak';

interface ExerciseBase {
  id: string;
  /** Optional teaching explanation shown after answering. */
  explain?: Bilingual;
}

/** Multiple choice over arbitrary text. */
export interface McqExercise extends ExerciseBase {
  kind: 'mcq';
  /** Question shown to the student, in both support languages. */
  prompt: Bilingual;
  /** Optional Turkish text shown (and speakable) above the question. */
  tr?: string;
  options: string[];
  answer: number;
  /** When true, options are Turkish and get audio buttons. */
  optionsAreTurkish?: boolean;
}

/** Translation in any of the four directions the curriculum uses. */
export interface TranslateExercise extends ExerciseBase {
  kind: 'translate';
  direction: 'tr-ar' | 'tr-ku' | 'ar-tr' | 'ku-tr';
  /** The text being translated (Turkish for tr-*, Arabic/Kurdish for *-tr). */
  source: string;
  /** Pronunciation of the Turkish side, when Turkish is the source. */
  pron?: string;
  options: string[];
  answer: number;
}

/** Hear Turkish, pick what you heard. The prompt is never shown as text. */
export interface ListeningExercise extends ExerciseBase {
  kind: 'listening';
  /** Turkish text spoken by the audio engine. */
  audio: string;
  options: string[];
  answer: number;
  /** What the options are written in. */
  optionLang: 'tr' | 'ar' | 'ku';
  /** Revealed after answering. */
  reveal?: Phrase;
}

/** Match Turkish words to their translations. */
export interface MatchExercise extends ExerciseBase {
  kind: 'match';
  prompt: Bilingual;
  pairs: { tr: string; ar: string; ku: string }[];
}

/** Arrange scrambled words into a correct Turkish sentence. */
export interface OrderExercise extends ExerciseBase {
  kind: 'order';
  prompt: Bilingual;
  /** The correct sentence. Split on spaces to build the tiles. */
  sentence: string;
  pron?: string;
  ar: string;
  ku: string;
  /** Extra wrong words mixed into the tiles. */
  distractors?: string[];
}

/** Complete the Turkish sentence. Three underscores mark the gap. */
export interface FillExercise extends ExerciseBase {
  kind: 'fill';
  sentence: string;
  answer: string;
  /** When present the student picks; when absent they type. */
  options?: string[];
  ar: string;
  ku: string;
  pron?: string;
}

/** Listen and repeat. Self-assessed. */
export interface SpeakExercise extends ExerciseBase {
  kind: 'speak';
  tr: string;
  pron: string;
  ar: string;
  ku: string;
}

export type Exercise =
  | McqExercise | TranslateExercise | ListeningExercise
  | MatchExercise | OrderExercise | FillExercise | SpeakExercise;

/* ------------------------------------------------------------------ */
/* Levels & sentence packs                                             */
/* ------------------------------------------------------------------ */

export interface LevelMeta {
  id: LevelId;
  code: string;
  name: string;
  nameI18n: Bilingual;
  tagline: Bilingual;
  /** Can-do statements for the level. */
  canDo: Bilingual[];
  /** Tailwind gradient classes for the level card. */
  gradient: string;
  accent: string;
  /** Rough vocabulary target for the level. */
  wordTarget: number;
  hours: number;
}

export interface SentencePack {
  id: string;
  level: LevelId;
  title: string;
  titleI18n: Bilingual;
  /** Function of the pack: asking, refusing, apologising, presenting. */
  focus: Bilingual;
  order: number;
  sentences: Phrase[];
}
