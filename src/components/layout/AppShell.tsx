import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { cx } from '@/lib/utils';
import { useSettings } from '@/state/SettingsContext';
import { Sidebar } from './Sidebar';
import { GlobalSearch } from './GlobalSearch';
import { LanguageToggle } from '@/components/learn/Translation';

/**
 * The academy frame: a midnight rail on the left, warm paper to the right.
 *
 * The rail stays dark in both themes. Light mode is therefore not "the white
 * one" — it is navy and brass on paper, which is what stops the app reading
 * as a generic dashboard the moment it loads.
 */
export function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolvedTheme, set, theme } = useSettings();
  const location = useLocation();

  // Close the drawer and scroll to top whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const cycleTheme = () => {
    set('theme', theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light');
  };

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand-700 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        İçeriğe geç
      </a>

      {/* Desktop rail */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[272px] bg-rail lg:block">
        <BrandMark />
        <div className="h-[calc(100vh-4.5rem)]">
          <Sidebar />
        </div>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 animate-fade-in bg-ink-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <aside className="fixed inset-y-0 left-0 z-50 flex w-[284px] flex-col bg-rail shadow-lift lg:hidden">
            <div className="flex items-center justify-between pr-2">
              <BrandMark bare />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-lg text-ink-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Menüyü kapat"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar onNavigate={() => setMobileOpen(false)} />
            </div>
          </aside>
        </>
      )}

      {/* Main column */}
      <div className="lg:pl-[272px]">
        <header
          className="sticky top-0 z-20 border-b border-hairline"
          style={{ background: 'rgb(var(--bg) / .82)', backdropFilter: 'blur(12px)' }}
        >
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="btn-ghost h-10 w-10 !p-0 lg:hidden"
              aria-label="Menüyü aç"
            >
              <Menu size={20} />
            </button>

            {/* Brand shows in the bar only on mobile, where the rail is hidden. */}
            <Link to="/" className="flex items-center gap-2 lg:hidden" aria-label="TurkishPath ana sayfa">
              <BrandGlyph />
            </Link>

            <div className="flex-1">
              <GlobalSearch />
            </div>

            <LanguageToggle className="hidden sm:inline-flex" />

            <button
              type="button"
              onClick={cycleTheme}
              className="btn-ghost h-10 w-10 !p-0"
              aria-label="Temayı değiştir"
              title={`Tema: ${theme}`}
            >
              {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        <main id="main" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-10">
          <Outlet />
        </main>

        <footer className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-8">
          <div className="rule-brass mb-5" />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 t-caption">
            <span className="font-display text-sm font-semibold text-secondary">
              TurkishPath
            </span>
            <span className="text-muted">—</span>
            <span>Türkçe Öğren.</span>
            <span className="ar-text text-[13px]" dir="rtl" lang="ar">
              منصّة تعلّم التركية للناطقين بالعربية والكردية.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/**
 * The mark: an eight-pointed star cut from brass, with the Turkish "T"
 * inside it. Two squares — the same construction as the lattice motif — so
 * the logo and the background texture are literally the same geometry.
 */
function BrandGlyph({ size = 34 }: { size?: number }) {
  return (
    <span
      className="relative grid shrink-0 place-items-center"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 40 40" width={size} height={size} className="absolute inset-0">
        <g transform="translate(20 20)">
          <rect
            x="-13" y="-13" width="26" height="26" rx="2"
            className="fill-brand-600"
          />
          <rect
            x="-13" y="-13" width="26" height="26" rx="2"
            transform="rotate(45)"
            className="fill-brand-700"
          />
          <rect
            x="-13" y="-13" width="26" height="26" rx="2"
            fill="none" strokeWidth="1"
            className="stroke-brass-400/50"
          />
        </g>
      </svg>
      <span className="relative font-display text-[15px] font-bold leading-none text-white">
        T
      </span>
    </span>
  );
}

function BrandMark({ bare = false }: { bare?: boolean }) {
  return (
    <Link
      to="/"
      className={cx(
        'flex h-[4.5rem] items-center gap-2.5 px-5',
        !bare && 'border-b border-white/10',
      )}
    >
      <BrandGlyph />
      <span className="min-w-0">
        <span className="block font-display text-[15px] font-semibold leading-tight tracking-tight text-white">
          TurkishPath
        </span>
        <span className="block font-mono text-[10px] uppercase tracking-[.14em] text-brass-300/70">
          Türkçe Öğren
        </span>
      </span>
    </Link>
  );
}
