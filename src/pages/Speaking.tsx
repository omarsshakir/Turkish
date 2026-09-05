import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle, ArrowRight, Check, Info, Mic, MicOff, Play, RotateCcw,
  Square, Trophy, X,
} from 'lucide-react';
import { LEVEL_ORDER, type LevelId } from '@/types/content';
import {
  detectSpeechSupport, errorMessage, hintFor, recogniser, scoreSpeech,
  type RecognitionError, type SpeechScore,
} from '@/lib/speech';
import { cx, percent, sample } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, LevelBadge, PageHeader, ProgressBar,
} from '@/components/ui/Primitives';
import { SpeakButton, SpeakPair } from '@/components/audio/SpeakButton';
import { Translated } from '@/components/learn/Translation';
import { Ornament } from '@/components/ui/Ornament';

/**
 * Speaking practice.
 *
 * Two modes, chosen automatically by capability:
 *
 *  A. RECOGNITION MODE (Chrome / Edge / newer Safari)
 *     Listen -> record -> the browser transcribes in tr-TR -> we compare the
 *     transcript with the target word by word and show which words came back
 *     different. Labelled throughout as **metin doğruluğu** (text accuracy).
 *
 *  B. SELF-ASSESSMENT MODE (Firefox and anything without the API)
 *     Listen -> repeat aloud -> the student judges themselves. No fake score.
 *
 * What this page deliberately does NOT do is present a "pronunciation score".
 * The browser gives a transcript, not phonetics, and pretending otherwise
 * would teach students to trust a number that does not measure what they think.
 */

type SessionItem = {
  id: string;
  tr: string;
  pron: string;
  ar: string;
  ku: string;
  level: LevelId;
};

type Phase = 'idle' | 'recording' | 'scored' | 'self';

export default function Speaking() {
  const { lang } = useSettings();
  const { vocabulary, sentencePacks } = useContent();
  const progress = useProgress();

  const support = useMemo(() => detectSpeechSupport(), []);
  const [useRecognition, setUseRecognition] = useState(support.available);

  const [source, setSource] = useState<'words' | 'sentences'>('words');
  const [level, setLevel] = useState<LevelId | 'all'>('all');
  const [count, setCount] = useState(10);

  const [session, setSession] = useState<SessionItem[] | null>(null);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [interim, setInterim] = useState('');
  const [result, setResult] = useState<SpeechScore | null>(null);
  const [heard, setHeard] = useState<string | null>(null);
  const [error, setError] = useState<RecognitionError | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const mounted = useRef(true);

  useEffect(() => () => { mounted.current = false; recogniser.abort(); }, []);

  const pool = useMemo<SessionItem[]>(() => {
    const items: SessionItem[] = source === 'words'
      ? vocabulary
        // Very long idioms make poor recognition targets.
        .filter((w) => w.tr.split(/\s+/).length <= 4)
        .map((w) => ({ id: w.id, tr: w.tr, pron: w.pron, ar: w.ar, ku: w.ku, level: w.level }))
      : sentencePacks.flatMap((p) => p.sentences.map((s, i) => ({
        id: `${p.id}-${i}`, tr: s.tr, pron: s.pron, ar: s.ar, ku: s.ku, level: p.level,
      })));
    return level === 'all' ? items : items.filter((i) => i.level === level);
  }, [source, level, vocabulary, sentencePacks]);

  const current = session?.[index];

  const start = () => {
    setSession(sample(pool, count));
    setIndex(0);
    setPhase('idle');
    setResult(null);
    setHeard(null);
    setError(null);
    setInterim('');
    setScores([]);
    setFinished(false);
  };

  const record = useCallback(async () => {
    if (!current) return;
    setPhase('recording');
    setError(null);
    setInterim('');
    setResult(null);
    setHeard(null);

    try {
      const recognition = await recogniser.listen({
        lang: 'tr-TR',
        onInterim: (text) => mounted.current && setInterim(text),
      });
      if (!mounted.current) return;

      const scored = scoreSpeech(current.tr, recognition.transcript, recognition.confidence);
      setResult(scored);
      setHeard(recognition.transcript);
      setPhase('scored');
      setScores((prev) => [...prev, scored.score]);
      progress.recordSpeaking({
        expected: current.tr,
        heard: recognition.transcript || null,
        score: scored.score,
      });
      progress.recordAttempt(scored.score >= 70);
    } catch (err) {
      if (!mounted.current) return;
      setError(err as RecognitionError);
      setPhase('idle');
    }
  }, [current, progress]);

  const selfAssess = (ok: boolean) => {
    if (!current) return;
    const score = ok ? 100 : 0;
    setScores((prev) => [...prev, score]);
    progress.recordSpeaking({ expected: current.tr, heard: null, score });
    progress.recordAttempt(ok);
    next();
  };

  const next = () => {
    if (!session) return;
    if (index + 1 >= session.length) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setPhase('idle');
    setResult(null);
    setHeard(null);
    setError(null);
    setInterim('');
  };

  /* ---------------- setup ---------------- */

  if (!session) {
    return (
      <div className="mx-auto max-w-3xl">
        <PageHeader
          eyebrow="Alıştırma"
          icon={<Mic size={14} />}
          title="Konuşma Alıştırması"
          description={(
            <span className="ar-text block" dir="rtl">
              {lang === 'ar'
                ? 'استمع، ثم كرّر بصوت عالٍ. إن كان متصفحك يدعم التعرّف على الكلام سنقارن ما نطقتَه بالنصّ كلمةً كلمة.'
                : 'گوێ بگرە، پاشان بە دەنگی بەرز دووبارەی بکەوە. ئەگەر وێبگەڕەکەت پشتگیری ناسینەوەی قسە بکات، ئەوەی گوتووتە وشە بە وشە بەراورد دەکەین.'}
            </span>
          )}
        />

        {/* The honest capability notice */}
        <Card className={cx(
          'mb-5 border-2 p-5',
          support.available
            ? 'border-brand-200 bg-brand-50/50 dark:border-brand-900 dark:bg-brand-950/25'
            : 'border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/25',
        )}
        >
          <div className="flex items-start gap-3">
            {support.available
              ? <Info size={18} className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-400" />
              : <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />}
            <div className="min-w-0">
              <p className="font-display text-sm font-bold text-ink-900 dark:text-white">
                {support.available
                  ? `Konuşma tanıma kullanılabilir (${support.engine})`
                  : 'Konuşma tanıma bu tarayıcıda yok'}
              </p>

              {support.available ? (
                <>
                  <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-300">
                    Tarayıcı söylediğini <strong>yazıya çevirir</strong> ve biz bu yazıyı hedef
                    metinle karşılaştırırız. Buna <strong>metin doğruluğu</strong> diyoruz.
                  </p>
                  <div className="mt-2.5 rounded-lg bg-white/70 p-3 dark:bg-ink-900/60">
                    <Translated
                      value={{
                        ar: 'تنبيه مهم: هذا يقيس دقّة النصّ، لا دقّة النطق. المتصفّح لا يحلّل الأصوات تحليلاً صوتياً — فلا يستطيع أن يخبرك أن حرف ü لديك مائل قليلاً. إن سمع الجهاز كلمتك بشكل صحيح فهذه إشارة جيدة، وإن أخطأ باستمرار في كلمة بعينها فذلك يستحقّ الانتباه.',
                        ku: 'ئاگاداری گرنگ: ئەمە وردی دەق دەپێوێت، نەک وردی دەربڕین. وێبگەڕ شیکاری دەنگەوانی ناکات — بۆیە ناتوانێت پێت بڵێت ü ـەکەت کەمێک لادەدات. ئەگەر ئامێرەکە وشەکەت بە دروستی بیست ئەوە نیشانەیەکی باشە، و ئەگەر بەردەوام لە وشەیەکی دیاریکراودا هەڵە بکات ئەوە شایانی سەرنجە.',
                      }}
                      size="sm"
                    />
                  </div>
                  {support.requiresNetwork && (
                    <p className="mt-2 text-xs text-ink-500">
                      Not: Chrome ve Edge sesi tanıma için sunucuya gönderir; internet bağlantısı
                      gerekir.
                    </p>
                  )}
                  <label className="mt-3 flex cursor-pointer items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={useRecognition}
                      onChange={(e) => setUseRecognition(e.target.checked)}
                      className="h-4 w-4 rounded border-ink-300 text-brand-600"
                    />
                    <span className="text-sm text-ink-700 dark:text-ink-200">
                      Konuşma tanımayı kullan (kapatırsan kendini değerlendirirsin)
                    </span>
                  </label>
                </>
              ) : (
                <>
                  <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-300">
                    {support.reason}
                  </p>
                  <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                    Alıştırma yine çalışır: dinle, yüksek sesle tekrar et ve kendini
                    değerlendir. <strong>Sahte bir puan üretmiyoruz.</strong>
                  </p>
                </>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <Field label="Materyal">
            <Pill active={source === 'words'} onClick={() => setSource('words')}>
              Kelimeler ve kısa kalıplar
            </Pill>
            <Pill active={source === 'sentences'} onClick={() => setSource('sentences')}>
              Cümleler
            </Pill>
          </Field>

          <Field label="Seviye">
            <Pill active={level === 'all'} onClick={() => setLevel('all')}>Hepsi</Pill>
            {LEVEL_ORDER.map((id) => (
              <Pill key={id} active={level === id} onClick={() => setLevel(id)}>
                {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
              </Pill>
            ))}
          </Field>

          <Field label="Soru sayısı">
            {[5, 10, 15].map((n) => (
              <Pill key={n} active={count === n} onClick={() => setCount(n)}>{n}</Pill>
            ))}
          </Field>

          <div className="mt-4 rounded-xl bg-ink-50 p-3 text-center dark:bg-ink-950/60">
            <p className="font-display text-lg font-bold tabular-nums text-ink-900 dark:text-white">
              {pool.length}
            </p>
            <p className="text-xs text-ink-500">uygun materyal</p>
          </div>
        </Card>

        <Button
          className="mt-5 w-full"
          size="lg"
          icon={<Play size={17} />}
          disabled={pool.length === 0}
          onClick={start}
        >
          Başla
        </Button>
      </div>
    );
  }

  /* ---------------- results ---------------- */

  if (finished) {
    const avg = scores.length > 0
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : 0;
    const recognitionUsed = support.available && useRecognition;

    return (
      <div className="mx-auto max-w-2xl">
        <Card className="animate-fade-up p-8 text-center">
          <div className={cx(
            'mx-auto grid h-16 w-16 place-items-center rounded-2xl',
            avg >= 70
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
              : 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400',
          )}
          >
            <Trophy size={30} />
          </div>
          <p className="mt-4 font-display text-3xl font-bold tabular-nums text-ink-950 dark:text-white">
            %{avg}
          </p>
          <p className="mt-1 text-sm font-medium text-ink-500">
            {recognitionUsed
              ? `${session.length} denemede ortalama metin doğruluğu`
              : `${session.length} denemede öz değerlendirme ortalaması`}
          </p>
          {recognitionUsed && (
            <p className="mx-auto mt-3 max-w-md text-xs text-ink-400">
              Bu oran, tarayıcının söylediğini doğru yazıya çevirip çeviremediğini gösterir.
              Telaffuzun fonetik analizi değildir.
            </p>
          )}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button icon={<RotateCcw size={15} />} onClick={start}>Yeni set</Button>
            <Button variant="secondary" onClick={() => setSession(null)}>Ayarlar</Button>
          </div>
        </Card>
      </div>
    );
  }

  if (!current) return null;
  const recognitionActive = support.available && useRecognition;

  /* ---------------- practice ---------------- */

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        eyebrow="Konuşma"
        icon={<Mic size={14} />}
        title="Dinle ve tekrar et"
        action={<LevelBadge level={current.level} />}
      />

      <div className="mb-4 flex items-center justify-between gap-4">
        <ProgressBar value={percent(index, session.length)} size="sm" />
        <span className="shrink-0 font-mono text-xs tabular-nums text-ink-500">
          {index + 1}/{session.length}
        </span>
      </div>

      <Card className="overflow-hidden">
        {/* Target */}
        <div className="border-b border-ink-200 px-6 py-8 text-center dark:border-ink-800">
          <p className="tr-word text-3xl leading-tight" lang="tr">{current.tr}</p>
          <p className="pron mt-2 text-sm">{current.pron}</p>
          <div className="mt-4 flex justify-center">
            <SpeakPair text={current.tr} />
          </div>
          <div className="mx-auto mt-4 max-w-md">
            <Translated value={{ ar: current.ar, ku: current.ku }} size="sm" />
          </div>
        </div>

        {/* Recording / self-assessment */}
        <div className="p-5">
          {recognitionActive ? (
            <>
              {phase !== 'scored' && (
                <div className="relative isolate grid place-items-center overflow-hidden rounded-2xl py-8 surface-sunken">
                  <span
                    className="absolute inset-0 text-brand-700 opacity-[.05] dark:text-brass-300 dark:opacity-[.07]"
                    aria-hidden
                  >
                    <Ornament motif="arcs" scale={92} />
                  </span>

                  <button
                    type="button"
                    onClick={phase === 'recording' ? () => recogniser.stop() : record}
                    aria-label={phase === 'recording' ? 'Kaydı durdur' : 'Kaydı başlat'}
                    aria-pressed={phase === 'recording'}
                    className={cx(
                      'relative grid h-24 w-24 place-items-center rounded-full text-white shadow-lift',
                      'transition duration-200 active:scale-95',
                      phase === 'recording'
                        ? 'animate-pulse-ring bg-accent-700 hover:bg-accent-600'
                        : 'bg-brand-700 hover:bg-brand-600',
                    )}
                  >
                    {phase === 'recording' ? <Square size={26} /> : <Mic size={30} />}
                  </button>

                  {/* A recording indicator that is a word as well as a colour,
                      so it does not depend on seeing red. */}
                  <p className="relative mt-4 flex items-center gap-2 text-sm font-medium text-secondary">
                    {phase === 'recording' && (
                      <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent-600" aria-hidden />
                    )}
                    {phase === 'recording' ? 'Dinliyorum… şimdi söyle' : 'Mikrofona dokun ve söyle'}
                  </p>

                  {interim && (
                    <p className="relative mt-2.5 rounded-lg border px-3 py-1.5 font-mono text-sm text-secondary hairline bg-surface">
                      {interim}
                    </p>
                  )}
                  {error && (
                    <div className="relative mt-4 flex max-w-sm items-start gap-2 rounded-xl bg-brass-50 p-3 text-left ring-1 ring-inset ring-brass-100 dark:bg-brass-950 dark:ring-brass-900">
                      <AlertTriangle size={15} className="mt-0.5 shrink-0 text-brass-600 dark:text-brass-400" />
                      <div>
                        <p className="text-xs text-amber-800 dark:text-amber-300">
                          {errorMessage(error)}
                        </p>
                        <button
                          type="button"
                          onClick={() => selfAssess(true)}
                          className="mt-1.5 text-xs font-semibold text-amber-700 underline dark:text-amber-400"
                        >
                          Kendim değerlendireyim
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {phase === 'scored' && result && (
                <ScoreView
                  result={result}
                  heard={heard}
                  expected={current.tr}
                  onRetry={record}
                  onNext={next}
                  isLast={index + 1 >= session.length}
                />
              )}
            </>
          ) : (
            <div className="py-4 text-center">
              <p className="text-sm text-ink-600 dark:text-ink-300">
                Sesi dinle, yüksek sesle tekrar et, sonra kendini değerlendir.
              </p>
              <p className="mt-1 text-xs text-ink-400">
                Konuşma tanıma olmadığı için sahte bir puan göstermiyoruz.
              </p>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                <Button variant="secondary" icon={<MicOff size={16} />} onClick={() => selfAssess(false)}>
                  Tekrar çalışmalıyım
                </Button>
                <Button icon={<Check size={16} />} onClick={() => selfAssess(true)}>
                  Rahatça söyleyebildim
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      <Button variant="ghost" size="sm" className="mt-4" onClick={() => setSession(null)}>
        Oturumu bitir
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function ScoreView({
  result, heard, expected, onRetry, onNext, isLast,
}: {
  result: SpeechScore;
  heard: string | null;
  expected: string;
  onRetry: () => void;
  onNext: () => void;
  isLast: boolean;
}) {
  const { lang } = useSettings();
  const good = result.score >= 80;
  const ok = result.score >= 50;

  const firstProblem = result.problems[0];
  const hint = firstProblem ? hintFor(firstProblem.expected) : null;

  return (
    <div className="animate-fade-up">
      <div className={cx(
        'rounded-xl p-4',
        good ? 'bg-emerald-50 dark:bg-emerald-950/40'
          : ok ? 'bg-amber-50 dark:bg-amber-950/40'
            : 'bg-accent-50 dark:bg-accent-950/40',
      )}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-ink-500">
              Metin doğruluğu
            </p>
            <p className={cx(
              'font-display text-3xl font-bold tabular-nums',
              good ? 'text-emerald-700 dark:text-emerald-300'
                : ok ? 'text-amber-700 dark:text-amber-300'
                  : 'text-accent-700 dark:text-accent-300',
            )}
            >
              %{result.score}
            </p>
          </div>
          <span className={cx(
            'grid h-11 w-11 place-items-center rounded-full text-white',
            good ? 'bg-emerald-500' : ok ? 'bg-amber-500' : 'bg-accent-500',
          )}
          >
            {good ? <Check size={22} /> : <X size={22} />}
          </span>
        </div>

        <p className="mt-2 text-xs text-ink-600 dark:text-ink-300">
          Tarayıcının duyduğu: <strong className="font-mono">{heard || '(hiçbir şey)'}</strong>
        </p>
      </div>

      {/* Word-by-word comparison */}
      <div className="mt-4">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-ink-400">
          Kelime kelime
        </p>
        <div className="flex flex-wrap gap-1.5">
          {result.words.map((w, i) => (
            <span
              key={i}
              title={w.heard ? `duyulan: ${w.heard}` : 'duyulmadı'}
              className={cx(
                'rounded-lg px-2.5 py-1 font-mono text-sm',
                w.status === 'match' && 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
                w.status === 'near' && 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
                w.status === 'wrong' && 'bg-accent-100 text-accent-800 dark:bg-accent-950/60 dark:text-accent-300',
                w.status === 'missing' && 'bg-ink-100 text-ink-400 line-through dark:bg-ink-800',
              )}
            >
              {w.expected}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-ink-400">
          Yeşil: aynen tanındı · Sarı: yakın (ses farkı olabilir) · Kırmızı: farklı duyuldu ·
          Üstü çizili: hiç duyulmadı
        </p>
      </div>

      {/* Targeted hint */}
      {hint && !good && (
        <div className="mt-4 rounded-xl border border-brand-200 bg-brand-50/60 p-3.5 dark:border-brand-900 dark:bg-brand-950/30">
          <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            İpucu — “{firstProblem.expected}”
          </p>
          <Translated value={hint} size="sm" />
        </div>
      )}

      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-ink-50 p-3 dark:bg-ink-950/60">
        <div className="min-w-0">
          <p className="text-xs text-ink-500">Hedef metni tekrar dinle</p>
          <p className="tr-word truncate text-sm" lang="tr">{expected}</p>
        </div>
        <SpeakButton text={expected} size="sm" />
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        <Button variant="secondary" icon={<RotateCcw size={15} />} onClick={onRetry}>
          Tekrar dene
        </Button>
        <Button icon={<ArrowRight size={16} />} onClick={onNext}>
          {isLast ? 'Sonucu gör' : 'Devam et'}
        </Button>
      </div>

      <p className="mt-3 text-center font-arabic text-[11px] text-ink-400" dir="rtl">
        {lang === 'ar'
          ? 'تذكير: هذا قياس لدقّة النصّ الذي فهمه المتصفّح، وليس تحليلاً صوتياً لنطقك.'
          : 'بیرخستنەوە: ئەمە پێوانەی وردی ئەو دەقەیە کە وێبگەڕ تێیگەیشتووە، نەک شیکاری دەنگەوانی دەربڕینت.'}
      </p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 first:mt-0">
      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-400">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

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
      className={cx(
        'rounded-lg px-2.5 py-1.5 text-xs font-semibold transition',
        active
          ? 'bg-brand-600 text-white'
          : 'bg-ink-100 text-ink-600 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300',
      )}
    >
      {children}
    </button>
  );
}

export { Chip };
