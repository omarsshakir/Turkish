/**
 * Cross-curriculum gap audit.
 *
 * The lesson that produced this tool: `aramak`, `koymak`, `girmek`, `çıkmak`,
 * `öğrenmek` and `kullanmak` were all *in* the curriculum — inside example
 * sentences — while being absent from the vocabulary. A student could read
 * them and never look one up, favourite it, or see it in review. The second
 * run found something worse: `değil`, the single most frequent word in the
 * whole curriculum, and every personal pronoun and question word.
 *
 * So this does the opposite of the usual check. Instead of asking "is this
 * word I thought of already present?", it reads every Turkish string the
 * curriculum contains, analyses the inflection, and asks which words the
 * curriculum *uses* but does not *teach*.
 *
 *   node scripts/gap-audit.mjs                 the full classified report
 *   node scripts/gap-audit.mjs --min 3         only forms seen 3+ times
 *   node scripts/gap-audit.mjs --class verb    one class only
 *   node scripts/gap-audit.mjs --where <form>  where a given form occurs
 *   node scripts/gap-audit.mjs --unused        taught but never used
 *   node scripts/gap-audit.mjs --json          machine-readable output
 *
 * ---------------------------------------------------------------------------
 * Why the first version was not trustworthy, and what changed
 * ---------------------------------------------------------------------------
 *
 * v1 stripped suffixes and reported the shortest surviving stem. That produced
 * `ald` (from `aldım`), `yap`, `bur`, `miy` — noise at the very top of the
 * ranking, which is the worst place for it. The stem was never checked against
 * anything.
 *
 * v2 checks. For every token it builds the set of plausible analyses and asks
 * whether ANY of them is already taught — including the verb reconstruction
 * `al` + `mak` → `almak`, the softening reversal `kitab` → `kitap`, and the
 * buffer consonants Turkish inserts between vowels. A token counts as a gap
 * only when no analysis lands on something the curriculum teaches.
 *
 * That is why `aldım` no longer appears: `almak` is taught, so `aldım` is
 * covered. It is not a perfect morphological analyser and does not try to be —
 * it is a suggestion engine whose job is to put real gaps at the top.
 */
import { build } from 'esbuild';
import { unlinkSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = process.cwd();

async function load() {
  const OUT = path.join(ROOT, 'node_modules', `.cache-gap-${Date.now()}.mjs`);
  await build({
    entryPoints: [path.join(ROOT, 'content', 'index.ts')],
    bundle: true, format: 'esm', platform: 'node', outfile: OUT, logLevel: 'silent',
    alias: { '@': path.join(ROOT, 'src'), '@content': path.join(ROOT, 'content') },
  });
  const mod = await import(pathToFileURL(OUT).href);
  unlinkSync(OUT);
  return mod;
}

/** Turkish-aware lowercase. Locale-independent `toLowerCase` mangles İ. */
const norm = (s) => s
  .normalize('NFD').replace(/̇/g, '').normalize('NFC')
  .toLocaleLowerCase('tr-TR');

const LETTERS = /^[a-zçğıiöşüâîû]+$/;

/* ------------------------------------------------------------------ */
/* The closed class, listed explicitly                                 */
/* ------------------------------------------------------------------ */

/*
 * Turkish function words cannot be identified by shape — `ile` looks like any
 * other three-letter word. They have to be enumerated. This list is the
 * reference the audit checks against, so "how many function words does the
 * curriculum teach?" becomes a question with an exact answer.
 */
export const FUNCTION_WORDS = {
  pronoun: [
    'ben', 'sen', 'o', 'biz', 'siz', 'onlar',
    'kendi', 'kendim', 'kendin', 'kendisi', 'birbiri',
    'bu', 'şu', 'bunlar', 'şunlar',
    'herkes', 'hepsi', 'kimse', 'biri', 'birisi', 'hiçbiri', 'başkası',
  ],
  question: [
    'ne', 'kim', 'nerede', 'nereye', 'nereden', 'neresi',
    'ne zaman', 'neden', 'niçin', 'niye', 'nasıl',
    'hangi', 'hangisi', 'kaç', 'kaçta', 'ne kadar',
  ],
  determiner: [
    'her', 'hiç', 'hiçbir', 'bazı', 'birkaç', 'birçok', 'bütün', 'tüm',
    'aynı', 'başka', 'diğer', 'öbür', 'bir', 'birer', 'çoğu',
  ],
  conjunction: [
    've', 'ama', 'fakat', 'ancak', 'lakin', 'çünkü', 'veya', 'ya da',
    'yahut', 'eğer', 'ise', 'hem', 'ki', 'ne … ne', 'ya … ya', 'hem de',
    'oysa', 'hâlbuki', 'yani', 'ayrıca', 'üstelik', 'yoksa',
  ],
  postposition: [
    'için', 'gibi', 'kadar', 'ile', 'sonra', 'önce', 'beri', 'rağmen',
    'dolayı', 'üzere', 'hakkında', 'göre', 'karşı', 'doğru', 'boyunca',
    'süresince', 'sırasında', 'esnasında', 'itibaren', 'başka',
  ],
  particle: [
    'değil', 'de', 'da', 'mi', 'mı', 'mu', 'mü', 'bile', 'ki', 'ya',
  ],
  adverb: [
    'çok', 'az', 'daha', 'en', 'hep', 'hiç', 'sadece', 'yalnızca',
    'artık', 'henüz', 'hâlâ', 'zaten', 'belki', 'herhalde', 'mutlaka',
    'gerçekten', 'hemen', 'birden', 'keşke', 'acaba', 'galiba',
    'biraz', 'oldukça', 'epey', 'gayet', 'asla', 'elbette', 'tabii',
    'genellikle', 'bazen', 'nadiren', 'sık sık', 'her zaman',
    'şimdi', 'sonra', 'önce', 'yine', 'tekrar', 'ayrıca',
  ],
};

const FUNCTION_SET = new Set(Object.values(FUNCTION_WORDS).flat().map(norm));
const FUNCTION_CLASS = new Map();
for (const [cls, words] of Object.entries(FUNCTION_WORDS)) {
  for (const w of words) FUNCTION_CLASS.set(norm(w), cls);
}

/* ------------------------------------------------------------------ */
/* Collecting every Turkish string in the curriculum                   */
/* ------------------------------------------------------------------ */

function collectTurkish(mod) {
  const out = [];
  const push = (text, where) => {
    if (text && typeof text === 'string') out.push({ text, where });
  };

  for (const v of mod.VOCABULARY) {
    if (v.example) push(v.example.tr, `example:${v.tr}`);
    for (const s of v.senses ?? []) if (s.example) push(s.example.tr, `sense:${v.tr}`);
    for (const c of v.collocations ?? []) push(c, `collocation:${v.tr}`);
  }
  for (const pack of mod.SENTENCE_PACKS ?? []) {
    for (const s of pack.sentences) push(s.tr, `sentence:${pack.id}`);
  }
  for (const c of mod.CONVERSATIONS ?? []) {
    for (const line of c.lines ?? []) push(line.tr, `dialogue:${c.id}`);
  }
  for (const r of mod.READING_PASSAGES ?? []) {
    for (const para of r.paragraphs ?? []) push(para.tr ?? para, `reading:${r.id}`);
  }
  for (const lesson of mod.LESSONS ?? []) {
    for (const blk of lesson.blocks ?? []) {
      for (const row of blk.rows ?? []) {
        if (Array.isArray(row)) for (const cell of row) push(cell, `lesson:${lesson.id}`);
        else push(row.tr, `lesson:${lesson.id}`);
      }
      for (const ex of blk.examples ?? []) push(ex.tr ?? ex, `lesson:${lesson.id}`);
      for (const item of blk.items ?? []) push(item.tr, `lesson:${lesson.id}`);
      for (const line of blk.lines ?? []) push(line.tr, `lesson:${lesson.id}`);
      for (const para of blk.paragraphs ?? []) push(para.tr, `lesson:${lesson.id}`);
      for (const g of blk.glossary ?? []) push(g.tr, `lesson:${lesson.id}`);
      for (const pair of blk.pairs ?? []) {
        push(pair.a?.tr, `lesson:${lesson.id}`);
        push(pair.b?.tr, `lesson:${lesson.id}`);
      }
    }
    for (const ex of lesson.exercises ?? []) {
      push(ex.tr, `exercise:${lesson.id}`);
      push(ex.audio, `exercise:${lesson.id}`);
      for (const o of ex.options ?? []) push(o, `exercise:${lesson.id}`);
    }
  }
  for (const section of mod.NUMBER_SECTIONS ?? []) {
    for (const e of section.entries) push(e.tr, `number:${section.id}`);
    for (const e of section.examples ?? []) push(e.tr, `number:${section.id}`);
  }
  for (const section of mod.SYLLABLE_SECTIONS ?? []) {
    for (const e of section.entries) push(e.tr, `syllable:${section.id}`);
    for (const pair of section.pairs ?? []) {
      push(pair.a?.tr, `syllable:${section.id}`);
      push(pair.b?.tr, `syllable:${section.id}`);
    }
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Morphology: enough to decide "is this already taught?"              */
/* ------------------------------------------------------------------ */

const VOWEL = /[aeıioöuüâîû]/;

/*
 * Suffixes, longest first. This is not a complete inventory of Turkish
 * morphology and does not need to be: every extra layer only helps the
 * analyser find a lemma the curriculum already teaches, and a missed layer
 * costs at most one false positive that the frequency ranking makes obvious.
 */
const SUFFIXES = [
  'abilirsiniz', 'ebilirsiniz', 'abiliyorum', 'ebiliyorum',
  'yorlardı', 'yorlarmış', 'abilirsin', 'ebilirsin', 'ıyorsunuz', 'iyorsunuz',
  'uyorsunuz', 'üyorsunuz', 'malıyım', 'meliyim', 'malısın', 'melisin',
  'acaksın', 'ecekmiş', 'acakmış', 'eceksin', 'muştur', 'mıştır', 'müştür',
  'mustur', 'dıkları', 'dikleri', 'dukları', 'dükleri', 'acaklar', 'ecekler',
  'acağım', 'eceğim', 'abilir', 'ebilir', 'iyorum', 'ıyorum', 'uyorum',
  'üyorum', 'yordum', 'yordun', 'yorlar', 'malıyız', 'meliyiz',
  'ların', 'lerin', 'larda', 'lerde', 'lardan', 'lerden', 'ları', 'leri',
  'ması', 'mesi', 'mak', 'mek', 'ken', 'ince', 'ınca', 'unca', 'ünce',
  'arak', 'erek', 'madan', 'meden', 'dıkça', 'dikçe',
  'iyor', 'ıyor', 'uyor', 'üyor', 'acak', 'ecek', 'mış', 'miş', 'muş', 'müş',
  'sın', 'sin', 'sun', 'sün', 'ler', 'lar', 'dan', 'den', 'tan', 'ten',
  'nın', 'nin', 'nun', 'nün', 'ndan', 'nden', 'nda', 'nde',
  'lık', 'lik', 'luk', 'lük', 'cı', 'ci', 'cu', 'cü', 'çı', 'çi', 'çu', 'çü',
  'sız', 'siz', 'suz', 'süz', 'lı', 'li', 'lu', 'lü',
  'ım', 'im', 'um', 'üm', 'ın', 'in', 'un', 'ün', 'ız', 'iz', 'uz', 'üz',
  'da', 'de', 'ta', 'te', 'ya', 'ye', 'na', 'ne', 'nı', 'ni', 'nu', 'nü',
  'dı', 'di', 'du', 'dü', 'tı', 'ti', 'tu', 'tü',
  'sı', 'si', 'su', 'sü', 'ar', 'er', 'ır', 'ir', 'ur', 'ür',
  'ı', 'i', 'u', 'ü', 'a', 'e', 'm', 'n', 'k',
];

/** Undo Turkish final-consonant softening: kitab → kitap, ağac → ağaç. */
function unsoften(stem) {
  const out = [stem];
  if (/b$/.test(stem)) out.push(`${stem.slice(0, -1)}p`);
  if (/c$/.test(stem)) out.push(`${stem.slice(0, -1)}ç`);
  if (/d$/.test(stem)) out.push(`${stem.slice(0, -1)}t`);
  if (/ğ$/.test(stem)) out.push(`${stem.slice(0, -1)}k`, `${stem.slice(0, -1)}g`);
  return out;
}

/**
 * Every form the token might be built from — including the verb infinitive,
 * which is how the curriculum stores verbs.
 */
function analyses(token) {
  const base = norm(token);
  if (!LETTERS.test(base) || base.length < 2) return [];

  const seen = new Set();
  const queue = [[base, 0]];
  const out = [];

  while (queue.length > 0) {
    const [cur, depth] = queue.shift();
    if (seen.has(cur) || cur.length < 2) continue;
    seen.add(cur);

    for (const form of unsoften(cur)) {
      out.push(form);
      // Verbs live in the curriculum as infinitives - but only a stem that
      // actually had something stripped off it can be one. Appending `mak` to
      // the surface form invents words like `aldımmak`.
      if (depth > 0) out.push(`${form}mak`, `${form}mek`);
      // Vowel-dropping nouns: fikri → fikir, şehri → şehir.
      if (form.length >= 3 && !VOWEL.test(form.slice(-1))) {
        const m = form.match(/^(.*?)([bcçdfgğhjklmnprsştvyz])([bcçdfgğhjklmnprsştvyz])$/);
        if (m) for (const v of 'ıiuü') out.push(`${m[1]}${m[2]}${v}${m[3]}`);
      }
    }

    if (depth >= 4 || seen.size > 60) continue;

    // Every matching suffix is explored, not just the first. `aldım` is
    // al+dı+m, and stopping at the longest single match (`-ım`) strands it on
    // `ald`, which is not a word. Following `-m` first reaches `aldı`, then
    // `al`, then the infinitive `almak` — which IS taught.
    for (const suffix of SUFFIXES) {
      if (!cur.endsWith(suffix)) continue;
      const stripped = cur.slice(0, -suffix.length);
      if (stripped.length < 2 || !VOWEL.test(stripped)) continue;
      queue.push([stripped, depth + 1]);
      // A dropped buffer consonant: `arabayı` → `araba`, `suyu` → `su`.
      if (/[nsy]$/.test(stripped)) queue.push([stripped.slice(0, -1), depth + 1]);
      // The present tense eats the stem's final vowel: istemek → istiyor,
      // başlamak → başlıyor, okumak → okuyor. Put it back and try again.
      if (/yor$/.test(suffix) || /yor/.test(suffix)) {
        for (const v of 'aeıiuü') queue.push([stripped + v, depth + 1]);
      }
    }
  }
  return out;
}

/** Rough part-of-speech guess, from shape alone. Only used for grouping. */
function guessClass(form, original) {
  if (FUNCTION_CLASS.has(form)) return FUNCTION_CLASS.get(form);
  if (/m[ae]k$/.test(form)) return 'verb';
  if (/(lık|lik|luk|lük|ış|iş|uş|üş|ma|me|im|ım)$/.test(form)) return 'noun';
  if (/(lı|li|lu|lü|sız|siz|suz|süz|sal|sel|ıcı|ici)$/.test(form)) return 'adjective';
  if (/(ca|ce|ça|çe|en|an)$/.test(form)) return 'adverb';
  if (/^[A-ZİÇĞÖŞÜ]/.test(original)) return 'proper-name';
  return 'noun';
}

/* ------------------------------------------------------------------ */

const mod = await load();
const args = process.argv.slice(2);
const flag = (name, fallback) => (args.includes(name)
  ? args[args.indexOf(name) + 1] ?? fallback : fallback);

/* What the curriculum teaches, in every form we can match against. */
const taught = new Set();
const taughtLemma = new Map();
for (const v of mod.VOCABULARY) {
  const key = norm(v.tr);
  taught.add(key);
  taughtLemma.set(key, v);
  for (const part of key.split(' ')) if (part.length > 1) taught.add(part);
  // A verb is taught by its infinitive; its stem appears everywhere else.
  if (/m[ae]k$/.test(key)) taught.add(key.slice(0, -3));
  for (const c of v.collocations ?? []) taught.add(norm(c));
}
for (const section of mod.SYLLABLE_SECTIONS ?? []) {
  for (const e of section.entries) taught.add(norm(e.tr));
}
for (const section of mod.NUMBER_SECTIONS ?? []) {
  for (const e of section.entries) taught.add(norm(e.tr));
}

const corpus = collectTurkish(mod);

/* Count every token, and decide whether any analysis of it is taught. */
const gaps = new Map();
const usedLemmas = new Set();

for (const { text, where } of corpus) {
  for (const raw of text.split(/[\s.,!?;:()"“”«»'’…–—\/]+/)) {
    if (!raw) continue;
    // A leading hyphen marks a bound suffix, not a word: grammar tables
    // display `-yor`, `-dikten`, `-in / -ın / -un / -ün` as their subject
    // matter. Counting those as untaught vocabulary is nonsense.
    if (raw.startsWith('-')) continue;
    const token = norm(raw).replace(/[^a-zçğıiöşüâîû]/g, '');
    if (token.length < 2) continue;

    const forms = analyses(raw);
    const hit = [token, ...forms].find((f) => taught.has(f));
    if (hit) { usedLemmas.add(hit); continue; }

    // Not taught in any analysis. The best lemma guess is the shortest
    // analysis that still looks like a word, preferring an infinitive.
    // Report the surface form unless a lemma can be derived with confidence.
    // Guessing produced entries like `istmak` and `ald`, which is worse than
    // saying "this form is uncovered and a human should look at it".
    const lemma = token;

    if (!gaps.has(lemma)) {
      gaps.set(lemma, {
        lemma,
        count: 0,
        forms: new Set(),
        where: [],
        cls: guessClass(lemma, raw),
        inflected: analyses(raw).length > 1,
      });
    }
    const g = gaps.get(lemma);
    g.count += 1;
    g.forms.add(token);
    if (g.where.length < 3) g.where.push(`${text}  [${where}]`);
  }
}

/* ------------------------------------------------------------------ */
/* Reporting                                                           */
/* ------------------------------------------------------------------ */

if (args.includes('--where')) {
  const q = norm(args[args.indexOf('--where') + 1] ?? '');
  const g = gaps.get(q);
  console.log(`\n  "${q}" — ${g?.count ?? 0} occurrence(s)\n`);
  for (const line of g?.where ?? []) console.log(`    ${line}`);
  if (g) console.log(`\n    forms seen: ${[...g.forms].join(', ')}`);
  console.log('');
  process.exit(0);
}

if (args.includes('--unused')) {
  const unused = mod.VOCABULARY.filter((v) => {
    const key = norm(v.tr);
    if (usedLemmas.has(key)) return false;
    if (/m[ae]k$/.test(key) && usedLemmas.has(key.slice(0, -3))) return false;
    return true;
  });
  console.log(`\n  TAUGHT_BUT_UNUSED — ${unused.length} of ${mod.VOCABULARY.length}`);
  console.log('  ' + '═'.repeat(60));
  console.log('  Words the curriculum defines but never uses in any sentence,');
  console.log('  example, dialogue or exercise. Not wrong, but not reinforced.\n');
  const byLevel = {};
  for (const v of unused) (byLevel[v.level] ??= []).push(v.tr);
  for (const level of ['a1', 'a2', 'b1', 'b2', 'c1', 'c1plus']) {
    const list = byLevel[level] ?? [];
    console.log(`  ${level.toUpperCase().padEnd(6)} ${String(list.length).padStart(4)}  ${list.slice(0, 12).join(' ')}`);
  }
  console.log('');
  process.exit(0);
}

const min = Number(flag('--min', '2'));
const only = flag('--class', null);

let rows = [...gaps.values()].filter((g) => g.count >= min);
if (only) rows = rows.filter((g) => g.cls === only);
rows.sort((a, b) => b.count - a.count || a.lemma.localeCompare(b.lemma, 'tr'));

if (args.includes('--json')) {
  console.log(JSON.stringify(rows.map((g) => ({
    lemma: g.lemma, count: g.count, cls: g.cls, inflected: g.inflected,
    forms: [...g.forms],
  })), null, 2));
  process.exit(0);
}

const CLASS_ORDER = [
  'pronoun', 'question', 'determiner', 'conjunction', 'postposition',
  'particle', 'adverb', 'verb', 'noun', 'adjective', 'proper-name',
];
const CLASS_LABEL = {
  pronoun: 'Pronouns', question: 'Question words', determiner: 'Determiners',
  conjunction: 'Conjunctions', postposition: 'Postpositions',
  particle: 'Particles', adverb: 'Adverbs', verb: 'Verbs', noun: 'Nouns',
  adjective: 'Adjectives', 'proper-name': 'Proper names',
};

console.log('\n  Cross-curriculum gap audit');
console.log('  ' + '═'.repeat(62));
console.log(`  ${corpus.length} Turkish strings · ${taught.size} taught forms`);
console.log(`  ${rows.length} lemma(s) USED_BUT_UNTAUGHT (min ${min} occurrences)\n`);

/* Function-word coverage is the headline: it is the thing that was missed. */
const fnTaught = [...FUNCTION_SET].filter((w) => taught.has(w));
const fnMissing = [...FUNCTION_SET].filter((w) => !taught.has(w));
console.log('  FUNCTION_WORD coverage');
console.log('  ' + '─'.repeat(62));
console.log(`  taught  ${String(fnTaught.length).padStart(4)} of ${FUNCTION_SET.size}`
  + `   (${Math.round((fnTaught.length / FUNCTION_SET.size) * 100)}%)`);
if (fnMissing.length > 0) {
  console.log(`  missing ${String(fnMissing.length).padStart(4)}   ${fnMissing.join(' ')}`);
}
console.log('');

for (const cls of CLASS_ORDER) {
  const list = rows.filter((g) => g.cls === cls);
  if (list.length === 0) continue;
  console.log(`  Top uncovered — ${CLASS_LABEL[cls]} (${list.length})`);
  console.log('  ' + '─'.repeat(62));
  for (const g of list.slice(0, 15)) {
    const tag = g.inflected ? ' ~' : '  ';
    console.log(`  ${String(g.count).padStart(4)}${tag} ${g.lemma.padEnd(20)} ${(g.where[0] ?? '').slice(0, 52)}`);
  }
  console.log('');
}

console.log('  ~ = only ever seen inflected; the lemma itself never appears');
console.log(`  ${usedLemmas.size} taught lemma(s) are actually used in the curriculum`);
console.log('  run with --unused to see the ones that are not\n');
