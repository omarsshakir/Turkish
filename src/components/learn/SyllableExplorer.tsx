import { useMemo, useState } from 'react';
import { Search, Volume2, X } from 'lucide-react';
import type { LevelId, VocabItem } from '@/types/content';
import { LEVEL_ORDER } from '@/types/content';
import { syllabify, stressIndex, syllableShape } from '@/lib/syllabify';
import { cx, fold } from '@/lib/utils';
import { useSettings } from '@/state/SettingsContext';
import { Card, Chip, EmptyState, LevelBadge } from '@/components/ui/Primitives';
import { SpeakButton } from '@/components/audio/SpeakButton';
import { Translated } from './Translation';

/**
 * The syllable-division database.
 *
 * Every vocabulary item in the curriculum, broken at its syllable boundaries
 * with the stressed syllable marked — which is possible because Turkish
 * syllabification is algorithmic, not lexical. Nothing here is hand-authored:
 * the splits are computed and the translations are the ones already verified
 * when each word was written.
 *
 * That is the difference between a few hundred hand-written drills and a
 * pronunciation database that grows every time a word is added.
 */
export function SyllableExplorer({ vocabulary }: { vocabulary: VocabItem[] }) {
  const { showPronunciation } = useSettings();

  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<LevelId | 'all'>('all');
  const [count, setCount] = useState<number | 'all'>('all');

  /** Split once, up front — this runs over the whole vocabulary. */
  const entries = useMemo(
    () => vocabulary
      .map((item) => {
        const syllables = syllabify(item.tr);
        return {
          item,
          syllables,
          stress: stressIndex(item.tr, syllables),
          shapes: syllables.map(syllableShape),
        };
      })
      // Multi-word entries and phrases are not syllable drills.
      .filter((x) => x.syllables.length > 1),
    [vocabulary],
  );

  const byCount = useMemo(() => {
    const tally: Record<number, number> = {};
    for (const e of entries) {
      const n = Math.min(e.syllables.length, 6);
      tally[n] = (tally[n] ?? 0) + 1;
    }
    return tally;
  }, [entries]);

  const results = useMemo(() => {
    const q = fold(query.trim());
    return entries.filter((e) => {
      if (level !== 'all' && e.item.level !== level) return false;
      if (count !== 'all') {
        const n = e.syllables.length;
        if (count === 6 ? n < 6 : n !== count) return false;
      }
      if (!q) return true;
      return fold(e.item.tr).includes(q);
    });
  }, [entries, query, level, count]);

  const shown = results.slice(0, 300);

  return (
    <div className="space-y-5">
      <Card className="p-5" edge>
        <h2 className="t-h2 text-primary">Kelime havuzu</h2>
        <p className="mt-1.5 t-secondary">
          Müfredattaki <strong className="font-semibold text-primary">{entries.length}</strong> çok
          heceli kelimenin tamamı, hece sınırlarıyla. Bölme kuralla yapılır —
          Türkçede hece yapısı düzenlidir, ezberlenmez.
        </p>
      </Card>

      <Card className="p-4">
        <div className="relative">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Kelime ara…"
            aria-label="Hecelenecek kelime ara"
            className="input pl-10"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Aramayı temizle"
              className="absolute right-2.5 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-lg text-muted transition hover:text-primary"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="t-meta mr-1">Hece</span>
            <Pill active={count === 'all'} onClick={() => setCount('all')}>Hepsi</Pill>
            {[2, 3, 4, 5, 6].map((n) => (
              <Pill key={n} active={count === n} onClick={() => setCount(n)}>
                {n === 6 ? '6+' : n}
                <span className="ml-1 opacity-60">{byCount[n] ?? 0}</span>
              </Pill>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="t-meta mr-1">Seviye</span>
            <Pill active={level === 'all'} onClick={() => setLevel('all')}>Hepsi</Pill>
            {LEVEL_ORDER.map((id) => (
              <Pill key={id} active={level === id} onClick={() => setLevel(id)}>
                {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
              </Pill>
            ))}
          </div>
        </div>

        <p className="mt-3 border-t pt-3 t-caption hairline">
          <strong className="font-semibold text-primary">{results.length}</strong> kelime
          {results.length > shown.length && ` · ilk ${shown.length} gösteriliyor`}
        </p>
      </Card>

      {shown.length === 0 ? (
        <EmptyState
          icon={<Search size={20} />}
          title="Kelime bulunamadı"
          description="Farklı bir kelime ya da filtre dene."
        />
      ) : (
        <Card className="overflow-hidden">
          <ul className="divide-y divide-ink-100 dark:divide-ink-800">
            {shown.map(({ item, syllables, stress, shapes }) => (
              <li
                key={item.id}
                className="flex items-start gap-3 px-4 py-3 transition-colors duration-150 hover:bg-brand-50/60 dark:hover:bg-brand-950/30"
              >
                <SpeakButton text={item.tr} size="sm" className="mt-0.5" />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1">
                    {syllables.map((syllable, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <span
                          className={cx(
                            'rounded-md px-2 py-0.5 font-display text-[15px] font-semibold',
                            i === stress
                              ? 'bg-brass-100 text-brass-900 ring-1 ring-inset ring-brass-200 dark:bg-brass-900 dark:text-brass-100 dark:ring-brass-700'
                              : 'text-primary surface-sunken',
                          )}
                          lang="tr"
                        >
                          {syllable}
                        </span>
                        {i < syllables.length - 1 && (
                          <span className="text-muted" aria-hidden>·</span>
                        )}
                      </span>
                    ))}
                    <span className="ml-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {shapes.join('-')}
                    </span>
                    <LevelBadge level={item.level} className="!px-1.5 !py-0 !text-[10px]" />
                  </div>

                  {showPronunciation && <p className="pron mt-1">{item.pron}</p>}

                  <div className="mt-1">
                    <Translated value={{ ar: item.ar, ku: item.ku }} size="sm" />
                  </div>
                </div>

                {/* Syllable-by-syllable playback at half speed. */}
                <button
                  type="button"
                  onClick={() => {
                    void import('@/lib/audio').then(({ audio }) => {
                      void audio.speakSequence(syllables, { rate: 'slow' });
                    });
                  }}
                  aria-label={`Heceleri tek tek dinle: ${item.tr}`}
                  title="Heceleri tek tek dinle"
                  className="mt-0.5 grid h-8 shrink-0 place-items-center rounded-lg bg-brass-50 px-2.5 font-mono text-[10px] font-bold uppercase tracking-wide text-brass-700 ring-1 ring-inset ring-brass-100 transition hover:bg-brass-100 dark:bg-brass-950 dark:text-brass-300 dark:ring-brass-900"
                >
                  <span className="flex items-center gap-1">
                    <Volume2 size={12} />
                    hece
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {results.length > shown.length && (
        <Chip tone="neutral">
          Aramayı daraltarak kalan {results.length - shown.length} kelimeye ulaşabilirsin
        </Chip>
      )}
    </div>
  );
}

function Pill({
  active, onClick, children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cx(
        'shrink-0 rounded-lg px-2.5 py-1.5 font-mono text-[11px] font-semibold transition',
        active
          ? 'bg-brand-700 text-white'
          : 'text-secondary surface-sunken ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
      )}
    >
      {children}
    </button>
  );
}
