/**
 * Route audit.
 *
 * Every route the router declares, visited in a real browser, checked for the
 * things that make a page broken rather than merely ugly: a console error, an
 * empty main region, a dead nav state, or a crash on refresh.
 *
 * This is deliberately separate from the smoke test. The smoke test asserts
 * that specific content is present; this asserts that nothing is *on fire* on
 * any route, including the ones no test happened to cover.
 *
 *   node scripts/route-audit.mjs
 */
import puppeteer from 'puppeteer-core';
import { findChrome } from './lib/chrome.mjs';

const BASE = process.env.SMOKE_URL ?? 'http://localhost:5173';
const CHROME = findChrome();

/* Every route in src/App.tsx, plus representative parameterised ones. */
const ROUTES = [
  '/', '/alphabet', '/numbers', '/vocabulary', '/grammar', '/sentences',
  '/conversations', '/connections', '/arabic-origin', '/syllables',
  '/levels', '/levels/a1', '/levels/a2', '/levels/b1', '/levels/b2',
  '/levels/c1', '/levels/c1plus',
  '/lesson/a1-vowel-harmony', '/lesson/conv-a1-directions',
  '/practice/vocabulary', '/practice/grammar', '/practice/listening',
  '/practice/speaking', '/practice/connections', '/practice/numbers',
  '/practice/origin', '/practice/pronunciation',
  '/review', '/progress', '/favorites', '/settings', '/admin',
  '/search?q=kitap', '/search?q=%D9%83%D8%AA%D8%A7%D8%A8', '/search',
  '/definitely-not-a-route',
];

const failures = [];
const notes = [];

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1360, height: 900 });

console.log('\n  Route audit');
console.log('  ' + '='.repeat(66));

for (const route of ROUTES) {
  const errors = [];
  page.removeAllListeners('console');
  page.removeAllListeners('pageerror');
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text().replace(/\s+/g, ' ').slice(0, 120));
  });
  page.on('pageerror', (err) => errors.push(`UNCAUGHT: ${err.message.slice(0, 120)}`));

  let status = 'ok';
  const problems = [];
  try {
    await page.goto(BASE + route, { waitUntil: 'networkidle2', timeout: 25000 });
    await new Promise((r) => setTimeout(r, 350));

    const shape = await page.evaluate(() => {
      const main = document.querySelector('main');
      const text = (main?.innerText ?? '').trim();
      const nav = document.querySelector('nav');
      return {
        hasMain: Boolean(main),
        textLength: text.length,
        headings: document.querySelectorAll('h1, h2').length,
        hasNav: Boolean(nav),
        activeNav: document.querySelectorAll('[aria-current="page"]').length,
        // A dead button: rendered, enabled, but with no accessible name at all.
        namelessButtons: [...document.querySelectorAll('button')].filter((btn) => {
          const label = (btn.getAttribute('aria-label') ?? btn.innerText ?? '').trim();
          return label.length === 0 && !btn.querySelector('svg[aria-hidden="false"]');
        }).length,
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 2,
      };
    });

    if (!shape.hasMain) problems.push('no <main>');
    if (shape.textLength < 40) problems.push(`main nearly empty (${shape.textLength} chars)`);
    if (shape.headings === 0) problems.push('no h1/h2');
    if (!shape.hasNav) problems.push('no <nav>');
    if (shape.horizontalOverflow) problems.push('horizontal overflow');
    if (shape.namelessButtons > 0) problems.push(`${shape.namelessButtons} unlabelled button(s)`);
    if (errors.length > 0) problems.push(`${errors.length} console error(s): ${errors[0]}`);

    /* Refresh must work: on a static host this is where SPA routing breaks. */
    await page.reload({ waitUntil: 'networkidle2', timeout: 25000 });
    const afterReload = await page.evaluate(
      () => (document.querySelector('main')?.innerText ?? '').trim().length,
    );
    if (afterReload < 40) problems.push('empty after refresh');
  } catch (err) {
    problems.push(`EXCEPTION: ${String(err.message).slice(0, 90)}`);
  }

  if (problems.length > 0) {
    status = 'XX';
    failures.push(`${route}: ${problems.join('; ')}`);
  }
  console.log(`  ${status} ${route.padEnd(44)} ${problems.join('; ')}`);
}

/* Back/forward navigation across a few routes. */
try {
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle2' });
  await page.goto(`${BASE}/vocabulary`, { waitUntil: 'networkidle2' });
  await page.goto(`${BASE}/review`, { waitUntil: 'networkidle2' });
  // `page.url()` reads from the browser, not from a page-context evaluation:
  // evaluating right after a history navigation races the context teardown.
  await page.goBack({ waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 200));
  const back = new URL(page.url()).pathname;
  await page.goForward({ waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 200));
  const fwd = new URL(page.url()).pathname;
  const ok = back === '/vocabulary' && fwd === '/review';
  console.log(`  ${ok ? 'ok' : 'XX'} history back/forward${' '.repeat(23)} back=${back} forward=${fwd}`);
  if (!ok) failures.push(`history: back=${back} forward=${fwd}`);
} catch (err) {
  failures.push(`history: ${err.message}`);
}

await browser.close();

console.log('  ' + '-'.repeat(66));
if (failures.length === 0) {
  console.log(`  All ${ROUTES.length} routes healthy.\n`);
} else {
  console.log(`  ${failures.length} route problem(s):`);
  for (const f of failures) console.log(`    - ${f}`);
  console.log('');
  process.exit(1);
}
if (notes.length) for (const n of notes) console.log(`  note: ${n}`);
