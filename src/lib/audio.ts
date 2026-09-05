/**
 * TurkishPath audio engine.
 *
 * Design goal: every Turkish string anywhere in the app can be spoken with one
 * call, and the WAY it is spoken can be swapped out later without touching a
 * single component.
 *
 * The engine holds an ordered list of providers and asks each in turn whether
 * it can speak a given text. Today that list is:
 *
 *   1. RecordingProvider - looks the text up in a manifest of real recordings.
 *      Ships empty, so it always declines. When the teacher records native
 *      audio, dropping files into /public/audio and listing them in
 *      /public/audio/manifest.json is enough to make it win.
 *   2. WebSpeechProvider - the browser's built-in tr-TR speech synthesis.
 *
 * Adding a third provider (a cloud TTS, a generated-audio CDN) means writing
 * one object that satisfies `AudioProvider` and registering it.
 */

export type SpeechRate = 'slow' | 'normal' | 'fast';

export interface SpeakOptions {
  /** Playback speed. `slow` is what students use to hear every syllable. */
  rate?: SpeechRate;
  /** Overrides the stored voice preference for this one utterance. */
  voiceURI?: string;
  /** Called when playback actually starts. */
  onStart?: () => void;
  /** Called when playback finishes, is cancelled, or fails. */
  onEnd?: () => void;
}

export interface AudioProvider {
  id: string;
  label: string;
  /** True if this provider is usable in the current browser at all. */
  isAvailable(): boolean;
  /** True if this provider can speak this particular text. */
  canSpeak(text: string): boolean;
  speak(text: string, opts: SpeakOptions): Promise<void>;
  stop(): void;
}

const RATE_MAP: Record<SpeechRate, number> = { slow: 0.6, normal: 0.92, fast: 1.15 };

/* ------------------------------------------------------------------ */
/* Provider 1 - pre-recorded native audio                              */
/* ------------------------------------------------------------------ */

type RecordingManifest = Record<string, string>;

export interface RecordingCoverage {
  /** How many recordings the manifest declares. */
  entries: number;
  /** True once a load attempt has finished, successfully or not. */
  loaded: boolean;
  /** Set when the manifest exists but could not be parsed. */
  error: string | null;
}

class RecordingProvider implements AudioProvider {
  id = 'recordings';
  label = 'Native recordings';

  private manifest: RecordingManifest = {};
  private loaded = false;
  private loadError: string | null = null;
  private current: HTMLAudioElement | null = null;
  private inflight: Promise<void> | null = null;

  /**
   * Loads /audio/manifest.json if it exists. The manifest maps a normalised
   * Turkish string to a file path, e.g. { "merhaba": "/audio/merhaba.mp3" }.
   * A missing manifest is not an error - it just means no recordings yet.
   *
   * Concurrent callers share one request, and `force` re-reads the file so the
   * teacher can drop in new recordings and refresh coverage without a reload.
   */
  load(force = false): Promise<void> {
    if (this.loaded && !force) return Promise.resolve();
    if (this.inflight) return this.inflight;

    this.inflight = (async () => {
      try {
        // Relative to the deployment base, not the domain root: under a
        // GitHub Pages project path `/audio/...` resolves outside the app.
        const res = await fetch(`${import.meta.env.BASE_URL}audio/manifest.json`, {
          cache: force ? 'reload' : 'force-cache',
        });
        // A single-page-app host answers unknown paths with index.html and a
        // 200, so "ok" is not enough - the content type has to be JSON or we
        // would report a bogus parse error on every deployment without audio.
        const contentType = res.headers.get('content-type') ?? '';
        if (res.ok && contentType.includes('json')) {
          const parsed = (await res.json()) as unknown;
          if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            // Normalise keys on load so lookups never have to guess.
            const normalised: RecordingManifest = {};
            for (const [key, value] of Object.entries(parsed as RecordingManifest)) {
              if (typeof value === 'string') normalised[normaliseKey(key)] = value;
            }
            this.manifest = normalised;
            this.loadError = null;
          } else {
            this.loadError = 'manifest.json must be a JSON object of text -> path';
          }
        }
      } catch (err) {
        // A missing file is the normal case; a malformed one is worth surfacing.
        this.loadError = err instanceof SyntaxError ? 'manifest.json is not valid JSON' : null;
      } finally {
        this.loaded = true;
        this.inflight = null;
      }
    })();

    return this.inflight;
  }

  get coverage(): RecordingCoverage {
    return {
      entries: Object.keys(this.manifest).length,
      loaded: this.loaded,
      error: this.loadError,
    };
  }

  /** True if this exact text has a recording. Used by coverage reporting. */
  has(text: string): boolean {
    return normaliseKey(text) in this.manifest;
  }

  isAvailable(): boolean {
    return Object.keys(this.manifest).length > 0;
  }

  canSpeak(text: string): boolean {
    return normaliseKey(text) in this.manifest;
  }

  speak(text: string, opts: SpeakOptions): Promise<void> {
    const src = this.manifest[normaliseKey(text)];
    return new Promise((resolve) => {
      this.stop();
      const audio = new Audio(src);
      audio.playbackRate = RATE_MAP[opts.rate ?? 'normal'];
      this.current = audio;
      const finish = () => {
        opts.onEnd?.();
        this.current = null;
        resolve();
      };
      audio.addEventListener('ended', finish, { once: true });
      audio.addEventListener('error', finish, { once: true });
      opts.onStart?.();
      void audio.play().catch(finish);
    });
  }

  stop(): void {
    if (this.current) {
      this.current.pause();
      this.current.currentTime = 0;
      this.current = null;
    }
  }
}

/* ------------------------------------------------------------------ */
/* Provider 2 - browser speech synthesis                               */
/* ------------------------------------------------------------------ */

class WebSpeechProvider implements AudioProvider {
  id = 'webspeech';
  label = 'Browser speech (tr-TR)';

  private preferredVoiceURI: string | null = null;

  isAvailable(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  canSpeak(): boolean {
    return this.isAvailable();
  }

  setPreferredVoice(uri: string | null): void {
    this.preferredVoiceURI = uri;
  }

  /** Every voice the browser exposes, Turkish ones first. */
  listVoices(): SpeechSynthesisVoice[] {
    if (!this.isAvailable()) return [];
    const voices = window.speechSynthesis.getVoices();
    return [...voices].sort((a, b) => turkishRank(b) - turkishRank(a));
  }

  /** The voice we will actually use: preference, else best Turkish, else default. */
  resolveVoice(overrideURI?: string): SpeechSynthesisVoice | null {
    const voices = this.listVoices();
    if (voices.length === 0) return null;
    const wanted = overrideURI ?? this.preferredVoiceURI;
    if (wanted) {
      const match = voices.find((v) => v.voiceURI === wanted);
      if (match) return match;
    }
    return voices.find((v) => turkishRank(v) > 0) ?? null;
  }

  speak(text: string, opts: SpeakOptions): Promise<void> {
    return new Promise((resolve) => {
      if (!this.isAvailable()) {
        opts.onEnd?.();
        resolve();
        return;
      }
      // Chrome keeps a queue; cancelling first makes rapid taps feel instant.
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'tr-TR';
      utterance.rate = RATE_MAP[opts.rate ?? 'normal'];
      utterance.pitch = 1;
      utterance.volume = 1;

      const voice = this.resolveVoice(opts.voiceURI);
      if (voice) utterance.voice = voice;

      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        opts.onEnd?.();
        resolve();
      };

      utterance.onstart = () => opts.onStart?.();
      utterance.onend = finish;
      utterance.onerror = finish;

      // Safety net: some browsers never fire onend for very short utterances.
      const estimate = Math.max(1500, text.length * 110);
      window.setTimeout(finish, estimate);

      window.speechSynthesis.speak(utterance);
    });
  }

  stop(): void {
    if (this.isAvailable()) window.speechSynthesis.cancel();
  }
}

/** Higher is more Turkish. Used to sort voices so tr-TR wins. */
function turkishRank(voice: SpeechSynthesisVoice): number {
  const lang = voice.lang.toLowerCase();
  if (lang === 'tr-tr') return 3;
  if (lang.startsWith('tr')) return 2;
  if (/türk|turk/i.test(voice.name)) return 1;
  return 0;
}

/** Lowercase, strip punctuation - the manifest key format. */
function normaliseKey(text: string): string {
  return text
    .toLocaleLowerCase('tr-TR')
    .replace(/[.,!?;:()"'’…]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ------------------------------------------------------------------ */
/* The engine                                                          */
/* ------------------------------------------------------------------ */

export class AudioEngine {
  private recordings = new RecordingProvider();
  private webSpeech = new WebSpeechProvider();
  private providers: AudioProvider[];

  /** Text currently being spoken, or null. Components subscribe to this. */
  private speaking: string | null = null;
  private listeners = new Set<(speaking: string | null) => void>();

  constructor() {
    this.providers = [this.recordings, this.webSpeech];
    void this.recordings.load();
  }

  /** True if ANY provider can produce sound in this browser. */
  get isSupported(): boolean {
    return this.providers.some((p) => p.isAvailable());
  }

  get webSpeechProvider(): WebSpeechProvider {
    return this.webSpeech;
  }

  get recordingProvider(): RecordingProvider {
    return this.recordings;
  }

  /** Re-reads the manifest so newly added recordings take effect immediately. */
  reloadRecordings(): Promise<void> {
    return this.recordings.load(true);
  }

  /**
   * How much of a given body of Turkish text already has native audio.
   * Used by Settings and the teacher panel to show migration progress.
   */
  coverageFor(texts: string[]): { covered: number; total: number; missing: string[] } {
    const unique = [...new Set(texts.map((t) => t.trim()).filter(Boolean))];
    const missing: string[] = [];
    let covered = 0;
    for (const text of unique) {
      if (this.recordings.has(text)) covered += 1;
      else missing.push(text);
    }
    return { covered, total: unique.length, missing };
  }

  /** Which provider would handle this text - shown in Settings for transparency. */
  providerFor(text: string): AudioProvider {
    return this.providers.find((p) => p.isAvailable() && p.canSpeak(text)) ?? this.webSpeech;
  }

  subscribe(listener: (speaking: string | null) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private setSpeaking(text: string | null): void {
    this.speaking = text;
    this.listeners.forEach((l) => l(text));
  }

  get currentlySpeaking(): string | null {
    return this.speaking;
  }

  /** Speak a Turkish string. Safe to call repeatedly; the previous one is cut off. */
  async speak(text: string, opts: SpeakOptions = {}): Promise<void> {
    const clean = text.trim();
    if (!clean) return;

    this.stop();
    const provider = this.providerFor(clean);

    this.setSpeaking(clean);
    await provider.speak(clean, {
      ...opts,
      onStart: opts.onStart,
      onEnd: () => {
        if (this.speaking === clean) this.setSpeaking(null);
        opts.onEnd?.();
      },
    });
  }

  /** Speak several strings one after another, with a small gap. */
  async speakSequence(texts: string[], opts: SpeakOptions = {}): Promise<void> {
    for (const text of texts) {
      await this.speak(text, opts);
      await new Promise((r) => setTimeout(r, 260));
    }
  }

  stop(): void {
    this.providers.forEach((p) => p.stop());
    if (this.speaking !== null) this.setSpeaking(null);
  }
}

/** The single engine instance the whole app shares. */
export const audio = new AudioEngine();

/**
 * Chrome populates `getVoices()` asynchronously. This resolves once voices are
 * actually available so the Settings page never shows an empty list.
 */
export function whenVoicesReady(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }
    const existing = window.speechSynthesis.getVoices();
    if (existing.length > 0) {
      resolve(existing);
      return;
    }
    const handler = () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handler);
      resolve(window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.addEventListener('voiceschanged', handler);
    // Give up after a moment rather than hanging forever.
    window.setTimeout(() => resolve(window.speechSynthesis.getVoices()), 2000);
  });
}
