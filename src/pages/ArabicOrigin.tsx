import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AlertTriangle, Brain, Check, Filter, Info, Languages, Search, Star, X,
} from 'lucide-react';
import type {
  LevelId, OriginLanguage, Register, VocabItem,
} from '@/types/content';
import { LEVEL_ORDER } from '@/types/content';
import { cx, fold, foldArabic } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Card, Chip, EmptyState, LevelBadge, PageHeader,
} from '@/components/ui/Primitives';
import { Hero } from '@/components/ui/Ornament';
import { SpeakButton } from '@/components/audio/SpeakButton';
import { Translated } from '@/components/learn/Translation';

/**
 * Arabic-origin Turkish words.
 *
 * Distinct from `/connections`, and the distinction is the point:
 *
 *   /connections    "can an Arabic speaker recognise this?" — a teaching
 *                   bridge, which includes false friends and coincidences.
 *   /arabic-origin  "where did this word historically come from?" — etymology,
 *                   true whether or not it helps anyone.
 *
 * The root explorer is the reason this page exists. Once a student sees
 * ح ك م inside hüküm, hükümet, hâkim, mahkeme and hikmet, five words stop
 * being five things to memorise.
 */

const REGISTER_LABEL: Record<Register, { tr: string; ar: string; ku: string }> = {
  everyday: { tr: 'Günlük', ar: 'يومي', ku: 'ڕۆژانە' },
  formal: { tr: 'Resmî', ar: 'رسمي', ku: 'فەرمی' },
  academic: { tr: 'Akademik', ar: 'أكاديمي', ku: 'ئەکادیمی' },
  literary: { tr: 'Edebî', ar: 'أدبي', ku: 'ئەدەبی' },
  technical: { tr: 'Teknik', ar: 'تقني', ku: 'تەکنیکی' },
  historical: { tr: 'Tarihî', ar: 'تاريخي (لم يعد شائعاً)', ku: 'مێژوویی' },
};

const LANGUAGE_LABEL: Record<OriginLanguage, string> = {
  arabic: 'Arapça',
  persian: 'Farsça',
  french: 'Fransızca',
  italian: 'İtalyanca',
  greek: 'Yunanca',
  latin: 'Latince',
  english: 'İngilizce',
  turkic: 'Öz Türkçe',
  other: 'Diğer',
  uncertain: 'Belirsiz',
};

const REGISTERS: Register[] = ['everyday', 'formal', 'academic', 'literary', 'historical'];

type Tab = 'words' | 'roots' | 'myths';

export default function ArabicOrigin() {
  const { vocabulary } = useContent();
  const { lang, teacherMode } = useSettings();
  const [params] = useSearchParams();

  const [tab, setTab] = useState<Tab>((params.get('tab') as Tab) ?? 'words');
  const [query, setQuery] = useState(params.get('q') ?? '');
  const [level, setLevel] = useState<LevelId | 'all'>('all');
  const [register, setRegister] = useState<Register | 'all'>('all');
  const [confidence, setConfidence] = useState<'all' | 'certain' | 'likely'>('all');
  const [openRoot, setOpenRoot] = useState<string | null>(params.get('root'));
  const [showDetail, setShowDetail] = useState(teacherMode);

  const origin = useMemo(
    () => vocabulary.filter((v) => v.origin?.language === 'arabic'),
    [vocabulary],
  );
  const myths = useMemo(
    () => vocabulary.filter((v) => v.origin?.misconception),
    [vocabulary],
  );

  /** Roots that carry more than one word — the ones worth exploring. */
  const roots = useMemo(() => {
    const byRoot = new Map<string, VocabItem[]>();
    for (const item of origin) {
      const root = item.origin!.root;
      if (!root) continue;
      if (!byRoot.has(root)) byRoot.set(root, []);
      byRoot.get(root)!.push(item);
    }
    return [...byRoot.entries()]
      .filter(([, items]) => items.length > 1)
      .sort((a, b) => b[1].length - a[1].length);
  }, [origin]);

  const results = useMemo(() => {
    const qTr = fold(query.trim());
    const qAr = foldArabic(query.trim());

    return origin.filter((item) => {
      const o = item.origin!;
      if (level !== 'all' && item.level !== level) return false;
      if (register !== 'all' && o.register !== register) return false;
      if (confidence !== 'all' && o.confidence !== confidence) return false;
      if (!query.trim()) return true;

      // Searchable by every field a student might reach for, including the
      // root — which is the whole point for someone who reads Arabic.
      return (
        fold(item.tr).includes(qTr)
        || fold(item.pron).includes(qTr)
        || foldArabic(item.ar).includes(qAr)
        || foldArabic(item.ku).includes(qAr)
        || foldArabic(o.source ?? '').includes(qAr)
        || (o.root ?? '').replace(/\s/g, '').includes(qAr.replace(/\s/g, ''))
      );
    });
  }, [origin, query, level, register, confidence]);

  const registerCounts = useMemo(() => {
    const by: Record<string, number> = {};
    for (const item of origin) by[item.origin!.register] = (by[item.origin!.register] ?? 0) + 1;
    return by;
  }, [origin]);

  return (
    <div>
      <PageHeader
        eyebrow="Kökenbilim"
        icon={<Languages size={14} />}
        title="Arapça Kökenli Türkçe Kelimeler"
        description={(
          <span
            className={cx('block w-fit', lang === 'ar' ? 'ar-text' : 'ku-text')}
            dir="rtl"
            lang={lang === 'ar' ? 'ar' : 'ckb'}
          >
            {lang === 'ar'
              ? 'ليس «ما الذي يشبه العربية» بل «ما الذي دخل التركية من العربية فعلاً». مع الجذر، والسجل اللغوي، وتصحيح ما يُظنّ عربياً وليس كذلك.'
              : 'نەک «چی لە عەرەبی دەچێت» بەڵکو «چی بەڕاستی لە عەرەبییەوە چووەتە تورکی». لەگەڵ ڕەگ و ئاستی زمان و ڕاستکردنەوەی ئەوانەی بە هەڵە عەرەبی دەزانرێن.'}
          </span>
        )}
      />

      {/* ---- the claim, with the numbers behind it ---- */}
      <Hero className="mb-6">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[.18em] text-brass-300/80">
              {origin.length} kelime · {roots.length} ortak kök
            </p>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-200">
              Osmanlı Türkçesi Arapçadan çok kelime aldı. 1930’ların dil devrimi
              bunların birçoğunu değiştirdi — ama binlercesi hâlâ kullanımda.
              Burada hangilerinin gerçekten Arapçadan geldiğini,
              hangilerinin gelmediğini görebilirsin.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {REGISTERS.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => { setTab('words'); setRegister(register === r ? 'all' : r); }}
                  className={cx(
                    'rounded-lg border px-3 py-1.5 text-[13px] font-semibold transition',
                    register === r
                      ? 'border-brass-400 bg-brass-400 text-ink-950'
                      : 'border-white/15 bg-white/[.06] text-ink-200 hover:border-white/30',
                  )}
                >
                  {REGISTER_LABEL[r].tr}
                  <span className="ml-1.5 font-mono text-[11px] opacity-70">
                    {registerCounts[r] ?? 0}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* One root, shown whole — the argument for the whole page. */}
          <div className="rounded-2xl border border-white/12 bg-ink-950/40 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[.14em] text-ink-400">
              Tek kökten beş kelime
            </p>
            <p className="ar-text mt-2 text-2xl text-brass-300" dir="rtl" lang="ar">ح ك م</p>
            <p className="mt-3 tr-word text-[15px] leading-relaxed text-white" lang="tr">
              hüküm · hükümet · hâkim · mahkeme · hikmet
            </p>
            <p className="mt-3 border-t border-white/10 pt-3 text-[13px] leading-relaxed text-ink-300">
              Beş kelime değil, bir kök. Arapça okuyan bir öğrenci için
              bu, ezberi beşte bire indirir.
            </p>
          </div>
        </div>
      </Hero>

      {/* ---- tabs ---- */}
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {([
          ['words', `Kelimeler · ${origin.length}`],
          ['roots', `Kökler · ${roots.length}`],
          ['myths', `Yanlış bilinenler · ${myths.length}`],
        ] as const).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            aria-pressed={tab === id}
            className={cx(
              'shrink-0 rounded-xl px-3.5 py-2 text-sm font-semibold transition duration-150',
              tab === id
                ? 'bg-brand-700 text-white shadow-sm'
                : 'bg-surface text-secondary ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'words' && (
        <>
          <Card className="mb-5 p-4">
            <div className="relative">
              <Search
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                aria-hidden
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Türkçe, عربي veya kök (ح ك م) ara…"
                aria-label="Arapça kökenli kelimelerde ara"
                className="input pl-10"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Aramayı temizle"
                  className="absolute right-2.5 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-lg text-muted transition hover:text-primary"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5">
                <Filter size={13} className="shrink-0 text-muted" aria-hidden />
                <Pill active={level === 'all'} onClick={() => setLevel('all')}>Hepsi</Pill>
                {LEVEL_ORDER.map((id) => (
                  <Pill key={id} active={level === id} onClick={() => setLevel(id)}>
                    {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
                  </Pill>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <Pill active={confidence === 'all'} onClick={() => setConfidence('all')}>
                  Her kesinlik
                </Pill>
                <Pill active={confidence === 'certain'} onClick={() => setConfidence('certain')}>
                  Kesin
                </Pill>
                <Pill active={confidence === 'likely'} onClick={() => setConfidence('likely')}>
                  Muhtemel
                </Pill>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-3 hairline">
              <p className="t-caption">
                <strong className="font-semibold text-primary">{results.length}</strong> kelime
                {register !== 'all' && ` · ${REGISTER_LABEL[register].tr}`}
              </p>
              <button
                type="button"
                onClick={() => setShowDetail((v: boolean) => !v)}
                aria-pressed={showDetail}
                className="py-1 text-xs font-semibold text-secondary hover:text-primary"
              >
                {showDetail ? 'Kök ayrıntısını gizle' : 'Kök ayrıntısını göster'}
              </button>
            </div>
          </Card>

          {results.length === 0 ? (
            <EmptyState
              icon={<Search size={20} />}
              title="Sonuç bulunamadı"
              description="Farklı bir kelime, kök ya da filtre dene."
            />
          ) : (
            <div className="grid gap-3 lg:grid-cols-2">
              {results.map((item) => (
                <OriginCard
                  key={item.id}
                  item={item}
                  showDetail={showDetail}
                  onRoot={(root) => { setTab('roots'); setOpenRoot(root); }}
                />
              ))}
            </div>
          )}
        </>
      )}

      {tab === 'roots' && (
        <RootExplorer roots={roots} open={openRoot} onOpen={setOpenRoot} />
      )}

      {tab === 'myths' && <Myths items={myths} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Pill({
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
      aria-pressed={active}
      className={cx(
        'shrink-0 rounded-lg px-2.5 py-1.5 font-mono text-[11px] font-semibold transition',
        active
          ? 'bg-brand-700 text-white'
          : 'text-secondary surface-sunken ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
      )}
    >
      {children}
    </button>
  );
}

function OriginCard({
  item, showDetail, onRoot,
}: {
  item: VocabItem;
  showDetail: boolean;
  onRoot: (root: string) => void;
}) {
  const o = item.origin!;
  const { showPronunciation } = useSettings();
  const { isLearned, toggleLearned, isFavorite, toggleFavorite } = useProgress();

  const learned = isLearned(item.id);
  const favorite = isFavorite(item.id);

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <SpeakButton text={item.tr} size="md" />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="tr-word text-lg" lang="tr">{item.tr}</span>
            {showPronunciation && <span className="pron">{item.pron}</span>}
            <LevelBadge level={item.level} className="!px-1.5 !py-0 !text-[10px]" />
          </div>
        </div>

        {o.source && (
          <p className="ar-text shrink-0 text-lg text-primary" dir="rtl" lang="ar">
            {o.source}
          </p>
        )}
      </div>

      <div className="border-t px-4 py-3 hairline">
        <Translated value={{ ar: item.ar, ku: item.ku }} size="sm" />
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t px-4 py-3 hairline">
        <Chip tone="brand">{REGISTER_LABEL[o.register].tr}</Chip>
        {o.confidence === 'likely' && <Chip tone="neutral">Muhtemel</Chip>}

        {o.root ? (
          <button
            type="button"
            onClick={() => onRoot(o.root!)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brass-50 px-2.5 py-1 ring-1 ring-inset ring-brass-200 transition hover:bg-brass-100 dark:bg-brass-950 dark:ring-brass-800"
            title="Bu kökten diğer kelimeler"
          >
            <span className="ar-text text-sm text-brass-800 dark:text-brass-200" dir="rtl" lang="ar">
              {o.root}
            </span>
          </button>
        ) : showDetail ? (
          <span className="t-caption">kök yok — Arapçaya başka dilden gelmiş</span>
        ) : null}

        {showDetail && o.sourcePron && (
          <span className="font-mono text-[11px] text-muted">{o.sourcePron}</span>
        )}
      </div>

      {o.usage && (
        <div className="border-t px-4 py-3 hairline surface-sunken">
          <Translated value={o.usage} size="sm" />
        </div>
      )}

      {item.example && (
        <div className="flex items-start gap-3 border-t px-4 py-3 hairline">
          <div className="min-w-0 flex-1">
            <p className="tr-word text-sm" lang="tr">{item.example.tr}</p>
            {showPronunciation && <p className="pron mt-0.5">{item.example.pron}</p>}
            <div className="mt-1.5">
              <Translated value={{ ar: item.example.ar, ku: item.example.ku }} size="sm" />
            </div>
          </div>
          <SpeakButton text={item.example.tr} size="sm" variant="ghost" />
        </div>
      )}

      <div className="flex items-center justify-between gap-2 border-t px-4 py-2.5 hairline">
        <Link
          to="/practice/origin"
          className="link-action"
        >
          <Brain size={13} />
          Alıştırma yap
        </Link>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => toggleFavorite(item.id)}
            aria-label={favorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            aria-pressed={favorite}
            className={cx(
              'grid h-8 w-8 place-items-center rounded-lg transition',
              favorite
                ? 'text-accent-600 hover:bg-accent-50 dark:hover:bg-accent-950/40'
                : 'text-muted hover:bg-ink-100 hover:text-secondary dark:hover:bg-ink-800',
            )}
          >
            <Star size={15} fill={favorite ? 'currentColor' : 'none'} />
          </button>
          <button
            type="button"
            onClick={() => toggleLearned(item.id)}
            aria-pressed={learned}
            className={cx(
              'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition',
              learned
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'text-secondary surface-sunken ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
            )}
          >
            <Check size={13} />
            {learned ? 'Destede' : 'Desteye ekle'}
          </button>
        </div>
      </div>
    </Card>
  );
}

/**
 * The root explorer.
 *
 * Only roots carrying more than one Turkish word appear — a root with a single
 * word teaches nothing about relatedness, which is the entire point.
 */
function RootExplorer({
  roots, open, onOpen,
}: {
  roots: [string, VocabItem[]][];
  open: string | null;
  onOpen: (root: string | null) => void;
}) {
  const { lang } = useSettings();

  return (
    <div>
      <Card className="mb-5 p-5" edge>
        <div className="flex items-start gap-3">
          <Info size={17} className="mt-0.5 shrink-0 text-brand-700 dark:text-brand-300" aria-hidden />
          <div className="min-w-0">
            <p className="font-display text-[15px] font-semibold text-primary">
              Türkçe Arapça gibi çekim yapmaz
            </p>
            <p
              className={cx('mt-1.5 w-fit text-sm text-secondary', lang === 'ar' ? 'ar-text' : 'ku-text')}
              dir="rtl"
              lang={lang === 'ar' ? 'ar' : 'ckb'}
            >
              {lang === 'ar'
                ? 'التركية لا تشتقّ من الجذور كما تفعل العربية. هذه الكلمات دخلت التركية جاهزة، كلٌّ على حدة. الجذر هنا أداة تعرّف لا قاعدة صرفية.'
                : 'تورکی وەک عەرەبی لە ڕەگەوە داڕشتن ناکات. ئەم وشانە ئامادە چوونەتە ناو تورکییەوە. ڕەگ لێرە ئامرازی ناسینەوەیە نەک یاسایەکی ڕێزمانی.'}
            </p>
          </div>
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {roots.map(([root, items]) => {
          const isOpen = open === root;
          return (
            <Card key={root} className={cx('overflow-hidden', isOpen && 'sm:col-span-2 lg:col-span-3')}>
              <button
                type="button"
                onClick={() => onOpen(isOpen ? null : root)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 p-4 text-left transition hover:bg-brand-50/60 dark:hover:bg-brand-950/30"
              >
                <span className="ar-text text-2xl text-primary" dir="rtl" lang="ar">{root}</span>
                <span className="flex items-center gap-2">
                  <Chip tone="brass">{items.length} kelime</Chip>
                </span>
              </button>

              {!isOpen && (
                <p className="tr-word border-t px-4 py-2.5 text-[13px] hairline" lang="tr">
                  {items.map((i) => i.tr).join(' · ')}
                </p>
              )}

              {isOpen && (
                <ul className="divide-y divide-ink-100 border-t hairline dark:divide-ink-800">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-start gap-3 px-4 py-3">
                      <SpeakButton text={item.tr} size="sm" className="mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-2.5">
                          <span className="tr-word text-[15px]" lang="tr">{item.tr}</span>
                          <span className="ar-text text-sm text-secondary" dir="rtl" lang="ar">
                            {item.origin!.source}
                          </span>
                          <LevelBadge level={item.level} className="!px-1.5 !py-0 !text-[10px]" />
                          <Chip tone="neutral" className="!px-1.5 !py-0 !text-[10px]">
                            {REGISTER_LABEL[item.origin!.register].tr}
                          </Chip>
                        </div>
                        <div className="mt-1">
                          <Translated value={{ ar: item.ar, ku: item.ku }} size="sm" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/** Words students assume are Arabic and are not. */
function Myths({ items }: { items: VocabItem[] }) {
  const { lang } = useSettings();

  return (
    <div>
      <div className="mb-5 flex items-start gap-3 rounded-xl border-l-[3px] border-accent-600 bg-accent-50 p-4 dark:bg-accent-950/40">
        <AlertTriangle size={17} className="mt-0.5 shrink-0 text-accent-700 dark:text-accent-400" aria-hidden />
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold text-accent-800 dark:text-accent-300">
            Arapça sanılan ama Arapça olmayan kelimeler
          </p>
          <p
            className={cx('mt-1 w-fit text-sm text-secondary', lang === 'ar' ? 'ar-text' : 'ku-text')}
            dir="rtl"
            lang={lang === 'ar' ? 'ar' : 'ckb'}
          >
            {lang === 'ar'
              ? 'أكثر هذه الكلمات فارسية. معرفة أنها ليست عربية تمنعك من التخمين الخاطئ في كلمات أخرى.'
              : 'زۆربەی ئەمانە فارسین. زانینی ئەوەی عەرەبی نین ڕێگری لە مەزەندەی هەڵە دەکات.'}
          </p>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              <SpeakButton text={item.tr} size="md" />
              <div className="min-w-0 flex-1">
                <span className="tr-word text-lg" lang="tr">{item.tr}</span>
                <div className="mt-1">
                  <Translated value={{ ar: item.ar, ku: item.ku }} size="sm" />
                </div>
              </div>
              <div className="shrink-0 text-right">
                <Chip tone="cobalt">{LANGUAGE_LABEL[item.origin!.language]}</Chip>
                {item.origin!.source && (
                  <p className="ar-text mt-1.5 text-sm text-secondary" dir="rtl">
                    {item.origin!.source}
                  </p>
                )}
              </div>
            </div>
            <div className="border-t px-4 py-3 hairline surface-sunken">
              <Translated value={item.origin!.misconception!} size="sm" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
