import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { copyFileSync, existsSync } from 'node:fs';

/**
 * Deployment base path.
 *
 * A user or organisation GitHub Pages site is served from the domain root, so
 * `/` is right. A *project* site is served from `/<repo>/`, and a build made
 * with `/` produces `<script src="/assets/…">` — which resolves to the domain
 * root and 404s. Nothing in the app is wrong; the URLs simply point one level
 * too high.
 *
 * Set it at build time and nothing else has to change:
 *
 *   VITE_BASE=/turkishpath/ npm run build
 *
 * The default stays `/` so local dev, `vite preview` and root-domain hosting
 * behave exactly as before.
 */
const base = process.env.VITE_BASE ?? '/';

/**
 * GitHub Pages has no SPA rewrite rule: a request for `/levels/b1` looks for a
 * file at that path, does not find one, and serves 404.html. Shipping a copy
 * of index.html as 404.html means the app boots anyway and the router reads
 * the URL as normal — the standard fix, and it costs one duplicated file.
 */
function spaFallback(): Plugin {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    // `generateBundle` runs before Vite's HTML plugin has finished writing
    // index.html, so the asset is not in the bundle yet and nothing is copied.
    // `closeBundle` runs after everything is on disk.
    closeBundle() {
      const dir = path.resolve(__dirname, 'dist');
      const index = path.join(dir, 'index.html');
      if (existsSync(index)) copyFileSync(index, path.join(dir, '404.html'));
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@content': path.resolve(__dirname, './content'),
    },
  },
  server: { port: 5173, open: false },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // The curriculum is large and changes independently of the UI,
          // so it gets its own long-lived chunk.
          if (id.includes('/content/')) return 'curriculum';
          if (id.includes('node_modules/react')) return 'react';
          if (id.includes('node_modules/lucide-react')) return 'icons';
          if (id.includes('node_modules')) return 'vendor';
          return undefined;
        },
      },
    },
  },
});
