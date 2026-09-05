import { useMemo, useState } from 'react';
import {
  Brain, ClipboardList, Play, RefreshCw, Settings2, Star,
} from 'lucide-react';
import { LEVEL_ORDER, type Exercise, type LevelId } from '@/types/content';
import { buildReviewPool, buildSession, type PracticeMode } from '@/lib/generate';
import { cx, sample, shuffle } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, EmptyState, PageHeader,
} from '@/components/ui/Primitives';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { ExerciseRunner } from '@/components/exercises/ExerciseRunner';

/* ------------------------------------------------------------------ */
/* Shared setup panel                                                  */
/* ------------------------------------------------------------------ */

interface SetupState {
  level: LevelId | 'all';
  category: string;
  onlyFavorites: boolean;
  count: number;
}

function useWordPool(setup: SetupState) {
  const { vocabulary } = useContent();
  const { learnedWords, favoriteWords } = useProgress();

  return useMemo(() => {
    let pool = vocabulary;
    if (setup.level !== 'all') pool = pool.filter((w) => w.level === setup.level);
    if (setup.category !== 'all') pool = pool.filter((w) => w.category === setup.category);
    if (setup.onlyFavorites) pool = pool.filter((w) => favoriteWords.includes(w.id));
    return buildReviewPool(pool, learnedWords, favoriteWords);
  }, [vocabulary, setup, learnedWords, favoriteWords]);
}

function SetupPanel({
  setup, onChange, poolSize,
}: {
  setup: SetupState;
  onChange: (next: SetupState) => void;
  poolSize: number;
}) {
  const { categories, vocabulary } = useContent();
  const { favoriteWords } = useProgress();

  const usedCategories = useMemo(() => {
    const ids = new Set(vocabulary.map((v) => v.category));
    return categories.filter((c) => ids.has(c.id));
  }, [categories, vocabulary]);

  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center gap-2">
        <Settings2 size={16} className="text-ink-400" />
        <h2 className="font-display text-sm font-bold text-ink-900 dark:text-white">
          Alıştırma ayarları
        </h2>
        <Chip tone={poolSize >= 4 ? 'green' : 'amber'} className="ml-auto">
          {poolSize} kelime havuzda
        </Chip>
      </div>

      <div className="space-y-4">
        <Field label="Seviye">
          <Pill active={setup.level === 'all'} onClick={() => onChange({ ...setup, level: 'all' })}>
            Hepsi
          </Pill>
          {LEVEL_ORDER.map((id) => (
            <Pill
              key={id}
              active={setup.level === id}
              onClick={() => onChange({ ...setup, level: id })}
            >
              {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
            </Pill>
          ))}
        </Field>

        <Field label="Kategori">
          <Pill
            active={setup.category === 'all'}
            onClick={() => onChange({ ...setup, category: 'all' })}
          >
            Hepsi
          </Pill>
          {usedCategories.map((cat) => (
            <Pill
              key={cat.id}
              active={setup.category === cat.id}
              onClick={() => onChange({ ...setup, category: cat.id })}
            >
              <CategoryIcon name={cat.icon} size={12} />
              {cat.tr}
            </Pill>
          ))}
        </Field>

        <Field label="Soru sayısı">
          {[5, 10, 15, 20].map((n) => (
            <Pill key={n} active={setup.count === n} onClick={() => onChange({ ...setup, count: n })}>
              {n}
            </Pill>
          ))}
        </Field>

        <label className="flex cursor-pointer items-center gap-2.5">
          <input
            type="checkbox"
            checked={setup.onlyFavorites}
            onChange={(e) => onChange({ ...setup, onlyFavorites: e.target.checked })}
            disabled={favoriteWords.length === 0}
            className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500 disabled:opacity-40"
          />
          <span className="flex items-center gap-1.5 text-sm text-ink-700 dark:text-ink-200">
            <Star size={13} className="text-accent-500" />
            Sadece favorilerim
            <span className="text-ink-400">({favoriteWords.length})</span>
          </span>
        </label>
      </div>
    </Card>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-400">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
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
      className={cx(
        'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition',
        active
          ? 'bg-brand-600 text-white'
          : 'bg-ink-100 text-ink-600 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300 dark:hover:bg-ink-700',
      )}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Generic practice screen                                             */
/* ------------------------------------------------------------------ */

function PracticeScreen({
  eyebrow, title, description, icon, modes, defaultMode,
}: {
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  modes: { id: PracticeMode; label: string; hint: string }[];
  defaultMode: PracticeMode;
}) {
  const { lang } = useSettings();
  const [setup, setSetup] = useState<SetupState>({
    level: 'all', category: 'all', onlyFavorites: false, count: 10,
  });
  const [mode, setMode] = useState<PracticeMode>(defaultMode);
  const [session, setSession] = useState<Exercise[] | null>(null);
  const [runId, setRunId] = useState(0);

  const pool = useWordPool(setup);

  const start = () => {
    setSession(buildSession(pool, lang, mode, setup.count));
    setRunId((r) => r + 1);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader eyebrow={eyebrow} icon={icon} title={title} description={description} />

      {session ? (
        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <Chip tone="brand">{modes.find((m) => m.id === mode)?.label}</Chip>
            <Button
              variant="secondary"
              size="sm"
              icon={<RefreshCw size={14} />}
              onClick={() => setSession(null)}
            >
              Ayarları değiştir
            </Button>
          </div>

          {session.length === 0 ? (
            <EmptyState
              icon={<Brain size={22} />}
              title="Bu ayarlarla alıştırma üretilemedi"
              description="Havuzda en az 4 kelime olmalı. Filtreleri gevşet ve tekrar dene."
              action={<Button onClick={() => setSession(null)}>Ayarlara dön</Button>}
            />
          ) : (
            <ExerciseRunner
              key={runId}
              exercises={session}
              title={title}
              onFinish={() => undefined}
            />
          )}

          {session.length > 0 && (
            <Button
              variant="secondary"
              className="mt-4 w-full"
              icon={<RefreshCw size={15} />}
              onClick={start}
            >
              Yeni set oluştur
            </Button>
          )}
        </div>
      ) : (
        <div className="space-y-5">
          {/* Mode picker */}
          <Card className="p-5">
            <h2 className="mb-3 font-display text-sm font-bold text-ink-900 dark:text-white">
              Alıştırma türü
            </h2>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {modes.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMode(m.id)}
                  className={cx(
                    'rounded-xl border-2 p-3.5 text-left transition',
                    mode === m.id
                      ? 'border-brand-500 bg-brand-50 dark:border-brand-600 dark:bg-brand-950/40'
                      : 'border-ink-200 hover:border-brand-300 dark:border-ink-700',
                  )}
                >
                  <p className="font-display text-sm font-bold text-ink-900 dark:text-white">
                    {m.label}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{m.hint}</p>
                </button>
              ))}
            </div>
          </Card>

          <SetupPanel setup={setup} onChange={setSetup} poolSize={pool.length} />

          <Button
            className="w-full"
            size="lg"
            icon={<Play size={17} />}
            disabled={pool.length < 4}
            onClick={start}
          >
            {setup.count} soruluk alıştırmaya başla
          </Button>

          {pool.length < 4 && (
            <p className="text-center text-xs text-amber-600 dark:text-amber-400">
              Bu filtrelerle yeterli kelime yok. Seviye veya kategori filtresini gevşet.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The four practice pages                                             */
/* ------------------------------------------------------------------ */

export function VocabularyPractice() {
  const { lang } = useSettings();
  return (
    <PracticeScreen
      eyebrow="Alıştırma"
      icon={<Brain size={14} />}
      title="Kelime Alıştırması"
      description={(
        <span className="ar-text block" dir="rtl">
          {lang === 'ar'
            ? 'تمارين تُولَّد تلقائياً من بنك المفردات، ببدائل مأخوذة من نفس التصنيف حتى يكون الاختبار حقيقياً.'
            : 'ڕاهێنان بە خۆکاری لە بانکی وشەکانەوە دروست دەبێت، بە هەڵبژاردەی هەڵە لە هەمان پۆلەوە بۆ ئەوەی تاقیکردنەوەکە ڕاستەقینە بێت.'}
        </span>
      )}
      defaultMode="mixed"
      modes={[
        { id: 'mixed', label: 'Karışık', hint: 'Her türden soru' },
        { id: 'tr-to-native', label: 'Türkçe → çeviri', hint: 'Türkçeyi gör, karşılığını seç' },
        { id: 'native-to-tr', label: 'Çeviri → Türkçe', hint: 'Anlamı gör, Türkçesini seç' },
        { id: 'matching', label: 'Eşleştirme', hint: 'Dört kelimeyi karşılığıyla eşleştir' },
      ]}
    />
  );
}

/** Grammar practice pulls the hand-written exercises out of grammar lessons. */
export function GrammarPractice() {
  const { lang } = useSettings();
  const { visibleLessons } = useContent();
  const { completedLessons } = useProgress();

  const [level, setLevel] = useState<LevelId | 'all'>('all');
  const [onlyCompleted, setOnlyCompleted] = useState(false);
  const [count, setCount] = useState(10);
  const [session, setSession] = useState<Exercise[] | null>(null);
  const [runId, setRunId] = useState(0);

  const pool = useMemo(() => {
    let lessons = visibleLessons.filter((l) => l.kind === 'grammar' || l.kind === 'pronunciation');
    if (level !== 'all') lessons = lessons.filter((l) => l.level === level);
    if (onlyCompleted) lessons = lessons.filter((l) => completedLessons.includes(l.id));
    return lessons.flatMap((l) => l.exercises);
  }, [visibleLessons, level, onlyCompleted, completedLessons]);

  const start = () => {
    setSession(sample(shuffle(pool), count));
    setRunId((r) => r + 1);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Alıştırma"
        icon={<ClipboardList size={14} />}
        title="Dilbilgisi Alıştırması"
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? 'تمارين مأخوذة من دروس القواعد نفسها، مخلوطة عشوائياً. مثالية للمراجعة قبل الامتحان.'
              : 'ڕاهێنان لە خودی وانەکانی ڕێزمانەوە وەرگیراوە و بە هەڕەمەکی تێکەڵ کراون. باشترینە بۆ پێداچوونەوە پێش تاقیکردنەوە.'}
          </span>
        )}
      />

      {session ? (
        <div>
          <Button
            variant="secondary"
            size="sm"
            className="mb-4"
            icon={<RefreshCw size={14} />}
            onClick={() => setSession(null)}
          >
            Ayarları değiştir
          </Button>
          <ExerciseRunner key={runId} exercises={session} title="Dilbilgisi" shuffleOrder />
          <Button
            variant="secondary"
            className="mt-4 w-full"
            icon={<RefreshCw size={15} />}
            onClick={start}
          >
            Yeni set oluştur
          </Button>
        </div>
      ) : (
        <div className="space-y-5">
          <Card className="p-5">
            <div className="space-y-4">
              <Field label="Seviye">
                <Pill active={level === 'all'} onClick={() => setLevel('all')}>Hepsi</Pill>
                {LEVEL_ORDER.map((id) => (
                  <Pill key={id} active={level === id} onClick={() => setLevel(id)}>
                    {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
                  </Pill>
                ))}
              </Field>

              <Field label="Soru sayısı">
                {[5, 10, 15, 20].map((n) => (
                  <Pill key={n} active={count === n} onClick={() => setCount(n)}>{n}</Pill>
                ))}
              </Field>

              <label className="flex cursor-pointer items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={onlyCompleted}
                  onChange={(e) => setOnlyCompleted(e.target.checked)}
                  className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500"
                />
                <span className="text-sm text-ink-700 dark:text-ink-200">
                  Sadece tamamladığım derslerden
                </span>
              </label>

              <div className="rounded-xl bg-ink-50 p-3 text-center dark:bg-ink-950/60">
                <p className="font-display text-lg font-bold tabular-nums text-ink-900 dark:text-white">
                  {pool.length}
                </p>
                <p className="text-xs text-ink-500">uygun alıştırma</p>
              </div>
            </div>
          </Card>

          <Button
            className="w-full"
            size="lg"
            icon={<Play size={17} />}
            disabled={pool.length === 0}
            onClick={start}
          >
            Alıştırmaya başla
          </Button>
        </div>
      )}
    </div>
  );
}
