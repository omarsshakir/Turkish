/**
 * Speech recognition — and an honest account of what it can and cannot do.
 *
 * WHAT THIS IS
 * The Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`) returns
 * a TEXT TRANSCRIPT of what the browser thinks it heard, plus a `confidence`
 * number the engine will not explain. That is all it returns.
 *
 * WHAT THIS IS NOT
 * It is not phonetic analysis. It cannot tell a student that their `ü` was
 * too far back, that they stressed the wrong syllable, or that their `r` was
 * trilled instead of tapped. Real pronunciation scoring needs forced alignment
 * against an acoustic model and per-phoneme likelihoods — none of which any
 * browser exposes. Anything claiming otherwise from these APIs alone is
 * guessing.
 *
 * SO WHAT DO WE DO WITH IT
 * We measure TEXT ACCURACY: did the recogniser, listening in Turkish, come
 * back with the words you meant to say? That is genuinely useful — if it
 * consistently hears "kus" when you say "kuş", something real is wrong — but
 * the UI must label it as what it is, and the app does.
 *
 * BROWSER SUPPORT (checked at runtime, not assumed)
 *   Chrome / Edge desktop + Android  - yes, tr-TR works, needs a network round-trip
 *   Safari (macOS 14.5+, iOS 17+)    - partial, permission model differs
 *   Firefox                          - no implementation at all
 * When it is unavailable the speaking page falls back to a self-assessed
 * listen-and-repeat drill rather than hiding the feature.
 */
import { fold } from './utils';

/* The API is still vendor-prefixed and is not in lib.dom for all TS versions. */
interface SpeechRecognitionAlternativeLike {
  transcript: string;
  confidence: number;
}
interface SpeechRecognitionResultLike {
  0: SpeechRecognitionAlternativeLike;
  isFinal: boolean;
  length: number;
}
interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: SpeechRecognitionResultLike;
  };
}
interface SpeechRecognitionErrorEventLike {
  error: string;
  message?: string;
}
interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}
type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

function getConstructor(): SpeechRecognitionCtor | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export interface SpeechSupport {
  /** The API object exists in this browser. */
  available: boolean;
  /** Why it is unavailable, in Turkish, for the UI. */
  reason?: string;
  /** True for engines known to send audio to a server (Chrome/Edge). */
  requiresNetwork: boolean;
  /** Best-effort browser name for the support notice. */
  engine: string;
}

export function detectSpeechSupport(): SpeechSupport {
  const ctor = getConstructor();
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const isFirefox = /firefox/i.test(ua);
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  const isChromium = /chrome|edg/i.test(ua);

  if (!ctor) {
    return {
      available: false,
      requiresNetwork: false,
      engine: isFirefox ? 'Firefox' : isSafari ? 'Safari' : 'bu tarayıcı',
      reason: isFirefox
        ? 'Firefox konuşma tanımayı hiç desteklemiyor. Chrome, Edge veya Safari deneyin.'
        : 'Bu tarayıcı konuşma tanımayı desteklemiyor. Chrome veya Edge deneyin.',
    };
  }

  return {
    available: true,
    requiresNetwork: isChromium,
    engine: isChromium ? 'Chrome/Edge' : isSafari ? 'Safari' : 'tarayıcı',
  };
}

export interface RecognitionResult {
  /** Best transcript the engine returned, or '' if it heard nothing. */
  transcript: string;
  /** Engine's own confidence, 0-1. Treat as a hint, not a measurement. */
  confidence: number;
  /** All alternatives, best first. */
  alternatives: string[];
}

export type RecognitionError =
  | 'no-speech' | 'audio-capture' | 'not-allowed' | 'network' | 'aborted' | 'unknown';

const ERROR_MESSAGES: Record<RecognitionError, string> = {
  'no-speech': 'Ses algılanmadı. Mikrofona biraz daha yakın konuşmayı deneyin.',
  'audio-capture': 'Mikrofona erişilemedi. Başka bir uygulama kullanıyor olabilir.',
  'not-allowed': 'Mikrofon izni verilmedi. Tarayıcı ayarlarından izin verin.',
  network: 'Konuşma tanıma sunucusuna ulaşılamadı. İnternet bağlantınızı kontrol edin.',
  aborted: 'Kayıt durduruldu.',
  unknown: 'Konuşma tanınamadı.',
};

export function errorMessage(error: RecognitionError): string {
  return ERROR_MESSAGES[error] ?? ERROR_MESSAGES.unknown;
}

/**
 * Records one utterance and resolves with the transcript.
 * Rejects with a `RecognitionError` string, never with a raw event.
 */
export class SpeechRecogniser {
  private recognition: SpeechRecognitionLike | null = null;
  private active = false;

  get isActive(): boolean {
    return this.active;
  }

  listen(options: {
    lang?: string;
    /** Called with partial transcripts while the student is still speaking. */
    onInterim?: (text: string) => void;
    onStart?: () => void;
    /** Hard stop after this many ms in case the engine never fires onend. */
    timeoutMs?: number;
  } = {}): Promise<RecognitionResult> {
    const Ctor = getConstructor();
    if (!Ctor) return Promise.reject('unknown' as RecognitionError);
    if (this.active) this.stop();

    return new Promise<RecognitionResult>((resolve, reject) => {
      const recognition = new Ctor();
      this.recognition = recognition;
      this.active = true;

      recognition.lang = options.lang ?? 'tr-TR';
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 3;

      let best = '';
      let confidence = 0;
      const alternatives: string[] = [];
      let settled = false;
      let errored: RecognitionError | null = null;

      const finish = () => {
        if (settled) return;
        settled = true;
        this.active = false;
        window.clearTimeout(timer);
        if (errored) reject(errored);
        else resolve({ transcript: best.trim(), confidence, alternatives });
      };

      const timer = window.setTimeout(() => {
        try { recognition.stop(); } catch { /* already stopped */ }
        finish();
      }, options.timeoutMs ?? 10_000);

      recognition.onstart = () => options.onStart?.();

      recognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; i += 1) {
          const result = event.results[i];
          const alt = result[0];
          if (result.isFinal) {
            best = alt.transcript;
            confidence = alt.confidence;
            for (let a = 0; a < result.length; a += 1) {
              const candidate = (result as unknown as Record<number, SpeechRecognitionAlternativeLike>)[a];
              if (candidate?.transcript) alternatives.push(candidate.transcript);
            }
          } else {
            options.onInterim?.(alt.transcript);
          }
        }
      };

      recognition.onerror = (event) => {
        const code = event.error as RecognitionError;
        // "no-speech" with a transcript already captured is not a real failure.
        if (code === 'no-speech' && best) return;
        errored = (Object.keys(ERROR_MESSAGES) as RecognitionError[]).includes(code)
          ? code
          : 'unknown';
      };

      recognition.onend = finish;

      try {
        recognition.start();
      } catch {
        this.active = false;
        window.clearTimeout(timer);
        reject('unknown' as RecognitionError);
      }
    });
  }

  stop(): void {
    if (this.recognition) {
      try { this.recognition.stop(); } catch { /* already stopped */ }
    }
    this.active = false;
  }

  abort(): void {
    if (this.recognition) {
      try { this.recognition.abort(); } catch { /* already stopped */ }
    }
    this.active = false;
  }
}

export const recogniser = new SpeechRecogniser();

/* ------------------------------------------------------------------ */
/* Scoring — text accuracy only                                        */
/* ------------------------------------------------------------------ */

export interface WordComparison {
  expected: string;
  /** What the recogniser produced for this slot, or null if it dropped it. */
  heard: string | null;
  status: 'match' | 'near' | 'wrong' | 'missing';
}

export interface SpeechScore {
  /** 0-100 word-level match. This is TEXT accuracy, not pronunciation. */
  score: number;
  words: WordComparison[];
  /** Words that came back different — worth showing the student. */
  problems: WordComparison[];
  /** Engine confidence, surfaced but never presented as a pronunciation score. */
  confidence: number;
}

function normaliseWord(word: string): string {
  return word.toLocaleLowerCase('tr-TR').replace(/[.,!?;:()"'’…]/g, '').trim();
}

/** Levenshtein distance, used only to distinguish "near" from "wrong". */
function editDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    const curr = [i];
    for (let j = 1; j <= b.length; j += 1) {
      curr[j] = Math.min(
        prev[j] + 1,
        curr[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    prev = curr;
  }
  return prev[b.length];
}

/**
 * Compares what the student was asked to say with what the recogniser heard.
 *
 * A word counts as:
 *   match   - identical after normalisation
 *   near    - identical once Turkish diacritics are folded (kus/kuş), OR one
 *             edit away. Scored as a partial credit, and flagged, because this
 *             is exactly where a Turkish-specific sound may have been missed.
 *   wrong   - the recogniser heard something else
 *   missing - the recogniser produced no word for this slot
 */
export function scoreSpeech(
  expected: string, heard: string, confidence = 0,
): SpeechScore {
  const expectedWords = expected.split(/\s+/).map(normaliseWord).filter(Boolean);
  const heardWords = heard.split(/\s+/).map(normaliseWord).filter(Boolean);

  const words: WordComparison[] = expectedWords.map((word, i) => {
    const got = heardWords[i] ?? null;
    if (got === null) return { expected: word, heard: null, status: 'missing' };
    if (got === word) return { expected: word, heard: got, status: 'match' };
    // Same letters once Turkish diacritics are folded => the sound is the issue.
    if (fold(got) === fold(word) || editDistance(got, word) <= 1) {
      return { expected: word, heard: got, status: 'near' };
    }
    return { expected: word, heard: got, status: 'wrong' };
  });

  const earned = words.reduce((sum, w) => {
    if (w.status === 'match') return sum + 1;
    if (w.status === 'near') return sum + 0.6;
    return sum;
  }, 0);

  // Extra words the recogniser invented cost a little, but never below zero.
  const extras = Math.max(0, heardWords.length - expectedWords.length);
  const penalty = Math.min(0.2, extras * 0.05);

  const score = expectedWords.length === 0
    ? 0
    : Math.max(0, Math.round(((earned / expectedWords.length) - penalty) * 100));

  return {
    score,
    words,
    problems: words.filter((w) => w.status !== 'match'),
    confidence,
  };
}

/**
 * Turkish sounds that recognisers most often confuse, used to give the student
 * a targeted hint when a word comes back "near" rather than a vague "try again".
 */
const CONFUSION_HINTS: { pattern: RegExp; ar: string; ku: string }[] = [
  {
    pattern: /[şs]/,
    ar: 'انتبه للفرق بين ش و س — "ş" تحتاج لساناً أعرض.',
    ku: 'ئاگاداری جیاوازی نێوان ش و س بە.',
  },
  {
    pattern: /[çc]/,
    ar: 'انتبه للفرق بين ç (تش) و c (ج) — الفرق في اهتزاز الحبال الصوتية.',
    ku: 'ئاگاداری جیاوازی نێوان چ و ج بە.',
  },
  {
    pattern: /[ıi]/,
    ar: 'انتبه للفرق بين ı و i — أشهر خطأ عند الناطقين بالعربية.',
    ku: 'ئاگاداری جیاوازی نێوان ı و i بە.',
  },
  {
    pattern: /[öo]/,
    ar: 'انتبه لـ ö — اللسان أمامي والشفتان مستديرتان في آنٍ واحد.',
    ku: 'ئاگاداری ö بە — زمان لە پێشەوە و لێو خڕ.',
  },
  {
    pattern: /[üu]/,
    ar: 'انتبه لـ ü — انطق i ثم دوّر شفتيك دون تحريك اللسان.',
    ku: 'ئاگاداری ü بە — ی بڵێ پاشان لێو خڕ بکە بەبێ جوڵاندنی زمان.',
  },
  {
    pattern: /ğ/,
    ar: 'حرف ğ لا يُنطق — يُطيل الحركة قبله فقط.',
    ku: 'پیتی ğ دەرناچێت — تەنها بزوێنی پێشی درێژ دەکاتەوە.',
  },
];

/** Returns a targeted hint for the first confusable sound in a problem word. */
export function hintFor(word: string): { ar: string; ku: string } | null {
  for (const hint of CONFUSION_HINTS) {
    if (hint.pattern.test(word)) return { ar: hint.ar, ku: hint.ku };
  }
  return null;
}
