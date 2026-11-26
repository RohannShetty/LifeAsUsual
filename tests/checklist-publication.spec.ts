import { expect, test } from '@playwright/test';
import type { CanonicalLesson } from '../src/lib/content-trust';
import {
  checklistContentHash,
  checklistPublicationErrors,
  type ChecklistContent,
  type IndiaChecklistRecord
} from '../src/lib/checklist-publication';

const lesson = (): CanonicalLesson => ({
  id: 'synthetic-checklist-lesson',
  revision: '2026-11-25',
  title: 'Synthetic lesson used only by checklist validator tests',
  origin: 'india-original',
  reviewStatus: 'ai-reviewed-draft',
  claims: [{
    id: 'synthetic-claim-1',
    text: 'A low-risk synthetic claim for validator tests only.',
    risk: 'low',
    jurisdiction: 'IN',
    sourceIds: ['synthetic-source-1']
  }],
  evidence: [{
    id: 'synthetic-source-1',
    title: 'Synthetic source',
    publisher: 'Test fixture',
    url: 'https://example.org/synthetic',
    locator: 'Section 1: synthetic test fixture',
    checkedAt: '2026-11-25',
    jurisdiction: 'IN',
    assessment: 'supports'
  }],
  verification: [{
    reviewer: 'Synthetic independent AI fixture',
    method: 'independent-ai',
    reviewedAt: '2026-11-25',
    lessonRevision: '2026-11-25',
    claimIds: ['synthetic-claim-1'],
    verdict: 'pass',
    reportPath: 'tests/fixtures/synthetic-only.md'
  }]
});

const content = (): ChecklistContent => ({
  id: 'synthetic-checklist',
  revision: '2026-11-25',
  title: 'Synthetic checklist for automated tests',
  route: '/checklists/synthetic-checklist/',
  locale: 'en-IN',
  jurisdiction: 'IN',
  lessonId: 'synthetic-checklist-lesson',
  lessonRevision: '2026-11-25',
  actions: [{
    id: 'synthetic-action-1',
    text: 'Keep a copy of the relevant written record.',
    claimIds: ['synthetic-claim-1']
  }]
});

const approvedRecord = (): IndiaChecklistRecord => {
  const value = content();
  const hash = checklistContentHash(value);
  return {
    ...value,
    review: {
      reviewer: 'Synthetic reviewer fixture',
      qualification: 'Synthetic test qualification; not a real credential',
      method: 'qualified-human',
      independent: true,
      reviewedAt: '2026-11-25',
      checklistRevision: value.revision,
      contentHash: hash,
      actionIds: ['synthetic-action-1'],
      claimIds: ['synthetic-claim-1'],
      scope: 'Checklist synthetic-checklist@2026-11-25; synthetic-claim-1',
      reportPath: 'reports/checklist-reviews/synthetic-checklist.md'
    }
  };
};

const readReport = (record: IndiaChecklistRecord): string => [
  'Checklist: ' + record.id,
  'Revision: ' + record.revision,
  'SHA-256: ' + record.review.contentHash,
  ...record.review.actionIds.map((id) => 'Action: ' + id),
  ...record.review.claimIds.map((id) => 'Claim: ' + id)
].join('\n');

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

test.describe('approved checklist publication contract (synthetic fixtures)', () => {
  test('an empty registry is valid while no checklist route is published', () => {
    expect(checklistPublicationErrors([], [lesson()])).toEqual([]);
  });

  test('a complete checklist requires exact lesson, action, claim and review evidence', () => {
    const record = approvedRecord();
    expect(checklistPublicationErrors([record], [lesson()], {
      readReport: (path) => path === record.review.reportPath ? readReport(record) : null
    })).toEqual([]);
  });

  test('missing or self-review approval fails closed', () => {
    const missing = clone(approvedRecord()) as any;
    delete missing.review;
    expect(checklistPublicationErrors([missing], [lesson()]).join('\n')).toMatch(/review/);

    const selfReviewed = clone(approvedRecord()) as any;
    selfReviewed.review.method = 'owner-self-review';
    selfReviewed.review.independent = false;
    expect(checklistPublicationErrors([selfReviewed], [lesson()]).join('\n')).toMatch(/method|independent/);
  });

  test('stale source lesson revisions cannot authorize a checklist', () => {
    const record = approvedRecord();
    record.lessonRevision = '2026-11-24';
    expect(checklistPublicationErrors([record], [lesson()]).join('\n')).toMatch(/source lesson revision mismatch/);
  });

  test('duplicate action IDs and unknown claim references are rejected', () => {
    const record = approvedRecord();
    record.actions.push({ id: 'synthetic-action-1', text: 'A second synthetic action.', claimIds: ['missing-claim'] });
    const errors = checklistPublicationErrors([record], [lesson()]).join('\n');
    expect(errors).toMatch(/duplicate action ID/);
    expect(errors).toMatch(/unknown claim missing-claim/);
  });

  test('changing visible action text invalidates the reviewed content hash', () => {
    const record = approvedRecord();
    record.actions[0].text = 'A changed action that was not reviewed.';
    expect(checklistPublicationErrors([record], [lesson()]).join('\n')).toMatch(/content hash does not match/);
  });

  test('the review must cover every current action and referenced claim', () => {
    const record = approvedRecord();
    record.review.actionIds = ['stale-action-id'];
    record.review.claimIds = ['stale-claim-id'];
    const errors = checklistPublicationErrors([record], [lesson()]).join('\n');
    expect(errors).toMatch(/exact current action IDs/);
    expect(errors).toMatch(/exact action claim IDs/);
  });

  test('review report must exist and bind the exact revision and content hash', () => {
    const record = approvedRecord();
    expect(checklistPublicationErrors([record], [lesson()], { readReport: () => null }).join('\n'))
      .toMatch(/report is missing or empty/);
    expect(checklistPublicationErrors([record], [lesson()], { readReport: () => 'Checklist: other' }).join('\n'))
      .toMatch(/review report does not record/);
  });

  test('unknown state codes cannot pass checklist publication', () => {
    const record = approvedRecord();
    record.jurisdiction = 'IN-XX';
    expect(checklistPublicationErrors([record], [lesson()]).join('\\n'))
      .toMatch(/invalid Indian jurisdiction/);
  });

  test('state-specific checklists cannot reuse a claim from another state', () => {
    const record = approvedRecord();
    record.jurisdiction = 'IN-MH';
    const sourceLesson = lesson();
    sourceLesson.claims[0].jurisdiction = 'IN-KA';
    expect(checklistPublicationErrors([record], [sourceLesson]).join('\n'))
      .toMatch(/different jurisdiction/);
  });
});
