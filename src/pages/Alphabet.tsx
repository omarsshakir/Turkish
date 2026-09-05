import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, Sparkles, Type, Volume2, X } from 'lucide-react';
import type { LetterEntry } from '@/types/content';
import { cx } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import { Card, Chip, PageHeader } from '@/components/ui/Primitives';
import { SpeakButton, SpeakPair } from '@/components/audio/SpeakButton';
import { Translated } from '@/components/learn/Translation';
import { audio } from '@/lib/audio';

type Filter = 'all' | 'vowels' | 'consonants' | 'special';

export default function Alphabet() {
  const { alphabet } = useContent();
  const { lang } = useSettings();
  const { studiedLetters, markLetterStudied } = useProgress();
  const [params, setParams] = useSearchParams();
  const [filter, setFilter] = useState<Filter>('all');

  const selectedId = params.get('letter');
  const selected = alphabet.find((l) => l.id === selectedId) ?? null;

  const letters = useMemo(() => alphabet.filter((letter) => {
    if (filter === 'vowels') return letter.kind === 'vowel';
    if (filter === 'consonants') return letter.kind === 'consonant';
    if (filter === 'special') return letter.special;
    return true;
  }), [alphabet, filter]);

  const open = (letter: LetterEntry) => {
    setParams({ letter: letter.id });
    markLetterStudied(letter.id);
  };

  const close = () => setParams({});

  // Escape closes the detail panel.
  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const FILTERS: { id: Filter; tr: string; ar: string; ku: string }[] = [
    { id: 'all', tr: 'Hepsi', ar: 'الكل', ku: 'هەموو' },
    { id: 'vowels', tr: 'Ünlüler', ar: 'الحركات', ku: 'بزوێنەکان' },
    { id: 'consonants', tr: 'Ünsüzler', ar: 'الصوامت', ku: 'کۆنسۆنانتەکان' },
    { id: 'special', tr: 'Özel harfler', ar: 'الحروف الخاصة', ku: 'پیتە تایبەتەکان' },
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Alfabe"
        icon={<Type size={14} />}
        title="Türk Alfabesi"
        description={(
          <span className="ar-text block" dir="rtl">
            {lang === 'ar'
              ? '٢٩ حرفاً لاتينياً. اضغط على أي بطاقة لتسمع نطق الحرف وترى كلمة مثال مع ترجمتها وشرح خاص للناطقين بالعربية والكردية.'
              : '٢٩ پیتی لاتینی. کلیک لەسەر هەر کارتێک بکە بۆ بیستنی دەنگی پیتەکە و بینینی وشەیەکی نموونە لەگەڵ وەرگێڕان و ڕوونکردنەوەی تایبەت.'}
          </span>
        )}
        action={(
          <Chip tone="brand">
            {studiedLetters.length} / {alphabet.length} incelendi
          </Chip>
        )}
      />

      {/* Filters */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cx(
              'rounded-xl px-3.5 py-2 text-sm font-semibold transition',
              filter === f.id
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-surface text-secondary ring-1 ring-inset ring-ink-200 hover:border-brand-300 hover:text-primary dark:ring-ink-700',
            )}
          >
            {f.tr}
            <span className="ml-2 font-arabic text-xs opacity-70" dir="rtl">
              {lang === 'ar' ? f.ar : f.ku}
            </span>
          </button>
        ))}
        <button
          type="button"
          onClick={() => void audio.speakSequence(alphabet.map((l) => l.name))}
          className="ml-auto inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-3.5 py-2 text-sm font-semibold text-ink-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200"
        >
          <Volume2 size={15} />
          Alfabeyi dinle
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
        {letters.map((letter) => {
          const studied = studiedLetters.includes(letter.id);
          return (
            <button
              key={letter.id}
              type="button"
              onClick={() => open(letter)}
              aria-label={`${letter.upper}${letter.lower} — ${letter.name}`}
              className={cx(
                'group relative aspect-square overflow-hidden rounded-2xl border bg-surface p-3',
                'transition duration-200 hover:-translate-y-1 hover:shadow-lift',
                'hover:border-brand-400 dark:hover:border-brand-600',
                'border-hairline',
                selectedId === letter.id && 'border-brand-600 ring-2 ring-brand-500/25',
              )}
            >
              {/* A letter that behaves differently from its Arabic or Kurdish
                  counterpart is marked in BRASS, never red: these letters are
                  the interesting ones, not mistakes. §8 */}
              {letter.special && (
                <span
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brass-400 to-brass-300/30"
                  aria-hidden
                />
              )}

              {studied && (
                <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-emerald-600 text-white">
                  <Check size={11} />
                </span>
              )}
              {letter.special && !studied && (
                <Sparkles size={12} className="absolute right-2 top-2.5 text-brass-500" aria-hidden />
              )}

              <div className="flex h-full flex-col items-center justify-center">
                <span
                  className="font-display text-[1.7rem] font-semibold leading-none tracking-tight text-primary sm:text-[2rem]"
                  lang="tr"
                >
                  {letter.upper}
                  <span className="text-muted">{letter.lower}</span>
                </span>
                <span className="mt-2 font-mono text-[10px] tracking-wide text-muted">
                  {letter.name}
                </span>
                <span className="mt-2.5 grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition duration-150 group-hover:bg-brand-700 group-hover:text-white group-hover:ring-brand-700 dark:bg-brand-950 dark:text-brand-300 dark:ring-brand-900">
                  <Volume2 size={13} />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Missing letters note */}
      <Card className="mt-6 p-5">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
          Türkçede olmayan harfler: Q, W, X
        </h3>
        <p className="mt-2 ar-text text-sm text-ink-600 dark:text-ink-300" dir="rtl">
          {lang === 'ar'
            ? 'لا وجود لهذه الحروف الثلاثة في الأبجدية التركية. حين تظهر في أسماء أجنبية تُستبدل: Q ⟵ K، W ⟵ V، X ⟵ KS.'
            : 'ئەم سێ پیتە لە ئەلفوبێی تورکیدا نین. کاتێک لە ناوی بێگانەدا دەردەکەون دەگۆڕدرێن: Q ⟵ K، W ⟵ V، X ⟵ KS.'}
        </p>
      </Card>

      {/* Detail drawer */}
      {selected && <LetterDetail letter={selected} onClose={close} />}
    </div>
  );
}

function LetterDetail({ letter, onClose }: { letter: LetterEntry; onClose: () => void }) {
  const { autoplay } = useSettings();

  useEffect(() => {
    if (autoplay) void audio.speak(letter.example.tr);
  }, [letter, autoplay]);

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-ink-950/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-label={`Harf: ${letter.upper}`}
        className="fixed inset-x-0 bottom-0 z-50 max-h-[88vh] overflow-y-auto rounded-t-3xl border-t border-ink-200 bg-white shadow-lift animate-fade-up dark:border-ink-800 dark:bg-ink-900 sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[27rem] sm:rounded-t-none sm:rounded-l-3xl sm:border-l sm:border-t-0"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink-200 bg-white/90 px-5 py-3 backdrop-blur dark:border-ink-800 dark:bg-ink-900/90">
          <div className="flex items-center gap-2">
            <Chip tone={letter.kind === 'vowel' ? 'green' : 'brand'}>
              {letter.kind === 'vowel' ? 'Ünlü' : 'Ünsüz'}
            </Chip>
            {letter.special && <Chip tone="brass">Özel harf</Chip>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-xl text-ink-400 transition hover:bg-ink-100 hover:text-ink-700 dark:hover:bg-ink-800"
            aria-label="Kapat"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          {/* Big letter */}
          <div className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white">
            <div>
              <p className="font-display text-6xl font-bold leading-none">
                {letter.upper}
                <span className="opacity-60">{letter.lower}</span>
              </p>
              <p className="mt-3 font-mono text-sm opacity-90">
                “{letter.name}” · {letter.namePron}
              </p>
              <p className="mt-0.5 font-mono text-xs opacity-70">{letter.ipa}</p>
            </div>
            <SpeakButton text={letter.name} size="lg" variant="solid" className="!bg-white/20 hover:!bg-white/30" />
          </div>

          {/* Sound description */}
          <section className="mt-5">
            <SectionLabel>Ses</SectionLabel>
            <p className="text-sm text-ink-600 dark:text-ink-300">{letter.sound}</p>
          </section>

          {/* Contrastive note */}
          <section className="mt-5 rounded-2xl border-2 border-brand-200 bg-brand-50/60 p-4 dark:border-brand-900 dark:bg-brand-950/30">
            <SectionLabel>Arapça ve Kürtçe konuşanlar için</SectionLabel>
            <Translated value={letter.note} />
          </section>

          {/* Vowel properties */}
          {letter.vowel && (
            <section className="mt-5">
              <SectionLabel>Ünlü özellikleri</SectionLabel>
              <div className="flex flex-wrap gap-2">
                <Chip tone={letter.vowel.front ? 'violet' : 'amber'}>
                  {letter.vowel.front ? 'İnce (ön)' : 'Kalın (arka)'}
                </Chip>
                <Chip tone={letter.vowel.rounded ? 'cobalt' : 'neutral'}>
                  {letter.vowel.rounded ? 'Yuvarlak' : 'Düz'}
                </Chip>
                <Chip tone={letter.vowel.close ? 'green' : 'brand'}>
                  {letter.vowel.close ? 'Dar' : 'Geniş'}
                </Chip>
              </div>
              <p className="mt-2 text-xs text-ink-500">
                Bu üç özellik, bu harften sonra hangi ekin geleceğini belirler.
              </p>
            </section>
          )}

          {/* Examples */}
          <section className="mt-5">
            <SectionLabel>Örnek kelimeler</SectionLabel>
            <div className="space-y-3">
              {[letter.example, letter.example2].filter(Boolean).map((example) => example && (
                <div
                  key={example.tr}
                  className="rounded-2xl border border-ink-200 p-4 dark:border-ink-800"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="tr-word text-xl" lang="tr">{example.tr}</p>
                      <p className="pron mt-0.5">{example.pron}</p>
                    </div>
                    <SpeakPair text={example.tr} size="sm" />
                  </div>
                  <div className="mt-3">
                    <Translated value={{ ar: example.ar, ku: example.ku }} forceBoth size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
      {children}
    </p>
  );
}
