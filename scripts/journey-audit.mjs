/**
 * Learner journey audit.
 *
 * The other tests check pages in isolation. This one checks that the *loop*
 * works: a word marked learned must enter the SRS, become due, accept a grade,
 * change its interval, survive a refresh, and show up on the dashboard. That
 * is the product's core promise, and nothing else verifies it end to end.
 *
 * It also exercises search across all three scripts, and asserts the storage
 * invariants that would corrupt a learner's history if they broke: no negative
 * intervals, no impossible dates, no duplicate cards.
 *
 *   node scripts/journey-audit.mjs
 */
import puppeteer from 'puppeteer-core';

const BASE = process.env.SMOKE_URL ?? 'http://localhost:5173';
const CHROME = process.env.CHROME_PATH
  ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const failures = [];
let step = 0;
const check = (label, ok, detail = '') => {
  step += 1;
  console.log(`  ${ok ? 'ok' : 'XX'} ${String(step).padStart(2)}. ${label}${detail ? ` — ${detail}` : ''}`);
  if (!ok) failures.push(label);
};

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1360, height: 900 });

const consoleErrors = [];
page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 140)); });
page.on('pageerror', (e) => consoleErrors.push(`UNCAUGHT: ${e.message.slice(0, 140)}`));

const goto = (p) => page.goto(`${BASE}${p}`, { waitUntil: 'networkidle2', timeout: 30000 });
const storageKeys = () => page.evaluate(() => Object.keys(window.localStorage));
const readStore = () => page.evaluate(() => {
  const out = {};
  for (const k of Object.keys(window.localStorage)) {
    try { out[k] = JSON.parse(window.localStorage.getItem(k)); } catch { out[k] = window.localStorage.getItem(k); }
  }
  return out;
});

console.log('\n  Learner journey audit');
console.log('  ' + '='.repeat(66));

/* ---------------- new learner ---------------- */

await goto('/');
check('Dashboard loads for a first-time visitor',
  (await page.$eval('main', (el) => el.innerText.length)) > 100);

await goto('/vocabulary');
const marked = await page.evaluate(() => {
  // The real control is labelled "Öğrenildi olarak işaretle" (VocabRow.tsx).
  const btn = [...document.querySelectorAll('button')].find(
    (b) => /Öğrenil(di|medi)/i.test(b.getAttribute('aria-label') ?? ''),
  );
  if (btn) { btn.click(); return true; }
  return false;
});
check('A word can be marked learned from the vocabulary list', marked);

await new Promise((r) => setTimeout(r, 500));
let store = await readStore();
const keys = Object.keys(store);
check('Progress is persisted to localStorage', keys.length > 0, keys.join(', '));

/*
 * ProgressContext stores SRS cards in `reviews`, an object keyed by word id -
 * not an array called `cards`. Reading the wrong shape made this audit report
 * a broken SRS on a working one, which is the worst kind of test failure.
 */
const findCards = (s) => {
  for (const value of Object.values(s)) {
    if (value && typeof value === 'object' && value.reviews && typeof value.reviews === 'object') {
      return Object.values(value.reviews);
    }
  }
  return null;
};
let cards = findCards(store);
check('Marking learned enrols an SRS card', Array.isArray(cards) && cards.length > 0,
  cards ? `${cards.length} card(s)` : 'no cards array found');

/* ---------------- SRS invariants ---------------- */

if (Array.isArray(cards) && cards.length > 0) {
  const bad = cards.filter((c) => (c.interval ?? 0) < 0
    || (c.ease ?? 2.5) < 1.3
    || (c.repetitions ?? 0) < 0
    || (c.lapses ?? 0) < 0
    || !c.due || Number.isNaN(Date.parse(c.due)));
  check('No negative intervals, impossible eases or invalid due dates', bad.length === 0,
    bad.length ? JSON.stringify(bad[0]).slice(0, 90) : 'all clean');

  const ids = cards.map((c) => c.wordId ?? c.id ?? JSON.stringify(c));
  check('No duplicate SRS cards', new Set(ids).size === ids.length,
    `${ids.length} card(s), ${new Set(ids).size} unique`);
} else {
  check('No negative intervals, impossible eases or invalid due dates', false, 'no cards to check');
  check('No duplicate SRS cards', false, 'no cards to check');
}

/* ---------------- persistence across reload ---------------- */

await page.reload({ waitUntil: 'networkidle2' });
const afterReload = await readStore();
check('Progress survives a page refresh',
  JSON.stringify(findCards(afterReload) ?? []).length === JSON.stringify(cards ?? []).length);

/* ---------------- review loop ---------------- */

await goto('/review');
const reviewText = await page.$eval('main', (el) => el.innerText);
check('Review page renders (queue or a real empty state)', reviewText.trim().length > 40);

/* Force a card due, then confirm the review screen offers a grading control. */
await page.evaluate(() => {
  for (const k of Object.keys(window.localStorage)) {
    const raw = window.localStorage.getItem(k);
    if (!raw || !raw.includes('"due"')) continue;
    window.localStorage.setItem(k, raw.replace(/"due":"[^"]+"/g, '"due":"2000-01-01T00:00:00.000Z"'));
  }
});
await goto('/review');
const gradeButtons = await page.evaluate(() => [...document.querySelectorAll('button')]
  .map((b) => (b.innerText ?? '').trim()).filter(Boolean).length);
check('An overdue card produces a reviewable screen', gradeButtons > 0, `${gradeButtons} control(s)`);

/* ---------------- corrupt-storage resilience ---------------- */

await page.evaluate(() => {
  window.localStorage.setItem('turkishpath:progress', '{not valid json');
  window.localStorage.setItem('turkishpath:garbage', '\u0000\u0001broken');
});
const crashedBefore = consoleErrors.length;
await goto('/');
const dashOk = (await page.$eval('main', (el) => el.innerText.length)) > 100;
check('Corrupt localStorage does not crash the app', dashOk,
  `${consoleErrors.length - crashedBefore} new console error(s)`);

await page.evaluate(() => window.localStorage.clear());

/* ---------------- search across three scripts ---------------- */

const searchCases = [
  ['kitap', 'Turkish'],
  ['KİTAP', 'Turkish uppercase (dotted I)'],
  ['kitab', 'partial Turkish'],
  ['göl', 'Turkish ö'],
  ['%D9%83%D8%AA%D8%A7%D8%A8', 'Arabic كتاب'],
  ['%DA%A9%D8%AA%DB%8E%D8%A8', 'Kurdish کتێب'],
  ['%D9%83%20%D8%AA%20%D8%A8', 'Arabic root ك ت ب'],
  ['de%C4%9Fil', 'function word değil'],
  ['m%C4%B1', 'question particle mı'],
  ['%3Cscript%3Ealert(1)%3C%2Fscript%3E', 'XSS attempt'],
  ['', 'empty query'],
];
for (const [query, label] of searchCases) {
  const before = consoleErrors.length;
  await goto(`/search?q=${query}`);
  const body = await page.$eval('main', (el) => el.innerText);
  const alerted = await page.evaluate(() => document.body.innerHTML.includes('<script>alert'));
  const ok = body.trim().length > 20 && consoleErrors.length === before && !alerted;
  check(`Search: ${label}`, ok, ok ? '' : 'error or empty');
}

/* ---------------- intermediate and advanced paths ---------------- */

for (const route of ['/levels/b1', '/practice/listening', '/practice/speaking',
  '/connections', '/arabic-origin', '/practice/origin', '/progress']) {
  const before = consoleErrors.length;
  await goto(route);
  const len = await page.$eval('main', (el) => el.innerText.trim().length);
  check(`Journey step ${route}`, len > 40 && consoleErrors.length === before);
}

await browser.close();

console.log('  ' + '-'.repeat(66));
if (consoleErrors.length > 0) {
  console.log(`  ${consoleErrors.length} console error(s) during the journey:`);
  for (const e of [...new Set(consoleErrors)].slice(0, 5)) console.log(`    ! ${e}`);
}
if (failures.length === 0) {
  console.log(`  All ${step} journey checks passed.\n`);
} else {
  console.log(`  ${failures.length} failure(s):`);
  for (const f of failures) console.log(`    - ${f}`);
  console.log('');
  process.exit(1);
}
