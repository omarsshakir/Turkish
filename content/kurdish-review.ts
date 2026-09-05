import type { VocabItem } from '@/types/content';

/**
 * Kurdish (Sorani) review policy.
 *
 * ---------------------------------------------------------------------------
 * The honest position, stated once and applied consistently
 * ---------------------------------------------------------------------------
 *
 * **No Kurdish translation in this curriculum has been checked by a native
 * Sorani speaker.** Every one was written by the same process that wrote the
 * Arabic, and while the everyday vocabulary is high-confidence, the technical
 * registers are not. Presenting all of it with equal authority would be a
 * quiet lie, and the brief is explicit: flag it rather than fabricate
 * certainty.
 *
 * Individual entries already carry `needsReview(...)` where the author knew a
 * specific term was shaky. That covers 46 words. It is not enough — it flags
 * the cases somebody *remembered* to doubt, which is not the same as the cases
 * that are doubtful.
 *
 * So this file adds a systematic rule on top:
 *
 *   Any word in a technical register carries `ku: 'needs-review'` unless its
 *   author explicitly said otherwise.
 *
 * The registers below are the ones where Sorani has either competing
 * terminologies, recent coinages, or no settled standard at all — legal,
 * academic, scientific, philosophical, literary and financial vocabulary.
 * Everyday words (`ekmek`, `kapı`, `gitmek`) are not flagged: they are stable,
 * widely attested, and flagging them would drown the signal.
 *
 * A word whose file already declares a review state keeps it. The rule never
 * overwrites a human judgement, in either direction, and it never marks
 * anything `verified` — nothing here has been.
 *
 * When a native reader does go through a section, the right move is to set the
 * state explicitly in the vocabulary file, which takes precedence.
 */

/** Registers where a non-native author's Sorani is least likely to be right. */
export const TECHNICAL_CATEGORIES = new Set([
  'academic',
  'science',
  'law',
  'philosophy',
  'literary',
  'formal',
  'finance',
  'professional',
]);

const NOTE = 'Technical register — no native Sorani reader has checked this term.';

/**
 * Apply the policy to one item. Returns the item unchanged when it is outside
 * the technical registers or already carries an explicit review state.
 */
export function applyKurdishPolicy(item: VocabItem): VocabItem {
  if (!TECHNICAL_CATEGORIES.has(item.category)) return item;
  if (item.review?.ku) return item;
  return {
    ...item,
    review: { ...item.review, ku: 'needs-review', note: item.review?.note ?? NOTE },
  };
}
