import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const CHROME = process.env.CHROME_PATH
  ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = process.env.SMOKE_URL ?? 'http://localhost:5173';
const OUT = process.env.SHOT_DIR ?? 'screenshots';
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new', args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 950, deviceScaleFactor: 1 });

const shots = [
  ['dashboard', '/'],
  ['alphabet', '/alphabet'],
  ['numbers', '/numbers'],
  ['vocabulary', '/vocabulary'],
  ['grammar', '/grammar'],
  ['lesson', '/lesson/a1-vowel-harmony'],
  ['levels', '/levels'],
  ['sentences', '/sentences'],
  ['review', '/review'],
  ['listening', '/practice/listening'],
  ['speaking', '/practice/speaking'],
  ['reading', '/lesson/read-b2-social-media'],
];

for (const [name, path] of shots) {
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log(`  saved ${OUT}/${name}.png`);
}

// Letter detail panel
await page.goto(`${BASE}/alphabet?letter=uu`, { waitUntil: 'networkidle2' });
await new Promise((r) => setTimeout(r, 900));
await page.screenshot({ path: `${OUT}/letter-detail.png` });
console.log(`  saved ${OUT}/letter-detail.png`);

// Mobile
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto(`${BASE}/`, { waitUntil: 'networkidle2' });
await new Promise((r) => setTimeout(r, 900));
await page.screenshot({ path: `${OUT}/mobile-dashboard.png` });
console.log(`  saved ${OUT}/mobile-dashboard.png`);

await browser.close();
