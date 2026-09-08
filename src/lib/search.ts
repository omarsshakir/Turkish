/**
 * Global search.
 *
 * One flat index over every searchable thing on the platform: letters,
 * numbers, words, grammar lessons, sentences and conversations. Built once
 * from the content registry, then queried with simple scored matching that
 * understands Turkish diacritics and Arabic orthographic variation.
 */
import type { LevelId } from '@/types/content';
import { fold, foldArabic } from './utils';

export type SearchKind =
  | 'letter' | 'number' | 'word' | 'lesson' | 'sentence' | 'category' | 'theme';

export interface SearchDoc {
  id: string;
  kind: SearchKind;
  /** Turkish text - the headline of the result. */
  tr: string;
  pron?: string;
  ar: string;
  ku: string;
  level?: LevelId;
  /** Where clicking the result takes the student. */
  href: string;
  /** Extra words that should match but are not displayed. */
  keywords?: string;
  /**
   * Additional Arabic-script text that should match but is not shown.
   *
   * A word's Arabic TRANSLATION and its Arabic SOURCE are often different
   * words - `misafir` translates to ضيف but descends from مسافر - and a
   * student who knows the root will search for the source. Without this,
   * the single most valuable search on the platform would miss.
   */
  arAlt?: string;
  /**
   * Every Arabic meaning of the entry, including secondary senses, for
   * matching only. `ar` remains what gets displayed — a result should read as
   * one word with one headline meaning, not as a pile of glosses.
   */
  arAll?: string;
  /** The same, for Kurdish. */
  kuAll?: string;
}

export interface SearchHit extends SearchDoc {
  score: number;
}

interface IndexedDoc extends SearchDoc {
  _tr: string;
  _ar: string;
  _ku: string;
  _kw: string;
  _arAlt: string;
  _arAll: string;
  _kuAll: string;
}

function prepare(doc: SearchDoc): IndexedDoc {
  return {
    ...doc,
    _tr: fold(doc.tr),
    _ar: foldArabic(doc.ar),
    _ku: foldArabic(doc.ku),
    _kw: fold(`${doc.keywords ?? ''} ${doc.pron ?? ''}`),
    _arAlt: doc.arAlt ? foldArabic(doc.arAlt) : '',
    _arAll: foldArabic(doc.arAll ?? doc.ar),
    _kuAll: foldArabic(doc.kuAll ?? doc.ku),
  };
}

export class SearchIndex {
  private docs: IndexedDoc[] = [];

  constructor(docs: SearchDoc[] = []) {
    this.docs = docs.map(prepare);
  }

  replace(docs: SearchDoc[]): void {
    this.docs = docs.map(prepare);
  }

  get size(): number {
    return this.docs.length;
  }

  /**
   * Scores every document against the query and returns the best matches.
   * Exact match beats prefix beats substring; Turkish beats translations,
   * because a student searching Latin letters is looking for Turkish.
   */
  query(raw: string, opts: { limit?: number; kinds?: SearchKind[]; level?: LevelId } = {}): SearchHit[] {
    const q = raw.trim();
    if (q.length < 1) return [];

    const qTr = fold(q);
    const qAr = foldArabic(q);
    const limit = opts.limit ?? 40;

    const hits: SearchHit[] = [];

    for (const doc of this.docs) {
      if (opts.kinds && !opts.kinds.includes(doc.kind)) continue;
      if (opts.level && doc.level !== opts.level) continue;

      let score = 0;

      if (doc._tr === qTr) score = 120;
      else if (doc._tr.startsWith(qTr)) score = 90;
      else if (doc._tr.includes(qTr)) score = 62;

      if (score === 0 && qAr.length > 1) {
        if (doc._ar === qAr || doc._ku === qAr) score = 100;
        else if (doc._arAlt === qAr) score = 96;
        else if (doc._ar.startsWith(qAr) || doc._ku.startsWith(qAr)) score = 74;
        else if (doc._arAlt.startsWith(qAr)) score = 70;
        else if (doc._ar.includes(qAr) || doc._ku.includes(qAr)) score = 50;
        else if (doc._arAlt.includes(qAr)) score = 46;
        // Secondary senses match last, so the primary meaning always wins
        // when both would hit.
        else if (doc._arAll.includes(qAr) || doc._kuAll.includes(qAr)) score = 40;
      }

      if (score === 0 && doc._kw.includes(qTr)) score = 30;

      if (score > 0) {
        // Shorter matches are usually the ones the student meant.
        score += Math.max(0, 24 - doc.tr.length);
        // Letters and words before long lessons.
        if (doc.kind === 'letter' || doc.kind === 'word' || doc.kind === 'number') score += 6;
        hits.push({ ...doc, score });
      }
    }

    return hits.sort((a, b) => b.score - a.score).slice(0, limit);
  }
}

export const SEARCH_KIND_LABEL: Record<SearchKind, { ar: string; ku: string; en: string }> = {
  letter: { ar: 'حرف', ku: 'پیت', en: 'Letter' },
  number: { ar: 'رقم', ku: 'ژمارە', en: 'Number' },
  word: { ar: 'كلمة', ku: 'وشە', en: 'Word' },
  lesson: { ar: 'درس', ku: 'وانە', en: 'Lesson' },
  sentence: { ar: 'جملة', ku: 'ڕستە', en: 'Sentence' },
  category: { ar: 'تصنيف', ku: 'پۆل', en: 'Category' },
  theme: { ar: 'باب', ku: 'بابەت', en: 'Theme' },
};
