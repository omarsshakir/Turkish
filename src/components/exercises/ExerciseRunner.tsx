import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, Check, Mic, RotateCcw, Trophy, Volume2, X,
} from 'lucide-react';
import type {
  Exercise, FillExercise, ListeningExercise, MatchExercise, McqExercise,
  OrderExercise, SpeakExercise, TranslateExercise,
} from '@/types/content';
import { audio } from '@/lib/audio';
import { answersMatch, cx, percent, shuffle } from '@/lib/utils';
import { useSettings } from '@/state/SettingsContext';
import { useProgress } from '@/state/ProgressContext';
import { Button, ProgressBar } from '@/components/ui/Primitives';
import { SpeakButton } from '@/components/audio/SpeakButton';
import { Translated } from '@/components/learn/Translation';

/**
 * The exercise runner.
 *
 * One component drives every exercise type in the platform. It owns the
 * sequence, the scoring, the immediate feedback and the final summary; each
 * exercise type only has to render its own question and report back whether
 * the student was right.
 */

interface RunnerProps {
  exercises: Exercise[];
  /** Recorded against this lesson when the set is finished. */
  lessonId?: string;
  title?: string;
  onFinish?: (score: { correct: number; total: number }) => void;
  /** Reshuffle the exercises on every run. Practice pages want this. */
  shuffleOrder?: boolean;
}

export function ExerciseRunner({
  exercises, lessonId, title, onFinish, shuffleOrder = false,
}: RunnerProps) {
  const { lang } = useSettings();
  const { recordQuiz, recordAttempt } = useProgress();

  const [runKey, setRunKey] = useState(0);
  const items = useMemo(
    () => (shuffleOrder ? shuffle(exercises) : exercises),
    // runKey deliberately re-shuffles on restart
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercises, shuffleOrder, runKey],
  );

  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [done, setDone] = useState(false);

  const current = items[index];
  const total = items.length;

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (answered) return;
    setAnswered(true);
    setLastCorrect(isCorrect);
    if (isCorrect) setCorrectCount((c) => c + 1);
    recordAttempt(isCorrect);
  }, [answered, recordAttempt]);

  const next = useCallback(() => {
    if (index + 1 >= total) {
      setDone(true);
      const score = { correct: correctCount, total };
      if (lessonId) recordQuiz({ lessonId, ...score });
      onFinish?.(score);
      return;
    }
    setIndex((i) => i + 1);
    setAnswered(false);
  }, [index, total, correctCount, lessonId, recordQuiz, onFinish]);

  const restart = () => {
    setRunKey((k) => k + 1);
    setIndex(0);
    setAnswered(false);
    setCorrectCount(0);
    setDone(false);
  };

  if (total === 0) {
    return (
      <p className="rounded-xl bg-ink-50 p-4 text-sm text-ink-500 dark:bg-ink-900 dark:text-ink-400">
        Bu bölümde henüz alıştırma yok.
      </p>
    );
  }

  if (done) {
    const score = percent(correctCount, total);
    const passed = score >= 70;
    return (
      <div className="card animate-fade-up p-8 text-center">
        <div className={cx(
          'mx-auto grid h-16 w-16 place-items-center rounded-2xl',
          passed
            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
            : 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400',
        )}
        >
          <Trophy size={30} />
        </div>
        <p className="mt-4 font-display text-3xl font-bold tabular-nums text-ink-950 dark:text-white">
          {correctCount} / {total}
        </p>
        <p className="mt-1 font-mono text-sm text-ink-500">%{score}</p>
        <p className="mt-3 font-arabic text-sm text-ink-600 dark:text-ink-300" dir="rtl">
          {passed
            ? (lang === 'ar' ? 'أحسنت! أنت جاهز للدرس التالي.' : 'باشە! ئامادەیت بۆ وانەی داهاتوو.')
            : (lang === 'ar' ? 'راجع الدرس ثم أعد المحاولة.' : 'وانەکە پێداچووەوە و دووبارە هەوڵ بدە.')}
        </p>
        <Button variant="secondary" icon={<RotateCcw size={15} />} className="mt-5" onClick={restart}>
          Tekrar dene
        </Button>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-ink-200 px-5 py-4 dark:border-ink-800">
        <div className="mb-2.5 flex items-center justify-between gap-4">
          <p className="font-display text-sm font-semibold text-ink-800 dark:text-ink-100">
            {title ?? 'Alıştırma'}
          </p>
          <p className="font-mono text-xs tabular-nums text-ink-500">
            {index + 1} / {total}
            <span className="ml-3 text-emerald-600 dark:text-emerald-400">✓ {correctCount}</span>
          </p>
        </div>
        <ProgressBar value={percent(index, total)} size="sm" />
      </div>

      <div className="p-5">
        <ExerciseView
          key={`${current.id}-${runKey}`}
          exercise={current}
          answered={answered}
          onAnswer={handleAnswer}
        />

        {answered && (
          <div className="mt-5 animate-fade-up">
            {/* Feedback is a marked passage, not a celebration. §16 - this is
                a language academy, and a wrong answer is information rather
                than a failure, so the wording is "not quite" rather than
                "wrong" and nothing bounces. */}
            <div
              data-exercise-feedback={lastCorrect ? 'correct' : 'incorrect'}
              className={cx(
                'flex items-start gap-3 rounded-xl border-l-[3px] p-4',
                lastCorrect
                  ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40'
                  : 'border-accent-600 bg-accent-50 dark:bg-accent-950/40',
              )}
            >
              <span className={cx(
                'grid h-7 w-7 shrink-0 place-items-center rounded-full text-white',
                lastCorrect ? 'bg-emerald-600' : 'bg-accent-600',
              )}
              >
                {lastCorrect ? <Check size={16} /> : <X size={16} />}
              </span>
              <div className="min-w-0 flex-1">
                <p className={cx(
                  'font-display text-sm font-semibold',
                  lastCorrect
                    ? 'text-emerald-800 dark:text-emerald-300'
                    : 'text-accent-800 dark:text-accent-300',
                )}
                >
                  {lastCorrect ? 'Doğru' : 'Tam değil'}
                </p>
                <CorrectAnswer exercise={current} />
                {current.explain && (
                  <div className="mt-2">
                    <Translated value={current.explain} size="sm" />
                  </div>
                )}
              </div>
            </div>

            <Button className="mt-4 w-full" onClick={next} icon={<ArrowRight size={16} />}>
              {index + 1 >= total ? 'Sonucu gör' : 'Devam et'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shows the right answer after the student commits                    */
/* ------------------------------------------------------------------ */

function CorrectAnswer({ exercise }: { exercise: Exercise }) {
  let text: string | null = null;
  switch (exercise.kind) {
    case 'mcq': text = exercise.options[exercise.answer]; break;
    case 'translate': text = exercise.options[exercise.answer]; break;
    case 'listening': text = exercise.options[exercise.answer]; break;
    case 'order': text = exercise.sentence; break;
    case 'fill': text = exercise.sentence.replace('___', exercise.answer); break;
    default: text = null;
  }
  if (!text) return null;
  return (
    <p className="mt-1 text-sm text-ink-700 dark:text-ink-300">
      Doğru cevap: <strong className="tr-word">{text}</strong>
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Dispatcher                                                          */
/* ------------------------------------------------------------------ */

interface ViewProps {
  exercise: Exercise;
  answered: boolean;
  onAnswer: (correct: boolean) => void;
}

function ExerciseView({ exercise, answered, onAnswer }: ViewProps) {
  switch (exercise.kind) {
    case 'mcq': return <McqView exercise={exercise} answered={answered} onAnswer={onAnswer} />;
    case 'translate': return <TranslateView exercise={exercise} answered={answered} onAnswer={onAnswer} />;
    case 'listening': return <ListeningView exercise={exercise} answered={answered} onAnswer={onAnswer} />;
    case 'match': return <MatchView exercise={exercise} answered={answered} onAnswer={onAnswer} />;
    case 'order': return <OrderView exercise={exercise} answered={answered} onAnswer={onAnswer} />;
    case 'fill': return <FillView exercise={exercise} answered={answered} onAnswer={onAnswer} />;
    case 'speak': return <SpeakView exercise={exercise} answered={answered} onAnswer={onAnswer} />;
    default: return null;
  }
}

/* ------------------------------------------------------------------ */
/* Shared option button                                                */
/* ------------------------------------------------------------------ */

function OptionButton({
  label, state, onClick, disabled, speakable, rtl,
}: {
  label: string;
  state: 'idle' | 'correct' | 'wrong' | 'muted';
  onClick: () => void;
  disabled: boolean;
  speakable?: boolean;
  rtl?: boolean;
}) {
  const tone = {
    idle: 'border-ink-200 bg-white hover:border-brand-400 hover:bg-brand-50 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-brand-600 dark:hover:bg-brand-950/40',
    correct: 'border-emerald-400 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/50',
    wrong: 'border-accent-400 bg-accent-50 animate-shake dark:border-accent-600 dark:bg-accent-950/50',
    muted: 'border-ink-200 bg-white opacity-55 dark:border-ink-800 dark:bg-ink-900',
  }[state];

  // The speak control sits BESIDE the option rather than inside it: a button
  // nested in a button is invalid HTML and swallows the outer click.
  return (
    <div className={cx('flex w-full items-center gap-2 rounded-xl border-2 transition', tone)}>
      <button
        type="button"
        data-exercise-option
        onClick={onClick}
        disabled={disabled}
        className={cx(
          'flex min-w-0 flex-1 items-center gap-3 rounded-xl px-4 py-3 text-left',
          !disabled && 'active:scale-[.99]',
        )}
      >
        <span
          className={cx('min-w-0 flex-1', rtl ? 'ar-text text-right' : 'tr-word text-[15px]')}
          dir={rtl ? 'rtl' : 'ltr'}
          lang={rtl ? undefined : 'tr'}
        >
          {label}
        </span>
        {state === 'correct' && <Check size={17} className="shrink-0 text-emerald-600" />}
        {state === 'wrong' && <X size={17} className="shrink-0 text-accent-600" />}
      </button>
      {speakable && <SpeakButton text={label} size="xs" variant="ghost" className="mr-2" />}
    </div>
  );
}

function useChoice(answered: boolean) {
  const [picked, setPicked] = useState<number | null>(null);
  useEffect(() => { if (!answered) setPicked(null); }, [answered]);
  return [picked, setPicked] as const;
}

function stateFor(i: number, picked: number | null, answer: number, answered: boolean) {
  if (!answered) return 'idle' as const;
  if (i === answer) return 'correct' as const;
  if (i === picked) return 'wrong' as const;
  return 'muted' as const;
}

/* ------------------------------------------------------------------ */
/* 1. Multiple choice                                                  */
/* ------------------------------------------------------------------ */

function McqView({ exercise, answered, onAnswer }: { exercise: McqExercise } & Omit<ViewProps, 'exercise'>) {
  const [picked, setPicked] = useChoice(answered);

  return (
    <div>
      {exercise.tr && (
        <div className="mb-4 flex items-center gap-3 rounded-xl bg-ink-50 p-4 dark:bg-ink-950/60">
          <p className="tr-word flex-1 text-xl" lang="tr">{exercise.tr}</p>
          <SpeakButton text={exercise.tr} />
        </div>
      )}
      <Translated value={exercise.prompt} className="mb-4" />
      <div className="space-y-2.5">
        {exercise.options.map((option, i) => (
          <OptionButton
            key={option + i}
            label={option}
            rtl={!exercise.optionsAreTurkish && /[؀-ۿ]/.test(option)}
            speakable={exercise.optionsAreTurkish}
            state={stateFor(i, picked, exercise.answer, answered)}
            disabled={answered}
            onClick={() => { setPicked(i); onAnswer(i === exercise.answer); }}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Translation (TR→AR, TR→KU, AR→TR, KU→TR)                          */
/* ------------------------------------------------------------------ */

const DIRECTION_LABEL: Record<TranslateExercise['direction'], string> = {
  'tr-ar': 'Türkçe → العربية',
  'tr-ku': 'Türkçe → کوردی',
  'ar-tr': 'العربية → Türkçe',
  'ku-tr': 'کوردی → Türkçe',
};

function TranslateView({ exercise, answered, onAnswer }: { exercise: TranslateExercise } & Omit<ViewProps, 'exercise'>) {
  const [picked, setPicked] = useChoice(answered);
  const sourceIsTurkish = exercise.direction.startsWith('tr');
  const optionsAreTurkish = exercise.direction.endsWith('tr');

  return (
    <div>
      <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
        {DIRECTION_LABEL[exercise.direction]}
      </p>

      <div className="mb-4 flex items-center gap-3 rounded-xl bg-ink-50 p-4 dark:bg-ink-950/60">
        <div className="min-w-0 flex-1">
          {sourceIsTurkish ? (
            <>
              <p className="tr-word text-xl" lang="tr">{exercise.source}</p>
              {exercise.pron && <p className="pron mt-1">{exercise.pron}</p>}
            </>
          ) : (
            <p className="ar-text text-lg text-ink-800 dark:text-ink-100" dir="rtl">
              {exercise.source}
            </p>
          )}
        </div>
        {sourceIsTurkish && <SpeakButton text={exercise.source} />}
      </div>

      <div className="space-y-2.5">
        {exercise.options.map((option, i) => (
          <OptionButton
            key={option + i}
            label={option}
            rtl={!optionsAreTurkish}
            speakable={optionsAreTurkish}
            state={stateFor(i, picked, exercise.answer, answered)}
            disabled={answered}
            onClick={() => { setPicked(i); onAnswer(i === exercise.answer); }}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Listening                                                        */
/* ------------------------------------------------------------------ */

function ListeningView({ exercise, answered, onAnswer }: { exercise: ListeningExercise } & Omit<ViewProps, 'exercise'>) {
  const [picked, setPicked] = useChoice(answered);
  const { lang } = useSettings();

  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-ink-700 dark:text-ink-200">
        Dinle ve doğru cevabı seç.
        <span className="ml-2 font-arabic font-normal text-ink-500" dir="rtl">
          {lang === 'ar' ? 'استمع واختر الإجابة الصحيحة.' : 'گوێ بگرە و وەڵامی دروست هەڵبژێرە.'}
        </span>
      </p>

      <div className="mb-5 grid place-items-center rounded-2xl border-2 border-dashed border-brand-200 bg-brand-50/50 py-8 dark:border-brand-800 dark:bg-brand-950/30">
        <SpeakButton text={exercise.audio} size="lg" variant="solid" />
        <p className="mt-3 text-xs font-medium text-ink-500">Dinlemek için dokun</p>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            void audio.speak(exercise.audio, { rate: 'slow' });
          }}
          className="mt-2 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold text-brand-600 hover:bg-brand-100 dark:text-brand-400 dark:hover:bg-brand-900/50"
        >
          <Volume2 size={13} />
          Yavaş dinle
        </button>
      </div>

      <div className="space-y-2.5">
        {exercise.options.map((option, i) => (
          <OptionButton
            key={option + i}
            label={option}
            rtl={exercise.optionLang !== 'tr'}
            speakable={exercise.optionLang === 'tr' && answered}
            state={stateFor(i, picked, exercise.answer, answered)}
            disabled={answered}
            onClick={() => { setPicked(i); onAnswer(i === exercise.answer); }}
          />
        ))}
      </div>

      {answered && exercise.reveal && (
        <div className="mt-4 rounded-xl bg-ink-50 p-4 dark:bg-ink-950/60">
          <p className="tr-word text-lg" lang="tr">{exercise.reveal.tr}</p>
          <p className="pron mt-0.5">{exercise.reveal.pron}</p>
          <div className="mt-2">
            <Translated value={{ ar: exercise.reveal.ar, ku: exercise.reveal.ku }} size="sm" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Matching                                                         */
/* ------------------------------------------------------------------ */

function MatchView({ exercise, answered, onAnswer }: { exercise: MatchExercise } & Omit<ViewProps, 'exercise'>) {
  const { lang } = useSettings();
  const [selectedTr, setSelectedTr] = useState<number | null>(null);
  const [matched, setMatched] = useState<Record<number, number>>({});
  const [wrongPair, setWrongPair] = useState<number | null>(null);

  const translations = useMemo(
    () => shuffle(exercise.pairs.map((pair, i) => ({ i, text: lang === 'ar' ? pair.ar : pair.ku }))),
    [exercise, lang],
  );

  const allMatched = Object.keys(matched).length === exercise.pairs.length;

  useEffect(() => {
    if (allMatched && !answered) onAnswer(true);
  }, [allMatched, answered, onAnswer]);

  const pickTranslation = (translationIndex: number) => {
    if (selectedTr === null) return;
    if (translationIndex === selectedTr) {
      setMatched((m) => ({ ...m, [selectedTr]: translationIndex }));
      setSelectedTr(null);
    } else {
      setWrongPair(translationIndex);
      window.setTimeout(() => setWrongPair(null), 500);
      setSelectedTr(null);
    }
  };

  return (
    <div>
      <Translated value={exercise.prompt} className="mb-4" />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          {exercise.pairs.map((pair, i) => {
            const isMatched = i in matched;
            return (
              <button
                key={pair.tr}
                type="button"
                disabled={isMatched || answered}
                onClick={() => setSelectedTr(i)}
                className={cx(
                  'flex w-full items-center gap-2 rounded-xl border-2 px-3.5 py-2.5 text-left transition',
                  isMatched
                    ? 'border-emerald-400 bg-emerald-50 opacity-70 dark:border-emerald-700 dark:bg-emerald-950/40'
                    : selectedTr === i
                      ? 'border-brand-500 bg-brand-50 dark:border-brand-500 dark:bg-brand-950/50'
                      : 'border-ink-200 bg-white hover:border-brand-300 dark:border-ink-700 dark:bg-ink-900',
                )}
              >
                <span className="tr-word min-w-0 flex-1 truncate text-sm" lang="tr">{pair.tr}</span>
                {isMatched && <Check size={15} className="shrink-0 text-emerald-600" />}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          {translations.map(({ i, text }) => {
            const isMatched = i in matched;
            return (
              <button
                key={text}
                type="button"
                disabled={isMatched || answered}
                onClick={() => pickTranslation(i)}
                className={cx(
                  'w-full rounded-xl border-2 px-3.5 py-2.5 transition',
                  isMatched
                    ? 'border-emerald-400 bg-emerald-50 opacity-70 dark:border-emerald-700 dark:bg-emerald-950/40'
                    : wrongPair === i
                      ? 'border-accent-400 bg-accent-50 animate-shake dark:border-accent-600 dark:bg-accent-950/40'
                      : 'border-ink-200 bg-white hover:border-brand-300 dark:border-ink-700 dark:bg-ink-900',
                )}
              >
                <span className="ar-text block text-sm" dir="rtl">{text}</span>
              </button>
            );
          })}
        </div>
      </div>
      {!answered && (
        <p className="mt-3 text-center text-xs text-ink-400">
          Önce Türkçe kelimeyi, sonra karşılığını seç.
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Sentence construction                                            */
/* ------------------------------------------------------------------ */

function OrderView({ exercise, answered, onAnswer }: { exercise: OrderExercise } & Omit<ViewProps, 'exercise'>) {
  const correctWords = useMemo(() => exercise.sentence.split(/\s+/), [exercise]);
  const tiles = useMemo(
    () => shuffle([...correctWords, ...(exercise.distractors ?? [])]).map((w, i) => ({ id: i, word: w })),
    [correctWords, exercise.distractors],
  );

  const [placed, setPlaced] = useState<{ id: number; word: string }[]>([]);
  const available = tiles.filter((t) => !placed.some((p) => p.id === t.id));

  const check = () => {
    const attempt = placed.map((p) => p.word).join(' ');
    onAnswer(answersMatch(attempt, exercise.sentence));
  };

  return (
    <div>
      <Translated value={exercise.prompt} className="mb-3" />
      <div className="mb-4 rounded-xl bg-ink-50 p-3.5 dark:bg-ink-950/60">
        <p className="ar-text text-sm text-ink-600 dark:text-ink-300" dir="rtl">
          {exercise.ar}
        </p>
      </div>

      <div
        className={cx(
          'mb-4 min-h-[4.5rem] rounded-xl border-2 border-dashed p-3 transition',
          answered
            ? 'border-ink-200 dark:border-ink-700'
            : 'border-brand-200 bg-brand-50/40 dark:border-brand-800 dark:bg-brand-950/20',
        )}
      >
        {placed.length === 0 ? (
          <p className="py-3 text-center text-xs text-ink-400">
            Kelimelere dokunarak cümleyi kur.
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {placed.map((tile, i) => (
              <button
                key={tile.id}
                type="button"
                disabled={answered}
                onClick={() => setPlaced((p) => p.filter((_, idx) => idx !== i))}
                className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-70"
              >
                {tile.word}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {available.map((tile) => (
          <button
            key={tile.id}
            type="button"
            disabled={answered}
            onClick={() => setPlaced((p) => [...p, tile])}
            className="rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-sm font-semibold text-ink-700 transition hover:border-brand-400 hover:text-brand-700 disabled:opacity-50 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200"
          >
            {tile.word}
          </button>
        ))}
      </div>

      {!answered && (
        <Button className="w-full" disabled={placed.length === 0} onClick={check}>
          Kontrol et
        </Button>
      )}

      {answered && (
        <div className="flex items-center gap-3 rounded-xl bg-ink-50 p-4 dark:bg-ink-950/60">
          <div className="min-w-0 flex-1">
            <p className="tr-word text-base" lang="tr">{exercise.sentence}</p>
            {exercise.pron && <p className="pron mt-0.5">{exercise.pron}</p>}
          </div>
          <SpeakButton text={exercise.sentence} />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Fill in the blank                                                */
/* ------------------------------------------------------------------ */

function FillView({ exercise, answered, onAnswer }: { exercise: FillExercise } & Omit<ViewProps, 'exercise'>) {
  const [typed, setTyped] = useState('');
  const [picked, setPicked] = useChoice(answered);
  const [before, after] = exercise.sentence.split('___');

  const submitTyped = () => {
    if (!typed.trim()) return;
    onAnswer(answersMatch(typed, exercise.answer));
  };

  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-ink-700 dark:text-ink-200">
        Boşluğu doldur.
      </p>

      <div className="mb-4 rounded-xl bg-ink-50 p-4 dark:bg-ink-950/60">
        <p className="flex flex-wrap items-baseline gap-1.5 text-lg leading-relaxed" lang="tr">
          <span className="tr-word">{before}</span>
          <span className={cx(
            'inline-block min-w-[4.5rem] rounded-lg border-b-2 px-2 py-0.5 text-center font-display font-bold',
            answered
              ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
              : 'border-brand-400 bg-white text-brand-600 dark:bg-ink-900',
          )}
          >
            {answered ? exercise.answer : '?'}
          </span>
          <span className="tr-word">{after}</span>
        </p>
        <div className="mt-2">
          <Translated value={{ ar: exercise.ar, ku: exercise.ku }} size="sm" />
        </div>
      </div>

      {exercise.options ? (
        <div className="grid gap-2.5 sm:grid-cols-2">
          {exercise.options.map((option, i) => {
            const isCorrect = answersMatch(option, exercise.answer);
            const state = !answered
              ? 'idle' as const
              : isCorrect ? 'correct' as const
                : i === picked ? 'wrong' as const : 'muted' as const;
            return (
              <OptionButton
                key={option + i}
                label={option}
                state={state}
                disabled={answered}
                onClick={() => { setPicked(i); onAnswer(isCorrect); }}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') submitTyped(); }}
            disabled={answered}
            placeholder="Cevabını yaz…"
            className="input"
            lang="tr"
          />
          <Button onClick={submitTyped} disabled={answered || !typed.trim()}>
            Kontrol
          </Button>
        </div>
      )}

      {answered && (
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-ink-50 p-3.5 dark:bg-ink-950/60">
          <p className="tr-word min-w-0 flex-1 text-base" lang="tr">
            {exercise.sentence.replace('___', exercise.answer)}
          </p>
          <SpeakButton text={exercise.sentence.replace('___', exercise.answer)} size="sm" />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Listen and repeat (self-assessed)                                */
/* ------------------------------------------------------------------ */

function SpeakView({ exercise, answered, onAnswer }: { exercise: SpeakExercise } & Omit<ViewProps, 'exercise'>) {
  const { lang } = useSettings();

  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink-700 dark:text-ink-200">
        <Mic size={16} className="text-accent-500" />
        Dinle ve tekrar et
        <span className="font-arabic font-normal text-ink-500" dir="rtl">
          {lang === 'ar' ? '— استمع ثم كرّر بصوت عالٍ.' : '— گوێ بگرە پاشان بە دەنگی بەرز دووبارەی بکەوە.'}
        </span>
      </div>

      <div className="rounded-2xl border-2 border-accent-200 bg-accent-50/50 p-5 dark:border-accent-900 dark:bg-accent-950/25">
        <p className="tr-word text-xl leading-snug" lang="tr">{exercise.tr}</p>
        <p className="pron mt-1">{exercise.pron}</p>
        <div className="mt-3">
          <Translated value={{ ar: exercise.ar, ku: exercise.ku }} size="sm" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <SpeakButton text={exercise.tr} withLabel variant="solid" />
          <SpeakButton text={exercise.tr} rate="slow" withLabel label="Yavaş" />
        </div>
      </div>

      {!answered && (
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          <Button variant="secondary" onClick={() => onAnswer(false)}>
            Tekrar çalışmalıyım
          </Button>
          <Button onClick={() => onAnswer(true)} icon={<Check size={16} />}>
            Söyleyebildim
          </Button>
        </div>
      )}
    </div>
  );
}
