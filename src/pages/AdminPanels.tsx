import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle, BookPlus, CheckCircle2, Info, Lock, Mic, RefreshCw,
  Unlock, Volume2,
} from 'lucide-react';
import { audio } from '@/lib/audio';
import { cx, percent } from '@/lib/adminUtils';
import { validateContent, type ValidationIssue } from '@/lib/contentValidation';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import {
  Button, Card, Chip, EmptyState, LevelBadge, ProgressBar, StatTile,
} from '@/components/ui/Primitives';

/**
 * The three teacher panels added in phase 2.
 *
 * They live outside `Admin.tsx` purely for file size — the tab shell there
 * imports and renders them, and they read from exactly the same contexts as
 * every other panel.
 */

/* ------------------------------------------------------------------ */
/* Content validation — the same class of checks as `npm run validate`  */
/* ------------------------------------------------------------------ */

export function ValidationPanel() {
  const {
    lessons, vocabulary, sentencePacks, categories, customLessons, customVocab,
  } = useContent();
  const [filter, setFilter] = useState<'all' | 'error' | 'warning' | 'custom'>('all');

  const customIds = useMemo(
    () => new Set([...customLessons.map((l) => l.id), ...customVocab.map((v) => v.id)]),
    [customLessons, customVocab],
  );

  const report = useMemo(
    () => validateContent({ lessons, vocabulary, sentencePacks, categories, customIds }),
    [lessons, vocabulary, sentencePacks, categories, customIds],
  );

  const shown = report.issues.filter((issue) => {
    if (filter === 'all') return true;
    if (filter === 'custom') return issue.custom;
    return issue.severity === filter;
  });

  return (
    <div className="space-y-5">
      <Card className={cx(
        'border-2 p-5',
        report.ok
          ? 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/25'
          : 'border-accent-200 bg-accent-50/50 dark:border-accent-900 dark:bg-accent-950/25',
      )}
      >
        <div className="flex items-start gap-3">
          {report.ok
            ? <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-emerald-600" />
            : <AlertTriangle size={22} className="mt-0.5 shrink-0 text-accent-600" />}
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-bold text-ink-900 dark:text-white">
              {report.ok
                ? 'Tüm içerik denetimlerinden geçti'
                : `${report.errors} hata bulundu`}
            </p>
            <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
              {report.checked.lessons} ders, {report.checked.words} kelime,{' '}
              {report.checked.exercises} alıştırma ve {report.checked.packs} cümle paketi
              denetlendi.
              {report.warnings > 0 && ` ${report.warnings} uyarı var.`}
            </p>
            <p className="mt-2 text-xs text-ink-500">
              Bu denetim tarayıcıda, senin eklediğin içerik de dahil olmak üzere birleşik
              müfredat üzerinde çalışır. Terminalde{' '}
              <code className="rounded bg-ink-100 px-1 font-mono dark:bg-ink-800">
                npm run validate
              </code>{' '}
              komutu aynı denetimleri yayın öncesi yapar.
            </p>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-1.5">
        <FilterPill active={filter === 'all'} onClick={() => setFilter('all')}>
          Hepsi ({report.issues.length})
        </FilterPill>
        <FilterPill active={filter === 'error'} onClick={() => setFilter('error')}>
          Hatalar ({report.errors})
        </FilterPill>
        <FilterPill active={filter === 'warning'} onClick={() => setFilter('warning')}>
          Uyarılar ({report.warnings})
        </FilterPill>
        <FilterPill active={filter === 'custom'} onClick={() => setFilter('custom')}>
          Senin içeriğin ({report.issues.filter((i) => i.custom).length})
        </FilterPill>
      </div>

      {shown.length === 0 ? (
        <EmptyState
          icon={<CheckCircle2 size={22} />}
          title="Bu filtrede sorun yok"
          description="Seçtiğin kategoride denetimden geçmeyen içerik bulunmuyor."
        />
      ) : (
        <Card className="overflow-hidden">
          <ul className="divide-y divide-ink-100 dark:divide-ink-800">
            {shown.slice(0, 200).map((issue, i) => (
              <IssueRow key={i} issue={issue} />
            ))}
          </ul>
          {shown.length > 200 && (
            <p className="border-t border-ink-200 px-4 py-3 text-center text-xs text-ink-400 dark:border-ink-800">
              İlk 200 sonuç gösteriliyor ({shown.length} toplam).
            </p>
          )}
        </Card>
      )}
    </div>
  );
}

function IssueRow({ issue }: { issue: ValidationIssue }) {
  return (
    <li className="flex items-start gap-3 px-4 py-3">
      <span className={cx(
        'mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg',
        issue.severity === 'error'
          ? 'bg-accent-100 text-accent-700 dark:bg-accent-950/60 dark:text-accent-300'
          : 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
      )}
      >
        {issue.severity === 'error' ? <AlertTriangle size={13} /> : <Info size={13} />}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
            {issue.where}
          </p>
          {issue.custom && <Chip tone="brand">Özel</Chip>}
        </div>
        <p className="mt-0.5 text-sm text-ink-600 dark:text-ink-300">{issue.message}</p>
      </div>
      {issue.href && (
        <Link to={issue.href} className="btn-secondary btn-sm shrink-0">Aç</Link>
      )}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Native audio coverage                                                */
/* ------------------------------------------------------------------ */

export function AudioCoverage() {
  const { vocabulary, sentencePacks, levels } = useContent();
  const [refreshKey, setRefreshKey] = useState(0);
  const [reloading, setReloading] = useState(false);

  const manifest = audio.recordingProvider.coverage;

  const coverage = useMemo(() => {
    void refreshKey; // recomputed after a manifest reload
    const words = audio.coverageFor(vocabulary.map((v) => v.tr));
    const sentences = audio.coverageFor(
      sentencePacks.flatMap((p) => p.sentences.map((s) => s.tr)),
    );
    const byLevel = levels.map((level) => {
      const texts = vocabulary.filter((v) => v.level === level.id).map((v) => v.tr);
      return { level, ...audio.coverageFor(texts) };
    });
    return { words, sentences, byLevel };
  }, [vocabulary, sentencePacks, levels, refreshKey]);

  const reload = async () => {
    setReloading(true);
    await audio.reloadRecordings();
    setRefreshKey((k) => k + 1);
    setReloading(false);
  };

  const totalCovered = coverage.words.covered + coverage.sentences.covered;
  const totalItems = coverage.words.total + coverage.sentences.total;

  return (
    <div className="space-y-5">
      <Card className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="font-display text-base font-bold text-ink-900 dark:text-white">
              Yerli konuşmacı ses kapsamı
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-500 dark:text-ink-400">
              Ses sistemi önce{' '}
              <code className="rounded bg-ink-100 px-1 font-mono text-xs dark:bg-ink-800">
                /public/audio/manifest.json
              </code>{' '}
              dosyasına bakar, bulamazsa tarayıcının Türkçe sentezleyicisine düşer. Aşağıdaki
              oran, kayıtla değiştirilmiş içeriğin yüzdesini gösterir.
            </p>
          </div>
          <Button
            variant="secondary"
            icon={<RefreshCw size={14} className={reloading ? 'animate-spin' : undefined} />}
            onClick={reload}
            disabled={reloading}
          >
            Manifesti yeniden oku
          </Button>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <StatTile
            label="Manifest girdisi" value={manifest.entries}
            sub={manifest.loaded ? 'dosya okundu' : 'henüz okunmadı'}
            icon={<Volume2 size={14} />}
            tone={manifest.entries > 0 ? 'green' : 'neutral'}
          />
          <StatTile
            label="Kelime kapsamı"
            value={`${percent(coverage.words.covered, coverage.words.total)}%`}
            sub={`${coverage.words.covered}/${coverage.words.total}`}
            icon={<BookPlus size={14} />} tone="brand"
          />
          <StatTile
            label="Cümle kapsamı"
            value={`${percent(coverage.sentences.covered, coverage.sentences.total)}%`}
            sub={`${coverage.sentences.covered}/${coverage.sentences.total}`}
            icon={<Mic size={14} />} tone="violet"
          />
        </div>

        {manifest.error && (
          <p className="mt-4 flex items-start gap-2 rounded-xl bg-accent-50 p-3 text-sm text-accent-800 dark:bg-accent-950/40 dark:text-accent-300">
            <AlertTriangle size={15} className="mt-0.5 shrink-0" />
            manifest.json okunamadı: {manifest.error}
          </p>
        )}

        {manifest.entries === 0 && !manifest.error && (
          <div className="mt-4 rounded-xl bg-ink-50 p-4 dark:bg-ink-950/60">
            <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">
              Henüz hiç kayıt yok — bu normal.
            </p>
            <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
              Tüm ses şu anda tarayıcı sentezinden geliyor. Kayıt eklemek için MP3 dosyalarını{' '}
              <code className="rounded bg-ink-100 px-1 font-mono text-xs dark:bg-ink-800">
                public/audio/
              </code>{' '}
              klasörüne koy ve manifest.json içinde listele. Tek kelime bile eklesen o kelime
              anında kayıttan çalınmaya başlar — kod değişikliği gerekmez.
            </p>
          </div>
        )}
      </Card>

      <Card className="p-5">
        <h3 className="mb-4 font-display text-sm font-bold text-ink-900 dark:text-white">
          Seviye başına kelime kapsamı
        </h3>
        <div className="space-y-3">
          {coverage.byLevel.map(({ level, covered, total }) => (
            <div key={level.id} className="flex items-center gap-3">
              <LevelBadge level={level.id} />
              <ProgressBar
                value={percent(covered, total)}
                className="min-w-[8rem] flex-1"
                size="sm"
                tone="green"
              />
              <span className="w-20 shrink-0 text-right font-mono text-[11px] tabular-nums text-ink-400">
                {covered}/{total}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-500">
          Toplam {totalCovered}/{totalItems} öğe kayıtlı sesle karşılanıyor.
          Kalan {totalItems - totalCovered} öğe tarayıcı sentezini kullanıyor.
        </p>
      </Card>

      {coverage.words.missing.length > 0 && manifest.entries > 0 && (
        <Card className="p-5">
          <h3 className="mb-2 font-display text-sm font-bold text-ink-900 dark:text-white">
            Kaydı olmayan ilk 40 kelime
          </h3>
          <p className="mb-3 text-xs text-ink-500">
            Kayıt önceliği için liste. Bunları manifest.json dosyasına eklediğinde kapsam
            otomatik olarak artar.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {coverage.words.missing.slice(0, 40).map((text) => (
              <span
                key={text}
                className="rounded-lg bg-ink-100 px-2 py-1 font-mono text-xs text-ink-600 dark:bg-ink-800 dark:text-ink-300"
              >
                {text}
              </span>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Level management                                                     */
/* ------------------------------------------------------------------ */

export function LevelManager() {
  const { levels, levelTotals, levelProgress, lessonsFor } = useContent();
  const progress = useProgress();

  return (
    <div className="space-y-5">
      <Card className="border-2 border-brand-200 bg-brand-50/50 p-4 dark:border-brand-900 dark:bg-brand-950/25">
        <p className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
          <Info size={16} className="mt-0.5 shrink-0 text-brand-600" />
          <span>
            Kilitler yalnızca <strong>bu cihazdaki</strong> öğrenciyi etkiler. Öğretmen modu
            açıkken sen zaten tüm seviyeleri görebilirsin; buradaki düğmeler öğrencinin
            gördüğü kilit durumunu değiştirir.
          </span>
        </p>
      </Card>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] text-sm">
            <thead>
              <tr className="border-b border-ink-200 bg-ink-50 text-left dark:border-ink-700 dark:bg-ink-950/60">
                <th className="px-4 py-2.5 text-xs font-bold uppercase text-ink-400">Seviye</th>
                <th className="px-4 py-2.5 text-xs font-bold uppercase text-ink-400">Ders</th>
                <th className="px-4 py-2.5 text-xs font-bold uppercase text-ink-400">Yayında</th>
                <th className="px-4 py-2.5 text-xs font-bold uppercase text-ink-400">İlerleme</th>
                <th className="px-4 py-2.5 text-xs font-bold uppercase text-ink-400">Durum</th>
                <th className="px-4 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
              {levels.map((level) => {
                const totals = levelTotals(level.id);
                const all = lessonsFor(level.id);
                const published = all.filter((l) => l.published !== false).length;
                const unlocked = progress.isLevelUnlocked(level.id);
                return (
                  <tr key={level.id}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <LevelBadge level={level.id} />
                        <span className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                          {level.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-mono tabular-nums">{totals.lessons}</td>
                    <td className="px-4 py-3 font-mono tabular-nums">
                      {published}/{all.length}
                    </td>
                    <td className="px-4 py-3">
                      <ProgressBar value={levelProgress(level.id)} size="sm" className="w-24" />
                    </td>
                    <td className="px-4 py-3">
                      {unlocked
                        ? <Chip tone="green">Açık</Chip>
                        : <Chip tone="neutral" icon={<Lock size={11} />}>Kilitli</Chip>}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button
                        size="sm"
                        variant="secondary"
                        icon={unlocked ? <Lock size={13} /> : <Unlock size={13} />}
                        disabled={level.id === 'a1'}
                        onClick={() => (unlocked
                          ? progress.lockLevel(level.id)
                          : progress.unlockLevel(level.id))}
                      >
                        {unlocked ? 'Kilitle' : 'Aç'}
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
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
      className={cx(
        'rounded-lg px-3 py-1.5 text-xs font-semibold transition',
        active
          ? 'bg-brand-600 text-white'
          : 'bg-ink-100 text-ink-600 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300',
      )}
    >
      {children}
    </button>
  );
}
