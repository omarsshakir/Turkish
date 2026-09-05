import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft, BookOpen, CheckCircle2, Layers, Lock, MessagesSquare,
  Mic, Target, Waypoints,
} from 'lucide-react';
import { LEVEL_ORDER, type LevelId } from '@/types/content';
import { cx, percent } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, EmptyState, ProgressBar, StatTile,
} from '@/components/ui/Primitives';
import { Translated } from '@/components/learn/Translation';
import { VocabRow } from '@/components/learn/VocabRow';
import { LessonCard } from './Lesson';

/** Every level gets its own dashboard: lessons, vocabulary and sentence packs. */
export default function LevelDetail() {
  const { levelId } = useParams<{ levelId: string }>();
  const { levels, lessonsFor, vocabFor, sentencesFor, levelProgress } = useContent();
  const { lang, teacherMode } = useSettings();
  const progress = useProgress();

  if (!levelId || !LEVEL_ORDER.includes(levelId as LevelId)) {
    return <Navigate to="/levels" replace />;
  }

  const level = levelId as LevelId;
  const meta = levels.find((l) => l.id === level)!;
  const unlocked = progress.isLevelUnlocked(level, teacherMode);

  const lessons = lessonsFor(level);
  const words = vocabFor(level);
  const packs = sentencesFor(level);

  const grammar = lessons.filter((l) => l.kind === 'grammar');
  const pronunciation = lessons.filter((l) => l.kind === 'pronunciation');
  const conversation = lessons.filter((l) => l.kind === 'conversation');

  const doneLessons = lessons.filter((l) => progress.completedLessons.includes(l.id)).length;
  const learnedWords = words.filter((w) => progress.learnedWords.includes(w.id)).length;
  const donePacks = packs.filter((p) => progress.completedSentencePacks.includes(p.id)).length;
  const pct = levelProgress(level);

  const nextLesson = lessons.find((l) => !progress.completedLessons.includes(l.id));

  if (!unlocked) {
    return (
      <div className="mx-auto max-w-2xl">
        <Link
          to="/levels"
          className="mb-5 inline-flex items-center gap-1.5 py-1 text-sm text-ink-500 transition hover:text-brand-600"
        >
          <ArrowLeft size={15} />
          Seviyeler
        </Link>
        <EmptyState
          headingLevel={1}
          icon={<Lock size={22} />}
          title={`${meta.code} seviyesi kilitli`}
          description="Önceki seviyeyi %60 tamamladığında bu seviye otomatik olarak açılır."
          action={(
            <Button icon={<Lock size={14} />} onClick={() => progress.unlockLevel(level)}>
              Yine de aç
            </Button>
          )}
        />
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/levels"
        className="mb-5 inline-flex items-center gap-1.5 py-1 text-sm text-ink-500 transition hover:text-brand-600 dark:text-ink-400"
      >
        <ArrowLeft size={15} />
        Tüm seviyeler
      </Link>

      {/* Hero */}
      <section className={cx(
        'mb-7 overflow-hidden rounded-3xl bg-gradient-to-br p-6 text-white sm:p-8',
        meta.gradient,
      )}
      >
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="font-display text-5xl font-bold leading-none">{meta.code}</p>
            <h1 className="mt-2 font-display text-2xl font-bold">{meta.name}</h1>
            <div className="mt-1 opacity-90">
              <Translated value={meta.nameI18n} size="sm" />
            </div>
            <p className="mt-3 max-w-lg ar-text text-sm leading-relaxed opacity-90" dir="rtl">
              {lang === 'ar' ? meta.tagline.ar : meta.tagline.ku}
            </p>
          </div>

          <div className="w-full max-w-xs rounded-2xl bg-white/15 p-4 backdrop-blur">
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide opacity-80">
                İlerleme
              </span>
              <span className="font-display text-2xl font-bold tabular-nums">{pct}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-white transition-[width] duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            {nextLesson && (
              <Link
                to={`/lesson/${nextLesson.id}`}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-ink-900 transition hover:bg-white/90"
              >
                Devam et
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Can-do */}
      <Card className="mb-6 p-5">
        <div className="mb-3 flex items-center gap-2">
          <Target size={16} className="text-brand-600" />
          <h2 className="font-display text-base font-bold text-ink-900 dark:text-white">
            Bu seviyenin sonunda yapabileceklerin
          </h2>
        </div>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {meta.canDo.map((item, i) => (
            <li key={i} className="flex items-start gap-2 rounded-xl bg-ink-50 p-3 dark:bg-ink-950/60">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500" />
              <div className="min-w-0 flex-1">
                <Translated value={item} size="sm" />
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Stats */}
      <div className="mb-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile
          label="Dersler" value={`${doneLessons}/${lessons.length}`}
          icon={<Layers size={14} />} tone="brand"
        />
        <StatTile
          label="Kelimeler" value={`${learnedWords}/${words.length}`}
          icon={<BookOpen size={14} />} tone="green"
        />
        <StatTile
          label="Cümle paketleri" value={`${donePacks}/${packs.length}`}
          icon={<Waypoints size={14} />} tone="violet"
        />
        <StatTile
          label="Hedef kelime" value={meta.wordTarget}
          sub="bu seviyede beklenen" icon={<Target size={14} />} tone="amber"
        />
      </div>

      {/* Lesson groups */}
      <div className="space-y-8">
        <LessonGroup
          title="Dilbilgisi dersleri" icon={<Layers size={17} />}
          lessons={grammar} progress={progress}
        />
        <LessonGroup
          title="Telaffuz dersleri" icon={<Mic size={17} />}
          lessons={pronunciation} progress={progress}
        />
        <LessonGroup
          title="Konuşma dersleri" icon={<MessagesSquare size={17} />}
          lessons={conversation} progress={progress}
        />

        {/* Sentence packs */}
        {packs.length > 0 && (
          <section>
            <SectionHeading
              title="Cümle paketleri" icon={<Waypoints size={17} />}
              meta={`${donePacks}/${packs.length}`}
            />
            <div className="grid gap-2.5 sm:grid-cols-2">
              {packs.map((pack) => (
                <Link
                  key={pack.id}
                  to={`/sentences#${pack.id}`}
                  className="card card-hover p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-display text-[15px] font-semibold text-ink-900 dark:text-white">
                      {pack.title}
                    </p>
                    {progress.completedSentencePacks.includes(pack.id) && (
                      <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                    )}
                  </div>
                  <div className="mt-1">
                    <Translated value={pack.titleI18n} size="sm" />
                  </div>
                  <p className="mt-2 text-[11px] font-medium text-ink-400">
                    {pack.sentences.length} cümle
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Vocabulary */}
        {words.length > 0 && (
          <section>
            <SectionHeading
              title="Bu seviyenin kelimeleri" icon={<BookOpen size={17} />}
              meta={`${learnedWords}/${words.length}`}
              action={(
                <div className="flex items-center gap-3">
                  <ProgressBar
                    value={percent(learnedWords, words.length)}
                    className="w-28" size="sm" tone="green"
                  />
                  <Link to={`/vocabulary?level=${level}`} className="btn-secondary btn-sm">
                    Gezginde aç
                  </Link>
                </div>
              )}
            />
            <Card className="overflow-hidden">
              <ul className="divide-y divide-ink-100 dark:divide-ink-800">
                {words.slice(0, 40).map((word) => (
                  <VocabRow key={word.id} item={word} showCategory />
                ))}
              </ul>
              {words.length > 40 && (
                <div className="border-t border-ink-200 p-3 text-center dark:border-ink-800">
                  <Link
                    to="/vocabulary"
                    className="inline-block py-1 text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400"
                  >
                    Kalan {words.length - 40} kelimeyi Kelime Gezgini'nde gör
                  </Link>
                </div>
              )}
            </Card>
          </section>
        )}
      </div>
    </div>
  );
}

function SectionHeading({
  title, icon, meta, action,
}: {
  title: string;
  icon: React.ReactNode;
  meta?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3">
      <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink-950 dark:text-white">
        <span className="text-brand-600 dark:text-brand-400">{icon}</span>
        {title}
        {meta && <Chip tone="neutral">{meta}</Chip>}
      </h2>
      {action}
    </div>
  );
}

function LessonGroup({
  title, icon, lessons, progress,
}: {
  title: string;
  icon: React.ReactNode;
  lessons: import('@/types/content').Lesson[];
  progress: ReturnType<typeof useProgress>;
}) {
  if (lessons.length === 0) return null;
  const done = lessons.filter((l) => progress.completedLessons.includes(l.id)).length;

  return (
    <section>
      <SectionHeading title={title} icon={icon} meta={`${done}/${lessons.length}`} />
      <div className="grid gap-2.5 sm:grid-cols-2">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}
