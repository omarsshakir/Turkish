import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AlertTriangle, ArrowLeftRight, Brain, Check, Filter, Search, Star, X,
} from 'lucide-react';
import type {
  ArabicConfidence, ArabicRelation, LevelId, VocabItem,
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
import { SenseHint } from '@/components/learn/Senses';
import { ConnectionProgressPanel } from '@/components/learn/ConnectionProgress';

/**
 * Arabic → Turkish connections.
 *
 * For a student who already reads Arabic, a few hundred Turkish words are not
 * new vocabulary at all — they are words they half-know already. This page
 * makes that visible, and equally makes visible the places where the instinct
 * misleads them.
 *
 * There is no separate data store behind it: every entry is an ordinary
 * `VocabItem` that happens to carry an `arabic` field, so the favourite and
 * learned controls, the SRS enrolment, the audio and the search index are the
 * same ones the rest of the platform uses.
 */

const RELATION_LABEL: Record<ArabicRelation, { tr: string; ar: string; ku: string }> = {
  direct: { tr: 'Doğrudan tanıdık', ar: 'مألوفة مباشرة', ku: 'ڕاستەوخۆ ئاشنا' },
  borrowing: { tr: 'Arapçadan geçmiş', ar: 'مقترضة من العربية', ku: 'لە عەرەبییەوە' },
  pronunciation: { tr: 'Benzer telaffuz', ar: 'نطق متقارب', ku: 'دەربڕینی هاوشێوە' },
  spelling: { tr: 'Benzer yazım', ar: 'كتابة متقاربة', ku: 'نووسینی هاوشێوە' },
  semantic: { tr: 'Benzer anlam', ar: 'معنى متقارب', ku: 'واتای هاوشێوە' },
  'false-friend': { tr: 'Yalancı eş dost', ar: 'صديق كاذب', ku: 'هاوڕێی درۆزن' },
};

const RELATION_TONE: Record<ArabicRelation, 'brand' | 'cobalt' | 'brass' | 'accent'> = {
  direct: 'brand',
  borrowing: 'cobalt',
  pronunciation: 'cobalt',
  spelling: 'cobalt',
  semantic: 'brass',
  'false-friend': 'accent',
};

const CONFIDENCE_LABEL: Record<ArabicConfidence, { tr: string; ar: string; ku: string }> = {
  certain: { tr: 'Kesin', ar: 'مؤكّد', ku: 'دڵنیا' },
  likely: { tr: 'Muhtemel', ar: 'مرجّح', ku: 'ئەگەری زۆر' },
  surface: { tr: 'Yalnızca benzerlik', ar: 'تشابه ظاهري فقط', ku: 'تەنها لێکچوون' },
};

const RELATION_ORDER: ArabicRelation[] = [
  'direct', 'borrowing', 'pronunciation', 'spelling', 'semantic', 'false-friend',
];

export default function Connections() {
  const { vocabulary } = useContent();
  const { lang, teacherMode } = useSettings();

  // Search results deep-link into this page, so honour ?q= on arrival.
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') ?? '');
  // §15 — confidence, transliteration and the Kurdish cognate are editorial
  // detail. A student needs the category and one sentence of explanation; a
  // teacher wants the rest. Default follows who is using the app.
  const [showDetail, setShowDetail] = useState(teacherMode);
  const [relation, setRelation] = useState<ArabicRelation | 'all'>('all');
  const [level, setLevel] = useState<LevelId | 'all'>('all');

  const linked = useMemo(
    () => vocabulary.filter((v) => v.arabic),
    [vocabulary],
  );

  const counts = useMemo(() => {
    const by: Record<string, number> = {};
    for (const item of linked) by[item.arabic!.relation] = (by[item.arabic!.relation] ?? 0) + 1;
    return by;
  }, [linked]);

  const results = useMemo(() => {
    const qTr = fold(query.trim());
    const qAr = foldArabic(query.trim());

    return linked.filter((item) => {
      if (relation !== 'all' && item.arabic!.relation !== relation) return false;
      if (level !== 'all' && item.level !== level) return false;
      if (!query.trim()) return true;

      // A student may type either side of the pair, in either script.
      return (
        fold(item.tr).includes(qTr)
        || fold(item.pron).includes(qTr)
        || foldArabic(item.ar).includes(qAr)
        || foldArabic(item.ku).includes(qAr)
        || foldArabic(item.arabic!.ar).includes(qAr)
      );
    });
  }, [linked, query, relation, level]);

  const falseFriends = counts['false-friend'] ?? 0;

  return (
    <div>
      <PageHeader
        eyebrow="Arapça ↔ Türkçe"
        icon={<ArrowLeftRight size={14} />}
        title="Zaten Bildiğin Türkçe"
        description={(
          <span
            className={cx('block w-fit', lang === 'ar' ? 'ar-text' : 'ku-text')}
            dir="rtl"
            lang={lang === 'ar' ? 'ar' : 'ckb'}
          >
            {lang === 'ar'
              ? 'مئات الكلمات التركية دخلت من العربية وما زالت تحمل الجذر نفسه. هذه الصفحة تُظهر لك ما تعرفه أصلاً — وتحذّرك من الكلمات التي تخدع.'
              : 'سەدان وشەی تورکی لە عەرەبییەوە هاتوون و هێشتا هەمان ڕەگیان هەیە. ئەم لاپەڕەیە ئەوەت پیشان دەدات کە پێشتر دەیزانیت — و ئاگادارت دەکاتەوە لەو وشانەی فێڵت لێدەکەن.'}
          </span>
        )}
      />

      {/* ---- the promise, stated once ---- */}
      <Hero className="mb-7">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[.18em] text-brass-300/80">
              {linked.length} bağlantı
            </p>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-200">
              Arapça okuyabiliyorsan Türkçeye sıfırdan başlamıyorsun.
              Bu sayfadaki her kelimenin Arapçayla gerçek bir bağı var —
              ve bağı olmayanlar açıkça öyle işaretlendi.
            </p>

            <Link
              to="/practice/connections"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brass-400 px-3.5 py-2 text-[13px] font-bold text-ink-950 transition hover:bg-brass-300"
            >
              Bağlantı alıştırması
              <ArrowLeftRight size={14} />
            </Link>

            <div className="mt-5 flex flex-wrap gap-2">
              {RELATION_ORDER.map((rel) => (
                <button
                  key={rel}
                  type="button"
                  onClick={() => setRelation(relation === rel ? 'all' : rel)}
                  className={cx(
                    'rounded-lg border px-3 py-1.5 text-[13px] font-semibold transition',
                    relation === rel
                      ? 'border-brass-400 bg-brass-400 text-ink-950'
                      : 'border-white/15 bg-white/[.06] text-ink-200 hover:border-white/30',
                  )}
                >
                  {RELATION_LABEL[rel].tr}
                  <span className="ml-1.5 font-mono text-[11px] opacity-70">
                    {counts[rel] ?? 0}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* The single most useful example on the page: one pair, shown whole. */}
          <div className="rounded-2xl border border-white/12 bg-ink-950/40 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[.14em] text-ink-400">
              Örnek
            </p>
            <div className="mt-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-2xl font-semibold text-white" lang="tr">hükümet</p>
                <p className="mt-1 font-mono text-xs text-brand-300">hü-kü-MET</p>
              </div>
              <ArrowLeftRight size={18} className="shrink-0 text-brass-400" aria-hidden />
              <p className="ar-text text-2xl text-white" dir="rtl" lang="ar">حكومة</p>
            </div>
            <p className="mt-4 border-t border-white/10 pt-3 text-[13px] leading-relaxed text-ink-300">
              Aynı kök, aynı anlam. Böyle yüzlerce kelime var.
            </p>
          </div>
        </div>
      </Hero>

      {/* ---- progress, then controls ---- */}
      <ConnectionProgressPanel vocabulary={vocabulary} className="mb-5" />

      <Card className="mb-5 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
              aria-hidden
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Türkçe veya عربي ara…"
              aria-label="Bağlantılarda ara"
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

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <Filter size={14} className="shrink-0 text-muted" aria-hidden />
            <FilterPill active={level === 'all'} onClick={() => setLevel('all')}>Hepsi</FilterPill>
            {LEVEL_ORDER.map((id) => (
              <FilterPill key={id} active={level === id} onClick={() => setLevel(id)}>
                {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
              </FilterPill>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-3 hairline">
          <p className="t-caption">
            <strong className="font-semibold text-primary">{results.length}</strong> kelime
            {relation !== 'all' && ` · ${RELATION_LABEL[relation].tr}`}
          </p>
          <div className="flex items-center gap-3">
            {relation !== 'all' && (
              <button
                type="button"
                onClick={() => setRelation('all')}
                className="text-xs font-semibold text-accent hover:underline"
              >
                Filtreyi kaldır
              </button>
            )}
            <button
              type="button"
              onClick={() => setShowDetail((v: boolean) => !v)}
              aria-pressed={showDetail}
              className="py-1 text-xs font-semibold text-secondary hover:text-primary"
            >
              {showDetail ? 'Dilbilim ayrıntısını gizle' : 'Dilbilim ayrıntısını göster'}
            </button>
          </div>
        </div>
      </Card>

      {/* ---- the false-friend warning, always visible ---- */}
      {(relation === 'all' || relation === 'false-friend') && falseFriends > 0 && (
        <div className="mb-5 flex items-start gap-3 rounded-xl border-l-[3px] border-accent-600 bg-accent-50 p-4 dark:bg-accent-950/40">
          <AlertTriangle size={17} className="mt-0.5 shrink-0 text-accent-700 dark:text-accent-400" aria-hidden />
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold text-accent-800 dark:text-accent-300">
              {falseFriends} yalancı eş dost var
            </p>
            <p
              className={cx('mt-1 w-fit text-sm text-secondary', lang === 'ar' ? 'ar-text' : 'ku-text')}
              dir="rtl"
              lang={lang === 'ar' ? 'ar' : 'ckb'}
            >
              {lang === 'ar'
                ? 'كلمات تبدو عربية لكن معناها في التركية مختلف تماماً. اقرأ التحذير قبل أن تخمّن.'
                : 'وشانێک کە وا دیارە عەرەبین بەڵام واتایان لە تورکیدا بە تەواوی جیاوازە. پێش ئەوەی مەزەندە بکەیت ئاگادارییەکە بخوێنەوە.'}
            </p>
          </div>
        </div>
      )}

      {/* ---- results ---- */}
      {results.length === 0 ? (
        <EmptyState
          icon={<Search size={20} />}
          title="Sonuç bulunamadı"
          description="Farklı bir kelime dene ya da filtreleri temizle."
        />
      ) : (
        <div className="grid gap-3 lg:grid-cols-2">
          {results.map((item) => (
            <ConnectionCard key={item.id} item={item} showDetail={showDetail} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function FilterPill({
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

function ConnectionCard({
  item, showDetail,
}: {
  item: VocabItem;
  showDetail: boolean;
}) {
  const link = item.arabic!;
  const { showPronunciation } = useSettings();
  const { isLearned, toggleLearned, isFavorite, toggleFavorite } = useProgress();

  const learned = isLearned(item.id);
  const favorite = isFavorite(item.id);
  const isFalseFriend = link.relation === 'false-friend';

  return (
    <Card
      className={cx(
        'overflow-hidden',
        isFalseFriend && 'border-accent-300 dark:border-accent-800',
      )}
    >
      {isFalseFriend && (
        <div className="flex items-center gap-2 bg-accent-600 px-4 py-1.5 text-white">
          <AlertTriangle size={13} aria-hidden />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[.14em]">
            Dikkat · صديق كاذب
          </span>
        </div>
      )}

      {/* The pair, side by side. This is the whole point of the page. */}
      <div className="flex items-center gap-4 p-4">
        <SpeakButton text={item.tr} size="md" />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="tr-word text-lg" lang="tr">{item.tr}</span>
            {showPronunciation && <span className="pron">{item.pron}</span>}
            <LevelBadge level={item.level} className="!px-1.5 !py-0 !text-[10px]" />
          </div>
        </div>

        <ArrowLeftRight size={15} className="shrink-0 text-brass-500" aria-hidden />

        <p className="ar-text shrink-0 text-lg text-primary" dir="rtl" lang="ar">
          {link.ar}
        </p>
      </div>

      {/* Meaning, in the student's own language, never blended. */}
      <div className="border-t px-4 py-3 hairline">
        <Translated value={{ ar: item.ar, ku: item.ku }} size="sm" />
        <SenseHint item={item} className="mt-1.5" />
      </div>

      {/* What the Arabic actually means — only where it differs. */}
      {link.arMeaning && (
        <div className="border-t px-4 py-3 hairline surface-sunken">
          <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[.14em] text-accent-700 dark:text-accent-400">
            Arapçada ne demek?
          </p>
          <Translated value={link.arMeaning} size="sm" />
        </div>
      )}

      {/* The relationship, and how far it can be trusted. */}
      <div className="border-t px-4 py-3 hairline">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Chip tone={RELATION_TONE[link.relation]}>
            {RELATION_LABEL[link.relation].tr}
          </Chip>

          {/* A `surface` resemblance is a warning, not a detail — it tells the
              student not to generalise from it, so it stays visible always. */}
          {link.confidence === 'surface' && (
            <Chip tone="neutral">{CONFIDENCE_LABEL.surface.tr}</Chip>
          )}

          {showDetail && link.confidence !== 'surface' && (
            <Chip tone="brass">{CONFIDENCE_LABEL[link.confidence].tr}</Chip>
          )}
          {showDetail && link.arPron && (
            <span className="font-mono text-[11px] text-muted">{link.arPron}</span>
          )}
          {showDetail && link.kuLink && (
            <span className="ku-text text-sm text-secondary" dir="rtl" lang="ckb">
              {link.kuLink}
            </span>
          )}
        </div>
        <Translated value={link.note} size="sm" />
      </div>

      {/* Example, audio, and the two controls that feed the SRS. */}
      {item.example && (
        <div className="border-t px-4 py-3 hairline">
          <div className="flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <p className="tr-word text-sm" lang="tr">{item.example.tr}</p>
              {showPronunciation && <p className="pron mt-0.5">{item.example.pron}</p>}
              <div className="mt-2">
                <Translated
                  value={{ ar: item.example.ar, ku: item.example.ku }}
                  size="sm"
                />
              </div>
            </div>
            <SpeakButton text={item.example.tr} size="sm" variant="ghost" />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-2 border-t px-4 py-2.5 hairline">
        <Link
          to={`/practice/vocabulary?category=${item.category}`}
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
            aria-label={learned ? 'Tekrar destesinden çıkar' : 'Tekrar destesine ekle'}
            aria-pressed={learned}
            title={learned ? 'Destede' : 'Tekrar destesine ekle'}
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
