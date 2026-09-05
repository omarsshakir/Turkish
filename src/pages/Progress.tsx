import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, CheckCircle2, Flame, Headphones, Layers, Target, TrendingUp, Trophy,
} from 'lucide-react';
import { LEVEL_ORDER } from '@/types/content';
import { cx, percent, todayKey } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Card, Chip, EmptyState, PageHeader, ProgressBar, ProgressRing, StatTile,
} from '@/components/ui/Primitives';
import { Translated } from '@/components/learn/Translation';
import { ConnectionProgressPanel } from '@/components/learn/ConnectionProgress';

/** Everything the student has done, in one place. */
export default function ProgressPage() {
  const { lang } = useSettings();
  const progress = useProgress();
  const {
    levels, levelProgress, levelTotals, lessonById, lessonsFor, stats, vocabFor,
    vocabulary,
  } = useContent();

  const overall = percent(
    LEVEL_ORDER.reduce((sum, id) => sum + levelProgress(id), 0),
    LEVEL_ORDER.length * 100,
  );

  /** Last 12 weeks of activity as a GitHub-style heatmap. */
  /**
   * Twelve weeks of study history.
   *
   * The cells carry the actual number of reviews done that day, not just
   * "studied / did not". The legend has always shown four shades; until now
   * the cells only ever used two, so it promised a gradient the data never
   * produced. Intensity is banded against the busiest day in the window, so
   * the chart stays readable whether a student does 5 reviews a day or 200.
   */
  const heatmap = useMemo(() => {
    const days: { key: string; active: boolean; reviews: number; date: Date }[] = [];
    const set = new Set(progress.activeDays);
    for (let i = 83; i >= 0; i -= 1) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const key = todayKey(date);
      days.push({
        key,
        active: set.has(key),
        reviews: progress.reviewLog[key] ?? 0,
        date,
      });
    }
    return days;
  }, [progress.activeDays, progress.reviewLog]);

  const heatPeak = useMemo(
    () => Math.max(1, ...heatmap.map((d) => d.reviews)),
    [heatmap],
  );

  /** 0 = nothing, 1 = opened the app, 2-4 = increasing review volume. */
  const heatLevel = (day: { active: boolean; reviews: number }): 0 | 1 | 2 | 3 | 4 => {
    if (day.reviews === 0) return day.active ? 1 : 0;
    const share = day.reviews / heatPeak;
    if (share > 0.66) return 4;
    if (share > 0.33) return 3;
    return 2;
  };

  const HEAT_CLASS = [
    'surface-sunken ring-1 ring-inset ring-ink-200/70 dark:ring-ink-800',
    'bg-brand-200 dark:bg-brand-900',
    'bg-brand-300 dark:bg-brand-700',
    'bg-brand-500 dark:bg-brand-500',
    'bg-brand-700 dark:bg-brand-300',
  ] as const;

  const recentQuizzes = useMemo(
    () => [...progress.quizResults].sort((a, b) => b.at.localeCompare(a.at)).slice(0, 8),
    [progress.quizResults],
  );

  return (
    <div>
      <PageHeader
        eyebrow="İlerleme"
        icon={<TrendingUp size={14} />}
        title="Öğrenme İstatistiklerin"
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? 'كل ما أنجزته حتى الآن: الدروس، المفردات، دقّة الإجابات، والاستمرارية اليومية.'
              : 'هەموو ئەوەی تا ئێستا ئەنجامت داوە: وانەکان، وشەکان، وردی وەڵامەکان، و بەردەوامی ڕۆژانە.'}
          </span>
        )}
      />

      {/* Top stats */}
      <div className="mb-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile
          label="Toplam ilerleme" value={`${overall}%`}
          sub="tüm seviyeler" icon={<Target size={14} />} tone="brand"
        />
        <StatTile
          label="Günlük seri" value={progress.streak}
          sub={`${progress.activeDays.length} aktif gün`}
          icon={<Flame size={14} />} tone="accent"
        />
        <StatTile
          label="Doğruluk" value={`${progress.accuracy}%`}
          sub={`${progress.attempts.correct}/${progress.attempts.total} doğru`}
          icon={<Trophy size={14} />} tone="green"
        />
        <StatTile
          label="Dinleme" value={progress.listens}
          sub="ses oynatma" icon={<Headphones size={14} />} tone="violet"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Level breakdown */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-5">
            <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-ink-900 dark:text-white">
              <Layers size={17} className="text-brand-600" />
              Seviye seviye ilerleme
            </h2>
            <div className="space-y-4">
              {levels.map((level) => {
                const pct = levelProgress(level.id);
                const totals = levelTotals(level.id);
                const doneLessons = lessonsFor(level.id)
                  .filter((l) => progress.completedLessons.includes(l.id)).length;
                const learned = vocabFor(level.id)
                  .filter((w) => progress.learnedWords.includes(w.id)).length;

                return (
                  <Link key={level.id} to={`/levels/${level.id}`} className="block">
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2">
                        <span className={cx(
                          'grid h-7 w-10 place-items-center rounded-lg bg-gradient-to-br font-mono text-[11px] font-bold text-white',
                          level.gradient,
                        )}
                        >
                          {level.code}
                        </span>
                        <span className="font-display text-sm font-semibold text-ink-800 dark:text-ink-100">
                          {level.name}
                        </span>
                      </span>
                      <span className="font-mono text-xs tabular-nums text-ink-500">
                        {pct}%
                      </span>
                    </div>
                    <ProgressBar value={pct} size="sm" tone={pct === 100 ? 'green' : 'brand'} />
                    <p className="mt-1 text-[11px] text-ink-400">
                      {doneLessons}/{totals.lessons} ders · {learned}/{totals.words} kelime
                    </p>
                  </Link>
                );
              })}
            </div>
          </Card>

          {/* Activity heatmap */}
          <Card className="p-5">
            <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-ink-900 dark:text-white">
              <Flame size={17} className="text-accent-500" />
              Son 12 hafta
            </h2>
            <div className="overflow-x-auto pb-1">
              <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
                {heatmap.map((day) => {
                  const level = heatLevel(day);
                  const isToday = day.key === todayKey();
                  return (
                    <span
                      key={day.key}
                      title={
                        day.reviews > 0
                          ? `${day.key} — ${day.reviews} tekrar`
                          : day.active
                            ? `${day.key} — çalışıldı`
                            : day.key
                      }
                      className={cx(
                        'h-3.5 w-3.5 rounded-[3px] transition-colors duration-200',
                        HEAT_CLASS[level],
                        isToday && 'ring-2 ring-brass-400 ring-offset-1 ring-offset-transparent',
                      )}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3">
              <p className="t-caption">
                {heatmap.filter((d) => d.active).length}/84 gün çalışıldı
              </p>
              <div className="flex items-center gap-1.5 t-caption">
                <span>Az</span>
                {HEAT_CLASS.map((cls, i) => (
                  <span key={i} className={cx('h-3 w-3 rounded-[3px]', cls)} />
                ))}
                <span>Çok</span>
              </div>
            </div>
          </Card>

          <ConnectionProgressPanel vocabulary={vocabulary} compact />

          {/* Recent quizzes */}
          <Card className="overflow-hidden">
            <div className="border-b border-ink-200 px-5 py-3.5 dark:border-ink-800">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink-900 dark:text-white">
                <Trophy size={17} className="text-amber-500" />
                Son alıştırma sonuçların
              </h2>
            </div>
            {recentQuizzes.length === 0 ? (
              <div className="p-5">
                <EmptyState
                  icon={<Trophy size={20} />}
                  title="Henüz alıştırma yapmadın"
                  description="Bir dersi bitirip alıştırmasını çöz — sonucun burada görünecek."
                />
              </div>
            ) : (
              <ul className="divide-y divide-ink-100 dark:divide-ink-800">
                {recentQuizzes.map((quiz) => {
                  const lesson = lessonById(quiz.lessonId);
                  const score = percent(quiz.correct, quiz.total);
                  return (
                    <li key={quiz.lessonId} className="flex items-center gap-3 px-5 py-3">
                      <span className={cx(
                        'grid h-9 w-9 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold',
                        score >= 80
                          ? 'bg-emerald-500 text-white'
                          : score >= 60
                            ? 'bg-amber-500 text-white'
                            : 'bg-accent-500 text-white',
                      )}
                      >
                        {score}
                      </span>
                      <div className="min-w-0 flex-1">
                        {lesson ? (
                          <Link
                            to={`/lesson/${lesson.id}`}
                            className="block truncate font-display text-sm font-semibold text-ink-900 hover:text-brand-600 dark:text-white"
                          >
                            {lesson.title}
                          </Link>
                        ) : (
                          <p className="truncate text-sm text-ink-500">{quiz.lessonId}</p>
                        )}
                        <p className="text-[11px] text-ink-400">
                          {quiz.correct}/{quiz.total} doğru ·{' '}
                          {new Date(quiz.at).toLocaleDateString('tr-TR')}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </Card>
        </div>

        {/* Side column */}
        <div className="space-y-6">
          <Card className="p-6 text-center">
            <ProgressRing value={overall} size={128} stroke={10} />
            <p className="mt-4 font-display text-sm font-bold text-ink-900 dark:text-white">
              A1 → C1+ yolculuğu
            </p>
            <p className="mt-1 text-xs text-ink-500">
              {progress.completedLessons.length} / {stats.lessons} ders tamamlandı
            </p>
          </Card>

          <Card className="p-5">
            <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
              <BookOpen size={15} className="text-brand-600" />
              Kelime dağarcığın
            </h3>
            <p className="font-display text-4xl font-bold tabular-nums text-ink-950 dark:text-white">
              {progress.learnedWords.length}
            </p>
            <p className="text-xs text-ink-500">
              öğrenilen kelime / toplam {stats.words}
            </p>
            <ProgressBar
              value={percent(progress.learnedWords.length, stats.words)}
              className="mt-3" tone="green" size="sm"
            />

            <div className="mt-4 space-y-2 border-t border-ink-100 pt-4 dark:border-ink-800">
              {levels.map((level) => {
                const words = vocabFor(level.id);
                const learned = words.filter((w) => progress.learnedWords.includes(w.id)).length;
                if (words.length === 0) return null;
                return (
                  <div key={level.id} className="flex items-center gap-2">
                    <span className="w-9 shrink-0 font-mono text-[10px] font-bold text-ink-400">
                      {level.code}
                    </span>
                    <ProgressBar value={percent(learned, words.length)} size="sm" tone="green" />
                    <span className="w-14 shrink-0 text-right font-mono text-[10px] tabular-nums text-ink-400">
                      {learned}/{words.length}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="mb-2 font-display text-sm font-bold text-ink-900 dark:text-white">
              Öğrenme hedefin
            </h3>
            <Translated
              value={{
                ar: 'ادرس ٢٠ دقيقة يومياً. الاستمرار لمدة ٩٠ يوماً يكفي للانتقال من A1 إلى A2 بثقة.',
                ku: 'ڕۆژانە ٢٠ خولەک بخوێنە. بەردەوامی بۆ ٩٠ ڕۆژ بەسە بۆ گواستنەوە لە A1 بۆ A2 بە دڵنیاییەوە.',
              }}
              size="sm"
            />
            <div className="mt-3 flex items-center gap-2">
              <Chip tone="accent" icon={<Flame size={12} />}>
                {progress.streak} gün
              </Chip>
              {progress.streak >= 7 && (
                <Chip tone="green" icon={<CheckCircle2 size={12} />}>Bir hafta!</Chip>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
