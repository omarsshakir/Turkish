import type {
  ArabicRelation, Exercise, SupportLang, VocabItem,
} from '@/types/content';
import { sample, shuffle } from './utils';

/**
 * Practice built from the Arabic ↔ Turkish connections.
 *
 * Every exercise below is an ordinary `Exercise` in one of the kinds the
 * platform already renders, so `ExerciseRunner` runs these with no changes and
 * the results land in the same progress store as any other practice. There is
 * no second exercise engine — the connections just supply better questions
 * than a generic vocabulary drill can, because they can ask *why* two words
 * are related, not only what they mean.
 *
 * Seven question types, each testing something different:
 *
 *   1. arabic-to-turkish   recognition, the direction a student starts from
 *   2. turkish-to-arabic   production, the harder direction
 *   3. relationship        do you know WHY these are connected?
 *   4. false-friend        the trap, asked directly
 *   5. sentence            the word in use, not in isolation
 *   6. listening           sound → Arabic meaning, no text to lean on
 *   7. recall              type the Turkish from the Arabic
 */

export type ConnectionExerciseKind =
  | 'arabic-to-turkish'
  | 'turkish-to-arabic'
  | 'relationship'
  | 'false-friend'
  | 'sentence'
  | 'listening'
  | 'recall';

export const CONNECTION_KIND_LABEL: Record<
  ConnectionExerciseKind,
  { tr: string; ar: string; ku: string }
> = {
  'arabic-to-turkish': { tr: 'Arapçadan Türkçeye', ar: 'من العربية إلى التركية', ku: 'لە عەرەبییەوە بۆ تورکی' },
  'turkish-to-arabic': { tr: 'Türkçeden Arapçaya', ar: 'من التركية إلى العربية', ku: 'لە تورکییەوە بۆ عەرەبی' },
  relationship: { tr: 'Bağlantı türü', ar: 'نوع الصلة', ku: 'جۆری پەیوەندی' },
  'false-friend': { tr: 'Yalancı eş dost', ar: 'الأصدقاء الكاذبون', ku: 'هاوڕێ درۆزنەکان' },
  sentence: { tr: 'Cümlede kullanım', ar: 'الاستعمال في جملة', ku: 'بەکارهێنان لە ڕستەدا' },
  listening: { tr: 'Dinleme', ar: 'الاستماع', ku: 'گوێگرتن' },
  recall: { tr: 'Hatırlama', ar: 'الاستحضار', ku: 'بیرهێنانەوە' },
};

/** The relation labels a student picks between in a `relationship` question. */
const RELATION_ANSWER: Record<ArabicRelation, string> = {
  direct: 'Arapçadan gelmiş, anlamı da aynı',
  borrowing: 'Arapçadan gelmiş, ama anlamı değişmiş',
  pronunciation: 'Sesi benziyor, yazımı değişmiş',
  spelling: 'Aynı Arapça kökten',
  semantic: 'Anlamı aynı, sesi değişmiş',
  'false-friend': 'Benziyor ama anlamı farklı — yalancı eş dost',
};

let seq = 0;
const uid = (prefix: string) => `conn-${prefix}-${(seq += 1)}`;

/** Words whose connection is safe to teach as a real relationship. */
export function connectionsOf(vocabulary: VocabItem[]): VocabItem[] {
  return vocabulary.filter((v) => v.arabic);
}

/**
 * Picks wrong options from other connections, preferring the same category so
 * the question tests the word rather than the topic.
 */
function distractors(
  target: VocabItem,
  pool: VocabItem[],
  read: (item: VocabItem) => string,
  count = 3,
): string[] {
  const answer = read(target);
  const near = pool.filter(
    (w) => w.id !== target.id && w.category === target.category && read(w) !== answer,
  );
  const far = pool.filter(
    (w) => w.id !== target.id && w.category !== target.category && read(w) !== answer,
  );

  const out: string[] = [];
  for (const item of [...sample(near, count + 2), ...sample(far, count + 2)]) {
    const text = read(item);
    if (text && text !== answer && !out.includes(text)) out.push(text);
    if (out.length === count) break;
  }
  return out;
}

function choice(answer: string, wrong: string[]): { options: string[]; answer: number } {
  const options = shuffle([answer, ...wrong]);
  return { options, answer: options.indexOf(answer) };
}

/* ------------------------------------------------------------------ */
/* 1. Arabic → Turkish                                                 */
/* ------------------------------------------------------------------ */

export function makeArabicToTurkish(word: VocabItem, pool: VocabItem[]): Exercise | null {
  const wrong = distractors(word, pool, (w) => w.tr);
  if (wrong.length < 2) return null;
  const { options, answer } = choice(word.tr, wrong);

  return {
    id: uid('a2t'),
    kind: 'translate',
    direction: 'ar-tr',
    source: word.arabic!.ar,
    options,
    answer,
    explain: word.arabic!.note,
  };
}

/* ------------------------------------------------------------------ */
/* 2. Turkish → Arabic                                                 */
/* ------------------------------------------------------------------ */

export function makeTurkishToArabic(word: VocabItem, pool: VocabItem[]): Exercise | null {
  const wrong = distractors(word, pool, (w) => w.arabic!.ar);
  if (wrong.length < 2) return null;
  const { options, answer } = choice(word.arabic!.ar, wrong);

  return {
    id: uid('t2a'),
    kind: 'translate',
    direction: 'tr-ar',
    source: word.tr,
    pron: word.pron,
    options,
    answer,
    explain: word.arabic!.note,
  };
}

/* ------------------------------------------------------------------ */
/* 3. Why are these two connected?                                     */
/* ------------------------------------------------------------------ */

export function makeRelationship(word: VocabItem, pool: VocabItem[]): Exercise | null {
  const link = word.arabic!;
  const correct = RELATION_ANSWER[link.relation];

  // Distractors are other relation types that actually occur in the data, so
  // the student is choosing between real categories.
  const present = [...new Set(pool.map((w) => w.arabic!.relation))]
    .filter((r) => r !== link.relation);
  const wrong = sample(present, 3).map((r) => RELATION_ANSWER[r]);
  if (wrong.length < 2) return null;

  const { options, answer } = choice(correct, wrong);

  return {
    id: uid('rel'),
    kind: 'mcq',
    prompt: {
      ar: `ما العلاقة بين «${word.tr}» و«${link.ar}»؟`,
      ku: `پەیوەندی نێوان «${word.tr}» و «${link.ar}» چییە؟`,
    },
    tr: word.tr,
    options,
    answer,
    explain: link.note,
  };
}

/* ------------------------------------------------------------------ */
/* 4. The false-friend challenge                                       */
/* ------------------------------------------------------------------ */

/**
 * Asks the question directly: do these two words mean the same thing?
 *
 * Deliberately mixes genuine pairs in with the false friends. A drill made
 * only of false friends teaches "always answer no", which is the opposite of
 * the instinct a student needs.
 */
export function makeFalseFriendCheck(word: VocabItem): Exercise | null {
  const link = word.arabic!;
  const isTrap = link.relation === 'false-friend';

  const YES = 'Evet, aynı anlama geliyorlar';
  const NO = 'Hayır, anlamları farklı';
  const options = [YES, NO];

  return {
    id: uid('ff'),
    kind: 'mcq',
    prompt: {
      ar: `هل «${word.tr}» و«${link.ar}» تحملان المعنى نفسه؟`,
      ku: `ئایا «${word.tr}» و «${link.ar}» هەمان واتایان هەیە؟`,
    },
    tr: word.tr,
    options,
    answer: isTrap ? 1 : 0,
    explain: isTrap && link.arMeaning
      ? {
        ar: `${link.note.ar}\n\nبالعربية «${link.ar}» تعني: ${link.arMeaning.ar}`,
        ku: `${link.note.ku}\n\nبە عەرەبی «${link.ar}» واتە: ${link.arMeaning.ku}`,
      }
      : link.note,
  };
}

/* ------------------------------------------------------------------ */
/* 5. The word in a sentence                                           */
/* ------------------------------------------------------------------ */

export function makeSentenceGap(word: VocabItem, pool: VocabItem[]): Exercise | null {
  if (!word.example) return null;

  // Only blank the word when it appears in its bare form; Turkish suffixes
  // would otherwise make the expected answer something the student has not
  // been taught to produce here.
  const pattern = new RegExp(`\\b${word.tr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
  if (!pattern.test(word.example.tr)) return null;

  const wrong = distractors(word, pool, (w) => w.tr);
  if (wrong.length < 2) return null;
  const { options, answer } = choice(word.tr, wrong);

  return {
    id: uid('gap'),
    kind: 'fill',
    sentence: word.example.tr.replace(pattern, '___'),
    answer: options[answer],
    options,
    ar: word.example.ar,
    ku: word.example.ku,
    pron: word.example.pron,
    explain: {
      ar: `«${word.tr}» من العربية «${word.arabic!.ar}».`,
      ku: `«${word.tr}» لە عەرەبی «${word.arabic!.ar}»ـەوە.`,
    },
  };
}

/* ------------------------------------------------------------------ */
/* 6. Hear the Turkish, pick the Arabic                                */
/* ------------------------------------------------------------------ */

export function makeConnectionListening(word: VocabItem, pool: VocabItem[]): Exercise | null {
  const wrong = distractors(word, pool, (w) => w.arabic!.ar);
  if (wrong.length < 2) return null;
  const { options, answer } = choice(word.arabic!.ar, wrong);

  return {
    id: uid('lis'),
    kind: 'listening',
    audio: word.tr,
    options,
    answer,
    optionLang: 'ar',
    reveal: { tr: word.tr, pron: word.pron, ar: word.ar, ku: word.ku },
    explain: word.arabic!.note,
  };
}

/* ------------------------------------------------------------------ */
/* 7. Type the Turkish                                                 */
/* ------------------------------------------------------------------ */

export function makeRecall(word: VocabItem): Exercise | null {
  // Multi-word entries make a typed answer a spelling test rather than a
  // recall test, so they are skipped.
  if (word.tr.includes(' ')) return null;

  return {
    id: uid('rec'),
    kind: 'fill',
    sentence: `${word.arabic!.ar}  →  ___`,
    answer: word.tr,
    ar: word.ar,
    ku: word.ku,
    pron: word.pron,
    explain: word.arabic!.note,
  };
}

/* ------------------------------------------------------------------ */
/* Session builder                                                     */
/* ------------------------------------------------------------------ */

export interface ConnectionSessionOptions {
  kinds: ConnectionExerciseKind[];
  count: number;
  /** Restrict to one relation category, e.g. only false friends. */
  relation?: ArabicRelation | 'all';
  level?: VocabItem['level'] | 'all';
  lang: SupportLang;
}

/**
 * Builds a mixed session.
 *
 * The false-friend drill is the one case that deliberately reaches outside its
 * own filter: it needs genuine pairs mixed in, or the correct answer is always
 * "no" and the student learns a reflex instead of a distinction.
 */
export function buildConnectionSession(
  vocabulary: VocabItem[],
  opts: ConnectionSessionOptions,
): Exercise[] {
  const all = connectionsOf(vocabulary);

  const eligible = all.filter((w) => {
    if (opts.level && opts.level !== 'all' && w.level !== opts.level) return false;
    if (opts.relation && opts.relation !== 'all' && w.arabic!.relation !== opts.relation) return false;
    return true;
  });

  if (eligible.length < 4) return [];

  const kinds = opts.kinds.length > 0 ? opts.kinds : (['arabic-to-turkish'] as ConnectionExerciseKind[]);
  const out: Exercise[] = [];
  const used = new Set<string>();

  // Round-robin through the chosen kinds so a session is genuinely mixed
  // rather than ten of one type followed by ten of another.
  let guard = 0;
  while (out.length < opts.count && guard < opts.count * 12) {
    guard += 1;
    const kind = kinds[out.length % kinds.length];

    const candidates = kind === 'false-friend'
      // Half traps, half genuine pairs — see the note above.
      ? (out.length % 2 === 0
        ? all.filter((w) => w.arabic!.relation === 'false-friend')
        : all.filter((w) => w.arabic!.relation !== 'false-friend'))
      : eligible;

    const fresh = candidates.filter((w) => !used.has(`${kind}:${w.id}`));
    const [word] = sample(fresh.length > 0 ? fresh : candidates, 1);
    if (!word) continue;

    const exercise = buildOne(kind, word, eligible);
    if (!exercise) continue;

    used.add(`${kind}:${word.id}`);
    out.push(exercise);
  }

  return out;
}

function buildOne(
  kind: ConnectionExerciseKind,
  word: VocabItem,
  pool: VocabItem[],
): Exercise | null {
  switch (kind) {
    case 'arabic-to-turkish': return makeArabicToTurkish(word, pool);
    case 'turkish-to-arabic': return makeTurkishToArabic(word, pool);
    case 'relationship': return makeRelationship(word, pool);
    case 'false-friend': return makeFalseFriendCheck(word);
    case 'sentence': return makeSentenceGap(word, pool);
    case 'listening': return makeConnectionListening(word, pool);
    case 'recall': return makeRecall(word);
    default: return null;
  }
}
