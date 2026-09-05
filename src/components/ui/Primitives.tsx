import { forwardRef, useId, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { LevelId } from '@/types/content';
import { cx } from '@/lib/utils';

/**
 * The component vocabulary of the academy.
 *
 * Every export here existed before the visual redesign and keeps the same
 * props — the pages that use them did not need to change. What changed is
 * how they look: warmer surfaces, an editorial type scale, brass hairlines
 * instead of coloured fills, and colour used to mean something rather than
 * to decorate.
 */

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

export function Card({
  children, className, hover = false, as = 'div', id, edge = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: 'div' | 'section' | 'article' | 'li';
  /** Anchor target, so pages can deep-link to a specific card. */
  id?: string;
  /** Draws a turquoise edge along the top — for the one card that matters. */
  edge?: boolean;
}) {
  const Tag = as;
  return (
    <Tag id={id} className={cx('card', hover && 'card-hover', edge && 'card-edge', className)}>
      {children}
    </Tag>
  );
}

export function CardHeader({
  title, subtitle, icon, action, className,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx('flex items-start justify-between gap-4 p-5 pb-3', className)}>
      <div className="flex min-w-0 items-start gap-3">
        {icon && (
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {icon}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="section-title truncate">{title}</h3>
          {subtitle && <p className="mt-0.5 t-secondary">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading — the editorial device that sets the academy tone   */
/* ------------------------------------------------------------------ */

export function SectionHeading({
  eyebrow, title, action, className, id,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  action?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cx('mb-4', className)} id={id}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <h2 className="t-h2 text-primary">{title}</h2>
        </div>
        {action}
      </div>
      <div className="rule-brass mt-3" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Button                                                              */
/* ------------------------------------------------------------------ */

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  accent: 'btn-accent',
};
const SIZE_CLASS: Record<ButtonSize, string> = { sm: 'btn-sm', md: '', lg: 'btn-lg' };

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', icon, className, children, ...rest }, ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={cx(VARIANT_CLASS[variant], SIZE_CLASS[size], className)}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
});

export function LinkButton({
  to, variant = 'primary', size = 'md', icon, className, children,
}: {
  to: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={cx(VARIANT_CLASS[variant], SIZE_CLASS[size], className)}>
      {icon}
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Chip / badge                                                        */
/* ------------------------------------------------------------------ */

type ChipTone =
  | 'brand' | 'accent' | 'green' | 'amber' | 'rose' | 'neutral' | 'violet'
  | 'brass' | 'cobalt';

const CHIP_TONE: Record<ChipTone, string> = {
  brand: 'bg-brand-50 text-brand-800 ring-brand-200 dark:bg-brand-950 dark:text-brand-300 dark:ring-brand-800',
  accent: 'bg-accent-50 text-accent-800 ring-accent-200 dark:bg-accent-950 dark:text-accent-300 dark:ring-accent-800',
  brass: 'bg-brass-50 text-brass-800 ring-brass-200 dark:bg-brass-950 dark:text-brass-300 dark:ring-brass-800',
  cobalt: 'bg-cobalt-50 text-cobalt-800 ring-cobalt-200 dark:bg-cobalt-950 dark:text-cobalt-300 dark:ring-cobalt-800',
  green: 'bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-900',
  amber: 'bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:ring-amber-900',
  rose: 'bg-accent-50 text-accent-800 ring-accent-200 dark:bg-accent-950 dark:text-accent-300 dark:ring-accent-800',
  // `violet` predates the academy palette; it now resolves to cobalt so no
  // stray purple survives anywhere in the interface.
  violet: 'bg-cobalt-50 text-cobalt-800 ring-cobalt-200 dark:bg-cobalt-950 dark:text-cobalt-300 dark:ring-cobalt-800',
  neutral: 'bg-ink-100 text-ink-700 ring-ink-200 dark:bg-ink-800 dark:text-ink-300 dark:ring-ink-700',
};

export function Chip({
  children, tone = 'neutral', className, icon,
}: {
  children: ReactNode;
  tone?: ChipTone;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <span className={cx('chip', CHIP_TONE[tone], className)}>
      {icon}
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Level identity                                                      */
/* ------------------------------------------------------------------ */

/**
 * The six levels are one journey, not six unrelated colours: shallow
 * turquoise water, deepening to cobalt, through the red of advanced study,
 * ending in brass. C1+ is meant to look like a destination.
 */
const LEVEL_TONE: Record<LevelId, ChipTone> = {
  a1: 'brand', a2: 'brand', b1: 'cobalt', b2: 'cobalt', c1: 'accent', c1plus: 'brass',
};

export const LEVEL_CODE: Record<LevelId, string> = {
  a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1', c1plus: 'C1+',
};

export function LevelBadge({ level, className }: { level: LevelId; className?: string }) {
  return (
    <Chip tone={LEVEL_TONE[level]} className={cx('font-mono tracking-wide', className)}>
      {LEVEL_CODE[level]}
    </Chip>
  );
}

/**
 * The square level marker. Squared rather than rounded on purpose — it echoes
 * the Kufic tile squares in the lattice motif, and it distinguishes a level
 * (a place you are) from a chip (a label on something).
 */
export function LevelTile({
  level, gradient, locked = false, size = 'md', className,
}: {
  level: LevelId;
  /** Tailwind gradient stops from the level's own metadata. */
  gradient: string;
  locked?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const box = {
    sm: 'h-7 w-9 rounded-md text-[10px]',
    md: 'h-9 w-11 rounded-lg text-xs',
    lg: 'h-14 w-16 rounded-xl text-base',
  }[size];

  return (
    <span
      className={cx(
        'grid shrink-0 place-items-center bg-gradient-to-br font-mono font-bold tracking-wide text-white',
        'ring-1 ring-inset ring-white/15 shadow-card',
        gradient, box,
        locked && 'grayscale opacity-55',
        className,
      )}
    >
      {LEVEL_CODE[level]}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Progress                                                            */
/* ------------------------------------------------------------------ */

export function ProgressBar({
  value, className, tone = 'brand', showLabel = false, size = 'md',
}: {
  value: number;
  className?: string;
  tone?: 'brand' | 'green' | 'accent' | 'brass';
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const height = { sm: 'h-1', md: 'h-2', lg: 'h-3' }[size];
  const fill = {
    brand: 'bg-brand-600 dark:bg-brand-400',
    green: 'bg-emerald-600 dark:bg-emerald-400',
    accent: 'bg-accent-600 dark:bg-accent-400',
    brass: 'bg-brass-500 dark:bg-brass-400',
  }[tone];

  return (
    <div className={cx('flex items-center gap-3', className)}>
      <div
        className={cx('w-full overflow-hidden rounded-full surface-sunken', height)}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cx('h-full rounded-full transition-[width] duration-700 ease-out', fill)}
          style={{ width: `${value}%` }}
        />
      </div>
      {showLabel && (
        <span className="shrink-0 font-mono text-xs font-semibold tabular-nums text-secondary">
          {value}%
        </span>
      )}
    </div>
  );
}

/** Circular progress used on the dashboard hero. */
export function ProgressRing({
  value, size = 92, stroke = 8, label, tone = 'brand',
}: {
  value: number;
  size?: number;
  stroke?: number;
  label?: ReactNode;
  tone?: 'brand' | 'brass';
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        {/* The track inherits the surrounding text colour at low opacity, so
            the ring is correct on a card AND on the midnight hero. A fixed
            light stroke made an empty ring read as a full one against the
            dark ground. */}
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={stroke}
          className="stroke-current opacity-[.18]"
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cx(
            'transition-[stroke-dashoffset] duration-1000 ease-out',
            tone === 'brass' ? 'stroke-brass-400' : 'stroke-brand-500 dark:stroke-brand-400',
          )}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        {label ?? (
          <span className="font-display text-lg font-semibold tabular-nums text-primary">
            {value}%
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * A labelled skill meter — §19. Reads as evidence rather than a game score,
 * which is why it carries a number and a caption instead of stars.
 */
export function Meter({
  label, value, caption, tone = 'brand',
}: {
  label: string;
  value: number;
  caption?: ReactNode;
  tone?: 'brand' | 'green' | 'accent' | 'brass';
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium text-primary">{label}</span>
        <span className="font-mono text-xs font-semibold tabular-nums text-secondary">
          {value}%
        </span>
      </div>
      <ProgressBar value={value} tone={tone} size="sm" />
      {caption && <p className="mt-1.5 t-caption">{caption}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Empty state — §22                                                   */
/* ------------------------------------------------------------------ */

export function EmptyState({
  icon, title, description, action, headingLevel = 2,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  /*
   * The title was a <p>, which is fine when the empty state sits inside a page
   * that already has an <h1> - and wrong when the empty state IS the page.
   * `/admin` with teacher mode off, a locked level and the 404 page rendered
   * nothing a screen reader could navigate to. Those pass 1; everywhere else
   * the default h2 slots correctly under the page's own h1.
   */
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? 'h1' : 'h2';
  return (
    <div className="relative isolate grid place-items-center overflow-hidden rounded-2xl border border-dashed px-6 py-14 text-center hairline">
      {/* The lattice makes an empty area feel considered rather than blank. */}
      <span className="absolute inset-0 text-brand-700 opacity-[.045] dark:text-brass-300 dark:opacity-[.07]" aria-hidden>
        <OrnamentLattice />
      </span>
      <div className="relative">
        {icon && (
          <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {icon}
          </span>
        )}
        <Heading className="font-display text-base font-semibold text-primary">{title}</Heading>
        {description && <p className="mx-auto mt-1.5 max-w-sm t-secondary">{description}</p>}
        {action && <div className="mt-5">{action}</div>}
      </div>
    </div>
  );
}

/* Local, dependency-free copy of the lattice so Primitives does not import
   Ornament and create a cycle (Ornament stays free of Primitives too). */
function OrnamentLattice() {
  const id = `lat-${useId().replace(/:/g, '')}`;
  return (
    <svg className="h-full w-full" aria-hidden focusable="false">
      <defs>
        <pattern id={id} width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1.1">
            {([[36, 36], [0, 0], [72, 0], [0, 72], [72, 72]] as const).map(([x, y], i) => (
              <g key={i}>
                <rect x={x - 15.75} y={y - 15.75} width="31.5" height="31.5" />
                <rect
                  x={x - 15.75} y={y - 15.75} width="31.5" height="31.5"
                  transform={`rotate(45 ${x} ${y})`}
                />
              </g>
            ))}
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Page header                                                         */
/* ------------------------------------------------------------------ */

export function PageHeader({
  eyebrow, title, description, action, icon,
}: {
  eyebrow?: ReactNode;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          {eyebrow && (
            <div className="eyebrow mb-2.5">
              {icon}
              {eyebrow}
            </div>
          )}
          <h1 className="t-h1 text-balance text-primary">{title}</h1>
          {description && (
            <div className="mt-2.5 max-w-2xl t-body text-pretty">{description}</div>
          )}
        </div>
        {action}
      </div>
      <div className="rule-brass mt-5" />
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Stat tile                                                           */
/* ------------------------------------------------------------------ */

export function StatTile({
  label, value, sub, icon, tone = 'brand',
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
  tone?: ChipTone;
}) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="t-meta">{label}</span>
        {icon && (
          <span className={cx('grid h-7 w-7 place-items-center rounded-lg ring-1 ring-inset', CHIP_TONE[tone])}>
            {icon}
          </span>
        )}
      </div>
      <p className="mt-2.5 font-display text-2xl font-semibold tabular-nums text-primary">
        {value}
      </p>
      {sub && <p className="mt-1 t-caption">{sub}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Loading — §23                                                       */
/* ------------------------------------------------------------------ */

/** Content-shaped placeholders. Never a full-screen spinner. */
export function Skeleton({ className }: { className?: string }) {
  return <span className={cx('skeleton block', className)} />;
}

export function SkeletonCard({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cx('card p-5', className)} aria-hidden>
      <Skeleton className="h-4 w-1/3" />
      <div className="mt-4 space-y-2.5">
        {Array.from({ length: lines }, (_, i) => (
          <Skeleton key={i} className={cx('h-3', i === lines - 1 ? 'w-2/3' : 'w-full')} />
        ))}
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6, className }: { count?: number; className?: string }) {
  return (
    <div className={cx('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {Array.from({ length: count }, (_, i) => <SkeletonCard key={i} />)}
    </div>
  );
}
