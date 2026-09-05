import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BookOpen, Brain, Calculator, ClipboardList, Flame, GraduationCap, Hash,
  Headphones, Home, Layers, Lock, MessagesSquare, Mic, Repeat,
  Settings as SettingsIcon, Star, TrendingUp, Type, Waypoints, ArrowLeftRight,
  AudioLines, Languages,
} from 'lucide-react';
import { cx } from '@/lib/utils';
import { useProgress } from '@/state/ProgressContext';
import { useSettings } from '@/state/SettingsContext';
import { useContent } from '@/state/ContentContext';
import { LEVEL_CODE } from '@/components/ui/Primitives';

/**
 * The academy rail.
 *
 * It sits on midnight in BOTH themes. That is the deliberate identity choice:
 * a dark rail against warm paper is what separates this from every white-
 * sidebar dashboard, and it means the navigation looks the same to a student
 * whichever theme they study in.
 *
 * Grouping follows §21 — Learn, Practice, Progress, Levels — with the teacher
 * area visually severed from the student experience by a rule and a change of
 * colour, so nobody mistakes one for the other.
 */

interface NavItem {
  to: string;
  label: string;
  labelAr: string;
  labelKu: string;
  icon: typeof Home;
  end?: boolean;
}

interface NavGroup {
  title: string;
  titleAr: string;
  titleKu: string;
  items: NavItem[];
}

const GROUPS: NavGroup[] = [
  {
    title: 'Öğren',
    titleAr: 'تعلّم',
    titleKu: 'فێربە',
    items: [
      { to: '/', label: 'Panel', labelAr: 'لوحة التحكم', labelKu: 'داشبۆرد', icon: Home, end: true },
      { to: '/alphabet', label: 'Alfabe', labelAr: 'الأبجدية', labelKu: 'ئەلفوبێ', icon: Type },
      { to: '/syllables', label: 'Heceler', labelAr: 'المقاطع والنطق', labelKu: 'برگە و دەربڕین', icon: AudioLines },
      { to: '/numbers', label: 'Sayılar', labelAr: 'الأرقام', labelKu: 'ژمارەکان', icon: Hash },
      { to: '/vocabulary', label: 'Kelimeler', labelAr: 'المفردات', labelKu: 'وشەکان', icon: BookOpen },
      { to: '/grammar', label: 'Dilbilgisi', labelAr: 'القواعد', labelKu: 'ڕێزمان', icon: Layers },
      { to: '/sentences', label: 'Cümleler', labelAr: 'الجمل', labelKu: 'ڕستەکان', icon: Waypoints },
      { to: '/conversations', label: 'Konuşmalar', labelAr: 'المحادثات', labelKu: 'گفتوگۆکان', icon: MessagesSquare },
      { to: '/connections', label: 'Arapça Bağlantılar', labelAr: 'الصلات مع العربية', labelKu: 'پەیوەندی عەرەبی', icon: ArrowLeftRight },
      { to: '/arabic-origin', label: 'Arapça Kökenliler', labelAr: 'الكلمات عربية الأصل', labelKu: 'وشە عەرەبی ڕەگەکان', icon: Languages },
    ],
  },
  {
    title: 'Alıştırma',
    titleAr: 'تدرّب',
    titleKu: 'ڕاهێنان',
    items: [
      { to: '/review', label: 'Bugünün Tekrarı', labelAr: 'مراجعة اليوم', labelKu: 'پێداچوونەوەی ئەمڕۆ', icon: Repeat },
      { to: '/practice/listening', label: 'Dinleme', labelAr: 'الاستماع', labelKu: 'گوێگرتن', icon: Headphones },
      { to: '/practice/speaking', label: 'Konuşma', labelAr: 'التحدّث', labelKu: 'قسەکردن', icon: Mic },
      { to: '/practice/connections', label: 'Bağlantı Alıştırması', labelAr: 'تدريب الصلات', labelKu: 'ڕاهێنانی پەیوەندی', icon: ArrowLeftRight },
      { to: '/practice/origin', label: 'Köken Alıştırması', labelAr: 'تدريب أصل الكلمات', labelKu: 'ڕاهێنانی ڕەچەڵەک', icon: Languages },
      { to: '/practice/numbers', label: 'Sayı Alıştırması', labelAr: 'تدريب الأرقام', labelKu: 'ڕاهێنانی ژمارە', icon: Hash },
      { to: '/practice/vocabulary', label: 'Kelime Alıştırması', labelAr: 'تدريب المفردات', labelKu: 'ڕاهێنانی وشە', icon: Brain },
      { to: '/practice/grammar', label: 'Dilbilgisi Alıştırması', labelAr: 'تدريب القواعد', labelKu: 'ڕاهێنانی ڕێزمان', icon: ClipboardList },
    ],
  },
];

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { lang, teacherMode } = useSettings();
  const progress = useProgress();
  const { levels, levelProgress } = useContent();

  const label = (item: NavItem) => (lang === 'ar' ? item.labelAr : item.labelKu);
  const groupLabel = (g: NavGroup) => (lang === 'ar' ? g.titleAr : g.titleKu);
  const langCode = lang === 'ar' ? 'ar' : 'ckb';

  return (
    <nav
      className="flex h-full flex-col gap-0.5 overflow-y-auto px-3 pb-6 pt-2 no-scrollbar"
      aria-label="Ana menü"
    >
      {GROUPS.map((group) => (
        <Fragment key={group.title}>
          <GroupTitle turkish={group.title} translated={groupLabel(group)} lang={langCode} />
          {group.items.map((item) => (
            <SidebarLink
              key={item.to}
              to={item.to}
              end={item.end}
              icon={item.icon}
              turkish={item.label}
              translated={label(item)}
              onNavigate={onNavigate}
              lang={langCode}
            />
          ))}
        </Fragment>
      ))}

      {/* ---- the journey ---- */}
      <GroupTitle turkish="Seviyeler" translated={lang === 'ar' ? 'المستويات' : 'ئاستەکان'} lang={langCode} />
      <ul className="space-y-0.5">
        {levels.map((level, i) => {
          const unlocked = progress.isLevelUnlocked(level.id, teacherMode);
          const pct = levelProgress(level.id);
          const last = i === levels.length - 1;
          return (
            <li key={level.id} className="relative">
              {/* The connecting thread. It is what turns six links into one
                  path, and it stops at the final level. */}
              {!last && (
                <span
                  className="absolute left-[26px] top-[30px] h-[calc(100%-18px)] w-px bg-white/12"
                  aria-hidden
                />
              )}
              <NavLink
                to={`/levels/${level.id}`}
                onClick={onNavigate}
                className={({ isActive }) => cx(
                  'group relative flex items-center gap-3 rounded-xl px-3 py-1.5 text-sm transition',
                  isActive ? 'bg-white/[.07] font-semibold text-white' : 'text-ink-300 hover:bg-white/[.05] hover:text-white',
                  !unlocked && 'opacity-55',
                )}
              >
                <span
                  className={cx(
                    'relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br',
                    'font-mono text-[10px] font-bold text-white ring-1 ring-inset ring-white/20',
                    level.gradient,
                    !unlocked && 'grayscale',
                  )}
                >
                  {LEVEL_CODE[level.id]}
                </span>
                <span className="min-w-0 flex-1 truncate">{level.name}</span>
                {unlocked ? (
                  <span className="shrink-0 font-mono text-[10px] tabular-nums text-ink-400">
                    {pct}%
                  </span>
                ) : (
                  <Lock size={12} className="shrink-0 text-ink-500" aria-label="Kilitli" />
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* ---- progress ---- */}
      <GroupTitle turkish="İlerleme" translated={lang === 'ar' ? 'التقدّم' : 'پێشکەوتن'} lang={langCode} />
      <SidebarLink
        to="/progress" icon={TrendingUp} turkish="İlerlemem"
        translated={lang === 'ar' ? 'تقدّمي' : 'پێشکەوتنم'} onNavigate={onNavigate} lang={langCode}
      />
      <SidebarLink
        to="/favorites" icon={Star} turkish="Favoriler"
        translated={lang === 'ar' ? 'المفضّلة' : 'دڵخوازەکان'} onNavigate={onNavigate}
        badge={progress.favoriteWords.length || undefined} lang={langCode}
      />
      <SidebarLink
        to="/settings" icon={SettingsIcon} turkish="Ayarlar"
        translated={lang === 'ar' ? 'الإعدادات' : 'ڕێکخستنەکان'} onNavigate={onNavigate} lang={langCode}
      />

      {teacherMode && (
        <>
          <div className="mx-3 my-4 h-px bg-white/10" />
          <SidebarLink
            to="/admin" icon={GraduationCap} turkish="Yönetim Paneli"
            translated={lang === 'ar' ? 'لوحة الإدارة' : 'پانێڵی بەڕێوەبردن'}
            onNavigate={onNavigate} teacher lang={langCode}
          />
        </>
      )}

      <StreakPanel streak={progress.streak} lang={lang} />
    </nav>
  );
}

/**
 * The streak, framed as academic evidence rather than a game score: a brass
 * rule, a number, and one line about why consistency matters — in the
 * student's own language.
 */
function StreakPanel({ streak, lang }: { streak: number; lang: 'ar' | 'ku' }) {
  return (
    <div className="mt-auto pt-6">
      <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-brass-300/80">
            Günlük seri
          </span>
          <Flame size={14} className="text-brass-400" aria-hidden />
        </div>

        <p className="mt-2 flex items-baseline gap-1.5">
          <span className="font-display text-3xl font-semibold tabular-nums text-white">
            {streak}
          </span>
          <span className="text-xs font-medium text-ink-400">gün</span>
        </p>

        <div
          className="mt-2.5 h-px w-full"
          style={{ background: 'linear-gradient(90deg, rgb(208 168 87 / .5), transparent)' }}
          aria-hidden
        />

        <p
          className={cx('mt-2.5 text-[11px] leading-relaxed text-ink-400', lang === 'ar' ? 'ar-text' : 'ku-text')}
          lang={lang === 'ar' ? 'ar' : 'ckb'}
          dir="rtl"
        >
          {lang === 'ar'
            ? 'ادرس كل يوم ولو قليلاً — الاستمرار أهم من الكم.'
            : 'هەموو ڕۆژێک بخوێنە با کەمیش بێت — بەردەوامی گرنگترە لە بڕ.'}
        </p>
      </div>
    </div>
  );
}

function GroupTitle({
  turkish, translated, lang,
}: { turkish: string; translated: string; lang: 'ar' | 'ckb' }) {
  return (
    <div className="mb-1.5 mt-6 flex items-baseline justify-between gap-2 px-3">
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-ink-500">
        {turkish}
      </span>
      <span className="font-arabic text-[11px] text-ink-500" dir="rtl" lang={lang}>
        {translated}
      </span>
    </div>
  );
}

function SidebarLink({
  to, icon: Icon, turkish, translated, end, onNavigate, badge, teacher = false, lang,
}: {
  to: string;
  icon: typeof Home;
  turkish: string;
  translated: string;
  end?: boolean;
  onNavigate?: () => void;
  badge?: number;
  teacher?: boolean;
  lang: 'ar' | 'ckb';
}) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) => cx(
        'group relative flex items-center gap-3 rounded-xl py-2 pl-3 pr-3 text-sm transition',
        isActive
          ? 'bg-white/[.07] font-semibold text-white'
          : cx(
            'hover:bg-white/[.05] hover:text-white',
            teacher ? 'text-brass-300/80' : 'text-ink-300',
          ),
      )}
    >
      {({ isActive }) => (
        <>
          {/* Brass marker on the active item — the one place gold appears in
              the rail, so it always means "you are here". */}
          <span
            className={cx(
              'absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-brass-400 transition-opacity duration-200',
              isActive ? 'opacity-100' : 'opacity-0',
            )}
            aria-hidden
          />
          <Icon
            size={16}
            className={cx(
              'shrink-0 transition-colors',
              isActive ? 'text-brand-300' : teacher ? 'text-brass-400/70' : 'text-ink-500 group-hover:text-ink-300',
            )}
            aria-hidden
          />
          <span className="min-w-0 flex-1 truncate">{turkish}</span>
          {badge !== undefined && (
            <span className="shrink-0 rounded-full bg-accent-600 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
              {badge}
            </span>
          )}
          <span
            className="hidden shrink-0 font-arabic text-[11px] text-ink-500 xl:block"
            dir="rtl"
            lang={lang}
          >
            {translated}
          </span>
        </>
      )}
    </NavLink>
  );
}

export { Calculator };
