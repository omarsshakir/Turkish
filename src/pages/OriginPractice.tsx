import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Languages, Play, RotateCcw } from 'lucide-react';
import type { LevelId } from '@/types/content';
import { LEVEL_ORDER } from '@/types/content';
import {
  buildOriginSession, ORIGIN_KIND_LABEL, originWords, rootFamilies,
  type OriginExerciseKind,
} from '@/lib/originPractice';
import { cx } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, EmptyState, PageHeader,
} from '@/components/ui/Primitives';
import { ExerciseRunner } from '@/components/exercises/ExerciseRunner';

/**
 * Etymology practice. Setup screen plus the ordinary `ExerciseRunner`.
 */

const KINDS: OriginExerciseKind[] = ['origin', 'root-family', 'shared-root', 'arabic-source'];

const HINT: Record<OriginExerciseKind, { ar: string; ku: string }> = {
  origin: {
    ar: 'من أيّ لغة جاءت الكلمة؟ فيها كلمات فارسية وفرنسية تُظنّ عربية.',
    ku: 'وشەکە لە کام زمانەوە هاتووە؟ وشەی فارسی و فەڕەنسیشی تێدایە.',
  },
  'root-family': {
    ar: 'يُعرض الجذر، وتختار الكلمة التركية التي تنتمي إليه.',
    ku: 'ڕەگ پیشان دەدرێت و وشە تورکییەکەی سەری هەڵدەبژێریت.',
  },
  'shared-root': {
    ar: 'أيّ كلمتين تشتركان في الجذر العربي نفسه؟',
    ku: 'کام دوو وشە هەمان ڕەگی عەرەبییان هەیە؟',
  },
  'arabic-source': {
    ar: 'تُعرض الكلمة العربية الأصل، وتختار مقابلها التركي.',
    ku: 'وشە عەرەبییە ڕەسەنەکە پیشان دەدرێت و هاوتا تورکییەکەی هەڵدەبژێریت.',
  },
};

export default function OriginPractice() {
  const { vocabulary } = useContent();
  const { lang } = useSettings();

  const [kinds, setKinds] = useState<OriginExerciseKind[]>(['origin', 'root-family']);
  const [level, setLevel] = useState<LevelId | 'all'>('all');
  const [count, setCount] = useState(10);
  const [runId, setRunId] = useState(0);
  const [started, setStarted] = useState(false);

  const all = useMemo(() => originWords(vocabulary), [vocabulary]);
  const families = useMemo(() => rootFamilies(vocabulary), [vocabulary]);

  const poolSize = useMemo(
    () => all.filter((w) => w.origin!.language === 'arabic'
      && (level === 'all' || w.level === level)).length,
    [all, level],
  );

  const exercises = useMemo(() => {
    if (!started) return [];
    return buildOriginSession(vocabulary, { kinds, count, level });
    // runId forces a fresh draw on restart
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, runId, vocabulary, kinds, count, level]);

  const toggleKind = (k: OriginExerciseKind) => {
    setKinds((prev) => (prev.includes(k)
      ? (prev.length > 1 ? prev.filter((x) => x !== k) : prev)
      : [...prev, k]));
  };

  if (started && exercises.length > 0) {
    return (
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Languages size={18} className="text-brass-500" aria-hidden />
            <h1 className="t-h2 text-primary">Köken Alıştırması</h1>
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
          lessonId="arabic-origin"
          title="Kelime kökeni"
          onFinish={() => setRunId((n) => n + 1)}
        />
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow="Alıştırma"
        icon={<Languages size={14} />}
        title="Köken Alıştırması"
        description={(
          <span
            className={cx('block w-fit', lang === 'ar' ? 'ar-text' : 'ku-text')}
            dir="rtl"
            lang={lang === 'ar' ? 'ar' : 'ckb'}
          >
            {lang === 'ar'
              ? 'ليست المهارة أن «تتعرّف على العربية» بل أن تعرف متى تخمّن. لذلك تختلط هنا الكلمات العربية بالفارسية والفرنسية التي تُظنّ عربية.'
              : 'شارەزایی ئەوە نییە «عەرەبی بناسیتەوە» بەڵکو بزانیت کەی مەزەندە دەکەیت. بۆیە لێرەدا وشە عەرەبییەکان لەگەڵ فارسی و فەڕەنسی تێکەڵ دەبن.'}
          </span>
        )}
        action={<Chip tone="brass">{families.size} kök</Chip>}
      />

      <div className="space-y-5">
        <Card className="p-5">
          <h2 className="t-h3 mb-4 text-primary">Soru türü</h2>
          <div className="grid gap-2.5 sm:grid-cols-2">
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
                    {ORIGIN_KIND_LABEL[k].tr}
                  </span>
                  <span
                    className={cx('mt-1 block w-fit text-xs text-secondary', lang === 'ar' ? 'ar-text' : 'ku-text')}
                    dir="rtl"
                    lang={lang === 'ar' ? 'ar' : 'ckb'}
                  >
                    {lang === 'ar' ? HINT[k].ar : HINT[k].ku}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="t-h3 mb-4 text-primary">Ayarlar</h2>

          <p className="label">Seviye</p>
          <div className="mb-4 flex flex-wrap gap-1.5">
            <Pill active={level === 'all'} onClick={() => setLevel('all')}>Hepsi</Pill>
            {LEVEL_ORDER.map((id) => (
              <Pill key={id} active={level === id} onClick={() => setLevel(id)}>
                {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
              </Pill>
            ))}
          </div>

          <p className="label">Soru sayısı</p>
          <div className="flex flex-wrap gap-1.5">
            {[5, 10, 15, 20].map((n) => (
              <Pill key={n} active={count === n} onClick={() => setCount(n)}>{n}</Pill>
            ))}
          </div>

          <div className="mt-5 rounded-xl p-4 text-center surface-sunken">
            <p className="font-display text-2xl font-semibold tabular-nums text-primary">
              {poolSize}
            </p>
            <p className="t-caption">Arapça kökenli kelime</p>
          </div>
        </Card>

        {poolSize < 4 ? (
          <EmptyState
            icon={<Languages size={20} />}
            title="Bu seviyede yeterli kelime yok"
            description="Seviye filtresini genişlet."
          />
        ) : (
          <Button
            size="lg"
            className="w-full"
            icon={<Play size={17} />}
            onClick={() => { setRunId((n) => n + 1); setStarted(true); }}
          >
            Alıştırmaya başla
          </Button>
        )}

        <Link
          to="/arabic-origin"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          Kökenleri keşfet
          <ArrowRight size={14} />
        </Link>
      </div>
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
        'rounded-lg px-3 py-1.5 text-xs font-semibold transition duration-150',
        active
          ? 'bg-brand-700 text-white'
          : 'text-secondary surface-sunken ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
      )}
    >
      {children}
    </button>
  );
}
