import { useId, type ReactNode } from 'react';
import { cx } from '@/lib/utils';

/**
 * The visual signature of TurkishPath.
 *
 * Two motifs, both drawn from Turkish geometric tradition and both kept at
 * very low contrast so they read as texture rather than decoration:
 *
 *   `lattice` — the eight-pointed star (rub el hizb) built the way the
 *               original tilemakers built it: two squares, one rotated 45°.
 *               Tessellated on a 64px grid it becomes the Seljuk star lattice
 *               found on mosque screens and Iznik panels.
 *
 *   `arcs`    — concentric arcs. Water, ripples, sound spreading out. Used on
 *               the listening and speaking screens where the subject is audio.
 *
 * Both inherit `currentColor`, so a parent sets the tone with a text colour
 * and the motif follows the theme automatically. Everything here is
 * `aria-hidden`: it carries no information.
 */

type Motif = 'lattice' | 'arcs';

export function Ornament({
  motif = 'lattice', className, scale = 64, opacity = 0.5,
}: {
  motif?: Motif;
  className?: string;
  /** Tile size in px. Larger reads calmer. */
  scale?: number;
  opacity?: number;
}) {
  const id = useId().replace(/:/g, '');

  return (
    <svg
      className={cx('pointer-events-none absolute inset-0 h-full w-full', className)}
      aria-hidden
      focusable="false"
    >
      <defs>
        {motif === 'lattice' ? (
          <pattern
            id={id}
            width={scale}
            height={scale}
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth={scale / 64}
              opacity={opacity}
            >
              {/* Centre star, then one at each corner so the tile repeats
                  seamlessly in both directions. */}
              {([
                [scale / 2, scale / 2],
                [0, 0], [scale, 0], [0, scale], [scale, scale],
              ] as const).map(([cx_, cy], i) => {
                const s = scale * 0.4375;      // square side
                const x = cx_ - s / 2;
                const y = cy - s / 2;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width={s} height={s} />
                    <rect
                      x={x} y={y} width={s} height={s}
                      transform={`rotate(45 ${cx_} ${cy})`}
                    />
                  </g>
                );
              })}
            </g>
          </pattern>
        ) : (
          <pattern
            id={id}
            width={scale * 2}
            height={scale}
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth={scale / 64}
              opacity={opacity}
            >
              {[0.28, 0.46, 0.64, 0.82, 1].map((r) => (
                <circle key={r} cx={scale} cy={scale} r={scale * r} />
              ))}
            </g>
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * A page's visual anchor (§6). A band of midnight with the star lattice
 * behind it, a soft brass horizon line at the bottom edge, and whatever
 * content the page wants on top.
 *
 * `tone`:
 *   `deep`  — midnight ground, light text. The dashboard and level journey.
 *   `paper` — warm paper ground, ink text. Quieter pages that still want a
 *             visual anchor without dominating the screen.
 */
export function Hero({
  children, tone = 'deep', motif = 'lattice', className, bleed = false,
}: {
  children: ReactNode;
  tone?: 'deep' | 'paper';
  motif?: Motif;
  className?: string;
  /** Extend to the full width of the main column, ignoring page padding. */
  bleed?: boolean;
}) {
  const deep = tone === 'deep';

  return (
    <section
      className={cx(
        'relative isolate overflow-hidden',
        bleed ? 'rounded-3xl' : 'rounded-3xl',
        deep
          ? 'bg-rail text-ink-100'
          : 'border border-hairline bg-surface',
        className,
      )}
    >
      {/* The motif. Barely there — 6% on midnight, 4% on paper. */}
      <span
        className={cx(
          'absolute inset-0',
          deep ? 'text-brass-300 opacity-[.07]' : 'text-brand-700 opacity-[.05]',
        )}
        aria-hidden
      >
        <Ornament motif={motif} scale={motif === 'arcs' ? 88 : 72} />
      </span>

      {/* A single wash of turquoise from the far corner keeps the midnight
          from reading as flat black. */}
      {deep && (
        <span
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgb(43 127 127), transparent 70%)' }}
          aria-hidden
        />
      )}

      <div className="relative">{children}</div>

      {/* Brass horizon. The detail that makes the band feel finished. */}
      <span
        className={cx(
          'absolute inset-x-0 bottom-0 h-px',
          deep ? 'opacity-40' : 'opacity-25',
        )}
        style={{
          background:
            'linear-gradient(90deg, transparent, rgb(var(--hairline)) 30%, rgb(var(--hairline)) 70%, transparent)',
        }}
        aria-hidden
      />
    </section>
  );
}

/**
 * Audio waveform used as a visual anchor on listening screens and inside the
 * speak button. `active` animates three-phase, so the bars never move in
 * lockstep; `bars` controls density.
 *
 * Purely decorative — it is NOT driven by the actual audio signal, and it
 * would be dishonest to imply otherwise, so it stays symmetrical and calm
 * rather than pretending to visualise speech.
 */
export function Waveform({
  active = false, bars = 5, className, size = 'md',
}: {
  active?: boolean;
  bars?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = {
    sm: { w: 'w-[2px]', h: 'h-3', gap: 'gap-[3px]' },
    md: { w: 'w-[3px]', h: 'h-5', gap: 'gap-1' },
    lg: { w: 'w-1', h: 'h-10', gap: 'gap-1.5' },
  }[size];

  // A fixed, symmetrical profile — tallest in the middle.
  const profile = Array.from({ length: bars }, (_, i) => {
    const mid = (bars - 1) / 2;
    const distance = Math.abs(i - mid) / (mid || 1);
    return 0.35 + (1 - distance) * 0.65;
  });

  return (
    <span
      className={cx('inline-flex items-center', dims.gap, className)}
      aria-hidden
    >
      {profile.map((height, i) => (
        <span
          key={i}
          className={cx(
            'block rounded-full bg-current',
            dims.w, dims.h,
            active && ['animate-wave-1', 'animate-wave-2', 'animate-wave-3'][i % 3],
          )}
          style={{
            transform: active ? undefined : `scaleY(${height})`,
            animationDelay: active ? `${(i % 3) * 0.12}s` : undefined,
          }}
        />
      ))}
    </span>
  );
}

/**
 * A small brass seal. Marks mastery — the C1+ level, a completed lesson, a
 * fully-learned category. Deliberately rare.
 */
export function Seal({
  children, className, size = 'md',
}: {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const box = { sm: 'h-8 w-8 text-[10px]', md: 'h-11 w-11 text-xs', lg: 'h-16 w-16 text-base' }[size];
  return (
    <span
      className={cx(
        'relative grid shrink-0 place-items-center rounded-full font-mono font-bold uppercase tracking-wider',
        'bg-gradient-to-br from-brass-300 to-brass-600 text-ink-950',
        'ring-1 ring-inset ring-brass-200/60 shadow-card',
        box, className,
      )}
    >
      {children}
    </span>
  );
}
