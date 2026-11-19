import { expect, test } from '@playwright/test';
import { normalizeLedger } from '../src/scripts/storage-ledger';

// P2.4: a stored or imported ledger must survive an older or damaged shape
// without losing reading history and without being silently downgraded.
test.describe('ledger migration', () => {
  test('a partial legacy ledger keeps its read state and gains the missing fields', () => {
    const state = normalizeLedger({ version: 1, readTipIds: ['1-1', '7-12'], picks: ['2-3'], history: { '2026-10-01': 2 }, streak: 3, lastActiveDate: '2026-10-01' });
    expect(state).not.toBeNull();
    expect(state!.readTipIds).toEqual(['1-1', '7-12']);
    expect(state!.picks).toEqual(['2-3']);
    expect(state!.history).toEqual({ '2026-10-01': 2 });
    expect(state!.readAt).toEqual({});
    expect(state!.recall).toEqual({});
    expect(state!.lastPosition).toBeNull();
  });

  test('duplicate and malformed tip IDs are dropped instead of breaking the reader', () => {
    const state = normalizeLedger({ version: 1, readTipIds: ['1-1', '1-1', 'nope', '', '2-3'], picks: [7, '2-3', '2-3'] });
    expect(state!.readTipIds).toEqual(['1-1', '2-3']);
    expect(state!.picks).toEqual(['2-3']);
  });

  test('bad history, streak and position values are replaced with safe defaults', () => {
    const state = normalizeLedger({ version: 1, readTipIds: [], history: { yesterday: 4, '2026-10-01': -1, '2026-10-02': 2 }, streak: -4, lastActiveDate: 'soon', lastPosition: { chapter: '1', tip: 2, timestamp: 5 } });
    expect(state!.history).toEqual({ '2026-10-02': 2 });
    expect(state!.streak).toBe(0);
    expect(state!.lastActiveDate).toBeNull();
    expect(state!.lastPosition).toBeNull();
  });

  test('migration is idempotent', () => {
    const once = normalizeLedger({ version: 1, readTipIds: ['1-1', '1-1'], streak: 2, history: { '2026-10-01': 1 } })!;
    const twice = normalizeLedger(once)!;
    expect(twice).toEqual(once);
  });

  test('a future ledger version is refused rather than downgraded', () => {
    expect(normalizeLedger({ version: 2, readTipIds: ['1-1'] })).toBeNull();
    expect(normalizeLedger('not a ledger')).toBeNull();
    expect(normalizeLedger(null)).toBeNull();
  });
});
