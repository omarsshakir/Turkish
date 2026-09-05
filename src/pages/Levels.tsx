import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, Check, CheckCircle2, Clock, Layers, Lock, Star, Unlock, Waypoints,
} from 'lucide-react';
import type { LevelId, LevelMeta } from '@/types/content';
import { cx, percent } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress, UNLOCK_THRESHOLD } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import { Button, Card, Chip, ProgressBar } from '@/components/ui/Primitives';
import { Hero } from '@/components/ui/Ornament';
import { Translated } from '@/components/learn/Translation';

/**
 * The Turkish learning journey — §7.
 *
 * Six levels drawn as one path rather than six cards in a list. A brass thread
 * runs from A1 to C1+ and fills as the student advances; each level is a
 * station on it. C1+ carries a star instead of a code, because the last stop
 * on a journey should look like somewhere you arrive rather than one more
 * item in a stack.
 *
 * Locking, the 60% threshold and the teacher override are unchanged.
 */
export default function Levels() {
  const { levels, levelProgress, levelTotals } = useContent();
  const { lang, teacherMode } = useSettings();
  const progress = useProgress();

  const overall = percent(
    levels.reduce((sum, l) => sum + levelProgress(l.id), 0),
    levels.length * 100,
  );

  const currentId = levels.find(
    (l) => progress.isLevelUnlocked(l.id, teacherMode) && levelProgress(l.id) < 100,
  )?.id ?? levels[levels.length - 1].id;

  return (
    <div className="space-y-8">
      {/* ---- the journey at a glance ---- */}
      <Hero>
        <div className="p-6 sm:p-9">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="min-w-0">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[.18em] text-brass-300/80">
                Seviyeler
              </p>
              <h1 className="mt-2.5 t-h1 text-white">Türkçe yolculuğun</h1>
              <p
                className={cx('mt-3 w-fit max-w-xl text-sm leading-relaxed text-ink-300', lang === 'ar' ? 'ar-text' : 'ku-text')}
                dir="rtl"
                lang={lang === 'ar' ? 'ar' : 'ckb'}
              >
                {lang === 'ar'
                  ? 'ستة مستويات متتابعة. يُفتح كل مستوى تلقائياً حين تُنجز ٦٠٪ من سابقه، ويمكن للمعلّم فتح أي مستوى يدوياً.'
                  : 'شەش ئاستی یەک لەدوای یەک. هەر ئاستێک بەخۆکاری دەکرێتەوە کاتێک ٦٠٪ی پێشووی تەواو دەکەیت، مامۆستاش دەتوانێت بە دەست بیکاتەوە.'}
              </p>
            </div>

            <div className="text-right">
              <p className="font-display text-4xl font-semibold tabular-nums text-white">
                {overall}%
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[.14em] text-brass-300/70">
                toplam ilerleme
              </p>
            </div>
          </div>

          <JourneyStrip
            levels={levels}
            currentId={currentId}
            progressOf={levelProgress}
            unlocked={(id) => progress.isLevelUnlocked(id, teacherMode)}
          />
        </div>
      </Hero>

      {/* ---- the path ---- */}
      <div className="relative sm:pl-16">
        {/* The thread. It runs the height of the list and sits behind every
            station node. Hidden on mobile, where a vertical rail would eat
            most of a narrow screen. */}
        <span
          className="absolute bottom-10 left-[23px] top-10 hidden w-px bg-ink-200 dark:bg-ink-800 sm:block"
          aria-hidden
        />

        <div className="space-y-4">
          {levels.map((level, i) => {
            const unlocked = progress.isLevelUnlocked(level.id, teacherMode);
            const pct = levelProgress(level.id);
            const totals = levelTotals(level.id);
            const prevPct = i > 0 ? levelProgress(levels[i - 1].id) : 100;
            const canAutoUnlock = prevPct >= UNLOCK_THRESHOLD;
            const isCurrent = level.id === currentId;
            const isLast = i === levels.length - 1;
            const done = pct === 100;

            return (
              <div key={level.id} className="relative">
                {/* Station node on the thread. */}
                <span
                  className={cx(
                    'absolute -left-16 top-7 hidden h-12 w-12 place-items-center rounded-full sm:grid',
                    'border-2 transition',
                    done
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : isCurrent
                        ? 'border-brass-400 bg-surface text-brass-600 shadow-card'
                        : unlocked
                          ? 'border-ink-300 bg-surface text-muted dark:border-ink-700'
                          : 'border-ink-200 bg-surface text-muted dark:border-ink-800',
                  )}
                  aria-hidden
                >
                  {done
                    ? <Check size={18} />
                    : isLast
                      ? <Star size={17} className={isCurrent ? undefined : 'opacity-70'} />
                      : unlocked
                        ? <span className="font-mono text-[11px] font-bold">{level.code}</span>
                        : <Lock size={15} />}
                </span>

                <Card
                  className={cx(
                    'overflow-hidden',
                    !unlocked && 'opacity-90',
                    isCurrent && 'ring-2 ring-brass-400',
                  )}
                >
                  <div
                    className={cx('h-1 bg-gradient-to-r', level.gradient, !unlocked && 'grayscale')}
                  />

                  <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start">
                    <span
                      className={cx(
                        'grid h-16 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br',
                        'font-mono text-xl font-bold text-white ring-1 ring-inset ring-white/20',
                        level.gradient,
                        !unlocked && 'grayscale',
                      )}
                    >
                      {level.code}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="t-h2 text-primary">{level.name}</h2>
                        <Translated value={level.nameI18n} size="sm" className="!inline" />
                        {isCurrent && !done && (
                          <Chip tone="brass">Şu anki seviyen</Chip>
                        )}
                        {done && <Chip tone="green" icon={<CheckCircle2 size={12} />}>Tamamlandı</Chip>}
                        {!unlocked && <Chip tone="neutral" icon={<Lock size={12} />}>Kilitli</Chip>}
                      </div>

                      <div className="mt-2">
                        <Translated value={level.tagline} size="sm" />
                      </div>

                      {/* Can-do statements */}
                      <ul className="mt-4 space-y-2">
                        {level.canDo.slice(0, unlocked ? 4 : 2).map((item, ci) => (
                          <li key={ci} className="flex items-start gap-2.5">
                            <CheckCircle2
                              size={14}
                              className="mt-1 shrink-0 text-brand-600 dark:text-brand-400"
                              aria-hidden
                            />
                            <div className="min-w-0 flex-1">
                              <Translated value={item} size="sm" />
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <MetaChip icon={<Layers size={12} />} label={`${totals.lessons} ders`} />
                        <MetaChip icon={<BookOpen size={12} />} label={`${totals.words} kelime`} />
                        <MetaChip icon={<Waypoints size={12} />} label={`${totals.packs} cümle paketi`} />
                        <MetaChip icon={<Clock size={12} />} label={`~${level.hours} saat`} />
                      </div>

                      <div className="mt-5">
                        {unlocked ? (
                          <div className="flex flex-wrap items-center gap-3">
                            <ProgressBar
                              value={pct}
                              className="min-w-[10rem] flex-1"
                              showLabel
                              tone={done ? 'green' : isLast ? 'brass' : 'brand'}
                            />
                            <Link to={`/levels/${level.id}`} className="btn-primary btn-sm shrink-0">
                              {pct === 0 ? 'Başla' : 'Devam et'}
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        ) : (
                          <div className="flex flex-wrap items-center gap-3 rounded-xl p-3.5 surface-sunken">
                            <p className="min-w-0 flex-1 t-caption">
                              {canAutoUnlock
                                ? 'Önceki seviye tamam — burayı açabilirsin.'
                                : `${levels[i - 1].code} seviyesini %${UNLOCK_THRESHOLD} tamamla (şu an %${prevPct}).`}
                            </p>
                            <Button
                              size="sm"
                              variant={canAutoUnlock ? 'primary' : 'secondary'}
                              icon={<Unlock size={13} />}
                              disabled={!canAutoUnlock && !teacherMode}
                              onClick={() => progress.unlockLevel(level.id)}
                            >
                              {teacherMode && !canAutoUnlock ? 'Öğretmen olarak aç' : 'Seviyeyi aç'}
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * The compact A1 → C1+ progression. Six stations joined by a thread that
 * fills with brass as levels complete, so a student can read their position
 * in the whole curriculum at a glance.
 */
function JourneyStrip({
  levels, currentId, progressOf, unlocked,
}: {
  levels: LevelMeta[];
  currentId: LevelId;
  progressOf: (id: LevelId) => number;
  unlocked: (id: LevelId) => boolean;
}) {
  return (
    <ol className="mt-8 flex items-start gap-1 overflow-x-auto pb-1 no-scrollbar" aria-label="Seviye ilerlemesi">
      {levels.map((level, i) => {
        const pct = progressOf(level.id);
        const open = unlocked(level.id);
        const isCurrent = level.id === currentId;
        const isLast = i === levels.length - 1;

        return (
          <li key={level.id} className="flex min-w-0 flex-1 items-start gap-1">
            <div className="flex min-w-[3.5rem] flex-col items-center gap-2">
              <span
                className={cx(
                  'grid h-10 w-10 place-items-center rounded-full border-2 font-mono text-[10px] font-bold transition',
                  pct === 100
                    ? 'border-emerald-400 bg-emerald-500 text-white'
                    : isCurrent
                      ? 'border-brass-400 bg-brass-400 text-ink-950'
                      : open
                        ? 'border-white/35 text-ink-200'
                        : 'border-white/15 text-ink-500',
                )}
              >
                {pct === 100
                  ? <Check size={15} />
                  : isLast
                    ? <Star size={15} />
                    : open ? level.code : <Lock size={13} />}
              </span>

              <span
                className={cx(
                  'text-center font-mono text-[10px] uppercase tracking-wider',
                  isCurrent ? 'font-bold text-brass-300' : 'text-ink-400',
                )}
              >
                {level.code}
              </span>
              <span className="hidden text-center text-[10px] leading-tight text-ink-500 sm:block">
                {level.name}
              </span>
            </div>

            {/* Connector, filled by that level's own progress. */}
            {!isLast && (
              <span className="mt-5 h-px min-w-[1rem] flex-1 bg-white/15" aria-hidden>
                <span
                  className="block h-px bg-brass-400 transition-[width] duration-700"
                  style={{ width: `${pct}%` }}
                />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function MetaChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-semibold text-secondary surface-sunken ring-1 ring-inset ring-ink-200 dark:ring-ink-800">
      {icon}
      {label}
    </span>
  );
}
