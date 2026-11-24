import { expect, test } from '@playwright/test';
import {
  RECALL_INTERVALS_DAYS,
  recallDueAt,
  recallDueTipIds,
  recallStage,
} from '../src/scripts/storage-ledger';
import type { LedgerState } from '../src/scripts/storage-ledger';

const DAY = 24 * 60 * 60 * 1000;

function ledger(patch: Partial<LedgerState>): LedgerState {
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
    ...patch,
  };
}

test.describe('spaced recall schedule', () => {
  test('a legacy ledger entry with no timestamp is due on the caller clock', () => {
    // Regression: recallDueAt used to answer with a fresh Date.now() for a tip that
    // has no read timestamp. recallDueTipIds compares against its own captured clock,
    // so a ledger written before readAt existed was "due" only when both reads landed
    // in the same millisecond. That flake hid the memory check at one viewport.
    const state = ledger({ readTipIds: ['1-1'] });
    const earlier = Date.now() - 1000;
    expect(recallDueAt('1-1', state, earlier)).toBe(earlier);
    expect(recallDueTipIds(state, earlier)).toEqual(['1-1']);
  });

  test('a tip read two days ago is not due on the three-day first interval', () => {
    const now = Date.now();
    const state = ledger({ readTipIds: ['1-1'], readAt: { '1-1': now - 2 * DAY } });
    expect(recallDueTipIds(state, now)).toEqual([]);
  });

  test('an answered card waits for the next interval instead of repeating', () => {
    const now = Date.now();
    const state = ledger({
      readTipIds: ['1-1'],
      readAt: { '1-1': now - 4 * DAY },
      recall: { '1-1': 1 },
    });
    expect(recallStage('1-1', state)).toBe(1);
    expect(recallDueTipIds(state, now)).toEqual([]);

    const later = now + RECALL_INTERVALS_DAYS[1] * DAY;
    expect(recallDueTipIds(state, later)).toEqual(['1-1']);
  });

  test('at most three cards are due at once, earliest stage first', () => {
    const now = Date.now();
    const readAt: Record<string, number> = {
      '1-1': now - 30 * DAY,
      '1-2': now - 30 * DAY,
      '1-3': now - 30 * DAY,
      '1-4': now - 90 * DAY,
    };
    const state = ledger({
      readTipIds: ['1-1', '1-2', '1-3', '1-4'],
      readAt,
      recall: { '1-4': 3 },
    });
    const due = recallDueTipIds(state, now);
    expect(due).toHaveLength(3);
    // Earliest stage first, so the stage-3 card is the one left out of the three.
    expect(due).toEqual(['1-1', '1-2', '1-3']);
    expect(recallDueTipIds(state, now, 10)).toContain('1-4');
  });
});
