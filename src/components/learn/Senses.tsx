import type { VocabItem } from '@/types/content';
import { cx } from '@/lib/utils';
import { useSettings } from '@/state/SettingsContext';
import { SpeakButton } from '@/components/audio/SpeakButton';
import { Translated } from './Translation';

/**
 * The extra meanings of a word.
 *
 * A Turkish word with two senses is still ONE word — one entry, one audio
 * button, one SRS card. So the senses render as numbered meanings under the
 * word rather than as separate rows, which is also how a dictionary does it
 * and how a learner should hold them in memory.
 *
 * Renders nothing when a word has only its primary meaning, which is the vast
 * majority of the curriculum.
 */
export function SenseList({
  item, className, compact = false,
}: {
  item: VocabItem;
  className?: string;
  /** Drops the examples and usage notes, for dense lists. */
  compact?: boolean;
}) {
  const { showPronunciation } = useSettings();
  if (!item.senses || item.senses.length === 0) return null;

  // The primary meaning is sense 1; the array holds 2 onwards.
  const all = [
    { ar: item.ar, ku: item.ku, example: item.example, usage: undefined, note: undefined },
    ...item.senses,
  ];

  return (
    <div className={cx('space-y-2.5', className)}>
      <p className="eyebrow">{all.length} anlam</p>

      <ol className="space-y-2.5">
        {all.map((sense, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md font-mono text-[10px] font-bold text-muted surface-sunken"
              aria-hidden
            >
              {i + 1}
            </span>

            <div className="min-w-0 flex-1">
              <Translated value={{ ar: sense.ar, ku: sense.ku }} size="sm" />

              {!compact && sense.usage && (
                <div className="mt-1.5 border-l-2 border-brass-400 pl-2.5">
                  <Translated value={sense.usage} size="sm" />
                </div>
              )}

              {!compact && sense.example && (
                <div className="mt-2 flex items-start gap-2.5 rounded-lg border p-2.5 hairline surface-sunken">
                  <div className="min-w-0 flex-1">
                    <p className="tr-word text-sm" lang="tr">{sense.example.tr}</p>
                    {showPronunciation && sense.example.pron && (
                      <p className="pron mt-0.5">{sense.example.pron}</p>
                    )}
                    <div className="mt-1.5">
                      <Translated
                        value={{ ar: sense.example.ar, ku: sense.example.ku }}
                        size="sm"
                      />
                    </div>
                  </div>
                  <SpeakButton text={sense.example.tr} size="xs" variant="ghost" />
                </div>
              )}

              {!compact && sense.note && (
                <div className="mt-2">
                  <Translated value={sense.note} size="sm" />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * A one-line "also means…" hint for dense contexts — vocabulary rows, review
 * cards — where the full sense list would dominate.
 */
export function SenseHint({ item, className }: { item: VocabItem; className?: string }) {
  const { lang } = useSettings();
  if (!item.senses || item.senses.length === 0) return null;

  const others = item.senses.map((s) => (lang === 'ar' ? s.ar : s.ku)).join(' · ');

  return (
    <span className={cx('flex w-fit max-w-full items-baseline gap-1.5', className)}>
      <span className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-wider text-brass-600 dark:text-brass-400">
        +{item.senses.length}
      </span>
      <span
        className={cx('text-xs text-muted', lang === 'ar' ? 'ar-text' : 'ku-text')}
        dir="rtl"
        lang={lang === 'ar' ? 'ar' : 'ckb'}
      >
        {others}
      </span>
    </span>
  );
}

/**
 * The fixed pairings a word actually occurs in.
 *
 * Turkish says `karar vermek`, never "karar yapmak"; `dilekçe vermek`, never
 * "dilekçe yapmak". A verb-plus-noun pairing is one unit of meaning, and a
 * student who learns the noun alone will guess the verb wrong. Showing them
 * together is most of what separates B1 from B2.
 */
export function Collocations({
  item, className,
}: {
  item: VocabItem;
  className?: string;
}) {
  if (!item.collocations || item.collocations.length === 0) return null;

  return (
    <div className={cx('', className)}>
      <p className="eyebrow mb-2">Birlikte kullanımlar</p>
      <ul className="flex flex-wrap gap-1.5">
        {item.collocations.map((phrase) => (
          <li key={phrase}>
            <span className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 hairline surface-sunken">
              <span className="tr-word text-[13px]" lang="tr">{phrase}</span>
              <SpeakButton text={phrase} size="xs" variant="ghost" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Related words and antonyms, when the entry carries them. */
export function WordRelations({
  item, className,
}: {
  item: VocabItem;
  className?: string;
}) {
  const hasAny = (item.related?.length ?? 0) + (item.opposite?.length ?? 0) > 0;
  if (!hasAny) return null;

  return (
    <div className={cx('flex flex-wrap gap-x-5 gap-y-2', className)}>
      {item.related && item.related.length > 0 && (
        <div>
          <p className="t-meta mb-1">Yakın anlamlı</p>
          <p className="tr-word text-[13px]" lang="tr">{item.related.join(' · ')}</p>
        </div>
      )}
      {item.opposite && item.opposite.length > 0 && (
        <div>
          <p className="t-meta mb-1">Zıt anlamlı</p>
          <p className="tr-word text-[13px]" lang="tr">{item.opposite.join(' · ')}</p>
        </div>
      )}
    </div>
  );
}
