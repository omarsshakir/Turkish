/**
 * Protection regression test.
 *
 * The validator's checks are only worth having if they still bite. Every phase
 * has added checks and every phase has also rewritten the content they guard,
 * so a check can quietly stop working — the classic failure is a check that
 * imports something that no longer exists and silently passes for months.
 *
 * This does the only thing that actually proves a check works: it breaks the
 * content on purpose, runs the validator, asserts the expected failure, and
 * restores the file. Nothing is left modified — the script restores from an
 * in-memory copy in a `finally`, and verifies the restore.
 *
 *   node scripts/protection-test.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const CASES = [
  {
    name: 'Turkish identity is exact (göl ≠ gol, tür ≠ tur)',
    file: 'content/a1/vocabulary.ts',
    // Duplicating an existing word must fail; a near-miss must not.
    break: (s) => s.replace(
      "  w('kitap',",
      "  w('kitap', 'ki-TAP', 'x', 'x'),\n  w('kitap',",
    ),
    expect: /Duplicate word|duplicate/i,
  },
  {
    name: 'Overlay ambiguity (homonym protection)',
    file: 'content/senses.ts',
    break: (s) => s.replace(
      'export const EXTRA_SENSES: Record<string, VocabSense[]> = {',
      "export const EXTRA_SENSES: Record<string, VocabSense[]> = {\n  'yemek': [sense('x', 'x')],",
    ),
    expect: /ambiguous/i,
  },
  {
    name: 'Orphan overlay key (no vocabulary behind it)',
    file: 'content/collocations.ts',
    break: (s) => s.replace(
      'export const COLLOCATIONS: Record<string, string[]> = {',
      "export const COLLOCATIONS: Record<string, string[]> = {\n  zzznotaword: ['zzznotaword yapmak'],",
    ),
    expect: /matches no vocabulary item/i,
  },
  {
    name: 'Collocation stem validation',
    file: 'content/collocations.ts',
    break: (s) => s.replace(
      'export const COLLOCATIONS: Record<string, string[]> = {',
      "export const COLLOCATIONS: Record<string, string[]> = {\n  kitap: ['tamamen alakasiz bir sey'],",
    ),
    expect: /shares no stem/i,
    warningOnly: true,
  },
  {
    name: 'Duplicate sentence detection',
    file: 'content/sentences-functional.ts',
    break: (s) => s.replace(
      "      p('Evet, öyle.'",
      "      p('Tabii ki.', 'ta-Bİ-i ki', 'بالتأكيد.', 'بێگومان.'),\n      p('Evet, öyle.'",
    ),
    expect: /Duplicate sentence/i,
    warningOnly: true,
  },
  {
    name: 'Syllable section id uniqueness',
    file: 'content/syllables-harmony.ts',
    break: (s) => s.replace("  id: 'harmony-two',", "  id: 'vowels',"),
    expect: /Duplicate syllable section id/i,
  },
  {
    name: 'Malformed Arabic root',
    file: 'content/arabic/origin.ts',
    break: (s) => s.replace("root: 'ك ت ب'", "root: 'notaroot'"),
    expect: /root/i,
  },
  {
    name: 'Origin overlay orphan',
    file: 'content/arabic/origin.ts',
    break: (s) => s.replace(
      'export const ARABIC_ORIGIN: Record<string, WordOrigin> = {',
      "export const ARABIC_ORIGIN: Record<string, WordOrigin> = {\n  zzzghostword: ar('كتاب', 'everyday', { root: 'ك ت ب' }),",
    ),
    expect: /matches no vocabulary item/i,
  },
  {
    name: 'Verb pattern overlay orphan',
    file: 'content/verb-patterns.ts',
    break: (s) => s.replace(
      'export const VERB_PATTERNS: Record<string, Bilingual> = {',
      "export const VERB_PATTERNS: Record<string, Bilingual> = {\n  zzzghostverb: b('x', 'x'),",
    ),
    expect: /matches no vocabulary item/i,
  },
  {
    name: 'Missing translation',
    file: 'content/a1/vocabulary-function-3.ts',
    break: (s) => s.replace("'و (حرف العطف)', 'و',", "'', 'و',"),
    expect: /missing ar|missing/i,
  },
];

let passed = 0;
const failures = [];

console.log('\n  Validator protection regression');
console.log('  ' + '='.repeat(62));
console.log('  Each check is proved by breaking the content and restoring it.\n');

for (const testCase of CASES) {
  const original = readFileSync(testCase.file, 'utf8');
  let output = '';
  try {
    const broken = testCase.break(original);
    if (broken === original) {
      failures.push(`${testCase.name}: could not apply the break (content moved?)`);
      console.log(`  ?  ${testCase.name} — SKIPPED, break no longer applies`);
      continue;
    }
    writeFileSync(testCase.file, broken);
    try {
      output = execFileSync('node', ['scripts/validate-content.mjs'], {
        encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
      });
    } catch (err) {
      // A non-zero exit is the expected outcome for a hard failure.
      output = `${err.stdout ?? ''}${err.stderr ?? ''}`;
    }
    if (testCase.expect.test(output)) {
      passed += 1;
      console.log(`  ok ${testCase.name}`);
    } else {
      failures.push(`${testCase.name}: validator did not complain`);
      console.log(`  XX ${testCase.name} — NOT CAUGHT`);
    }
  } finally {
    writeFileSync(testCase.file, original);
    if (readFileSync(testCase.file, 'utf8') !== original) {
      failures.push(`${testCase.name}: RESTORE FAILED for ${testCase.file}`);
    }
  }
}

console.log('  ' + '-'.repeat(62));
if (failures.length === 0) {
  console.log(`  All ${passed} protections still bite. Content restored.\n`);
} else {
  console.log(`  ${passed} passed, ${failures.length} problem(s):`);
  for (const f of failures) console.log(`    - ${f}`);
  console.log('');
  process.exit(1);
}
