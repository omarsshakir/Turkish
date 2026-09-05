# TurkishPath — Türkçe Öğren

A complete Turkish language-learning platform for **Arabic** and **Kurdish (Sorani)** speakers,
covering **A1 → A2 → B1 → B2 → C1 → C1+**.

Every Turkish item on the platform carries four things: the Turkish text, a pronunciation
guide, an Arabic translation, a Kurdish Sorani translation — and a 🔊 button.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check + production build into `dist/` |
| `npm run preview` | Serve the production build |
| `npm run typecheck` | TypeScript only |
| `npm run validate` | **Content integrity check** — see below |
| `npm run smoke` | Browser smoke test, 120 checks (a server must be running) |
| `npm run qa` | Turkish orthography / RTL / accessibility audit, 37 checks |
| `npm run report` | Content inventory and coverage gaps (author tool) |

---

## What is in the box

| | |
| --- | --- |
| Levels | 6 (A1 → C1+) |
| Lessons | 54 — 37 grammar, 5 pronunciation, 8 conversation, 4 reading |
| Exercises (hand-written) | 290 |
| Exercises (generated) | unlimited — built from the vocabulary bank at runtime |
| Vocabulary | **2,366 words** in 49 categories, 99 % with example sentences |
| — of which B1 and above | **1,420** (B1 555 · B2 456 · C1 222 · C1+ 187) |
| Alphabet | 29 letters, each with contrastive AR/KU pronunciation notes |
| Numbers | 302 entries across 27 sections (0 → milyar, dates, times, addresses, statistics, decimals, ranges, currency…) |
| Sentence packs | 149 packs / 1,201 sentences |
| Conversations | 13 full dialogues, A1 → C1+ |
| Collocations | 2,773 pairings across 1,202 words |
| Arabic→Turkish connections | 466, of which 21 are false friends |
| Arabic-origin dictionary | 420 words · 282 roots · 66 root families · 17 corrections |
| Pronunciation | 306 authored drills + 47 contrast pairs across 27 sections, plus a generated pool over the whole vocabulary |
| Multi-sense words | 83 words carrying 131 extra senses |
| Kurdish flagged for native review | 442 — every technical-register word |
| Function words | **138 of 144** taught (96 %), 73 with a usage note |
| Verb patterns | 62 verbs documented for case, transitivity and the common learner error |
| Reading passages | 4 graded texts, B1 → C1+, each with glossary and comprehension questions |
| Listening material | 1,096 speakable items (words, phrases, sentences, dialogue lines, paragraphs) |

---

## Content tooling

```bash
npm run validate                  # correctness: ids, translations, overlays, etymology rules
npm run report                    # what the curriculum holds, and where the gaps are
npm run gaps                      # words the curriculum USES but does not TEACH
npm run protect                   # proves each validator check still bites, by breaking content
npm run harmony                   # vowel harmony on the mı/mi/mu/mü question particle
npm run bundle                    # where the bundle bytes are, and whether any are duplicated

# browser audits (need `npm run dev` running)
npm run routes                    # every route: loads, refreshes, no console errors
npm run journey                   # learner loop: learn -> SRS -> review -> persist
npm run responsive                # mobile/tablet/desktop overflow, tap targets, RTL
npm run audit                     # all of the above in one go
node scripts/author-check.mjs --check w1 w2 …   # which candidates are free
node scripts/author-check.mjs --look kitap      # everything held on one word
```

`gaps` is the tool that found the missing pronouns, question words, `değil`
and — two phases later — the question particle `mı/mi/mu/mü` and `ve`. Run it
before authoring: it ranks by frequency, so the top of its output is always
the highest-value gap. It also carries the reference list of 144 Turkish
function words that `npm run report` checks coverage against.

## Project structure

```
turkish/
├── content/                    ← ALL educational content. No UI code here.
│   ├── index.ts                ← the registry: everything the app reads
│   ├── levels.ts               ← A1…C1+ metadata and can-do statements
│   ├── categories.ts           ← the 34 vocabulary categories
│   ├── conversations.ts        ← dialogue lessons across levels
│   ├── shared/helpers.ts       ← b(), p(), w(), pack(), mcq(), fill()… authoring helpers
│   ├── a1/
│   │   ├── alphabet.ts         ← 29 letters
│   │   ├── numbers.ts          ← the whole number system
│   │   ├── vocabulary.ts
│   │   ├── grammar.ts          ← 8 lessons
│   │   ├── pronunciation.ts    ← 5 sound lessons (Ç/C, Ş/J, I/İ, Ö/Ü, Ğ)
│   │   └── sentences.ts
│   ├── a2/ b1/ b2/ c1/ c1-plus/   ← vocabulary.ts · grammar.ts · sentences.ts
│
├── src/
│   ├── types/content.ts        ← the content model every file conforms to
│   ├── lib/
│   │   ├── audio.ts            ← the audio engine (provider architecture)
│   │   ├── generate.ts         ← runtime exercise generation
│   │   ├── search.ts           ← the global search index
│   │   ├── storage.ts          ← namespaced localStorage
│   │   └── utils.ts            ← diacritic folding, shuffling, dates
│   ├── state/
│   │   ├── SettingsContext.tsx ← language, theme, voice, teacher mode
│   │   ├── ProgressContext.tsx ← completions, streak, favourites, unlocks
│   │   └── ContentContext.tsx  ← merges shipped + teacher-authored content
│   ├── components/
│   │   ├── audio/SpeakButton   ← THE audio component, used everywhere
│   │   ├── learn/              ← Translation, VocabRow, LessonBlocks
│   │   ├── exercises/          ← ExerciseRunner — all 7 exercise types
│   │   ├── layout/             ← AppShell, Sidebar, GlobalSearch
│   │   └── ui/                 ← Card, Button, Chip, ProgressBar…
│   └── pages/                  ← one file per route
│
└── scripts/
    ├── validate-content.mjs    ← content integrity checker
    ├── smoke-test.mjs          ← 85-check browser walkthrough
    ├── qa-audit.mjs            ← Turkish orthography / RTL / a11y audit
    ├── author-check.mjs        ← authoring aid: which words are already taken?
    └── screenshots.mjs
```

The visual language is documented in **[DESIGN.md](DESIGN.md)**; the curriculum
expansion and the Arabic-connection feature in **[EXPANSION.md](EXPANSION.md)**,
and the senses model, connection practice and collocations in
**[CURRICULUM.md](CURRICULUM.md)**, the Arabic-origin dictionary in
**[ORIGINS.md](ORIGINS.md)**, and the vocabulary, sentence and pronunciation
expansion that followed it in **[VOLUME.md](VOLUME.md)**.

Phase-2 additions (see **[PHASE2.md](PHASE2.md)** for the full write-up):

```
content/
├── reading.ts                  ← graded reading passages, B1 → C1+
├── conversations-advanced.ts   ← B2/C1/C1+ dialogues
├── sentences-advanced.ts       ← advanced sentence patterns
└── {b1,b2,c1,c1-plus}/vocabulary-extra.ts

src/lib/
├── srs.ts                      ← SM-2 spaced repetition
├── speech.ts                   ← speech recognition + honest scoring
├── recommend.ts                ← "what should I study today?"
├── progressRepository.ts       ← persistence abstraction (local / future remote)
└── contentValidation.ts        ← in-browser content checks for the teacher

content/
├── arabic/connections.ts       ← 305 Arabic ↔ Turkish relationships
├── arabic/origin.ts            ← 281 Arabic-origin words, 213 roots
├── arabic/vocabulary*.ts       ← the words those relationships attach to
├── syllables.ts                ← 198 authored drills, 19 sections (+1,483 generated)
├── numbers-extra.ts            ← percentages, measures, age, quantities
├── sentences-extra.ts          ← 8 function-organised packs
└── {a1,b1,b2,c1,c1-plus}/vocabulary-more.ts

src/lib/
├── connectionPractice.ts       ← 7 exercise types from the connection data
├── numberPractice.ts           ← generated numeral drills + the speller
└── originPractice.ts           ← root and etymology drills

src/pages/
├── Connections.tsx             ← Arabic → Turkish explorer
├── ArabicOrigin.tsx            ← origin dictionary + root explorer
├── ConnectionPractice.tsx      ← connection drills
├── OriginPractice.tsx          ← etymology drills
├── NumberPractice.tsx          ← number drills
├── Syllables.tsx               ← syllables and pronunciation
├── Review.tsx                  ← Review Today
├── Listening.tsx               ← dedicated listening mode
├── Speaking.tsx                ← speaking practice
└── AdminPanels.tsx             ← validation, audio coverage, level management
```

---

## How the audio system works

`src/lib/audio.ts` holds an **ordered list of providers**. Each is asked, in turn, whether it
can speak a given Turkish string:

1. **`RecordingProvider`** — looks the text up in `/public/audio/manifest.json`.
   Ships empty, so it always declines today.
2. **`WebSpeechProvider`** — the browser's built-in `tr-TR` speech synthesis.

The UI never knows which one answered. One component, `<SpeakButton text="merhaba" />`,
is used identically for letters, numbers, words, phrases, sentences, conjugation rows,
dialogue lines and exercise options. It handles idle / speaking / unsupported states,
cancels the previous utterance on a new tap, and counts listens toward progress.

### Replacing TTS with native-speaker recordings

No code changes needed:

1. Drop MP3s into `public/audio/`.
2. Create `public/audio/manifest.json` mapping normalised text → file path:

```json
{
  "merhaba": "/audio/merhaba.mp3",
  "günaydın": "/audio/gunaydin.mp3",
  "bir bardak çay lütfen": "/audio/bir-bardak-cay-lutfen.mp3"
}
```

Keys are lowercased (Turkish locale) with punctuation stripped. Any text present in the
manifest is played from the recording; everything else falls back to TTS. You can migrate
one word at a time.

To add a **third** source (a cloud TTS, a generated-audio CDN), write one object satisfying
the `AudioProvider` interface and register it in the `AudioEngine` constructor.

Students pick their voice and speed in **Settings**, which also tells them which provider is
currently answering.

---

## How the Turkish / Arabic / Kurdish content is structured

Everything is built from two primitives in `src/types/content.ts`:

```ts
// A string in both support languages. Turkish is never translated away.
interface Bilingual { ar: string; ku: string; en?: string }

// The atom of the platform.
interface Phrase { tr: string; pron: string; ar: string; ku: string }
```

Authoring uses the compact helpers in `content/shared/helpers.ts`:

```ts
b('شرح بالعربية', 'ڕوونکردنەوە بە کوردی')          // Bilingual
p('merhaba', 'mer-ha-BA', 'مرحباً', 'سڵاو')          // Phrase
w('kitap', 'ki-TAP', 'كتاب', 'کتێب',                 // vocabulary item
  ['Bu kitap güzel.', 'BU ki-TAP gü-ZEL', 'هذا الكتاب جميل.', 'ئەم کتێبە جوانە.'])
```

**Arabic and Kurdish are never blended.** The student sees one at a time; Settings →
"show both" renders them as two labelled, separated rows. Both are rendered RTL with
`unicode-bidi: isolate` so mixed Turkish/Arabic tables stay readable.

Lessons are **block lists**, not prose:

```ts
blocks: [
  { type: 'text',        body: b('…', '…') },
  { type: 'note',        tone: 'warn', body: b('…', '…') },
  { type: 'table',       headers: [...], rows: [[...]] },
  { type: 'examples',    items: [p(...), p(...)] },
  { type: 'conjugation', verb: 'gelmek', rows: [...] },
  { type: 'dialogue',    lines: [...] },
  { type: 'soundpairs',  pairs: [...] },   // minimal-pair drills
  { type: 'vocab',       ids: [...] },     // pulls words in by id
]
```

Adding a new block type = adding one case in `src/components/learn/LessonBlocks.tsx`.
Nothing else changes.

---

## How to add new content

### Add vocabulary

Open the level's `vocabulary.ts` and add a line to any pack:

```ts
const food = pack('food', 'a1', 'noun', [
  w('ekmek', 'ek-MEK', 'خبز', 'نان',
    ['Fırından ekmek aldım.', 'fı-rın-DAN ek-MEK al-DIM',
     'اشتريت خبزاً من المخبز.', 'لە نانەواخانە نانم کڕی.']),
  // ← your new word here
]);
```

That word now appears in the Vocabulary Explorer, global search, every practice mode,
and the level dashboard. No other file needs editing.

### Add a lesson

1. Add a `Lesson` object to the level's `grammar.ts`.
2. That is it — `content/index.ts` already aggregates the array.

```ts
{
  id: 'a2-my-lesson',
  level: 'a2',
  kind: 'grammar',
  order: 7,
  minutes: 20,
  title: 'Türkçe başlık',
  titleI18n: b('العنوان', 'ناونیشان'),
  objective: b('الهدف من الدرس', 'ئامانجی وانەکە'),
  blocks: [ /* … */ ],
  exercises: [ mcq(...), fill(...), order(...) ],
}
```

### Add a level

Add an entry to `content/levels.ts` and create `content/<id>/`. The dashboard, sidebar,
ladder, search and progress maths all read from the registry and pick it up automatically.

### Add content without editing files

Turn on **Settings → Teacher mode**, then use **Yönetim Paneli** (`/admin`) to create
lessons and vocabulary through a form. Those live in `localStorage`, merge with the shipped
curriculum, and can be exported as JSON from the *Yedekleme* tab and pasted into
`content/` to make them permanent.

---

## Content integrity checking

`npm run validate` bundles the content graph and checks what TypeScript cannot:

- exactly 29 letters, 8 vowels, no Q/W/X
- every exercise's `answer` index actually points at an option
- no duplicate options, no empty options
- every `fill` exercise's answer is among its own options
- every `fill` sentence contains a `___` gap
- table rows match their header count
- `vocab` blocks reference vocabulary ids that exist
- **no missing Arabic or Kurdish translation anywhere**
- no duplicate lesson / word / pack ids

Current status:

```
  Letters                            29
  Numbers                           148
  Words                             624
  Words with examples         612 (98%)
  Lessons                            47
  Exercises                         260
  Sentences                         161

  All content checks passed.
```

---

## Features

**Learning**
- Alphabet Explorer — 29 interactive cards, detail panel per letter with IPA, vowel
  properties, two example words, and a note written specifically for Arabic and Kurdish
  speakers (e.g. *"ü doesn't exist in either language — say `i`, then round your lips
  without moving your tongue"*).
- Numbers — 14 sections from `sıfır` to `milyar`, plus ordinals, dates, prices, telling
  the time, phone numbers, fractions and distributive numbers.
- Vocabulary Explorer — search Turkish/Arabic/Kurdish, filter by level, category and
  learned status, mark learned, star favourites, expand for example sentences.
- Grammar — 39 lessons from vowel harmony to academic Turkish, with tables, conjugation
  paradigms, minimal pairs and dialogues.
- Sentences — 19 function-based packs (introducing yourself, asking directions, arguing
  a point, professional communication).
- Conversations — full graded dialogues.

**Practice** — 7 exercise types: multiple choice, translation (TR→AR, TR→KU, AR→TR,
KU→TR), listening, word matching, sentence construction, fill-in-the-blank, and
listen-and-repeat. Immediate ✅/❌ feedback with the correct answer and a bilingual
explanation.

**Progress** — per-level percentages, completed lessons, learned words, exercise accuracy,
daily streak with a 12-week heatmap, best quiz scores, recommended next lesson.

**Levels** — locked until the previous level reaches 60 %; the teacher can override any
lock from `/levels` or the admin panel.

**Search** — one index over letters, numbers, words, lessons, sentences and categories.
Folds Turkish diacritics (`cocuk` finds `çocuk`) and normalises Arabic orthography
(`الكتاب` / `الكتب`). Results show Turkish | Pronunciation | العربية | کوردی | Level.
`⌘K` / `Ctrl+K` from anywhere.

---

## Deployment

The app is a static bundle: `npm run build` produces `dist/`, which any static
host can serve. There is no backend, so there is nothing to provision.

### Serving from a domain root

```bash
npm run build          # assets resolve at /assets/...
```

Upload `dist/` and you are done. This covers Netlify, Vercel, S3/CloudFront,
Nginx, and a GitHub Pages **user or organisation** site (`user.github.io`).

### Serving from a sub-path (GitHub Pages project site)

A project site lives at `https://user.github.io/<repo>/`, so the build has to
know that prefix or every asset URL points one level too high:

```bash
VITE_BASE=/<repo>/ npm run build
```

One variable configures both Vite and the router — `BrowserRouter` reads
`import.meta.env.BASE_URL`, so in-app links pick up the prefix automatically.

### SPA routing on a static host

GitHub Pages has no rewrite rule, so a request for `/levels/b1` is a real file
request that misses and falls through to `404.html`. The build therefore emits
`404.html` as a copy of `index.html`: the app boots from it and the router
reads the URL as usual. Deep links and refreshes work; the HTTP status of that
first response is 404, which is how every SPA on Pages behaves.

Hosts with rewrite support (Netlify `_redirects`, Vercel `rewrites`, Nginx
`try_files`) can point everything at `index.html` instead and get a 200.

### Verifying a deployment before shipping

```bash
npm run build && npm run deploy-check          # root
VITE_BASE=/repo/ npm run build && BASE_PATH=/repo npm run deploy-check
```

`deploy-check` serves `dist/` through a deliberately dumb static host that
mimics GitHub Pages — exact files, else `404.html` — and drives it with a real
browser, asserting that assets resolve, deep links boot the right route,
refresh works, and nothing requests a URL outside the base path.

### Security posture

This is a frontend-only application. What that does and does not buy you:

- **No secrets exist to leak.** There is no API key, token or credential in the
  source or the bundle, because there is no service to authenticate against.
- **No server-side attack surface.** No backend, no database, no endpoints.
- **No user data leaves the browser.** Progress, favourites and SRS state live
  in `localStorage` under the `turkishpath:v1:` prefix and are never
  transmitted. Clearing site data erases them permanently.
- **No injection surface.** The app renders no user-supplied HTML: there is no
  `dangerouslySetInnerHTML`, no `innerHTML` write and no `eval`. Search input is
  matched against content, never interpreted.
- **Teacher mode is a local convenience, not a security control.** It is a
  `localStorage` flag; anyone with the browser can set it. It gates authoring
  UI, not access to data, and there is no data it could protect.
- **What is NOT provided**: authentication, authorisation, multi-device sync,
  server-side validation or audit logging. Those require a backend, which this
  release deliberately does not have.

The only third-party requests are Google Fonts stylesheets from
`fonts.googleapis.com` / `fonts.gstatic.com`, declared in `index.html`.

## Technical notes

- **Vite 5 + React 18 + TypeScript (strict) + Tailwind CSS 3 + React Router 6.**
- Bundle is code-split: `curriculum` (the content), `react`, `icons`, `vendor`, `index`.
  Total ~290 kB gzipped, of which ~178 kB is the curriculum itself.
- Dark mode, full keyboard focus rings, `prefers-reduced-motion` respected,
  `aria-label` on every icon button, no horizontal overflow at 390 px.
- All state persists to `localStorage` under the `turkishpath:v1:` prefix, and degrades
  silently if storage is blocked.

### Dependencies installed

| Package | Why |
| --- | --- |
| `react`, `react-dom` | UI |
| `react-router-dom` | routing |
| `lucide-react` | icons |
| `vite`, `@vitejs/plugin-react` | build tooling |
| `typescript`, `@types/*` | types |
| `tailwindcss`, `postcss`, `autoprefixer` | styling |
| `esbuild` (dev) | bundles content for the validator |
| `puppeteer-core` (dev) | drives your installed Chrome for the smoke test |

No backend, no database, no account system — the whole platform is a static site.

---

## Limitations and recommended next steps

1. **Audio quality is browser TTS.** It is accurate for single words and short phrases but
   flat on long sentences, and voice availability varies by OS (Chrome and Edge on
   Windows ship a good `tr-TR` voice; some Linux builds ship none — Settings warns the
   student when no Turkish voice is found). The recording provider is already wired; adding
   real recordings is a content task, not a code task.

2. **Progress is per-browser.** There is no login, so a student's progress does not follow
   them between devices, and you cannot see your class's progress centrally. The admin
   *Öğrenci ilerlemesi* tab shows only the current device. Adding a backend
   (Supabase/Firebase) would be the natural next step; `ProgressContext` is the single
   place that would need to change.

3. **Speaking practice is self-assessed.** The listen-and-repeat exercise has no speech
   recognition — the student judges themselves. The Web Speech API's `SpeechRecognition`
   could score this, but its Turkish support is inconsistent across browsers.

4. **Vocabulary depth vs. the level targets.** 2,293 words covers A1–B2 well and samples
   C1/C1+ (202 and 162 words), but the level metadata targets 8,000 words by C1+. The
   authoring method is now audit-first — `node scripts/author-check.mjs --check <words>`
   names the real gaps before anything is written — and the architecture handles
   thousands of items without changes. See [VOLUME.md](VOLUME.md) for the current rate.

5. **Collocation and review coverage is partial.** 589 words carry collocations (32 %),
   leaving 620 B1+ words without any; 35 Kurdish terms are flagged `needs-review` and
   nothing is marked `verified`, because nothing has been verified by a speaker.

6. **Kurdish translations should get a native review.** The Sorani is written carefully and
   consistently, but a native Sorani speaker should proofread it before the platform goes
   to students — particularly the grammar explanations at B2 and above, where the
   terminology is technical.
