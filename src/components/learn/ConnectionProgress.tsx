import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Repeat } from 'lucide-react';
import type { VocabItem } from '@/types/content';
import { cx, percent } from '@/lib/utils';
import { useProgress } from '@/state/ProgressContext';
import { ProgressBar } from '@/components/ui/Primitives';

/**
 * How far through the Arabic connections a student is.
 *
 * There is no separate SRS here — the numbers are read out of the existing
 * review deck by filtering it to the words that carry a connection. A
 * connection behaves like any other `VocabItem` all the way down, and this
 * component is a view over that, not a parallel tracker.
 */
export function useConnectionProgress(vocabulary: VocabItem[]) {
  const { reviews, learnedWords } = useProgress();

  return useMemo(() => {
    const linked = vocabulary.filter((v) => v.arabic);
    const learnedSet = new Set(learnedWords);
    const now = Date.now();

    let learned = 0;
    let due = 0;
    let mature = 0;

    for (const item of linked) {
      if (learnedSet.has(item.id)) learned += 1;
      const card = reviews[item.id];
      if (!card) continue;
      if (new Date(card.due).getTime() <= now) due += 1;
      if (card.state === 'review' && card.interval >= 21) mature += 1;
    }

    return {
      total: linked.length,
      learned,
      due,
      mature,
      remaining: linked.length - learned,
      pct: percent(learned, linked.length || 1),
      falseFriends: linked.filter((v) => v.arabic!.relation === 'false-friend').length,
    };
  }, [vocabulary, reviews, learnedWords]);
}

export function ConnectionProgressPanel({
  vocabulary, className, compact = false,
}: {
  vocabulary: VocabItem[];
  className?: string;
  compact?: boolean;
}) {
  const stats = useConnectionProgress(vocabulary);

  if (stats.total === 0) return null;

  return (
    <div className={cx('card p-5', className)}>
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="t-h3 text-primary">Arapça bağlantıları</h2>
        <span className="font-mono text-xs font-semibold tabular-nums text-secondary">
          {stats.learned}/{stats.total}
        </span>
      </div>

      <ProgressBar value={stats.pct} tone="brass" showLabel />

      <dl className={cx('mt-4 grid gap-3', compact ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4')}>
        <Stat label="Öğrenildi" value={stats.learned} />
        <Stat label="Tekrar bekliyor" value={stats.due} tone={stats.due > 0 ? 'accent' : undefined} />
        <Stat label="Ustalaşıldı" value={stats.mature} />
        <Stat label="Kalan" value={stats.remaining} />
      </dl>

      {!compact && (
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t pt-3.5 hairline">
          <Link
            to="/practice/connections"
            className="link-action"
          >
            Alıştırma yap
            <ArrowRight size={12} />
          </Link>
          {stats.due > 0 && (
            <Link
              to="/review"
              className="link-action"
            >
              <Repeat size={12} />
              {stats.due} tekrar hazır
            </Link>
          )}
          <span className="t-caption">
            {stats.falseFriends} yalancı eş dost
          </span>
        </div>
      )}
    </div>
  );
}

function Stat({
  label, value, tone,
}: {
  label: string;
  value: number;
  tone?: 'accent';
}) {
  return (
    <div>
      <dt className="t-meta">{label}</dt>
      <dd
        className={cx(
          'mt-1 font-display text-xl font-semibold tabular-nums',
          tone === 'accent' ? 'text-accent-700 dark:text-accent-400' : 'text-primary',
        )}
      >
        {value}
      </dd>
    </div>
  );
}
