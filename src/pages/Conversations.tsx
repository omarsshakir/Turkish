import { MessagesSquare } from 'lucide-react';
import { useContent } from '@/state/ContentContext';
import { useSettings } from '@/state/SettingsContext';
import { EmptyState, PageHeader } from '@/components/ui/Primitives';
import { LessonCard } from './Lesson';

/** All conversation lessons, grouped by level. */
export default function Conversations() {
  const { visibleLessons, levels } = useContent();
  const { lang } = useSettings();

  const conversations = visibleLessons.filter((l) => l.kind === 'conversation');

  return (
    <div>
      <PageHeader
        eyebrow="Konuşmalar"
        icon={<MessagesSquare size={14} />}
        title="Gerçek Hayat Diyalogları"
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? 'حوارات كاملة في مواقف حقيقية: أول لقاء، عند الطبيب، استئجار شقة، مقابلة عمل، نقاش أكاديمي. كل سطر مسموع ومترجم.'
              : 'گفتوگۆی تەواو لە دۆخی ڕاستەقینەدا: یەکەم ناسین، لای پزیشک، بەکرێگرتنی ماڵ، چاوپێکەوتنی کار، گفتوگۆی ئەکادیمی. هەر دێڕێک دەنگدار و وەرگێڕدراوە.'}
          </span>
        )}
      />

      {conversations.length === 0 ? (
        <EmptyState icon={<MessagesSquare size={22} />} title="Henüz konuşma dersi yok." />
      ) : (
        <div className="space-y-7">
          {levels.map((level) => {
            const items = conversations.filter((c) => c.level === level.id);
            if (items.length === 0) return null;
            return (
              <section key={level.id}>
                <div className="mb-3 flex items-center gap-3">
                  <span className={`grid h-9 w-12 place-items-center rounded-lg bg-gradient-to-br ${level.gradient} font-display text-xs font-bold text-white`}>
                    {level.code}
                  </span>
                  <h2 className="font-display text-lg font-bold text-ink-950 dark:text-white">
                    {level.name}
                  </h2>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {items.map((lesson) => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
