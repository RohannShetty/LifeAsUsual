/**
 * Storage Ledger: Manages reading progress, bookmarks, daily counts, and streaks
 * Section 6: Versioned localStorage key, sets of tip IDs, try/catch safety, export/import
 */

export interface ChecklistProgress {
  revision: string;
  completedActionIds: string[];
  updatedAt: number;
}

export interface LedgerState {
  version: 2;
  readTipIds: string[]; // e.g. ["1-1", "7-12"]
  picks: string[]; // Bookmarked tip IDs
  lastPosition: { chapter: number; tip: number; timestamp: number } | null;
  history: Record<string, number>; // "YYYY-MM-DD" -> count of tips read that day
  streak: number;
  lastActiveDate: string | null; // "YYYY-MM-DD"
  readAt?: Record<string, number>; // tip id -> ms timestamp of first read
  recall?: Record<string, number>; // tip id -> completed review stage, 0 = first due
  checklists: Record<string, ChecklistProgress>;
}

const STORAGE_KEY = 'htlb_ledger_v1';
const CHECKLIST_ID = /^[a-z0-9][a-z0-9._-]{0,79}$/;
const CHECKLIST_REVISION = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
const ACTION_ID = /^[a-z0-9][a-z0-9._-]{0,79}$/;
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
    version: 2,
    readTipIds: [],
    picks: [],
    lastPosition: null,
    history: {},
    streak: 0,
    lastActiveDate: null,
    readAt: {},
    recall: {},
    checklists: {},
  };
}

const TIP_ID = /^\d+-\d+$/;

function dateKey(value: unknown): string | null {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null;
}

function position(value: unknown): LedgerState['lastPosition'] {
  if (!value || typeof value !== 'object') return null;
  const raw = value as Record<string, unknown>;
  if (!Number.isInteger(raw.chapter) || !Number.isInteger(raw.tip)) return null;
  return {
    chapter: raw.chapter as number,
    tip: raw.tip as number,
    timestamp: typeof raw.timestamp === 'number' && Number.isFinite(raw.timestamp) ? raw.timestamp : 0,
  };
}

function dayCounts(value: unknown): Record<string, number> {
  if (!value || typeof value !== 'object') return {};
  const clean: Record<string, number> = {};
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    if (dateKey(key) && typeof entry === 'number' && Number.isFinite(entry) && entry >= 0) clean[key] = entry;
  }
  return clean;
}

function checklistMap(value: unknown): Record<string, ChecklistProgress> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  const clean: Record<string, ChecklistProgress> = {};
  for (const [id, entry] of Object.entries(value as Record<string, unknown>)) {
    if (!CHECKLIST_ID.test(id) || !entry || typeof entry !== 'object' || Array.isArray(entry)) continue;
    const raw = entry as Record<string, unknown>;
    if (typeof raw.revision !== 'string' || !CHECKLIST_REVISION.test(raw.revision)) continue;
    if (typeof raw.updatedAt !== 'number' || !Number.isFinite(raw.updatedAt) || raw.updatedAt < 0) continue;
    const completedActionIds = Array.isArray(raw.completedActionIds)
      ? Array.from(new Set(raw.completedActionIds.filter((item): item is string => typeof item === 'string' && ACTION_ID.test(item))))
      : [];
    clean[id] = { revision: raw.revision, completedActionIds, updatedAt: Math.floor(raw.updatedAt) };
  }
  return clean;
}

/**
 * Turn whatever is stored or imported into a ledger this build can trust.
 *
 * Returns null for anything this version cannot read, including a future
 * version: silently downgrading a newer ledger would destroy reading history,
 * so an unknown version is left untouched and the caller falls back to an
 * empty ledger for display only. Duplicate or malformed tip IDs are dropped
 * rather than crashing the reader, and the result is idempotent, so running
 * the migration again never changes a normalized ledger.
 */
export function normalizeLedger(input: unknown): LedgerState | null {
  if (!input || typeof input !== 'object') return null;
  const parsed = input as Record<string, unknown>;
  if (parsed.version !== 1 && parsed.version !== 2) return null;
  const defaultState = getDefaultState();
  const ids = (value: unknown): string[] =>
    Array.isArray(value) ? Array.from(new Set(value.map(String).filter((entry) => TIP_ID.test(entry)))) : [];
  return {
    ...defaultState,
    readTipIds: ids(parsed.readTipIds),
    picks: ids(parsed.picks),
    lastPosition: position(parsed.lastPosition),
    history: dayCounts(parsed.history),
    streak: typeof parsed.streak === 'number' && Number.isFinite(parsed.streak) && parsed.streak >= 0 ? Math.floor(parsed.streak) : 0,
    lastActiveDate: dateKey(parsed.lastActiveDate),
    readAt: numericMap(parsed.readAt),
    recall: numericMap(parsed.recall),
    checklists: checklistMap(parsed.checklists),
  };
}

/**
 * Retain completion only for stable action IDs still present in the current
 * approved checklist. Changed actions must receive new IDs in content data.
 */
export function checklistProgressFor(
  state: LedgerState,
  checklistId: string,
  revision: string,
  allowedActionIds: readonly string[]
): ChecklistProgress | null {
  if (!CHECKLIST_ID.test(checklistId) || !CHECKLIST_REVISION.test(revision)) return null;
  const allowed = new Set(allowedActionIds.filter((id) => ACTION_ID.test(id)));
  const stored = state.checklists[checklistId];
  return {
    revision,
    completedActionIds: stored ? stored.completedActionIds.filter((id) => allowed.has(id)) : [],
    updatedAt: stored?.updatedAt ?? 0,
  };
}

/** Update one action only when its stable ID belongs to the current approved record. */
export function updateChecklistStep(
  checklistId: string,
  revision: string,
  actionId: string,
  completed: boolean,
  allowedActionIds: readonly string[],
  now = Date.now()
): boolean {
  if (!CHECKLIST_ID.test(checklistId) || !CHECKLIST_REVISION.test(revision)) return false;
  if (!ACTION_ID.test(actionId) || !allowedActionIds.includes(actionId)) return false;
  if (!Number.isFinite(now) || now < 0) return false;
  const state = getLedger();
  const current = checklistProgressFor(state, checklistId, revision, allowedActionIds);
  if (!current) return false;
  const completedIds = new Set(current.completedActionIds);
  if (completed) completedIds.add(actionId);
  else completedIds.delete(actionId);
  state.checklists[checklistId] = {
    revision,
    completedActionIds: [...completedIds],
    updatedAt: Math.floor(now),
  };
  saveLedger(state);
  return true;
}

/** Remove only this checklist's local completion state. */
export function resetChecklistProgress(checklistId: string): boolean {
  if (!CHECKLIST_ID.test(checklistId)) return false;
  const state = getLedger();
  if (!state.checklists[checklistId]) return false;
  delete state.checklists[checklistId];
  saveLedger(state);
  return true;
}

export function getLedger(): LedgerState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    const normalized = normalizeLedger(parsed);
    if (normalized) return normalized;
  } catch (e) {
    console.warn('[Ledger] Failed to load state from localStorage:', e);
  }
  return getDefaultState();
}

export function saveLedger(state: LedgerState): void {
  try {
    // A newer build may have written a version this build cannot read. Do not
    // replace it with a downgraded ledger: refusing to save keeps that reader's
    // history recoverable when they go back to the newer build.
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
      const stored = JSON.parse(existing) as { version?: unknown };
      if (typeof stored?.version === 'number' && stored.version > state.version) {
        console.warn('[Ledger] Newer ledger version stored; refusing to overwrite it');
        return;
      }
    }
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
  state.readAt = state.readAt ?? {};
  if (state.readAt[tipId] === undefined) state.readAt[tipId] = Date.now();
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
    // Re-reading a tip should restart its recall clock, not inherit the old one.
    if (state.readAt) delete state.readAt[tipId];
    if (state.recall) delete state.recall[tipId];
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

function numericMap(value: unknown): Record<string, number> {
  if (!value || typeof value !== 'object') return {};
  const clean: Record<string, number> = {};
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    if (typeof entry === 'number' && Number.isFinite(entry)) clean[key] = entry;
  }
  return clean;
}

export function importLedgerJSON(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    if (parsed && Array.isArray(parsed.readTipIds)) {
      const cleanState = normalizeLedger(parsed);
      if (cleanState) {
        saveLedger(cleanState);
        return true;
      }
    }
  } catch (e) {
    console.error('[Ledger] Invalid import JSON:', e);
  }
  return false;
}

export function resetLedger(): void {
  saveLedger(getDefaultState());
}

/**
 * Spaced recall over tips already read. Stage 0 asks after 3 days, then 7,
 * then 21, then 60. Forgetting drops the tip back to stage 0. Everything stays
 * in the same local ledger as reading progress.
 */
export const RECALL_INTERVALS_DAYS = [3, 7, 21, 60] as const;
const DAY_MS = 24 * 60 * 60 * 1000;

export function recallStage(tipId: string, state: LedgerState = getLedger()): number {
  const stage = state.recall?.[tipId] ?? 0;
  return stage >= 0 && stage < RECALL_INTERVALS_DAYS.length ? stage : 0;
}

export function recallDueAt(
  tipId: string,
  state: LedgerState = getLedger(),
  now = Date.now()
): number | null {
  const readAt = state.readAt?.[tipId];
  // A missing or corrupt timestamp means "due now", never "never due". Return the
  // caller's clock, not a fresh Date.now(): the due check compares against that same
  // clock, so re-reading it here made a legacy ledger due only when both reads landed
  // in the same millisecond.
  if (readAt === undefined || !Number.isFinite(readAt)) return now;
  return readAt + RECALL_INTERVALS_DAYS[recallStage(tipId, state)] * DAY_MS;
}

export function recallDueTipIds(
  state: LedgerState = getLedger(),
  now = Date.now(),
  limit = 3
): string[] {
  return state.readTipIds
    .filter((tipId) => {
      const due = recallDueAt(tipId, state, now);
      return due !== null && due <= now;
    })
    .sort((a, b) => recallStage(a, state) - recallStage(b, state))
    .slice(0, limit);
}

export function recordRecall(tipId: string, remembered: boolean, now = Date.now()): LedgerState {
  const state = getLedger();
  // Only a tip that is actually due may advance, so a duplicate click, a key
  // repeat, or a second tab cannot skip a review stage.
  const dueAt = recallDueAt(tipId, state, now);
  if (dueAt !== null && dueAt > now) return state;
  state.readAt = state.readAt ?? {};
  state.recall = state.recall ?? {};
  const stage = recallStage(tipId, state);
  state.recall[tipId] = remembered
    ? Math.min(stage + 1, RECALL_INTERVALS_DAYS.length - 1)
    : 0;
  if (state.readAt[tipId] === undefined) state.readAt[tipId] = now;
  // Restart the interval from now, so the next check counts from this recall.
  state.readAt[tipId] = now;
  saveLedger(state);
  return state;
}

export function nextRecallLabel(tipId: string, state: LedgerState = getLedger()): string {
  const stage = recallStage(tipId, state);
  const days = RECALL_INTERVALS_DAYS[stage];
  return 'in ' + days + ' days';
}

