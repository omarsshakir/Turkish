/**
 * Content report.
 *
 * `npm run validate` answers "is anything broken?". This answers "what have we
 * actually got, and where are the holes?" — the question that decides what to
 * author next.
 *
 * Author/developer tool. Nothing here is student-facing, and it never fails a
 * build: an empty column is information, not an error.
 *
 * Run with: npm run report
 */
import { build } from 'esbuild';
import { FUNCTION_WORDS } from './gap-audit.mjs';
import { unlinkSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'node_modules', '.cache-content-report.mjs');

await build({
  entryPoints: [path.join(ROOT, 'content', 'index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: OUT,
  logLevel: 'silent',
  alias: { '@': path.join(ROOT, 'src'), '@content': path.join(ROOT, 'content') },
});

const content = await import(pathToFileURL(OUT).href);
unlinkSync(OUT);

const {
  VOCABULARY, SENTENCE_PACKS, NUMBER_SECTIONS, SYLLABLE_SECTIONS,
  LESSONS, CATEGORIES, LEVELS, COLLOCATIONS, EXTRA_SENSES, ARABIC_CONNECTIONS,
  VERB_PATTERNS,
} = content;

const LEVEL_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c1plus'];
const LEVEL_LABEL = { a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1', c1plus: 'C1+' };

const bar = (n, max, width = 24) => {
  const filled = max > 0 ? Math.round((n / max) * width) : 0;
  return '█'.repeat(filled) + '·'.repeat(width - filled);
};

const heading = (text) => {
  console.log(`\n  ${text}`);
  console.log('  ' + '─'.repeat(62));
};

const row = (label, value, extra = '') => {
  console.log(`  ${String(label).padEnd(30)} ${String(value).padStart(8)}  ${extra}`);
};

console.log('\n  TurkishPath — content report');
console.log('  ' + '═'.repeat(62));

/* ---------------- vocabulary by level ---------------- */

heading('Vocabulary by level');
const byLevel = Object.fromEntries(LEVEL_ORDER.map((l) => [l, []]));
for (const word of VOCABULARY) byLevel[word.level]?.push(word);
const peakLevel = Math.max(...LEVEL_ORDER.map((l) => byLevel[l].length));

for (const level of LEVEL_ORDER) {
  const items = byLevel[level];
  row(LEVEL_LABEL[level], items.length, bar(items.length, peakLevel));
}
row('TOTAL', VOCABULARY.length);

/* ---------------- vocabulary by category ---------------- */

heading('Vocabulary by category');
const byCategory = {};
for (const word of VOCABULARY) {
  byCategory[word.category] = (byCategory[word.category] ?? 0) + 1;
}
const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);
const peakCat = sorted[0]?.[1] ?? 1;
for (const [id, n] of sorted) row(id, n, bar(n, peakCat, 18));

const emptyCategories = CATEGORIES.filter((c) => !byCategory[c.id]);
if (emptyCategories.length > 0) {
  row('(no words yet)', emptyCategories.length, emptyCategories.map((c) => c.id).join(' '));
}

/* ---------------- Arabic connections ---------------- */

heading('Arabic connections');
const linked = VOCABULARY.filter((v) => v.arabic);
row('Total', linked.length);

const byRelation = {};
const byConfidence = {};
const linkByLevel = {};
for (const word of linked) {
  byRelation[word.arabic.relation] = (byRelation[word.arabic.relation] ?? 0) + 1;
  byConfidence[word.arabic.confidence] = (byConfidence[word.arabic.confidence] ?? 0) + 1;
  linkByLevel[word.level] = (linkByLevel[word.level] ?? 0) + 1;
}
console.log('');
for (const [rel, n] of Object.entries(byRelation).sort((a, b) => b[1] - a[1])) {
  row(`  ${rel}`, n, bar(n, linked.length, 18));
}
console.log('');
for (const [conf, n] of Object.entries(byConfidence)) row(`  ${conf}`, n);
console.log('');
for (const level of LEVEL_ORDER) {
  row(`  ${LEVEL_LABEL[level]}`, linkByLevel[level] ?? 0, bar(linkByLevel[level] ?? 0, linked.length, 18));
}

// A connection whose Arabic source differs from its Arabic translation is the
// interesting case — it means the student cannot reach the Turkish from the
// translation alone, which is exactly why the connection is worth teaching.
const divergent = linked.filter((v) => v.arabic.ar.trim() !== v.ar.trim());
row('Source ≠ translation', divergent.length,
  divergent.slice(0, 4).map((v) => v.tr).join(', '));

/* ---------------- Arabic-origin dictionary ---------------- */

heading('Arabic-origin dictionary');
const origins = VOCABULARY.filter((v) => v.origin);
const arabicOrigin = origins.filter((v) => v.origin.language === 'arabic');
const corrections = origins.filter((v) => v.origin.misconception);

row('Arabic-origin words', arabicOrigin.length);
row('Origin corrections', corrections.length,
  corrections.slice(0, 5).map((v) => v.tr).join(', '));

const byRegister = {};
for (const v of arabicOrigin) {
  byRegister[v.origin.register] = (byRegister[v.origin.register] ?? 0) + 1;
}
console.log('');
for (const [reg, n] of Object.entries(byRegister).sort((a, b) => b[1] - a[1])) {
  row(`  ${reg}`, n, bar(n, arabicOrigin.length, 18));
}

const byOriginLevel = {};
for (const v of arabicOrigin) byOriginLevel[v.level] = (byOriginLevel[v.level] ?? 0) + 1;
console.log('');
for (const level of LEVEL_ORDER) {
  row(`  ${LEVEL_LABEL[level]}`, byOriginLevel[level] ?? 0,
    bar(byOriginLevel[level] ?? 0, arabicOrigin.length, 18));
}

const rootMap = new Map();
for (const v of arabicOrigin) {
  if (!v.origin.root) continue;
  if (!rootMap.has(v.origin.root)) rootMap.set(v.origin.root, []);
  rootMap.get(v.origin.root).push(v.tr);
}
const families = [...rootMap.entries()].filter(([, m]) => m.length > 1)
  .sort((a, b) => b[1].length - a[1].length);
console.log('');
row('With an Arabic root', [...rootMap.values()].reduce((s2, m) => s2 + m.length, 0));
row('Distinct roots', rootMap.size);
row('Root families (2+)', families.length);
row('Without a root', arabicOrigin.filter((v) => !v.origin.root).length,
  'reached Arabic from Greek/Persian');
console.log('');
for (const [root, members] of families.slice(0, 6)) {
  row(`  ${root}`, members.length, members.join(' · '));
}

const byOriginLanguage = {};
for (const v of origins) byOriginLanguage[v.origin.language] = (byOriginLanguage[v.origin.language] ?? 0) + 1;
console.log('');
row('Languages documented', Object.keys(byOriginLanguage).length,
  Object.entries(byOriginLanguage).map(([k, n]) => `${k} ${n}`).join(', '));

/* ---------------- other content ---------------- */

heading('Other content');
row('Sentences', SENTENCE_PACKS.reduce((s, p) => s + p.sentences.length, 0),
  `${SENTENCE_PACKS.length} packs`);
row('Numbers', NUMBER_SECTIONS.reduce((s, x) => s + x.entries.length, 0),
  `${NUMBER_SECTIONS.length} sections`);
row('Syllable drills', SYLLABLE_SECTIONS.reduce((s, x) => s + x.entries.length, 0),
  `${SYLLABLE_SECTIONS.reduce((s, x) => s + (x.pairs?.length ?? 0), 0)} contrast pairs`);
row('Lessons', LESSONS.length,
  `${LESSONS.reduce((s, l) => s + l.exercises.length, 0)} authored exercises`);
row('Levels', LEVELS.length);
row('Categories', CATEGORIES.length);

/* ---------------- coverage gaps ---------------- */

heading('Coverage gaps');

const missing = (predicate) => VOCABULARY.filter(predicate);

const noArabic = missing((v) => !v.ar?.trim());
const noKurdish = missing((v) => !v.ku?.trim());
const noExample = missing((v) => !v.example);
const noPron = missing((v) => !v.pron?.trim());

row('Missing Arabic translation', noArabic.length,
  noArabic.slice(0, 3).map((v) => v.tr).join(', '));
row('Missing Kurdish translation', noKurdish.length,
  noKurdish.slice(0, 3).map((v) => v.tr).join(', '));
row('Missing example sentence', noExample.length,
  noExample.slice(0, 5).map((v) => v.tr).join(', '));
row('Missing pronunciation', noPron.length,
  noPron.slice(0, 3).map((v) => v.tr).join(', '));

// Every word is speakable — the audio engine falls back to browser TTS — so
// "no audio" means no NATIVE recording, which is the whole curriculum today.
row('With native recording', 0, 'all audio is browser TTS');

// SRS compatibility is a property of the id, which every item has by
// construction; a word only fails if it has no id or an empty Turkish side.
const srsBroken = missing((v) => !v.id || !v.tr?.trim());
row('Not SRS-enrollable', srsBroken.length,
  srsBroken.length ? srsBroken.slice(0, 3).map((v) => v.id).join(', ') : 'none');

/* ---------------- richness ---------------- */

heading('Richness');
const multiSense = VOCABULARY.filter((v) => v.senses?.length);
const withCollocations = VOCABULARY.filter((v) => v.collocations?.length);
const withRelated = VOCABULARY.filter((v) => v.related?.length || v.opposite?.length);
const withNote = VOCABULARY.filter((v) => v.note);

row('Multi-sense words', multiSense.length,
  multiSense.map((v) => v.tr).slice(0, 6).join(', '));
row('With collocations', withCollocations.length,
  `${Math.round((withCollocations.length / VOCABULARY.length) * 100)}% of vocabulary`);
row('With related/opposite', withRelated.length);
row('With a usage note', withNote.length);
row('With an example', VOCABULARY.length - noExample.length,
  `${Math.round(((VOCABULARY.length - noExample.length) / VOCABULARY.length) * 100)}%`);
row('False friends', linked.filter((v) => v.arabic.relation === 'false-friend').length);

/* ---------------- translation review state ---------------- */

heading('Translation review');
const flaggedKu = VOCABULARY.filter((v) => v.review?.ku === 'needs-review');
const flaggedAr = VOCABULARY.filter((v) => v.review?.ar === 'needs-review');
const verified = VOCABULARY.filter((v) => v.review?.ku === 'verified' || v.review?.ar === 'verified');

row('Kurdish flagged for review', flaggedKu.length,
  flaggedKu.slice(0, 5).map((v) => v.tr).join(', '));
row('Arabic flagged for review', flaggedAr.length);
row('Explicitly verified', verified.length);
row('Not yet assessed', VOCABULARY.length - flaggedKu.length - flaggedAr.length - verified.length,
  'the honest default');

/* ---------------- vocabulary by part of speech ---------------- */

heading('Vocabulary by part of speech');
const byPos = {};
for (const v of VOCABULARY) byPos[v.pos] = (byPos[v.pos] ?? 0) + 1;
const posSorted = Object.entries(byPos).sort((a, b) => b[1] - a[1]);
const peakPos = posSorted[0]?.[1] ?? 1;
for (const [pos, n] of posSorted) row(pos, n, bar(n, peakPos));

/* ---------------- function words: the closed class ---------------- */

/*
 * The gap audit owns the reference list, so this cannot drift away from what
 * the audit checks. A function word is "taught" when it is a vocabulary entry;
 * "explained" when that entry carries a usage note, which for a closed-class
 * word is the difference between a gloss and something usable.
 */
heading('Function words');
const norm8 = (x) => x.normalize('NFD').replace(/\u0307/g, '').normalize('NFC').toLocaleLowerCase('tr-TR');
const vocabByWord = new Map(VOCABULARY.map((v) => [norm8(v.tr), v]));

let fnTotal = 0;
let fnTaught = 0;
let fnExplained = 0;
const fnMissingAll = [];
for (const [cls, words] of Object.entries(FUNCTION_WORDS)) {
  const taughtHere = words.filter((w) => vocabByWord.has(norm8(w)));
  const explainedHere = taughtHere.filter((w) => vocabByWord.get(norm8(w))?.note);
  const missingHere = words.filter((w) => !vocabByWord.has(norm8(w)));
  fnTotal += words.length;
  fnTaught += taughtHere.length;
  fnExplained += explainedHere.length;
  fnMissingAll.push(...missingHere);
  row(cls, `${taughtHere.length}/${words.length}`,
    `${explainedHere.length} with a usage note`);
}
console.log('');
row('TOTAL identified', fnTotal);
row('Taught', fnTaught, `${Math.round((fnTaught / fnTotal) * 100)}%`);
row('With usage examples', fnExplained,
  `${Math.round((fnExplained / Math.max(fnTaught, 1)) * 100)}% of taught`);
row('Still missing', fnMissingAll.length, fnMissingAll.join(' '));

/* ---------------- transitivity pairs ---------------- */

/*
 * Turkish builds transitive/intransitive pairs from one root. We can only
 * count the pairs the content actually links (via `related`/`opposite`), which
 * is the honest measure: an unlinked pair teaches nothing about the pattern.
 */
heading('Transitivity pairs');
const verbSet = new Set(VOCABULARY.filter((v) => v.pos === 'verb').map((v) => v.tr));
const linkedPairs = new Set();
for (const v of VOCABULARY) {
  if (v.pos !== 'verb') continue;
  for (const other of [...(v.related ?? []), ...(v.opposite ?? [])]) {
    if (!verbSet.has(other)) continue;
    // A pair is a causative/anticausative relation when one form contains the
    // other's stem: dolmak/doldurmak, yanmak/yakmak, dusmek/dusurmek.
    const aStem = v.tr.replace(/m[ae]k$/, '');
    const bStem = other.replace(/m[ae]k$/, '');
    const shared = aStem.startsWith(bStem.slice(0, 3)) || bStem.startsWith(aStem.slice(0, 3));
    if (shared) linkedPairs.add([v.tr, other].sort().join(' <-> '));
  }
}
row('Linked verb pairs', linkedPairs.size);
for (const pair of [...linkedPairs].slice(0, 10)) console.log(`    ${pair}`);

/* ---------------- verbs: pattern coverage ---------------- */

/*
 * A verb is only usable once you know what case it governs. We cannot parse
 * that out of free text, but a usage note or a collocation is the place an
 * author would have recorded it - so their absence is a reliable proxy for
 * "this verb was added but never explained".
 */
heading('Verb pattern coverage');
const verbs = VOCABULARY.filter((v) => v.pos === 'verb');
const verbsWithNote = verbs.filter((v) => v.note);
const verbsWithColloc = verbs.filter((v) => v.collocations?.length);
const verbsBare = verbs.filter((v) => !v.note && !v.collocations?.length && !v.senses?.length);

row('Verbs', verbs.length);
row('With a usage note', verbsWithNote.length,
  `${Math.round((verbsWithNote.length / Math.max(verbs.length, 1)) * 100)}%`);
row('With collocations', verbsWithColloc.length);
row('With multiple senses', verbs.filter((v) => v.senses?.length).length);
row('Documented by the pattern overlay',
  typeof VERB_PATTERNS === 'undefined' ? 0 : Object.keys(VERB_PATTERNS).length,
  'case, transitivity and the common learner error');
row('No note, collocation or sense', verbsBare.length,
  verbsBare.slice(0, 8).map((v) => v.tr).join(', '));

/* ---------------- sentences by level and situation ---------------- */

heading('Sentences');
const sentByLevel = Object.fromEntries(LEVEL_ORDER.map((l) => [l, 0]));
for (const pack of SENTENCE_PACKS) {
  sentByLevel[pack.level] = (sentByLevel[pack.level] ?? 0) + pack.sentences.length;
}
const peakSent = Math.max(...Object.values(sentByLevel), 1);
for (const level of LEVEL_ORDER) {
  row(LEVEL_LABEL[level], sentByLevel[level], bar(sentByLevel[level], peakSent));
}
row('TOTAL', Object.values(sentByLevel).reduce((a, x) => a + x, 0),
  `${SENTENCE_PACKS.length} packs`);

/* Packs are named by what they teach, so the id prefix is the closest thing
   to a taxonomy the content actually carries. */
const packFamily = {};
for (const pack of SENTENCE_PACKS) {
  const family = pack.id.split('-')[0];
  packFamily[family] = (packFamily[family] ?? 0) + 1;
}
console.log('');
row('Pack families', Object.keys(packFamily).length,
  Object.entries(packFamily).sort((a, b) => b[1] - a[1])
    .map(([k, n]) => `${k}:${n}`).join(' '));

/* The `fn-` prefix marks packs organised by communicative function rather
   than by situation or grammar - the axis a student actually chooses along. */
const functional = SENTENCE_PACKS.filter((pk) => pk.id.startsWith('fn-'));
row('Communicative-function packs', functional.length,
  `${functional.reduce((n, pk) => n + pk.sentences.length, 0)} sentences`);
const conversations = LESSONS.filter((l) => l.kind === 'conversation');
row('Conversations', conversations.length,
  `${conversations.reduce((n, l) => n + (l.blocks ?? [])
    .reduce((m, blk) => m + (blk.lines?.length ?? 0), 0), 0)} dialogue lines`);

/* ---------------- collocations by level ---------------- */

heading('Collocation coverage by level');
for (const level of LEVEL_ORDER) {
  const words = byLevel[level];
  const covered = words.filter((v) => v.collocations?.length).length;
  const pct = words.length ? Math.round((covered / words.length) * 100) : 0;
  row(LEVEL_LABEL[level], `${covered}/${words.length}`, `${pct}%`);
}
const overlayKeys = typeof COLLOCATIONS !== 'undefined' ? Object.keys(COLLOCATIONS).length : 0;
const overlayPairs = typeof COLLOCATIONS !== 'undefined'
  ? Object.values(COLLOCATIONS).reduce((n, a) => n + a.length, 0) : 0;
console.log('');
row('Overlay keys', overlayKeys);
row('Overlay pairings', overlayPairs);
row('Total pairings', VOCABULARY.reduce((n, v) => n + (v.collocations?.length ?? 0), 0),
  'including inline');

/* ---------------- connections and origins by level ---------------- */

heading('Arabic coverage by level');
for (const level of LEVEL_ORDER) {
  const words = byLevel[level];
  const conns = words.filter((v) => v.arabic).length;
  const origs = words.filter((v) => v.origin).length;
  row(LEVEL_LABEL[level], `${conns} conn · ${origs} origin`,
    `${words.length ? Math.round((conns / words.length) * 100) : 0}% linked`);
}

/* ---------------- Kurdish review state by level ---------------- */

heading('Kurdish review state');
let flaggedTotal = 0;
for (const level of LEVEL_ORDER) {
  const words = byLevel[level];
  const flagged = words.filter((v) => v.review?.ku === 'needs-review').length;
  flaggedTotal += flagged;
  row(LEVEL_LABEL[level], flagged,
    `${words.length ? Math.round((flagged / words.length) * 100) : 0}% of level`);
}
row('TOTAL flagged', flaggedTotal);

/* The categories where an unflagged translation is least likely to be right:
   technical registers a non-specialist would not confidently render. */
const RISKY = ['academic', 'science', 'law', 'philosophy', 'literary', 'formal', 'finance'];
const riskyUnflagged = VOCABULARY.filter(
  (v) => RISKY.includes(v.category) && v.review?.ku !== 'needs-review' && v.review?.ku !== 'verified',
);
console.log('');
row('Technical + unassessed', riskyUnflagged.length,
  'highest-risk Sorani, no native reader yet');

/* Which registers the flags actually fall in, so a reviewer can start
   somewhere sensible rather than at the top of an alphabetical list. */
console.log('');
console.log('  Flagged by category');
const flaggedByCat = {};
for (const v of VOCABULARY) {
  if (v.review?.ku !== 'needs-review') continue;
  flaggedByCat[v.category] = (flaggedByCat[v.category] ?? 0) + 1;
}
for (const [cat, n] of Object.entries(flaggedByCat).sort((a, b) => b[1] - a[1])) {
  row(`  ${cat}`, n);
}

/* A flagged word the curriculum leans on heavily is a bigger problem than one
   used once, so rank by how often the curriculum's own Turkish contains it. */
const corpusText = [
  ...VOCABULARY.flatMap((v) => [v.example?.tr, ...(v.collocations ?? [])]),
  ...SENTENCE_PACKS.flatMap((pk) => pk.sentences.map((x) => x.tr)),
].filter(Boolean).join(' ').toLocaleLowerCase('tr-TR');

const flaggedRanked = VOCABULARY
  .filter((v) => v.review?.ku === 'needs-review')
  .map((v) => ({ tr: v.tr, n: corpusText.split(v.tr.toLocaleLowerCase('tr-TR')).length - 1 }))
  .filter((x) => x.n > 0)
  .sort((a, b) => b.n - a.n)
  .slice(0, 15);
console.log('');
row('Highest-frequency flagged terms', flaggedRanked.length, 'review these first');
console.log('    ' + flaggedRanked.map((x) => `${x.tr}(${x.n})`).join(' '));

/* ---------------- orphaned and duplicated ---------------- */

heading('Orphans and duplicates');

const vocabWords = new Set(VOCABULARY.map((v) => v.tr));
const orphanColloc = typeof COLLOCATIONS !== 'undefined'
  ? Object.keys(COLLOCATIONS).filter((k) => !vocabWords.has(k)) : [];
const orphanSense = typeof EXTRA_SENSES !== 'undefined'
  ? Object.keys(EXTRA_SENSES).filter((k) => !vocabWords.has(k)) : [];
const orphanConn = typeof ARABIC_CONNECTIONS !== 'undefined'
  ? Object.keys(ARABIC_CONNECTIONS).filter((k) => !vocabWords.has(k)) : [];

row('Orphan collocation keys', orphanColloc.length, orphanColloc.slice(0, 5).join(', '));
row('Orphan sense keys', orphanSense.length, orphanSense.slice(0, 5).join(', '));
row('Orphan connection keys', orphanConn.length, orphanConn.slice(0, 5).join(', '));

const wordCounts = new Map();
for (const v of VOCABULARY) wordCounts.set(v.tr, (wordCounts.get(v.tr) ?? 0) + 1);
const dupWords = [...wordCounts.entries()].filter(([, n]) => n > 1);
row('Duplicate vocabulary', dupWords.length, dupWords.slice(0, 5).map(([w]) => w).join(', '));

const sentSeen = new Map();
for (const pack of SENTENCE_PACKS) {
  for (const sn of pack.sentences) sentSeen.set(sn.tr, (sentSeen.get(sn.tr) ?? 0) + 1);
}
row('Duplicate sentences', [...sentSeen.values()].filter((n) => n > 1).length);

/* ---------------- etymology worth a second look ---------------- */

heading('Etymology to re-check');
const originsAll = VOCABULARY.filter((v) => v.origin);
const likely = originsAll.filter((v) => v.origin.confidence === 'likely');
const rootless = originsAll.filter((v) => v.origin.language === 'arabic' && !v.origin.root);
const surfaceConn = VOCABULARY.filter((v) => v.arabic?.confidence === 'surface');

row('Marked "likely" not "certain"', likely.length, likely.slice(0, 6).map((v) => v.tr).join(', '));
row('Arabic-origin with no root', rootless.length, rootless.slice(0, 6).map((v) => v.tr).join(', '));
row('Connections marked "surface"', surfaceConn.length,
  surfaceConn.slice(0, 6).map((v) => v.tr).join(', '));

/* ---------------- where to author next ---------------- */

heading('Suggested next work');
const thinnest = LEVEL_ORDER
  .map((l) => ({ level: l, n: byLevel[l].length }))
  .sort((a, b) => a.n - b.n)
  .slice(0, 2);
console.log(`  Thinnest levels: ${thinnest.map((t) => `${LEVEL_LABEL[t.level]} (${t.n})`).join(', ')}`);

const thinCategories = sorted.filter(([, n]) => n < 15).map(([id]) => id);
if (thinCategories.length > 0) {
  console.log(`  Categories under 15 words: ${thinCategories.join(' ')}`);
}
const collocationGap = VOCABULARY.filter(
  (v) => ['b1', 'b2', 'c1', 'c1plus'].includes(v.level) && !v.collocations?.length,
).length;
console.log(`  B1+ words without collocations: ${collocationGap}`);
console.log('');
