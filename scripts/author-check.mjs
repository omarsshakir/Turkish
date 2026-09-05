/**
 * Authoring aid.
 *
 * The curriculum is large enough that guessing which words are already in it
 * wastes real work — an earlier phase discovered 41 of 59 proposed A1 additions
 * were already present, after writing them. This answers that question first.
 *
 *   node scripts/author-check.mjs --check w1 w2 …   which of these are free?
 *   node scripts/author-check.mjs --look kitap      everything we hold on one word
 *   node scripts/author-check.mjs <file.ts>         strip duplicates from a file
 *
 * `npm run validate` is what actually enforces uniqueness. This is the tool
 * you use before writing, so validate has nothing to complain about.
 */
import { build } from 'esbuild';
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = process.cwd();

async function loadContent() {
  const OUT = path.join(ROOT, 'node_modules', `.cache-author-${Date.now()}.mjs`);
  await build({
    entryPoints: [path.join(ROOT, 'content', 'index.ts')],
    bundle: true, format: 'esm', platform: 'node', outfile: OUT, logLevel: 'silent',
    alias: { '@': path.join(ROOT, 'src'), '@content': path.join(ROOT, 'content') },
  });
  const mod = await import(pathToFileURL(OUT).href);
  unlinkSync(OUT);
  return mod;
}

/**
 * Turkish-aware case folding, so "İSİM" and "isim" compare equal.
 *
 * This is the IDENTITY of a word: it folds case and nothing else. Two words
 * that differ by a diacritic are two words.
 */
const norm = (s) => s
  .normalize('NFD')
  .replace(/̇/g, '')
  .normalize('NFC')
  .toLocaleLowerCase('tr-TR');

/**
 * Lossy folding for near-miss detection only.
 *
 * Collapsing ç/ğ/ö/ş/ü and ı is what makes "sorumluluk ~ sorumluluk" typos
 * visible, but it is emphatically NOT an identity test: `göl` (lake) and `gol`
 * (goal), `tür` (kind) and `tur` (tour) fold together and are unrelated words.
 * Using this to decide whether a word already exists once reported real gaps
 * as taken — and, worse, would have let the pruner delete a new `gol` as a
 * duplicate of `göl`. Suggestions only.
 */
const fold = (s) => norm(s)
  .replace(/ı/g, 'i')
  .replace(/[çğöşü]/g, (c) => ({ ç: 'c', ğ: 'g', ö: 'o', ş: 's', ü: 'u' }[c]));

/** Cheap edit distance, capped — enough to spot a near-miss, fast. */
function close(a, b) {
  if (Math.abs(a.length - b.length) > 2) return false;
  let edits = 0;
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i += 1; j += 1; continue; }
    edits += 1;
    if (edits > 2) return false;
    if (a.length > b.length) i += 1;
    else if (b.length > a.length) j += 1;
    else { i += 1; j += 1; }
  }
  return edits + (a.length - i) + (b.length - j) <= 2;
}

const args = process.argv.slice(2);
const mode = args[0];

/* ------------------------------------------------------------------ */
/* --look: everything the curriculum already holds about one word      */
/* ------------------------------------------------------------------ */

if (mode === '--look') {
  const { VOCABULARY, SENTENCE_PACKS, ARABIC_CONNECTIONS, COLLOCATIONS } = await loadContent();
  const query = args[1];
  if (!query) {
    console.log('usage: --look <turkish word>');
    process.exit(1);
  }
  const q = fold(query);
  const n = norm(query);

  const exact = VOCABULARY.filter((v) => norm(v.tr) === n);
  const near = VOCABULARY.filter((v) => norm(v.tr) !== n && close(fold(v.tr), q));
  const containing = VOCABULARY.filter(
    (v) => norm(v.tr) !== n && v.tr.split(' ').length > 1 && fold(v.tr).includes(q),
  );

  console.log(`\n  "${query}"`);
  console.log('  ' + '─'.repeat(58));

  if (exact.length === 0) {
    console.log('  Not in the vocabulary.');
  }
  for (const v of exact) {
    console.log(`  ENTRY   ${v.tr}  (${v.level} · ${v.category} · ${v.pos})`);
    console.log(`          ar: ${v.ar}`);
    console.log(`          ku: ${v.ku}`);
    if (v.example) console.log(`          ex: ${v.example.tr}`);
    if (v.senses?.length) {
      for (const [i, s] of v.senses.entries()) {
        console.log(`          sense ${i + 2}: ${s.ar} / ${s.ku}`);
      }
    }
    if (v.collocations?.length) console.log(`          with: ${v.collocations.join(', ')}`);
    if (v.related?.length) console.log(`          related: ${v.related.join(', ')}`);
    if (v.opposite?.length) console.log(`          opposite: ${v.opposite.join(', ')}`);
    if (v.review) console.log(`          review: ${JSON.stringify(v.review)}`);
  }

  const link = ARABIC_CONNECTIONS?.[query];
  if (link) {
    console.log(`  ARABIC  ${link.ar} · ${link.relation} · ${link.confidence}`);
    if (link.arMeaning) console.log(`          means in Arabic: ${link.arMeaning.ar}`);
  }

  const overlay = COLLOCATIONS?.[query];
  if (overlay) console.log(`  OVERLAY collocations: ${overlay.join(', ')}`);

  if (near.length > 0) {
    console.log(`  NEAR    ${near.map((v) => `${v.tr} (${v.level})`).join(', ')}`);
  }
  if (containing.length > 0) {
    console.log(`  PHRASES ${containing.map((v) => v.tr).slice(0, 8).join(', ')}`);
  }

  const sentences = [];
  for (const pack of SENTENCE_PACKS) {
    for (const s of pack.sentences) {
      if (fold(s.tr).includes(q)) sentences.push(`${s.tr}  [${pack.id}]`);
    }
  }
  if (sentences.length > 0) {
    console.log(`  IN ${sentences.length} SENTENCE(S):`);
    for (const s of sentences.slice(0, 5)) console.log(`          ${s}`);
  }
  console.log('');
  process.exit(0);
}

/* ------------------------------------------------------------------ */
/* --check: which of a batch are free, with near-miss warnings         */
/* ------------------------------------------------------------------ */

if (mode === '--check') {
  const { VOCABULARY } = await loadContent();
  const existing = new Map(VOCABULARY.map((v) => [norm(v.tr), v]));
  const byFold = new Map(VOCABULARY.map((v) => [fold(v.tr), v]));
  const folded = [...byFold.keys()];

  const free = [];
  const taken = [];
  const suspicious = [];

  for (const word of args.slice(1)) {
    const hit = existing.get(norm(word));
    if (hit) {
      taken.push(`${word} (${hit.level}/${hit.category})`);
      continue;
    }
    free.push(word);
    // A near-miss is usually a typo or a form of a word already present —
    // worth seeing BEFORE writing 40 lines of content around it. A pure
    // diacritic difference lands here too, which is the right place for it:
    // shown to the author, not acted on by the tool.
    const q = fold(word);
    const nearby = folded
      .filter((f) => close(f, q))
      // A diacritic-only twin folds to exactly the query, and is by far the
      // most useful thing to see — put it first, not wherever the curriculum
      // happens to list it.
      .sort((a, x) => (a === q ? 0 : 1) - (x === q ? 0 : 1))
      .slice(0, 3);
    if (nearby.length > 0) {
      suspicious.push(`${word} ~ ${nearby.map((f) => byFold.get(f).tr).join(', ')}`);
    }
  }

  console.log(`\nFREE  (${free.length}): ${free.join(' ')}`);
  console.log(`TAKEN (${taken.length}): ${taken.join(', ')}`);
  if (suspicious.length > 0) {
    console.log('\nPOSSIBLE EXISTING ENTRIES — check these before writing:');
    for (const s of suspicious) console.log(`  ${s}`);
  }
  console.log('');
  process.exit(0);
}

/* ------------------------------------------------------------------ */
/* default: strip duplicates from a file being written                 */
/* ------------------------------------------------------------------ */

const file = mode;
if (!file) {
  console.log('usage: author-check.mjs [--check w1 w2 …] [--look word] [file.ts]');
  process.exit(1);
}

const { VOCABULARY } = await loadContent();
const source = readFileSync(file, 'utf8');
const mine = new Set([...source.matchAll(/w\('([^']+)'/g)].map((m) => m[1]));

/*
 * Duplicate identity is case-only. Using the lossy fold here would delete a
 * legitimate new `gol` because `göl` already exists — silent data loss from
 * the very tool that exists to prevent it.
 */
const counts = new Map();
for (const v of VOCABULARY) {
  const k = norm(v.tr);
  counts.set(k, (counts.get(k) ?? 0) + 1);
}
const drop = [...mine].filter((word) => (counts.get(norm(word)) ?? 0) > 1);

if (drop.length === 0) {
  console.log('no duplicates in', file);
  process.exit(0);
}

/*
 * Removing an entry means removing the whole object literal, not just the
 * `w(...)` call inside it. An earlier version balanced parentheses only, which
 * left behind orphans like `{ collocations: [...] }` - valid to the eye, a
 * type error to the compiler, and exactly the kind of silent damage an
 * authoring tool must not do.
 */
const lines = source.split('\n');
const keep = [];
let skipping = false;
let braces = 0;

const braceDelta = (line) =>
  (line.match(/\{/g) ?? []).length - (line.match(/\}/g) ?? []).length;

for (const line of lines) {
  if (!skipping) {
    const m = line.match(/w\('([^']+)'/);
    if (m && drop.includes(m[1])) {
      skipping = true;
      // Does this line open the object itself (`{ ...w('x', ...`)?
      if (line.indexOf('{') !== -1 && line.indexOf('{') < line.indexOf("w('")) {
        braces = braceDelta(line);
      } else {
        // The opener sits on an earlier line already in `keep` - take it back.
        braces = 1;
        while (keep.length > 0) {
          const prev = keep.pop();
          if (prev.includes('{')) break;
        }
        braces += braceDelta(line);
      }
      if (braces <= 0) skipping = false;
      continue;
    }
  } else {
    braces += braceDelta(line);
    if (braces <= 0) skipping = false;
    continue;
  }
  keep.push(line);
}
writeFileSync(file, keep.join('\n'));
console.log(`removed ${drop.length} duplicate(s) from ${file}:`);
console.log('  ' + drop.join(' '));
