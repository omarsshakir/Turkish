import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Waypoints } from 'lucide-react';
import { LEVEL_ORDER, type LevelId } from '@/types/content';
import { cx, percent } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, LevelBadge, PageHeader, ProgressBar,
} from '@/components/ui/Primitives';
import { SpeakSequenceButton } from '@/components/audio/SpeakButton';
import { PhraseRow, Translated } from '@/components/learn/Translation';

/**
 * Sentence packs: the bridge between vocabulary and free speech. Each pack is
 * a communicative function (introduce yourself, ask directions, argue a point)
 * rather than a grammar point.
 */
export default function Sentences() {
  const { sentencesFor } = useContent();
  const { lang } = useSettings();
  const { completedSentencePacks, completeSentencePack } = useProgress();
  const [level, setLevel] = useState<LevelId>('a1');

  const packs = sentencesFor(level);
  const allPacks = useMemo(
    () => LEVEL_ORDER.flatMap((id) => sentencesFor(id)),
    [sentencesFor],
  );
  const doneCount = allPacks.filter((p) => completedSentencePacks.includes(p.id)).length;

  return (
    <div>
      <PageHeader
        eyebrow="Cümleler"
        icon={<Waypoints size={14} />}
        title="Cümle Kurma Yolu"
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? 'حروف ← أصوات ← كلمات ← عبارات ← جمل بسيطة ← جمل مركّبة ← تعبير متقدّم. كل مجموعة هنا تخدم موقفاً حقيقياً تحتاجه.'
              : 'پیت ← دەنگ ← وشە ← دەستەواژە ← ڕستەی سادە ← ڕستەی ئاڵۆز ← دەربڕینی پێشکەوتوو. هەر کۆمەڵێک لێرەدا دۆخێکی ڕاستەقینە دەگرێتەوە.'}
          </span>
        )}
        action={(
          <Chip tone="brand">{doneCount} / {allPacks.length} paket</Chip>
        )}
      />

      {/* Progression rail */}
      <Card className="mb-6 overflow-x-auto p-5">
        <div className="flex min-w-max items-center gap-2">
          {['Harfler', 'Sesler', 'Kelimeler', 'Kalıplar', 'Basit cümle', 'Karmaşık cümle', 'İleri anlatım']
            .map((stage, i, arr) => (
              <div key={stage} className="flex items-center gap-2">
                <span className={cx(
                  'whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold',
                  i <= 3
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300'
                    : 'bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400',
                )}
                >
                  {stage}
                </span>
                {i < arr.length - 1 && <ArrowRight size={13} className="shrink-0 text-ink-300" />}
              </div>
            ))}
        </div>
      </Card>

      {/* Level tabs */}
      <div className="mb-5 flex flex-wrap gap-2">
        {LEVEL_ORDER.map((id) => {
          const count = sentencesFor(id).length;
          if (count === 0) return null;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setLevel(id)}
              className={cx(
                'rounded-xl px-4 py-2 text-sm font-semibold transition',
                level === id
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-white text-ink-600 ring-1 ring-inset ring-ink-200 hover:bg-ink-50 dark:bg-ink-900 dark:text-ink-300 dark:ring-ink-700',
              )}
            >
              {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
              <span className="ml-1.5 opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Packs */}
      <div className="space-y-5">
        {packs.map((pack) => {
          const done = completedSentencePacks.includes(pack.id);
          return (
            <Card key={pack.id} id={pack.id} className="overflow-hidden scroll-mt-24">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-ink-200 p-5 dark:border-ink-800">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-lg font-bold text-ink-900 dark:text-white">
                      {pack.title}
                    </h2>
                    <LevelBadge level={pack.level} />
                    {done && <Chip tone="green" icon={<CheckCircle2 size={12} />}>Bitti</Chip>}
                  </div>
                  <div className="mt-1">
                    <Translated value={pack.titleI18n} size="sm" />
                  </div>
                  <div className="mt-2 rounded-lg bg-ink-50 px-3 py-2 dark:bg-ink-950/60">
                    <Translated value={pack.focus} size="sm" />
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-2">
                  <SpeakSequenceButton texts={pack.sentences.map((s) => s.tr)} />
                  {!done && (
                    <Button
                      size="sm"
                      variant="secondary"
                      icon={<CheckCircle2 size={14} />}
                      onClick={() => completeSentencePack(pack.id)}
                    >
                      Tamamlandı
                    </Button>
                  )}
                </div>
              </div>

              <ul className="divide-y divide-ink-100 p-1.5 dark:divide-ink-800">
                {pack.sentences.map((sentence, i) => (
                  <PhraseRow key={sentence.tr} phrase={sentence} index={i} />
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6 p-5">
        <div className="flex items-center gap-3">
          <ProgressBar
            value={percent(doneCount, allPacks.length)}
            showLabel
            tone="green"
          />
        </div>
        <p className="mt-2 ar-text text-xs text-ink-500 dark:text-ink-400" dir="rtl">
          {lang === 'ar'
            ? 'ردّد كل جملة بصوت عالٍ ثلاث مرات قبل أن تنتقل — التكرار الصوتي هو ما يثبّت البنية.'
            : 'هەر ڕستەیەک سێ جار بە دەنگی بەرز دووبارە بکەوە پێش ئەوەی بڕۆیت — دووبارەکردنەوەی دەنگی ئەوەیە کە پێکهاتەکە جێگیر دەکات.'}
        </p>
      </Card>
    </div>
  );
}
