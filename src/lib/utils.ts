import type { LevelId, SupportLang } from '@/types/content';

/** Joins class names, dropping falsy values. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/** Turkish-aware lowercase - `I` becomes `ı`, not `i`. */
export function trLower(text: string): string {
  return text.toLocaleLowerCase('tr-TR');
}

/**
 * Fold a string for searching: lowercase and strip Turkish diacritics so that
 * typing "cocuk" finds "çocuk" and "gunes" finds "güneş".
 */
export function fold(text: string): string {
  const map: Record<string, string> = {
    ç: 'c', ğ: 'g', ı: 'i', i: 'i', ö: 'o', ş: 's', ü: 'u',
    â: 'a', î: 'i', û: 'u',
  };
  return trLower(text)
    .split('')
    .map((ch) => map[ch] ?? ch)
    .join('');
}

/** Normalises Arabic text for search: strips harakat and unifies alef forms. */
export function foldArabic(text: string): string {
  return text
    .replace(/[ً-ْٰـ]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .trim();
}

/** Fisher-Yates. Returns a new array. */
export function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Picks up to `count` random items without repeats. */
export function sample<T>(items: T[], count: number): T[] {
  return shuffle(items).slice(0, Math.min(count, items.length));
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** 0-100, rounded, safe when total is 0. */
export function percent(done: number, total: number): number {
  if (total <= 0) return 0;
  return clamp(Math.round((done / total) * 100), 0, 100);
}

/** Today as YYYY-MM-DD in the user's own timezone. */
export function todayKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Whole days between two YYYY-MM-DD keys. */
export function daysBetween(a: string, b: string): number {
  const da = new Date(`${a}T00:00:00`);
  const db = new Date(`${b}T00:00:00`);
  return Math.round((db.getTime() - da.getTime()) / 86_400_000);
}

export const LEVEL_LABEL: Record<LevelId, string> = {
  a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1', c1plus: 'C1+',
};

/** Reads the right side of a Bilingual value for the active support language. */
export function pick(value: { ar: string; ku: string }, lang: SupportLang): string {
  return lang === 'ar' ? value.ar : value.ku;
}

/** Both support languages are right-to-left, so this is always true today. */
export function isRtl(_lang: SupportLang): boolean {
  return true;
}

/** Turns "1234" into "1.234" the way Turkish writes thousands. */
export function formatTr(n: number): string {
  return n.toLocaleString('tr-TR');
}

/** Splits a sentence into speakable chunks for word-by-word playback. */
export function words(sentence: string): string[] {
  return sentence.split(/\s+/).filter(Boolean);
}

/** Compares two answers ignoring case, punctuation and Turkish diacritics. */
export function answersMatch(given: string, expected: string): boolean {
  const clean = (s: string) => fold(s).replace(/[.,!?;:()"'’]/g, '').replace(/\s+/g, ' ').trim();
  return clean(given) === clean(expected);
}
