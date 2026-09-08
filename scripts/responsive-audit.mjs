/**
 * Responsive and accessibility audit across viewports.
 *
 * The existing QA suite checks contrast, focus and landmarks on a desktop
 * viewport. This checks the things that only break at a size: horizontal
 * overflow, clipped text, tap targets below the 24px minimum, content hidden
 * behind fixed navigation, and — the risk unique to this app — Arabic and
 * Kurdish blocks that lose their direction when squeezed.
 *
 *   node scripts/responsive-audit.mjs
 */
import puppeteer from 'puppeteer-core';
import { findChrome } from './lib/chrome.mjs';

const BASE = process.env.SMOKE_URL ?? 'http://localhost:5173';
const CHROME = findChrome();

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

/* Routes chosen for density: tables, dialogues, RTL blocks, long Turkish. */
const ROUTES = [
  '/', '/vocabulary', '/levels/a1', '/lesson/a1-vowel-harmony',
  '/lesson/conv-a1-directions', '/sentences', '/numbers', '/syllables',
  '/connections', '/arabic-origin', '/review', '/practice/vocabulary',
  '/themes', '/themes/colors', '/themes/opposites', '/themes/body',
  '/search?q=kitap', '/settings',
];

const failures = [];
const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();

console.log('\n  Responsive & accessibility audit');
console.log('  ' + '='.repeat(66));

for (const vp of VIEWPORTS) {
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
  console.log(`\n  ${vp.name} (${vp.width}x${vp.height})`);
  console.log('  ' + '-'.repeat(66));

  for (const route of ROUTES) {
    let problems = [];
    try {
      await page.goto(BASE + route, { waitUntil: 'networkidle2', timeout: 25000 });
      await new Promise((r) => setTimeout(r, 250));

      const result = await page.evaluate((viewportWidth) => {
        const out = { overflow: 0, tinyTargets: [], rtlBroken: [], clipped: [], hidden: 0 };

        // 1. Horizontal overflow of the document.
        out.overflow = document.documentElement.scrollWidth - window.innerWidth;

        // 2. Any element wider than the viewport that is not itself scrollable.
        for (const el of document.querySelectorAll('main *')) {
          const rect = el.getBoundingClientRect();
          if (rect.width <= viewportWidth + 2) continue;
          const style = getComputedStyle(el);
          if (style.overflowX === 'auto' || style.overflowX === 'scroll') continue;
          if (el.closest('[style*="overflow"], .overflow-x-auto')) continue;
          out.clipped.push(`${el.tagName.toLowerCase()} ${Math.round(rect.width)}px`);
          if (out.clipped.length > 2) break;
        }

        // 3. Tap targets. 24px is the WCAG 2.2 AA minimum.
        for (const el of document.querySelectorAll('main button, main a[href]')) {
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue;
          if (rect.width < 24 || rect.height < 24) {
            out.tinyTargets.push(`${el.tagName.toLowerCase()} ${Math.round(rect.width)}x${Math.round(rect.height)}`);
            if (out.tinyTargets.length > 2) break;
          }
        }

        // 4. Arabic and Kurdish must keep their direction at every width.
        for (const el of document.querySelectorAll('[lang="ar"], [lang="ckb"]')) {
          if (!el.textContent?.trim()) continue;
          const dir = getComputedStyle(el).direction;
          if (dir !== 'rtl') {
            out.rtlBroken.push(`${el.getAttribute('lang')} dir=${dir}`);
            if (out.rtlBroken.length > 2) break;
          }
        }

        // 5. Content hidden underneath fixed navigation.
        const main = document.querySelector('main');
        if (main) {
          const mainTop = main.getBoundingClientRect().top;
          for (const el of document.querySelectorAll('nav, header')) {
            const style = getComputedStyle(el);
            if (style.position !== 'fixed' && style.position !== 'sticky') continue;
            const rect = el.getBoundingClientRect();
            if (rect.bottom > mainTop + 4 && rect.height > 0 && rect.width > viewportWidth * 0.5) {
              out.hidden += 1;
            }
          }
        }
        return out;
      }, vp.width);

      if (result.overflow > 2) problems.push(`overflow ${result.overflow}px`);
      if (result.clipped.length) problems.push(`wide: ${result.clipped.join(', ')}`);
      if (result.tinyTargets.length) problems.push(`tiny targets: ${result.tinyTargets.join(', ')}`);
      if (result.rtlBroken.length) problems.push(`RTL lost: ${result.rtlBroken.join(', ')}`);
      if (result.hidden > 0) problems.push(`${result.hidden} region(s) overlap main`);
    } catch (err) {
      problems.push(`EXCEPTION ${String(err.message).slice(0, 60)}`);
    }

    const ok = problems.length === 0;
    if (!ok) failures.push(`${vp.name} ${route}: ${problems.join('; ')}`);
    console.log(`  ${ok ? 'ok' : 'XX'} ${route.padEnd(34)} ${problems.join('; ')}`);
  }
}

/* Keyboard reachability of the primary controls, once, at desktop size. */
await page.setViewport({ width: 1440, height: 900 });
await page.goto(`${BASE}/vocabulary`, { waitUntil: 'networkidle2' });
const keyboard = await page.evaluate(() => {
  const focusable = [...document.querySelectorAll(
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
  )].filter((el) => el.getBoundingClientRect().width > 0);
  const negativeTabIndex = focusable.filter((el) => el.getAttribute('tabindex') === '-1').length;
  const unlabelled = focusable.filter((el) => {
    const name = (el.getAttribute('aria-label') ?? el.innerText ?? el.getAttribute('title') ?? '').trim();
    return name.length === 0;
  }).length;
  return { count: focusable.length, negativeTabIndex, unlabelled };
});
const kbOk = keyboard.unlabelled === 0 && keyboard.count > 20;
if (!kbOk) failures.push(`keyboard: ${keyboard.unlabelled} unlabelled of ${keyboard.count}`);
console.log(`\n  ${kbOk ? 'ok' : 'XX'} keyboard: ${keyboard.count} focusable, ${keyboard.unlabelled} unlabelled`);

await browser.close();
console.log('  ' + '-'.repeat(66));
if (failures.length === 0) {
  console.log('  No responsive or accessibility defects.\n');
} else {
  console.log(`  ${failures.length} problem(s):`);
  for (const f of failures) console.log(`    - ${f}`);
  console.log('');
  process.exit(1);
}
