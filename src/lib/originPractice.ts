import type { Exercise, VocabItem } from '@/types/content';
import { sample, shuffle } from './utils';

/**
 * Practice built on word origins.
 *
 * Distinct from the connection drills, and testing something different: those
 * ask "what does this mean / can you recognise it", these ask "where did it
 * come from, and which words share its root".
 *
 * Four question types, all in kinds the runner already renders:
 *
 *   1. root-family   given a root, which Turkish word belongs to it?
 *   2. shared-root   given a word, which other word shares its root?
 *   3. origin        which language did this word actually come from?
 *   4. arabic-source given the Arabic source, produce the Turkish
 *
 * Type 3 is the one that matters most. It mixes genuine Arabic borrowings with
 * the Persian and French words students assume are Arabic — because the useful
 * skill is not "recognise Arabic" but "know when you are guessing".
 */

export type OriginExerciseKind = 'root-family' | 'shared-root' | 'origin' | 'arabic-source';

export const ORIGIN_KIND_LABEL: Record<
  OriginExerciseKind,
  { tr: string; ar: string; ku: string }
> = {
  'root-family': { tr: 'Kökten kelimeye', ar: 'من الجذر إلى الكلمة', ku: 'لە ڕەگەوە بۆ وشە' },
  'shared-root': { tr: 'Ortak kök', ar: 'الجذر المشترك', ku: 'ڕەگی هاوبەش' },
  origin: { tr: 'Kelimenin kökeni', ar: 'أصل الكلمة', ku: 'ڕەچەڵەکی وشە' },
  'arabic-source': { tr: 'Arapçadan Türkçeye', ar: 'من العربية إلى التركية', ku: 'لە عەرەبییەوە بۆ تورکی' },
};

/** Language names as a student picks between them. */
const LANGUAGE_OPTION: Record<string, string> = {
  arabic: 'Arapça',
  persian: 'Farsça',
  french: 'Fransızca',
  italian: 'İtalyanca',
  greek: 'Yunanca',
  latin: 'Latince',
  english: 'İngilizce',
  turkic: 'Öz Türkçe',
  other: 'Başka bir dil',
  uncertain: 'Belirsiz',
};

let seq = 0;
const uid = (prefix: string) => `orig-${prefix}-${(seq += 1)}`;

export function originWords(vocabulary: VocabItem[]): VocabItem[] {
  return vocabulary.filter((v) => v.origin);
}

/** Roots carrying more than one word — the only ones a family question works on. */
export function rootFamilies(vocabulary: VocabItem[]): Map<string, VocabItem[]> {
  const byRoot = new Map<string, VocabItem[]>();
  for (const item of vocabulary) {
    const root = item.origin?.root;
    if (!root || item.origin!.language !== 'arabic') continue;
    if (!byRoot.has(root)) byRoot.set(root, []);
    byRoot.get(root)!.push(item);
  }
  for (const [root, items] of byRoot) {
    if (items.length < 2) byRoot.delete(root);
  }
  return byRoot;
}

function choice(answer: string, wrong: string[]) {
  const options = shuffle([answer, ...wrong]);
  return { options, answer: options.indexOf(answer) };
}

/* ------------------------------------------------------------------ */
/* 1. Given the root, pick the word that belongs to it                 */
/* ------------------------------------------------------------------ */

export function makeRootFamily(
  root: string,
  families: Map<string, VocabItem[]>,
): Exercise | null {
  const members = families.get(root);
  if (!members || members.length === 0) return null;

  const [target] = sample(members, 1);
  if (!target) return null;

  // Distractors come from OTHER roots, so the question tests the root and not
  // general vocabulary knowledge.
  const others = [...families.entries()]
    .filter(([r]) => r !== root)
    .flatMap(([, items]) => items);
  const wrong = sample(others, 3).map((w) => w.tr).filter((x) => x !== target.tr);
  if (wrong.length < 2) return null;

  const { options, answer } = choice(target.tr, wrong);

  return {
    id: uid('fam'),
    kind: 'mcq',
    prompt: {
      ar: `أيّ كلمة تركية تنتمي إلى الجذر ${root}؟`,
      ku: `کام وشەی تورکی سەر بە ڕەگی ${root}ـە؟`,
    },
    tr: root,
    options,
    answer,
    optionsAreTurkish: true,
    explain: {
      ar: `${target.tr} من ${target.origin!.source} — الجذر ${root}. من الجذر نفسه أيضاً: ${members.filter((m) => m.tr !== target.tr).map((m) => m.tr).join('، ')}.`,
      ku: `${target.tr} لە ${target.origin!.source}ـەوە — ڕەگی ${root}. لە هەمان ڕەگ: ${members.filter((m) => m.tr !== target.tr).map((m) => m.tr).join('، ')}.`,
    },
  };
}

/* ------------------------------------------------------------------ */
/* 2. Given a word, which other word shares its root?                  */
/* ------------------------------------------------------------------ */

export function makeSharedRoot(
  word: VocabItem,
  families: Map<string, VocabItem[]>,
): Exercise | null {
  const root = word.origin?.root;
  if (!root) return null;
  const members = families.get(root);
  if (!members || members.length < 2) return null;

  const siblings = members.filter((m) => m.id !== word.id);
  const [answerWord] = sample(siblings, 1);
  if (!answerWord) return null;

  const others = [...families.entries()]
    .filter(([r]) => r !== root)
    .flatMap(([, items]) => items);
  const wrong = sample(others, 3).map((w) => w.tr).filter((x) => x !== answerWord.tr);
  if (wrong.length < 2) return null;

  const { options, answer } = choice(answerWord.tr, wrong);

  return {
    id: uid('shr'),
    kind: 'mcq',
    prompt: {
      ar: `أيّ كلمة تشترك مع «${word.tr}» في الجذر العربي؟`,
      ku: `کام وشە لەگەڵ «${word.tr}» ڕەگی عەرەبی هاوبەشە؟`,
    },
    tr: word.tr,
    options,
    answer,
    optionsAreTurkish: true,
    explain: {
      ar: `كلتاهما من الجذر ${root}: ${word.tr} (${word.origin!.source}) و${answerWord.tr} (${answerWord.origin!.source}).`,
      ku: `هەردووکیان لە ڕەگی ${root}: ${word.tr} و ${answerWord.tr}.`,
    },
  };
}

/* ------------------------------------------------------------------ */
/* 3. Where did this word actually come from?                          */
/* ------------------------------------------------------------------ */

/**
 * The most valuable question on the page.
 *
 * The candidate pool deliberately mixes Arabic borrowings with the Persian and
 * French words students assume are Arabic. A drill made only of Arabic words
 * teaches "always answer Arabic", which is exactly the reflex that produces
 * wrong guesses.
 */
export function makeOriginQuestion(word: VocabItem): Exercise | null {
  const o = word.origin;
  if (!o) return null;

  const correct = LANGUAGE_OPTION[o.language];
  if (!correct) return null;

  const pool = ['Arapça', 'Farsça', 'Fransızca', 'Öz Türkçe', 'İtalyanca', 'Yunanca'];
  const wrong = shuffle(pool.filter((x) => x !== correct)).slice(0, 3);
  const { options, answer } = choice(correct, wrong);

  return {
    id: uid('org'),
    kind: 'mcq',
    prompt: {
      ar: `من أيّ لغة دخلت كلمة «${word.tr}» إلى التركية؟`,
      ku: `وشەی «${word.tr}» لە کام زمانەوە چووەتە ناو تورکییەوە؟`,
    },
    tr: word.tr,
    options,
    answer,
    explain: o.misconception ?? {
      ar: `${word.tr} من ${LANGUAGE_OPTION[o.language]}${o.source ? ` — ${o.source}` : ''}${o.root ? `، الجذر ${o.root}` : ''}.`,
      ku: `${word.tr} لە ${LANGUAGE_OPTION[o.language]}ـەوە${o.source ? ` — ${o.source}` : ''}${o.root ? `، ڕەگی ${o.root}` : ''}.`,
    },
  };
}

/* ------------------------------------------------------------------ */
/* 4. Given the Arabic source, produce the Turkish                     */
/* ------------------------------------------------------------------ */

export function makeArabicSource(word: VocabItem, pool: VocabItem[]): Exercise | null {
  const source = word.origin?.source;
  if (!source || word.origin!.language !== 'arabic') return null;

  const wrong = sample(pool.filter((w) => w.id !== word.id), 3)
    .map((w) => w.tr)
    .filter((x) => x !== word.tr);
  if (wrong.length < 2) return null;

  const { options, answer } = choice(word.tr, wrong);

  return {
    id: uid('src'),
    kind: 'translate',
    direction: 'ar-tr',
    source,
    options,
    answer,
    explain: word.origin!.usage ?? {
      ar: `${source} ← ${word.tr}${word.origin!.root ? ` (الجذر ${word.origin!.root})` : ''}.`,
      ku: `${source} ← ${word.tr}${word.origin!.root ? ` (ڕەگی ${word.origin!.root})` : ''}.`,
    },
  };
}

/* ------------------------------------------------------------------ */
/* Session builder                                                     */
/* ------------------------------------------------------------------ */

export interface OriginSessionOptions {
  kinds: OriginExerciseKind[];
  count: number;
  level?: VocabItem['level'] | 'all';
}

export function buildOriginSession(
  vocabulary: VocabItem[],
  opts: OriginSessionOptions,
): Exercise[] {
  const all = originWords(vocabulary);
  const families = rootFamilies(vocabulary);
  const roots = [...families.keys()];

  const arabicOnly = all.filter((w) => w.origin!.language === 'arabic');
  const eligible = opts.level && opts.level !== 'all'
    ? arabicOnly.filter((w) => w.level === opts.level)
    : arabicOnly;

  if (eligible.length < 4) return [];

  const kinds = opts.kinds.length > 0 ? opts.kinds : (['origin'] as OriginExerciseKind[]);
  const out: Exercise[] = [];
  const used = new Set<string>();

  let guard = 0;
  while (out.length < opts.count && guard < opts.count * 12) {
    guard += 1;
    const kind = kinds[out.length % kinds.length];

    let exercise: Exercise | null = null;

    if (kind === 'root-family') {
      const [root] = sample(roots.filter((r) => !used.has(`fam:${r}`)), 1);
      if (root) {
        exercise = makeRootFamily(root, families);
        used.add(`fam:${root}`);
      }
    } else if (kind === 'shared-root') {
      const withRoot = eligible.filter(
        (w) => w.origin!.root && families.has(w.origin!.root!) && !used.has(`shr:${w.id}`),
      );
      const [word] = sample(withRoot, 1);
      if (word) {
        exercise = makeSharedRoot(word, families);
        used.add(`shr:${word.id}`);
      }
    } else if (kind === 'origin') {
      // Half genuine Arabic, half the words commonly mistaken for it.
      const myths = all.filter((w) => w.origin!.language !== 'arabic');
      const source = out.length % 2 === 0 && myths.length > 0 ? myths : eligible;
      const fresh = source.filter((w) => !used.has(`org:${w.id}`));
      const [word] = sample(fresh.length > 0 ? fresh : source, 1);
      if (word) {
        exercise = makeOriginQuestion(word);
        used.add(`org:${word.id}`);
      }
    } else {
      const fresh = eligible.filter((w) => !used.has(`src:${w.id}`));
      const [word] = sample(fresh.length > 0 ? fresh : eligible, 1);
      if (word) {
        exercise = makeArabicSource(word, eligible);
        used.add(`src:${word.id}`);
      }
    }

    if (exercise) out.push(exercise);
  }

  return out;
}
