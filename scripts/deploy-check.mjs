/**
 * Static deployment check.
 *
 * Verifies the built `dist/` actually works the way a static host serves it,
 * rather than the way `vite preview` does. Two things differ and both have
 * broken real deployments:
 *
 *   1. A project site lives under `/<repo>/`, so root-absolute asset URLs
 *      resolve one level too high and every script 404s.
 *   2. GitHub Pages has no SPA rewrite. A deep link is a real file request,
 *      and when the file is missing the host serves 404.html — which is why
 *      the build ships a copy of index.html under that name.
 *
 * This serves `dist/` under a sub-path with a GitHub-Pages-shaped 404 rule and
 * drives it with a real browser.
 *
 *   node scripts/deploy-check.mjs           # expects a /turkishpath/ build
 *   BASE_PATH=/foo node scripts/deploy-check.mjs
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const BASE_PATH = process.env.BASE_PATH ?? '/turkishpath';
const PORT = Number(process.env.PORT ?? 4178);
const CHROME = process.env.CHROME_PATH
  ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
};

const failures = [];
let step = 0;
const check = (label, ok, detail = '') => {
  step += 1;
  console.log(`  ${ok ? 'ok' : 'XX'} ${String(step).padStart(2)}. ${label}${detail ? ` — ${detail}` : ''}`);
  if (!ok) failures.push(`${label}${detail ? `: ${detail}` : ''}`);
};

if (!existsSync(DIST)) {
  console.error('\n  dist/ not found. Build first:\n'
    + `    VITE_BASE=${BASE_PATH}/ npm run build\n`);
  process.exit(1);
}

/* A deliberately dumb static host: exact files, else 404.html, like Pages. */
const requested = [];
const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  requested.push(url.pathname);

  if (!url.pathname.startsWith(`${BASE_PATH}/`) && url.pathname !== BASE_PATH) {
    res.writeHead(404).end('outside base path');
    return;
  }
  const rel = url.pathname.slice(BASE_PATH.length).replace(/^\/+/, '') || 'index.html';
  const file = path.join(DIST, rel);

  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    // Exactly what GitHub Pages does with an unknown path.
    try {
      const fallback = await readFile(path.join(DIST, '404.html'));
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end(fallback);
    } catch {
      res.writeHead(404).end('not found');
    }
  }
});
await new Promise((resolve) => server.listen(PORT, resolve));

console.log('\n  Static deployment check');
console.log('  ' + '='.repeat(66));
console.log(`  serving dist/ at http://localhost:${PORT}${BASE_PATH}/\n`);

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
const errors = [];
const failedRequests = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 140)); });
page.on('pageerror', (e) => errors.push(`UNCAUGHT: ${e.message.slice(0, 140)}`));
page.on('requestfailed', (r) => failedRequests.push(r.url()));
page.on('response', (r) => {
  if (r.status() >= 400 && !r.url().includes('/404')) failedRequests.push(`${r.status()} ${r.url()}`);
});

const origin = `http://localhost:${PORT}`;

/* 1. The app boots at the sub-path. */
await page.goto(`${origin}${BASE_PATH}/`, { waitUntil: 'networkidle2', timeout: 30000 });
const rootText = await page.evaluate(() => (document.querySelector('main')?.innerText ?? '').trim().length);
check('App boots under the deployment sub-path', rootText > 100, `${rootText} chars`);

const assetFailures = failedRequests.filter((u) => u.includes('/assets/') || u.includes('favicon'));
check('All assets resolve under the sub-path', assetFailures.length === 0,
  assetFailures.slice(0, 2).join(', '));

/* 2. In-app navigation keeps the base. */
const navOk = await page.evaluate(async (base) => {
  const link = [...document.querySelectorAll('a[href]')]
    .find((a) => a.getAttribute('href')?.startsWith(base) && a.getAttribute('href') !== `${base}/`);
  if (!link) return { ok: false, reason: 'no in-app link found' };
  link.click();
  await new Promise((r) => setTimeout(r, 600));
  return { ok: window.location.pathname.startsWith(base), path: window.location.pathname };
}, BASE_PATH);
check('In-app links stay inside the base path', navOk.ok, navOk.path ?? navOk.reason);

/* 3. A deep link served through 404.html still boots the router. */
const deep = `${origin}${BASE_PATH}/levels/b1`;
const before = errors.length;
const response = await page.goto(deep, { waitUntil: 'networkidle2', timeout: 30000 });
const deepText = await page.evaluate(() => (document.querySelector('main')?.innerText ?? '').trim().length);
const deepPath = await page.evaluate(() => window.location.pathname);
check('Deep link falls back to 404.html and renders the right route',
  deepText > 100 && deepPath === `${BASE_PATH}/levels/b1`,
  `HTTP ${response?.status()}, ${deepText} chars, path ${deepPath}`);
/*
 * Exactly two 404s are expected here, and both are correct behaviour:
 *
 *   - the deep link itself, because the GitHub Pages fallback IS a 404
 *     response whose body is index.html;
 *   - /audio/manifest.json, an optional file that does not exist while all
 *     audio is browser TTS. `RecordingProvider` treats its absence as "no
 *     recordings yet", not as an error.
 *
 * Anything else 404-ing is a real broken asset.
 */
const benign404 = (url) => url.includes('/audio/manifest.json') || url.includes(deep.slice(origin.length));
const unexpected404 = failedRequests.filter((u) => !benign404(u));
check('Deep link produces no unexpected 404s', unexpected404.length === 0,
  unexpected404.length ? unexpected404.join(' ; ') : 'only the SPA fallback and the optional audio manifest');

/* 4. Refresh on a deep route. */
await page.reload({ waitUntil: 'networkidle2' });
const afterReload = await page.evaluate(() => (document.querySelector('main')?.innerText ?? '').trim().length);
check('Refresh on a deep route still works', afterReload > 100, `${afterReload} chars`);

/* 5. Nothing reaches outside the base path. */
const outside = requested.filter((p) => !p.startsWith(BASE_PATH));
check('No request escapes the base path', outside.length === 0, outside.slice(0, 3).join(', '));

/* 6. Page metadata survives the build. */
const meta = await page.evaluate(() => ({
  title: document.title,
  lang: document.documentElement.lang,
  description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
  favicon: document.querySelector('link[rel="icon"]')?.getAttribute('href') ?? '',
}));
check('Title, lang and description are present',
  meta.title.length > 3 && meta.lang === 'tr' && meta.description.length > 20,
  `"${meta.title}" lang=${meta.lang}`);

const faviconRes = await page.goto(new URL(meta.favicon, `${origin}${BASE_PATH}/`).href);
check('Favicon resolves', faviconRes?.status() === 200, `HTTP ${faviconRes?.status()}`);

await browser.close();
server.close();

console.log('  ' + '-'.repeat(66));
if (failures.length === 0) {
  console.log(`  All ${step} deployment checks passed.\n`);
} else {
  console.log(`  ${failures.length} deployment problem(s):`);
  for (const f of failures) console.log(`    - ${f}`);
  console.log('');
  process.exit(1);
}
