import { useMemo, useState } from 'react';
import { AudioLines, Volume2 } from 'lucide-react';
import type { SyllableEntry, SyllableSection } from '@/types/content';
import { SYLLABLE_SECTIONS } from '@content/index';
import { cx } from '@/lib/utils';
import { useSettings } from '@/state/SettingsContext';
import { Card, Chip, PageHeader } from '@/components/ui/Primitives';
import { SyllableExplorer } from '@/components/learn/SyllableExplorer';
import { useContent } from '@/state/ContentContext';
import { SpeakButton, SpeakSequenceButton } from '@/components/audio/SpeakButton';
import { Translated } from '@/components/learn/Translation';

/**
 * Syllables and pronunciation.
 *
 * Turkish is regular enough that a student who understands syllable shape,
 * vowel harmony and where the stress falls can pronounce a word they have
 * never seen. This page teaches that mechanically rather than by exposure:
 * every word is shown broken at its syllable boundaries with the stressed
 * syllable marked, and every one is speakable.
 *
 * The two sections aimed at Arabic and Kurdish speakers are the point of the
 * page. They drill the specific contrasts those languages do not make —
 * o/ö, u/ü, ı/i, p/b for Arabic; ı and ğ for Sorani — because a sound you
 * cannot hear is a sound you cannot produce.
 */
/** The generated word database sits alongside the authored drill sections. */
const POOL_TAB = 'pool';

export default function Syllables() {
  const { lang } = useSettings();
  const { vocabulary } = useContent();
  const [active, setActive] = useState<string>(SYLLABLE_SECTIONS[0].id);

  const section = useMemo(
    () => SYLLABLE_SECTIONS.find((s) => s.id === active) ?? SYLLABLE_SECTIONS[0],
    [active],
  );

  const total = useMemo(
    () => SYLLABLE_SECTIONS.reduce((sum, s) => sum + s.entries.length, 0),
    [],
  );

  return (
    <div>
      <PageHeader
        eyebrow="Telaffuz"
        icon={<AudioLines size={14} />}
        title="Heceler ve Telaffuz"
        description={(
          <span
            className={cx('block w-fit', lang === 'ar' ? 'ar-text' : 'ku-text')}
            dir="rtl"
            lang={lang === 'ar' ? 'ar' : 'ckb'}
          >
            {lang === 'ar'
              ? 'التركية منتظمة: إن فهمت بنية المقطع وانسجام الحركات وموضع النبر، استطعت نطق كلمة لم ترها من قبل. اضغط أي كلمة لسماعها.'
              : 'تورکی ڕێکە: ئەگەر پێکهاتەی برگە و هارمۆنیای دەنگدار و شوێنی جەخت تێبگەیت، دەتوانیت وشەیەک دەرببڕیت کە پێشتر نەتبینیوە.'}
          </span>
        )}
        action={<Chip tone="brass">{total} örnek</Chip>}
      />

      {/* Section picker */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button
          type="button"
          onClick={() => setActive(POOL_TAB)}
          aria-pressed={active === POOL_TAB}
          className={cx(
            'shrink-0 rounded-xl px-3.5 py-2 text-sm font-semibold transition duration-150',
            active === POOL_TAB
              ? 'bg-brass-500 text-ink-950 shadow-sm'
              : 'bg-surface text-secondary ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
          )}
        >
          Kelime havuzu
        </button>
        {SYLLABLE_SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            aria-pressed={active === s.id}
            className={cx(
              'shrink-0 rounded-xl px-3.5 py-2 text-sm font-semibold transition duration-150',
              active === s.id
                ? 'bg-brand-700 text-white shadow-sm'
                : 'bg-surface text-secondary ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
            )}
          >
            {s.title}
          </button>
        ))}
      </div>

      {active === POOL_TAB
        ? <SyllableExplorer vocabulary={vocabulary} />
        : <SectionView key={section.id} section={section} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function SectionView({ section }: { section: SyllableSection }) {
  return (
    <div className="animate-fade-up space-y-5">
      <Card className="p-5" edge>
        <h2 className="t-h2 text-primary">{section.title}</h2>
        <div className="mt-1.5">
          <Translated value={section.subtitle} size="sm" />
        </div>
        <div className="mt-4 border-t pt-4 hairline">
          <Translated value={section.explain} />
        </div>
      </Card>

      {section.entries.length > 0 && (
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between gap-3 border-b px-5 py-3.5 hairline">
            <h3 className="t-h3 text-primary">Örnekler</h3>
            <SpeakSequenceButton
              texts={section.entries.map((e) => e.tr)}
              label="Hepsini dinle"
            />
          </div>
          <ul className="divide-y divide-ink-100 dark:divide-ink-800">
            {section.entries.map((entry) => (
              <SyllableRow key={entry.id} entry={entry} />
            ))}
          </ul>
        </Card>
      )}

      {section.pairs && section.pairs.length > 0 && (
        <Card className="overflow-hidden">
          <div className="border-b px-5 py-3.5 hairline">
            <h3 className="t-h3 text-primary">Ses çiftleri</h3>
            <p className="mt-0.5 t-caption">
              İki kelimeyi arka arkaya dinle ve farkı yakala.
            </p>
          </div>
          <ul className="divide-y divide-ink-100 dark:divide-ink-800">
            {section.pairs.map((pair, i) => (
              <li key={i} className="p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[pair.a, pair.b].map((word, wi) => (
                    <div
                      key={wi}
                      className={cx(
                        'flex items-center gap-3 rounded-xl border p-3.5',
                        wi === 0
                          ? 'border-brand-100 bg-brand-50 dark:border-brand-900 dark:bg-brand-950/50'
                          : 'border-brass-100 bg-brass-50 dark:border-brass-900 dark:bg-brass-950/40',
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="tr-word text-lg" lang="tr">{word.tr}</p>
                        <p className="pron mt-0.5">{word.pron}</p>
                        <div className="mt-1.5">
                          <Translated value={{ ar: word.ar, ku: word.ku }} size="sm" />
                        </div>
                      </div>
                      <SpeakButton text={word.tr} size="md" />
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl p-3.5 surface-sunken">
                  <Translated value={pair.contrast} size="sm" />
                </div>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

/**
 * One word, broken at its syllable boundaries.
 *
 * The stressed syllable is marked in brass and each syllable is individually
 * speakable, because the whole difficulty of a long Turkish word is that a
 * beginner cannot find the seams.
 */
function SyllableRow({ entry }: { entry: SyllableEntry }) {
  const { showPronunciation } = useSettings();

  return (
    <li className="flex items-start gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-brand-50/60 dark:hover:bg-brand-950/30">
      <SpeakButton text={entry.tr} size="sm" className="mt-0.5" />

      <div className="min-w-0 flex-1">
        {/* The split, as a teacher would write it on a board. */}
        <div className="flex flex-wrap items-center gap-1">
          {entry.syllables.map((syllable, i) => (
            <span key={i} className="flex items-center gap-1">
              <span
                className={cx(
                  'rounded-md px-2 py-0.5 font-display text-[15px] font-semibold',
                  i === entry.stress
                    ? 'bg-brass-100 text-brass-900 ring-1 ring-inset ring-brass-200 dark:bg-brass-900 dark:text-brass-100 dark:ring-brass-700'
                    : 'text-primary surface-sunken',
                )}
                lang="tr"
              >
                {syllable}
              </span>
              {i < entry.syllables.length - 1 && (
                <span className="text-muted" aria-hidden>·</span>
              )}
            </span>
          ))}

          {entry.shapes && (
            <span className="ml-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              {entry.shapes.join('-')}
            </span>
          )}
        </div>

        {showPronunciation && <p className="pron mt-1.5">{entry.pron}</p>}

        <div className="mt-1.5">
          <Translated value={{ ar: entry.ar, ku: entry.ku }} size="sm" />
        </div>

        {entry.note && (
          <div className="mt-2 rounded-lg border-l-2 border-brass-400 py-1 pl-3">
            <Translated value={entry.note} size="sm" />
          </div>
        )}
      </div>

      {/* Slow replay: the point of this page is hearing the seams. */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          void import('@/lib/audio').then(({ audio }) => {
            void audio.speakSequence(entry.syllables, { rate: 'slow' });
          });
        }}
        aria-label={`Heceleri tek tek dinle: ${entry.tr}`}
        title="Heceleri tek tek dinle"
        className="mt-0.5 grid h-8 shrink-0 place-items-center rounded-lg bg-brass-50 px-2.5 font-mono text-[10px] font-bold uppercase tracking-wide text-brass-700 ring-1 ring-inset ring-brass-100 transition hover:bg-brass-100 dark:bg-brass-950 dark:text-brass-300 dark:ring-brass-900"
      >
        <span className="flex items-center gap-1">
          <Volume2 size={12} />
          hece
        </span>
      </button>
    </li>
  );
}
