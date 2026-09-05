import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, Check, Filter, Search, SlidersHorizontal, Star, X } from 'lucide-react';
import { LEVEL_ORDER, type LevelId } from '@/types/content';
import { cx, fold, foldArabic, percent } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, EmptyState, LevelBadge, PageHeader, ProgressBar,
} from '@/components/ui/Primitives';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { VocabRow } from '@/components/learn/VocabRow';

type Status = 'all' | 'learned' | 'unlearned' | 'favorites';

export default function Vocabulary() {
  const { vocabulary, categories } = useContent();
  const { lang } = useSettings();
  const progress = useProgress();
  const [params, setParams] = useSearchParams();

  const [query, setQuery] = useState(params.get('q') ?? '');
  const [level, setLevel] = useState<LevelId | 'all'>('all');
  const [category, setCategory] = useState<string>(params.get('category') ?? 'all');
  const [status, setStatus] = useState<Status>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim();
    const qTr = fold(q);
    const qAr = foldArabic(q);

    return vocabulary.filter((item) => {
      if (level !== 'all' && item.level !== level) return false;
      if (category !== 'all' && item.category !== category) return false;

      if (status === 'learned' && !progress.learnedWords.includes(item.id)) return false;
      if (status === 'unlearned' && progress.learnedWords.includes(item.id)) return false;
      if (status === 'favorites' && !progress.favoriteWords.includes(item.id)) return false;

      if (q.length === 0) return true;

      return (
        fold(item.tr).includes(qTr)
        || fold(item.pron).includes(qTr)
        || foldArabic(item.ar).includes(qAr)
        || foldArabic(item.ku).includes(qAr)
        || (item.example ? fold(item.example.tr).includes(qTr) : false)
      );
    });
  }, [vocabulary, query, level, category, status, progress.learnedWords, progress.favoriteWords]);

  const learnedInView = filtered.filter((i) => progress.learnedWords.includes(i.id)).length;

  const resetFilters = () => {
    setQuery('');
    setLevel('all');
    setCategory('all');
    setStatus('all');
    setParams({});
  };

  const activeFilterCount = [
    level !== 'all', category !== 'all', status !== 'all',
  ].filter(Boolean).length;

  return (
    <div>
      <PageHeader
        eyebrow="Kelimeler"
        icon={<BookOpen size={14} />}
        title="Kelime Gezgini"
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? `ابحث في ${vocabulary.length} كلمة بالتركية أو العربية أو الكردية. صفِّ حسب المستوى والتصنيف، واستمع للنطق، وضع علامة على ما تعلّمته.`
              : `لە ${vocabulary.length} وشەدا بگەڕێ بە تورکی یان عەرەبی یان کوردی. بەپێی ئاست و پۆل پاڵاوتنی بکە و گوێ لە دەربڕین بگرە.`}
          </span>
        )}
      />

      {/* Search + filter bar */}
      <Card className="mb-5 p-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative min-w-[16rem] flex-1">
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Türkçe, عربي veya کوردی ara…"
              className="input pl-10"
              aria-label="Kelime ara"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-md text-ink-400 hover:bg-ink-100 dark:hover:bg-ink-800"
                aria-label="Temizle"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <Button
            variant={showFilters || activeFilterCount > 0 ? 'primary' : 'secondary'}
            icon={<SlidersHorizontal size={15} />}
            onClick={() => setShowFilters((s) => !s)}
          >
            Filtreler
            {activeFilterCount > 0 && (
              <span className="ml-1 rounded-full bg-white/25 px-1.5 text-[10px] font-bold">
                {activeFilterCount}
              </span>
            )}
          </Button>

          {(activeFilterCount > 0 || query) && (
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              Sıfırla
            </Button>
          )}
        </div>

        {showFilters && (
          <div className="mt-4 space-y-4 border-t border-ink-200 pt-4 animate-fade-up dark:border-ink-800">
            <FilterGroup label="Seviye">
              <FilterChip active={level === 'all'} onClick={() => setLevel('all')}>
                Hepsi
              </FilterChip>
              {LEVEL_ORDER.map((id) => (
                <FilterChip key={id} active={level === id} onClick={() => setLevel(id)}>
                  {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
                </FilterChip>
              ))}
            </FilterGroup>

            <FilterGroup label="Durum">
              {([
                ['all', 'Hepsi'], ['unlearned', 'Öğrenilmedi'],
                ['learned', 'Öğrenildi'], ['favorites', 'Favoriler'],
              ] as const).map(([id, label]) => (
                <FilterChip key={id} active={status === id} onClick={() => setStatus(id)}>
                  {id === 'learned' && <Check size={12} />}
                  {id === 'favorites' && <Star size={12} />}
                  {label}
                </FilterChip>
              ))}
            </FilterGroup>

            <FilterGroup label="Kategori">
              <FilterChip active={category === 'all'} onClick={() => setCategory('all')}>
                Hepsi
              </FilterChip>
              {categories.map((cat) => (
                <FilterChip
                  key={cat.id}
                  active={category === cat.id}
                  onClick={() => setCategory(cat.id)}
                >
                  <CategoryIcon name={cat.icon} size={12} />
                  {cat.tr}
                </FilterChip>
              ))}
            </FilterGroup>
          </div>
        )}
      </Card>

      {/* Result summary */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-500 dark:text-ink-400">
          <strong className="font-display text-ink-900 dark:text-white">{filtered.length}</strong>
          {' '}kelime
          {filtered.length > 0 && (
            <span className="ml-2 text-emerald-600 dark:text-emerald-400">
              · {learnedInView} öğrenildi
            </span>
          )}
        </p>
        {filtered.length > 0 && (
          <div className="flex items-center gap-3">
            <ProgressBar
              value={percent(learnedInView, filtered.length)}
              className="w-32"
              size="sm"
              tone="green"
              showLabel
            />
            <Button
              size="sm"
              variant="secondary"
              icon={<Check size={13} />}
              onClick={() => progress.markManyLearned(filtered.map((i) => i.id))}
            >
              Hepsini işaretle
            </Button>
          </div>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <EmptyState
          icon={<Filter size={22} />}
          title="Sonuç bulunamadı"
          description="Arama terimini değiştir veya filtreleri sıfırla."
          action={<Button variant="secondary" onClick={resetFilters}>Filtreleri sıfırla</Button>}
        />
      ) : (
        <Card className="overflow-hidden">
          <ul className="divide-y divide-ink-100 dark:divide-ink-800">
            {filtered.slice(0, 300).map((item) => (
              <VocabRow key={item.id} item={item} showLevel showCategory />
            ))}
          </ul>
          {filtered.length > 300 && (
            <p className="border-t border-ink-200 px-4 py-3 text-center text-xs text-ink-400 dark:border-ink-800">
              İlk 300 sonuç gösteriliyor. Aramayı daraltmak için filtre kullan.
            </p>
          )}
        </Card>
      )}

      {/* Category overview */}
      {category === 'all' && !query && (
        <section className="mt-8">
          <h2 className="mb-4 font-display text-lg font-bold text-ink-950 dark:text-white">
            Kategoriler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const count = vocabulary.filter((v) => v.category === cat.id).length;
              const learned = vocabulary.filter(
                (v) => v.category === cat.id && progress.learnedWords.includes(v.id),
              ).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => { setCategory(cat.id); window.scrollTo({ top: 0 }); }}
                  className="card card-hover p-4 text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                      <CategoryIcon name={cat.icon} />
                    </span>
                    <LevelBadge level={cat.level} />
                  </div>
                  <p className="mt-3 font-display font-semibold text-ink-900 dark:text-white">
                    {cat.tr}
                  </p>
                  <p className="ar-text text-xs text-ink-500 dark:text-ink-400" dir="rtl">
                    {lang === 'ar' ? cat.labelI18n.ar : cat.labelI18n.ku}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <ProgressBar value={percent(learned, count)} size="sm" tone="green" />
                    <span className="shrink-0 font-mono text-[11px] tabular-nums text-ink-400">
                      {learned}/{count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-ink-400">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function FilterChip({
  active, onClick, children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition',
        active
          ? 'bg-brand-600 text-white'
          : 'bg-ink-100 text-ink-600 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300 dark:hover:bg-ink-700',
      )}
    >
      {children}
    </button>
  );
}

export { Chip };
