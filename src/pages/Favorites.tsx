import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, LayoutGrid, List, Star } from 'lucide-react';
import { cx } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, EmptyState, PageHeader,
} from '@/components/ui/Primitives';
import { SpeakSequenceButton } from '@/components/audio/SpeakButton';
import { VocabCard, VocabRow } from '@/components/learn/VocabRow';

export default function Favorites() {
  const { vocabulary } = useContent();
  const { lang } = useSettings();
  const { favoriteWords } = useProgress();
  const [view, setView] = useState<'list' | 'grid'>('list');

  const items = useMemo(
    () => vocabulary.filter((w) => favoriteWords.includes(w.id)),
    [vocabulary, favoriteWords],
  );

  const byLevel = useMemo(() => {
    const groups: Record<string, typeof items> = {};
    for (const item of items) {
      (groups[item.level] ??= []).push(item);
    }
    return groups;
  }, [items]);

  return (
    <div>
      <PageHeader
        eyebrow="Favoriler"
        icon={<Star size={14} />}
        title="Yıldızladığın Kelimeler"
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? 'الكلمات التي وضعت عليها نجمة. استخدمها لبناء جلسة مراجعة مخصّصة لنقاط ضعفك.'
              : 'ئەو وشانەی ئەستێرەت لەسەر داناون. بۆ دروستکردنی خولێکی پێداچوونەوەی تایبەت بەکاریان بهێنە.'}
          </span>
        )}
        action={items.length > 0 ? (
          <div className="flex items-center gap-2">
            <SpeakSequenceButton texts={items.map((i) => i.tr)} label="Hepsini dinle" />
            <div className="inline-flex rounded-xl bg-ink-100 p-0.5 dark:bg-ink-800">
              {([['list', List], ['grid', LayoutGrid]] as const).map(([id, Icon]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setView(id)}
                  aria-label={id}
                  className={cx(
                    'grid h-8 w-8 place-items-center rounded-[10px] transition',
                    view === id
                      ? 'bg-white text-brand-600 shadow-sm dark:bg-ink-950'
                      : 'text-ink-500 hover:text-ink-700',
                  )}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>
        ) : undefined}
      />

      {items.length === 0 ? (
        <EmptyState
          icon={<Star size={22} />}
          title="Henüz favori kelimen yok"
          description="Kelime Gezgini'nde herhangi bir kelimenin yanındaki yıldıza dokunarak buraya ekleyebilirsin."
          action={<Link to="/vocabulary" className="btn-primary">Kelime Gezgini'ne git</Link>}
        />
      ) : (
        <>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Chip tone="accent" icon={<Star size={12} />}>{items.length} kelime</Chip>
              {Object.entries(byLevel).map(([level, group]) => (
                <Chip key={level} tone="neutral">
                  {level === 'c1plus' ? 'C1+' : level.toUpperCase()}: {group.length}
                </Chip>
              ))}
            </div>
            <Link to="/practice/vocabulary" className="btn-primary btn-sm">
              <Brain size={14} />
              Favorilerle alıştırma yap
            </Link>
          </div>

          {view === 'list' ? (
            <Card className="overflow-hidden">
              <ul className="divide-y divide-ink-100 dark:divide-ink-800">
                {items.map((item) => (
                  <VocabRow key={item.id} item={item} showLevel showCategory />
                ))}
              </ul>
            </Card>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <VocabCard key={item.id} item={item} />
              ))}
            </div>
          )}

          <Card className="mt-6 p-5">
            <p className="ar-text text-sm text-ink-600 dark:text-ink-300" dir="rtl">
              {lang === 'ar'
                ? 'نصيحة: راجع مفضّلاتك كل يومين. الكلمة التي تراها خمس مرات على فترات متباعدة تبقى في ذاكرتك طويلاً.'
                : 'ئامۆژگاری: هەر دوو ڕۆژ جارێک دڵخوازەکانت پێداچووەوە. ئەو وشەیەی پێنج جار بە ماوەی دوور لە یەک ببینیت، ماوەیەکی درێژ لە یادت دەمێنێتەوە.'}
            </p>
          </Card>
        </>
      )}
    </div>
  );
}

export { Button };
