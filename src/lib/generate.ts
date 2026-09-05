/**
 * Exercise generation.
 *
 * The curriculum hand-writes exercises where teaching intent matters (grammar
 * lessons). Everything else - vocabulary drills, listening practice, review
 * sessions - is GENERATED from the vocabulary bank at runtime.
 *
 * That is the difference between a platform with 400 exercises and one with an
 * unlimited supply: adding a word to `content/` automatically adds it to every
 * practice mode, with plausible distractors drawn from its own category.
 */
import type { Exercise, SupportLang, VocabItem } from '@/types/content';
import { sample, shuffle } from './utils';

let seq = 0;
const uid = (prefix: string) => `gen-${prefix}-${(seq += 1)}`;

/**
 * Picks three wrong options for a word. Distractors from the SAME category are
 * preferred - "kırmızı / mavi / yeşil" is a real test, "kırmızı / hastane /
 * dün" is not.
 */
function distractorsFor(
  target: VocabItem,
  pool: VocabItem[],
  read: (item: VocabItem) => string,
  count = 3,
): string[] {
  const answer = read(target);
  const sameCategory = pool.filter(
    (w) => w.id !== target.id && w.category === target.category && read(w) !== answer,
  );
  const others = pool.filter(
    (w) => w.id !== target.id && w.category !== target.category && read(w) !== answer,
  );

  const picked = [
    ...sample(sameCategory, count),
    ...sample(others, count),
  ];

  const unique: string[] = [];
  for (const item of picked) {
    const text = read(item);
    if (!unique.includes(text) && text !== answer) unique.push(text);
    if (unique.length === count) break;
  }
  return unique;
}

function buildChoice(answer: string, wrong: string[]): { options: string[]; answer: number } {
  const options = shuffle([answer, ...wrong]);
  return { options, answer: options.indexOf(answer) };
}

/** Turkish → the student's support language. */
export function makeTranslateFromTurkish(
  word: VocabItem, pool: VocabItem[], lang: SupportLang,
): Exercise | null {
  const read = (w: VocabItem) => (lang === 'ar' ? w.ar : w.ku);
  const wrong = distractorsFor(word, pool, read);
  if (wrong.length < 2) return null;

  const { options, answer } = buildChoice(read(word), wrong);
  return {
    id: uid('t2s'),
    kind: 'translate',
    direction: lang === 'ar' ? 'tr-ar' : 'tr-ku',
    source: word.tr,
    pron: word.pron,
    options,
    answer,
  };
}

/** The student's support language → Turkish. */
export function makeTranslateToTurkish(
  word: VocabItem, pool: VocabItem[], lang: SupportLang,
): Exercise | null {
  const read = (w: VocabItem) => w.tr;
  const wrong = distractorsFor(word, pool, read);
  if (wrong.length < 2) return null;

  const { options, answer } = buildChoice(word.tr, wrong);
  return {
    id: uid('s2t'),
    kind: 'translate',
    direction: lang === 'ar' ? 'ar-tr' : 'ku-tr',
    source: lang === 'ar' ? word.ar : word.ku,
    options,
    answer,
  };
}

/** Hear the Turkish word, pick the translation. */
export function makeListening(
  word: VocabItem, pool: VocabItem[], lang: SupportLang,
): Exercise | null {
  const read = (w: VocabItem) => (lang === 'ar' ? w.ar : w.ku);
  const wrong = distractorsFor(word, pool, read);
  if (wrong.length < 2) return null;

  const { options, answer } = buildChoice(read(word), wrong);
  return {
    id: uid('lis'),
    kind: 'listening',
    audio: word.tr,
    options,
    answer,
    optionLang: lang,
    reveal: { tr: word.tr, pron: word.pron, ar: word.ar, ku: word.ku },
  };
}

/** Hear the Turkish word, pick the Turkish spelling. Trains the ear for ı/i, ö/o, ü/u. */
export function makeListeningSpelling(word: VocabItem, pool: VocabItem[]): Exercise | null {
  const read = (w: VocabItem) => w.tr;
  const wrong = distractorsFor(word, pool, read);
  if (wrong.length < 2) return null;

  const { options, answer } = buildChoice(word.tr, wrong);
  return {
    id: uid('lsp'),
    kind: 'listening',
    audio: word.tr,
    options,
    answer,
    optionLang: 'tr',
    reveal: { tr: word.tr, pron: word.pron, ar: word.ar, ku: word.ku },
  };
}

/** Four Turkish words matched to four translations. */
export function makeMatch(words: VocabItem[], _lang: SupportLang): Exercise | null {
  if (words.length < 3) return null;
  const picked = sample(words, 4);
  return {
    id: uid('mat'),
    kind: 'match',
    prompt: {
      ar: 'طابق كل كلمة تركية بمعناها.',
      ku: 'هەر وشەیەکی تورکی لەگەڵ واتاکەیدا بگونجێنە.',
    },
    pairs: picked.map((w) => ({ tr: w.tr, ar: w.ar, ku: w.ku })),
  };
}

/** Rebuild the word's example sentence from scrambled tiles. */
export function makeOrderFromExample(word: VocabItem): Exercise | null {
  if (!word.example) return null;
  const clean = word.example.tr.replace(/[.!?]$/, '');
  if (clean.split(/\s+/).length < 3) return null;

  return {
    id: uid('ord'),
    kind: 'order',
    prompt: {
      ar: 'رتّب الكلمات لتكوين الجملة التركية الصحيحة.',
      ku: 'وشەکان ڕێک بخە بۆ دروستکردنی ڕستەی تورکیی دروست.',
    },
    sentence: clean,
    pron: word.example.pron,
    ar: word.example.ar,
    ku: word.example.ku,
  };
}

/** Blank out the target word inside its own example sentence. */
export function makeFillFromExample(word: VocabItem, pool: VocabItem[]): Exercise | null {
  if (!word.example) return null;

  // Only works when the headword actually appears in the example.
  const pattern = new RegExp(`\\b${escapeRegex(word.tr)}\\b`, 'i');
  if (!pattern.test(word.example.tr)) return null;

  const sentence = word.example.tr.replace(pattern, '___');
  const wrong = distractorsFor(word, pool, (w) => w.tr, 3);
  if (wrong.length < 2) return null;

  return {
    id: uid('fil'),
    kind: 'fill',
    sentence,
    answer: word.tr,
    options: shuffle([word.tr, ...wrong]),
    ar: word.example.ar,
    ku: word.example.ku,
    pron: word.example.pron,
  };
}

/** Listen and repeat, built from the example sentence or the word itself. */
export function makeSpeak(word: VocabItem): Exercise {
  const source = word.example ?? { tr: word.tr, pron: word.pron, ar: word.ar, ku: word.ku };
  return {
    id: uid('spk'),
    kind: 'speak',
    tr: source.tr,
    pron: source.pron,
    ar: source.ar,
    ku: source.ku,
  };
}

function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ------------------------------------------------------------------ */
/* Session builders                                                    */
/* ------------------------------------------------------------------ */

export type PracticeMode =
  | 'mixed' | 'tr-to-native' | 'native-to-tr' | 'listening'
  | 'matching' | 'sentences' | 'pronunciation';

/**
 * Builds a practice session of `count` exercises from a word pool.
 * Returns fewer than `count` only if the pool cannot support more.
 */
export function buildSession(
  pool: VocabItem[],
  lang: SupportLang,
  mode: PracticeMode,
  count = 10,
): Exercise[] {
  if (pool.length < 4) return [];

  const words = shuffle(pool);
  const out: Exercise[] = [];

  const builders: Array<(w: VocabItem) => Exercise | null> = (() => {
    switch (mode) {
      case 'tr-to-native':
        return [(w) => makeTranslateFromTurkish(w, pool, lang)];
      case 'native-to-tr':
        return [(w) => makeTranslateToTurkish(w, pool, lang)];
      case 'listening':
        return [
          (w) => makeListening(w, pool, lang),
          (w) => makeListeningSpelling(w, pool),
        ];
      case 'sentences':
        return [
          (w) => makeOrderFromExample(w),
          (w) => makeFillFromExample(w, pool),
        ];
      case 'pronunciation':
        return [(w) => makeSpeak(w)];
      case 'matching':
        return [];
      case 'mixed':
      default:
        return [
          (w) => makeTranslateFromTurkish(w, pool, lang),
          (w) => makeTranslateToTurkish(w, pool, lang),
          (w) => makeListening(w, pool, lang),
          (w) => makeFillFromExample(w, pool),
          (w) => makeOrderFromExample(w),
        ];
    }
  })();

  if (mode === 'matching') {
    for (let i = 0; i < count && words.length >= 4; i += 1) {
      const exercise = makeMatch(sample(pool, 8), lang);
      if (exercise) out.push(exercise);
    }
    return out;
  }

  // Round-robin the builders so a mixed session actually mixes.
  let builderIndex = 0;
  for (const word of words) {
    if (out.length >= count) break;
    // Try every builder for this word before giving up on it.
    for (let attempt = 0; attempt < builders.length; attempt += 1) {
      const builder = builders[(builderIndex + attempt) % builders.length];
      const exercise = builder(word);
      if (exercise) {
        out.push(exercise);
        builderIndex += 1;
        break;
      }
    }
  }

  // A mixed session gets one matching round thrown in for variety.
  if (mode === 'mixed' && out.length >= 4) {
    const matching = makeMatch(sample(pool, 8), lang);
    if (matching) out.splice(Math.floor(out.length / 2), 0, matching);
  }

  return out.slice(0, count);
}

/**
 * Review session: prioritises words the student has NOT marked learned, then
 * falls back to learned ones so review never runs dry.
 */
export function buildReviewPool(
  all: VocabItem[],
  learnedIds: string[],
  favoriteIds: string[],
): VocabItem[] {
  const favorites = all.filter((w) => favoriteIds.includes(w.id));
  const unlearned = all.filter((w) => !learnedIds.includes(w.id));
  const learned = all.filter((w) => learnedIds.includes(w.id));
  // Favourites first, then the unfamiliar, then everything else as filler.
  return [...favorites, ...unlearned, ...learned];
}
