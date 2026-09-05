import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle, ArrowLeftRight, ArrowRight, Brain, BookOpen, CheckCircle2, Languages,
  Clock, Flame, GraduationCap, Hash, Headphones, Layers, Lock, Mic, Play,
  PlayCircle, Plus, Repeat, Target, Trophy, Type, Waypoints,
} from 'lucide-react';
import type { LevelId, Lesson } from '@/types/content';
import { LEVEL_ORDER } from '@/types/content';
import { daysSince, recommend, weakCards, type Recommendation } from '@/lib/recommend';
import { cx, percent, todayKey } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress, UNLOCK_THRESHOLD } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Card, Chip, LinkButton, ProgressBar, ProgressRing, SectionHeading,
  Skeleton, SkeletonCard, StatTile,
} from '@/components/ui/Primitives';
import { Hero } from '@/components/ui/Ornament';
import { Translated } from '@/components/learn/Translation';

/** Last element, without needing the ES2022 `Array.prototype.at`. */
function lastOf<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[items.length - 1] : undefined;
}

/** Icons the recommendation engine can name. */
const REC_ICONS: Record<string, typeof Brain> = {
  Brain, PlayCircle, AlertTriangle, GraduationCap, Headphones, Mic, Plus, CheckCircle2,
};

/**
 * Recommendation icons are NOT a rainbow. Only the tone that means "this is
 * time-critical" gets colour; everything else is quiet turquoise. That is what
 * makes the first card read as first.
 */
const REC_TONE = {
  brand: 'bg-brand-50 text-brand-700 ring-brand-100 dark:bg-brand-950 dark:text-brand-300 dark:ring-brand-900',
  accent: 'bg-accent-50 text-accent-700 ring-accent-100 dark:bg-accent-950 dark:text-accent-300 dark:ring-accent-900',
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-900',
  amber: 'bg-brass-50 text-brass-700 ring-brass-100 dark:bg-brass-950 dark:text-brass-300 dark:ring-brass-900',
  rose: 'bg-accent-50 text-accent-700 ring-accent-100 dark:bg-accent-950 dark:text-accent-300 dark:ring-accent-900',
  violet: 'bg-cobalt-50 text-cobalt-700 ring-cobalt-100 dark:bg-cobalt-950 dark:text-cobalt-300 dark:ring-cobalt-900',
} as const;

/** Turkish greetings follow the clock, not a generic "welcome back". */
function greeting(hour = new Date().getHours()): string {
  if (hour >= 5 && hour < 11) return 'Günaydın';
  if (hour >= 11 && hour < 18) return 'İyi günler';
  if (hour >= 18 && hour < 22) return 'İyi akşamlar';
  return 'İyi geceler';
}

export default function Dashboard() {
  const { lang, teacherMode } = useSettings();
  const progress = useProgress();
  const {
    levels, lessonsFor, levelProgress, lessonById, visibleLessons, stats,
    vocabFor, vocabulary,
  } = useContent();

  /** The level the student is actually working in: the first not yet finished. */
  const currentLevel = useMemo<LevelId>(() => {
    for (const id of LEVEL_ORDER) {
      if (!progress.isLevelUnlocked(id, teacherMode)) break;
      if (levelProgress(id) < 100) return id;
    }
    return LEVEL_ORDER[LEVEL_ORDER.length - 1];
  }, [levelProgress, progress, teacherMode]);

  const currentMeta = levels.find((l) => l.id === currentLevel)!;
  const currentPct = levelProgress(currentLevel);

  const nextLesson = useMemo<Lesson | undefined>(() => {
    const last = progress.lastLessonId ? lessonById(progress.lastLessonId) : undefined;
    if (last && !progress.completedLessons.includes(last.id)) return last;
    const inLevel = lessonsFor(currentLevel);
    return inLevel.find((l) => !progress.completedLessons.includes(l.id))
      ?? visibleLessons.find((l) => !progress.completedLessons.includes(l.id));
  }, [progress, lessonById, lessonsFor, currentLevel, visibleLessons]);

  const overall = percent(
    LEVEL_ORDER.reduce((sum, id) => sum + levelProgress(id), 0),
    LEVEL_ORDER.length * 100,
  );

  /* ---- study recommendations ---- */
  const cards = useMemo(() => Object.values(progress.reviews), [progress.reviews]);

  const recommendations = useMemo(() => recommend({
    dueCount: progress.srs.dueNow,
    cards,
    lessons: visibleLessons,
    completedLessons: progress.completedLessons,
    lastLessonId: progress.lastLessonId,
    vocabulary,
    learnedWords: progress.learnedWords,
    currentLevel,
    daysSinceListening: daysSince(lastOf(progress.listeningResults)?.at),
    daysSinceSpeaking: daysSince(lastOf(progress.speakingResults)?.at),
    reviewsToday: progress.reviewsToday,
  }), [progress, cards, visibleLessons, vocabulary, currentLevel]);

  /* ---- weekly activity ---- */
  const week = useMemo(() => {
    const days: { key: string; label: string; active: boolean; reviews: number }[] = [];
    const names = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    const activeSet = new Set(progress.activeDays);
    for (let i = 6; i >= 0; i -= 1) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const key = todayKey(date);
      days.push({
        key,
        // getDay(): 0 = Sunday, and the Turkish week starts on Monday.
        label: names[(date.getDay() + 6) % 7],
        active: activeSet.has(key),
        reviews: progress.reviewLog[key] ?? 0,
      });
    }
    return days;
  }, [progress.activeDays, progress.reviewLog]);

  const weakCount = useMemo(() => weakCards(cards).length, [cards]);
  const learningCount = progress.srs.learning + progress.srs.relearning;
  const masteredCount = progress.srs.mature;
  const peakReviews = Math.max(4, ...week.map((d) => d.reviews));

  /* ---- Arabic connection of the day ---- */
  const arabicLinked = useMemo(
    () => vocabulary.filter((v) => v.arabic && v.arabic.relation !== 'false-friend'),
    [vocabulary],
  );
  const arabicLinkCount = useMemo(
    () => vocabulary.filter((v) => v.arabic).length,
    [vocabulary],
  );
  const arabicPick = useMemo(() => {
    if (arabicLinked.length === 0) return undefined;
    // Deterministic per day: the card should change each morning, not on
    // every render.
    const day = Math.floor(Date.now() / 86_400_000);
    return arabicLinked[day % arabicLinked.length];
  }, [arabicLinked]);

  /* ---- "did you know?" — an Arabic-origin word, with its root ---- */
  const originPool = useMemo(() => {
    // Only words whose root has SIBLINGS are worth showing: "hükümet comes
    // from حكومة" is a fact, but "and so do hüküm, hâkim, mahkeme and hikmet"
    // is the thing that makes it useful.
    const rootCount = new Map<string, number>();
    for (const v of vocabulary) {
      const root = v.origin?.language === 'arabic' ? v.origin.root : undefined;
      if (root) rootCount.set(root, (rootCount.get(root) ?? 0) + 1);
    }
    return vocabulary.filter(
      (v) => v.origin?.language === 'arabic'
        && v.origin.root
        && (rootCount.get(v.origin.root) ?? 0) > 1,
    );
  }, [vocabulary]);
  const originCount = useMemo(
    () => vocabulary.filter((v) => v.origin?.language === 'arabic').length,
    [vocabulary],
  );
  const originPick = useMemo(() => {
    if (originPool.length === 0) return undefined;
    // Offset from the connection pick so the two cards never show the same
    // word on the same day.
    const day = Math.floor(Date.now() / 86_400_000);
    return originPool[(day * 7 + 3) % originPool.length];
  }, [originPool]);

  /** Other words sharing the picked word's root — the interesting part. */
  const originSiblings = useMemo(() => {
    if (!originPick?.origin?.root) return [];
    return vocabulary
      .filter((v) => v.id !== originPick.id && v.origin?.root === originPick.origin!.root)
      .slice(0, 4);
  }, [vocabulary, originPick]);

  return (
    <div className="space-y-10">
      {/* ---------------------------------------------------------------- *
       * Hero — §5/§6. Midnight, star lattice, and exactly one primary     *
       * action. The student should read: who am I, where am I, go here.   *
       * ---------------------------------------------------------------- */}
      <Hero>
        <div className="flex flex-col gap-8 p-6 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[.18em] text-brass-300/80">
              {greeting()}
            </p>

            <h1 className="mt-2.5 t-display text-white">
              Bugün Türkçen için
              <br className="hidden sm:block" />
              {' '}hazır mısın?
            </h1>

            <p
              className={cx('mt-3.5 w-fit max-w-lg text-[15px] leading-relaxed text-ink-300', lang === 'ar' ? 'ar-text' : 'ku-text')}
              dir="rtl"
              lang={lang === 'ar' ? 'ar' : 'ckb'}
            >
              {lang === 'ar'
                ? 'واصل من حيث توقفت. كل درس يقرّبك خطوة من إتقان التركية.'
                : 'لەوێوە بەردەوام بە کە وەستایت. هەر وانەیەک هەنگاوێک نزیکت دەکاتەوە لە شارەزایی لە تورکی.'}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[.06] px-3 py-1.5 text-[13px] font-semibold text-ink-100">
                <Target size={14} className="text-brand-300" />
                {currentMeta.code} · {currentMeta.name}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[.06] px-3 py-1.5 text-[13px] font-semibold text-ink-100">
                <Flame size={14} className="text-brass-400" />
                {progress.streak} günlük seri
              </span>
              {progress.srs.dueNow > 0 && (
                <Link
                  to="/review"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-3 py-1.5 text-[13px] font-bold text-white transition hover:bg-accent-500"
                >
                  <Repeat size={14} />
                  {progress.srs.dueNow} tekrar hazır
                </Link>
              )}
            </div>

            {nextLesson && (
              <Link
                to={`/lesson/${nextLesson.id}`}
                className="group mt-7 inline-flex max-w-full items-center gap-3.5 rounded-2xl bg-ink-50 p-2.5 pr-5 text-ink-950 shadow-lift transition duration-200 hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-700 text-white">
                  <Play size={17} fill="currentColor" />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block font-mono text-[10px] font-semibold uppercase tracking-[.14em] text-ink-500">
                    Sıradaki ders
                  </span>
                  <span className="block truncate font-display text-[15px] font-semibold">
                    {nextLesson.title}
                  </span>
                </span>
                <ArrowRight
                  size={17}
                  className="ml-1 shrink-0 text-ink-400 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            )}
          </div>

          {/* Progress panel. Glass would be a cliché here; a hairline box on
              the lattice keeps it architectural. */}
          <div className="flex shrink-0 items-center gap-6 rounded-2xl border border-white/12 bg-ink-950/40 p-5">
            <ProgressRing
              value={currentPct}
              size={104}
              tone={currentLevel === 'c1plus' ? 'brass' : 'brand'}
              label={(
                <span className="text-center">
                  <span className="block font-display text-2xl font-semibold tabular-nums text-white">
                    {currentPct}%
                  </span>
                  <span className="block font-mono text-[10px] font-semibold uppercase tracking-[.14em] text-brass-300/80">
                    {currentMeta.code}
                  </span>
                </span>
              )}
            />
            <div className="space-y-3">
              <MiniStat label="Toplam ilerleme" value={`${overall}%`} />
              <MiniStat label="Tamamlanan ders" value={`${progress.completedLessons.length}/${stats.lessons}`} />
              <MiniStat label="Ustalaşılan kelime" value={`${masteredCount}`} />
            </div>
          </div>
        </div>
      </Hero>

      {/* ---------------------------------------------------------------- *
       * What should I study today?                                        *
       * ---------------------------------------------------------------- */}
      <section>
        <SectionHeading
          eyebrow="Çalışma planı"
          title="Bugün ne çalışmalıyım?"
          action={(
            <Chip tone="brass">
              <Clock size={12} />
              {recommendations.reduce((s, r) => s + r.minutes, 0)} dk toplam
            </Chip>
          )}
        />
        <p
          className={cx('-mt-1 mb-5 w-fit max-w-2xl text-sm', lang === 'ar' ? 'ar-text' : 'ku-text')}
          dir="rtl"
          lang={lang === 'ar' ? 'ar' : 'ckb'}
          style={{ color: 'rgb(var(--text-secondary))' }}
        >
          {lang === 'ar'
            ? 'مرتّبة حسب الأولوية الحقيقية: ما ينتهي وقته أولاً، ثم ما بدأته، ثم ما تنساه.'
            : 'بەپێی ئەولەویەتی ڕاستەقینە ڕیزکراوە: ئەوەی کاتی تەواو دەبێت سەرەتا، پاشان ئەوەی دەستت پێکردووە.'}
        </p>

        {/* §23 — content-shaped placeholders, never a spinner. The wait is
            short because progress comes from local storage, but without this
            the planner renders against empty state for a frame and the
            student sees the wrong advice flash past. */}
        <div className="grid gap-3 lg:grid-cols-2">
          {progress.ready
            ? recommendations.slice(0, 4).map((rec, i) => (
              <RecommendationCard key={rec.kind} rec={rec} featured={i === 0} rank={i + 1} />
            ))
            : [0, 1, 2, 3].map((i) => (
              <SkeletonCard key={i} lines={2} className={i === 0 ? 'lg:col-span-2' : undefined} />
            ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Arabic connections — §14. ONE discovery card, not a wall. It shows *
       * a real word rather than describing the feature, because the word   *
       * is the argument.                                                   *
       * ---------------------------------------------------------------- */}
      {arabicPick && (
        <section>
          <Link
            to="/connections"
            className="card card-hover group flex flex-col gap-4 p-5 sm:flex-row sm:items-center"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brass-50 text-brass-700 ring-1 ring-inset ring-brass-100 dark:bg-brass-950 dark:text-brass-300 dark:ring-brass-900">
              <ArrowLeftRight size={20} />
            </span>

            <div className="min-w-0 flex-1">
              <p className="font-display text-[15px] font-semibold text-primary">
                Bu Arapça kelimeyi zaten biliyorsun
              </p>
              <p
                className={cx('mt-1.5 w-fit text-sm text-secondary', lang === 'ar' ? 'ar-text' : 'ku-text')}
                dir="rtl"
                lang={lang === 'ar' ? 'ar' : 'ckb'}
              >
                {lang === 'ar'
                  ? 'مئات الكلمات التركية جاءت من العربية. اكتشف ما تعرفه أصلاً.'
                  : 'سەدان وشەی تورکی لە عەرەبییەوە هاتوون. ئەوە بدۆزەرەوە کە پێشتر دەیزانیت.'}
              </p>
            </div>

            {/* The pair itself. */}
            <div className="flex shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 surface-sunken">
              <span className="tr-word text-lg" lang="tr">{arabicPick.tr}</span>
              <ArrowLeftRight size={14} className="text-brass-500" aria-hidden />
              <span className="ar-text text-lg text-primary" dir="rtl" lang="ar">
                {arabicPick.arabic!.ar}
              </span>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-accent">
              {arabicLinkCount} bağlantı
              <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </section>
      )}

      {/* ---------------------------------------------------------------- *
       * "Did you know?" — §24. Shows a real word and the OTHER words that  *
       * share its root, because the root is what makes the fact useful     *
       * rather than merely interesting.                                    *
       * ---------------------------------------------------------------- */}
      {originPick && (
        <section>
          <Link
            to={`/arabic-origin?tab=roots&root=${encodeURIComponent(originPick.origin!.root!)}`}
            className="card card-hover group flex flex-col gap-4 p-5 sm:flex-row sm:items-center"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cobalt-50 text-cobalt-700 ring-1 ring-inset ring-cobalt-100 dark:bg-cobalt-950 dark:text-cobalt-300 dark:ring-cobalt-900">
              <Languages size={20} />
            </span>

            <div className="min-w-0 flex-1">
              <p className="font-display text-[15px] font-semibold text-primary">
                Biliyor muydun?
              </p>
              <p className="mt-1.5 t-secondary">
                <span className="tr-word" lang="tr">{originPick.tr}</span>
                {' '}kelimesi Arapça{' '}
                <span className="ar-text" dir="rtl" lang="ar">{originPick.origin!.source}</span>
                {' '}kökeninden geliyor.
                {originSiblings.length > 0 && (
                  <>
                    {' '}Aynı kökten:{' '}
                    <span className="tr-word" lang="tr">
                      {originSiblings.map((w) => w.tr).join(' · ')}
                    </span>
                  </>
                )}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 surface-sunken">
              <span className="ar-text text-lg text-brass-700 dark:text-brass-300" dir="rtl" lang="ar">
                {originPick.origin!.root}
              </span>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-accent">
              {originCount} kelime
              <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </section>
      )}

      {/* ---- headline numbers ---- */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {!progress.ready && [0, 1, 2, 3].map((i) => (
          <div key={i} className="card p-4" aria-hidden>
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-3.5 h-7 w-16" />
            <Skeleton className="mt-2 h-3 w-20" />
          </div>
        ))}
        {progress.ready && <>
        <StatTile
          label="Tekrar bekleyen" value={progress.srs.dueNow}
          sub={`bugün ${progress.reviewsToday} yapıldı`}
          icon={<Repeat size={14} />} tone={progress.srs.dueNow > 0 ? 'accent' : 'green'}
        />
        <StatTile
          label="Ustalaşılan kelime" value={masteredCount}
          sub={`${learningCount} öğrenme aşamasında`}
          icon={<CheckCircle2 size={14} />} tone="green"
        />
        <StatTile
          label="Alıştırma doğruluğu" value={`${progress.accuracy}%`}
          sub={`${progress.attempts.total} soru`}
          icon={<Trophy size={14} />} tone="brand"
        />
        <StatTile
          label="Dinleme skoru"
          value={progress.listeningResults.length > 0 ? `${progress.listeningAccuracy}%` : '—'}
          sub={progress.listeningResults.length > 0
            ? `${progress.listeningResults.length} oturum`
            : 'henüz denenmedi'}
          icon={<Headphones size={14} />} tone="cobalt"
        />
        </>}
      </section>

      {/* ---- weekly activity + vocabulary state ---- */}
      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <div className="mb-5 flex items-baseline justify-between gap-3">
            <h2 className="t-h3 text-primary">Bu hafta</h2>
            <span className="t-meta">
              {week.filter((d) => d.active).length}/7 gün aktif
            </span>
          </div>

          <div className="flex items-end justify-between gap-2">
            {week.map((day) => {
              const isToday = day.key === todayKey();
              const height = day.reviews > 0
                ? Math.max(14, (day.reviews / peakReviews) * 100)
                : 6;
              return (
                <div key={day.key} className="flex flex-1 flex-col items-center gap-2.5">
                  <div className="flex h-24 w-full items-end justify-center">
                    <div
                      className={cx(
                        'w-full max-w-[2.25rem] rounded-md transition-all duration-500',
                        day.reviews > 0
                          ? 'bg-brand-600 dark:bg-brand-500'
                          : day.active
                            ? 'bg-ink-300 dark:bg-ink-700'
                            : 'bg-ink-200 dark:bg-ink-800',
                        isToday && 'ring-2 ring-brass-400 ring-offset-2',
                      )}
                      style={{
                        height: `${height}%`,
                        // @ts-expect-error — CSS custom property for the ring offset
                        '--tw-ring-offset-color': 'rgb(var(--surface))',
                      }}
                      title={`${day.reviews} tekrar`}
                    />
                  </div>
                  <span
                    className={cx(
                      'font-mono text-[10px] uppercase tracking-wider',
                      isToday ? 'font-bold text-accent' : 'text-muted',
                    )}
                  >
                    {day.label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-4 t-caption">
            Sütun yüksekliği o günkü tekrar sayısını gösterir.
          </p>
        </Card>

        <Card className="p-5">
          <h2 className="t-h3 mb-4 text-primary">Kelime durumu</h2>
          <div className="space-y-3">
            <VocabBar
              label="Ustalaşıldı" value={masteredCount} total={progress.srs.total || 1}
              tone="bg-emerald-600 dark:bg-emerald-500" hint="21+ gün aralık"
            />
            <VocabBar
              label="Öğreniliyor" value={learningCount} total={progress.srs.total || 1}
              tone="bg-brass-500" hint="kısa aralıklarla"
            />
            <VocabBar
              label="Yeni" value={progress.srs.new} total={progress.srs.total || 1}
              tone="bg-brand-600 dark:bg-brand-400" hint="henüz çalışılmadı"
            />
            {weakCount > 0 && (
              <VocabBar
                label="Zorlanılan" value={weakCount} total={progress.srs.total || 1}
                tone="bg-accent-600 dark:bg-accent-500" hint="düşük kolaylık faktörü"
              />
            )}
          </div>
          <div className="mt-5 border-t pt-3.5 hairline">
            <p className="t-caption">
              Destede {progress.srs.total} kart · müfredatta {stats.words} kelime
            </p>
            <Link
              to="/review"
              className="link-action mt-2"
            >
              Desteyi yönet
              <ArrowRight size={12} />
            </Link>
          </div>
        </Card>
      </section>

      {/* ---------------------------------------------------------------- *
       * The journey — §7. Six levels shown as one path.                   *
       * ---------------------------------------------------------------- */}
      <section>
        <SectionHeading
          eyebrow="A1 → A2 → B1 → B2 → C1 → C1+"
          title="Öğrenme yolun"
          action={<LinkButton to="/levels" variant="secondary" size="sm">Tüm seviyeler</LinkButton>}
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map((level, i) => {
            const unlocked = progress.isLevelUnlocked(level.id, teacherMode);
            const pct = levelProgress(level.id);
            const isCurrent = level.id === currentLevel;
            const prevPct = i > 0 ? levelProgress(levels[i - 1].id) : 100;
            const levelWords = vocabFor(level.id).length;

            return (
              <Link
                key={level.id}
                to={unlocked ? `/levels/${level.id}` : '#'}
                onClick={(e) => { if (!unlocked) e.preventDefault(); }}
                aria-disabled={!unlocked}
                className={cx(
                  'card relative overflow-hidden p-4 transition',
                  unlocked ? 'card-hover' : 'cursor-not-allowed opacity-70',
                  isCurrent && 'ring-2 ring-brass-400',
                )}
              >
                {isCurrent && (
                  <span className="absolute right-0 top-0 rounded-bl-lg bg-brass-400 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ink-950">
                    Şu an
                  </span>
                )}

                <div className="flex items-start justify-between gap-3">
                  <span
                    className={cx(
                      'grid h-11 w-14 place-items-center rounded-lg bg-gradient-to-br font-mono text-sm font-bold text-white',
                      'ring-1 ring-inset ring-white/20',
                      level.gradient,
                      !unlocked && 'grayscale',
                    )}
                  >
                    {level.code}
                  </span>
                  {unlocked
                    ? (pct === 100
                      ? <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" />
                      : <span className="font-mono text-sm font-semibold tabular-nums text-muted">{pct}%</span>)
                    : <Lock size={15} className="text-muted" />}
                </div>

                <p className="mt-3.5 font-display font-semibold text-primary">{level.name}</p>
                <div className="mt-1.5">
                  <Translated value={level.tagline} size="sm" />
                </div>

                {unlocked ? (
                  <>
                    <ProgressBar
                      value={pct} className="mt-4" size="sm"
                      tone={pct === 100 ? 'green' : level.id === 'c1plus' ? 'brass' : 'brand'}
                    />
                    <p className="mt-2 t-caption">
                      {lessonsFor(level.id).length} ders · {levelWords} kelime
                    </p>
                  </>
                ) : (
                  <p className="mt-4 text-xs font-medium text-muted">
                    Önceki seviyeyi %{UNLOCK_THRESHOLD} tamamla ({prevPct}%)
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ---- quick access ---- */}
      <section>
        <SectionHeading eyebrow="Kısayollar" title="Hızlı başlangıç" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <QuickCard
            to="/review" icon={<Repeat size={18} />} title="Bugünün Tekrarı"
            sub={lang === 'ar' ? `${progress.srs.dueNow} بطاقة مستحقّة` : `${progress.srs.dueNow} کارتی کاتهاتوو`}
            lang={lang}
          />
          <QuickCard
            to="/alphabet" icon={<Type size={18} />} title="Alfabe"
            sub={lang === 'ar' ? '٢٩ حرفاً بالصوت' : '٢٩ پیت بە دەنگەوە'} lang={lang}
          />
          <QuickCard
            to="/numbers" icon={<Hash size={18} />} title="Sayılar"
            sub={lang === 'ar' ? 'من الصفر إلى المليار' : 'لە سفرەوە بۆ ملیار'} lang={lang}
          />
          <QuickCard
            to="/vocabulary" icon={<BookOpen size={18} />} title="Kelimeler"
            sub={lang === 'ar' ? `${stats.words} كلمة` : `${stats.words} وشە`} lang={lang}
          />
          <QuickCard
            to="/grammar" icon={<Layers size={18} />} title="Dilbilgisi"
            sub={lang === 'ar' ? 'من A1 إلى C1+' : 'لە A1 بۆ C1+'} lang={lang}
          />
          <QuickCard
            to="/sentences" icon={<Waypoints size={18} />} title="Cümleler"
            sub={lang === 'ar' ? `${stats.sentences} جملة` : `${stats.sentences} ڕستە`} lang={lang}
          />
          <QuickCard
            to="/practice/listening" icon={<Headphones size={18} />} title="Dinleme"
            sub={lang === 'ar' ? 'استمع واختر' : 'گوێ بگرە و هەڵبژێرە'} lang={lang}
          />
          <QuickCard
            to="/practice/speaking" icon={<Mic size={18} />} title="Konuşma"
            sub={lang === 'ar' ? 'كرّر بصوت عالٍ' : 'بە دەنگی بەرز دووبارە بکەوە'} lang={lang}
          />
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function RecommendationCard({
  rec, featured, rank,
}: {
  rec: Recommendation;
  featured: boolean;
  rank: number;
}) {
  const Icon = REC_ICONS[rec.icon] ?? Brain;
  return (
    <Link
      to={rec.href}
      className={cx(
        'card card-hover group relative flex items-start gap-4 p-5',
        featured && 'card-edge lg:col-span-2',
      )}
    >
      {/* The priority number. It makes the ordering explicit rather than
          implied — the planner ranked these, and the student can see it. */}
      <span
        className={cx(
          'grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ring-inset',
          REC_TONE[rec.tone],
        )}
      >
        <Icon size={20} />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] font-bold tabular-nums text-muted">
            {String(rank).padStart(2, '0')}
          </span>
          <p className="font-display text-[15px] font-semibold text-primary">{rec.title}</p>
          {rec.count !== undefined && rec.count > 0 && (
            <Chip tone={rec.tone === 'rose' || rec.tone === 'accent' ? 'accent' : 'neutral'}>
              {rec.count}
            </Chip>
          )}
        </div>
        <div className="mt-2">
          <Translated value={rec.reason} size="sm" />
        </div>
        <div className="mt-3.5 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
            {rec.cta}
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
          <span className="inline-flex items-center gap-1 t-caption">
            <Clock size={11} />
            ~{rec.minutes} dk
          </span>
        </div>
      </div>
    </Link>
  );
}

function VocabBar({
  label, value, total, tone, hint,
}: {
  label: string;
  value: number;
  total: number;
  tone: string;
  hint: string;
}) {
  const pct = percent(value, total);
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <span className="text-xs font-semibold text-primary">{label}</span>
        <span className="font-mono text-xs tabular-nums text-secondary">{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full surface-sunken">
        <div
          className={cx('h-full rounded-full transition-[width] duration-700', tone)}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-1 t-caption">{hint}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[.14em] text-ink-400">
        {label}
      </p>
      <p className="font-display text-lg font-semibold tabular-nums text-white">{value}</p>
    </div>
  );
}

/**
 * Quick access. Deliberately uniform — eight different gradients turned this
 * row into a paint chart and made every destination look equally urgent.
 * One turquoise icon each, and the hover does the differentiating.
 */
function QuickCard({
  to, icon, title, sub, lang,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  lang: 'ar' | 'ku';
}) {
  return (
    <Link to={to} className="card card-hover group flex items-center gap-3.5 p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-100 dark:bg-brand-950 dark:text-brand-300 dark:ring-brand-900">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-display text-sm font-semibold text-primary">{title}</span>
        <span
          className={cx('block truncate text-xs text-secondary', lang === 'ar' ? 'ar-text' : 'ku-text')}
          dir="rtl"
          lang={lang === 'ar' ? 'ar' : 'ckb'}
        >
          {sub}
        </span>
      </span>
    </Link>
  );
}

export { Card };
