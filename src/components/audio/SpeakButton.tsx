import { useCallback, useEffect, useState } from 'react';
import { Loader2, Volume2, VolumeX } from 'lucide-react';
import { Waveform } from '@/components/ui/Ornament';
import { audio, type SpeechRate } from '@/lib/audio';
import { cx } from '@/lib/utils';
import { useSettings } from '@/state/SettingsContext';
import { useProgress } from '@/state/ProgressContext';

/**
 * THE audio component. One button, one prop that matters (`text`), used
 * everywhere: alphabet cards, number tiles, vocabulary rows, grammar examples,
 * conjugation tables, dialogue lines and exercise options.
 *
 * It shows three states - idle, speaking, unsupported - and never navigates
 * away or blocks the page.
 */

export type SpeakButtonSize = 'xs' | 'sm' | 'md' | 'lg';

const SIZE: Record<SpeakButtonSize, {
  box: string; icon: number; wave: 'sm' | 'md' | 'lg';
}> = {
  xs: { box: 'h-7 w-7 rounded-lg', icon: 13, wave: 'sm' },
  sm: { box: 'h-8 w-8 rounded-lg', icon: 15, wave: 'sm' },
  md: { box: 'h-10 w-10 rounded-xl', icon: 18, wave: 'md' },
  lg: { box: 'h-14 w-14 rounded-2xl', icon: 24, wave: 'md' },
};

interface SpeakButtonProps {
  /** The Turkish text to speak. */
  text: string;
  size?: SpeakButtonSize;
  /** Overrides the student's default rate - used by the "slow" button. */
  rate?: SpeechRate;
  className?: string;
  /** Renders as a full pill with the word "Dinle" instead of an icon square. */
  withLabel?: boolean;
  /** Visual weight. `solid` for primary calls to action. */
  variant?: 'soft' | 'solid' | 'ghost';
  label?: string;
}

export function SpeakButton({
  text, size = 'md', rate, className, withLabel = false, variant = 'soft', label,
}: SpeakButtonProps) {
  const { rate: defaultRate } = useSettings();
  const { countListen } = useProgress();
  const [speaking, setSpeaking] = useState(false);
  const [pending, setPending] = useState(false);

  // Follow the engine so the button resets if something else starts speaking.
  useEffect(() => audio.subscribe((current) => {
    if (current !== text.trim()) setSpeaking(false);
  }), [text]);

  const supported = audio.isSupported;

  const handleClick = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!supported) return;

    if (speaking) {
      audio.stop();
      setSpeaking(false);
      return;
    }

    setPending(true);
    setSpeaking(true);
    countListen();
    await audio.speak(text, {
      rate: rate ?? defaultRate,
      onStart: () => setPending(false),
      onEnd: () => {
        setPending(false);
        setSpeaking(false);
      },
    });
  }, [text, rate, defaultRate, speaking, supported, countListen]);

  const { box, icon, wave } = SIZE[size];

  // Turquoise is the interactive colour of the system, and audio is the most
  // used interaction in the app - so the speak button IS the turquoise.
  const tone = variant === 'solid'
    ? 'bg-brand-700 text-white hover:bg-brand-800 shadow-sm dark:bg-brand-600 dark:hover:bg-brand-500'
    : variant === 'ghost'
      ? 'text-ink-400 hover:text-brand-700 hover:bg-brand-50 dark:hover:bg-brand-950 dark:hover:text-brand-300'
      : 'bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 hover:bg-brand-100 hover:ring-brand-200 dark:bg-brand-950 dark:text-brand-300 dark:ring-brand-900 dark:hover:bg-brand-900';

  /* Idle shows the speaker; playing shows a breathing waveform. The state is
     announced too, not just drawn, so it is not colour- or motion-only. */
  const face = pending
    ? <Loader2 size={icon} className="animate-spin" />
    : speaking
      ? <Waveform active bars={3} size={wave} />
      : <Volume2 size={icon} />;

  if (!supported) {
    return (
      <span
        className={cx('grid place-items-center text-ink-300 dark:text-ink-600', box, className)}
        title="Bu tarayıcı seslendirmeyi desteklemiyor"
        aria-hidden
      >
        <VolumeX size={icon} />
      </span>
    );
  }

  if (withLabel) {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Dinle: ${text}`}
        aria-pressed={speaking}
        className={cx(
          'inline-flex select-none items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition active:scale-[.98]',
          tone,
          className,
        )}
      >
        {face}
        {label ?? 'Dinle'}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Dinle: ${text}`}
      aria-pressed={speaking}
      title={`Dinle: ${text}`}
      className={cx(
        'grid shrink-0 place-items-center transition duration-150 active:scale-90',
        box, tone,
        className,
      )}
    >
      {face}
    </button>
  );
}

/**
 * Two buttons side by side: normal speed and slow. Used wherever a student is
 * expected to imitate the audio rather than just recognise it.
 */
export function SpeakPair({
  text, size = 'md', className,
}: {
  text: string;
  size?: SpeakButtonSize;
  className?: string;
}) {
  return (
    <div className={cx('flex items-center gap-1.5', className)}>
      <SpeakButton text={text} size={size} />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          void audio.speak(text, { rate: 'slow' });
        }}
        aria-label={`Yavaş dinle: ${text}`}
        title="Yavaş dinle"
        className={cx(
          'grid shrink-0 place-items-center rounded-lg font-mono text-[10px] font-bold uppercase tracking-wide transition active:scale-90',
          'bg-brass-50 text-brass-700 ring-1 ring-inset ring-brass-100 hover:bg-brass-100',
          'dark:bg-brass-950 dark:text-brass-300 dark:ring-brass-900 dark:hover:bg-brass-900',
          size === 'lg' ? 'h-14 px-3' : size === 'md' ? 'h-10 px-2.5' : 'h-8 px-2',
        )}
      >
        0.5×
      </button>
    </div>
  );
}

/** Speaks a list of strings in order — used for "play the whole dialogue". */
export function SpeakSequenceButton({
  texts, label = 'Tümünü dinle', className,
}: {
  texts: string[];
  label?: string;
  className?: string;
}) {
  const { rate } = useSettings();
  const [playing, setPlaying] = useState(false);

  const handle = useCallback(async () => {
    if (playing) {
      audio.stop();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    await audio.speakSequence(texts, { rate });
    setPlaying(false);
  }, [texts, rate, playing]);

  if (!audio.isSupported) return null;

  return (
    <button
      type="button"
      onClick={handle}
      className={cx(
        'btn-secondary',
        className,
      )}
    >
      {playing
        ? <Waveform active bars={3} size="sm" className="text-brand-700 dark:text-brand-300" />
        : <Volume2 size={16} />}
      {playing ? 'Durdur' : label}
    </button>
  );
}
