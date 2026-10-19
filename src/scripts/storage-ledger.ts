/**
 * Storage Ledger: Manages reading progress, bookmarks, daily counts, and streaks
 * Section 6: Versioned localStorage key, sets of tip IDs, try/catch safety, export/import
 */

export interface LedgerState {
  version: 1;
  readTipIds: string[]; // e.g. ["1-1", "7-12"]
  picks: string[]; // Bookmarked tip IDs
  lastPosition: { chapter: number; tip: number; timestamp: number } | null;
  history: Record<string, number>; // "YYYY-MM-DD" -> count of tips read that day
  streak: number;
  lastActiveDate: string | null; // "YYYY-MM-DD"
}

const STORAGE_KEY = 'htlb_ledger_v1';
const EVENT_NAME = 'htlb:ledger-update';

function getTodayString(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDefaultState(): LedgerState {
  return {
    version: 1,
    readTipIds: [],
    picks: [],
    lastPosition: null,
    history: {},
    streak: 0,
    lastActiveDate: null,
  };
}

export function getLedger(): LedgerState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === 1) {
      return parsed;
    }
  } catch (e) {
    console.warn('[Ledger] Failed to load state from localStorage:', e);
  }
  return getDefaultState();
}

export function saveLedger(state: LedgerState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: state }));
  } catch (e) {
    console.warn('[Ledger] Failed to save state to localStorage:', e);
  }
}

export function subscribeLedger(callback: (state: LedgerState) => void): () => void {
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<LedgerState>;
    callback(customEvent.detail || getLedger());
  };
  window.addEventListener(EVENT_NAME, handler);
  // Also fire immediately with current state
  callback(getLedger());
  return () => window.removeEventListener(EVENT_NAME, handler);
}

export function isTipRead(tipId: string): boolean {
  const state = getLedger();
  return state.readTipIds.includes(tipId);
}

export function markTipRead(tipId: string, chapter: number, tip: number): boolean {
  const state = getLedger();
  if (state.readTipIds.includes(tipId)) {
    return false; // Already read
  }

  state.readTipIds.push(tipId);
  state.lastPosition = { chapter, tip, timestamp: Date.now() };

  // Update daily count and streak
  const today = getTodayString();
  state.history[today] = (state.history[today] || 0) + 1;

  if (state.lastActiveDate !== today) {
    if (state.lastActiveDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
      if (state.lastActiveDate === yStr) {
        state.streak += 1;
      } else {
        state.streak = 1; // Streak reset
      }
    } else {
      state.streak = 1;
    }
    state.lastActiveDate = today;
  }

  saveLedger(state);
  return true;
}

export function unmarkTipRead(tipId: string): void {
  const state = getLedger();
  const idx = state.readTipIds.indexOf(tipId);
  if (idx !== -1) {
    state.readTipIds.splice(idx, 1);
    saveLedger(state);
  }
}

export function toggleTipRead(tipId: string, chapter: number, tip: number): boolean {
  if (isTipRead(tipId)) {
    unmarkTipRead(tipId);
    return false;
  } else {
    markTipRead(tipId, chapter, tip);
    return true;
  }
}

export function isTipPicked(tipId: string): boolean {
  const state = getLedger();
  return state.picks.includes(tipId);
}

export function togglePick(tipId: string): boolean {
  const state = getLedger();
  const idx = state.picks.indexOf(tipId);
  let nowPicked = false;
  if (idx !== -1) {
    state.picks.splice(idx, 1);
  } else {
    state.picks.push(tipId);
    nowPicked = true;
  }
  saveLedger(state);
  return nowPicked;
}

export function exportLedgerJSON(): void {
  const state = getLedger();
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `howtolivebetter-progress-${getTodayString()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function importLedgerJSON(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    if (parsed && Array.isArray(parsed.readTipIds)) {
      const cleanState: LedgerState = {
        version: 1,
        readTipIds: Array.from(new Set(parsed.readTipIds.map(String))),
        picks: Array.isArray(parsed.picks) ? Array.from(new Set(parsed.picks.map(String))) : [],
        lastPosition: parsed.lastPosition || null,
        history: typeof parsed.history === 'object' && parsed.history !== null ? parsed.history : {},
        streak: typeof parsed.streak === 'number' ? parsed.streak : 0,
        lastActiveDate: parsed.lastActiveDate || null,
      };
      saveLedger(cleanState);
      return true;
    }
  } catch (e) {
    console.error('[Ledger] Invalid import JSON:', e);
  }
  return false;
}

export function resetLedger(): void {
  saveLedger(getDefaultState());
}
