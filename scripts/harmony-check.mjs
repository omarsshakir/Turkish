/**
 * Turkish vowel-harmony check on the question particle and common suffixes.
 *
 * Phase 8 introduced `olur mı` into a collocation list. `olur` ends in a
 * rounded back vowel, so the particle must be `mu`. It was caught by reading,
 * not by a test — which is the wrong way round for a rule this mechanical.
 *
 * The question particle is the ideal thing to check automatically: it is
 * written as a separate word, so it is findable, and its form is fully
 * determined by the last vowel of the word before it. There is no judgement
 * involved and no exceptions.
 *
 *   node scripts/harmony-check.mjs
 */
import { build } from 'esbuild';
import { unlinkSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'node_modules', `.cache-harmony-${Date.now()}.mjs`);
await build({
  entryPoints: [path.join(ROOT, 'content', 'index.ts')],
  bundle: true, format: 'esm', platform: 'node', outfile: OUT, logLevel: 'silent',
  alias: { '@': path.join(ROOT, 'src'), '@content': path.join(ROOT, 'content') },
});
const m = await import(pathToFileURL(OUT).href);
unlinkSync(OUT);

const norm = (s) => s.normalize('NFD').replace(/̇/g, '').normalize('NFC').toLocaleLowerCase('tr-TR');

/*
 * Four-way harmony. The particle agrees with the last vowel of the preceding
 * word in both backness and rounding:
 *
 *   a ı  ->  mı      e i  ->  mi      o u  ->  mu      ö ü  ->  mü
 *
 * Circumflex vowels behave as their plain counterparts for this purpose.
 */
const GROUP = {
  a: 'mı', 'â': 'mı', 'ı': 'mı',
  e: 'mi', 'i': 'mi', 'î': 'mi',
  o: 'mu', u: 'mu', 'û': 'mu',
  'ö': 'mü', 'ü': 'mü',
};
const VOWELS = 'aeıioöuüâîû';

/** The particle in all its written forms, including person-suffixed ones. */
const PARTICLE = /^(m[ıiuü])(y[ıiuü]m|s[ıiuü]n|y[ıiuü]z|s[ıiuü]n[ıiuü]z|d[ıiuü]r)?$/;

function lastVowel(word) {
  const clean = norm(word).replace(/[^a-zçğıiöşüâîû]/g, '');
  for (let i = clean.length - 1; i >= 0; i -= 1) {
    if (VOWELS.includes(clean[i])) return clean[i];
  }
  return null;
}

/* Collect every Turkish string in the curriculum, with its source. */
const strings = [];
const push = (text, where) => { if (typeof text === 'string' && text.trim()) strings.push({ text, where }); };
for (const v of m.VOCABULARY) {
  push(v.tr, `vocab:${v.tr}`);
  if (v.example) push(v.example.tr, `example:${v.tr}`);
  for (const s of v.senses ?? []) if (s.example) push(s.example.tr, `sense:${v.tr}`);
  for (const c of v.collocations ?? []) push(c, `collocation:${v.tr}`);
}
for (const pack of m.SENTENCE_PACKS) for (const s of pack.sentences) push(s.tr, `sentence:${pack.id}`);
for (const lesson of m.LESSONS) {
  for (const blk of lesson.blocks ?? []) {
    for (const line of blk.lines ?? []) push(line.tr, `dialogue:${lesson.id}`);
    for (const item of blk.items ?? []) push(item.tr, `lesson:${lesson.id}`);
    for (const ex of blk.examples ?? []) push(ex.tr ?? ex, `lesson:${lesson.id}`);
  }
  for (const ex of lesson.exercises ?? []) {
    push(ex.tr, `exercise:${lesson.id}`);
    push(ex.audio, `exercise:${lesson.id}`);
    /*
     * Only the CORRECT option. The wrong options in a multiple-choice question
     * are deliberately wrong - `Yorgun mısın?` sits next to `Yorgun musun?`
     * precisely to test this rule, and flagging the distractor would mean the
     * check fires hardest on the exercises that teach it best.
     */
    if (Array.isArray(ex.options) && typeof ex.answer === 'number') {
      push(ex.options[ex.answer], `exercise:${lesson.id}`);
    }
  }
}
for (const section of m.NUMBER_SECTIONS) {
  for (const e of section.entries) push(e.tr, `number:${section.id}`);
  for (const e of section.examples ?? []) push(e.tr, `number:${section.id}`);
}

/*
 * Words that merely BEGIN with a particle shape are not particles. `mudur`,
 * `mudur`, `mide`, `mizah` and above all `mudur` (manager) tokenise as
 * particle + suffix and are ordinary vocabulary. Checking the token against
 * what the curriculum teaches is the cheapest reliable filter.
 */
const taughtWords = new Set();
for (const v of m.VOCABULARY) {
  taughtWords.add(norm(v.tr));
  for (const part of norm(v.tr).split(' ')) taughtWords.add(part);
}

const problems = [];
let checked = 0;

for (const { text, where } of strings) {
  const words = text.split(/\s+/).filter(Boolean);
  for (let i = 1; i < words.length; i += 1) {
    const bare = norm(words[i]).replace(/[^a-zçğıiöşüâîû]/g, '');
    const match = PARTICLE.exec(bare);
    if (!match) continue;
    // A real word that happens to look like particle + suffix.
    if (match[2] && taughtWords.has(bare)) continue;

    const previous = words[i - 1];
    // A particle after punctuation that ends a clause has no host to agree
    // with; skip rather than guess.
    if (/[.,!?;:]$/.test(previous)) continue;
    const vowel = lastVowel(previous);
    if (!vowel) continue;

    checked += 1;
    const expected = GROUP[vowel];
    if (match[1] !== expected) {
      problems.push({
        text, where, previous, found: match[1], expected, vowel,
      });
    }
  }
}

console.log('\n  Vowel harmony — question particle');
console.log('  ' + '='.repeat(66));
console.log(`  ${strings.length} Turkish strings scanned`);
console.log(`  ${checked} question particles checked\n`);

if (problems.length === 0) {
  console.log('  No harmony errors.\n');
} else {
  console.log(`  ${problems.length} harmony error(s):\n`);
  for (const p of problems) {
    console.log(`    "${p.previous} ${p.found}"  should be  "${p.previous} ${p.expected}"`);
    console.log(`      last vowel '${p.vowel}' -> ${p.expected}`);
    console.log(`      in: ${p.text}`);
    console.log(`      at: ${p.where}\n`);
  }
  process.exit(1);
}
