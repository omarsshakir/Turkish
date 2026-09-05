import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*
      Vite rewrites BASE_URL to whatever `base` was set at build time, so one
      env var configures the bundler and the router together. Trailing slashes
      are stripped because react-router wants `/repo`, not `/repo/`.
    */}
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
