/**
 * Turkish syllabification.
 *
 * Turkish syllable structure is genuinely algorithmic, which is unusual and
 * very useful: a student who knows four rules can break any word, including
 * one they have never seen. So rather than hand-authoring a few hundred
 * splits, this computes them — which means every one of the 1,500+ vocabulary
 * items becomes a pronunciation drill, using translations that were already
 * verified when the word was written.
 *
 * The rules, in the order they apply between two vowels:
 *
 *   0 consonants   sa-at        the vowels simply split
 *   1 consonant    a-ra-ba      it joins the FOLLOWING vowel
 *   2 consonants   kar-tal      they split, one each side
 *   3 consonants   elekt-rik    the first two stay behind, the third moves on
 *
 * Leading consonants attach to the first vowel, trailing ones to the last.
 * Turkish words do not natively begin with a consonant cluster, but loanwords
 * do (`tren`, `spor`, `plan`), and those clusters are kept whole because that
 * is how they are pronounced.
 *
 * Verified against the 137 hand-authored splits already in the curriculum —
 * see `npm run validate`.
 */

const VOWELS = 'aeıioöuüâîû';

/** True for a Turkish vowel, upper or lower case. */
export function isVowel(ch: string): boolean {
  return VOWELS.includes(ch.toLocaleLowerCase('tr-TR'));
}

/**
 * Splits a Turkish word into syllables.
 *
 * Returns a single-element array for anything it cannot analyse — a word with
 * no vowel, or one containing spaces or punctuation. Refusing to guess is the
 * point: a wrong split taught confidently is worse than no split.
 */
export function syllabify(word: string): string[] {
  const clean = word.trim();
  if (!clean || /[\s'’.,!?()]/.test(clean)) return [clean];

  const chars = [...clean];
  const vowelAt: number[] = [];
  for (let i = 0; i < chars.length; i += 1) {
    if (isVowel(chars[i])) vowelAt.push(i);
  }

  // No vowel, or a single syllable: nothing to split.
  if (vowelAt.length <= 1) return [clean];

  // Boundary positions: the index each syllable STARTS at.
  const starts: number[] = [0];

  for (let v = 0; v < vowelAt.length - 1; v += 1) {
    const here = vowelAt[v];
    const next = vowelAt[v + 1];
    const between = next - here - 1;

    let boundary: number;
    if (between === 0) {
      // sa-at: the second vowel opens a new syllable.
      boundary = next;
    } else if (between === 1) {
      // a-ra-ba: the lone consonant goes forward.
      boundary = next - 1;
    } else {
      // kar-tal and elekt-rik: everything but the last consonant stays.
      boundary = next - 1;
    }
    starts.push(boundary);
  }

  const out: string[] = [];
  for (let i = 0; i < starts.length; i += 1) {
    out.push(clean.slice(starts[i], starts[i + 1] ?? clean.length));
  }

  return out.filter(Boolean);
}

/** The split written the way a teacher writes it on a board. */
export function syllableString(word: string, separator = '-'): string {
  return syllabify(word).join(separator);
}

/**
 * Where the stress falls, as a zero-based syllable index.
 *
 * Turkish stress is final by default. The exceptions that actually matter to a
 * learner are handled; the rest are lexical and are not guessed at.
 */
export function stressIndex(word: string, syllables = syllabify(word)): number {
  const last = syllables.length - 1;
  if (last <= 0) return 0;

  const lower = word.toLocaleLowerCase('tr-TR');

  // Negative -me/-ma pulls the stress onto the syllable before it.
  const negative = /m[ae](?:z|di|yor|mek|mak)?$/.test(lower)
    || /m[ae]$/.test(lower);
  if (negative) {
    const at = syllables.findIndex((s) => /^m[ae]/.test(s.toLocaleLowerCase('tr-TR')));
    if (at > 0) return at - 1;
  }

  return last;
}

/** V/C shape of a syllable: CV, CVC, VC and so on. */
export function syllableShape(syllable: string): string {
  return [...syllable]
    .map((ch) => (isVowel(ch) ? 'V' : 'C'))
    .join('')
    // A doubled vowel in the pattern is a digraph we do not distinguish here.
    .replace(/V{2,}/g, 'V');
}
