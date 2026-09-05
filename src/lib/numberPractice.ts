import type { Exercise, NumberSection } from '@/types/content';
import { sample, shuffle } from './utils';

/**
 * Number practice, generated from the number sections.
 *
 * Three question types, each testing a different direction:
 *
 *   write   see 245, produce `iki yüz kırk beş`
 *   read    see `bin iki yüz elli`, produce 1.250
 *   context the number inside a real sentence
 *
 * Like the connection drills, these are ordinary `Exercise` objects in kinds
 * the runner already renders, so nothing here re-implements scoring or audio.
 *
 * The Turkish spelling is generated rather than authored: Turkish numerals are
 * completely regular above twenty, so a table plus concatenation is both
 * shorter and more reliable than a hand-written list — and it lets the drill
 * ask about any number, not only the ones somebody typed out.
 */

export type NumberExerciseKind = 'write' | 'read' | 'listen' | 'date' | 'clock' | 'context';

export const NUMBER_KIND_LABEL: Record<NumberExerciseKind, { tr: string; ar: string; ku: string }> = {
  write: { tr: 'Rakamı yaz', ar: 'اكتب الرقم بالتركية', ku: 'ژمارەکە بنووسە' },
  read: { tr: 'Türkçeyi oku', ar: 'اقرأ التركية كرقم', ku: 'تورکییەکە بخوێنەوە' },
  listen: { tr: 'Duyduğun sayı', ar: 'الرقم الذي تسمعه', ku: 'ئەو ژمارەیەی دەیبیستیت' },
  date: { tr: 'Tarih okuma', ar: 'قراءة التاريخ', ku: 'خوێندنەوەی ڕێکەوت' },
  clock: { tr: 'Saat okuma', ar: 'قراءة الساعة', ku: 'خوێندنەوەی کاتژمێر' },
  context: { tr: 'Cümlede sayı', ar: 'الرقم في جملة', ku: 'ژمارە لە ڕستەدا' },
};

const UNITS = ['', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
const TENS = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];

/**
 * Turkish numeral spelling, 0 – 999,999,999.
 *
 * Two irregularities the rules have to carry, and they are the two a learner
 * gets wrong: `bir yüz` and `bir bin` do not exist — it is `yüz` and `bin` on
 * their own — while `bir milyon` DOES take the `bir`.
 */
export function spellTurkishNumber(n: number): string {
  if (!Number.isFinite(n) || n < 0) return '';
  if (n === 0) return 'sıfır';

  const parts: string[] = [];

  const group = (value: number): string => {
    const out: string[] = [];
    const hundreds = Math.floor(value / 100);
    const rest = value % 100;
    if (hundreds > 0) out.push(hundreds === 1 ? 'yüz' : `${UNITS[hundreds]} yüz`);
    const tens = Math.floor(rest / 10);
    const units = rest % 10;
    if (tens > 0) out.push(TENS[tens]);
    if (units > 0) out.push(UNITS[units]);
    return out.join(' ');
  };

  const millions = Math.floor(n / 1_000_000);
  const thousands = Math.floor((n % 1_000_000) / 1000);
  const remainder = n % 1000;

  if (millions > 0) parts.push(`${group(millions)} milyon`);
  if (thousands > 0) parts.push(thousands === 1 ? 'bin' : `${group(thousands)} bin`);
  if (remainder > 0) parts.push(group(remainder));

  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

/** Turkish groups thousands with a full stop, not a comma. */
export function formatTurkishFigure(n: number): string {
  return n.toLocaleString('tr-TR');
}

let seq = 0;
const uid = (prefix: string) => `num-${prefix}-${(seq += 1)}`;

/** Numbers worth asking about at each level of difficulty. */
function pickNumbers(count: number, max: number): number[] {
  const out = new Set<number>();
  let guard = 0;
  while (out.size < count && guard < count * 20) {
    guard += 1;
    // Bias towards the awkward shapes: numbers with a zero in the middle, and
    // numbers just over a boundary, are where learners actually stumble.
    const roll = Math.random();
    let n: number;
    if (roll < 0.3) n = Math.floor(Math.random() * Math.min(max, 100));
    else if (roll < 0.6) n = Math.floor(Math.random() * Math.min(max, 1000));
    else n = Math.floor(Math.random() * max);
    if (n > 0) out.add(n);
  }
  return [...out];
}

function choice(answer: string, wrong: string[]) {
  const options = shuffle([answer, ...wrong]);
  return { options, answer: options.indexOf(answer) };
}

/** See the figure, choose the Turkish. */
export function makeWriteNumber(n: number, max: number): Exercise {
  const answer = spellTurkishNumber(n);
  // Distractors are near misses — a digit swapped, a place value shifted —
  // because "iki yüz kırk beş" versus "beş yüz" tests nothing.
  const nearby = [
    n + (n < 20 ? 1 : 10),
    Math.max(1, n - (n < 20 ? 2 : 100)),
    n < 100 ? n * 2 : Math.floor(n / 10) * 10 + ((n % 10) + 1) % 10,
  ]
    .filter((x) => x > 0 && x !== n && x <= max)
    .map(spellTurkishNumber)
    .filter((x, i, arr) => x && x !== answer && arr.indexOf(x) === i);

  const { options, answer: index } = choice(answer, nearby.slice(0, 3));

  return {
    id: uid('write'),
    kind: 'mcq',
    prompt: {
      ar: `كيف تُكتب ${formatTurkishFigure(n)} بالتركية؟`,
      ku: `${formatTurkishFigure(n)} چۆن بە تورکی دەنووسرێت؟`,
    },
    tr: formatTurkishFigure(n),
    options,
    answer: index,
    optionsAreTurkish: true,
  };
}

/** Hear or read the Turkish, choose the figure. */
export function makeReadNumber(n: number, max: number): Exercise {
  const answer = formatTurkishFigure(n);
  const nearby = [
    n * 10 <= max ? n * 10 : Math.floor(n / 10),
    n + (n < 100 ? 1 : 100),
    Math.max(1, n - (n < 100 ? 1 : 10)),
  ]
    .filter((x) => x > 0 && x !== n)
    .map(formatTurkishFigure)
    .filter((x, i, arr) => x !== answer && arr.indexOf(x) === i);

  const { options, answer: index } = choice(answer, nearby.slice(0, 3));

  return {
    id: uid('read'),
    kind: 'mcq',
    prompt: {
      ar: 'ما هذا الرقم؟',
      ku: 'ئەم ژمارەیە چییە؟',
    },
    tr: spellTurkishNumber(n),
    options,
    answer: index,
  };
}

/**
 * The number inside a sentence, drawn from the worked examples the number
 * sections already carry. This is the only one of the three that is authored
 * rather than generated, because a realistic sentence cannot be.
 */
export function makeNumberContext(sections: NumberSection[]): Exercise | null {
  const withExamples = sections.filter((s) => (s.examples?.length ?? 0) > 0);
  const [section] = sample(withExamples, 1);
  if (!section?.examples) return null;

  const [example] = sample(section.examples, 1);
  if (!example) return null;

  // Blank the first Turkish numeral word in the sentence.
  const numeralWords = [
    ...UNITS.slice(1), ...TENS.slice(1),
    'yüz', 'bin', 'milyon', 'buçuk', 'yarım', 'sıfır', 'yüzde',
  ];
  const words = example.tr.split(/\s+/);
  const index = words.findIndex((word) => numeralWords.includes(
    word.toLocaleLowerCase('tr-TR').replace(/[^a-zçğıioöşü]/gi, ''),
  ));
  if (index < 0) return null;

  const target = words[index].replace(/[^a-zA-ZçÇğĞıIiİoOöÖşŞuUüÜ]/g, '');
  const wrong = shuffle(numeralWords.filter((x) => x !== target.toLocaleLowerCase('tr-TR')))
    .slice(0, 3);
  const { options, answer } = choice(target, wrong);

  return {
    id: uid('ctx'),
    kind: 'fill',
    sentence: words.map((word, i) => (i === index ? '___' : word)).join(' '),
    answer: options[answer],
    options,
    ar: example.ar,
    ku: example.ku,
    pron: example.pron,
  };
}

/* ------------------------------------------------------------------ */
/* Listening: hear the Turkish, pick the figure                        */
/* ------------------------------------------------------------------ */

export function makeListenNumber(n: number): Exercise {
  const answer = formatTurkishFigure(n);
  const nearby = [
    n < 1000 ? n * 10 : Math.floor(n / 10),
    n + (n < 100 ? 1 : 100),
    Math.max(1, n - (n < 100 ? 2 : 10)),
  ]
    .filter((x) => x > 0 && x !== n)
    .map(formatTurkishFigure)
    .filter((x, i, arr) => x !== answer && arr.indexOf(x) === i);

  const { options, answer: index } = choice(answer, nearby.slice(0, 3));

  return {
    id: uid('listen'),
    kind: 'listening',
    audio: spellTurkishNumber(n),
    options,
    answer: index,
    // Options are digits, so no language tag applies cleanly; Turkish is the
    // closest and keeps the audio button on the reveal.
    optionLang: 'tr',
    reveal: {
      tr: spellTurkishNumber(n),
      pron: '',
      ar: formatTurkishFigure(n),
      ku: formatTurkishFigure(n),
    },
  };
}

/* ------------------------------------------------------------------ */
/* Dates                                                               */
/* ------------------------------------------------------------------ */

const MONTHS = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];

/**
 * Turkish dates read day–month–year, with the day as a plain cardinal:
 * `15 Mayıs 2026` is "on beş Mayıs iki bin yirmi altı". No ordinal, no
 * preposition — which is simpler than Arabic and catches students out for
 * being simpler than they expect.
 */
export function spellTurkishDate(day: number, month: number, year: number): string {
  return `${spellTurkishNumber(day)} ${MONTHS[month - 1]} ${spellTurkishNumber(year)}`;
}

export function makeDateQuestion(): Exercise {
  const day = 1 + Math.floor(Math.random() * 28);
  const month = 1 + Math.floor(Math.random() * 12);
  const year = 1990 + Math.floor(Math.random() * 40);

  const spoken = spellTurkishDate(day, month, year);
  const answer = `${day} ${MONTHS[month - 1]} ${year}`;

  // Distractors shift exactly one component, so the question tests reading
  // rather than elimination.
  const wrong = [
    `${day} ${MONTHS[month % 12]} ${year}`,
    `${(day % 28) + 1} ${MONTHS[month - 1]} ${year}`,
    `${day} ${MONTHS[month - 1]} ${year + 1}`,
  ].filter((x) => x !== answer);

  const { options, answer: index } = choice(answer, wrong.slice(0, 3));

  return {
    id: uid('date'),
    kind: 'mcq',
    prompt: {
      ar: 'ما هذا التاريخ؟',
      ku: 'ئەم ڕێکەوتە چییە؟',
    },
    tr: spoken,
    options,
    answer: index,
    explain: {
      ar: 'التاريخ التركي: اليوم بعدد عادي، ثم الشهر، ثم السنة كاملة.',
      ku: 'ڕێکەوتی تورکی: ڕۆژ بە ژمارەی ئاسایی، پاشان مانگ، پاشان ساڵی تەواو.',
    },
  };
}

/* ------------------------------------------------------------------ */
/* Clock times                                                         */
/* ------------------------------------------------------------------ */

/**
 * Turkish clock time, in the form people actually say it.
 *
 * Three shapes cover almost everything, and the last two are what a learner
 * gets wrong:
 *
 *   on the hour   saat üç              3:00
 *   half past     saat üç buçuk        3:30
 *   past / to     üçü çeyrek geçiyor   3:15
 *                 dörde çeyrek var     3:45
 *
 * Note the case change: past takes the accusative (üçü), to takes the dative
 * (dörde). That is the part worth drilling.
 */
export function spellTurkishClock(hour: number, minute: number): string {
  const h = ((hour - 1) % 12) + 1;
  const next = (h % 12) + 1;

  if (minute === 0) return `saat ${spellTurkishNumber(h)}`;
  if (minute === 30) return `saat ${spellTurkishNumber(h)} buçuk`;
  if (minute === 15) return `${accusative(h)} çeyrek geçiyor`;
  if (minute === 45) return `${dative(next)} çeyrek var`;
  if (minute < 30) return `${accusative(h)} ${spellTurkishNumber(minute)} geçiyor`;
  return `${dative(next)} ${spellTurkishNumber(60 - minute)} var`;
}

/** Accusative of the hour numeral — the "past" form. */
function accusative(h: number): string {
  const forms: Record<number, string> = {
    1: 'biri', 2: 'ikiyi', 3: 'üçü', 4: 'dördü', 5: 'beşi', 6: 'altıyı',
    7: 'yediyi', 8: 'sekizi', 9: 'dokuzu', 10: 'onu', 11: 'on biri', 12: 'on ikiyi',
  };
  return forms[h] ?? spellTurkishNumber(h);
}

/** Dative of the hour numeral — the "to" form. */
function dative(h: number): string {
  const forms: Record<number, string> = {
    1: 'bire', 2: 'ikiye', 3: 'üçe', 4: 'dörde', 5: 'beşe', 6: 'altıya',
    7: 'yediye', 8: 'sekize', 9: 'dokuza', 10: 'ona', 11: 'on bire', 12: 'on ikiye',
  };
  return forms[h] ?? spellTurkishNumber(h);
}

const CLOCK_MINUTES = [0, 15, 30, 45, 10, 20, 40, 50];

export function makeClockQuestion(): Exercise {
  const hour = 1 + Math.floor(Math.random() * 12);
  const minute = CLOCK_MINUTES[Math.floor(Math.random() * CLOCK_MINUTES.length)];

  const spoken = spellTurkishClock(hour, minute);
  const fmt = (h: number, m: number) => `${h}:${String(m).padStart(2, '0')}`;
  const answer = fmt(hour, minute);

  const wrong = [
    // The classic confusions: past vs to, and the wrong hour.
    fmt(hour === 12 ? 1 : hour + 1, minute),
    fmt(hour, minute === 45 ? 15 : minute === 15 ? 45 : (minute + 30) % 60),
    fmt(hour === 1 ? 12 : hour - 1, minute),
  ].filter((x) => x !== answer);

  const { options, answer: index } = choice(answer, [...new Set(wrong)].slice(0, 3));

  return {
    id: uid('clock'),
    kind: 'mcq',
    prompt: {
      ar: 'كم الساعة؟',
      ku: 'کاتژمێر چەندە؟',
    },
    tr: spoken,
    options,
    answer: index,
    explain: {
      ar: 'انتبه للحالة: «üçü ... geçiyor» بعد الثالثة، و«dörde ... var» قبل الرابعة.',
      ku: 'ئاگاداری حاڵەت بە: «üçü ... geçiyor» دوای سێ، «dörde ... var» پێش چوار.',
    },
  };
}

export interface NumberSessionOptions {
  kinds: NumberExerciseKind[];
  count: number;
  /** Upper bound of the numbers asked about. */
  max: number;
}

export function buildNumberSession(
  sections: NumberSection[],
  opts: NumberSessionOptions,
): Exercise[] {
  const kinds = opts.kinds.length > 0 ? opts.kinds : (['write'] as NumberExerciseKind[]);
  const pool = pickNumbers(opts.count * 2, opts.max);
  const out: Exercise[] = [];

  let guard = 0;
  while (out.length < opts.count && guard < opts.count * 8) {
    guard += 1;
    const kind = kinds[out.length % kinds.length];
    const n = pool[(out.length + guard) % pool.length];

    let exercise: Exercise | null;
    switch (kind) {
      case 'context': exercise = makeNumberContext(sections); break;
      case 'read': exercise = makeReadNumber(n, opts.max); break;
      case 'listen': exercise = makeListenNumber(n); break;
      case 'date': exercise = makeDateQuestion(); break;
      case 'clock': exercise = makeClockQuestion(); break;
      default: exercise = makeWriteNumber(n, opts.max);
    }

    if (exercise) out.push(exercise);
  }

  return out;
}
