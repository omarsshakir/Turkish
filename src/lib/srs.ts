/**
 * Spaced repetition — SM-2 with practical learning steps.
 *
 * Plain SM-2 has one flaw for a language app: pressing "Again" schedules the
 * card for *tomorrow*, so a word you just failed disappears for a day. Real
 * SRS tools solve this with short learning steps before a card graduates into
 * the day-scale SM-2 schedule, and that is what this implements:
 *
 *   new ──Good──▶ learning (1 min) ──Good──▶ learning (10 min) ──Good──▶ review
 *                     │                                                    │
 *                     └─────────────── Again ◀─────── relearning ◀─Again───┘
 *
 * Once a card is in `review`, intervals grow by the SM-2 ease factor exactly
 * as Wozniak specified. Everything is pure: `review()` takes a card and a
 * grade and returns a NEW card, which makes it trivial to test and to store.
 */

export type ReviewGrade = 'again' | 'hard' | 'good' | 'easy';
export type CardState = 'new' | 'learning' | 'review' | 'relearning';

export interface ReviewCard {
  /** Vocabulary item id. */
  id: string;
  state: CardState;
  /** Days until the next review. 0 while still in learning steps. */
  interval: number;
  /** SM-2 ease factor. Starts at 2.5, never drops below 1.3. */
  ease: number;
  /** How many times this card has graduated a review successfully in a row. */
  repetitions: number;
  /** Total number of reviews ever, including lapses. */
  reviews: number;
  /** How many times the student pressed "Again" after graduating. */
  lapses: number;
  /** Which learning/relearning step the card is on. */
  step: number;
  /** ISO timestamp of the next due moment. */
  due: string;
  /** ISO timestamp of the last review, or null if never reviewed. */
  lastReviewed: string | null;
}

/** Minutes for each learning step before a card graduates to day intervals. */
const LEARNING_STEPS_MIN = [1, 10];
/** Minutes for each relearning step after a lapse. */
const RELEARNING_STEPS_MIN = [10];

const STARTING_EASE = 2.5;
const MIN_EASE = 1.3;
/** Interval in days a card gets when it first graduates. */
const GRADUATING_INTERVAL = 1;
/** Interval a card gets when graduated straight away with "Easy". */
const EASY_INTERVAL = 4;
/** Cap so a mature card never disappears for years. */
const MAX_INTERVAL = 365;

const MINUTE = 60_000;
const DAY = 86_400_000;

/** A brand-new, never-studied card. Due immediately. */
export function createCard(id: string, now = new Date()): ReviewCard {
  return {
    id,
    state: 'new',
    interval: 0,
    ease: STARTING_EASE,
    repetitions: 0,
    reviews: 0,
    lapses: 0,
    step: 0,
    due: now.toISOString(),
    lastReviewed: null,
  };
}

/** SM-2 ease adjustment. `q` is the classic 0-5 quality score. */
function adjustEase(ease: number, grade: ReviewGrade): number {
  const q = { again: 2, hard: 3, good: 4, easy: 5 }[grade];
  const next = ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  return Math.max(MIN_EASE, Math.round(next * 100) / 100);
}

function addMinutes(now: Date, minutes: number): string {
  return new Date(now.getTime() + minutes * MINUTE).toISOString();
}

function addDays(now: Date, days: number): string {
  return new Date(now.getTime() + days * DAY).toISOString();
}

/**
 * Applies a grade to a card and returns the updated card.
 * Pure — never mutates its input.
 */
export function review(card: ReviewCard, grade: ReviewGrade, now = new Date()): ReviewCard {
  const base: ReviewCard = {
    ...card,
    reviews: card.reviews + 1,
    lastReviewed: now.toISOString(),
    ease: card.state === 'review' || card.state === 'relearning'
      ? adjustEase(card.ease, grade)
      : card.ease,
  };

  /* ---- new / learning ---- */
  if (card.state === 'new' || card.state === 'learning') {
    if (grade === 'again') {
      return { ...base, state: 'learning', step: 0, interval: 0, due: addMinutes(now, LEARNING_STEPS_MIN[0]) };
    }
    if (grade === 'easy') {
      // Skip the remaining steps entirely.
      return {
        ...base,
        state: 'review',
        step: 0,
        repetitions: 1,
        interval: EASY_INTERVAL,
        due: addDays(now, EASY_INTERVAL),
      };
    }
    // hard keeps the card on the current step; good advances it.
    const nextStep = grade === 'good' ? card.step + 1 : card.step;
    if (nextStep >= LEARNING_STEPS_MIN.length) {
      return {
        ...base,
        state: 'review',
        step: 0,
        repetitions: 1,
        interval: GRADUATING_INTERVAL,
        due: addDays(now, GRADUATING_INTERVAL),
      };
    }
    return {
      ...base,
      state: 'learning',
      step: nextStep,
      interval: 0,
      due: addMinutes(now, LEARNING_STEPS_MIN[nextStep]),
    };
  }

  /* ---- relearning after a lapse ---- */
  if (card.state === 'relearning') {
    if (grade === 'again') {
      return { ...base, step: 0, interval: 0, due: addMinutes(now, RELEARNING_STEPS_MIN[0]) };
    }
    const nextStep = grade === 'hard' ? card.step : card.step + 1;
    if (nextStep >= RELEARNING_STEPS_MIN.length) {
      // Back into review, but at a reduced interval rather than from scratch.
      const interval = Math.max(1, Math.round(card.interval * 0.5)) || 1;
      return {
        ...base,
        state: 'review',
        step: 0,
        interval,
        due: addDays(now, interval),
      };
    }
    return {
      ...base,
      state: 'relearning',
      step: nextStep,
      interval: 0,
      due: addMinutes(now, RELEARNING_STEPS_MIN[nextStep]),
    };
  }

  /* ---- review (the SM-2 core) ---- */
  if (grade === 'again') {
    return {
      ...base,
      state: 'relearning',
      step: 0,
      repetitions: 0,
      lapses: card.lapses + 1,
      interval: card.interval, // remembered so relearning can halve it
      due: addMinutes(now, RELEARNING_STEPS_MIN[0]),
    };
  }

  const previous = Math.max(1, card.interval);
  let interval: number;
  if (grade === 'hard') {
    interval = Math.round(previous * 1.2);
  } else if (grade === 'good') {
    interval = card.repetitions <= 1 ? 6 : Math.round(previous * base.ease);
  } else {
    // easy gets a bonus multiplier on top of the ease factor
    interval = card.repetitions <= 1 ? 8 : Math.round(previous * base.ease * 1.3);
  }
  interval = Math.min(MAX_INTERVAL, Math.max(1, interval));

  return {
    ...base,
    state: 'review',
    step: 0,
    repetitions: card.repetitions + 1,
    interval,
    due: addDays(now, interval),
  };
}

/** True if the card is due at `now`. */
export function isDue(card: ReviewCard, now = new Date()): boolean {
  return new Date(card.due).getTime() <= now.getTime();
}

/**
 * Human-readable preview of when each button would schedule the card.
 * Shown on the answer buttons so the student can see the consequence.
 */
export function previewIntervals(
  card: ReviewCard, now = new Date(),
): Record<ReviewGrade, string> {
  const out = {} as Record<ReviewGrade, string>;
  for (const grade of ['again', 'hard', 'good', 'easy'] as ReviewGrade[]) {
    const next = review(card, grade, now);
    out[grade] = formatDelay(new Date(next.due).getTime() - now.getTime());
  }
  return out;
}

/** "10 dk", "1 gün", "3 ay" — Turkish, because the UI is Turkish. */
export function formatDelay(ms: number): string {
  const minutes = Math.round(ms / MINUTE);
  if (minutes < 60) return `${Math.max(1, minutes)} dk`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} sa`;
  const days = Math.round(ms / DAY);
  if (days < 31) return `${days} gün`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months} ay`;
  return `${(days / 365).toFixed(1)} yıl`;
}

/** Cards due now, hardest-first so failing material is seen while fresh. */
export function dueCards(cards: ReviewCard[], now = new Date()): ReviewCard[] {
  const order: Record<CardState, number> = {
    relearning: 0, learning: 1, review: 2, new: 3,
  };
  return cards
    .filter((c) => isDue(c, now))
    .sort((a, b) => {
      const byState = order[a.state] - order[b.state];
      if (byState !== 0) return byState;
      return new Date(a.due).getTime() - new Date(b.due).getTime();
    });
}

export interface SrsStats {
  total: number;
  new: number;
  learning: number;
  review: number;
  relearning: number;
  dueNow: number;
  dueToday: number;
  /** Cards with interval >= 21 days, the usual "mature" threshold. */
  mature: number;
  /** Average ease across cards that have entered review. */
  averageEase: number;
}

export function srsStats(cards: ReviewCard[], now = new Date()): SrsStats {
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);

  const stats: SrsStats = {
    total: cards.length,
    new: 0,
    learning: 0,
    review: 0,
    relearning: 0,
    dueNow: 0,
    dueToday: 0,
    mature: 0,
    averageEase: 0,
  };

  let easeSum = 0;
  let easeCount = 0;

  for (const card of cards) {
    stats[card.state] += 1;
    const dueTime = new Date(card.due).getTime();
    if (dueTime <= now.getTime()) stats.dueNow += 1;
    if (dueTime <= endOfDay.getTime()) stats.dueToday += 1;
    if (card.state === 'review' && card.interval >= 21) stats.mature += 1;
    if (card.state === 'review' || card.state === 'relearning') {
      easeSum += card.ease;
      easeCount += 1;
    }
  }

  stats.averageEase = easeCount > 0 ? Math.round((easeSum / easeCount) * 100) / 100 : STARTING_EASE;
  return stats;
}

/** Labels for the four grade buttons, in Turkish plus both support languages. */
export const GRADE_LABELS: Record<ReviewGrade, { tr: string; ar: string; ku: string }> = {
  again: { tr: 'Tekrar', ar: 'أعد', ku: 'دووبارە' },
  hard: { tr: 'Zor', ar: 'صعب', ku: 'قورس' },
  good: { tr: 'İyi', ar: 'جيد', ku: 'باش' },
  easy: { tr: 'Kolay', ar: 'سهل', ku: 'ئاسان' },
};
