/// <reference types="vite/client" />

/**
 * Vite's ambient types, which declare `import.meta.env`.
 *
 * The project previously had no reference to them because nothing read
 * `import.meta.env`. Adding the deployment base path made `BASE_URL` the first
 * consumer, and TypeScript needs to know it exists.
 */
