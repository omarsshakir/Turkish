import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookPlus, Download, Eye, EyeOff, FilePlus2, GraduationCap, Layers, Lock,
  Plus, ShieldCheck, Trash2, Unlock, Upload, Users, Volume2,
} from 'lucide-react';
import type {
  Bilingual, Exercise, LessonBlock, LessonKind, LevelId, PartOfSpeech, VocabItem,
} from '@/types/content';
import { LEVEL_ORDER } from '@/types/content';
import { cx, percent, slugify } from '@/lib/adminUtils';
import { AudioCoverage, LevelManager, ValidationPanel } from './AdminPanels';
import { useContent } from '@/state/ContentContext';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import {
  Button, Card, Chip, EmptyState, LevelBadge, PageHeader, ProgressBar, StatTile,
} from '@/components/ui/Primitives';

type Tab = 'overview' | 'lessons' | 'new-lesson' | 'vocabulary' | 'validate'
  | 'audio' | 'levels' | 'students' | 'data';

/**
 * Teacher area. Everything authored here lands in localStorage through
 * ContentContext and is merged with the shipped curriculum, so a lesson the
 * teacher writes behaves exactly like a built-in one.
 */
export default function Admin() {
  const { teacherMode } = useSettings();
  const [tab, setTab] = useState<Tab>('overview');

  if (!teacherMode) {
    return (
      <div className="mx-auto max-w-xl">
        <EmptyState
          headingLevel={1}
          icon={<Lock size={22} />}
          title="Öğretmen modu kapalı"
          description="Bu bölüme erişmek için Ayarlar sayfasından öğretmen modunu etkinleştir."
          action={<Link to="/settings" className="btn-primary">Ayarlara git</Link>}
        />
      </div>
    );
  }

  const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Genel bakış', icon: <Layers size={15} /> },
    { id: 'lessons', label: 'Dersler', icon: <BookPlus size={15} /> },
    { id: 'new-lesson', label: 'Yeni ders', icon: <FilePlus2 size={15} /> },
    { id: 'vocabulary', label: 'Kelime ekle', icon: <Plus size={15} /> },
    { id: 'validate', label: 'İçerik denetimi', icon: <ShieldCheck size={15} /> },
    { id: 'audio', label: 'Ses kapsamı', icon: <Volume2 size={15} /> },
    { id: 'levels', label: 'Seviye yönetimi', icon: <Unlock size={15} /> },
    { id: 'students', label: 'Öğrenci ilerlemesi', icon: <Users size={15} /> },
    { id: 'data', label: 'Yedekleme', icon: <Download size={15} /> },
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Öğretmen"
        icon={<GraduationCap size={14} />}
        title="Yönetim Paneli"
        description="Ders ekle, yayından kaldır, kelime tanımla ve öğrenci ilerlemesini izle. Tüm değişiklikler bu tarayıcıda saklanır ve JSON olarak dışa aktarılabilir."
      />

      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cx(
              'flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition',
              tab === t.id
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-white text-ink-600 ring-1 ring-inset ring-ink-200 hover:bg-ink-50 dark:bg-ink-900 dark:text-ink-300 dark:ring-ink-700',
            )}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'overview' && <Overview />}
      {tab === 'lessons' && <LessonManager />}
      {tab === 'new-lesson' && <NewLesson onDone={() => setTab('lessons')} />}
      {tab === 'vocabulary' && <VocabManager />}
      {tab === 'validate' && <ValidationPanel />}
      {tab === 'audio' && <AudioCoverage />}
      {tab === 'levels' && <LevelManager />}
      {tab === 'students' && <StudentProgress />}
      {tab === 'data' && <DataManager />}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Overview() {
  const { stats, lessons, customLessons, customVocab, levels, levelTotals } = useContent();

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Toplam ders" value={stats.lessons} icon={<Layers size={14} />} />
        <StatTile label="Toplam kelime" value={stats.words} icon={<BookPlus size={14} />} tone="green" />
        <StatTile label="Alıştırma" value={stats.exercises} icon={<FilePlus2 size={14} />} tone="violet" />
        <StatTile label="Cümle" value={stats.sentences} icon={<Users size={14} />} tone="accent" />
      </div>

      <Card className="p-5">
        <h2 className="mb-4 font-display text-base font-bold text-ink-900 dark:text-white">
          Seviye başına içerik
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left dark:border-ink-700">
                <th className="py-2 pr-3 text-xs font-bold uppercase text-ink-400">Seviye</th>
                <th className="py-2 pr-3 text-xs font-bold uppercase text-ink-400">Ders</th>
                <th className="py-2 pr-3 text-xs font-bold uppercase text-ink-400">Kelime</th>
                <th className="py-2 pr-3 text-xs font-bold uppercase text-ink-400">Cümle paketi</th>
                <th className="py-2 text-xs font-bold uppercase text-ink-400">Hedef kelime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
              {levels.map((level) => {
                const totals = levelTotals(level.id);
                return (
                  <tr key={level.id}>
                    <td className="py-2.5 pr-3"><LevelBadge level={level.id} /></td>
                    <td className="py-2.5 pr-3 font-mono tabular-nums">{totals.lessons}</td>
                    <td className="py-2.5 pr-3 font-mono tabular-nums">{totals.words}</td>
                    <td className="py-2.5 pr-3 font-mono tabular-nums">{totals.packs}</td>
                    <td className="py-2.5 font-mono tabular-nums text-ink-400">{level.wordTarget}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-5">
          <h3 className="font-display text-sm font-bold text-ink-900 dark:text-white">
            Senin eklediğin dersler
          </h3>
          <p className="mt-2 font-display text-3xl font-bold tabular-nums text-brand-600">
            {customLessons.length}
          </p>
          <p className="text-xs text-ink-500">
            {lessons.length - customLessons.length} ders hazır müfredattan geliyor
          </p>
        </Card>
        <Card className="p-5">
          <h3 className="font-display text-sm font-bold text-ink-900 dark:text-white">
            Senin eklediğin kelimeler
          </h3>
          <p className="mt-2 font-display text-3xl font-bold tabular-nums text-emerald-600">
            {customVocab.length}
          </p>
          <p className="text-xs text-ink-500">Kelime Gezgini'nde ve alıştırmalarda görünür</p>
        </Card>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function LessonManager() {
  const { lessons, setPublished, deleteLesson, isCustom } = useContent();
  const [level, setLevel] = useState<LevelId | 'all'>('all');

  const filtered = useMemo(
    () => (level === 'all' ? lessons : lessons.filter((l) => l.level === level)),
    [lessons, level],
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        <FilterPill active={level === 'all'} onClick={() => setLevel('all')}>Hepsi</FilterPill>
        {LEVEL_ORDER.map((id) => (
          <FilterPill key={id} active={level === id} onClick={() => setLevel(id)}>
            {id === 'c1plus' ? 'C1+' : id.toUpperCase()}
          </FilterPill>
        ))}
      </div>

      <Card className="overflow-hidden">
        <ul className="divide-y divide-ink-100 dark:divide-ink-800">
          {filtered.map((lesson) => {
            const published = lesson.published !== false;
            const custom = isCustom(lesson.id);
            return (
              <li key={lesson.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
                <LevelBadge level={lesson.level} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={`/lesson/${lesson.id}`}
                      className="font-display text-sm font-semibold text-ink-900 hover:text-brand-600 dark:text-white"
                    >
                      {lesson.title}
                    </Link>
                    {custom && <Chip tone="brand">Özel</Chip>}
                    {!published && <Chip tone="amber">Taslak</Chip>}
                  </div>
                  <p className="mt-0.5 font-mono text-[11px] text-ink-400">
                    {lesson.id} · {lesson.kind} · {lesson.blocks.length} blok ·{' '}
                    {lesson.exercises.length} alıştırma
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  <Button
                    size="sm"
                    variant="secondary"
                    icon={published ? <EyeOff size={13} /> : <Eye size={13} />}
                    onClick={() => setPublished(lesson.id, !published)}
                  >
                    {published ? 'Yayından kaldır' : 'Yayınla'}
                  </Button>
                  {custom && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="!text-accent-600"
                      icon={<Trash2 size={13} />}
                      onClick={() => deleteLesson(lesson.id)}
                    >
                      Sil
                    </Button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

const EMPTY_BLOCK_TEXT = { ar: '', ku: '' };

function NewLesson({ onDone }: { onDone: () => void }) {
  const { addLesson, lessons } = useContent();

  const [title, setTitle] = useState('');
  const [titleAr, setTitleAr] = useState('');
  const [titleKu, setTitleKu] = useState('');
  const [objectiveAr, setObjectiveAr] = useState('');
  const [objectiveKu, setObjectiveKu] = useState('');
  const [level, setLevel] = useState<LevelId>('a1');
  const [kind, setKind] = useState<LessonKind>('grammar');
  const [minutes, setMinutes] = useState(20);
  const [blocks, setBlocks] = useState<LessonBlock[]>([
    { type: 'text', title: '', body: { ...EMPTY_BLOCK_TEXT } },
  ]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [saved, setSaved] = useState<string | null>(null);

  const canSave = title.trim() && titleAr.trim() && titleKu.trim();

  const save = () => {
    const id = `custom-${slugify(title)}-${Date.now().toString(36)}`;
    const maxOrder = Math.max(0, ...lessons.filter((l) => l.level === level).map((l) => l.order));

    addLesson({
      id,
      level,
      kind,
      title: title.trim(),
      titleI18n: { ar: titleAr.trim(), ku: titleKu.trim() },
      objective: { ar: objectiveAr.trim(), ku: objectiveKu.trim() },
      order: maxOrder + 1,
      minutes,
      blocks: blocks.filter((b) => b.type !== 'text' || b.body.ar || b.body.ku),
      exercises,
      published: true,
      custom: true,
    });

    setSaved(id);
    window.setTimeout(onDone, 900);
  };

  const updateBlock = (index: number, patch: Partial<Extract<LessonBlock, { type: 'text' }>>) => {
    setBlocks((prev) => prev.map((b, i) => (i === index && b.type === 'text' ? { ...b, ...patch } : b)));
  };

  return (
    <div className="space-y-5">
      <Card className="p-5">
        <h2 className="mb-4 font-display text-base font-bold text-ink-900 dark:text-white">
          Ders bilgileri
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Türkçe başlık *" value={title} onChange={setTitle} placeholder="Örn. Şimdiki Zaman" />
          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Seviye"
              value={level}
              onChange={(v) => setLevel(v as LevelId)}
              options={LEVEL_ORDER.map((id) => ({
                value: id, label: id === 'c1plus' ? 'C1+' : id.toUpperCase(),
              }))}
            />
            <Select
              label="Tür"
              value={kind}
              onChange={(v) => setKind(v as LessonKind)}
              options={[
                { value: 'grammar', label: 'Dilbilgisi' },
                { value: 'pronunciation', label: 'Telaffuz' },
                { value: 'conversation', label: 'Konuşma' },
                { value: 'vocabulary', label: 'Kelime' },
              ]}
            />
          </div>
          <Input label="العنوان بالعربية *" value={titleAr} onChange={setTitleAr} rtl />
          <Input label="ناونیشان بە کوردی *" value={titleKu} onChange={setTitleKu} rtl />
          <Textarea label="الهدف بالعربية" value={objectiveAr} onChange={setObjectiveAr} rtl />
          <Textarea label="ئامانج بە کوردی" value={objectiveKu} onChange={setObjectiveKu} rtl />
          <Input
            label="Süre (dakika)"
            value={String(minutes)}
            onChange={(v) => setMinutes(Number(v) || 20)}
            type="number"
          />
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-ink-900 dark:text-white">
            İçerik blokları
          </h2>
          <div className="flex gap-2">
            <Button
              size="sm" variant="secondary" icon={<Plus size={13} />}
              onClick={() => setBlocks((p) => [...p, { type: 'text', title: '', body: { ...EMPTY_BLOCK_TEXT } }])}
            >
              Açıklama
            </Button>
            <Button
              size="sm" variant="secondary" icon={<Plus size={13} />}
              onClick={() => setBlocks((p) => [...p, {
                type: 'examples', title: 'Örnekler',
                items: [{ tr: '', pron: '', ar: '', ku: '' }],
              }])}
            >
              Örnek
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {blocks.map((block, i) => (
            <div key={i} className="rounded-xl border border-ink-200 p-4 dark:border-ink-700">
              <div className="mb-3 flex items-center justify-between">
                <Chip tone="neutral">{block.type === 'text' ? 'Açıklama' : 'Örnekler'}</Chip>
                <Button
                  size="sm" variant="ghost" className="!text-accent-600"
                  icon={<Trash2 size={13} />}
                  onClick={() => setBlocks((p) => p.filter((_, idx) => idx !== i))}
                >
                  Kaldır
                </Button>
              </div>

              {block.type === 'text' && (
                <div className="space-y-3">
                  <Input
                    label="Blok başlığı"
                    value={block.title ?? ''}
                    onChange={(v) => updateBlock(i, { title: v })}
                  />
                  <Textarea
                    label="الشرح بالعربية"
                    value={block.body.ar}
                    onChange={(v) => updateBlock(i, { body: { ...block.body, ar: v } })}
                    rtl
                  />
                  <Textarea
                    label="ڕوونکردنەوە بە کوردی"
                    value={block.body.ku}
                    onChange={(v) => updateBlock(i, { body: { ...block.body, ku: v } })}
                    rtl
                  />
                </div>
              )}

              {block.type === 'examples' && (
                <ExamplesEditor
                  items={block.items}
                  onChange={(items) => setBlocks((p) => p.map(
                    (b, idx) => (idx === i && b.type === 'examples' ? { ...b, items } : b),
                  ))}
                />
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-ink-900 dark:text-white">
            Alıştırmalar ({exercises.length})
          </h2>
          <Button
            size="sm" variant="secondary" icon={<Plus size={13} />}
            onClick={() => setExercises((p) => [...p, {
              id: `custom-ex-${Date.now()}-${p.length}`,
              kind: 'mcq',
              prompt: { ar: '', ku: '' },
              options: ['', '', '', ''],
              answer: 0,
            }])}
          >
            Çoktan seçmeli ekle
          </Button>
        </div>

        {exercises.length === 0 ? (
          <p className="text-sm text-ink-400">Henüz alıştırma eklemedin (isteğe bağlı).</p>
        ) : (
          <div className="space-y-4">
            {exercises.map((ex, i) => ex.kind === 'mcq' && (
              <McqEditor
                key={ex.id}
                exercise={ex}
                onChange={(next) => setExercises((p) => p.map((e, idx) => (idx === i ? next : e)))}
                onRemove={() => setExercises((p) => p.filter((_, idx) => idx !== i))}
              />
            ))}
          </div>
        )}
      </Card>

      <div className="flex items-center gap-3">
        <Button size="lg" disabled={!canSave} onClick={save} icon={<FilePlus2 size={17} />}>
          Dersi kaydet
        </Button>
        {saved && <Chip tone="green">Kaydedildi: {saved}</Chip>}
        {!canSave && (
          <p className="text-xs text-ink-400">
            Türkçe başlık ve iki çeviri zorunludur.
          </p>
        )}
      </div>
    </div>
  );
}

function ExamplesEditor({
  items, onChange,
}: {
  items: { tr: string; pron: string; ar: string; ku: string }[];
  onChange: (items: { tr: string; pron: string; ar: string; ku: string }[]) => void;
}) {
  const update = (i: number, patch: Partial<(typeof items)[number]>) => {
    onChange(items.map((item, idx) => (idx === i ? { ...item, ...patch } : item)));
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="grid gap-2 rounded-lg bg-ink-50 p-3 dark:bg-ink-950/60 sm:grid-cols-2">
          <Input label="Türkçe" value={item.tr} onChange={(v) => update(i, { tr: v })} />
          <Input label="Okunuş" value={item.pron} onChange={(v) => update(i, { pron: v })} />
          <Input label="العربية" value={item.ar} onChange={(v) => update(i, { ar: v })} rtl />
          <Input label="کوردی" value={item.ku} onChange={(v) => update(i, { ku: v })} rtl />
        </div>
      ))}
      <Button
        size="sm" variant="secondary" icon={<Plus size={13} />}
        onClick={() => onChange([...items, { tr: '', pron: '', ar: '', ku: '' }])}
      >
        Örnek satırı ekle
      </Button>
    </div>
  );
}

function McqEditor({
  exercise, onChange, onRemove,
}: {
  exercise: Extract<Exercise, { kind: 'mcq' }>;
  onChange: (next: Exercise) => void;
  onRemove: () => void;
}) {
  const setPrompt = (patch: Partial<Bilingual>) => {
    onChange({ ...exercise, prompt: { ...exercise.prompt, ...patch } });
  };

  return (
    <div className="rounded-xl border border-ink-200 p-4 dark:border-ink-700">
      <div className="mb-3 flex items-center justify-between">
        <Chip tone="violet">Çoktan seçmeli</Chip>
        <Button size="sm" variant="ghost" className="!text-accent-600" icon={<Trash2 size={13} />} onClick={onRemove}>
          Kaldır
        </Button>
      </div>
      <div className="space-y-3">
        <Input label="Türkçe metin (isteğe bağlı)" value={exercise.tr ?? ''} onChange={(v) => onChange({ ...exercise, tr: v })} />
        <Textarea label="السؤال بالعربية" value={exercise.prompt.ar} onChange={(v) => setPrompt({ ar: v })} rtl />
        <Textarea label="پرسیار بە کوردی" value={exercise.prompt.ku} onChange={(v) => setPrompt({ ku: v })} rtl />
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-ink-400">
            Seçenekler (doğru olanı işaretle)
          </p>
          <div className="space-y-2">
            {exercise.options.map((option, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={exercise.answer === i}
                  onChange={() => onChange({ ...exercise, answer: i })}
                  className="h-4 w-4 text-brand-600"
                  aria-label={`Seçenek ${i + 1} doğru`}
                />
                <input
                  value={option}
                  onChange={(e) => onChange({
                    ...exercise,
                    options: exercise.options.map((o, idx) => (idx === i ? e.target.value : o)),
                  })}
                  className="input !py-2"
                  placeholder={`Seçenek ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function VocabManager() {
  const { addVocab, deleteVocab, customVocab, categories } = useContent();
  const [form, setForm] = useState({
    tr: '', pron: '', ar: '', ku: '',
    category: categories[0]?.id ?? 'nouns',
    level: 'a1' as LevelId,
    pos: 'noun' as PartOfSpeech,
    exTr: '', exPron: '', exAr: '', exKu: '',
  });

  const canSave = form.tr.trim() && form.ar.trim() && form.ku.trim();

  const save = () => {
    const item: VocabItem = {
      id: `custom-${slugify(form.tr)}-${Date.now().toString(36)}`,
      tr: form.tr.trim(),
      pron: form.pron.trim() || form.tr.trim(),
      ar: form.ar.trim(),
      ku: form.ku.trim(),
      category: form.category,
      level: form.level,
      pos: form.pos,
      example: form.exTr.trim()
        ? { tr: form.exTr.trim(), pron: form.exPron.trim(), ar: form.exAr.trim(), ku: form.exKu.trim() }
        : undefined,
    };
    addVocab(item);
    setForm((f) => ({ ...f, tr: '', pron: '', ar: '', ku: '', exTr: '', exPron: '', exAr: '', exKu: '' }));
  };

  return (
    <div className="space-y-5">
      <Card className="p-5">
        <h2 className="mb-4 font-display text-base font-bold text-ink-900 dark:text-white">
          Yeni kelime ekle
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Türkçe *" value={form.tr} onChange={(v) => setForm({ ...form, tr: v })} />
          <Input label="Okunuş" value={form.pron} onChange={(v) => setForm({ ...form, pron: v })} placeholder="mer-ha-BA" />
          <Input label="العربية *" value={form.ar} onChange={(v) => setForm({ ...form, ar: v })} rtl />
          <Input label="کوردی *" value={form.ku} onChange={(v) => setForm({ ...form, ku: v })} rtl />
          <Select
            label="Kategori" value={form.category}
            onChange={(v) => setForm({ ...form, category: v })}
            options={categories.map((c) => ({ value: c.id, label: `${c.tr} (${c.label})` }))}
          />
          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Seviye" value={form.level}
              onChange={(v) => setForm({ ...form, level: v as LevelId })}
              options={LEVEL_ORDER.map((id) => ({
                value: id, label: id === 'c1plus' ? 'C1+' : id.toUpperCase(),
              }))}
            />
            <Select
              label="Tür" value={form.pos}
              onChange={(v) => setForm({ ...form, pos: v as PartOfSpeech })}
              options={[
                { value: 'noun', label: 'İsim' },
                { value: 'verb', label: 'Fiil' },
                { value: 'adjective', label: 'Sıfat' },
                { value: 'adverb', label: 'Zarf' },
                { value: 'phrase', label: 'Kalıp' },
              ]}
            />
          </div>
        </div>

        <div className="mt-5 border-t border-ink-200 pt-4 dark:border-ink-800">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-ink-400">
            Örnek cümle (isteğe bağlı)
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Türkçe cümle" value={form.exTr} onChange={(v) => setForm({ ...form, exTr: v })} />
            <Input label="Okunuş" value={form.exPron} onChange={(v) => setForm({ ...form, exPron: v })} />
            <Input label="الترجمة العربية" value={form.exAr} onChange={(v) => setForm({ ...form, exAr: v })} rtl />
            <Input label="وەرگێڕانی کوردی" value={form.exKu} onChange={(v) => setForm({ ...form, exKu: v })} rtl />
          </div>
        </div>

        <Button className="mt-5" disabled={!canSave} onClick={save} icon={<Plus size={16} />}>
          Kelimeyi ekle
        </Button>
      </Card>

      {customVocab.length > 0 && (
        <Card className="overflow-hidden">
          <div className="border-b border-ink-200 px-5 py-3.5 dark:border-ink-800">
            <h3 className="font-display text-sm font-bold text-ink-900 dark:text-white">
              Eklediğin kelimeler ({customVocab.length})
            </h3>
          </div>
          <ul className="divide-y divide-ink-100 dark:divide-ink-800">
            {customVocab.map((item) => (
              <li key={item.id} className="flex items-center gap-3 px-4 py-3">
                <LevelBadge level={item.level} />
                <div className="min-w-0 flex-1">
                  <p className="tr-word text-sm">{item.tr}</p>
                  <p className="ar-text text-xs text-ink-500" dir="rtl">{item.ar} · {item.ku}</p>
                </div>
                <Button
                  size="sm" variant="ghost" className="!text-accent-600"
                  icon={<Trash2 size={13} />}
                  onClick={() => deleteVocab(item.id)}
                >
                  Sil
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function StudentProgress() {
  const progress = useProgress();
  const { identity } = progress;
  const { levels, levelProgress, levelTotals, lessonsFor, vocabFor } = useContent();

  return (
    <div className="space-y-5">
      <Card className="border-2 border-amber-200 bg-amber-50/60 p-4 dark:border-amber-900 dark:bg-amber-950/25">
        <p className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
          <Users size={16} className="mt-0.5 shrink-0 text-amber-600" />
          <span>
            <strong>Yalnızca yerel veri.</strong> Sunucu olmadığı için sınıf geneli
            istatistik yoktur ve uydurulmaz. Aşağıdaki rakamlar{' '}
            <strong>tek bir cihazın</strong> — şu anda bu tarayıcıyı kullanan kişinin —
            gerçek ilerlemesidir. Kimlik: <code className="rounded bg-ink-100 px-1 font-mono text-xs dark:bg-ink-800">{identity.label} · {identity.id}</code>
          </span>
        </p>
      </Card>

      <Card className="p-5">
        <h2 className="mb-2 font-display text-base font-bold text-ink-900 dark:text-white">
          Bu cihazdaki öğrenci
        </h2>
        <p className="mb-4 text-sm text-ink-500">
          Sınıf genelinde takip için her öğrenci kendi cihazından “Yedekleme” sekmesindeki
          JSON'u sana gönderebilir. Kalıcı ve merkezî takip bir arka uç gerektirir;
          ilerleme katmanı bunun için hazır (<code className="rounded bg-ink-100 px-1 font-mono text-xs dark:bg-ink-800">ProgressRepository</code>),
          ancak sunucu tarafı henüz yazılmadı.
        </p>

        <div className="grid gap-4 sm:grid-cols-4">
          <StatTile label="Seri" value={progress.streak} sub="ardışık gün" tone="accent" />
          <StatTile label="Doğruluk" value={`${progress.accuracy}%`} sub={`${progress.attempts.total} soru`} tone="green" />
          <StatTile label="Ders" value={progress.completedLessons.length} sub="tamamlandı" />
          <StatTile label="Kelime" value={progress.learnedWords.length} sub="öğrenildi" tone="violet" />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          <StatTile label="Tekrar kartı" value={progress.srs.total} sub={`${progress.srs.dueNow} vadesi doldu`} tone="brand" />
          <StatTile label="Ustalaşılan" value={progress.srs.mature} sub="21+ gün aralık" tone="green" />
          <StatTile
            label="Dinleme"
            value={progress.listeningResults.length > 0 ? `${progress.listeningAccuracy}%` : '—'}
            sub={`${progress.listeningResults.length} oturum`}
            tone="violet"
          />
          <StatTile
            label="Konuşma"
            value={progress.speakingResults.length > 0 ? `${progress.speakingAccuracy}%` : '—'}
            sub="metin doğruluğu"
            tone="accent"
          />
        </div>
      </Card>

      <Card className="p-5">
        <h3 className="mb-4 font-display text-sm font-bold text-ink-900 dark:text-white">
          Seviye seviye
        </h3>
        <div className="space-y-4">
          {levels.map((level) => {
            const totals = levelTotals(level.id);
            const done = lessonsFor(level.id)
              .filter((l) => progress.completedLessons.includes(l.id)).length;
            const learned = vocabFor(level.id)
              .filter((w) => progress.learnedWords.includes(w.id)).length;
            const unlocked = progress.isLevelUnlocked(level.id);

            return (
              <div key={level.id} className="flex flex-wrap items-center gap-3">
                <LevelBadge level={level.id} />
                <div className="min-w-[10rem] flex-1">
                  <ProgressBar value={levelProgress(level.id)} size="sm" showLabel />
                  <p className="mt-1 text-[11px] text-ink-400">
                    {done}/{totals.lessons} ders · {learned}/{totals.words} kelime
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  icon={unlocked ? <Lock size={13} /> : <Unlock size={13} />}
                  onClick={() => (unlocked
                    ? progress.lockLevel(level.id)
                    : progress.unlockLevel(level.id))}
                >
                  {unlocked ? 'Kilitle' : 'Aç'}
                </Button>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function DataManager() {
  const { exportContent, importContent } = useContent();
  const [text, setText] = useState('');
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  const doExport = () => {
    const json = exportContent();
    setText(json);
    void navigator.clipboard?.writeText(json).then(
      () => setMessage({ ok: true, text: 'JSON panoya kopyalandı.' }),
      () => setMessage({ ok: true, text: 'JSON aşağıda hazır — elle kopyalayabilirsin.' }),
    );
  };

  const doImport = () => {
    const result = importContent(text);
    setMessage({ ok: result.ok, text: result.message });
  };

  return (
    <div className="space-y-5">
      <Card className="p-5">
        <h2 className="mb-2 font-display text-base font-bold text-ink-900 dark:text-white">
          İçeriği dışa / içe aktar
        </h2>
        <p className="mb-4 text-sm text-ink-500">
          Eklediğin dersleri ve kelimeleri JSON olarak alıp başka bir cihaza taşıyabilirsin.
          Bu, içeriği kalıcı hâle getirmenin en kolay yolu: dosyayı{' '}
          <code className="rounded bg-ink-100 px-1 font-mono text-xs dark:bg-ink-800">content/</code>{' '}
          klasörüne kaydedip müfredata dahil edebilirsin.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button icon={<Download size={15} />} onClick={doExport}>Dışa aktar</Button>
          <Button variant="secondary" icon={<Upload size={15} />} onClick={doImport} disabled={!text.trim()}>
            İçe aktar
          </Button>
        </div>

        {message && (
          <p className={cx(
            'mt-3 rounded-lg p-3 text-sm',
            message.ok
              ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
              : 'bg-accent-50 text-accent-800 dark:bg-accent-950/40 dark:text-accent-300',
          )}
          >
            {message.text}
          </p>
        )}

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={14}
          placeholder="JSON burada görünür ya da buraya yapıştır…"
          className="input mt-4 font-mono text-xs"
          spellCheck={false}
        />
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small form controls                                                 */
/* ------------------------------------------------------------------ */

function Input({
  label, value, onChange, placeholder, rtl, type = 'text',
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rtl?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        dir={rtl ? 'rtl' : 'ltr'}
        className={cx('input', rtl && 'font-arabic')}
      />
    </label>
  );
}

function Textarea({
  label, value, onChange, rtl,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rtl?: boolean;
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        dir={rtl ? 'rtl' : 'ltr'}
        className={cx('input', rtl && 'font-arabic')}
      />
    </label>
  );
}

function Select({
  label, value, onChange, options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}

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

export { percent };
