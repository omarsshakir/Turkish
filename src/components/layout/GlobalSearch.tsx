import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CornerDownLeft, Search, X } from 'lucide-react';
import { SEARCH_KIND_LABEL, type SearchHit } from '@/lib/search';
import { cx } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useSettings } from '@/state/SettingsContext';
import { LevelBadge } from '@/components/ui/Primitives';
import { SpeakButton } from '@/components/audio/SpeakButton';

/**
 * Global search box. Searches Turkish, Arabic and Kurdish across letters,
 * numbers, words, grammar lessons, sentences and categories, and shows the
 * four-column result the spec asks for: Turkish | Pronunciation | AR | KU.
 */
export function GlobalSearch() {
  const { search } = useContent();
  const { lang } = useSettings();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const hits = useMemo(
    () => (query.trim().length > 0 ? search.query(query, { limit: 9 }) : []),
    [query, search],
  );

  useEffect(() => setActive(0), [query]);

  // Ctrl/Cmd+K focuses the box from anywhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Click outside closes the dropdown.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const go = (hit: SearchHit) => {
    navigate(hit.href);
    setOpen(false);
    setQuery('');
    inputRef.current?.blur();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, hits.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (hits[active]) go(hits[active]);
      else if (query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
        setOpen(false);
      }
    }
  };

  return (
    <div ref={boxRef} className="relative max-w-xl">
      <div className="relative">
        <Search
          size={17}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
        />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Ara: harf, kelime, dilbilgisi…"
          aria-label="Genel arama"
          className="input !py-2.5 pl-10 pr-20"
        />
        <div className="absolute right-2.5 top-1/2 flex -translate-y-1/2 items-center gap-1">
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); inputRef.current?.focus(); }}
              className="grid h-6 w-6 place-items-center rounded-md text-ink-400 hover:bg-ink-100 hover:text-ink-600 dark:hover:bg-ink-800"
              aria-label="Temizle"
            >
              <X size={14} />
            </button>
          )}
          <kbd className="hidden rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-ink-400 dark:border-ink-700 dark:bg-ink-800 sm:block">
            ⌘K
          </kbd>
        </div>
      </div>

      {open && query.trim().length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-lift animate-fade-up dark:border-ink-700 dark:bg-ink-900">
          {hits.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-ink-400">
              Sonuç bulunamadı.
            </p>
          ) : (
            <>
              <ul className="max-h-[24rem] overflow-y-auto py-1.5">
                {hits.map((hit, i) => (
                  <li
                    key={hit.id}
                    onMouseEnter={() => setActive(i)}
                    className={cx(
                      'flex items-center gap-2 pr-2 transition',
                      i === active
                        ? 'bg-brand-50 dark:bg-brand-950/50'
                        : 'hover:bg-ink-50 dark:hover:bg-ink-800/60',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => go(hit)}
                      className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-left"
                    >
                      <span className="w-14 shrink-0">
                        <span className="rounded-md bg-ink-100 px-1.5 py-0.5 text-[10px] font-semibold text-ink-500 dark:bg-ink-800 dark:text-ink-400">
                          {SEARCH_KIND_LABEL[hit.kind].en}
                        </span>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline gap-2">
                          <span className="tr-word truncate text-[15px]" lang="tr">{hit.tr}</span>
                          {hit.pron && <span className="pron truncate">{hit.pron}</span>}
                        </span>
                        <span
                          className={cx('mt-0.5 block truncate text-xs text-ink-500 dark:text-ink-400', lang === 'ar' ? 'ar-text' : 'ku-text')}
                          dir="rtl"
                        >
                          {lang === 'ar' ? hit.ar : hit.ku}
                        </span>
                      </span>
                      {hit.level && <LevelBadge level={hit.level} />}
                    </button>
                    <SpeakButton text={hit.tr} size="xs" variant="ghost" />
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => { navigate(`/search?q=${encodeURIComponent(query)}`); setOpen(false); }}
                className="flex w-full items-center justify-center gap-2 border-t border-ink-200 px-4 py-2.5 text-xs font-semibold text-brand-600 transition hover:bg-brand-50 dark:border-ink-700 dark:text-brand-400 dark:hover:bg-brand-950/40"
              >
                Tüm sonuçları gör
                <CornerDownLeft size={12} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
