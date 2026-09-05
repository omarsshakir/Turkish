import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, CheckCircle2, Eye, Flame, Layers, Plus, RotateCcw, Sparkles, Timer,
} from 'lucide-react';
import { LEVEL_ORDER, type LevelId, type VocabItem } from '@/types/content';
import {
  GRADE_LABELS, formatDelay, previewIntervals, type ReviewGrade,
} from '@/lib/srs';
import { cx, percent } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, EmptyState, LevelBadge, PageHeader, ProgressBar, StatTile,
} from '@/components/ui/Primitives';
import { SpeakButton, SpeakPair } from '@/components/audio/SpeakButton';
import { Translated } from '@/components/learn/Translation';
import { Ornament } from '@/components/ui/Ornament';
import { SenseList } from '@/components/learn/Senses';

/**
 * Review Today.
 *
 * Shows ONLY the cards the SM-2 scheduler says are due right now. The student
 * sees the Turkish, tries to recall the meaning, reveals it, then self-grades
 * with Again / Hard / Good / Easy — and each button shows exactly when the
 * card would come back, so the grading choice is informed rather than blind.
 */

const GRADE_STYLE: Record<ReviewGrade, string> = {
  again: 'bg-accent-700 hover:bg-accent-600 text-white',
  hard: 'bg-brass-600 hover:bg-brass-500 text-white',
  good: 'bg-brand-700 hover:bg-brand-600 text-white',
  easy: 'bg-emerald-700 hover:bg-emerald-600 text-white',
};

const STATE_TONE = {
  new: 'cobalt', learning: 'brass', relearning: 'accent', review: 'green',
} as const;

const STATE_LABEL = {
  new: 'Yeni', learning: 'Öğreniliyor', relearning: 'Tekrar öğreniliyor', review: 'Tekrar',
} as const;

export default function Review() {
  const { lang } = useSettings();
  const { vocabulary, vocabFor } = useContent();
  const progress = useProgress();

  const [sessionDone, setSessionDone] = useState(0);
  const [sessionGrades, setSessionGrades] = useState<Record<ReviewGrade, number>>({
    again: 0, hard: 0, good: 0, easy: 0,
  });
  const [revealed, setRevealed] = useState(false);
  const [addLevel, setAddLevel] = useState<LevelId>('a1');

  const vocabById = useMemo(
    () => Object.fromEntries(vocabulary.map((v) => [v.id, v])) as Record<string, VocabItem>,
    [vocabulary],
  );

  /**
   * Due cards whose vocabulary still exists. A card can outlive its word if the
   * teacher deletes a custom item, so this filter is not optional.
   */
  const queue = useMemo(
    () => progress.getDueCards().filter((c) => vocabById[c.id]),
    [progress, vocabById],
  );

  const current = queue[0];
  const currentWord = current ? vocabById[current.id] : undefined;

  useEffect(() => setRevealed(false), [current?.id]);

  const grade = useCallback((g: ReviewGrade) => {
    if (!current) return;
    progress.gradeCard(current.id, g);
    progress.recordAttempt(g !== 'again');
    setSessionDone((n) => n + 1);
    setSessionGrades((prev) => ({ ...prev, [g]: prev[g] + 1 }));
    setRevealed(false);
  }, [current, progress]);

  /* Keyboard: space reveals, 1-4 grade. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!current) return;
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;

      if (e.code === 'Space' && !revealed) {
        e.preventDefault();
        setRevealed(true);
        return;
      }
      if (!revealed) return;
      const map: Record<string, ReviewGrade> = {
        Digit1: 'again', Digit2: 'hard', Digit3: 'good', Digit4: 'easy',
      };
      const g = map[e.code];
      if (g) {
        e.preventDefault();
        grade(g);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, revealed, grade]);

  const previews = useMemo(
    () => (current ? previewIntervals(current) : null),
    [current],
  );

  const addCards = (level: LevelId, count: number) => {
    const pool = vocabFor(level).filter((w) => !progress.reviews[w.id]);
    progress.ensureCards(pool.slice(0, count).map((w) => w.id));
  };

  const stats = progress.srs;

  /* ------------------------------------------------------------------ */
  /* Empty deck — nothing scheduled at all yet                           */
  /* ------------------------------------------------------------------ */

  if (stats.total === 0) {
    return (
      <div className="mx-auto max-w-2xl">
        <PageHeader
          eyebrow="Tekrar"
          icon={<Brain size={14} />}
          title="Aralıklı Tekrar"
          description={(
            <span className="ar-text block" dir="rtl">
              {lang === 'ar'
                ? 'نظام تكرار متباعد بخوارزمية SM-2: كل كلمة تعود في اللحظة التي تكاد تنساها فيها. ابدأ بإضافة كلمات إلى مجموعة المراجعة.'
                : 'سیستەمی دووبارەکردنەوەی دوورەپەڕ بە ئەلگۆریتمی SM-2: هەر وشەیەک لەو ساتەدا دەگەڕێتەوە کە خەریکە لەبیری بکەیت. دەست بکە بە زیادکردنی وشە.'}
            </span>
          )}
        />
        <Card className="relative isolate overflow-hidden p-6" edge>
          <span className="absolute inset-0 text-brand-700 opacity-[.04] dark:text-brass-300 dark:opacity-[.06]" aria-hidden>
            <Ornament motif="lattice" scale={80} />
          </span>
          <h2 className="relative t-h3 text-primary">
            Tekrar destesi oluştur
          </h2>
          <p className="relative mt-1.5 t-secondary">
            Bir seviye seç ve ilk kelimeleri desteye ekle. Her kelime, unutmaya
            başladığın anda karşına çıkar.
          </p>

          <div className="relative mt-5 flex flex-wrap gap-1.5">
            {LEVEL_ORDER.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setAddLevel(id)}
                className={cx(
                  'rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition',
                  addLevel === id
                    ? 'bg-brand-700 text-white'
                    : 'text-secondary surface-sunken ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
                )}
              >
                {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
                <span className="ml-1.5 opacity-60">({vocabFor(id).length})</span>
              </button>
            ))}
          </div>

          <div className="relative mt-4 flex flex-wrap gap-2">
            {[10, 20, 50].map((n) => (
              <Button key={n} icon={<Plus size={15} />} onClick={() => addCards(addLevel, n)}>
                {n} kelime ekle
              </Button>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /* Deck exists but nothing is due                                      */
  /* ------------------------------------------------------------------ */

  if (!current || !currentWord) {
    const nextDue = Object.values(progress.reviews)
      .map((c) => new Date(c.due).getTime())
      .filter((t) => t > Date.now())
      .sort((a, b) => a - b)[0];

    return (
      <div className="mx-auto max-w-2xl">
        <PageHeader
          eyebrow="Tekrar"
          icon={<Brain size={14} />}
          title="Bugünün Tekrarı"
        />

        {sessionDone > 0 && <SessionSummary done={sessionDone} grades={sessionGrades} />}

        <EmptyState
          icon={<CheckCircle2 size={22} />}
          title="Şu an tekrar edilecek kart yok"
          description={nextDue
            ? `Sıradaki kart ${formatDelay(nextDue - Date.now())} sonra hazır olacak.`
            : 'Destendeki tüm kartlar güncel.'}
          action={(
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant="secondary"
                icon={<Plus size={15} />}
                onClick={() => addCards(addLevel, 20)}
              >
                {addLevel === 'c1plus' ? 'C1+' : addLevel.toUpperCase()} seviyesinden 20 kelime ekle
              </Button>
              <Link to="/practice/vocabulary" className="btn-secondary">
                Serbest alıştırma yap
              </Link>
            </div>
          )}
        />

        <DeckStats stats={stats} reviewsToday={progress.reviewsToday} />
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /* The review card                                                     */
  /* ------------------------------------------------------------------ */

  const remaining = queue.length;
  const sessionTotal = remaining + sessionDone;

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        eyebrow="Tekrar"
        icon={<Brain size={14} />}
        title="Bugünün Tekrarı"
        action={(
          <div className="flex items-center gap-2">
            <Chip tone="brand">{remaining} kaldı</Chip>
            {progress.reviewsToday > 0 && (
              <Chip tone="green" icon={<Flame size={12} />}>
                bugün {progress.reviewsToday}
              </Chip>
            )}
          </div>
        )}
      />

      <ProgressBar
        value={percent(sessionDone, sessionTotal)}
        className="mb-5"
        size="sm"
      />

      <Card className="overflow-hidden">
        {/* Card status */}
        <div className="flex items-center justify-between gap-3 border-b px-5 py-3 hairline">
          <div className="flex items-center gap-2">
            <Chip tone={STATE_TONE[current.state]}>{STATE_LABEL[current.state]}</Chip>
            <LevelBadge level={currentWord.level} />
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-muted">
            {current.reviews > 0 && <span>{current.reviews}. tekrar</span>}
            {current.state === 'review' && <span>KF {current.ease.toFixed(2)}</span>}
          </div>
        </div>

        {/* Prompt: Turkish only until revealed. §15 - one item, prominent,
            nothing else competing for attention. */}
        <div className="relative isolate overflow-hidden px-6 py-12 text-center">
          <span className="absolute inset-0 text-brand-700 opacity-[.04] dark:text-brass-300 dark:opacity-[.06]" aria-hidden>
            <Ornament motif="lattice" scale={76} />
          </span>
          <p className="relative tr-word text-[2.6rem] leading-tight sm:text-5xl" lang="tr">
            {currentWord.tr}
          </p>
          <div className="relative mt-5 flex justify-center">
            <SpeakPair text={currentWord.tr} />
          </div>

          {!revealed ? (
            <div className="relative mt-9">
              <Button size="lg" icon={<Eye size={17} />} onClick={() => setRevealed(true)}>
                Cevabı göster
              </Button>
              <p className="mt-3.5 t-caption">
                veya <kbd className="rounded border px-1.5 py-0.5 font-mono text-[10px] hairline">boşluk</kbd> tuşuna bas
              </p>
            </div>
          ) : (
            <div className="relative mt-6 animate-fade-up">
              <p className="pron text-sm">{currentWord.pron}</p>
              <div className="mx-auto mt-4 max-w-md">
                <Translated value={{ ar: currentWord.ar, ku: currentWord.ku }} forceBoth />
              </div>

              {/* A word with several meanings is reviewed as ONE card, so the
                  reveal has to show all of them — otherwise the student grades
                  themselves on a meaning they were not asked about. */}
              {currentWord.senses && currentWord.senses.length > 0 && (
                <div className="mx-auto mt-5 max-w-md rounded-xl border p-4 text-left hairline">
                  <SenseList item={currentWord} compact />
                </div>
              )}

              {currentWord.example && (
                <div className="mx-auto mt-6 max-w-md rounded-xl border p-4 text-left hairline surface-sunken">
                  <div className="flex items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="tr-word text-sm" lang="tr">{currentWord.example.tr}</p>
                      <p className="pron mt-0.5">{currentWord.example.pron}</p>
                      <div className="mt-2">
                        <Translated
                          value={{ ar: currentWord.example.ar, ku: currentWord.example.ku }}
                          size="sm"
                        />
                      </div>
                    </div>
                    <SpeakButton text={currentWord.example.tr} size="sm" variant="ghost" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Grading */}
        {revealed && previews && (
          <div className="animate-fade-up border-t p-4 hairline">
            <p className="mb-3 text-center text-xs font-medium text-secondary">
              Bu kelimeyi ne kadar iyi hatırladın?
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {(['again', 'hard', 'good', 'easy'] as ReviewGrade[]).map((g, i) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => grade(g)}
                  className={cx(
                    'flex flex-col items-center gap-0.5 rounded-xl px-3 py-3 text-sm font-bold transition active:scale-[.97]',
                    GRADE_STYLE[g],
                  )}
                >
                  <span>{GRADE_LABELS[g].tr}</span>
                  <span className="font-mono text-[11px] font-medium opacity-80">
                    {previews[g]}
                  </span>
                  <span className="font-arabic text-[10px] font-normal opacity-70" dir="rtl">
                    {lang === 'ar' ? GRADE_LABELS[g].ar : GRADE_LABELS[g].ku}
                  </span>
                  <kbd className="mt-0.5 rounded bg-black/15 px-1 font-mono text-[9px]">
                    {i + 1}
                  </kbd>
                </button>
              ))}
            </div>
          </div>
        )}
      </Card>

      {sessionDone > 0 && (
        <div className="mt-5">
          <SessionSummary done={sessionDone} grades={sessionGrades} compact />
        </div>
      )}

      <DeckStats stats={stats} reviewsToday={progress.reviewsToday} />
    </div>
  );
}

/* ------------------------------------------------------------------ */

function SessionSummary({
  done, grades, compact = false,
}: {
  done: number;
  grades: Record<ReviewGrade, number>;
  compact?: boolean;
}) {
  const correct = grades.hard + grades.good + grades.easy;
  return (
    <Card className={cx('p-4', !compact && 'mb-5')}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
          <Sparkles size={15} className="text-accent-500" />
          Bu oturumda {done} kart
        </p>
        <div className="flex flex-wrap gap-1.5">
          {(['again', 'hard', 'good', 'easy'] as ReviewGrade[]).map((g) => (
            grades[g] > 0 ? (
              <Chip
                key={g}
                tone={g === 'again' ? 'rose' : g === 'hard' ? 'amber' : g === 'good' ? 'brand' : 'green'}
              >
                {GRADE_LABELS[g].tr} {grades[g]}
              </Chip>
            ) : null
          ))}
        </div>
      </div>
      {done > 0 && (
        <ProgressBar value={percent(correct, done)} className="mt-3" size="sm" tone="green" />
      )}
    </Card>
  );
}

function DeckStats({
  stats, reviewsToday,
}: {
  stats: ReturnType<typeof useProgress>['srs'];
  reviewsToday: number;
}) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
        <Layers size={15} className="text-ink-400" />
        Deste durumu
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Toplam kart" value={stats.total} icon={<Brain size={14} />} />
        <StatTile
          label="Yeni" value={stats.new}
          sub="henüz çalışılmadı" icon={<Plus size={14} />} tone="brand"
        />
        <StatTile
          label="Öğreniliyor" value={stats.learning + stats.relearning}
          sub="kısa aralıklarla" icon={<Timer size={14} />} tone="amber"
        />
        <StatTile
          label="Olgun" value={stats.mature}
          sub="21+ gün aralık" icon={<CheckCircle2 size={14} />} tone="green"
        />
      </div>
      <p className="mt-3 text-xs text-ink-400">
        Bugün {reviewsToday} tekrar yapıldı · Ortalama kolaylık faktörü {stats.averageEase.toFixed(2)}
        {' '}· Bugün toplam {stats.dueToday} kart vadesi doluyor
      </p>
    </section>
  );
}

export { RotateCcw };
