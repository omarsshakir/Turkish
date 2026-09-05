import { useMemo, useState } from 'react';
import { Hash, Play, RotateCcw } from 'lucide-react';
import { NUMBER_SECTIONS } from '@content/index';
import {
  buildNumberSession, NUMBER_KIND_LABEL, spellTurkishNumber,
  type NumberExerciseKind,
} from '@/lib/numberPractice';
import { cx } from '@/lib/utils';
import { useSettings } from '@/state/SettingsContext';
import { Button, Card, Chip, PageHeader } from '@/components/ui/Primitives';
import { ExerciseRunner } from '@/components/exercises/ExerciseRunner';

/**
 * Number practice.
 *
 * The questions are generated rather than authored — Turkish numerals are
 * regular enough that a speller plus a range covers any number a student will
 * meet, which is far better than drilling the few dozen somebody typed out.
 * The session itself is the ordinary `ExerciseRunner`.
 */

const KINDS: NumberExerciseKind[] = ['write', 'read', 'listen', 'date', 'clock', 'context'];

const RANGES: { label: string; max: number; hint: string }[] = [
  { label: '0 – 100', max: 100, hint: 'temel' },
  { label: '0 – 1.000', max: 1000, hint: 'günlük' },
  { label: '0 – 100.000', max: 100_000, hint: 'fiyat, nüfus' },
  { label: '0 – 10 milyon', max: 10_000_000, hint: 'haber, istatistik' },
];

export default function NumberPractice() {
  const { lang } = useSettings();

  const [kinds, setKinds] = useState<NumberExerciseKind[]>(['write', 'read']);
  const [max, setMax] = useState(1000);
  const [count, setCount] = useState(10);
  const [runId, setRunId] = useState(0);
  const [started, setStarted] = useState(false);

  const exercises = useMemo(() => {
    if (!started) return [];
    return buildNumberSession(NUMBER_SECTIONS, { kinds, count, max });
    // runId forces a fresh draw on restart
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, runId, kinds, count, max]);

  const toggleKind = (k: NumberExerciseKind) => {
    setKinds((prev) => (prev.includes(k)
      ? (prev.length > 1 ? prev.filter((x) => x !== k) : prev)
      : [...prev, k]));
  };

  if (started && exercises.length > 0) {
    return (
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Hash size={18} className="text-brand-600 dark:text-brand-400" aria-hidden />
            <h1 className="t-h2 text-primary">Sayı Alıştırması</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            icon={<RotateCcw size={14} />}
            onClick={() => setStarted(false)}
          >
            Ayarları değiştir
          </Button>
        </div>

        <ExerciseRunner
          key={runId}
          exercises={exercises}
          lessonId={`numbers-${max}`}
          title="Sayılar"
          onFinish={() => setRunId((n) => n + 1)}
        />
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow="Alıştırma"
        icon={<Hash size={14} />}
        title="Sayı Alıştırması"
        description={(
          <span
            className={cx('block w-fit', lang === 'ar' ? 'ar-text' : 'ku-text')}
            dir="rtl"
            lang={lang === 'ar' ? 'ar' : 'ckb'}
          >
            {lang === 'ar'
              ? 'اقرأ الرقم بالتركية، أو حوّل التركية إلى رقم، أو أكمل الجملة. الأسئلة تُولَّد، فلا تنفد.'
              : 'ژمارەکە بە تورکی بخوێنەوە، یان تورکییەکە بکە بە ژمارە، یان ڕستەکە تەواو بکە.'}
          </span>
        )}
      />

      <div className="space-y-5">
        <Card className="p-5">
          <h2 className="t-h3 mb-4 text-primary">Soru türü</h2>
          <div className="grid gap-2.5 sm:grid-cols-3">
            {KINDS.map((k) => {
              const on = kinds.includes(k);
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => toggleKind(k)}
                  aria-pressed={on}
                  className={cx(
                    'rounded-xl border p-3.5 text-left transition duration-150',
                    on
                      ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/60'
                      : 'hairline hover:border-brand-300',
                  )}
                >
                  <span className="block font-display text-sm font-semibold text-primary">
                    {NUMBER_KIND_LABEL[k].tr}
                  </span>
                  <span
                    className={cx('mt-1 block w-fit text-xs text-secondary', lang === 'ar' ? 'ar-text' : 'ku-text')}
                    dir="rtl"
                    lang={lang === 'ar' ? 'ar' : 'ckb'}
                  >
                    {lang === 'ar' ? NUMBER_KIND_LABEL[k].ar : NUMBER_KIND_LABEL[k].ku}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="t-h3 mb-4 text-primary">Aralık</h2>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {RANGES.map((r) => (
              <button
                key={r.max}
                type="button"
                onClick={() => setMax(r.max)}
                aria-pressed={max === r.max}
                className={cx(
                  'rounded-xl border p-3 text-center transition duration-150',
                  max === r.max
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/60'
                    : 'hairline hover:border-brand-300',
                )}
              >
                <span className="block font-mono text-sm font-semibold text-primary">
                  {r.label}
                </span>
                <span className="block t-caption">{r.hint}</span>
              </button>
            ))}
          </div>

          {/* A worked example of the chosen range, so the setting is concrete. */}
          <div className="mt-4 rounded-xl p-4 surface-sunken">
            <p className="t-meta mb-1.5">Örnek</p>
            <p className="font-mono text-lg tabular-nums text-primary">
              {Math.floor(max / 2 + 45).toLocaleString('tr-TR')}
            </p>
            <p className="tr-word mt-1 text-[15px]" lang="tr">
              {spellTurkishNumber(Math.floor(max / 2 + 45))}
            </p>
          </div>

          <div className="mt-4">
            <p className="label">Soru sayısı</p>
            <div className="flex flex-wrap gap-1.5">
              {[5, 10, 15, 20].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setCount(n)}
                  aria-pressed={count === n}
                  className={cx(
                    'rounded-lg px-3 py-1.5 text-xs font-semibold transition',
                    count === n
                      ? 'bg-brand-700 text-white'
                      : 'text-secondary surface-sunken ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </Card>

        <Button
          size="lg"
          className="w-full"
          icon={<Play size={17} />}
          onClick={() => { setRunId((n) => n + 1); setStarted(true); }}
        >
          Alıştırmaya başla
        </Button>

        <Chip tone="neutral">
          Sorular üretiliyor — tükenmez
        </Chip>
      </div>
    </div>
  );
}
