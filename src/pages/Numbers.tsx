import { useEffect, useState } from 'react';
import { Check, Hash } from 'lucide-react';
import { cx } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import { Card, Chip, PageHeader } from '@/components/ui/Primitives';
import { SpeakButton, SpeakSequenceButton } from '@/components/audio/SpeakButton';
import { PhraseRow, Translated } from '@/components/learn/Translation';

/**
 * The complete number system, one section at a time. Every entry is a card
 * with figure, Turkish, pronunciation, both translations and audio - exactly
 * the layout the brief asks for.
 */
export default function Numbers() {
  const { numberSections } = useContent();
  const { lang } = useSettings();
  const { studiedNumberSections, markNumberSectionStudied } = useProgress();
  const [activeId, setActiveId] = useState(numberSections[0].id);

  const active = numberSections.find((s) => s.id === activeId)!;

  useEffect(() => { markNumberSectionStudied(activeId); }, [activeId, markNumberSectionStudied]);

  // Deep links like /numbers#time select that section.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && numberSections.some((s) => s.id === hash)) {
      setActiveId(hash as typeof activeId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageHeader
        eyebrow="Sayılar"
        icon={<Hash size={14} />}
        title="Türkçe Sayı Sistemi"
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? 'نظام العدّ التركي منتظم تماماً: لا شواذّ ولا جمع تكسير. تعلّم الأعداد من صفر إلى مليار، والترتيبية والتواريخ والأسعار والوقت وأرقام الهاتف.'
              : 'سیستەمی ژماردنی تورکی تەواو ڕێکە: هیچ دەرچوونێکی نییە. لە سفرەوە تا ملیار، ڕیزبەندی و بەروار و نرخ و کات و ژمارەی تەلەفۆن فێربە.'}
          </span>
        )}
        action={(
          <Chip tone="brand">
            {studiedNumberSections.length} / {numberSections.length} bölüm
          </Chip>
        )}
      />

      {/* Section tabs */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {numberSections.map((section) => {
          const studied = studiedNumberSections.includes(section.id);
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveId(section.id)}
              className={cx(
                'flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition',
                activeId === section.id
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-white text-ink-600 ring-1 ring-inset ring-ink-200 hover:bg-ink-50 dark:bg-ink-900 dark:text-ink-300 dark:ring-ink-700',
              )}
            >
              {studied && activeId !== section.id && (
                <Check size={13} className="text-emerald-500" />
              )}
              {section.title}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      <Card className="mb-5 p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-lg font-bold text-ink-900 dark:text-white">
              {active.title}
            </h2>
            <div className="mt-0.5">
              <Translated value={active.subtitle} size="sm" />
            </div>
          </div>
          <SpeakSequenceButton
            texts={active.entries.slice(0, 15).map((e) => e.tr)}
            label="Bu bölümü dinle"
          />
        </div>
        <div className="rounded-xl bg-brand-50/60 p-4 dark:bg-brand-950/25">
          <Translated value={active.explain} />
        </div>
      </Card>

      {/* Number grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {active.entries.map((entry) => (
          <article
            key={entry.id}
            className="card card-hover flex items-center gap-4 p-4"
          >
            <span className="grid min-w-[3.5rem] shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 px-2 py-2.5 font-display text-lg font-bold text-white">
              {entry.figure}
            </span>

            <div className="min-w-0 flex-1">
              <p className="tr-word text-lg leading-tight" lang="tr">{entry.tr}</p>
              <p className="pron mt-0.5">{entry.pron}</p>
              <div className="mt-2">
                <Translated value={{ ar: entry.ar, ku: entry.ku }} forceBoth size="sm" />
              </div>
            </div>

            <SpeakButton text={entry.tr} />
          </article>
        ))}
      </div>

      {/* Worked examples */}
      {active.examples && active.examples.length > 0 && (
        <Card className="mt-6 overflow-hidden">
          <div className="flex items-center justify-between gap-3 border-b border-ink-200 px-5 py-3.5 dark:border-ink-800">
            <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
              Cümle içinde
            </h3>
            <SpeakSequenceButton texts={active.examples.map((e) => e.tr)} />
          </div>
          <ul className="divide-y divide-ink-100 p-1.5 dark:divide-ink-800">
            {active.examples.map((example, i) => (
              <PhraseRow key={example.tr} phrase={example} index={i} />
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
