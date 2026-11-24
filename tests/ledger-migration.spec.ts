import { expect, test } from '@playwright/test';
import { checklistProgressFor, normalizeLedger } from '../src/scripts/storage-ledger';

// P2.4: a stored or imported ledger must survive an older or damaged shape
// without losing reading history and without being silently downgraded.
test.describe('ledger migration', () => {
  test('a partial legacy ledger keeps its read state and gains the missing fields', () => {
    const state = normalizeLedger({ version: 1, readTipIds: ['1-1', '7-12'], picks: ['2-3'], history: { '2026-10-01': 2 }, streak: 3, lastActiveDate: '2026-10-01' });
    expect(state).not.toBeNull();
    expect(state!.version).toBe(2);
    expect(state!.checklists).toEqual({});
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

  test('checklist progress is normalized and follows stable action IDs across revisions', () => {
    const state = normalizeLedger({
      version: 2,
      readTipIds: ['7-1'],
      checklists: {
        'job-loss': {
          revision: '2026-11-24',
          completedActionIds: ['save-records', 'save-records', 'removed-action', 'bad id'],
          updatedAt: 1764000000000
        },
        'bad checklist id!': { revision: 'r1', completedActionIds: ['step-one'], updatedAt: 1 },
        'bad-revision': { revision: '', completedActionIds: ['step-one'], updatedAt: 1 },
        'bad-time': { revision: 'r1', completedActionIds: ['step-one'], updatedAt: -1 }
      }
    });
    expect(state).not.toBeNull();
    expect(state!.readTipIds).toEqual(['7-1']);
    expect(state!.checklists).toEqual({
      'job-loss': {
        revision: '2026-11-24',
        completedActionIds: ['save-records', 'removed-action'],
        updatedAt: 1764000000000
      }
    });
    expect(normalizeLedger(state)).toEqual(state);
    const current = checklistProgressFor(state!, 'job-loss', '2026-11-25', ['save-records', 'call-official-office']);
    expect(current).toEqual({
      revision: '2026-11-25',
      completedActionIds: ['save-records'],
      updatedAt: 1764000000000
    });
    expect(checklistProgressFor(state!, 'job-loss', 'r2', ['call-official-office'])!.completedActionIds).toEqual([]);
    expect(checklistProgressFor(state!, 'bad id', 'r2', [])).toBeNull();
  });

  test('a future ledger version is refused rather than downgraded', () => {
    expect(normalizeLedger({ version: 3, readTipIds: ['1-1'] })).toBeNull();
    expect(normalizeLedger('not a ledger')).toBeNull();
    expect(normalizeLedger(null)).toBeNull();
  });
});
