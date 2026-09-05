import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AlertTriangle, ArrowLeftRight, ArrowRight, Play, RotateCcw,
} from 'lucide-react';
import type { ArabicRelation, LevelId } from '@/types/content';
import { LEVEL_ORDER } from '@/types/content';
import {
  buildConnectionSession, connectionsOf,
  CONNECTION_KIND_LABEL, type ConnectionExerciseKind,
} from '@/lib/connectionPractice';
import { cx } from '@/lib/utils';
import { useContent } from '@/state/ContentContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, EmptyState, PageHeader,
} from '@/components/ui/Primitives';
import { ExerciseRunner } from '@/components/exercises/ExerciseRunner';

/**
 * Practice built on the Arabic ↔ Turkish connections.
 *
 * The setup screen chooses what to drill; the session itself is the ordinary
 * `ExerciseRunner`, so results land in the same progress store as every other
 * practice mode and nothing here re-implements scoring, feedback or audio.
 */

const ALL_KINDS: ConnectionExerciseKind[] = [
  'arabic-to-turkish',
  'turkish-to-arabic',
  'relationship',
  'false-friend',
  'sentence',
  'listening',
  'recall',
];

const KIND_HINT: Record<ConnectionExerciseKind, { ar: string; ku: string }> = {
  'arabic-to-turkish': { ar: 'ترى الكلمة العربية وتختار التركية.', ku: 'وشە عەرەبییەکە دەبینیت و تورکییەکە هەڵدەبژێریت.' },
  'turkish-to-arabic': { ar: 'ترى الكلمة التركية وتختار العربية.', ku: 'وشە تورکییەکە دەبینیت و عەرەبییەکە هەڵدەبژێریت.' },
  relationship: { ar: 'لماذا ارتبطت الكلمتان؟ اختر نوع الصلة.', ku: 'بۆچی دوو وشەکە پەیوەندییان هەیە؟ جۆری پەیوەندی هەڵبژێرە.' },
  'false-friend': { ar: 'هل تحملان المعنى نفسه؟ احذر الأصدقاء الكاذبين.', ku: 'ئایا هەمان واتایان هەیە؟ ئاگاداری هاوڕێ درۆزنەکان بە.' },
  sentence: { ar: 'أكمل الجملة بالكلمة الصحيحة.', ku: 'ڕستەکە بە وشەی دروست تەواو بکە.' },
  listening: { ar: 'استمع للتركية واختر المقابل العربي.', ku: 'گوێ لە تورکی بگرە و هاوتا عەرەبییەکەی هەڵبژێرە.' },
  recall: { ar: 'اكتب الكلمة التركية بنفسك.', ku: 'وشە تورکییەکە بە خۆت بنووسە.' },
};

const RELATION_FILTER: { id: ArabicRelation | 'all'; tr: string }[] = [
  { id: 'all', tr: 'Hepsi' },
  { id: 'direct', tr: 'Doğrudan tanıdık' },
  { id: 'borrowing', tr: 'Arapçadan geçmiş' },
  { id: 'pronunciation', tr: 'Benzer telaffuz' },
  { id: 'spelling', tr: 'Ortak kök' },
  { id: 'semantic', tr: 'Benzer anlam' },
  { id: 'false-friend', tr: 'Yalancı eş dost' },
];

export default function ConnectionPractice() {
  const { vocabulary } = useContent();
  const { lang } = useSettings();
  const [params] = useSearchParams();

  const [kinds, setKinds] = useState<ConnectionExerciseKind[]>(
    ['arabic-to-turkish', 'turkish-to-arabic', 'relationship'],
  );
  const [relation, setRelation] = useState<ArabicRelation | 'all'>(
    (params.get('relation') as ArabicRelation | null) ?? 'all',
  );
  const [level, setLevel] = useState<LevelId | 'all'>('all');
  const [count, setCount] = useState(10);
  const [runId, setRunId] = useState(0);
  const [started, setStarted] = useState(false);

  const linked = useMemo(() => connectionsOf(vocabulary), [vocabulary]);

  const poolSize = useMemo(() => linked.filter((w) => {
    if (level !== 'all' && w.level !== level) return false;
    if (relation !== 'all' && w.arabic!.relation !== relation) return false;
    return true;
  }).length, [linked, level, relation]);

  const exercises = useMemo(() => {
    if (!started) return [];
    return buildConnectionSession(vocabulary, { kinds, count, relation, level, lang });
    // runId forces a fresh draw on restart
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, runId, vocabulary, kinds, count, relation, level, lang]);

  const toggleKind = (k: ConnectionExerciseKind) => {
    setKinds((prev) => (prev.includes(k)
      ? (prev.length > 1 ? prev.filter((x) => x !== k) : prev)
      : [...prev, k]));
  };

  /* ---------------- running ---------------- */

  if (started && exercises.length > 0) {
    return (
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <ArrowLeftRight size={18} className="text-brass-500" aria-hidden />
            <h1 className="t-h2 text-primary">Bağlantı Alıştırması</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            icon={<RotateCcw size={14} />}
            onClick={() => setStarted(false)}
          >
            Ayarları değiştir
          </Button>
        </div>

        <ExerciseRunner
          key={runId}
          exercises={exercises}
          lessonId={`connections-${relation}`}
          title="Arapça ↔ Türkçe"
          onFinish={() => setRunId((n) => n + 1)}
        />
      </div>
    );
  }

  /* ---------------- setup ---------------- */

  return (
    <div>
      <PageHeader
        eyebrow="Alıştırma"
        icon={<ArrowLeftRight size={14} />}
        title="Bağlantı Alıştırması"
        description={(
          <span
            className={cx('block w-fit', lang === 'ar' ? 'ar-text' : 'ku-text')}
            dir="rtl"
            lang={lang === 'ar' ? 'ar' : 'ckb'}
          >
            {lang === 'ar'
              ? 'تدرّب على الكلمات التركية ذات الصلة بالعربية: من العربية إلى التركية، ومن التركية إلى العربية، ونوع الصلة، والأصدقاء الكاذبون.'
              : 'ڕاهێنان لەسەر وشە تورکییەکانی پەیوەست بە عەرەبی: لە عەرەبییەوە بۆ تورکی، پێچەوانەکەی، جۆری پەیوەندی، و هاوڕێ درۆزنەکان.'}
          </span>
        )}
        action={<Chip tone="brass">{linked.length} bağlantı</Chip>}
      />

      <div className="space-y-5">
        {/* ---- question types ---- */}
        <Card className="p-5">
          <h2 className="t-h3 mb-1 text-primary">Soru türü</h2>
          <p className="mb-4 t-caption">Birden fazla seçebilirsin.</p>

          <div className="grid gap-2.5 sm:grid-cols-2">
            {ALL_KINDS.map((k) => {
              const on = kinds.includes(k);
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => toggleKind(k)}
                  aria-pressed={on}
                  className={cx(
                    'rounded-xl border p-3.5 text-left transition duration-150',
                    on
                      ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/60'
                      : 'hairline hover:border-brand-300',
                  )}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-semibold text-primary">
                      {CONNECTION_KIND_LABEL[k].tr}
                    </span>
                    {k === 'false-friend' && (
                      <AlertTriangle size={13} className="shrink-0 text-accent-600" aria-hidden />
                    )}
                  </span>
                  <span
                    className={cx(
                      'mt-1 block w-fit text-xs text-secondary',
                      lang === 'ar' ? 'ar-text' : 'ku-text',
                    )}
                    dir="rtl"
                    lang={lang === 'ar' ? 'ar' : 'ckb'}
                  >
                    {lang === 'ar' ? KIND_HINT[k].ar : KIND_HINT[k].ku}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>

        {/* ---- filters ---- */}
        <Card className="p-5">
          <h2 className="t-h3 mb-4 text-primary">Ayarlar</h2>

          <Field label="Bağlantı türü">
            {RELATION_FILTER.map((r) => (
              <Pill key={r.id} active={relation === r.id} onClick={() => setRelation(r.id)}>
                {r.tr}
              </Pill>
            ))}
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
            {[5, 10, 15, 20].map((n) => (
              <Pill key={n} active={count === n} onClick={() => setCount(n)}>{n}</Pill>
            ))}
          </Field>

          <div className="mt-5 rounded-xl p-4 text-center surface-sunken">
            <p className="font-display text-2xl font-semibold tabular-nums text-primary">
              {poolSize}
            </p>
            <p className="t-caption">uygun kelime</p>
          </div>
        </Card>

        {poolSize < 4 ? (
          <EmptyState
            icon={<AlertTriangle size={20} />}
            title="Bu filtrelerle yeterli kelime yok"
            description="Seviye ya da bağlantı türü filtresini genişlet."
          />
        ) : (
          <Button
            size="lg"
            className="w-full"
            icon={<Play size={17} />}
            onClick={() => { setRunId((n) => n + 1); setStarted(true); }}
          >
            Alıştırmaya başla
          </Button>
        )}

        <Link
          to="/connections"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          Bağlantıları keşfet
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="label">{label}</p>
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
      aria-pressed={active}
      className={cx(
        'rounded-lg px-3 py-1.5 text-xs font-semibold transition duration-150',
        active
          ? 'bg-brand-700 text-white'
          : 'text-secondary surface-sunken ring-1 ring-inset ring-ink-200 hover:text-primary dark:ring-ink-800',
      )}
    >
      {children}
    </button>
  );
}
