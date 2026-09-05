import { useState } from 'react';
import {
  AlertTriangle, BookMarked, BookOpenText, Info, Lightbulb, Table2,
} from 'lucide-react';
import type { LessonBlock } from '@/types/content';
import { cx } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useSettings } from '@/state/SettingsContext';
import { SpeakButton, SpeakSequenceButton } from '@/components/audio/SpeakButton';
import { PhraseRow, Translated } from './Translation';
import { VocabRow } from './VocabRow';

/**
 * Renders one lesson block. Adding a new block type to the content model means
 * adding exactly one case here - nothing else in the app changes.
 */
export function LessonBlockView({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case 'text': return <TextBlock block={block} />;
    case 'note': return <NoteBlock block={block} />;
    case 'examples': return <ExamplesBlock block={block} />;
    case 'table': return <TableBlock block={block} />;
    case 'conjugation': return <ConjugationBlock block={block} />;
    case 'vocab': return <VocabBlock block={block} />;
    case 'dialogue': return <DialogueBlock block={block} />;
    case 'passage': return <PassageBlock block={block} />;
    case 'soundpairs': return <SoundPairsBlock block={block} />;
    default: return null;
  }
}

function BlockTitle({ title, icon }: { title?: string; icon?: React.ReactNode }) {
  if (!title) return null;
  return (
    <h3 className="mb-3 flex items-center gap-2 font-display text-base font-semibold text-ink-900 dark:text-white">
      {icon}
      {title}
    </h3>
  );
}

/* --------------------------------------------------------------- */

function TextBlock({ block }: { block: Extract<LessonBlock, { type: 'text' }> }) {
  return (
    <section className="card p-5">
      <BlockTitle title={block.title} />
      <Translated value={block.body} />
    </section>
  );
}

const NOTE_TONE = {
  tip: {
    ring: 'border-brand-200 bg-brand-50/60 dark:border-brand-900 dark:bg-brand-950/30',
    icon: 'text-brand-600 dark:text-brand-400',
    Icon: Lightbulb,
    label: 'İpucu',
  },
  warn: {
    ring: 'border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/25',
    icon: 'text-amber-600 dark:text-amber-400',
    Icon: AlertTriangle,
    label: 'Dikkat',
  },
  rule: {
    ring: 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/25',
    icon: 'text-emerald-600 dark:text-emerald-400',
    Icon: Info,
    label: 'Kural',
  },
} as const;

function NoteBlock({ block }: { block: Extract<LessonBlock, { type: 'note' }> }) {
  const tone = NOTE_TONE[block.tone ?? 'tip'];
  const { Icon } = tone;
  return (
    <section className={cx('rounded-2xl border-2 p-5', tone.ring)}>
      <div className="mb-2.5 flex items-center gap-2">
        <Icon size={17} className={tone.icon} />
        <span className={cx('font-display text-sm font-bold', tone.icon)}>
          {block.title ?? tone.label}
        </span>
      </div>
      <Translated value={block.body} />
    </section>
  );
}

function ExamplesBlock({ block }: { block: Extract<LessonBlock, { type: 'examples' }> }) {
  return (
    <section className="card overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-ink-200 px-5 py-3.5 dark:border-ink-800">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
          {block.title ?? 'Örnekler'}
        </h3>
        <SpeakSequenceButton texts={block.items.map((i) => i.tr)} label="Hepsini dinle" />
      </div>
      <ul className="divide-y divide-ink-100 p-1.5 dark:divide-ink-800">
        {block.items.map((item, i) => (
          <PhraseRow key={item.tr + i} phrase={item} index={i} />
        ))}
      </ul>
    </section>
  );
}

function TableBlock({ block }: { block: Extract<LessonBlock, { type: 'table' }> }) {
  return (
    <section className="card overflow-hidden">
      <div className="px-5 pt-5">
        <BlockTitle title={block.title} icon={<Table2 size={16} className="text-ink-400" />} />
      </div>
      <div className="overflow-x-auto px-5">
        <table className="w-full min-w-[34rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-ink-200 dark:border-ink-700">
              {block.headers.map((header) => (
                <th
                  key={header}
                  className="px-3 py-2.5 text-left font-display text-xs font-bold uppercase tracking-wide text-ink-500 dark:text-ink-400"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {block.rows.map((row, ri) => (
              <tr key={ri} className="transition hover:bg-ink-50 dark:hover:bg-ink-950/50">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    dir={/[؀-ۿ]/.test(cell) && !/[a-zA-ZçğıöşüÇĞİÖŞÜ]/.test(cell) ? 'rtl' : 'ltr'}
                    className={cx(
                      'px-3 py-2.5 align-top',
                      ci === 0
                        ? 'font-display font-semibold text-ink-900 dark:text-white'
                        : 'text-ink-700 dark:text-ink-300',
                      /[؀-ۿ]/.test(cell) && 'font-arabic',
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.caption && (
        <div className="px-5 pb-5 pt-3">
          <div className="rounded-xl bg-ink-50 p-3.5 dark:bg-ink-950/60">
            <Translated value={block.caption} size="sm" />
          </div>
        </div>
      )}
      {!block.caption && <div className="pb-5" />}
    </section>
  );
}

/**
 * Splits a conjugated form into stem + ending so the suffix can be shown in a
 * different colour — the "root → suffix → meaning" relationship from §10.
 *
 * Deliberately conservative. Turkish mutates consonants (gitmek → gidiyorum)
 * and the stem is then simply not a prefix of the form. Rather than guess at a
 * decomposition and teach something false, this returns null and the word
 * renders plain: showing nothing beats showing a wrong analysis.
 */
function splitStem(form: string, stem: string): [string, string, string] | null {
  if (stem.length < 2) return null;
  const at = form.toLocaleLowerCase('tr-TR').indexOf(stem.toLocaleLowerCase('tr-TR'));
  if (at < 0) return null;
  // Must begin a word, and something must follow it, or there is no suffix.
  if (at > 0 && !/\s/.test(form[at - 1])) return null;
  const end = at + stem.length;
  if (end >= form.length) return null;
  return [form.slice(0, at), form.slice(at, end), form.slice(end)];
}

/** The dictionary form minus its -mek/-mak infinitive ending. */
function verbStem(verb: string): string {
  return verb.replace(/m[ae]k$/i, '');
}

function ConjugationBlock({ block }: { block: Extract<LessonBlock, { type: 'conjugation' }> }) {
  const { showPronunciation } = useSettings();
  const stem = verbStem(block.verb);
  return (
    <section className="card overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b px-5 py-3.5 hairline">
        <div>
          <h3 className="t-h3 text-primary">{block.title ?? 'Fiil çekimi'}</h3>
          {/* The dictionary form, with its infinitive ending greyed back so
              the stem the student must recognise stands out. */}
          <p className="mt-1 font-mono text-xs">
            <span className="text-secondary">{stem}</span>
            <span className="text-muted">{block.verb.slice(stem.length)}</span>
          </p>
        </div>
        <SpeakSequenceButton texts={block.rows.map((r) => r.tr)} label="Çekimi dinle" />
      </div>
      <ul className="divide-y divide-ink-100 dark:divide-ink-800">
        {block.rows.map((row) => (
          <li key={row.person} className="flex items-center gap-3 px-5 py-3 transition-colors duration-150 hover:bg-brand-50/60 dark:hover:bg-brand-950/30">
            <span className="w-16 shrink-0 font-mono text-xs font-semibold text-muted">
              {row.person}
            </span>
            <div className="min-w-0 flex-1">
              <p className="tr-word text-[15px]" lang="tr">
                <Conjugated form={row.tr} stem={stem} />
              </p>
              {showPronunciation && <p className="pron mt-0.5">{row.pron}</p>}
              <div className="mt-1.5">
                <Translated value={{ ar: row.ar, ku: row.ku }} size="sm" />
              </div>
            </div>
            <SpeakButton text={row.tr} size="sm" />
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Renders a conjugated form with its changing ending picked out. */
function Conjugated({ form, stem }: { form: string; stem: string }) {
  const parts = splitStem(form, stem);
  if (!parts) return <>{form}</>;
  const [before, root, suffix] = parts;
  return (
    <>
      {before}
      {root}
      <span className="text-accent-700 dark:text-accent-400">{suffix}</span>
    </>
  );
}

function VocabBlock({ block }: { block: Extract<LessonBlock, { type: 'vocab' }> }) {
  const { vocabById } = useContent();
  const items = block.ids.map(vocabById).filter(Boolean);
  if (items.length === 0) return null;

  return (
    <section className="card overflow-hidden">
      <div className="border-b border-ink-200 px-5 py-3.5 dark:border-ink-800">
        <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink-900 dark:text-white">
          <BookMarked size={16} className="text-ink-400" />
          {block.title ?? 'Bu dersin kelimeleri'}
        </h3>
      </div>
      <ul className="divide-y divide-ink-100 dark:divide-ink-800">
        {items.map((item) => item && <VocabRow key={item.id} item={item} />)}
      </ul>
    </section>
  );
}

function DialogueBlock({ block }: { block: Extract<LessonBlock, { type: 'dialogue' }> }) {
  const { showPronunciation } = useSettings();
  const speakers = [...new Set(block.lines.map((l) => l.speaker))];

  return (
    <section className="card overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-ink-200 px-5 py-3.5 dark:border-ink-800">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
          {block.title ?? 'Diyalog'}
        </h3>
        <SpeakSequenceButton texts={block.lines.map((l) => l.tr)} label="Diyaloğu dinle" />
      </div>
      {/* §17 — each speaker keeps a consistent side, colour and initial, so
          the student can follow who is talking without re-reading the name.
          The avatar and name appear only when the turn changes hands, which
          is what makes a long exchange read as conversation rather than as a
          list of labelled rows. */}
      <ul className="space-y-3.5 p-4">
        {block.lines.map((line, i) => {
          const isFirst = speakers.indexOf(line.speaker) === 0;
          const startsTurn = i === 0 || block.lines[i - 1].speaker !== line.speaker;

          return (
            <li
              key={i}
              className={cx('flex items-end gap-2.5', isFirst ? 'justify-start' : 'flex-row-reverse')}
            >
              <span
                className={cx(
                  'grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-[11px] font-bold',
                  startsTurn ? 'opacity-100' : 'opacity-0',
                  isFirst
                    ? 'bg-ink-200 text-ink-700 dark:bg-ink-700 dark:text-ink-200'
                    : 'bg-brand-700 text-white',
                )}
                aria-hidden
              >
                {line.speaker.slice(0, 1).toLocaleUpperCase('tr-TR')}
              </span>

              <div
                className={cx(
                  'max-w-[82%] rounded-2xl border px-4 py-3',
                  isFirst
                    ? 'rounded-bl-sm border-ink-200 surface-sunken dark:border-ink-800'
                    : 'rounded-br-sm border-brand-100 bg-brand-50 dark:border-brand-900 dark:bg-brand-950/60',
                )}
              >
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <span
                    className={cx(
                      'font-mono text-[10px] font-bold uppercase tracking-[.12em]',
                      startsTurn ? 'opacity-100' : 'opacity-0',
                      isFirst ? 'text-muted' : 'text-brand-700 dark:text-brand-300',
                    )}
                  >
                    {line.speaker}
                  </span>
                  <SpeakButton text={line.tr} size="xs" variant="ghost" />
                </div>
                <p className="tr-word text-[15px] leading-snug" lang="tr">{line.tr}</p>
                {showPronunciation && <p className="pron mt-0.5">{line.pron}</p>}
                <div className="mt-2">
                  <Translated value={{ ar: line.ar, ku: line.ku }} size="sm" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}


/**
 * A reading passage.
 *
 * Each paragraph is its own row with its own audio button and its own
 * translation, and the translation can be hidden so the student reads the
 * Turkish first - which is the whole point of a reading exercise.
 */
function PassageBlock({ block }: { block: Extract<LessonBlock, { type: 'passage' }> }) {
  const [showTranslation, setShowTranslation] = useState(true);
  const wordCount = block.paragraphs.reduce(
    (sum, para) => sum + para.tr.split(/\s+/).length, 0,
  );
  // Longest first, so "karar vermek" is matched before "karar".
  const glossaryTerms = (block.glossary ?? [])
    .map((entry) => entry.tr)
    .sort((a, b) => b.length - a.length);

  return (
    <section className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-200 px-5 py-3.5 dark:border-ink-800">
        <div className="min-w-0">
          <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink-900 dark:text-white">
            <BookOpenText size={16} className="text-ink-400" />
            {block.title ?? 'Okuma parçası'}
          </h3>
          <p className="mt-0.5 text-xs text-ink-500">
            {wordCount} kelime · {block.paragraphs.length} paragraf
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowTranslation((v) => !v)}
            aria-pressed={showTranslation}
            className={cx(
              'inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition',
              showTranslation
                ? 'border-brand-300 bg-brand-50 text-brand-700 dark:border-brand-700 dark:bg-brand-950/50 dark:text-brand-300'
                : 'border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300',
            )}
          >
            {showTranslation ? 'Çeviriyi gizle' : 'Çeviriyi göster'}
          </button>
          <SpeakSequenceButton
            texts={block.paragraphs.map((para) => para.tr)}
            label="Metni dinle"
          />
        </div>
      </div>

      {block.intro && (
        <div className="border-b px-5 py-4 hairline surface-sunken">
          <Translated value={block.intro} size="sm" />
        </div>
      )}

      {/* §18 — an editorial reading column rather than a list of rows.
          Comfortable measure, generous leading, the paragraph number hung in
          the margin where it does not interrupt the line, and the audio
          button parked at the right so the text itself is uninterrupted. */}
      <ol className="divide-y divide-ink-100 dark:divide-ink-800">
        {block.paragraphs.map((para, i) => (
          <li key={i} className="group relative px-4 py-5 sm:px-8">
            <span
              className="absolute left-1 top-5 hidden font-mono text-[11px] font-semibold tabular-nums text-muted sm:block"
              aria-hidden
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <p
                  className="measure text-[17px] leading-[1.85] text-primary"
                  lang="tr"
                >
                  <Glossed text={para.tr} terms={glossaryTerms} />
                </p>
                {showTranslation && (
                  <div className="measure mt-3.5 border-t border-dashed pt-3.5 hairline">
                    <Translated value={{ ar: para.ar, ku: para.ku }} size="sm" />
                  </div>
                )}
              </div>
              <SpeakButton
                text={para.tr}
                size="sm"
                className="opacity-70 transition-opacity duration-150 group-hover:opacity-100"
              />
            </div>
          </li>
        ))}
      </ol>

      {block.glossary && block.glossary.length > 0 && (
        <div className="border-t p-4 hairline surface-sunken">
          <p className="eyebrow mb-3">Sözlükçe</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {block.glossary.map((entry) => (
              <li
                key={entry.tr}
                className="flex items-start gap-2 rounded-lg border p-2.5 hairline bg-surface"
              >
                <SpeakButton text={entry.tr} size="xs" variant="ghost" />
                <div className="min-w-0 flex-1">
                  <p className="tr-word text-sm" lang="tr">{entry.tr}</p>
                  <p className="pron">{entry.pron}</p>
                  <div className="mt-1">
                    <Translated value={{ ar: entry.ar, ku: entry.ku }} size="sm" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

/**
 * Marks glossary words inside a reading passage — §18's "vocabulary
 * highlighting". A dotted brass underline says "this word is explained
 * below" without breaking the line the way a coloured background would.
 *
 * Matching is plain and case-insensitive under Turkish rules, and only whole
 * words are marked, so "kar" never highlights inside "karar".
 */
function Glossed({ text, terms }: { text: string; terms: string[] }) {
  if (terms.length === 0) return <>{text}</>;

  const lower = text.toLocaleLowerCase('tr-TR');
  const marks: { start: number; end: number }[] = [];

  for (const term of terms) {
    const needle = term.toLocaleLowerCase('tr-TR');
    let from = 0;
    for (;;) {
      const at = lower.indexOf(needle, from);
      if (at < 0) break;
      const end = at + needle.length;
      const beforeOk = at === 0 || !/[\p{L}\p{N}]/u.test(text[at - 1]);
      const afterOk = end >= text.length || !/[\p{L}\p{N}]/u.test(text[end]);
      // Skip anything overlapping a mark already placed by a longer term.
      const clash = marks.some((m) => at < m.end && end > m.start);
      if (beforeOk && afterOk && !clash) marks.push({ start: at, end });
      from = end;
    }
  }

  if (marks.length === 0) return <>{text}</>;
  marks.sort((a, b) => a.start - b.start);

  const out: React.ReactNode[] = [];
  let cursor = 0;
  marks.forEach((m, i) => {
    if (m.start > cursor) out.push(text.slice(cursor, m.start));
    out.push(
      <span
        key={i}
        className="underline decoration-brass-400 decoration-dotted underline-offset-4"
      >
        {text.slice(m.start, m.end)}
      </span>,
    );
    cursor = m.end;
  });
  if (cursor < text.length) out.push(text.slice(cursor));
  return <>{out}</>;
}

function SoundPairsBlock({ block }: { block: Extract<LessonBlock, { type: 'soundpairs' }> }) {
  return (
    <section className="card overflow-hidden">
      <div className="border-b border-ink-200 px-5 py-3.5 dark:border-ink-800">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
          {block.title ?? 'Ses çiftleri'}
        </h3>
        <p className="mt-0.5 text-xs text-ink-500">
          İki kelimeyi arka arkaya dinle ve farkı yakala.
        </p>
      </div>
      <ul className="divide-y divide-ink-100 dark:divide-ink-800">
        {block.pairs.map((pair, i) => (
          <li key={i} className="p-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {[pair.a, pair.b].map((word, wi) => (
                <div
                  key={wi}
                  className={cx(
                    'flex items-center gap-3 rounded-xl p-3.5',
                    wi === 0
                      ? 'bg-brand-50 dark:bg-brand-950/40'
                      : 'bg-accent-50 dark:bg-accent-950/25',
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <p className="tr-word text-lg" lang="tr">{word.tr}</p>
                    <p className="pron mt-0.5">{word.pron}</p>
                    <div className="mt-1.5">
                      <Translated value={{ ar: word.ar, ku: word.ku }} size="sm" />
                    </div>
                  </div>
                  <SpeakButton text={word.tr} />
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl bg-ink-50 p-3.5 dark:bg-ink-950/60">
              <Translated value={pair.contrast} size="sm" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
