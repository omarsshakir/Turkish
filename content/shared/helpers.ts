/**
 * Compact constructors for content authoring.
 *
 * Writing 900 vocabulary items as full object literals would be unreadable, so
 * the content files call these tiny helpers instead. They are pure functions -
 * everything is still plain data by the time the app sees it.
 */
import type {
  ArabicConfidence, ArabicConnection, ArabicRelation, Bilingual, Exercise,
  LevelId, NumberEntry, NumberGroup, PartOfSpeech, Phrase, SyllableEntry,
  SyllableShape, TranslationReview, VocabItem, VocabSense,
} from '@/types/content';

/** Bilingual string: b(arabic, kurdish, english?) */
export const b = (ar: string, ku: string, en?: string): Bilingual => ({ ar, ku, en });

/** Turkish phrase with pronunciation + both translations. */
export const p = (tr: string, pron: string, ar: string, ku: string): Phrase => ({ tr, pron, ar, ku });

let vocabSeq = 0;

/**
 * Vocabulary item.
 * w(turkish, pronunciation, arabic, kurdish, [exampleTr, examplePron, exampleAr, exampleKu])
 * Category, level and part of speech are supplied by `pack()` below.
 */
export interface RawWord {
  tr: string; pron: string; ar: string; ku: string;
  pos?: PartOfSpeech;
  ex?: [string, string, string, string];
  /** Extra meanings of the same word. See `sense()`. */
  senses?: VocabSense[];
  related?: string[];
  opposite?: string[];
  collocations?: string[];
  note?: Bilingual;
  review?: TranslationReview;
}

export function w(
  tr: string, pron: string, ar: string, ku: string,
  ex?: [string, string, string, string],
  pos?: PartOfSpeech,
): RawWord {
  return { tr, pron, ar, ku, ex, pos };
}

/** Turn a list of raw words into fully-formed VocabItems for one category. */
export function pack(
  category: string,
  level: LevelId,
  defaultPos: PartOfSpeech,
  words: RawWord[],
): VocabItem[] {
  return words.map((it) => {
    vocabSeq += 1;
    return {
      id: `${category}-${slug(it.tr)}-${vocabSeq}`,
      tr: it.tr,
      pron: it.pron,
      ar: it.ar,
      ku: it.ku,
      category,
      level,
      pos: it.pos ?? defaultPos,
      example: it.ex ? { tr: it.ex[0], pron: it.ex[1], ar: it.ex[2], ku: it.ex[3] } : undefined,
      senses: it.senses,
      related: it.related,
      opposite: it.opposite,
      collocations: it.collocations,
      note: it.note,
      review: it.review,
    } satisfies VocabItem;
  });
}

/**
 * A secondary meaning of a word.
 * sense(arabic, kurdish, [exampleTr, examplePron, exampleAr, exampleKu], opts)
 *
 * The example is worth supplying whenever the sense is not obvious from the
 * translation alone — which, for a second meaning, is nearly always.
 */
export function sense(
  ar: string,
  ku: string,
  ex?: [string, string, string, string],
  opts: { usage?: Bilingual; note?: Bilingual; category?: string } = {},
): VocabSense {
  return {
    ar,
    ku,
    example: ex ? { tr: ex[0], pron: ex[1], ar: ex[2], ku: ex[3] } : undefined,
    usage: opts.usage,
    note: opts.note,
    category: opts.category,
  };
}

/**
 * Marks a translation as needing a native speaker's eye.
 *
 * Used on technical registers — legal, medical, scholarly — where the Turkish
 * and the Arabic are solid but the Sorani is specialist terminology written
 * without a native check. Flagging it is the honest alternative to presenting
 * it as authoritative.
 */
export function needsReview(note: string, langs: ('ar' | 'ku')[] = ['ku']): TranslationReview {
  const out: TranslationReview = { note };
  for (const lang of langs) out[lang] = 'needs-review';
  return out;
}

/** Number entry: n(figure, turkish, pronunciation, arabic, kurdish) */
export function numbers(group: NumberGroup, rows: [string, string, string, string, string][]): NumberEntry[] {
  return rows.map(([figure, tr, pron, ar, ku], i) => ({
    id: `${group}-${i}`,
    figure, tr, pron, ar, ku, group,
  }));
}

/** URL-safe slug that keeps Turkish letters distinguishable. */
export function slug(input: string): string {
  const map: Record<string, string> = {
    ç: 'c', Ç: 'c', ğ: 'g', Ğ: 'g', ı: 'i', İ: 'i',
    ö: 'o', Ö: 'o', ş: 's', Ş: 's', ü: 'u', Ü: 'u',
  };
  return input
    .split('')
    .map((ch) => map[ch] ?? ch)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* ---------------- exercise constructors ---------------- */

let exSeq = 0;
const nextId = (prefix: string) => `${prefix}-${(exSeq += 1)}`;

/** Multiple choice. */
export function mcq(
  prompt: Bilingual, options: string[], answer: number,
  opts: { tr?: string; turkishOptions?: boolean; explain?: Bilingual } = {},
): Exercise {
  return {
    id: nextId('mcq'), kind: 'mcq', prompt, options, answer,
    tr: opts.tr, optionsAreTurkish: opts.turkishOptions, explain: opts.explain,
  };
}

/** Translation drill in one of four directions. */
export function translate(
  direction: 'tr-ar' | 'tr-ku' | 'ar-tr' | 'ku-tr',
  source: string, options: string[], answer: number,
  opts: { pron?: string; explain?: Bilingual } = {},
): Exercise {
  return {
    id: nextId('tr'), kind: 'translate', direction, source, options, answer,
    pron: opts.pron, explain: opts.explain,
  };
}

/** Listen then choose. */
export function listening(
  audio: string, options: string[], answer: number,
  optionLang: 'tr' | 'ar' | 'ku' = 'tr',
  reveal?: Phrase,
): Exercise {
  return { id: nextId('lis'), kind: 'listening', audio, options, answer, optionLang, reveal };
}

/** Match Turkish to translations. */
export function match(prompt: Bilingual, pairs: { tr: string; ar: string; ku: string }[]): Exercise {
  return { id: nextId('mat'), kind: 'match', prompt, pairs };
}

/** Word-order / sentence construction. */
export function order(
  prompt: Bilingual, sentence: string, ar: string, ku: string,
  opts: { pron?: string; distractors?: string[]; explain?: Bilingual } = {},
): Exercise {
  return {
    id: nextId('ord'), kind: 'order', prompt, sentence, ar, ku,
    pron: opts.pron, distractors: opts.distractors, explain: opts.explain,
  };
}

/** Fill in the blank. Use three underscores in `sentence` for the gap. */
export function fill(
  sentence: string, answer: string, ar: string, ku: string,
  opts: { options?: string[]; pron?: string; explain?: Bilingual } = {},
): Exercise {
  return {
    id: nextId('fil'), kind: 'fill', sentence, answer, ar, ku,
    options: opts.options, pron: opts.pron, explain: opts.explain,
  };
}

/** Listen-and-repeat. */
export function speak(tr: string, pron: string, ar: string, ku: string): Exercise {
  return { id: nextId('spk'), kind: 'speak', tr, pron, ar, ku };
}

/* ------------------------------------------------------------------ */
/* Arabic connections                                                  */
/* ------------------------------------------------------------------ */

/**
 * An Arabic connection, attached to a Turkish word.
 *
 * These are authored as a map keyed by the Turkish word and applied over the
 * whole vocabulary in `content/index.ts`, rather than as separate records.
 * That matters for two reasons:
 *
 *   1. Half of these words are already in the curriculum. A parallel database
 *      would duplicate them; decoration cannot.
 *   2. The moment a connection lives on an ordinary `VocabItem`, it inherits
 *      SRS, favourites, audio, search, exercises and progress tracking with
 *      no new subsystem behind it.
 *
 * `conn(arabicWord, relation, confidence, extras)`
 */
export function conn(
  ar: string,
  relation: ArabicRelation,
  confidence: ArabicConfidence,
  opts: {
    arPron?: string;
    /** What the Arabic word means IN ARABIC. Required for false friends. */
    means?: Bilingual;
    /** Why the pairing works, or the trap it hides. */
    why?: Bilingual;
    /** The Sorani form, when the word travelled into Kurdish too. */
    kuLink?: string;
  } = {},
): ArabicConnection {
  return {
    ar,
    arPron: opts.arPron,
    relation,
    confidence,
    arMeaning: opts.means,
    kuLink: opts.kuLink,
    note: opts.why ?? RELATION_NOTE[relation],
  };
}

/**
 * Fallback explanation per relation type. Used when an entry has nothing
 * specific to add beyond its category — a short accurate sentence beats a
 * padded invented etymology.
 */
const RELATION_NOTE: Record<ArabicRelation, Bilingual> = {
  direct: b(
    'كلمة عربية دخلت التركية وحافظت على شكلها ومعناها.',
    'وشەیەکی عەرەبییە چووەتە ناو تورکییەوە و شێوە و واتاکەی پاراستووە.',
  ),
  borrowing: b(
    'أصلها عربي، لكن النطق أو المعنى تغيّر في التركية.',
    'ڕەگی عەرەبییە، بەڵام دەربڕین یان واتاکەی لە تورکیدا گۆڕاوە.',
  ),
  pronunciation: b(
    'النطق ما زال قريباً من العربية رغم اختلاف الكتابة.',
    'دەربڕین هێشتا لە عەرەبی نزیکە، هەرچەندە نووسین جیاوازە.',
  ),
  spelling: b(
    'الشكل المكتوب أقرب من النطق.',
    'شێوەی نووسراو لە دەربڕین نزیکترە.',
  ),
  semantic: b(
    'المعنى قريب، لكن النطق ابتعد كثيراً.',
    'واتا نزیکە، بەڵام دەربڕین زۆر دوور کەوتووەتەوە.',
  ),
  'false-friend': b(
    '⚠️ تشبه العربية لكن معناها مختلف. انتبه.',
    '⚠️ لە عەرەبی دەچێت بەڵام واتاکەی جیاوازە. ئاگاداربە.',
  ),
};

/* ------------------------------------------------------------------ */
/* Syllables                                                           */
/* ------------------------------------------------------------------ */

/**
 * Syllable entry.
 * syl(turkish, "ki|tap", pronunciation, arabic, kurdish, stressIndex?)
 *
 * The syllable string uses `|` as the break so the data reads the way a
 * teacher would write it on a board.
 */
let sylSeq = 0;

export function syl(
  tr: string, split: string, pron: string, ar: string, ku: string,
  stress?: number, note?: Bilingual,
): SyllableEntry {
  const syllables = split.split('|').map((s) => s.trim()).filter(Boolean);
  sylSeq += 1;
  // The same word can legitimately appear in more than one drill - `kız` is
  // both a special-letter example and an Arabic-speaker minimal pair - so the
  // id carries a sequence rather than only the word.
  return {
    id: `syl-${slug(tr)}-${sylSeq}`,
    tr,
    syllables,
    pron,
    ar,
    ku,
    stress: stress ?? syllables.length - 1,
    shapes: syllables.map(shapeOf),
    note,
  };
}

const VOWELS = 'aeıioöuüAEIİOÖUÜ';

/** Classifies a syllable as CV, CVC and so on. */
function shapeOf(syllable: string): SyllableShape {
  const pattern = [...syllable]
    .map((ch) => (VOWELS.includes(ch) ? 'V' : 'C'))
    .join('')
    // Turkish has no long vowels in native words, so a doubled V in the
    // pattern means a digraph we do not need to distinguish here.
    .replace(/V+/, 'V');
  return (['V', 'CV', 'VC', 'CVC', 'CVCC', 'VCC'].includes(pattern)
    ? pattern
    : 'CVC') as SyllableShape;
}
