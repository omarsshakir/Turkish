import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, Check, Ear, Headphones, Play, RefreshCw, RotateCcw,
  Settings2, Trophy, Volume2, X,
} from 'lucide-react';
import { LEVEL_ORDER, type LevelId } from '@/types/content';
import { audio } from '@/lib/audio';
import { answersMatch, cx, percent, sample, shuffle } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, EmptyState, LevelBadge, PageHeader, ProgressBar,
} from '@/components/ui/Primitives';
import { TranslationStack } from '@/components/learn/Translation';
import { Ornament, Waveform } from '@/components/ui/Ornament';

/**
 * Dedicated listening mode.
 *
 * The workflow the brief asks for, in order:
 *   1. play Turkish audio          — the ONLY thing available at first
 *   2. Turkish text stays hidden
 *   3. a question is asked
 *   4. student answers (choice or typing)
 *   5. correct / incorrect feedback
 *   6. reveal transcript + Arabic + Kurdish
 *   7. replay at any point, at normal or slow speed
 *
 * Material is drawn from content that already exists rather than a new content
 * type: vocabulary, sentence packs, dialogue lines and reading paragraphs.
 */

type MaterialKind = 'word' | 'phrase' | 'sentence' | 'dialogue' | 'passage';
type AnswerMode = 'choice' | 'typing';

interface ListeningItem {
  id: string;
  kind: MaterialKind;
  /** What gets spoken. Never shown until the answer is revealed. */
  tr: string;
  pron: string;
  ar: string;
  ku: string;
  level: LevelId;
  /** Extra context shown after revealing, e.g. who is speaking. */
  context?: string;
}

const KIND_LABEL: Record<MaterialKind, string> = {
  word: 'Kelime',
  phrase: 'Kalıp',
  sentence: 'Cümle',
  dialogue: 'Diyalog',
  passage: 'Metin',
};

const KIND_DESC: Record<MaterialKind, { ar: string; ku: string }> = {
  word: { ar: 'كلمات مفردة', ku: 'وشەی تاک' },
  phrase: { ar: 'عبارات قصيرة', ku: 'دەستەواژەی کورت' },
  sentence: { ar: 'جمل كاملة', ku: 'ڕستەی تەواو' },
  dialogue: { ar: 'أسطر من حوارات', ku: 'دێڕ لە گفتوگۆکان' },
  passage: { ar: 'فقرات من نصوص القراءة', ku: 'بڕگە لە دەقەکانی خوێندنەوە' },
};

export default function Listening() {
  const { lang } = useSettings();
  const { vocabulary, sentencePacks, visibleLessons } = useContent();
  const progress = useProgress();

  const [kinds, setKinds] = useState<MaterialKind[]>(['word', 'sentence']);
  const [level, setLevel] = useState<LevelId | 'all'>('all');
  const [answerMode, setAnswerMode] = useState<AnswerMode>('choice');
  const [count, setCount] = useState(10);

  const [session, setSession] = useState<ListeningItem[] | null>(null);
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [typed, setTyped] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [playCount, setPlayCount] = useState(0);
  /* Whether the engine is speaking right now, so the stage can show a live
     waveform. Read from the existing audio subscription rather than tracked
     separately - there is one audio engine and it already knows. */
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(false);

  /* ---------------- material pool ---------------- */

  const pool = useMemo<ListeningItem[]>(() => {
    const out: ListeningItem[] = [];

    if (kinds.includes('word')) {
      for (const w of vocabulary) {
        if (w.pos === 'phrase') continue;
        out.push({
          id: `w-${w.id}`, kind: 'word',
          tr: w.tr, pron: w.pron, ar: w.ar, ku: w.ku, level: w.level,
        });
      }
    }

    if (kinds.includes('phrase')) {
      for (const w of vocabulary) {
        if (w.pos !== 'phrase') continue;
        out.push({
          id: `p-${w.id}`, kind: 'phrase',
          tr: w.tr, pron: w.pron, ar: w.ar, ku: w.ku, level: w.level,
        });
      }
    }

    if (kinds.includes('sentence')) {
      for (const pack of sentencePacks) {
        for (const [i, s] of pack.sentences.entries()) {
          out.push({
            id: `s-${pack.id}-${i}`, kind: 'sentence',
            tr: s.tr, pron: s.pron, ar: s.ar, ku: s.ku, level: pack.level,
            context: pack.title,
          });
        }
      }
    }

    if (kinds.includes('dialogue')) {
      for (const lesson of visibleLessons) {
        for (const block of lesson.blocks) {
          if (block.type !== 'dialogue') continue;
          for (const [i, line] of block.lines.entries()) {
            out.push({
              id: `d-${lesson.id}-${i}`, kind: 'dialogue',
              tr: line.tr, pron: line.pron, ar: line.ar, ku: line.ku,
              level: lesson.level, context: `${lesson.title} — ${line.speaker}`,
            });
          }
        }
      }
    }

    if (kinds.includes('passage')) {
      for (const lesson of visibleLessons) {
        for (const block of lesson.blocks) {
          if (block.type !== 'passage') continue;
          for (const [i, para] of block.paragraphs.entries()) {
            out.push({
              id: `pa-${lesson.id}-${i}`, kind: 'passage',
              tr: para.tr, pron: '', ar: para.ar, ku: para.ku,
              level: lesson.level, context: lesson.title,
            });
          }
        }
      }
    }

    return level === 'all' ? out : out.filter((i) => i.level === level);
  }, [kinds, level, vocabulary, sentencePacks, visibleLessons]);

  const current = session?.[index];

  /* Build the multiple-choice options for the current item. */
  useEffect(() => audio.subscribe(
    (speakingText) => setPlaying(speakingText !== null),
  ), []);

  useEffect(() => {
    if (!current || answerMode !== 'choice') {
      setChoices([]);
      return;
    }
    const read = (i: ListeningItem) => (lang === 'ar' ? i.ar : i.ku);
    const answer = read(current);
    const distractors = sample(
      pool.filter((i) => i.id !== current.id && i.kind === current.kind && read(i) !== answer),
      3,
    ).map(read);
    setChoices(shuffle([answer, ...distractors]));
  }, [current, answerMode, lang, pool]);

  /* Autoplay each new item once — this is a listening exercise. */
  useEffect(() => {
    if (!current) return;
    setPlayCount(0);
    const timer = window.setTimeout(() => {
      void audio.speak(current.tr);
      setPlayCount(1);
    }, 350);
    return () => window.clearTimeout(timer);
  }, [current]);

  const start = () => {
    const picked = sample(pool, count);
    setSession(picked);
    setIndex(0);
    setPicked(null);
    setTyped('');
    setRevealed(false);
    setCorrectCount(0);
    setFinished(false);
  };

  const submit = useCallback((isCorrect: boolean, choiceIndex?: number) => {
    if (revealed) return;
    if (typeof choiceIndex === 'number') setPicked(choiceIndex);
    setRevealed(true);
    if (isCorrect) setCorrectCount((c) => c + 1);
    progress.recordAttempt(isCorrect);
  }, [revealed, progress]);

  const next = () => {
    if (!session) return;
    if (index + 1 >= session.length) {
      progress.recordListening({ correct: correctCount, total: session.length });
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
    setTyped('');
    setRevealed(false);
  };

  const replay = (slow = false) => {
    if (!current) return;
    void audio.speak(current.tr, slow ? { rate: 'slow' } : {});
    setPlayCount((n) => n + 1);
    progress.countListen();
  };

  const toggleKind = (k: MaterialKind) => {
    setKinds((prev) => (prev.includes(k)
      ? (prev.length > 1 ? prev.filter((x) => x !== k) : prev)
      : [...prev, k]));
  };

  /* ---------------- setup screen ---------------- */

  if (!session) {
    return (
      <div className="mx-auto max-w-3xl">
        <PageHeader
          eyebrow="Alıştırma"
          icon={<Headphones size={14} />}
          title="Dinleme Modu"
          description={(
            <span className="ar-text block" dir="rtl">
              {lang === 'ar'
                ? 'استمع أولاً — النصّ التركي مخفي. أجب، ثم اكشف النصّ والترجمتين. يمكنك إعادة التشغيل بأي سرعة في أي وقت.'
                : 'سەرەتا گوێ بگرە — دەقی تورکی شاراوەیە. وەڵام بدەرەوە، پاشان دەق و هەردوو وەرگێڕان ئاشکرا بکە. لە هەر کاتێکدا دەتوانیت دووبارە لێی بدەیت.'}
            </span>
          )}
        />

        <div className="space-y-5">
          <Card className="p-5">
            <h2 className="mb-3 flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
              <Ear size={15} className="text-ink-400" />
              Materyal türü
            </h2>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {(Object.keys(KIND_LABEL) as MaterialKind[]).map((k) => {
                const active = kinds.includes(k);
                const available = poolSizeFor(k, vocabulary, sentencePacks, visibleLessons);
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => toggleKind(k)}
                    aria-pressed={active}
                    className={cx(
                      'rounded-xl border-2 p-3.5 text-left transition',
                      active
                        ? 'border-brand-500 bg-brand-50 dark:border-brand-600 dark:bg-brand-950/40'
                        : 'border-ink-200 hover:border-brand-300 dark:border-ink-700',
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-bold text-ink-900 dark:text-white">
                        {KIND_LABEL[k]}
                      </span>
                      {active && <Check size={14} className="text-brand-600" />}
                    </div>
                    <span className="ar-text mt-0.5 block text-xs text-ink-500" dir="rtl">
                      {lang === 'ar' ? KIND_DESC[k].ar : KIND_DESC[k].ku}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] text-ink-400">
                      {available} adet
                    </span>
                  </button>
                );
              })}
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="mb-3 flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
              <Settings2 size={15} className="text-ink-400" />
              Ayarlar
            </h2>

            <Field label="Seviye">
              <Pill active={level === 'all'} onClick={() => setLevel('all')}>Hepsi</Pill>
              {LEVEL_ORDER.map((id) => (
                <Pill key={id} active={level === id} onClick={() => setLevel(id)}>
                  {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
                </Pill>
              ))}
            </Field>

            <Field label="Cevap biçimi">
              <Pill active={answerMode === 'choice'} onClick={() => setAnswerMode('choice')}>
                Şıklardan seç
              </Pill>
              <Pill active={answerMode === 'typing'} onClick={() => setAnswerMode('typing')}>
                Duyduğunu yaz (zor)
              </Pill>
            </Field>

            <Field label="Soru sayısı">
              {[5, 10, 15, 20].map((n) => (
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
            className="w-full"
            size="lg"
            icon={<Play size={17} />}
            disabled={pool.length < 4}
            onClick={start}
          >
            Dinlemeye başla
          </Button>

          {pool.length < 4 && (
            <p className="text-center text-xs text-amber-600 dark:text-amber-400">
              Bu filtrelerle yeterli materyal yok. Tür veya seviye seçimini genişlet.
            </p>
          )}

          {!audio.isSupported && (
            <p className="rounded-xl bg-amber-50 p-3 text-center text-xs text-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
              Bu tarayıcı ses sentezini desteklemiyor. Dinleme alıştırması çalışmaz.
            </p>
          )}
        </div>
      </div>
    );
  }

  /* ---------------- result screen ---------------- */

  if (finished) {
    const score = percent(correctCount, session.length);
    return (
      <div className="mx-auto max-w-2xl">
        <Card className="animate-fade-up p-8 text-center">
          <div className={cx(
            'mx-auto grid h-16 w-16 place-items-center rounded-2xl',
            score >= 70
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
              : 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400',
          )}
          >
            <Trophy size={30} />
          </div>
          <p className="mt-4 font-display text-3xl font-bold tabular-nums text-ink-950 dark:text-white">
            {correctCount} / {session.length}
          </p>
          <p className="mt-1 font-mono text-sm text-ink-500">%{score}</p>
          <p className="mt-3 ar-text text-sm text-ink-600 dark:text-ink-300" dir="rtl">
            {score >= 70
              ? (lang === 'ar' ? 'أذنك تتحسّن. جرّب مستوى أصعب أو وضع الكتابة.' : 'گوێت باشتر دەبێت. ئاستێکی قورستر یان دۆخی نووسین تاقی بکەوە.')
              : (lang === 'ar' ? 'استمع للمواد نفسها مرة أخرى — التكرار الصوتي هو المفتاح.' : 'دیسان گوێ لە هەمان مادە بگرە — دووبارەکردنەوەی دەنگی کلیلەکەیە.')}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button icon={<RotateCcw size={15} />} onClick={start}>Yeni set</Button>
            <Button variant="secondary" onClick={() => setSession(null)}>Ayarları değiştir</Button>
          </div>
        </Card>
      </div>
    );
  }

  /* ---------------- listening screen ---------------- */

  if (!current) return null;

  const answer = lang === 'ar' ? current.ar : current.ku;
  const typedCorrect = answersMatch(typed, current.tr);

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        eyebrow="Dinleme"
        icon={<Headphones size={14} />}
        title="Dinle ve cevapla"
        action={(
          <div className="flex items-center gap-2">
            <Chip tone="neutral">{KIND_LABEL[current.kind]}</Chip>
            <LevelBadge level={current.level} />
          </div>
        )}
      />

      <div className="mb-4 flex items-center justify-between gap-4">
        <ProgressBar value={percent(index, session.length)} size="sm" />
        <span className="shrink-0 font-mono text-xs tabular-nums text-ink-500">
          {index + 1}/{session.length}
          <span className="ml-2 text-emerald-600 dark:text-emerald-400">✓{correctCount}</span>
        </span>
      </div>

      <Card className="overflow-hidden">
        {/* Step 1-2: audio only, text hidden.
            §13 - the listening stage goes dark. Nothing to read, nothing to
            look at, ripples spreading from the sound. It should feel like a
            different mode of study from a written quiz, because it is. */}
        <div className="relative isolate grid place-items-center overflow-hidden bg-rail py-12">
          <span className="absolute inset-0 text-brand-300 opacity-[.10]" aria-hidden>
            <Ornament motif="arcs" scale={96} />
          </span>

          <p className="relative mb-6 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-brass-300/80">
            <Ear size={13} aria-hidden />
            Dikkatle dinle
          </p>

          <button
            type="button"
            onClick={() => replay(false)}
            aria-label="Sesi tekrar çal"
            className="group relative grid h-24 w-24 place-items-center rounded-full bg-brand-600 text-white shadow-lift transition duration-200 hover:bg-brand-500 active:scale-95"
          >
            {/* One quiet ring while audio is playing. */}
            {playing && (
              <span
                className="absolute inset-0 animate-pulse-ring rounded-full"
                aria-hidden
              />
            )}
            {playing
              ? <Waveform active bars={5} size="lg" />
              : <Volume2 size={34} aria-hidden />}
          </button>

          <p className="relative mt-5 font-mono text-[11px] text-ink-400">
            {playCount === 0 ? 'Çalınıyor…' : `${playCount} kez dinledin`}
          </p>

          <div className="relative mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => replay(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-ink-200 transition hover:border-brass-400/50 hover:text-brass-300"
            >
              <RefreshCw size={12} aria-hidden />
              Yavaş tekrar
            </button>
          </div>

          {!revealed && (
            <p className="relative mt-6 text-[11px] text-ink-500">
              Türkçe metin cevabı verene kadar gizli
            </p>
          )}
        </div>

        {/* Step 3-4: question + answer */}
        <div className="p-5">
          {answerMode === 'choice' ? (
            <>
              <p className="mb-3 text-sm font-semibold text-ink-700 dark:text-ink-200">
                Ne duydun?
                <span className="ml-2 font-arabic font-normal text-ink-500" dir="rtl">
                  {lang === 'ar' ? 'ماذا سمعت؟ اختر المعنى.' : 'چیت بیست؟ واتاکە هەڵبژێرە.'}
                </span>
              </p>
              <div className="space-y-2.5">
                {choices.map((choice, i) => {
                  const isAnswer = choice === answer;
                  const state = !revealed
                    ? 'idle'
                    : isAnswer ? 'correct' : (i === picked ? 'wrong' : 'muted');
                  return (
                    <button
                      key={choice + i}
                      type="button"
                      disabled={revealed}
                      onClick={() => submit(isAnswer, i)}
                      className={cx(
                        'flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-right transition',
                        state === 'idle' && 'border-ink-200 bg-white hover:border-brand-400 hover:bg-brand-50 dark:border-ink-700 dark:bg-ink-900 dark:hover:bg-brand-950/40',
                        state === 'correct' && 'border-emerald-400 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/50',
                        state === 'wrong' && 'border-accent-400 bg-accent-50 animate-shake dark:border-accent-600 dark:bg-accent-950/50',
                        state === 'muted' && 'border-ink-200 opacity-55 dark:border-ink-800',
                      )}
                    >
                      <span className="ar-text min-w-0 flex-1" dir="rtl">{choice}</span>
                      {state === 'correct' && <Check size={17} className="shrink-0 text-emerald-600" />}
                      {state === 'wrong' && <X size={17} className="shrink-0 text-accent-600" />}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p className="mb-3 text-sm font-semibold text-ink-700 dark:text-ink-200">
                Duyduğunu Türkçe yaz.
                <span className="ml-2 font-arabic font-normal text-ink-500" dir="rtl">
                  {lang === 'ar' ? 'اكتب بالتركية ما سمعته.' : 'ئەوەی بیستت بە تورکی بنووسە.'}
                </span>
              </p>
              <div className="flex gap-2">
                <input
                  value={typed}
                  onChange={(e) => setTyped(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && typed.trim()) submit(typedCorrect); }}
                  disabled={revealed}
                  placeholder="Duyduğunu yaz…"
                  className="input"
                  lang="tr"
                  autoFocus
                />
                <Button disabled={revealed || !typed.trim()} onClick={() => submit(typedCorrect)}>
                  Kontrol
                </Button>
              </div>
              {revealed && (
                <p className={cx(
                  'mt-3 text-sm font-semibold',
                  typedCorrect ? 'text-emerald-600' : 'text-accent-600',
                )}
                >
                  {typedCorrect ? 'Doğru yazdın!' : `Yazdığın: “${typed || '—'}”`}
                </p>
              )}
            </>
          )}

          {/* Steps 5-6: feedback + full reveal.
              The reveal uses §11's three-language presentation: each language
              under its own label with its own rule, so nothing is ever blended
              and the student can find their own language at a glance. */}
          {revealed && (
            <div className="mt-5 animate-fade-up rounded-xl border p-4 hairline">
              <p className="eyebrow mb-3.5">Metin</p>

              <TranslationStack
                tr={current.tr}
                pron={current.pron}
                ar={current.ar}
                ku={current.ku}
                size="md"
              />

              {current.context && (
                <p className="mt-3 t-caption">{current.context}</p>
              )}

              <Button className="mt-5 w-full" onClick={next} icon={<ArrowRight size={16} />}>
                {index + 1 >= session.length ? 'Sonucu gör' : 'Devam et'}
              </Button>
            </div>
          )}
        </div>
      </Card>

      <Button
        variant="ghost"
        size="sm"
        className="mt-4"
        onClick={() => setSession(null)}
      >
        Oturumu bitir
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function poolSizeFor(
  kind: MaterialKind,
  vocabulary: ReturnType<typeof useContent>['vocabulary'],
  packs: ReturnType<typeof useContent>['sentencePacks'],
  lessons: ReturnType<typeof useContent>['visibleLessons'],
): number {
  switch (kind) {
    case 'word': return vocabulary.filter((w) => w.pos !== 'phrase').length;
    case 'phrase': return vocabulary.filter((w) => w.pos === 'phrase').length;
    case 'sentence': return packs.reduce((s, p) => s + p.sentences.length, 0);
    case 'dialogue':
      return lessons.reduce((s, l) => s + l.blocks.reduce(
        (n, b) => n + (b.type === 'dialogue' ? b.lines.length : 0), 0,
      ), 0);
    case 'passage':
      return lessons.reduce((s, l) => s + l.blocks.reduce(
        (n, b) => n + (b.type === 'passage' ? b.paragraphs.length : 0), 0,
      ), 0);
    default: return 0;
  }
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

export { EmptyState };
