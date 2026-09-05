import {
  createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,
  type ReactNode,
} from 'react';
import { LEVEL_ORDER, type LevelId } from '@/types/content';
import {
  EMPTY_PROGRESS, createProgressRepository,
  type ListeningResult, type ProgressIdentity, type ProgressRepository,
  type ProgressState, type QuizResult, type SpeakingResult,
} from '@/lib/progressRepository';
import {
  createCard, dueCards, isDue, review as applyReview, srsStats,
  type ReviewCard, type ReviewGrade, type SrsStats,
} from '@/lib/srs';
import { daysBetween, percent, todayKey } from '@/lib/utils';

export type { QuizResult, ListeningResult, SpeakingResult, ProgressState };

interface ProgressValue extends ProgressState {
  /* ---- lessons ---- */
  completeLesson: (id: string) => void;
  uncompleteLesson: (id: string) => void;
  isLessonComplete: (id: string) => boolean;

  /* ---- vocabulary ---- */
  toggleLearned: (wordId: string) => void;
  isLearned: (wordId: string) => boolean;
  markManyLearned: (wordIds: string[]) => void;
  toggleFavorite: (wordId: string) => void;
  isFavorite: (wordId: string) => boolean;

  /* ---- exploration ---- */
  markLetterStudied: (letterId: string) => void;
  markNumberSectionStudied: (sectionId: string) => void;
  completeSentencePack: (packId: string) => void;

  /* ---- scoring ---- */
  recordQuiz: (result: Omit<QuizResult, 'at'>) => void;
  recordAttempt: (correct: boolean) => void;
  recordListening: (result: Omit<ListeningResult, 'at'>) => void;
  recordSpeaking: (result: Omit<SpeakingResult, 'at'>) => void;
  countListen: () => void;
  setLastLesson: (id: string) => void;

  /* ---- levels ---- */
  unlockLevel: (level: LevelId) => void;
  lockLevel: (level: LevelId) => void;
  isLevelUnlocked: (level: LevelId, ignoreLocks?: boolean) => boolean;

  /* ---- spaced repetition ---- */
  /** Adds cards for any of these ids that are not yet scheduled. */
  ensureCards: (wordIds: string[]) => void;
  /** Grades a card and reschedules it. Creates the card if it is new. */
  gradeCard: (wordId: string, grade: ReviewGrade) => ReviewCard;
  getCard: (wordId: string) => ReviewCard | undefined;
  /** Cards due right now, hardest state first. */
  getDueCards: (limit?: number) => ReviewCard[];
  srs: SrsStats;
  /** Reviews completed today. */
  reviewsToday: number;

  /* ---- derived ---- */
  streak: number;
  accuracy: number;
  listeningAccuracy: number;
  speakingAccuracy: number;

  /* ---- persistence ---- */
  identity: ProgressIdentity;
  /** False until the repository has finished its first load. */
  ready: boolean;
  resetAll: () => void;
}

const ProgressContext = createContext<ProgressValue | null>(null);

/** How much of a level must be finished before the next one opens. */
export const UNLOCK_THRESHOLD = 60;

export function ProgressProvider({
  children, repository,
}: {
  children: ReactNode;
  /** Injectable so tests (and a future backend) can supply their own. */
  repository?: ProgressRepository;
}) {
  const repoRef = useRef<ProgressRepository>(repository ?? createProgressRepository());
  const repo = repoRef.current;

  const [state, setState] = useState<ProgressState>(EMPTY_PROGRESS);
  const [ready, setReady] = useState(false);

  /* Initial load + cross-tab subscription. */
  useEffect(() => {
    let cancelled = false;
    void repo.load().then((loaded) => {
      if (!cancelled) {
        setState(loaded);
        setReady(true);
      }
    });
    const unsubscribe = repo.subscribe((incoming) => {
      // Another tab wrote a newer revision — adopt it.
      setState((current) => (incoming.revision > current.revision ? incoming : current));
    });
    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, [repo]);

  /* Persist on every change, but not before the first load has landed. */
  useEffect(() => {
    if (!ready) return;
    void repo.save(state);
  }, [state, ready, repo]);

  /**
   * Every mutation goes through here: it stamps the sync metadata and records
   * today as an active day, which is what drives the streak.
   */
  const touch = useCallback((updater: (prev: ProgressState) => ProgressState) => {
    setState((prev) => {
      const next = updater(prev);
      if (next === prev) return prev;

      const today = todayKey();
      const activeDays = next.activeDays.includes(today)
        ? next.activeDays
        : [...next.activeDays, today].slice(-400);

      return {
        ...next,
        activeDays,
        updatedAt: new Date().toISOString(),
        revision: prev.revision + 1,
      };
    });
  }, []);

  const toggleIn = (list: string[], id: string) =>
    (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

  const value = useMemo<ProgressValue>(() => {
    const cards = Object.values(state.reviews);
    const srs = srsStats(cards);
    const streak = computeStreak(state.activeDays);
    const accuracy = percent(state.attempts.correct, state.attempts.total);

    const listeningTotals = state.listeningResults.reduce(
      (acc, r) => ({ correct: acc.correct + r.correct, total: acc.total + r.total }),
      { correct: 0, total: 0 },
    );
    const speakingAvg = state.speakingResults.length > 0
      ? Math.round(
        state.speakingResults.reduce((s, r) => s + r.score, 0) / state.speakingResults.length,
      )
      : 0;

    return {
      ...state,
      srs,
      streak,
      accuracy,
      listeningAccuracy: percent(listeningTotals.correct, listeningTotals.total),
      speakingAccuracy: speakingAvg,
      reviewsToday: state.reviewLog[todayKey()] ?? 0,
      identity: repo.identity,
      ready,

      /* ---- lessons ---- */
      completeLesson: (id) => touch((p) => (p.completedLessons.includes(id)
        ? { ...p, lastLessonId: id }
        : { ...p, completedLessons: [...p.completedLessons, id], lastLessonId: id })),

      uncompleteLesson: (id) => touch((p) => ({
        ...p, completedLessons: p.completedLessons.filter((x) => x !== id),
      })),

      isLessonComplete: (id) => state.completedLessons.includes(id),

      /* ---- vocabulary ---- */
      // Marking a word learned also enrols it in the review deck, so the
      // student never has to build the deck by hand.
      toggleLearned: (wordId) => touch((p) => {
        const nowLearned = !p.learnedWords.includes(wordId);
        return {
          ...p,
          learnedWords: toggleIn(p.learnedWords, wordId),
          reviews: nowLearned && !p.reviews[wordId]
            ? { ...p.reviews, [wordId]: createCard(wordId) }
            : p.reviews,
        };
      }),

      isLearned: (wordId) => state.learnedWords.includes(wordId),

      markManyLearned: (wordIds) => touch((p) => {
        const additions: Record<string, ReviewCard> = {};
        for (const id of wordIds) if (!p.reviews[id]) additions[id] = createCard(id);
        return {
          ...p,
          learnedWords: [...new Set([...p.learnedWords, ...wordIds])],
          reviews: { ...p.reviews, ...additions },
        };
      }),

      toggleFavorite: (wordId) => touch((p) => ({
        ...p, favoriteWords: toggleIn(p.favoriteWords, wordId),
      })),

      isFavorite: (wordId) => state.favoriteWords.includes(wordId),

      /* ---- exploration ---- */
      markLetterStudied: (letterId) => touch((p) => (p.studiedLetters.includes(letterId)
        ? p
        : { ...p, studiedLetters: [...p.studiedLetters, letterId] })),

      markNumberSectionStudied: (sectionId) => touch((p) => (
        p.studiedNumberSections.includes(sectionId)
          ? p
          : { ...p, studiedNumberSections: [...p.studiedNumberSections, sectionId] })),

      completeSentencePack: (packId) => touch((p) => (
        p.completedSentencePacks.includes(packId)
          ? p
          : { ...p, completedSentencePacks: [...p.completedSentencePacks, packId] })),

      /* ---- scoring ---- */
      recordQuiz: (result) => touch((p) => {
        const existing = p.quizResults.find((r) => r.lessonId === result.lessonId);
        const entry: QuizResult = { ...result, at: new Date().toISOString() };
        // Keep the best score per lesson so a bad retake never loses progress.
        if (existing && existing.correct / existing.total >= result.correct / result.total) {
          return p;
        }
        return {
          ...p,
          quizResults: [...p.quizResults.filter((r) => r.lessonId !== result.lessonId), entry],
        };
      }),

      recordAttempt: (correct) => touch((p) => ({
        ...p,
        attempts: {
          correct: p.attempts.correct + (correct ? 1 : 0),
          total: p.attempts.total + 1,
        },
      })),

      recordListening: (result) => touch((p) => ({
        ...p,
        listeningResults: [...p.listeningResults, { ...result, at: new Date().toISOString() }]
          .slice(-200),
      })),

      recordSpeaking: (result) => touch((p) => ({
        ...p,
        speakingResults: [...p.speakingResults, { ...result, at: new Date().toISOString() }]
          .slice(-200),
      })),

      countListen: () => setState((p) => ({ ...p, listens: p.listens + 1 })),

      setLastLesson: (id) => setState((p) => ({ ...p, lastLessonId: id })),

      /* ---- levels ---- */
      unlockLevel: (level) => touch((p) => (p.unlockedLevels.includes(level)
        ? p
        : { ...p, unlockedLevels: [...p.unlockedLevels, level] })),

      lockLevel: (level) => touch((p) => ({
        ...p,
        unlockedLevels: p.unlockedLevels.filter((l) => l !== level || l === 'a1'),
      })),

      isLevelUnlocked: (level, ignoreLocks = false) => {
        if (ignoreLocks) return true;
        if (level === 'a1') return true;
        return state.unlockedLevels.includes(level);
      },

      /* ---- spaced repetition ---- */
      ensureCards: (wordIds) => touch((p) => {
        const missing = wordIds.filter((id) => !p.reviews[id]);
        if (missing.length === 0) return p;
        const additions: Record<string, ReviewCard> = {};
        for (const id of missing) additions[id] = createCard(id);
        return { ...p, reviews: { ...p.reviews, ...additions } };
      }),

      gradeCard: (wordId, grade) => {
        const existing = state.reviews[wordId] ?? createCard(wordId);
        const updated = applyReview(existing, grade);
        touch((p) => {
          const today = todayKey();
          return {
            ...p,
            reviews: { ...p.reviews, [wordId]: updated },
            reviewLog: { ...p.reviewLog, [today]: (p.reviewLog[today] ?? 0) + 1 },
            // A card that reaches `review` state counts as learned vocabulary.
            learnedWords: updated.state === 'review' && !p.learnedWords.includes(wordId)
              ? [...p.learnedWords, wordId]
              : p.learnedWords,
          };
        });
        return updated;
      },

      getCard: (wordId) => state.reviews[wordId],

      getDueCards: (limit) => {
        const due = dueCards(Object.values(state.reviews));
        return typeof limit === 'number' ? due.slice(0, limit) : due;
      },

      resetAll: () => {
        void repo.clear();
        setState({ ...EMPTY_PROGRESS, updatedAt: new Date().toISOString(), revision: 0 });
      },
    };
  }, [state, touch, repo, ready]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>');
  return ctx;
}

/** Counts back from today (or yesterday, so a streak survives until midnight). */
function computeStreak(days: string[]): number {
  if (days.length === 0) return 0;
  const set = new Set(days);
  const today = todayKey();
  const yesterday = todayKey(new Date(Date.now() - 86_400_000));

  let cursor = set.has(today) ? today : (set.has(yesterday) ? yesterday : null);
  if (!cursor) return 0;

  let count = 0;
  while (set.has(cursor)) {
    count += 1;
    const prev = new Date(`${cursor}T00:00:00`);
    prev.setDate(prev.getDate() - 1);
    cursor = todayKey(prev);
  }
  return count;
}

/** Levels in order, used by the ladder component. */
export const LEVEL_SEQUENCE = LEVEL_ORDER;

/** How far apart two levels are; negative means `b` comes first. */
export function levelDistance(a: LevelId, b: LevelId): number {
  return LEVEL_ORDER.indexOf(b) - LEVEL_ORDER.indexOf(a);
}

export { daysBetween, isDue };
export type { ReviewCard, ReviewGrade };
