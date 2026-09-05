import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, Dumbbell,
  GraduationCap, Target,
} from 'lucide-react';
import { cx } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, LevelBadge, PageHeader, ProgressBar,
} from '@/components/ui/Primitives';
import { LessonBlockView } from '@/components/learn/LessonBlocks';
import { ExerciseRunner } from '@/components/exercises/ExerciseRunner';
import { Translated } from '@/components/learn/Translation';

/**
 * The lesson interface.
 *
 * Progressive disclosure: the student walks through the teaching blocks two at
 * a time rather than being handed a wall of text, then unlocks Practice, then
 * marks the lesson complete.
 */

const BLOCKS_PER_STEP = 2;

export default function Lesson() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { lessonById, lessonsFor } = useContent();
  const { lang } = useSettings();
  const {
    completeLesson, isLessonComplete, setLastLesson, quizResults,
  } = useProgress();

  const lesson = lessonId ? lessonById(lessonId) : undefined;
  const [step, setStep] = useState(0);
  const [showPractice, setShowPractice] = useState(false);

  const siblings = useMemo(
    () => (lesson ? lessonsFor(lesson.level) : []),
    [lesson, lessonsFor],
  );
  const position = siblings.findIndex((l) => l.id === lesson?.id);
  const prev = position > 0 ? siblings[position - 1] : undefined;
  const next = position >= 0 && position < siblings.length - 1 ? siblings[position + 1] : undefined;

  if (!lesson) {
    return (
      <Card className="p-8 text-center">
        <p className="font-display text-lg font-semibold">Ders bulunamadı.</p>
        <Button className="mt-4" onClick={() => navigate('/grammar')}>Dilbilgisine dön</Button>
      </Card>
    );
  }

  const totalSteps = Math.ceil(lesson.blocks.length / BLOCKS_PER_STEP);
  const visibleBlocks = lesson.blocks.slice(0, (step + 1) * BLOCKS_PER_STEP);
  const allRevealed = step >= totalSteps - 1;
  const completed = isLessonComplete(lesson.id);
  const bestQuiz = quizResults.find((q) => q.lessonId === lesson.id);

  const finish = () => {
    completeLesson(lesson.id);
    setLastLesson(lesson.id);
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Breadcrumb */}
      <div className="mb-5 flex items-center gap-2 text-sm">
        <Link
          to={`/levels/${lesson.level}`}
          className="py-1 inline-flex items-center gap-1.5 text-ink-500 transition hover:text-brand-600 dark:text-ink-400"
        >
          <ArrowLeft size={15} />
          {lesson.level === 'c1plus' ? 'C1+' : lesson.level.toUpperCase()} seviyesi
        </Link>
      </div>

      <PageHeader
        eyebrow={(
          <span className="flex items-center gap-2">
            <LevelBadge level={lesson.level} />
            <span>{KIND_LABEL[lesson.kind] ?? lesson.kind}</span>
          </span>
        )}
        icon={<GraduationCap size={14} />}
        title={lesson.title}
        description={<Translated value={lesson.titleI18n} size="md" />}
        action={completed
          ? <Chip tone="green" icon={<CheckCircle2 size={13} />}>Tamamlandı</Chip>
          : <Chip tone="neutral" icon={<Clock size={13} />}>{lesson.minutes} dk</Chip>}
      />

      {/* Objective */}
      <Card className="mb-6 border-brand-200 bg-brand-50/50 p-5 dark:border-brand-900 dark:bg-brand-950/25">
        <div className="mb-2 flex items-center gap-2">
          <Target size={16} className="text-brand-600 dark:text-brand-400" />
          <span className="font-display text-sm font-bold text-brand-800 dark:text-brand-300">
            Bu dersin hedefi
          </span>
        </div>
        <Translated value={lesson.objective} />
      </Card>

      {/* Reading progress */}
      {totalSteps > 1 && (
        <div className="mb-5">
          <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-ink-500">
            <span>Ders içeriği</span>
            <span className="font-mono tabular-nums">
              {Math.min((step + 1) * BLOCKS_PER_STEP, lesson.blocks.length)} / {lesson.blocks.length}
            </span>
          </div>
          <ProgressBar value={((step + 1) / totalSteps) * 100} size="sm" />
        </div>
      )}

      {/* Blocks */}
      <div className="space-y-4">
        {visibleBlocks.map((block, i) => (
          <div key={i} className={i >= step * BLOCKS_PER_STEP ? 'animate-fade-up' : undefined}>
            <LessonBlockView block={block} />
          </div>
        ))}
      </div>

      {/* Reveal more */}
      {!allRevealed && (
        <Button
          className="mt-5 w-full"
          size="lg"
          variant="secondary"
          icon={<ArrowRight size={16} />}
          onClick={() => setStep((s) => s + 1)}
        >
          Devam et
          <span className="ml-1 font-arabic text-sm font-normal opacity-70" dir="rtl">
            {lang === 'ar' ? 'تابع' : 'بەردەوام بە'}
          </span>
        </Button>
      )}

      {/* Practice */}
      {allRevealed && lesson.exercises.length > 0 && (
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
              <Dumbbell size={19} className="text-accent-500" />
              Alıştırma
            </h2>
            {bestQuiz && (
              <Chip tone="green">
                En iyi: {bestQuiz.correct}/{bestQuiz.total}
              </Chip>
            )}
          </div>

          {showPractice ? (
            <ExerciseRunner
              exercises={lesson.exercises}
              lessonId={lesson.id}
              title={lesson.title}
              onFinish={finish}
            />
          ) : (
            <Card className="p-6 text-center">
              <p className="font-display text-base font-semibold text-ink-900 dark:text-white">
                {lesson.exercises.length} alıştırma hazır
              </p>
              <p className="mt-1.5 ar-text text-sm text-ink-500 dark:text-ink-400" dir="rtl">
                {lang === 'ar'
                  ? 'اختبر ما تعلّمته. ستحصل على تصحيح فوري وشرح بعد كل إجابة.'
                  : 'ئەوەی فێری بوویت تاقی بکەوە. دوای هەر وەڵامێک ڕاستکردنەوە و ڕوونکردنەوەی خێرا وەردەگریت.'}
              </p>
              <Button className="mt-4" size="lg" onClick={() => setShowPractice(true)}>
                Alıştırmaya başla
              </Button>
            </Card>
          )}
        </section>
      )}

      {/* Complete + navigation */}
      {allRevealed && (
        <div className="mt-8 space-y-4">
          {!completed && (
            <Button
              className="w-full"
              size="lg"
              variant="accent"
              icon={<CheckCircle2 size={18} />}
              onClick={finish}
            >
              Dersi tamamla
            </Button>
          )}

          <div className="flex items-center justify-between gap-3">
            {prev ? (
              <Link
                to={`/lesson/${prev.id}`}
                className="group flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-ink-200 p-3 transition hover:border-brand-300 dark:border-ink-700"
              >
                <ArrowLeft size={16} className="shrink-0 text-ink-400" />
                <span className="min-w-0 text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wide text-ink-400">
                    Önceki
                  </span>
                  <span className="block truncate text-sm font-semibold text-ink-800 dark:text-ink-100">
                    {prev.title}
                  </span>
                </span>
              </Link>
            ) : <div className="flex-1" />}

            {next ? (
              <Link
                to={`/lesson/${next.id}`}
                className="group flex min-w-0 flex-1 items-center justify-end gap-2.5 rounded-xl border border-ink-200 p-3 transition hover:border-brand-300 dark:border-ink-700"
              >
                <span className="min-w-0 text-right">
                  <span className="block text-[10px] font-bold uppercase tracking-wide text-ink-400">
                    Sonraki
                  </span>
                  <span className="block truncate text-sm font-semibold text-ink-800 dark:text-ink-100">
                    {next.title}
                  </span>
                </span>
                <ArrowRight size={16} className="shrink-0 text-ink-400" />
              </Link>
            ) : (
              <Link
                to={`/levels/${lesson.level}`}
                className="flex flex-1 items-center justify-end gap-2 rounded-xl border border-ink-200 p-3 text-sm font-semibold text-brand-600 transition hover:border-brand-300 dark:border-ink-700"
              >
                <BookOpen size={15} />
                Seviyeye dön
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const KIND_LABEL: Record<string, string> = {
  grammar: 'Dilbilgisi',
  pronunciation: 'Telaffuz',
  conversation: 'Konuşma',
  sentences: 'Cümleler',
  alphabet: 'Alfabe',
  numbers: 'Sayılar',
  vocabulary: 'Kelimeler',
};

export { KIND_LABEL };

export function LessonCard({
  lesson, showLevel = false,
}: {
  lesson: import('@/types/content').Lesson;
  showLevel?: boolean;
}) {
  const { isLessonComplete, quizResults } = useProgress();
  const done = isLessonComplete(lesson.id);
  const quiz = quizResults.find((q) => q.lessonId === lesson.id);

  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className={cx(
        'card card-hover flex items-start gap-3.5 p-4',
        done && 'border-emerald-300 dark:border-emerald-800',
      )}
    >
      <span className={cx(
        'grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display text-sm font-bold',
        done
          ? 'bg-emerald-500 text-white'
          : 'bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400',
      )}
      >
        {done ? <CheckCircle2 size={18} /> : lesson.order}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-display text-[15px] font-semibold text-ink-900 dark:text-white">
            {lesson.title}
          </p>
          {showLevel && <LevelBadge level={lesson.level} className="!px-1.5 !py-0 !text-[10px]" />}
          {lesson.published === false && <Chip tone="amber">Taslak</Chip>}
        </div>
        <div className="mt-1">
          <Translated value={lesson.titleI18n} size="sm" />
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-medium text-ink-400">
          <span className="inline-flex items-center gap-1">
            <Clock size={11} />
            {lesson.minutes} dk
          </span>
          <span>·</span>
          <span>{KIND_LABEL[lesson.kind] ?? lesson.kind}</span>
          {lesson.exercises.length > 0 && (
            <>
              <span>·</span>
              <span>{lesson.exercises.length} alıştırma</span>
            </>
          )}
          {quiz && (
            <>
              <span>·</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                {quiz.correct}/{quiz.total}
              </span>
            </>
          )}
        </div>
      </div>

      <ArrowRight size={16} className="mt-2 shrink-0 text-ink-300" />
    </Link>
  );
}
