import { useMemo, useState } from 'react';
import { Layers, Lock } from 'lucide-react';
import { LEVEL_ORDER, type LevelId } from '@/types/content';
import { cx, percent } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Card, Chip, EmptyState, PageHeader, ProgressBar,
} from '@/components/ui/Primitives';
import { Translated } from '@/components/learn/Translation';
import { LessonCard } from './Lesson';

/**
 * The grammar curriculum, laid out level by level so a student can see the
 * whole road from "personal pronouns" to "academic Turkish" at a glance.
 */
export default function Grammar() {
  const { levels, lessonsFor } = useContent();
  const { lang, teacherMode } = useSettings();
  const progress = useProgress();
  const [openLevel, setOpenLevel] = useState<LevelId | null>('a1');

  const stats = useMemo(() => {
    const all = LEVEL_ORDER.flatMap((id) => lessonsFor(id).filter((l) => l.kind === 'grammar'));
    const done = all.filter((l) => progress.completedLessons.includes(l.id));
    return { total: all.length, done: done.length };
  }, [lessonsFor, progress.completedLessons]);

  return (
    <div>
      <PageHeader
        eyebrow="Dilbilgisi"
        icon={<Layers size={14} />}
        title="Türkçe Dilbilgisi Müfredatı"
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? 'منهج متدرّج من تناغم الحركات في A1 إلى التركية الأكاديمية في C1. كل درس فيه شرح بالعربية والكردية وأمثلة مسموعة وتمارين.'
              : 'خشتەیەکی پلە بە پلە لە هارمۆنیای بزوێنەکانەوە لە A1 تا تورکیی ئەکادیمی لە C1. هەر وانەیەک ڕوونکردنەوە و نموونەی دەنگدار و ڕاهێنانی تێدایە.'}
          </span>
        )}
        action={(
          <div className="text-right">
            <p className="font-display text-2xl font-bold tabular-nums text-ink-900 dark:text-white">
              {stats.done}<span className="text-ink-400">/{stats.total}</span>
            </p>
            <p className="text-xs text-ink-500">tamamlanan ders</p>
          </div>
        )}
      />

      <div className="space-y-4">
        {levels.map((level) => {
          const lessons = lessonsFor(level.id).filter((l) => l.kind === 'grammar');
          if (lessons.length === 0) return null;

          const unlocked = progress.isLevelUnlocked(level.id, teacherMode);
          const done = lessons.filter((l) => progress.completedLessons.includes(l.id)).length;
          const isOpen = openLevel === level.id;

          return (
            <Card key={level.id} className="overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenLevel(isOpen ? null : level.id)}
                className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-ink-50 dark:hover:bg-ink-950/50"
              >
                <span className={cx(
                  'grid h-12 w-16 shrink-0 place-items-center rounded-xl bg-gradient-to-br font-display text-base font-bold text-white',
                  level.gradient,
                  !unlocked && 'grayscale',
                )}
                >
                  {level.code}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-display text-lg font-bold text-ink-900 dark:text-white">
                      {level.name}
                    </p>
                    {!unlocked && <Lock size={14} className="text-ink-400" />}
                  </div>
                  <div className="mt-0.5">
                    <Translated value={level.tagline} size="sm" />
                  </div>
                  <div className="mt-2.5 flex items-center gap-3">
                    <ProgressBar
                      value={percent(done, lessons.length)}
                      size="sm"
                      className="max-w-xs"
                      tone={done === lessons.length ? 'green' : 'brand'}
                    />
                    <span className="shrink-0 font-mono text-xs tabular-nums text-ink-400">
                      {done}/{lessons.length}
                    </span>
                  </div>
                </div>

                <Chip tone="neutral" className="shrink-0">
                  {isOpen ? 'Gizle' : 'Göster'}
                </Chip>
              </button>

              {isOpen && (
                <div className="border-t border-ink-200 bg-ink-50/50 p-4 dark:border-ink-800 dark:bg-ink-950/40">
                  {!unlocked && !teacherMode ? (
                    <EmptyState
                      icon={<Lock size={20} />}
                      title="Bu seviye henüz kilitli"
                      description="Önceki seviyeyi tamamladığında otomatik olarak açılır. Öğretmen modunda kilitler yok sayılır."
                    />
                  ) : (
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {lessons.map((lesson) => (
                        <LessonCard key={lesson.id} lesson={lesson} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
