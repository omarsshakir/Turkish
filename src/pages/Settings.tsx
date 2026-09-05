import { useEffect, useState } from 'react';
import {
  AlertTriangle, Ear, Eye, GraduationCap, Languages, Monitor, Moon, Settings as Cog,
  Sun, Trash2, Volume2,
} from 'lucide-react';
import { audio, whenVoicesReady, type SpeechRate } from '@/lib/audio';
import { cx } from '@/lib/utils';
import { useSettings } from '@/state/SettingsContext';
import { useProgress } from '@/state/ProgressContext';
import { useContent } from '@/state/ContentContext';
import { Button, Card, Chip, PageHeader } from '@/components/ui/Primitives';
import { SpeakButton } from '@/components/audio/SpeakButton';

const SAMPLE = 'Merhaba, Türkçe öğrenmek çok güzel.';

export default function SettingsPage() {
  const settings = useSettings();
  const progress = useProgress();
  const { stats } = useContent();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    void whenVoicesReady().then(() => setVoices(audio.webSpeechProvider.listVoices()));
  }, []);

  const turkishVoices = voices.filter((v) => v.lang.toLowerCase().startsWith('tr'));
  const activeProvider = audio.providerFor(SAMPLE);

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Ayarlar"
        icon={<Cog size={14} />}
        title="Tercihlerin"
        description={(
          <span className="ar-text block" dir="rtl">
            {settings.lang === 'ar'
              ? 'اضبط لغة الترجمة والصوت والمظهر. كل الإعدادات تُحفظ في متصفحك.'
              : 'زمانی وەرگێڕان و دەنگ و ڕووکار ڕێک بخە. هەموو ڕێکخستنەکان لە وێبگەڕەکەتدا پاشەکەوت دەکرێن.'}
          </span>
        )}
      />

      <div className="space-y-5">
        {/* Language */}
        <Section
          icon={<Languages size={17} />}
          title="Çeviri dili"
          subtitle="Açıklamalar ve çeviriler bu dilde gösterilir. Türkçe içerik hiç değişmez."
        >
          <div className="grid gap-2.5 sm:grid-cols-2">
            {([
              ['ar', 'العربية', 'Modern Standart Arapça'],
              ['ku', 'کوردی', 'Soranî Kürtçesi'],
            ] as const).map(([code, native, note]) => (
              <button
                key={code}
                type="button"
                onClick={() => settings.set('lang', code)}
                className={cx(
                  'rounded-xl border-2 p-4 text-left transition',
                  settings.lang === code
                    ? 'border-brand-500 bg-brand-50 dark:border-brand-600 dark:bg-brand-950/40'
                    : 'border-ink-200 hover:border-brand-300 dark:border-ink-700',
                )}
              >
                <p className="font-arabic text-xl font-bold text-ink-900 dark:text-white" dir="rtl">
                  {native}
                </p>
                <p className="mt-1 text-xs text-ink-500">{note}</p>
              </button>
            ))}
          </div>

          <Toggle
            label="Her iki çeviriyi birlikte göster"
            hint="Arapça ve Kürtçe alt alta, ayrı ayrı etiketlenmiş olarak görünür."
            checked={settings.showBoth}
            onChange={(v) => settings.set('showBoth', v)}
          />
        </Section>

        {/* Audio */}
        <Section
          icon={<Volume2 size={17} />}
          title="Ses ve telaffuz"
          subtitle="Ses sistemi önce kayıtlı telaffuzları arar, bulamazsa tarayıcının Türkçe sentezleyicisini kullanır."
        >
          <div className="rounded-xl bg-ink-50 p-4 dark:bg-ink-950/60">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="tr-word text-sm" lang="tr">{SAMPLE}</p>
                <p className="mt-1 text-xs text-ink-500">
                  Aktif kaynak:{' '}
                  <strong className="text-ink-700 dark:text-ink-200">{activeProvider.label}</strong>
                </p>
              </div>
              <SpeakButton text={SAMPLE} withLabel variant="solid" />
            </div>
          </div>

          <Field label="Konuşma hızı">
            {(['slow', 'normal', 'fast'] as SpeechRate[]).map((rate) => (
              <Pill
                key={rate}
                active={settings.rate === rate}
                onClick={() => settings.set('rate', rate)}
              >
                {{ slow: 'Yavaş', normal: 'Normal', fast: 'Hızlı' }[rate]}
              </Pill>
            ))}
          </Field>

          <Field label={`Ses (${turkishVoices.length} Türkçe ses bulundu)`}>
            <div className="w-full">
              <select
                value={settings.voiceURI ?? ''}
                onChange={(e) => settings.set('voiceURI', e.target.value || null)}
                className="input"
              >
                <option value="">Otomatik — en iyi Türkçe ses</option>
                {voices.map((voice) => (
                  <option key={voice.voiceURI} value={voice.voiceURI}>
                    {voice.name} ({voice.lang})
                    {voice.lang.toLowerCase().startsWith('tr') ? ' ✓' : ''}
                  </option>
                ))}
              </select>
              {turkishVoices.length === 0 && (
                <p className="mt-2 flex items-start gap-2 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
                  <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                  Tarayıcında Türkçe ses bulunamadı. Chrome veya Edge kullanmayı, ya da işletim
                  sistemine Türkçe dil paketi eklemeyi dene.
                </p>
              )}
            </div>
          </Field>

          <Toggle
            label="Kelime açıldığında otomatik seslendir"
            hint="Alfabe ve kelime detayları açılınca ses kendiliğinden çalar."
            checked={settings.autoplay}
            onChange={(v) => settings.set('autoplay', v)}
          />
        </Section>

        {/* Display */}
        <Section icon={<Eye size={17} />} title="Görünüm">
          <Field label="Tema">
            {([
              ['light', 'Açık', Sun],
              ['dark', 'Koyu', Moon],
              ['system', 'Sistem', Monitor],
            ] as const).map(([id, label, Icon]) => (
              <Pill
                key={id}
                active={settings.theme === id}
                onClick={() => settings.set('theme', id)}
              >
                <Icon size={13} />
                {label}
              </Pill>
            ))}
          </Field>

          <Toggle
            label="Telaffuz kılavuzunu göster"
            hint="Türkçe kelimelerin altında hece ve vurgu gösterimi (örn. mer-ha-BA)."
            checked={settings.showPronunciation}
            onChange={(v) => settings.set('showPronunciation', v)}
          />
        </Section>

        {/* Teacher mode */}
        <Section
          icon={<GraduationCap size={17} />}
          title="Öğretmen modu"
          subtitle="Seviye kilitlerini yok sayar ve yönetim panelini açar."
        >
          <Toggle
            label="Öğretmen modunu etkinleştir"
            hint="Bu cihazda tüm seviyeler açılır ve /admin sayfasına erişebilirsin."
            checked={settings.teacherMode}
            onChange={(v) => settings.set('teacherMode', v)}
          />
          {settings.teacherMode && (
            <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-900 dark:bg-brand-950/30">
              <p className="text-sm font-semibold text-brand-800 dark:text-brand-300">
                Öğretmen modu açık
              </p>
              <p className="mt-1 text-xs text-brand-700 dark:text-brand-400">
                Kenar çubuğunda “Yönetim Paneli” göründü. Ders ekleyebilir, yayından
                kaldırabilir ve kelime tanımlayabilirsin.
              </p>
            </div>
          )}
        </Section>

        {/* Data */}
        <Section icon={<Ear size={17} />} title="Verilerin">
          <div className="grid gap-3 sm:grid-cols-3">
            <Stat label="Tamamlanan ders" value={`${progress.completedLessons.length}/${stats.lessons}`} />
            <Stat label="Öğrenilen kelime" value={`${progress.learnedWords.length}`} />
            <Stat label="Aktif gün" value={`${progress.activeDays.length}`} />
          </div>

          <div className="rounded-xl border border-accent-200 bg-accent-50/60 p-4 dark:border-accent-900 dark:bg-accent-950/25">
            <p className="flex items-center gap-2 font-display text-sm font-bold text-accent-800 dark:text-accent-300">
              <AlertTriangle size={15} />
              Tüm ilerlemeyi sıfırla
            </p>
            <p className="mt-1 text-xs text-accent-700 dark:text-accent-400">
              Tamamlanan dersler, öğrenilen kelimeler, favoriler ve alıştırma sonuçları silinir.
              Bu işlem geri alınamaz.
            </p>
            {confirmReset ? (
              <div className="mt-3 flex flex-wrap gap-2">
                <Button
                  size="sm"
                  className="!bg-accent-600 hover:!bg-accent-700"
                  icon={<Trash2 size={14} />}
                  onClick={() => { progress.resetAll(); setConfirmReset(false); }}
                >
                  Evet, hepsini sil
                </Button>
                <Button size="sm" variant="secondary" onClick={() => setConfirmReset(false)}>
                  Vazgeç
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                variant="secondary"
                className="mt-3"
                icon={<Trash2 size={14} />}
                onClick={() => setConfirmReset(true)}
              >
                Sıfırla
              </Button>
            )}
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
  icon, title, subtitle, children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-5">
      <div className="mb-4">
        <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink-900 dark:text-white">
          <span className="text-brand-600 dark:text-brand-400">{icon}</span>
          {title}
        </h2>
        {subtitle && <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{subtitle}</p>}
      </div>
      <div className="space-y-4">{children}</div>
    </Card>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-ink-400">{label}</p>
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
        'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition',
        active
          ? 'bg-brand-600 text-white'
          : 'bg-ink-100 text-ink-600 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300',
      )}
    >
      {children}
    </button>
  );
}

function Toggle({
  label, hint, checked, onChange,
}: {
  label: string;
  hint?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-ink-200 p-3.5 transition hover:border-brand-300 dark:border-ink-700">
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-ink-800 dark:text-ink-100">{label}</span>
        {hint && <span className="mt-0.5 block text-xs text-ink-500 dark:text-ink-400">{hint}</span>}
      </span>
      <span className="relative mt-0.5 shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span className="block h-6 w-11 rounded-full bg-ink-200 transition peer-checked:bg-brand-600 dark:bg-ink-700" />
        <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
      </span>
    </label>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-ink-50 p-3.5 text-center dark:bg-ink-950/60">
      <p className="font-display text-xl font-bold tabular-nums text-ink-900 dark:text-white">
        {value}
      </p>
      <p className="mt-0.5 text-[11px] text-ink-500">{label}</p>
    </div>
  );
}

export { Chip };
