/**
 * Content validator.
 *
 * The curriculum is hand-authored data, so the failure mode is not a type
 * error - it is an exercise whose answer index points at nothing, a word with
 * an empty Kurdish translation, or two lessons sharing an id. TypeScript
 * cannot catch any of those. This script does.
 *
 * Run with: npm run validate
 */
import { build } from 'esbuild';
import { readFileSync, unlinkSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'node_modules', '.cache-content-validate.mjs');

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

// Bundle the TS content graph so we can import it from plain Node.
await build({
  entryPoints: [path.join(ROOT, 'content', 'index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: OUT,
  logLevel: 'silent',
  alias: {
    '@': path.join(ROOT, 'src'),
    '@content': path.join(ROOT, 'content'),
  },
});

const content = await import(pathToFileURL(OUT).href);
unlinkSync(OUT);

const {
  ALPHABET, NUMBER_SECTIONS, VOCABULARY, LESSONS, SENTENCE_PACKS,
  LEVELS, CATEGORIES, SYLLABLE_SECTIONS, ARABIC_CONNECTIONS, COLLOCATIONS, EXTRA_SENSES, VERB_PATTERNS,
  ARABIC_ORIGIN,
} = content;

const LEVEL_IDS = new Set(LEVELS.map((l) => l.id));
const CATEGORY_IDS = new Set(CATEGORIES.map((c) => c.id));
const VOCAB_IDS = new Set(VOCABULARY.map((v) => v.id));

/* ---------------- alphabet ---------------- */

if (ALPHABET.length !== 29) {
  fail(`Alphabet must have exactly 29 letters, found ${ALPHABET.length}`);
}
const letterIds = new Set();
for (const letter of ALPHABET) {
  if (letterIds.has(letter.id)) fail(`Duplicate letter id: ${letter.id}`);
  letterIds.add(letter.id);
  for (const field of ['upper', 'lower', 'name', 'namePron', 'ipa', 'sound']) {
    if (!letter[field]) fail(`Letter ${letter.id} missing ${field}`);
  }
  if (!letter.note?.ar || !letter.note?.ku) fail(`Letter ${letter.id} missing bilingual note`);
  if (!letter.example?.tr || !letter.example?.ar || !letter.example?.ku) {
    fail(`Letter ${letter.id} has an incomplete example`);
  }
  if (letter.kind === 'vowel' && !letter.vowel) {
    fail(`Vowel ${letter.id} is missing its vowel properties`);
  }
}
/*
 * Letter examples.
 *
 * Two things can quietly go wrong here and neither is a type error: an example
 * word that does not actually contain its letter, and a translation that has
 * drifted away from the same word in the vocabulary. The extra examples are
 * copied from vocabulary entries precisely so no translation is written twice,
 * and this is what keeps that true after an edit.
 *
 * Turkish lowercase is not the built-in one: I lowercases to dotless i, and
 * dotted I lowercases to i. Using String.prototype.toLowerCase alone would
 * file every word containing I under the wrong letter.
 */
const trLower = (s) => s.replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase();

const vocabByTr = new Map();
for (const item of VOCABULARY) {
  vocabByTr.set(item.tr, vocabByTr.has(item.tr) ? null : item);  // null marks a homonym
}

for (const letter of ALPHABET) {
  const ch = trLower(letter.lower);
  const more = letter.more ?? [];
  if (more.length !== 13) {
    fail(`Letter ${letter.id} has ${more.length} extra examples, expected 13 (15 in total)`);
  }

  const words = [letter.example, letter.example2, ...more].filter(Boolean);
  const seen = new Set();
  for (const word of words) {
    const low = trLower(word.tr);
    if (!low.includes(ch)) {
      fail(`Letter ${letter.id}: example "${word.tr}" does not contain ${letter.lower}`);
    }
    if (seen.has(low)) fail(`Letter ${letter.id}: example "${word.tr}" appears twice`);
    seen.add(low);
    for (const field of ['tr', 'pron', 'ar', 'ku']) {
      if (!word[field]) fail(`Letter ${letter.id}: example "${word.tr}" missing ${field}`);
    }
  }

  // The extra examples must still BE the vocabulary entry they were taken from.
  for (const word of more) {
    const entry = vocabByTr.get(word.tr);
    if (entry === undefined) {
      fail(`Letter ${letter.id}: extra example "${word.tr}" is not in the vocabulary`);
      continue;
    }
    if (entry === null) {
      fail(`Letter ${letter.id}: extra example "${word.tr}" is a homonym and cannot carry one translation`);
      continue;
    }
    for (const field of ['pron', 'ar', 'ku']) {
      if (entry[field] !== word[field]) {
        fail(`Letter ${letter.id}: "${word.tr}" ${field} disagrees with the vocabulary `
          + `("${word[field]}" vs "${entry[field]}")`);
      }
    }
  }
}

const vowelCount = ALPHABET.filter((l) => l.kind === 'vowel').length;
if (vowelCount !== 8) fail(`Turkish has 8 vowels, content declares ${vowelCount}`);

// Q, W, X must not appear.
for (const banned of ['Q', 'W', 'X']) {
  if (ALPHABET.some((l) => l.upper === banned)) {
    fail(`Letter ${banned} does not exist in the Turkish alphabet`);
  }
}

/* ---------------- numbers ---------------- */

for (const section of NUMBER_SECTIONS) {
  if (!section.explain?.ar || !section.explain?.ku) {
    fail(`Number section ${section.id} missing bilingual explanation`);
  }
  if (section.entries.length === 0) fail(`Number section ${section.id} is empty`);
  for (const entry of section.entries) {
    for (const field of ['figure', 'tr', 'pron', 'ar', 'ku']) {
      if (!entry[field]) fail(`Number ${section.id}/${entry.id} missing ${field}`);
    }
  }
}

/* ---------------- syllable sections ---------------- */

/*
 * Section ids are React keys on /syllables and the anchor a student links to.
 * Two sections sharing one id renders a duplicated tab and drops a panel, and
 * the type union makes the mistake easy: every legal id already exists, so a
 * new section written by copying an old one type-checks perfectly.
 */
{
  const seenSections = new Set();
  for (const section of SYLLABLE_SECTIONS) {
    if (seenSections.has(section.id)) {
      fail(`Duplicate syllable section id: "${section.id}"`);
    }
    seenSections.add(section.id);
    if (!section.title?.trim()) fail(`Syllable section ${section.id} has no title`);
    if (!section.explain?.ar || !section.explain?.ku) {
      fail(`Syllable section ${section.id} is missing a bilingual explanation`);
    }
    // A section may be pairs-only (`minimal-pairs` is), but it must teach
    // something: an empty section renders an empty panel.
    if (!section.entries?.length && !section.pairs?.length) {
      fail(`Syllable section ${section.id} has neither entries nor pairs`);
    }
  }
}

/* ---------------- vocabulary ---------------- */

const seenVocab = new Set();
for (const word of VOCABULARY) {
  if (seenVocab.has(word.id)) fail(`Duplicate vocab id: ${word.id}`);
  seenVocab.add(word.id);

  for (const field of ['tr', 'pron', 'ar', 'ku']) {
    if (!word[field]?.trim()) fail(`Vocab ${word.id} (${word.tr}) missing ${field}`);
  }
  if (!LEVEL_IDS.has(word.level)) fail(`Vocab ${word.id} has unknown level "${word.level}"`);
  if (!CATEGORY_IDS.has(word.category)) {
    fail(`Vocab ${word.id} has unknown category "${word.category}"`);
  }
  if (word.example) {
    for (const field of ['tr', 'pron', 'ar', 'ku']) {
      if (!word.example[field]?.trim()) {
        fail(`Vocab ${word.id} (${word.tr}) has an example missing ${field}`);
      }
    }
  }
}

const withExample = VOCABULARY.filter((w) => w.example).length;
const examplePct = Math.round((withExample / VOCABULARY.length) * 100);
if (examplePct < 50) {
  warn(`Only ${examplePct}% of vocabulary has example sentences`);
}

/* ---------------- lessons & exercises ---------------- */

const seenLessons = new Set();
let exerciseCount = 0;

for (const lesson of LESSONS) {
  if (seenLessons.has(lesson.id)) fail(`Duplicate lesson id: ${lesson.id}`);
  seenLessons.add(lesson.id);

  if (!LEVEL_IDS.has(lesson.level)) fail(`Lesson ${lesson.id} has unknown level`);
  if (!lesson.title?.trim()) fail(`Lesson ${lesson.id} has no Turkish title`);
  if (!lesson.titleI18n?.ar || !lesson.titleI18n?.ku) {
    fail(`Lesson ${lesson.id} missing a translated title`);
  }
  if (!lesson.objective?.ar || !lesson.objective?.ku) {
    fail(`Lesson ${lesson.id} missing a bilingual objective`);
  }
  if (lesson.blocks.length === 0) fail(`Lesson ${lesson.id} has no content blocks`);

  for (const [i, block] of lesson.blocks.entries()) {
    const where = `${lesson.id} block[${i}] (${block.type})`;
    switch (block.type) {
      case 'text':
      case 'note':
        if (!block.body?.ar || !block.body?.ku) fail(`${where} missing bilingual body`);
        break;
      case 'examples':
        if (!block.items?.length) fail(`${where} has no items`);
        for (const item of block.items ?? []) {
          if (!item.tr || !item.ar || !item.ku) fail(`${where} has an incomplete example`);
        }
        break;
      case 'table':
        if (!block.headers?.length) fail(`${where} has no headers`);
        for (const [ri, row] of (block.rows ?? []).entries()) {
          if (row.length !== block.headers.length) {
            fail(`${where} row ${ri} has ${row.length} cells but ${block.headers.length} headers`);
          }
        }
        break;
      case 'conjugation':
        if (!block.rows?.length) fail(`${where} has no rows`);
        for (const row of block.rows ?? []) {
          if (!row.tr || !row.ar || !row.ku) fail(`${where} row "${row.person}" incomplete`);
        }
        break;
      case 'dialogue':
        for (const line of block.lines ?? []) {
          if (!line.tr || !line.ar || !line.ku) fail(`${where} has an incomplete line`);
        }
        break;
      case 'vocab':
        for (const id of block.ids ?? []) {
          if (!VOCAB_IDS.has(id)) fail(`${where} references unknown vocab id "${id}"`);
        }
        break;
      case 'passage':
        if (!block.paragraphs?.length) fail(`${where} has no paragraphs`);
        for (const [pi, para] of (block.paragraphs ?? []).entries()) {
          if (!para.tr?.trim()) fail(`${where} paragraph ${pi} has no Turkish`);
          if (!para.ar?.trim() || !para.ku?.trim()) {
            fail(`${where} paragraph ${pi} is missing a translation`);
          }
          if (para.tr && para.tr.split(/\s+/).length < 5) {
            warn(`${where} paragraph ${pi} is very short for a reading passage`);
          }
        }
        for (const entry of block.glossary ?? []) {
          if (!entry.tr || !entry.pron || !entry.ar || !entry.ku) {
            fail(`${where} has an incomplete glossary entry`);
          }
        }
        if (block.intro && (!block.intro.ar || !block.intro.ku)) {
          fail(`${where} intro is missing a translation`);
        }
        break;
      case 'soundpairs':
        for (const pair of block.pairs ?? []) {
          if (!pair.a?.tr || !pair.b?.tr) fail(`${where} has an incomplete sound pair`);
          if (!pair.contrast?.ar || !pair.contrast?.ku) {
            fail(`${where} pair missing bilingual contrast note`);
          }
        }
        break;
      default:
        fail(`${where} has an unknown block type`);
    }
  }

  for (const ex of lesson.exercises) {
    exerciseCount += 1;
    const where = `${lesson.id} exercise ${ex.id} (${ex.kind})`;

    if (['mcq', 'translate', 'listening'].includes(ex.kind)) {
      if (!Array.isArray(ex.options) || ex.options.length < 2) {
        fail(`${where} needs at least 2 options`);
      }
      if (typeof ex.answer !== 'number' || ex.answer < 0 || ex.answer >= ex.options.length) {
        fail(`${where} answer index ${ex.answer} is out of range (0..${ex.options.length - 1})`);
      }
      if (new Set(ex.options).size !== ex.options.length) {
        fail(`${where} has duplicate options`);
      }
      if (ex.options.some((o) => !String(o).trim())) fail(`${where} has an empty option`);
    }

    if (ex.kind === 'mcq' && (!ex.prompt?.ar || !ex.prompt?.ku)) {
      fail(`${where} missing bilingual prompt`);
    }
    if (ex.kind === 'listening' && !ex.audio?.trim()) fail(`${where} has no audio text`);
    if (ex.kind === 'translate' && !ex.source?.trim()) fail(`${where} has no source text`);

    if (ex.kind === 'match') {
      if (!ex.pairs?.length || ex.pairs.length < 3) fail(`${where} needs at least 3 pairs`);
      for (const pair of ex.pairs ?? []) {
        if (!pair.tr || !pair.ar || !pair.ku) fail(`${where} has an incomplete pair`);
      }
      const trs = (ex.pairs ?? []).map((p) => p.tr);
      if (new Set(trs).size !== trs.length) fail(`${where} has duplicate Turkish sides`);
    }

    if (ex.kind === 'order') {
      if (!ex.sentence?.trim()) fail(`${where} has no sentence`);
      if (ex.sentence.split(/\s+/).length < 2) fail(`${where} sentence is too short to scramble`);
      if (!ex.ar || !ex.ku) fail(`${where} missing translations`);
    }

    if (ex.kind === 'fill') {
      if (!ex.sentence?.includes('___')) fail(`${where} sentence has no ___ gap`);
      if (!ex.answer?.trim()) fail(`${where} has no answer`);
      if (ex.options && !ex.options.some((o) => normalise(o) === normalise(ex.answer))) {
        fail(`${where} answer "${ex.answer}" is not among its options`);
      }
      if (!ex.ar || !ex.ku) fail(`${where} missing translations`);
    }

    if (ex.kind === 'speak' && (!ex.tr || !ex.ar || !ex.ku)) {
      fail(`${where} is incomplete`);
    }
  }

  if (lesson.prerequisites) {
    for (const id of lesson.prerequisites) {
      if (!seenLessonsHasEventually(id)) {
        warn(`Lesson ${lesson.id} lists unknown prerequisite "${id}"`);
      }
    }
  }
}

function seenLessonsHasEventually(id) {
  return LESSONS.some((l) => l.id === id);
}

function normalise(text) {
  const map = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' };
  return String(text)
    .toLocaleLowerCase('tr-TR')
    .split('')
    .map((c) => map[c] ?? c)
    .join('')
    .replace(/[.,!?;:()"'’]/g, '')
    .trim();
}

/* ---------------- sentence packs ---------------- */

const seenPacks = new Set();
let sentenceCount = 0;
for (const pack of SENTENCE_PACKS) {
  if (seenPacks.has(pack.id)) fail(`Duplicate sentence pack id: ${pack.id}`);
  seenPacks.add(pack.id);
  if (!LEVEL_IDS.has(pack.level)) fail(`Sentence pack ${pack.id} has unknown level`);
  if (!pack.focus?.ar || !pack.focus?.ku) fail(`Sentence pack ${pack.id} missing bilingual focus`);
  if (pack.sentences.length === 0) fail(`Sentence pack ${pack.id} is empty`);
  for (const s of pack.sentences) {
    sentenceCount += 1;
    for (const field of ['tr', 'pron', 'ar', 'ku']) {
      if (!s[field]?.trim()) fail(`Sentence "${s.tr}" in ${pack.id} missing ${field}`);
    }
  }
}

/* ---------------- levels & coverage ---------------- */

for (const level of LEVELS) {
  if (!level.tagline?.ar || !level.tagline?.ku) fail(`Level ${level.id} missing bilingual tagline`);
  if (!level.canDo?.length) fail(`Level ${level.id} has no can-do statements`);
  for (const item of level.canDo) {
    if (!item.ar || !item.ku) fail(`Level ${level.id} has an incomplete can-do statement`);
  }

  const lessons = LESSONS.filter((l) => l.level === level.id);
  const words = VOCABULARY.filter((v) => v.level === level.id);
  if (lessons.length === 0) warn(`Level ${level.id} has no lessons`);
  if (words.length === 0) warn(`Level ${level.id} has no vocabulary`);
}

for (const category of CATEGORIES) {
  const count = VOCABULARY.filter((v) => v.category === category.id).length;
  if (count === 0) warn(`Category "${category.id}" has no words`);
}

/* ---------------- expansion-phase integrity checks ---------------- */

/**
 * Duplicate vocabulary.
 *
 * The failure mode that actually happens when content is added over several
 * phases is the SAME Turkish word appearing twice under different ids. The
 * student then sees it twice in the explorer and gets two independent SRS
 * cards for one word.
 *
 * Since the senses model landed, a second MEANING is no longer a reason to
 * have a second entry — `vize` (visa / midterm) is one item with two senses.
 * So the rule is now simply: one entry per written form per part of speech.
 *
 * Case is significant, because Turkish capitalises weekday and month names:
 * `Pazar` (Sunday) and `pazar` (market) are different written words. A pair
 * that differs ONLY by case is reported separately so an author can confirm
 * it is deliberate rather than a typo.
 */
const byWord = new Map();
for (const word of VOCABULARY) {
  const key = `${word.tr}::${word.pos}`;
  if (!byWord.has(key)) byWord.set(key, []);
  byWord.get(key).push(word);
}
for (const [key, group] of byWord) {
  if (group.length > 1) {
    fail(
      `Duplicate vocabulary "${key.split('::')[0]}" (${group.length}x): `
      + `${group.map((g) => g.id).join(', ')} — merge the meanings into senses`,
    );
  }
}

/* Pairs that differ only by capitalisation: legitimate in Turkish, but worth
   confirming rather than assuming. */
let caseVariants = 0;
const byLower = new Map();
for (const word of VOCABULARY) {
  const key = `${word.tr.toLocaleLowerCase('tr-TR')}::${word.pos}`;
  if (!byLower.has(key)) byLower.set(key, new Set());
  byLower.get(key).add(word.tr);
}
for (const [, forms] of byLower) {
  if (forms.size > 1) {
    caseVariants += 1;
    warn(`Case-distinguished pair: ${[...forms].join(' / ')} — intentional in Turkish?`);
  }
}

/* ---------------- senses ---------------- */

let multiSense = 0;
for (const word of VOCABULARY) {
  if (!word.senses || word.senses.length === 0) continue;
  multiSense += 1;

  const meanings = [word.ar.trim(), ...word.senses.map((x) => (x.ar ?? '').trim())];
  for (const [i, sense] of word.senses.entries()) {
    const where = `Sense ${i + 2} of "${word.tr}"`;
    if (!sense.ar?.trim()) fail(`${where} has no Arabic translation`);
    if (!sense.ku?.trim()) fail(`${where} has no Kurdish translation`);
    if (sense.category && !CATEGORY_IDS.has(sense.category)) {
      fail(`${where} has unknown category "${sense.category}"`);
    }
    if (sense.example) {
      if (!sense.example.tr?.trim()) fail(`${where} has an example with no Turkish`);
      if (!sense.example.ar?.trim() || !sense.example.ku?.trim()) {
        fail(`${where} has an example missing a translation`);
      }
    }
  }

  // A "sense" that repeats the primary meaning is not a sense, it is a
  // duplicate wearing a different hat.
  const unique = new Set(meanings);
  if (unique.size !== meanings.length) {
    fail(`"${word.tr}" has two senses with the same Arabic meaning`);
  }
}

/* Duplicate sentences across every pack. */
const seenSentence = new Map();
for (const pk of SENTENCE_PACKS) {
  for (const sentence of pk.sentences) {
    const key = sentence.tr.toLocaleLowerCase('tr-TR').trim();
    if (seenSentence.has(key)) {
      warn(`Duplicate sentence "${sentence.tr}" in ${pk.id} and ${seenSentence.get(key)}`);
    } else {
      seenSentence.set(key, pk.id);
    }
  }
}

/**
 * Turkish orthography.
 *
 * Content is hand-typed, and the two mistakes that slip through are a Latin
 * "i" where a dotless "ı" belongs and stray characters from another keyboard
 * layout. Anything outside the Turkish alphabet plus ordinary punctuation is
 * worth a look.
 */
const TURKISH_OK = /^[a-zA-ZçÇğĞıIiİöÖşŞüÜâÂîÎûÛ0-9\s.,!?'’‘"“”()\[\]\-–—…:;%/&+]*$/;
for (const word of VOCABULARY) {
  if (!TURKISH_OK.test(word.tr)) {
    fail(`Vocabulary "${word.tr}" (${word.id}) contains non-Turkish characters`);
  }
  if (word.example && !TURKISH_OK.test(word.example.tr)) {
    fail(`Example for "${word.tr}" contains non-Turkish characters: ${word.example.tr}`);
  }
}

/* Missing translations, on every content type that carries them. */
for (const word of VOCABULARY) {
  if (!word.ar || !word.ar.trim()) fail(`Vocabulary "${word.tr}" (${word.id}) has no Arabic translation`);
  if (!word.ku || !word.ku.trim()) fail(`Vocabulary "${word.tr}" (${word.id}) has no Kurdish translation`);
  if (word.example) {
    if (!word.example.ar?.trim()) fail(`Example for "${word.tr}" has no Arabic translation`);
    if (!word.example.ku?.trim()) fail(`Example for "${word.tr}" has no Kurdish translation`);
    if (!word.example.pron?.trim()) warn(`Example for "${word.tr}" has no pronunciation`);
  }
}

/* ---------------- Arabic connections ---------------- */

const linked = VOCABULARY.filter((v) => v.arabic);
const RELATIONS = new Set(['direct', 'borrowing', 'pronunciation', 'spelling', 'semantic', 'false-friend']);
const CONFIDENCES = new Set(['certain', 'likely', 'surface']);
const ARABIC_SCRIPT = /[؀-ۿ]/;

const linkedWords = new Set(linked.map((v) => v.tr));
if (typeof ARABIC_CONNECTIONS !== 'undefined') {
  for (const key of Object.keys(ARABIC_CONNECTIONS)) {
    if (!linkedWords.has(key)) {
      fail(`Arabic connection "${key}" matches no vocabulary item - it decorates nothing`);
    }
  }
}

for (const word of linked) {
  const link = word.arabic;
  const where = `Arabic link "${word.tr}"`;

  if (!RELATIONS.has(link.relation)) fail(`${where} has invalid relation "${link.relation}"`);
  if (!CONFIDENCES.has(link.confidence)) fail(`${where} has invalid confidence "${link.confidence}"`);
  if (!link.ar || !ARABIC_SCRIPT.test(link.ar)) fail(`${where} has no Arabic-script source word`);
  if (!link.note?.ar?.trim() || !link.note?.ku?.trim()) {
    fail(`${where} is missing its explanation in Arabic or Kurdish`);
  }

  // The whole point of the false-friend category is the warning. An entry
  // without one is worse than no entry at all, because the student trusts it.
  if (link.relation === 'false-friend') {
    if (!link.arMeaning?.ar?.trim() || !link.arMeaning?.ku?.trim()) {
      fail(`${where} is a false friend but does not say what the Arabic word means`);
    }
    if (!link.note.ar.includes('⚠️') || !link.note.ku.includes('⚠️')) {
      fail(`${where} is a false friend but its note carries no warning marker`);
    }
  }

  // A surface resemblance must never be dressed up as an etymology.
  if (link.confidence === 'surface' && (link.relation === 'direct' || link.relation === 'borrowing')) {
    fail(`${where} claims a borrowing but is only a surface resemblance`);
  }
}

/* ---------------- syllabification ---------------- */

/**
 * The syllable splitter generates drills from the whole vocabulary, so it has
 * to be right. The hand-authored splits already in the curriculum are the test
 * set: if the algorithm and a human ever disagree, one of them is wrong and a
 * build should not pass while that is unresolved.
 */
{
  const SYL_OUT = path.join(ROOT, 'node_modules', '.cache-syllabify.mjs');
  await build({
    entryPoints: [path.join(ROOT, 'src', 'lib', 'syllabify.ts')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: SYL_OUT,
    logLevel: 'silent',
    alias: { '@': path.join(ROOT, 'src'), '@content': path.join(ROOT, 'content') },
  });
  const { syllabify } = await import(pathToFileURL(SYL_OUT).href);
  unlinkSync(SYL_OUT);

  let checked = 0;
  for (const section of SYLLABLE_SECTIONS ?? []) {
    for (const entry of section.entries) {
      if (entry.syllables.length <= 1) continue;
      // Sentence-rhythm entries are split on words, not syllables.
      if (/[\s'’.,!?]/.test(entry.tr)) continue;
      checked += 1;
      const got = syllabify(entry.tr).join('-');
      const want = entry.syllables.join('-');
      if (got !== want) {
        fail(`Syllabifier disagrees with the authored split for "${entry.tr}": ${got} vs ${want}`);
      }
    }
  }
  if (checked < 50) {
    warn(`Only ${checked} authored splits available to test the syllabifier against`);
  }
}

/* ---------------- collocations ---------------- */

/**
 * A collocation must actually contain its headword, or the overlay is keyed
 * to the wrong entry and the student is shown phrases for a different word.
 * Turkish suffixes mean the match is on the stem, not the whole word.
 */
let collocationCount = 0;
for (const word of VOCABULARY) {
  if (!word.collocations?.length) continue;
  collocationCount += word.collocations.length;

  // The check exists to catch an overlay keyed to the wrong entry, so it has
  // to know the two regular ways a Turkish stem changes before a suffix:
  //
  //   vowel drop      fikir -> fikri, sabır -> sabrı, hüzün -> hüzne
  //   final softening borç -> borca, kitap -> kitabı, renk -> rengi
  //
  // Without these it flags exactly the pairings most worth teaching.
  const head = word.tr.split(' ')[0].toLocaleLowerCase('tr-TR');
  const soften = (x) => x.replace(/ç$/, 'c').replace(/k$/, 'ğ').replace(/p$/, 'b').replace(/t$/, 'd');
  const dropVowel = (x) => x.replace(/([bcçdfgğhjklmnprsştvyz])([aeıioöuü])([bcçdfgğhjklmnprsştvyz])$/, '$1$3');
  // A verb's collocations are built on its ROOT, not its dictionary form:
  // `seçmek` gives `seçim yapmak`, and the first four characters of the
  // infinitive ("seçm") appear in neither.
  const root = /m[ae]k$/.test(head) && head.length > 4 ? head.slice(0, -3) : head;

  const stems = new Set(
    [head, root, soften(root), dropVowel(head), soften(dropVowel(head))]
      .map((x) => x.slice(0, Math.min(4, x.length)))
      .filter(Boolean),
  );

  // Turkish has exactly two suppletive datives — ben → bana, sen → sana — and
  // they are worth teaching precisely because the stem does not survive.
  const SUPPLETIVE = { ben: 'bana', sen: 'sana' };
  if (SUPPLETIVE[head]) stems.add(SUPPLETIVE[head]);

  for (const phrase of word.collocations) {
    const lower = phrase.toLocaleLowerCase('tr-TR');
    if (![...stems].some((stem) => lower.includes(stem))) {
      warn(`Collocation "${phrase}" shares no stem with "${word.tr}" — check the key`);
    }
  }
  if (new Set(word.collocations).size !== word.collocations.length) {
    fail(`"${word.tr}" lists the same collocation twice`);
  }
}

/* An overlay entry that matches no word is dead data, exactly as a dangling
   Arabic connection would be. */
if (typeof COLLOCATIONS !== 'undefined') {
  const words = new Set(VOCABULARY.map((v) => v.tr));
  for (const key of Object.keys(COLLOCATIONS)) {
    if (!words.has(key)) {
      fail(`Collocation overlay "${key}" matches no vocabulary item`);
    }
  }
}

/* ---------------- word origins ---------------- */

/**
 * Etymology has to be held to a higher bar than teaching material, because a
 * wrong origin is not a weak lesson — it is a false statement a student will
 * repeat.
 */
const ORIGIN_LANGUAGES = new Set([
  'arabic', 'persian', 'french', 'italian', 'greek',
  'latin', 'english', 'turkic', 'other', 'uncertain',
]);
const REGISTERS = new Set([
  'everyday', 'formal', 'academic', 'literary', 'technical', 'historical',
]);

/* An Arabic root is three or four letters, spaced: 'ح ك م'. */
const ROOT_SHAPE = /^[\u0600-\u06FF](?: [\u0600-\u06FF]){2,3}$/;

let originCount = 0;
let rootedCount = 0;
let misconceptionCount = 0;
const rootMembers = new Map();

for (const word of VOCABULARY) {
  const o = word.origin;
  if (!o) continue;
  originCount += 1;
  const where = `Origin of "${word.tr}"`;

  if (!ORIGIN_LANGUAGES.has(o.language)) {
    fail(`${where} has unknown language "${o.language}"`);
  }
  if (!REGISTERS.has(o.register)) {
    fail(`${where} has unknown register "${o.register}"`);
  }
  if (o.confidence !== 'certain' && o.confidence !== 'likely') {
    fail(`${where} has invalid confidence "${o.confidence}"`);
  }

  if (o.root) {
    rootedCount += 1;
    if (!ROOT_SHAPE.test(o.root)) {
      fail(`${where} has a malformed root "${o.root}" — expected spaced Arabic letters`);
    }
    // A root only belongs to an Arabic borrowing. A Persian or French word
    // with a triliteral root would be a fabrication.
    if (o.language !== 'arabic') {
      fail(`${where} is ${o.language} but carries an Arabic root — roots belong to Arabic borrowings only`);
    }
    if (!rootMembers.has(o.root)) rootMembers.set(o.root, []);
    rootMembers.get(o.root).push(word.tr);
  }

  if (o.language === 'arabic') {
    if (!o.source) fail(`${where} claims Arabic origin but names no source word`);
    else if (!/[\u0600-\u06FF]/.test(o.source)) {
      fail(`${where} has a source that is not in Arabic script: "${o.source}"`);
    }
  }

  if (o.misconception) {
    misconceptionCount += 1;
    // The whole point of a misconception entry is the correction, so it must
    // carry the warning marker and must not itself be Arabic.
    if (o.language === 'arabic') {
      fail(`${where} is marked Arabic yet carries a misconception note — contradictory`);
    }
    if (!o.misconception.ar?.includes('⚠️') || !o.misconception.ku?.includes('⚠️')) {
      fail(`${where} has a misconception note without a warning marker`);
    }
  }

  if (o.usage && (!o.usage.ar?.trim() || !o.usage.ku?.trim())) {
    fail(`${where} has a usage note missing a translation`);
  }
}

/*
 * An overlay key that matches TWO vocabulary items is worse than one that
 * matches none: it silently decorates the wrong word. `yüz` is both "hundred"
 * and "face", and the senses overlay briefly gave the number a "surface"
 * meaning. `content/index.ts` now skips ambiguous words entirely, so any
 * overlay entry for one is dead data that looks alive.
 */
{
  const counts = new Map();
  for (const v of VOCABULARY) counts.set(v.tr, (counts.get(v.tr) ?? 0) + 1);
  const ambiguous = new Set([...counts.entries()].filter(([, n]) => n > 1).map(([w]) => w));

  for (const [name, overlay] of [
    ['Collocation', COLLOCATIONS],
    ['Sense', EXTRA_SENSES],
    ['Verb pattern', VERB_PATTERNS],
    ['Origin', ARABIC_ORIGIN],
    ['Connection', ARABIC_CONNECTIONS],
  ]) {
    if (typeof overlay === 'undefined') continue;
    for (const key of Object.keys(overlay)) {
      if (ambiguous.has(key)) {
        fail(`${name} overlay "${key}" is ambiguous (${counts.get(key)} entries share it) `
          + '- put the data inline on the entry it belongs to');
      }
    }
  }
}

/* A verb-pattern key with no word behind it documents nothing. */
if (typeof VERB_PATTERNS !== 'undefined') {
  const words = new Set(VOCABULARY.map((v) => v.tr));
  for (const [key, note] of Object.entries(VERB_PATTERNS)) {
    if (!words.has(key)) fail(`Verb pattern "${key}" matches no vocabulary item`);
    if (!note?.ar || !note?.ku) fail(`Verb pattern "${key}" is missing a translation`);
  }
}

/* Same rule for the senses overlay: a mistyped key teaches nobody anything. */
if (typeof EXTRA_SENSES !== 'undefined') {
  const words = new Set(VOCABULARY.map((v) => v.tr));
  for (const [key, list] of Object.entries(EXTRA_SENSES)) {
    if (!words.has(key)) fail(`Sense overlay "${key}" matches no vocabulary item`);
    for (const s of list) {
      if (!s.ar || !s.ku) fail(`Sense of "${key}" is missing a translation`);
      if (s.example && !s.example.tr) fail(`Sense of "${key}" has an example with no Turkish`);
    }
  }
}

/* An origin overlay entry matching no word is dead data. */
if (typeof ARABIC_ORIGIN !== 'undefined') {
  const words = new Set(VOCABULARY.map((v) => v.tr));
  for (const key of Object.keys(ARABIC_ORIGIN)) {
    if (!words.has(key)) fail(`Origin overlay "${key}" matches no vocabulary item`);
  }
}

/* A "root family" of one teaches nothing about relatedness; worth knowing. */
const singletonRoots = [...rootMembers.entries()].filter(([, m]) => m.length === 1);
if (singletonRoots.length > rootedCount * 0.8) {
  warn(`${singletonRoots.length} of ${rootMembers.size} roots have only one word — the root explorer needs families`);
}

/* ---------------- syllables ---------------- */

if (typeof SYLLABLE_SECTIONS !== 'undefined') {
  const seenSyl = new Set();
  for (const section of SYLLABLE_SECTIONS) {
    // A section may teach entirely through contrast pairs (minimal pairs
    // have no single-word entries), so "empty" only means no content at all.
    if (section.entries.length === 0 && (section.pairs ?? []).length === 0) {
      warn(`Syllable section "${section.id}" has neither entries nor pairs`);
    }
    for (const entry of section.entries) {
      if (seenSyl.has(entry.id)) fail(`Duplicate syllable id: ${entry.id}`);
      seenSyl.add(entry.id);
      // The split must account for every LETTER of the word. Punctuation and
      // spacing are not part of a syllable break — the sentence-rhythm drills
      // split on words and legitimately drop apostrophes and question marks.
      const letters = (x) => x
        .toLocaleLowerCase('tr-TR')
        .replace(/[^a-zçğıioöşüâîûñ]/gi, '');
      const joined = entry.syllables.join('');
      if (letters(joined) !== letters(entry.tr)) {
        fail(`Syllable split for "${entry.tr}" drops or adds letters (got "${joined}")`);
      }
      if (!entry.ar?.trim() || !entry.ku?.trim()) {
        fail(`Syllable entry "${entry.tr}" is missing a translation`);
      }
      if (entry.stress !== undefined && (entry.stress < 0 || entry.stress >= entry.syllables.length)) {
        fail(`Syllable entry "${entry.tr}" has a stress index outside its syllables`);
      }
    }
  }
}

/* ---------------- generated numeral spelling ---------------- */

/**
 * The number drills SPELL numerals rather than reading them from a table, so
 * the speller has to be right. Turkish is regular above twenty, but carries
 * two irregularities a generator gets wrong by default: `yüz` and `bin` stand
 * alone (never "bir yüz"), while `bir milyon` keeps its `bir`.
 *
 * Checked against the values the curriculum hand-wrote, so the generator and
 * the authored content can never drift apart.
 */
const NUMERAL_CASES = [
  [0, 'sıfır'], [7, 'yedi'], [15, 'on beş'], [42, 'kırk iki'],
  [100, 'yüz'], [245, 'iki yüz kırk beş'], [1000, 'bin'],
  [1250, 'bin iki yüz elli'], [2024, 'iki bin yirmi dört'],
  [1999, 'bin dokuz yüz doksan dokuz'], [1000000, 'bir milyon'],
];

{
  // The lib is TypeScript, so bundle it the same way the content graph is
  // bundled. A check that silently skips is not a check.
  const SPELL_OUT = path.join(ROOT, 'node_modules', '.cache-numerals.mjs');
  await build({
    entryPoints: [path.join(ROOT, 'src', 'lib', 'numberPractice.ts')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: SPELL_OUT,
    logLevel: 'silent',
    alias: { '@': path.join(ROOT, 'src'), '@content': path.join(ROOT, 'content') },
  });
  const { spellTurkishNumber } = await import(pathToFileURL(SPELL_OUT).href);

  for (const [n, expected] of NUMERAL_CASES) {
    const got = spellTurkishNumber(n);
    if (got !== expected) fail(`Numeral speller: ${n} -> "${got}", expected "${expected}"`);
  }

  /**
   * Clock times carry a case change that a generator gets wrong by default:
   * "past" takes the accusative (üçü geçiyor) and "to" takes the dative
   * (dörde var). Those two forms are the whole difficulty of telling the time
   * in Turkish, so they are pinned.
   */
  const CLOCK_CASES = [
    [3, 0, 'saat üç'],
    [3, 30, 'saat üç buçuk'],
    [3, 15, 'üçü çeyrek geçiyor'],
    [3, 45, 'dörde çeyrek var'],
    [12, 15, 'on ikiyi çeyrek geçiyor'],
    [1, 45, 'ikiye çeyrek var'],
    [9, 20, 'dokuzu yirmi geçiyor'],
    [11, 50, 'on ikiye on var'],
  ];
  const { spellTurkishClock, spellTurkishDate } = await import(
    pathToFileURL(SPELL_OUT).href
  ).catch(() => ({}));
  if (typeof spellTurkishClock === 'function') {
    for (const [h, m, expected] of CLOCK_CASES) {
      const got = spellTurkishClock(h, m);
      if (got !== expected) {
        fail(`Clock speller: ${h}:${String(m).padStart(2, '0')} -> "${got}", expected "${expected}"`);
      }
    }
  }
  if (typeof spellTurkishDate === 'function') {
    const got = spellTurkishDate(15, 5, 2026);
    const want = 'on beş Mayıs iki bin yirmi altı';
    if (got !== want) fail(`Date speller: got "${got}", expected "${want}"`);
  }

  unlinkSync(SPELL_OUT);
}

/* ---------------- report ---------------- */

const stats = {
  Letters: ALPHABET.length,
  'Letter examples': ALPHABET.reduce(
    (s2, l) => s2 + [l.example, l.example2, ...(l.more ?? [])].filter(Boolean).length, 0,
  ),
  Numbers: NUMBER_SECTIONS.reduce((s, x) => s + x.entries.length, 0),
  'Number sections': NUMBER_SECTIONS.length,
  Words: VOCABULARY.length,
  'Words with examples': `${withExample} (${examplePct}%)`,
  Categories: CATEGORIES.length,
  Lessons: LESSONS.length,
  Exercises: exerciseCount,
  'Sentence packs': SENTENCE_PACKS.length,
  Sentences: sentenceCount,
  Levels: LEVELS.length,
  'Arabic connections': VOCABULARY.filter((v) => v.arabic).length,
  'False friends': VOCABULARY.filter((v) => v.arabic?.relation === 'false-friend').length,
  'Multi-sense words': multiSense,
  Collocations: collocationCount,
  'Word origins': originCount,
  'With Arabic root': rootedCount,
  'Root families': [...rootMembers.values()].filter((m) => m.length > 1).length,
  'Origin corrections': misconceptionCount,
  'Case-distinguished pairs': caseVariants,
  Syllables: typeof SYLLABLE_SECTIONS !== 'undefined'
    ? SYLLABLE_SECTIONS.reduce((s2, x) => s2 + x.entries.length, 0)
    : 0,
};

console.log('\n  TurkishPath content report');
console.log('  ' + '─'.repeat(38));
for (const [key, value] of Object.entries(stats)) {
  console.log(`  ${key.padEnd(22)} ${String(value).padStart(14)}`);
}
console.log('  ' + '─'.repeat(38));

if (warnings.length > 0) {
  console.log(`\n  ${warnings.length} warning(s):`);
  warnings.slice(0, 20).forEach((w) => console.log(`    ! ${w}`));
}

if (errors.length > 0) {
  console.log(`\n  ${errors.length} ERROR(S):`);
  errors.slice(0, 40).forEach((e) => console.log(`    x ${e}`));
  console.log('');
  process.exit(1);
}

console.log('\n  All content checks passed.\n');
