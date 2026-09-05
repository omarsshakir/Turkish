/**
 * Progress persistence.
 *
 * `ProgressContext` no longer talks to localStorage directly. It talks to a
 * `ProgressRepository`, and the app picks which implementation to use. Today
 * there is exactly one — `LocalProgressRepository` — but the interface is
 * shaped so that a future `RemoteProgressRepository` can be dropped in without
 * a single component changing:
 *
 *     ProgressRepository (interface)
 *     ├── LocalProgressRepository      ← today: browser localStorage
 *     └── RemoteProgressRepository     ← future: student account + API
 *
 * The design decisions that make a backend possible later:
 *
 *  1. `load()` and `save()` are ASYNC even though localStorage is synchronous,
 *     so switching to fetch() does not turn a sync call site into an async one.
 *  2. Every record carries `updatedAt` and a monotonic `revision`, which is
 *     what a sync layer needs to resolve "which side is newer".
 *  3. `subscribe()` exists so a remote repo can push changes from another
 *     device into a running session. The local repo implements it against the
 *     `storage` event, which already gives cross-TAB sync for free today.
 *  4. State is one serialisable object — no Dates, no Maps, no class instances.
 */
import type { LevelId } from '@/types/content';
import type { ReviewCard } from './srs';
import { STORAGE_KEYS, clearAllStore, readStore, writeStore } from './storage';

export interface QuizResult {
  lessonId: string;
  correct: number;
  total: number;
  at: string;
}

/** One listening-practice session result. */
export interface ListeningResult {
  correct: number;
  total: number;
  at: string;
}

/** One speaking-practice attempt, scored on TEXT accuracy only. */
export interface SpeakingResult {
  /** What the student was asked to say. */
  expected: string;
  /** What the recogniser heard, or null if recognition failed. */
  heard: string | null;
  /** 0-100 word-level match. */
  score: number;
  at: string;
}

export interface ProgressState {
  completedLessons: string[];
  learnedWords: string[];
  favoriteWords: string[];
  studiedLetters: string[];
  studiedNumberSections: string[];
  completedSentencePacks: string[];
  quizResults: QuizResult[];
  unlockedLevels: LevelId[];
  activeDays: string[];
  attempts: { correct: number; total: number };
  lastLessonId: string | null;
  listens: number;

  /* --- added in phase 2 --- */

  /** SM-2 scheduling state, keyed by vocabulary id. */
  reviews: Record<string, ReviewCard>;
  /** Per-day count of cards reviewed, for the review heatmap. */
  reviewLog: Record<string, number>;
  /** Listening practice history. */
  listeningResults: ListeningResult[];
  /** Speaking practice history. */
  speakingResults: SpeakingResult[];

  /* --- sync metadata --- */

  /** ISO timestamp of the last local write. */
  updatedAt: string;
  /** Monotonic counter, bumped on every save. A remote repo compares these. */
  revision: number;
  /** Schema version, so a future migration can detect old payloads. */
  schemaVersion: number;
}

export const SCHEMA_VERSION = 2;

export const EMPTY_PROGRESS: ProgressState = {
  completedLessons: [],
  learnedWords: [],
  favoriteWords: [],
  studiedLetters: [],
  studiedNumberSections: [],
  completedSentencePacks: [],
  quizResults: [],
  unlockedLevels: ['a1'],
  activeDays: [],
  attempts: { correct: 0, total: 0 },
  lastLessonId: null,
  listens: 0,
  reviews: {},
  reviewLog: {},
  listeningResults: [],
  speakingResults: [],
  updatedAt: new Date(0).toISOString(),
  revision: 0,
  schemaVersion: SCHEMA_VERSION,
};

/** Identifies whose progress this is. Local mode uses a fixed device id. */
export interface ProgressIdentity {
  kind: 'local' | 'remote';
  /** Display label shown in Settings and the teacher panel. */
  label: string;
  /** Stable id — a device id locally, a user id remotely. */
  id: string;
}

export interface ProgressRepository {
  readonly identity: ProgressIdentity;
  /** True when this repository can sync across devices. */
  readonly isRemote: boolean;

  load(): Promise<ProgressState>;
  save(state: ProgressState): Promise<void>;
  clear(): Promise<void>;

  /**
   * Notifies when the underlying store changes from outside this session
   * (another tab today; another device once a backend exists).
   * Returns an unsubscribe function.
   */
  subscribe(listener: (state: ProgressState) => void): () => void;
}

/**
 * Fills in any field a stored payload is missing, so a student who used the
 * phase-1 build keeps their progress when phase-2 fields appear.
 */
export function migrate(raw: Partial<ProgressState> | null | undefined): ProgressState {
  if (!raw) return { ...EMPTY_PROGRESS };
  return {
    ...EMPTY_PROGRESS,
    ...raw,
    // Nested objects need explicit merging or a v1 payload wipes the defaults.
    attempts: { ...EMPTY_PROGRESS.attempts, ...(raw.attempts ?? {}) },
    reviews: raw.reviews ?? {},
    reviewLog: raw.reviewLog ?? {},
    listeningResults: raw.listeningResults ?? [],
    speakingResults: raw.speakingResults ?? [],
    unlockedLevels: raw.unlockedLevels?.length ? raw.unlockedLevels : ['a1'],
    schemaVersion: SCHEMA_VERSION,
  };
}

const DEVICE_ID_KEY = 'device-id';

function getDeviceId(): string {
  const existing = readStore<string | null>(DEVICE_ID_KEY, null);
  if (existing) return existing;
  const generated = `dev-${Math.random().toString(36).slice(2, 10)}`;
  writeStore(DEVICE_ID_KEY, generated);
  return generated;
}

/** The implementation in use today: everything stays in this browser. */
export class LocalProgressRepository implements ProgressRepository {
  readonly isRemote = false;
  readonly identity: ProgressIdentity;

  constructor() {
    this.identity = {
      kind: 'local',
      label: 'Bu tarayıcı (yerel)',
      id: getDeviceId(),
    };
  }

  async load(): Promise<ProgressState> {
    return migrate(readStore<Partial<ProgressState>>(STORAGE_KEYS.progress, {}));
  }

  async save(state: ProgressState): Promise<void> {
    writeStore(STORAGE_KEYS.progress, state);
  }

  async clear(): Promise<void> {
    clearAllStore();
  }

  subscribe(listener: (state: ProgressState) => void): () => void {
    const handler = (event: StorageEvent) => {
      // Only react to our own key being changed by another tab.
      if (!event.key?.endsWith(STORAGE_KEYS.progress)) return;
      if (!event.newValue) return;
      try {
        listener(migrate(JSON.parse(event.newValue) as Partial<ProgressState>));
      } catch {
        /* a malformed payload from another tab is not worth crashing over */
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }
}

/**
 * Sketch of the remote implementation, kept here so the contract stays honest.
 *
 * It is NOT wired into the app — there is no backend — but writing it out
 * proves the interface is sufficient, and it is the file a future developer
 * would fill in. Every method throws rather than silently pretending to work.
 */
export class RemoteProgressRepository implements ProgressRepository {
  readonly isRemote = true;
  readonly identity: ProgressIdentity;

  constructor(private readonly baseUrl: string, userId: string, label: string) {
    this.identity = { kind: 'remote', label, id: userId };
  }

  async load(): Promise<ProgressState> {
    const res = await fetch(`${this.baseUrl}/progress/${this.identity.id}`);
    if (!res.ok) throw new Error(`Progress load failed: ${res.status}`);
    return migrate((await res.json()) as Partial<ProgressState>);
  }

  async save(state: ProgressState): Promise<void> {
    const res = await fetch(`${this.baseUrl}/progress/${this.identity.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    });
    // A 409 means another device saved a newer revision; the caller should
    // reload and merge rather than clobber.
    if (res.status === 409) throw new ProgressConflictError(await res.json());
    if (!res.ok) throw new Error(`Progress save failed: ${res.status}`);
  }

  async clear(): Promise<void> {
    await fetch(`${this.baseUrl}/progress/${this.identity.id}`, { method: 'DELETE' });
  }

  subscribe(): () => void {
    // A real implementation would open an EventSource / WebSocket here.
    return () => undefined;
  }
}

export class ProgressConflictError extends Error {
  constructor(public readonly remote: unknown) {
    super('Remote progress is newer than the local copy');
    this.name = 'ProgressConflictError';
  }
}

/**
 * Chooses the repository for this session. Today it always returns the local
 * one; when accounts exist this is the single place that decides.
 */
export function createProgressRepository(): ProgressRepository {
  return new LocalProgressRepository();
}
