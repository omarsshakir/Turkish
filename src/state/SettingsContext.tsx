import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
  type ReactNode,
} from 'react';
import type { SupportLang } from '@/types/content';
import { STORAGE_KEYS, readStore, writeStore } from '@/lib/storage';
import { audio, type SpeechRate } from '@/lib/audio';

export interface Settings {
  /** Which translation the student reads: Arabic or Sorani Kurdish. */
  lang: SupportLang;
  /** Show both translations side by side instead of just the active one. */
  showBoth: boolean;
  theme: 'light' | 'dark' | 'system';
  /** Default speech rate for every audio button. */
  rate: SpeechRate;
  /** Chosen browser voice, or null for "best Turkish available". */
  voiceURI: string | null;
  /** Speak a word automatically when its detail panel opens. */
  autoplay: boolean;
  /** Show the pronunciation guide under Turkish text. */
  showPronunciation: boolean;
  /** Teacher mode unlocks the admin area and ignores level locks. */
  teacherMode: boolean;
}

const DEFAULTS: Settings = {
  lang: 'ar',
  showBoth: false,
  theme: 'system',
  rate: 'normal',
  voiceURI: null,
  autoplay: false,
  showPronunciation: true,
  teacherMode: false,
};

interface SettingsValue extends Settings {
  set: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  toggleLang: () => void;
  reset: () => void;
  /** Resolved theme after applying the system preference. */
  resolvedTheme: 'light' | 'dark';
}

const SettingsContext = createContext<SettingsValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => ({
    ...DEFAULTS,
    ...readStore<Partial<Settings>>(STORAGE_KEYS.settings, {}),
  }));

  const [systemDark, setSystemDark] = useState(
    () => typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const resolvedTheme: 'light' | 'dark' = settings.theme === 'system'
    ? (systemDark ? 'dark' : 'light')
    : settings.theme;

  useEffect(() => {
    writeStore(STORAGE_KEYS.settings, settings);
    audio.webSpeechProvider.setPreferredVoice(settings.voiceURI);
  }, [settings]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const set = useCallback(<K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleLang = useCallback(() => {
    setSettings((prev) => ({ ...prev, lang: prev.lang === 'ar' ? 'ku' : 'ar' }));
  }, []);

  const reset = useCallback(() => setSettings(DEFAULTS), []);

  const value = useMemo<SettingsValue>(
    () => ({ ...settings, set, toggleLang, reset, resolvedTheme }),
    [settings, set, toggleLang, reset, resolvedTheme],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): SettingsValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used inside <SettingsProvider>');
  return ctx;
}

/** Shorthand for reading the active translation out of a bilingual value. */
export function useT() {
  const { lang, showBoth } = useSettings();
  return useMemo(
    () => ({
      lang,
      showBoth,
      t: (value: { ar: string; ku: string }) => (lang === 'ar' ? value.ar : value.ku),
      other: (value: { ar: string; ku: string }) => (lang === 'ar' ? value.ku : value.ar),
      otherLang: (lang === 'ar' ? 'ku' : 'ar') as SupportLang,
    }),
    [lang, showBoth],
  );
}
