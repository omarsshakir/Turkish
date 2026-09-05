import type { ReactNode } from 'react';
import type { Bilingual, Phrase } from '@/types/content';
import { cx } from '@/lib/utils';
import { useSettings, useT } from '@/state/SettingsContext';
import { SpeakButton } from '@/components/audio/SpeakButton';

/**
 * Translation display.
 *
 * Rule enforced here: Arabic and Kurdish are NEVER blended together. The
 * student sees one language at a time by default; turning on "show both" in
 * Settings renders them as two clearly separated, labelled rows.
 *
 * Layout note (RTL): a right-to-left run inside a left-to-right card will
 * align itself to the far right edge of whatever box it is given. In a wide
 * card that strands the Arabic hundreds of pixels away from the Turkish it
 * translates. The fix is a shrink-to-fit box: `w-fit` makes the box hug the
 * text, so a short translation sits directly under its Turkish, while a long
 * one still wraps and aligns right the way an Arabic reader expects.
 */

const LANG_LABEL = { ar: 'العربية', ku: 'کوردی' } as const;
const LANG_CODE = { ar: 'ar', ku: 'ckb' } as const;

/** A single right-to-left translation line with its language tag. */
export function TranslationLine({
  text, lang, size = 'md', className, showTag = false,
}: {
  text: string;
  lang: 'ar' | 'ku';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTag?: boolean;
}) {
  const textSize = { sm: 'text-sm', md: 'text-[15px]', lg: 'text-lg' }[size];
  // Rendered with spans rather than <p> so a translation is valid HTML inside
  // headings, paragraphs and buttons alike.
  return (
    <span className={cx('flex w-fit max-w-full items-start gap-2', className)}>
      {showTag && (
        <span className="mt-[3px] shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-muted ring-1 ring-inset ring-ink-200 dark:ring-ink-700">
          {lang}
        </span>
      )}
      <span
        dir="rtl"
        lang={LANG_CODE[lang]}
        className={cx(
          lang === 'ar' ? 'ar-text' : 'ku-text',
          textSize,
          'block text-secondary',
        )}
      >
        {text}
      </span>
    </span>
  );
}

/**
 * Renders a Bilingual value honouring the student's language choice.
 * With `showBoth` on, both appear, labelled and separated.
 */
export function Translated({
  value, size = 'md', className, forceBoth = false,
}: {
  value: Bilingual;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  forceBoth?: boolean;
}) {
  const { lang, showBoth } = useSettings();
  const both = forceBoth || showBoth;

  if (!both) {
    return (
      <TranslationLine
        text={lang === 'ar' ? value.ar : value.ku}
        lang={lang}
        size={size}
        className={className}
      />
    );
  }

  // Separation comes from the AR/KU tags and the gap, not a rule. With the
  // box shrink-wrapped to the text, a horizontal rule lands directly beneath
  // the Arabic and reads as an underline of that word rather than a divider
  // between two languages.
  return (
    <span className={cx('block w-fit max-w-full space-y-2.5', className)}>
      <TranslationLine text={value.ar} lang="ar" size={size} showTag />
      <TranslationLine text={value.ku} lang="ku" size={size} showTag />
    </span>
  );
}

/**
 * The full three-language presentation from §11: Turkish, then Arabic, then
 * Kurdish, each under its own label and separated by a rule. Used where the
 * sentence itself is the subject — sentence packs, headline examples, the
 * reveal step in listening.
 *
 * Nothing is ever merged: each language gets its own labelled band, and the
 * rules make the separation structural rather than a matter of spacing.
 */
export function TranslationStack({
  tr, pron, ar, ku, className, action, size = 'lg',
}: {
  tr: string;
  pron?: string;
  ar: string;
  ku: string;
  className?: string;
  action?: ReactNode;
  size?: 'md' | 'lg';
}) {
  const { showPronunciation } = useSettings();
  const trSize = size === 'lg' ? 'text-2xl sm:text-[1.75rem]' : 'text-xl';

  return (
    <div className={cx('space-y-4', className)}>
      <Band label="Türkçe">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className={cx('tr-word leading-snug', trSize)} lang="tr">{tr}</p>
            {showPronunciation && pron && <p className="pron mt-1.5">{pron}</p>}
          </div>
          {action ?? <SpeakButton text={tr} size="md" />}
        </div>
      </Band>

      <Band label={LANG_LABEL.ar} rtl>
        <p className="ar-text text-[15px] text-secondary" dir="rtl" lang="ar">{ar}</p>
      </Band>

      <Band label={LANG_LABEL.ku} rtl>
        <p className="ku-text text-[15px] text-secondary" dir="rtl" lang="ckb">{ku}</p>
      </Band>
    </div>
  );
}

/** One labelled band inside a TranslationStack. */
function Band({
  label, children, rtl = false,
}: {
  label: string;
  children: ReactNode;
  rtl?: boolean;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-2.5">
        <span
          className={cx(
            'font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-muted',
            rtl && 'font-arabic text-[11px] normal-case tracking-normal',
          )}
        >
          {label}
        </span>
        <span className="h-px flex-1 bg-ink-200 dark:bg-ink-800" />
      </div>
      {children}
    </div>
  );
}

/**
 * The canonical four-part item: Turkish, pronunciation, translation, audio.
 * Used for example sentences, sound drills and sentence packs.
 */
export function PhraseRow({
  phrase, size = 'md', className, index, dense = false,
}: {
  phrase: Phrase;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  index?: number;
  dense?: boolean;
}) {
  const { showPronunciation } = useSettings();
  const trSize = { sm: 'text-base', md: 'text-lg', lg: 'text-xl' }[size];

  return (
    <li
      className={cx(
        'group flex items-start gap-3 rounded-xl transition-colors duration-150',
        dense ? 'p-2.5' : 'p-3.5',
        'hover:bg-brand-50/60 dark:hover:bg-brand-950/40',
        className,
      )}
    >
      {typeof index === 'number' && (
        <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-md font-mono text-[11px] font-semibold text-muted surface-sunken">
          {index + 1}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className={cx('tr-word leading-snug', trSize)} lang="tr">
          {phrase.tr}
        </p>
        {showPronunciation && phrase.pron && (
          <p className="pron mt-0.5">{phrase.pron}</p>
        )}
        <div className="mt-2">
          <Translated value={{ ar: phrase.ar, ku: phrase.ku }} size={size === 'lg' ? 'md' : 'sm'} />
        </div>
      </div>
      <SpeakButton text={phrase.tr} size={size === 'sm' ? 'sm' : 'md'} className="mt-0.5" />
    </li>
  );
}

/** A labelled block of Turkish + both translations, for headline content. */
export function TurkishHeadline({
  tr, pron, ar, ku, size = 'lg', action,
}: {
  tr: string;
  pron?: string;
  ar: string;
  ku: string;
  size?: 'md' | 'lg' | 'xl';
  action?: ReactNode;
}) {
  const { showPronunciation } = useSettings();
  const trSize = { md: 'text-xl', lg: 'text-2xl', xl: 'text-4xl' }[size];

  return (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className={cx('tr-word leading-tight', trSize)} lang="tr">{tr}</p>
        {showPronunciation && pron && <p className="pron mt-1.5 text-sm">{pron}</p>}
        <div className="mt-3">
          <Translated value={{ ar, ku }} />
        </div>
      </div>
      {action}
    </div>
  );
}

/** Small inline label for the active support language, used in toggles. */
export function LangTag({ lang }: { lang: 'ar' | 'ku' }) {
  return <span className="font-arabic">{LANG_LABEL[lang]}</span>;
}

/** Switches between العربية and کوردی without touching Turkish content. */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, set } = useSettings();
  return (
    <div
      className={cx(
        'inline-flex items-center rounded-xl p-0.5 surface-sunken ring-1 ring-inset ring-ink-200 dark:ring-ink-800',
        className,
      )}
      role="group"
      aria-label="Çeviri dili"
    >
      {(['ar', 'ku'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => set('lang', code)}
          aria-pressed={lang === code}
          lang={LANG_CODE[code]}
          // Every other Arabic/Kurdish node declares its direction; these two
          // buttons were the only ones that did not. A single RTL word renders
          // correctly without it, but the attribute is what AT reads.
          dir="rtl"
          className={cx(
            'rounded-[9px] px-3 py-1.5 font-arabic text-sm font-semibold transition duration-150',
            lang === code
              ? 'bg-surface text-brand-800 shadow-card dark:text-brand-300'
              : 'text-muted hover:text-secondary',
          )}
        >
          {LANG_LABEL[code]}
        </button>
      ))}
    </div>
  );
}

/** Convenience hook re-export so components import from one place. */
export { useT };
