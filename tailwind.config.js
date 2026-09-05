/** @type {import('tailwindcss').Config} */

/**
 * TurkishPath design system.
 *
 * The palette is drawn from Iznik ceramics - the turquoise, cobalt, bole red
 * and white of 16th-century Ottoman tilework - on warm paper rather than the
 * cold grey of a generic dashboard. It is a Turkish reference that a student
 * feels rather than reads, which is the point: no flags, no mosques, no
 * crescents.
 *
 * Three rules hold the system together:
 *
 *   1. `ink` is the spine. It runs WARM at the light end (paper, parchment
 *      hairlines) and COOL at the dark end (midnight navy). Light mode is
 *      navy ink on warm paper; dark mode is warm-tinted text on midnight.
 *      Neither is an inversion of the other.
 *   2. `brand` (turquoise) means *interactive* - links, audio, focus, the
 *      active nav item. If it is turquoise, you can touch it.
 *   3. `accent` (bole red) and `brass` (gold) are rationed. Red marks what
 *      matters now; brass marks earned progress and premium edges. Neither is
 *      ever a background for a large area.
 */
export default {
  // `content/` is scanned too: level metadata carries its own gradient
  // classes, and without this they are never generated. Before the redesign
  // those classes happened to be duplicated inside src/, so the tiles
  // rendered by accident rather than by configuration.
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        // Editorial serif. Carries the academy voice in headings and Turkish
        // display words; chosen partly for its Turkish diacritics, which stay
        // properly weighted at large sizes (Ğ İ Ş Ç Ö Ü).
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        arabic: ['Noto Naskh Arabic', 'Segoe UI', 'Tahoma', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },

      colors: {
        /* Interactive. Iznik turquoise. */
        brand: {
          50: '#eef7f6', 100: '#d5ecea', 200: '#a9d8d5', 300: '#74bcb9',
          400: '#469c9a', 500: '#2b7f7f', 600: '#1f6768', 700: '#1c5354',
          800: '#1b4445', 900: '#193a3b', 950: '#0a2223',
        },
        /* Important, rationed. Iznik bole red. */
        accent: {
          50: '#fdf4f2', 100: '#fbe5e0', 200: '#f6cbc2', 300: '#eda698',
          400: '#e07a66', 500: '#d1543e', 600: '#b93b28', 700: '#9a2e20',
          800: '#7f281d', 900: '#6a251c', 950: '#39100b',
        },
        /* Premium edges and earned progress. Antique brass. */
        brass: {
          50: '#fbf8ef', 100: '#f6eed8', 200: '#ecdcae', 300: '#dfc37e',
          400: '#d0a857', 500: '#c08f3f', 600: '#a67334', 700: '#87582d',
          800: '#70472a', 900: '#5e3c26', 950: '#361f12',
        },
        /* Cobalt. The other half of the tile palette - used for level
           identity and cool depth, never as a primary action colour. */
        cobalt: {
          50: '#eff4fd', 100: '#dbe6fb', 200: '#bfd3f8', 300: '#93b6f2',
          400: '#6091e9', 500: '#3d6fdd', 600: '#2c53cb', 700: '#2642a5',
          800: '#243a83', 900: '#233468', 950: '#182140',
        },
        /* The spine: warm paper at the top, midnight navy at the bottom. */
        ink: {
          50: '#fbf9f6', 100: '#f4f0ea', 200: '#e5ded2', 300: '#cbc2b2',
          400: '#a09889', 500: '#78736a', 600: '#575a58', 700: '#3f4553',
          800: '#2a3242', 900: '#1a2130', 950: '#0f1725',
        },
      },

      borderRadius: {
        // Slightly tighter than the Tailwind default. Editorial, not bubbly.
        xl: '0.7rem',
        '2xl': '0.9rem',
        '3xl': '1.25rem',
      },

      boxShadow: {
        // Warm-tinted shadows. Grey shadows on warm paper read as dirt.
        card: '0 1px 2px rgba(58,44,28,.05), 0 4px 14px -6px rgba(58,44,28,.10)',
        lift: '0 10px 34px -10px rgba(58,44,28,.22)',
        ring: '0 0 0 4px rgba(43,127,127,.15)',
        inset: 'inset 0 1px 0 rgba(255,255,255,.6)',
      },

      letterSpacing: {
        tightest: '-0.035em',
      },

      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(6px)' }, '100%': { opacity: '1', transform: 'none' } },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        pop: { '0%': { transform: 'scale(.94)' }, '60%': { transform: 'scale(1.03)' }, '100%': { transform: 'scale(1)' } },
        'pulse-ring': { '0%': { boxShadow: '0 0 0 0 rgba(43,127,127,.4)' }, '100%': { boxShadow: '0 0 0 12px rgba(43,127,127,0)' } },
        shake: { '10%,90%': { transform: 'translateX(-1px)' }, '20%,80%': { transform: 'translateX(2px)' }, '30%,50%,70%': { transform: 'translateX(-4px)' }, '40%,60%': { transform: 'translateX(4px)' } },
        bar: { '0%': { width: '0%' } },
        /* Audio: three bars breathing while speech is playing. Amplitude is
           deliberately small - this is a status indicator, not a visualiser. */
        'wave-1': { '0%,100%': { transform: 'scaleY(.35)' }, '50%': { transform: 'scaleY(1)' } },
        'wave-2': { '0%,100%': { transform: 'scaleY(1)' }, '50%': { transform: 'scaleY(.4)' } },
        'wave-3': { '0%,100%': { transform: 'scaleY(.55)' }, '50%': { transform: 'scaleY(.9)' } },
        /* A hairline that draws itself in under a heading. */
        rule: { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
        /* Level unlock: the seal settles into place. */
        seal: {
          '0%': { opacity: '0', transform: 'scale(.8) rotate(-8deg)' },
          '70%': { opacity: '1', transform: 'scale(1.04) rotate(1deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0)' },
        },
      },

      animation: {
        'fade-up': 'fade-up .35s cubic-bezier(.22,1,.36,1) both',
        'fade-in': 'fade-in .25s ease both',
        pop: 'pop .28s cubic-bezier(.22,1,.36,1) both',
        'pulse-ring': 'pulse-ring 1.1s ease-out infinite',
        shake: 'shake .5s cubic-bezier(.36,.07,.19,.97) both',
        'wave-1': 'wave-1 .62s ease-in-out infinite',
        'wave-2': 'wave-2 .62s ease-in-out infinite',
        'wave-3': 'wave-3 .62s ease-in-out infinite',
        rule: 'rule .5s cubic-bezier(.22,1,.36,1) both',
        seal: 'seal .45s cubic-bezier(.22,1,.36,1) both',
      },
    },
  },
  plugins: [],
};
