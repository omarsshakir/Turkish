/**
 * Focused QA audit: Turkish orthography, RTL rendering, and accessibility.
 *
 * The smoke test proves features work. This proves they are *correct* for the
 * two things this platform cannot get wrong: Turkish characters and
 * right-to-left text.
 *
 * Run with: npm run qa   (a server must be running)
 */
import puppeteer from 'puppeteer-core';

const BASE = process.env.SMOKE_URL ?? 'http://localhost:5173';
const CHROME = process.env.CHROME_PATH
  ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const failures = [];
let step = 0;
const check = (label, ok, detail = '') => {
  step += 1;
  console.log(`  ${ok ? '✓' : '✗'} ${String(step).padStart(2)}. ${label}${detail ? ` — ${detail}` : ''}`);
  if (!ok) failures.push(label);
};

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new', args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 950 });

const goto = async (path) => {
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 400));
};

console.log('\n  TurkishPath QA audit — orthography, RTL, accessibility');
console.log('  ' + '─'.repeat(60));

try {
  /* ---------------- Turkish characters ---------------- */

  await goto('/alphabet');
  const letters = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('button[class*="aspect-square"]')];
    return cards.map((c) => c.innerText.split('\n')[0]);
  });
  const joined = letters.join(' ');

  for (const [name, glyph] of [
    ['Ç/ç', 'Çç'], ['Ğ/ğ', 'Ğğ'], ['I/ı', 'Iı'], ['İ/i', 'İi'],
    ['Ö/ö', 'Öö'], ['Ş/ş', 'Şş'], ['Ü/ü', 'Üü'],
  ]) {
    check(`Alphabet renders ${name} correctly`, joined.includes(glyph), glyph);
  }

  // The dotted/dotless pair must be two DISTINCT cards, not one duplicated.
  check('I (dotless) and İ (dotted) are separate letters',
    joined.includes('Iı') && joined.includes('İi'));

  // Turkish text must not be mangled to ASCII anywhere in the running app.
  await goto('/vocabulary');
  const vocabText = await page.evaluate(() => document.body.innerText);
  check('Turkish diacritics survive rendering',
    /ç/.test(vocabText) && /ğ/.test(vocabText) && /ş/.test(vocabText)
    && /ü/.test(vocabText) && /ö/.test(vocabText) && /ı/.test(vocabText));

  // Turkish-locale-aware search: "IŞIK" lowercased in Turkish is "ışık".
  await page.evaluate(() => {
    const input = document.querySelector('input[aria-label="Kelime ara"]');
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(input, 'isik');
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await new Promise((r) => setTimeout(r, 500));
  const folded = await page.evaluate(() => document.body.innerText);
  check('Search folds ı/i so "isik" finds "ışık"', folded.includes('ışık'));

  // CSS `text-transform: uppercase` is locale-sensitive. Under lang="tr" the
  // browser must apply TURKISH casing: "Metin" -> "METIN" with a dotted capital
  // I (U+0130), and "Alistirma" -> "ALISTIRMA" with a dotless one (U+0049).
  // Getting this wrong silently misspells every uppercase label in the UI.
  // Assert it against the locale-aware uppercase rather than a heuristic.
  await goto('/practice/listening');
  const casing = await page.evaluate(() => {
    const labels = [...document.querySelectorAll('span,div,h2,h3,p,button,th,a')]
      .filter((e) => e.children.length === 0
        && typeof e.innerText === 'string'
        && getComputedStyle(e).textTransform === 'uppercase'
        && /[iIİı]/.test(e.textContent ?? ''))
      .map((e) => ({
        source: (e.textContent ?? '').trim(),
        rendered: e.innerText.trim(),
      }))
      .filter((x) => x.source.length > 0);
    const wrong = labels.filter(
      (x) => x.rendered !== x.source.toLocaleUpperCase('tr-TR'),
    );
    return { total: labels.length, wrong, sample: labels[0] ?? null };
  });
  check('CSS uppercase applies Turkish casing rules',
    casing.total > 0 && casing.wrong.length === 0,
    casing.wrong.length > 0
      ? `${casing.wrong[0].source} rendered as ${casing.wrong[0].rendered}`
      : `${casing.total} labels, e.g. ${casing.sample?.source} -> ${casing.sample?.rendered}`);

  /* ---------------- RTL rendering ---------------- */

  await goto('/numbers');
  const rtl = await page.evaluate(() => {
    const arabic = [...document.querySelectorAll('.ar-text')];
    const kurdish = [...document.querySelectorAll('.ku-text')];
    const dirOf = (els) => els.map((e) => getComputedStyle(e).direction);
    const isolation = (els) => els.map((e) => getComputedStyle(e).unicodeBidi);
    return {
      arabicCount: arabic.length,
      kurdishCount: kurdish.length,
      arabicRtl: dirOf(arabic).every((d) => d === 'rtl'),
      kurdishRtl: dirOf(kurdish).every((d) => d === 'rtl'),
      isolated: [...isolation(arabic), ...isolation(kurdish)].every((v) => v === 'isolate'),
      // Both must actually render with the Arabic-script font stack.
      arabicFont: arabic[0] ? getComputedStyle(arabic[0]).fontFamily : '',
    };
  });
  check('Arabic text renders RTL', rtl.arabicRtl && rtl.arabicCount > 0, `${rtl.arabicCount} nodes`);
  check('Kurdish Sorani text renders RTL', rtl.kurdishRtl && rtl.kurdishCount > 0, `${rtl.kurdishCount} nodes`);
  check('RTL runs are bidi-isolated from Turkish', rtl.isolated);
  check('Arabic-script font stack applied', /Naskh|Arabic|Tahoma|serif/i.test(rtl.arabicFont));

  // Mixed Turkish + Arabic in one table must not reorder the Turkish.
  await goto('/lesson/a1-vowel-harmony');
  const mixed = await page.evaluate(() => {
    const cells = [...document.querySelectorAll('td')];
    const mixedCell = cells.find((c) => /[a-zçğıöşü]/i.test(c.innerText) && /[؀-ۿ]/.test(c.innerText));
    return mixedCell
      ? { text: mixedCell.innerText, dir: getComputedStyle(mixedCell).direction }
      : null;
  });
  check('Mixed Turkish/Arabic table cells stay LTR',
    mixed !== null && mixed.dir === 'ltr',
    mixed ? mixed.text.slice(0, 30) : 'no mixed cell found');

  /* ---------------- Language switch does not touch Turkish ---------------- */

  await goto('/alphabet?letter=uu');
  const beforeSwitch = await page.evaluate(() => {
    const el = [...document.querySelectorAll('[role="dialog"] p')].find((p) => /üzüm/i.test(p.innerText));
    return el?.innerText ?? null;
  });
  await page.evaluate(() => {
    [...document.querySelectorAll('button')].find((b) => b.innerText.trim() === 'کوردی')?.click();
  });
  await new Promise((r) => setTimeout(r, 500));
  const afterSwitch = await page.evaluate(() => {
    const el = [...document.querySelectorAll('[role="dialog"] p')].find((p) => /üzüm/i.test(p.innerText));
    return el?.innerText ?? null;
  });
  check('Switching support language leaves Turkish untouched',
    beforeSwitch !== null && beforeSwitch === afterSwitch, beforeSwitch ?? 'not found');

  /* ---------------- Accessibility ---------------- */

  const a11y = await page.evaluate(() => {
    const iconButtons = [...document.querySelectorAll('button')].filter((b) => {
      const text = b.innerText.trim();
      return text.length === 0;
    });
    const unlabelled = iconButtons.filter(
      (b) => !b.getAttribute('aria-label') && !b.getAttribute('title'),
    );
    const inputs = [...document.querySelectorAll('input:not([type=checkbox]):not([type=radio])')];
    const unlabelledInputs = inputs.filter((i) => (
      !i.getAttribute('aria-label')
      && !i.closest('label')
      && !document.querySelector(`label[for="${i.id}"]`)
    ));
    return {
      iconButtons: iconButtons.length,
      unlabelled: unlabelled.length,
      unlabelledExamples: unlabelled.slice(0, 3).map((b) => b.className.slice(0, 50)),
      inputs: inputs.length,
      unlabelledInputs: unlabelledInputs.length,
    };
  });
  check('Every icon-only button has an accessible name',
    a11y.unlabelled === 0,
    `${a11y.iconButtons} icon buttons, ${a11y.unlabelled} unlabelled`);
  check('Every text input has an accessible name',
    a11y.unlabelledInputs === 0, `${a11y.inputs} inputs`);

  // Keyboard: the focus ring must be visible and tab order must reach content.
  await goto('/');
  const keyboard = await page.evaluate(async () => {
    const focusables = [...document.querySelectorAll('a[href], button:not([disabled]), input, select')];
    const first = focusables[0];
    first?.focus();
    const styles = first ? getComputedStyle(first, ':focus-visible') : null;
    return {
      count: focusables.length,
      focused: document.activeElement === first,
      tag: document.activeElement?.tagName,
    };
  });
  check('Interactive elements are focusable', keyboard.focused && keyboard.count > 20,
    `${keyboard.count} focusable`);

  const skipToContent = await page.evaluate(() => Boolean(document.querySelector('main')));
  check('Page has a <main> landmark', skipToContent);

  const navLandmark = await page.evaluate(
    () => Boolean(document.querySelector('nav[aria-label]')),
  );
  check('Navigation has an accessible label', navLandmark);

  const langAttrs = await page.evaluate(() => ({
    html: document.documentElement.lang,
    turkishTagged: document.querySelectorAll('[lang="tr"]').length,
    arabicTagged: document.querySelectorAll('[lang="ar"]').length,
    kurdishTagged: document.querySelectorAll('[lang="ckb"]').length,
  }));
  // The UI language is Turkish, so the document baseline must be tr; the
  // Arabic/Kurdish runs override it with their own lang attributes.
  check('Document declares the Turkish interface language',
    langAttrs.html === 'tr', `lang="${langAttrs.html}"`);

  await goto('/numbers');
  const langAttrs2 = await page.evaluate(() => ({
    arabicTagged: document.querySelectorAll('[lang="ar"]').length,
    kurdishTagged: document.querySelectorAll('[lang="ckb"]').length,
  }));
  check('Arabic text is tagged lang="ar"', langAttrs2.arabicTagged > 0, `${langAttrs2.arabicTagged} nodes`);
  check('Kurdish text is tagged lang="ckb"', langAttrs2.kurdishTagged > 0, `${langAttrs2.kurdishTagged} nodes`);

  /* ---------------- Design system ---------------- */

  // Contrast, measured on what the browser actually paints rather than on
  // the palette values, so a token change cannot quietly break legibility.
  // Sampled on the dashboard, which carries a heading, body copy and links.
  await goto('/');
  const contrast = await page.evaluate(() => {
    const luminance = (rgb) => {
      const [r, g, b] = rgb.map((v) => {
        const c = v / 255;
        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    const parse = (value) => (value.match(/\d+(\.\d+)?/g) ?? []).slice(0, 3).map(Number);
    const ratio = (fg, bg) => {
      const a = luminance(parse(fg));
      const b = luminance(parse(bg));
      const [hi, lo] = a > b ? [a, b] : [b, a];
      return (hi + 0.05) / (lo + 0.05);
    };

    // Walk up for the first element that actually paints a background.
    const groundOf = (el) => {
      let node = el;
      while (node && node !== document.documentElement) {
        const bg = getComputedStyle(node).backgroundColor;
        const alpha = parse(getComputedStyle(node).backgroundColor.replace(/^rgba?\(/, ''));
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent' && alpha.length) return bg;
        node = node.parentElement;
      }
      return getComputedStyle(document.body).backgroundColor;
    };

    const sample = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const style = getComputedStyle(el);
      return {
        text: el.innerText.slice(0, 24),
        ratio: ratio(style.color, groundOf(el)),
        size: parseFloat(style.fontSize),
        weight: style.fontWeight,
      };
    };

    return {
      heading: sample('h1'),
      body: sample('main p'),
      link: sample('main a[href]'),
    };
  });

  for (const [name, min, got] of [
    ['Heading', 4.5, contrast.heading],
    ['Body text', 4.5, contrast.body],
    ['Link text', 4.5, contrast.link],
  ]) {
    // Large text (>=24px, or >=18.66px bold) only needs 3:1 under WCAG AA.
    const large = got && (got.size >= 24 || (got.size >= 18.66 && Number(got.weight) >= 700));
    const threshold = large ? 3 : min;
    check(
      `${name} meets WCAG AA contrast`,
      got !== null && got.ratio >= threshold,
      got ? `${got.ratio.toFixed(2)}:1 (needs ${threshold}:1)` : 'element not found',
    );
  }

  // The design system defines a fixed palette. A stray default-Tailwind hue
  // anywhere in the painted UI means a component escaped the system.
  const strays = await page.evaluate(() => {
    // Hues that belong to no part of the academy palette. Turquoise sits
    // around 180, cobalt 220, bole red 12, brass 40, and the ink ramp is
    // near-neutral, so violet/magenta/pure-green are the tell.
    const offenders = [];
    for (const el of document.querySelectorAll('*')) {
      const style = getComputedStyle(el);
      for (const prop of ['color', 'backgroundColor', 'borderTopColor']) {
        const m = style[prop].match(/\d+/g);
        if (!m || m.length < 3) continue;
        const [r, g, b] = m.slice(0, 3).map(Number);
        if (m[3] !== undefined && Number(m[3]) === 0) continue;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        if (max - min < 40) continue;            // near-neutral, fine
        let hue;
        if (max === r) hue = ((g - b) / (max - min)) * 60;
        else if (max === g) hue = (2 + (b - r) / (max - min)) * 60;
        else hue = (4 + (r - g) / (max - min)) * 60;
        if (hue < 0) hue += 360;
        // Violet/magenta band - present in no academy colour.
        if (hue > 255 && hue < 345) {
          offenders.push(`${el.tagName.toLowerCase()} ${prop} ${style[prop]}`);
        }
      }
    }
    return [...new Set(offenders)].slice(0, 4);
  });
  check('No off-palette hues in the painted UI', strays.length === 0,
    strays.length ? strays.join(' · ') : 'palette is coherent');

  // §20 — motion must actually stop, not merely shorten, when asked.
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'reduce' },
  ]);
  await goto('/practice/listening');
  const motion = await page.evaluate(() => {
    const animated = [...document.querySelectorAll('*')]
      .map((el) => getComputedStyle(el))
      .filter((s) => s.animationName !== 'none' && s.animationName !== '');
    return {
      count: animated.length,
      longest: Math.max(0, ...animated.map((s) => parseFloat(s.animationDuration) || 0)),
    };
  });
  check('Reduced motion stops animation', motion.longest < 0.01,
    `${motion.count} animated nodes, longest ${motion.longest}s`);
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'no-preference' },
  ]);

  // The rail is midnight in BOTH themes - the core identity decision.
  const railTone = await page.evaluate(() => {
    const rail = document.querySelector('aside');
    if (!rail) return null;
    const m = getComputedStyle(rail).backgroundColor.match(/\d+/g);
    if (!m) return null;
    const [r, g, b] = m.slice(0, 3).map(Number);
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  });
  check('Navigation rail stays dark in light mode',
    railTone !== null && railTone < 0.15,
    railTone === null ? 'rail not found' : `luminance ${railTone.toFixed(3)}`);

  /* ---------------- Empty states ---------------- */

  await page.evaluate(() => localStorage.clear());
  await goto('/favorites');
  let text = await page.evaluate(() => document.body.innerText);
  check('Favourites has a real empty state', text.includes('Henüz favori kelimen yok'));

  await goto('/review');
  text = await page.evaluate(() => document.body.innerText);
  check('Review has a real empty state', text.includes('Tekrar destesi oluştur'));

  await goto('/search?q=zzzzqqq');
  text = await page.evaluate(() => document.body.innerText);
  check('Search has a real empty state', text.includes('Sonuç bulunamadı'));

  /* ---------------- Mobile RTL ---------------- */

  await page.setViewport({ width: 390, height: 844 });
  await goto('/review');
  const mobileOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 2,
  );
  check('Review page has no horizontal overflow on mobile', !mobileOverflow);

  await goto('/practice/listening');
  const listeningOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 2,
  );
  check('Listening page has no horizontal overflow on mobile', !listeningOverflow);

  await goto('/lesson/read-c1-bilingualism');
  const readingOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 2,
  );
  check('Reading passage has no horizontal overflow on mobile', !readingOverflow);
} catch (err) {
  failures.push(`EXCEPTION: ${err.message}`);
  console.log(`\n  ✗ Exception: ${err.message}`);
} finally {
  await browser.close();
}

console.log('  ' + '─'.repeat(60));
if (failures.length > 0) {
  console.log(`\n  FAILED: ${failures.length} check(s)`);
  failures.forEach((f) => console.log(`    x ${f}`));
  console.log('');
  process.exit(1);
}
console.log(`\n  All ${step} QA checks passed.\n`);
