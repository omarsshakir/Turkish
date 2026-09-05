/**
 * Portability check: does this repository build on a Linux runner?
 *
 * Development happens on Windows, deployment happens on Ubuntu, and three
 * differences between them break builds silently:
 *
 *   1. **Case sensitivity.** Windows and macOS resolve `./Utils` to `utils.ts`.
 *      Linux does not. An import with the wrong case works locally forever and
 *      fails the moment CI touches it — the single most common "works on my
 *      machine" CI failure there is.
 *
 *   2. **Path separators.** A backslash in an import or a config path is a
 *      literal character on Linux, not a separator.
 *
 *   3. **Reserved and awkward filenames.** A file named `aux.ts` or one
 *      differing from another only by case cannot coexist on Windows, and a
 *      path with a colon breaks checkout.
 *
 * This resolves every relative import in `src/` and `content/` against the
 * real directory listing, comparing byte for byte.
 *
 *   node scripts/portability-check.mjs
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SCAN_DIRS = ['src', 'content', 'scripts'];
const CODE = /\.(ts|tsx|mjs|js|jsx)$/;

const problems = [];
const notes = [];

/* ------------------------------------------------------------------ */
/* Collect every source file                                           */
/* ------------------------------------------------------------------ */

const files = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (CODE.test(entry.name)) files.push(full);
  }
};
for (const dir of SCAN_DIRS) {
  const full = path.join(ROOT, dir);
  if (existsSync(full)) walk(full);
}

/* ------------------------------------------------------------------ */
/* 1. Case-exact resolution of every relative and aliased import        */
/* ------------------------------------------------------------------ */

/** Real on-disk name of a path segment, or null when it does not exist. */
function realName(dir, wanted) {
  if (!existsSync(dir)) return null;
  return readdirSync(dir).find((n) => n.toLowerCase() === wanted.toLowerCase()) ?? null;
}

/** Walks a path segment by segment, reporting the first case mismatch. */
function checkCase(absolutePath) {
  const relative = path.relative(ROOT, absolutePath);
  const segments = relative.split(path.sep).filter(Boolean);
  let current = ROOT;
  for (const segment of segments) {
    const actual = realName(current, segment);
    if (actual === null) return { ok: false, reason: 'missing', at: segment };
    if (actual !== segment) return { ok: false, reason: 'case', at: segment, actual };
    current = path.join(current, actual);
  }
  return { ok: true };
}

const IMPORT = /(?:from|import)\s+['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/g;
const EXTENSIONS = ['', '.ts', '.tsx', '.js', '.mjs', '/index.ts', '/index.tsx'];

let importsChecked = 0;

for (const file of files) {
  const source = readFileSync(file, 'utf8');
  for (const match of source.matchAll(IMPORT)) {
    const spec = match[1] ?? match[2];
    if (!spec) continue;

    // Backslashes never belong in a module specifier.
    if (spec.includes('\\')) {
      problems.push(`${path.relative(ROOT, file)}: backslash in import "${spec}"`);
      continue;
    }

    let target = null;
    if (spec.startsWith('.')) {
      target = path.resolve(path.dirname(file), spec);
    } else if (spec.startsWith('@/')) {
      target = path.join(ROOT, 'src', spec.slice(2));
    } else if (spec.startsWith('@content/')) {
      target = path.join(ROOT, 'content', spec.slice('@content/'.length));
    } else {
      continue; // a package, not a file
    }

    // Find which extension actually resolves.
    const resolved = EXTENSIONS
      .map((ext) => target + ext)
      .find((candidate) => existsSync(candidate) && statSync(candidate).isFile());

    if (!resolved) {
      problems.push(`${path.relative(ROOT, file)}: cannot resolve "${spec}"`);
      continue;
    }

    importsChecked += 1;
    const verdict = checkCase(resolved);
    if (!verdict.ok && verdict.reason === 'case') {
      problems.push(
        `${path.relative(ROOT, file)}: import "${spec}" resolves to "${verdict.at}" `
        + `but the file on disk is "${verdict.actual}" — this fails on Linux`,
      );
    }
  }
}

/* ------------------------------------------------------------------ */
/* 2. Filenames that cannot survive a checkout                          */
/* ------------------------------------------------------------------ */

const seenLower = new Map();
for (const file of files) {
  const key = path.relative(ROOT, file).toLowerCase();
  if (seenLower.has(key)) {
    problems.push(`two files differ only by case: ${seenLower.get(key)} and ${path.relative(ROOT, file)}`);
  }
  seenLower.set(key, path.relative(ROOT, file));

  const base = path.basename(file, path.extname(file)).toUpperCase();
  if (['CON', 'PRN', 'AUX', 'NUL'].includes(base) || /^(COM|LPT)[1-9]$/.test(base)) {
    problems.push(`${path.relative(ROOT, file)}: reserved filename on Windows`);
  }
  if (/[:*?"<>|]/.test(path.basename(file))) {
    problems.push(`${path.relative(ROOT, file)}: character illegal on Windows`);
  }
}

/* ------------------------------------------------------------------ */
/* 3. Absolute or Windows-shaped paths in shipped code                  */
/* ------------------------------------------------------------------ */

for (const file of files) {
  if (file.includes(`${path.sep}scripts${path.sep}`)) continue; // dev tools may hard-code
  const source = readFileSync(file, 'utf8');
  const drive = source.match(/["'][A-Za-z]:[\\/]/);
  if (drive) {
    problems.push(`${path.relative(ROOT, file)}: absolute Windows path in shipped code`);
  }
}

/* ------------------------------------------------------------------ */
/* 4. The lockfile must exist for `npm ci`                              */
/* ------------------------------------------------------------------ */

if (!existsSync(path.join(ROOT, 'package-lock.json'))) {
  problems.push('package-lock.json is missing — `npm ci` cannot run in CI');
} else {
  const pkg = JSON.parse(readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
  const lock = JSON.parse(readFileSync(path.join(ROOT, 'package-lock.json'), 'utf8'));
  const declared = { ...pkg.dependencies, ...pkg.devDependencies };
  const lockRoot = lock.packages?.['']  ?? {};
  const lockDeclared = { ...lockRoot.dependencies, ...lockRoot.devDependencies };
  for (const [name, range] of Object.entries(declared)) {
    if (lockDeclared[name] !== range) {
      problems.push(`package-lock.json is out of sync for ${name} `
        + `(package.json wants ${range}, lock says ${lockDeclared[name] ?? 'nothing'}) — \`npm ci\` will fail`);
    }
  }
}

/* ------------------------------------------------------------------ */

console.log('\n  Portability check (Windows dev -> Linux CI)');
console.log('  ' + '='.repeat(66));
console.log(`  ${files.length} source files, ${importsChecked} local imports resolved case-exactly\n`);

for (const n of notes) console.log(`  note: ${n}`);

if (problems.length === 0) {
  console.log('  No portability problems. This builds on Linux.\n');
} else {
  console.log(`  ${problems.length} problem(s):`);
  for (const p of problems) console.log(`    - ${p}`);
  console.log('');
  process.exit(1);
}
