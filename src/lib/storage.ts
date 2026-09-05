/**
 * Typed, namespaced localStorage with graceful degradation.
 *
 * Everything a student does lives here: progress, favourites, settings, and
 * any lessons the teacher authors in the admin area. If storage is blocked
 * (private mode, cleared site data) reads return the fallback and writes are
 * dropped silently - the app keeps working, it just forgets.
 */

const PREFIX = 'turkishpath:v1:';

export function readStore<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeStore<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* quota exceeded or storage disabled - nothing we can do */
  }
}

export function removeStore(key: string): void {
  try {
    window.localStorage.removeItem(PREFIX + key);
  } catch {
    /* ignore */
  }
}

/** Wipes every TurkishPath key. Used by the "reset progress" button. */
export function clearAllStore(): void {
  try {
    const keys: string[] = [];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = window.localStorage.key(i);
      if (key?.startsWith(PREFIX)) keys.push(key);
    }
    keys.forEach((k) => window.localStorage.removeItem(k));
  } catch {
    /* ignore */
  }
}

export const STORAGE_KEYS = {
  progress: 'progress',
  settings: 'settings',
  customLessons: 'custom-lessons',
  customVocab: 'custom-vocab',
  lessonOverrides: 'lesson-overrides',
} as const;
