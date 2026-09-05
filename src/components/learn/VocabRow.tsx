import { useState } from 'react';
import { ArrowLeftRight, Check, ChevronDown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { VocabItem } from '@/types/content';
import { cx } from '@/lib/utils';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import { SpeakButton } from '@/components/audio/SpeakButton';
import { LevelBadge } from '@/components/ui/Primitives';
import { Translated } from './Translation';
import { Collocations, SenseHint, SenseList, WordRelations } from './Senses';

/**
 * One vocabulary item: Turkish, pronunciation, translations, audio, plus the
 * "learned" and "favourite" controls. Expands to show the example sentence.
 */
export function VocabRow({
  item, showLevel = false, showCategory = false, defaultOpen = false,
}: {
  item: VocabItem;
  showLevel?: boolean;
  showCategory?: boolean;
  defaultOpen?: boolean;
}) {
  const { isLearned, toggleLearned, isFavorite, toggleFavorite } = useProgress();
  const { showPronunciation } = useSettings();
  const [open, setOpen] = useState(defaultOpen);

  const learned = isLearned(item.id);
  const favorite = isFavorite(item.id);
  // A word with extra senses is worth expanding even without an example.
  const hasExample = Boolean(item.example)
    || Boolean(item.senses?.length)
    || Boolean(item.collocations?.length)
    || Boolean(item.note)
    || Boolean(item.arabic);

  return (
    <li className={cx('transition', learned && 'bg-emerald-50/40 dark:bg-emerald-950/15')}>
      <div className="flex items-center gap-3 px-4 py-3">
        <SpeakButton text={item.tr} size="sm" />

        <button
          type="button"
          onClick={() => hasExample && setOpen((o) => !o)}
          className={cx('min-w-0 flex-1 text-left', hasExample && 'cursor-pointer')}
        >
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="tr-word text-[15px]" lang="tr">{item.tr}</span>
            {showPronunciation && <span className="pron">{item.pron}</span>}
            {showLevel && <LevelBadge level={item.level} className="!px-1.5 !py-0 !text-[10px]" />}
            {item.arabic && (
              <span
                className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-brass-700 ring-1 ring-inset ring-brass-200 dark:text-brass-300 dark:ring-brass-800"
                title="Arapçayla bağlantılı"
              >
                <ArrowLeftRight size={9} aria-hidden />
                {item.arabic.ar}
              </span>
            )}
            {showCategory && (
              <span className="rounded bg-ink-100 px-1.5 py-0.5 text-[10px] font-medium text-ink-500 dark:bg-ink-800 dark:text-ink-400">
                {item.category}
              </span>
            )}
          </div>
          <div className="mt-1">
            <Translated value={{ ar: item.ar, ku: item.ku }} size="sm" />
          </div>
          <SenseHint item={item} className="mt-1" />
        </button>

        <div className="flex shrink-0 items-center gap-1">
          {hasExample && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Örnek cümleyi göster"
              className="grid h-8 w-8 place-items-center rounded-lg text-ink-400 transition hover:bg-ink-100 hover:text-ink-600 dark:hover:bg-ink-800"
            >
              <ChevronDown size={15} className={cx('transition-transform', open && 'rotate-180')} />
            </button>
          )}
          <button
            type="button"
            onClick={() => toggleFavorite(item.id)}
            aria-label={favorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            aria-pressed={favorite}
            className={cx(
              'grid h-8 w-8 place-items-center rounded-lg transition',
              favorite
                ? 'text-accent-500 hover:bg-accent-50 dark:hover:bg-accent-950/40'
                : 'text-ink-300 hover:bg-ink-100 hover:text-ink-500 dark:text-ink-600 dark:hover:bg-ink-800',
            )}
          >
            <Star size={15} fill={favorite ? 'currentColor' : 'none'} />
          </button>
          <button
            type="button"
            onClick={() => toggleLearned(item.id)}
            aria-label={learned ? 'Öğrenilmedi olarak işaretle' : 'Öğrenildi olarak işaretle'}
            aria-pressed={learned}
            className={cx(
              'grid h-8 w-8 place-items-center rounded-lg transition',
              learned
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'text-ink-300 hover:bg-ink-100 hover:text-emerald-600 dark:text-ink-600 dark:hover:bg-ink-800',
            )}
          >
            <Check size={15} />
          </button>
        </div>
      </div>

      {open && (item.example || item.senses?.length || item.collocations?.length
        || item.note || item.arabic) && (
        <div className="animate-fade-up space-y-3 px-4 pb-4 pl-[3.75rem]">
          {item.senses && item.senses.length > 0 && (
            <div className="rounded-xl border p-3.5 hairline">
              <SenseList item={item} />
            </div>
          )}
          {(item.collocations?.length || item.related?.length || item.opposite?.length) && (
            <div className="space-y-3 rounded-xl border p-3.5 hairline">
              <Collocations item={item} />
              <WordRelations item={item} />
            </div>
          )}
          {item.note && (
            <div className="rounded-xl border-l-2 border-brass-400 py-1 pl-3">
              <Translated value={item.note} size="sm" />
            </div>
          )}
          {/* §8 — discovery where the student already is. One line, one link,
              no popup. */}
          {item.arabic && (
            <div className="rounded-xl border border-brass-200 bg-brass-50 p-3.5 dark:border-brass-900 dark:bg-brass-950/40">
              <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[.14em] text-brass-700 dark:text-brass-300">
                Bu kelimeyi Arapçadan biliyor olabilirsin
              </p>
              <p className="ar-text text-lg text-primary" dir="rtl" lang="ar">
                {item.arabic.ar}
              </p>
              <div className="mt-1.5">
                <Translated value={item.arabic.note} size="sm" />
              </div>
              <Link
                to={`/connections?q=${encodeURIComponent(item.tr)}`}
                className="link-action mt-2"
              >
                Bağlantıyı incele
                <ArrowLeftRight size={12} />
              </Link>
            </div>
          )}
          {item.example && !item.senses?.length && (
          <div className="rounded-xl border border-ink-200 bg-ink-50 p-3.5 dark:border-ink-800 dark:bg-ink-950/60">
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <p className="tr-word text-sm" lang="tr">{item.example.tr}</p>
                {showPronunciation && <p className="pron mt-0.5">{item.example.pron}</p>}
                <div className="mt-2">
                  <Translated value={{ ar: item.example.ar, ku: item.example.ku }} size="sm" />
                </div>
              </div>
              <SpeakButton text={item.example.tr} size="sm" variant="ghost" />
            </div>
          </div>
          )}
        </div>
      )}
    </li>
  );
}

/** Compact card variant used in grids (favourites, category browsing). */
export function VocabCard({ item }: { item: VocabItem }) {
  const { isLearned, toggleLearned, isFavorite, toggleFavorite } = useProgress();
  const { showPronunciation } = useSettings();
  const learned = isLearned(item.id);
  const favorite = isFavorite(item.id);

  return (
    <article className={cx(
      'card card-hover flex flex-col p-4',
      learned && 'border-emerald-300 dark:border-emerald-800',
    )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="tr-word text-lg leading-tight" lang="tr">{item.tr}</p>
          {showPronunciation && <p className="pron mt-0.5">{item.pron}</p>}
        </div>
        <SpeakButton text={item.tr} size="sm" />
      </div>

      <div className="mt-3 flex-1">
        <Translated value={{ ar: item.ar, ku: item.ku }} size="sm" />
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 border-t border-ink-100 pt-3 dark:border-ink-800">
        <LevelBadge level={item.level} className="!px-1.5 !py-0 !text-[10px]" />
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => toggleFavorite(item.id)}
            aria-label="Favori"
            className={cx(
              'grid h-7 w-7 place-items-center rounded-lg transition',
              favorite ? 'text-accent-500' : 'text-ink-300 hover:text-ink-500 dark:text-ink-600',
            )}
          >
            <Star size={14} fill={favorite ? 'currentColor' : 'none'} />
          </button>
          <button
            type="button"
            onClick={() => toggleLearned(item.id)}
            aria-label="Öğrenildi"
            className={cx(
              'grid h-7 w-7 place-items-center rounded-lg transition',
              learned
                ? 'bg-emerald-500 text-white'
                : 'text-ink-300 hover:text-emerald-600 dark:text-ink-600',
            )}
          >
            <Check size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
