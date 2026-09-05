/**
 * Finds a Chrome or Chromium binary on any platform.
 *
 * Every browser-driven script used to fall back to a hard-coded Windows path.
 * That works on the machine this project is developed on and nowhere else, so
 * none of the browser suites could run on a GitHub runner without the caller
 * setting CHROME_PATH by hand.
 *
 * The search order is: an explicit CHROME_PATH, then the conventional install
 * locations for the current platform. GitHub's ubuntu-latest images ship
 * Chrome at /usr/bin/google-chrome, which is in the Linux list.
 */
import { existsSync } from 'node:fs';

const CANDIDATES = {
  win32: [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    `${process.env.LOCALAPPDATA ?? ''}/Google/Chrome/Application/chrome.exe`,
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  ],
  darwin: [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  ],
  linux: [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
    '/opt/google/chrome/chrome',
  ],
};

/**
 * @returns {string} an existing browser executable path
 * @throws when none is found, with the platform's candidates listed
 */
export function findChrome() {
  const explicit = process.env.CHROME_PATH;
  if (explicit) {
    if (existsSync(explicit)) return explicit;
    throw new Error(`CHROME_PATH is set to "${explicit}" but nothing is there.`);
  }

  const candidates = CANDIDATES[process.platform] ?? CANDIDATES.linux;
  const found = candidates.find((p) => existsSync(p));
  if (found) return found;

  throw new Error(
    `No Chrome or Chromium found on ${process.platform}. Set CHROME_PATH, or install one.\n`
    + `Looked in:\n${candidates.map((p) => `  ${p}`).join('\n')}`,
  );
}
