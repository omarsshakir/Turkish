import { Link } from 'react-router-dom';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { THEME_SECTIONS } from '@content/index';
import { useSettings } from '@/state/SettingsContext';
import { Card, Chip, PageHeader } from '@/components/ui/Primitives';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { TranslationLine } from '@/components/learn/Translation';

/**
 * Thematic sections.
 *
 * The vocabulary page can already filter by category, so this is not a second
 * way to list words — it is the part filtering cannot give you. A filtered list
 * of eleven family words is eleven words; this page says that four of them are
 * `amca`, `dayı`, `hala` and `teyze`, that they split paternal from maternal
 * exactly as عمّ and خال do, and that a student who speaks Arabic therefore
 * already knows the hard part. That sentence is the section.
 *
 * Every word shown is a reference to the vocabulary item, not a copy of it, so
 * a word met here carries the same card, example, audio and progress it has
 * anywhere else in the app.
 */
export default function Themes() {
  const { lang } = useSettings();

  const total = THEME_SECTIONS.reduce((sum, t) => sum + t.wordCount, 0);

  return (
    <div>
      <PageHeader
        eyebrow="Konular"
        icon={<LayoutGrid size={14} />}
        title="Konu Başlıkları"
        description={(
          <span
            className={lang === 'ar' ? 'ar-text block' : 'ku-text block'}
            dir="rtl"
            lang={lang === 'ar' ? 'ar' : 'ckb'}
          >
            {lang === 'ar'
              ? 'ثمانية أبواب مرتّبة بالمعنى لا بالحرف: الأيام والشهور، الألوان، أعضاء الجسم، العائلة، الاتجاهات، الفواكه والخضار، الحيوانات، والأضداد. كل كلمة هنا هي نفسها الموجودة في قسم المفردات، بالنطق والترجمة والمثال والتقدّم ذاته.'
              : 'هەشت بابەت بەپێی واتا ڕێکخراون نەک بەپێی پیت: ڕۆژان و مانگەکان، ڕەنگەکان، ئەندامانی لەش، خێزان، ئاراستەکان، میوە و سەوزە، ئاژەڵەکان و دژوواتەکان. هەموو وشەیەک هەمان ئەو وشەیەیە کە لە بەشی وشەکاندایە.'}
          </span>
        )}
        action={<Chip tone="brass">{total} kelime</Chip>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {THEME_SECTIONS.map((theme) => (
          <Link
            key={theme.id}
            to={`/themes/${theme.id}`}
            className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <Card className="h-full p-5 transition duration-200 group-hover:-translate-y-0.5 group-hover:border-brand-300 group-hover:shadow-lift dark:group-hover:border-brand-700">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition duration-150 group-hover:bg-brand-700 group-hover:text-white dark:bg-brand-950 dark:text-brand-300 dark:ring-brand-900">
                  <CategoryIcon name={theme.icon} size={20} />
                </span>
                <Chip tone="neutral">{theme.wordCount}</Chip>
              </div>

              <h2 className="mt-4 font-display text-lg font-semibold text-primary" lang="tr">
                {theme.title}
              </h2>
              <div className="mt-1">
                <TranslationLine
                  text={lang === 'ar' ? theme.label.ar : theme.label.ku}
                  lang={lang}
                  size="sm"
                />
              </div>

              <p className="mt-3 text-xs text-muted">
                {theme.groups.length} bölüm ·{' '}
                {theme.groups.map((g) => g.title).join(' · ')}
              </p>

              <span className="link-action mt-3 group-hover:underline">
                Aç
                <ArrowRight size={13} aria-hidden />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
