import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { SEARCH_KIND_LABEL, type SearchKind } from '@/lib/search';
import { LEVEL_ORDER, type LevelId } from '@/types/content';
import { cx } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Card, Chip, EmptyState, LevelBadge, PageHeader,
} from '@/components/ui/Primitives';
import { SpeakButton } from '@/components/audio/SpeakButton';

const KINDS: SearchKind[] = ['letter', 'number', 'word', 'lesson', 'sentence', 'category'];

/**
 * Full search results page. Shows the exact four columns the brief asks for:
 * Turkish | Pronunciation | Arabic | Kurdish | Level.
 */
export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const { search } = useContent();
  const { lang } = useSettings();

  const query = params.get('q') ?? '';
  const [kinds, setKinds] = useState<SearchKind[]>([]);
  const [level, setLevel] = useState<LevelId | 'all'>('all');

  const hits = useMemo(() => search.query(query, {
    limit: 200,
    kinds: kinds.length > 0 ? kinds : undefined,
    level: level === 'all' ? undefined : level,
  }), [search, query, kinds, level]);

  const toggleKind = (kind: SearchKind) => {
    setKinds((prev) => (prev.includes(kind) ? prev.filter((k) => k !== kind) : [...prev, kind]));
  };

  return (
    <div>
      <PageHeader
        eyebrow="Arama"
        icon={<SearchIcon size={14} />}
        title={query ? `“${query}” için sonuçlar` : 'Arama'}
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? 'ابحث بالتركية أو العربية أو الكردية عبر الحروف والأرقام والمفردات والدروس والجمل.'
              : 'بە تورکی یان عەرەبی یان کوردی بگەڕێ بەناو پیت و ژمارە و وشە و وانە و ڕستەکاندا.'}
          </span>
        )}
      />

      {/* Search input */}
      <Card className="mb-5 p-4">
        <div className="relative">
          <SearchIcon size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
            placeholder="Türkçe, عربي veya کوردی…"
            className="input pl-10"
            autoFocus
            aria-label="Arama"
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {KINDS.map((kind) => (
            <button
              key={kind}
              type="button"
              onClick={() => toggleKind(kind)}
              className={cx(
                'rounded-lg px-2.5 py-1.5 text-xs font-semibold transition',
                kinds.includes(kind)
                  ? 'bg-brand-600 text-white'
                  : 'bg-ink-100 text-ink-600 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300',
              )}
            >
              {SEARCH_KIND_LABEL[kind].en}
              <span className="ml-1.5 font-arabic opacity-70" dir="rtl">
                {lang === 'ar' ? SEARCH_KIND_LABEL[kind].ar : SEARCH_KIND_LABEL[kind].ku}
              </span>
            </button>
          ))}
          <span className="mx-1 w-px bg-ink-200 dark:bg-ink-700" />
          <button
            type="button"
            onClick={() => setLevel('all')}
            className={cx(
              'rounded-lg px-2.5 py-1.5 text-xs font-semibold transition',
              level === 'all'
                ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900'
                : 'bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300',
            )}
          >
            Tüm seviyeler
          </button>
          {LEVEL_ORDER.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setLevel(id)}
              className={cx(
                'rounded-lg px-2.5 py-1.5 font-mono text-xs font-semibold transition',
                level === id
                  ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900'
                  : 'bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300',
              )}
            >
              {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
            </button>
          ))}
        </div>
      </Card>

      {!query ? (
        <EmptyState
          icon={<SearchIcon size={22} />}
          title="Aramaya başla"
          description="Bir harf, kelime, dilbilgisi konusu veya cümle yaz. Arama Türkçe aksanlarını ve Arapça yazım farklarını dikkate alır."
        />
      ) : hits.length === 0 ? (
        <EmptyState
          icon={<SearchIcon size={22} />}
          title="Sonuç bulunamadı"
          description="Farklı bir kelime dene ya da filtreleri kaldır."
        />
      ) : (
        <>
          <p className="mb-3 text-sm text-ink-500">
            <strong className="font-display text-ink-900 dark:text-white">{hits.length}</strong> sonuç
          </p>

          <Card className="overflow-hidden">
            {/* Column headers */}
            <div className="hidden border-b border-ink-200 bg-ink-50 py-2.5 pl-[3.4rem] pr-4 text-[11px] font-bold uppercase tracking-wide text-ink-400 dark:border-ink-800 dark:bg-ink-950/60 sm:grid sm:grid-cols-[5rem_1fr_1fr_1fr_1fr_4rem] sm:gap-3">
              <span>Tür</span>
              <span>Türkçe</span>
              <span>Okunuş</span>
              <span>العربية</span>
              <span>کوردی</span>
              <span>Seviye</span>
            </div>

            <ul className="divide-y divide-ink-100 dark:divide-ink-800">
              {hits.map((hit) => (
                <li key={hit.id} className="flex items-center transition hover:bg-ink-50 dark:hover:bg-ink-950/50">
                  <SpeakButton text={hit.tr} size="xs" variant="ghost" className="ml-3 shrink-0" />
                  <Link
                    to={hit.href}
                    className="grid min-w-0 flex-1 gap-2 px-3 py-3 sm:grid-cols-[5rem_1fr_1fr_1fr_1fr_4rem] sm:items-center sm:gap-3"
                  >
                    <span className="shrink-0">
                      <span className="rounded-md bg-ink-100 px-1.5 py-0.5 text-[10px] font-semibold text-ink-500 dark:bg-ink-800 dark:text-ink-400">
                        {SEARCH_KIND_LABEL[hit.kind].en}
                      </span>
                    </span>

                    <span className="tr-word block truncate text-[15px]" lang="tr">{hit.tr}</span>

                    <span className="pron truncate">{hit.pron ?? '—'}</span>

                    <span className="ar-text truncate text-sm text-ink-600 dark:text-ink-300" dir="rtl">
                      {hit.ar}
                    </span>

                    <span className="ku-text truncate text-sm text-ink-600 dark:text-ink-300" dir="rtl">
                      {hit.ku}
                    </span>

                    <span>
                      {hit.level
                        ? <LevelBadge level={hit.level} className="!px-1.5 !py-0 !text-[10px]" />
                        : <Chip tone="neutral">—</Chip>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </>
      )}
    </div>
  );
}
