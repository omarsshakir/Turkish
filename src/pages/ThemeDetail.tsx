import { Link, useParams } from 'react-router-dom';
import { ArrowLeftRight, ChevronLeft, LayoutGrid } from 'lucide-react';
import type { ResolvedThemeEntry, ResolvedThemeGroup } from '@/types/content';
import { THEME_BY_ID } from '@content/index';
import { useSettings } from '@/state/SettingsContext';
import { Card, Chip, EmptyState, PageHeader } from '@/components/ui/Primitives';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { SpeakButton } from '@/components/audio/SpeakButton';
import { Translated, TranslationLine } from '@/components/learn/Translation';
import { VocabRow } from '@/components/learn/VocabRow';

/**
 * One thematic section.
 *
 * Three shapes of group, chosen by what the data carries rather than by the
 * theme's name:
 *
 *   - a group whose entries have a `swatch` gets a palette above the list,
 *     because a colour word is not learnable from its translation alone;
 *   - a group of antonym pairs renders both halves side by side, since the
 *     pairing is the content;
 *   - everything else is the ordinary vocabulary list, which means audio,
 *     the example sentence, "learned" and favourites all work here exactly as
 *     they do on the vocabulary page. That is the payoff of referencing words
 *     rather than restating them.
 */
export default function ThemeDetail() {
  const { themeId } = useParams();
  const { lang } = useSettings();
  const theme = THEME_BY_ID[themeId ?? ''];

  if (!theme) {
    return (
      <EmptyState
        headingLevel={1}
        icon={<LayoutGrid size={22} />}
        title="Konu bulunamadı"
        description={lang === 'ar'
          ? 'لا يوجد باب بهذا الاسم. عد إلى قائمة الأبواب.'
          : 'بابەتێک بەم ناوە نییە. بگەڕێوە بۆ لیستی بابەتەکان.'}
        action={<Link to="/themes" className="btn-primary">Konu Başlıkları</Link>}
      />
    );
  }

  return (
    <div>
      <Link to="/themes" className="link-action mb-3">
        <ChevronLeft size={13} aria-hidden />
        Konu Başlıkları
      </Link>

      <PageHeader
        eyebrow="Konu"
        icon={<CategoryIcon name={theme.icon} size={14} />}
        title={theme.title}
        description={(
          <TranslationLine
            text={lang === 'ar' ? theme.label.ar : theme.label.ku}
            lang={lang}
          />
        )}
        action={<Chip tone="brass">{theme.wordCount} kelime</Chip>}
      />

      {/* The reason the theme exists. */}
      <Card className="mb-6 border-2 border-brand-200 bg-brand-50/60 p-5 dark:border-brand-900 dark:bg-brand-950/30" edge={false}>
        <p className="eyebrow mb-2">Arapça ve Kürtçe konuşanlar için</p>
        <Translated value={theme.intro} />
      </Card>

      <div className="space-y-6">
        {theme.groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function GroupCard({ group }: { group: ResolvedThemeGroup }) {
  const { lang } = useSettings();
  const swatches = group.words.filter((w) => w.swatch);
  const isPairs = group.words.some((w) => w.oppositeItem);

  return (
    <section>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="t-h2 text-primary" lang="tr">{group.title}</h2>
          <TranslationLine
            text={lang === 'ar' ? group.label.ar : group.label.ku}
            lang={lang}
            size="sm"
          />
        </div>
        <Chip tone="neutral">{group.words.length}</Chip>
      </div>

      {group.note && (
        <Card className="mb-3 p-4">
          <Translated value={group.note} size="sm" />
        </Card>
      )}

      {swatches.length > 0 && (
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {swatches.map((entry) => (
            <div
              key={entry.item.id}
              className="overflow-hidden rounded-xl border border-ink-200 dark:border-ink-800"
            >
              {/* Decorative: the word underneath carries the meaning. */}
              <span
                className="block h-12 w-full"
                style={{ backgroundColor: entry.swatch }}
                aria-hidden
              />
              <span className="block px-2.5 py-2 text-center tr-word text-sm" lang="tr">
                {entry.item.tr}
              </span>
            </div>
          ))}
        </div>
      )}

      {isPairs ? (
        <div className="grid gap-2.5 sm:grid-cols-2">
          {group.words.map((entry) => (
            <PairRow key={`${entry.item.id}-${entry.oppositeItem?.id}`} entry={entry} />
          ))}
        </div>
      ) : (
        <Card className="overflow-hidden">
          <ul className="divide-y divide-ink-100 dark:divide-ink-800">
            {group.words.map((entry) => (
              <VocabRow key={entry.item.id} item={entry.item} showLevel />
            ))}
          </ul>
        </Card>
      )}
    </section>
  );
}

/** One antonym pair, both halves given equal weight. */
function PairRow({ entry }: { entry: ResolvedThemeEntry }) {
  const opposite = entry.oppositeItem;
  if (!opposite) return null;

  return (
    <Card className="flex items-stretch gap-2 p-3">
      <Half item={entry.item} />
      <span
        className="grid w-7 shrink-0 place-items-center self-center text-ink-300 dark:text-ink-600"
        aria-hidden
      >
        <ArrowLeftRight size={14} />
      </span>
      <Half item={opposite} align="right" />
    </Card>
  );
}

function Half({
  item, align = 'left',
}: {
  item: { id: string; tr: string; pron: string; ar: string; ku: string };
  align?: 'left' | 'right';
}) {
  const { showPronunciation } = useSettings();
  return (
    <div className={`min-w-0 flex-1 ${align === 'right' ? 'text-right' : ''}`}>
      <div className={`flex items-center gap-1.5 ${align === 'right' ? 'justify-end' : ''}`}>
        <span className="tr-word truncate text-[15px]" lang="tr">{item.tr}</span>
        <SpeakButton text={item.tr} size="xs" variant="ghost" />
      </div>
      {showPronunciation && <p className="pron mt-0.5 truncate">{item.pron}</p>}
      <div className={`mt-1.5 ${align === 'right' ? 'flex justify-end' : ''}`}>
        <Translated value={{ ar: item.ar, ku: item.ku }} size="sm" />
      </div>
    </div>
  );
}
