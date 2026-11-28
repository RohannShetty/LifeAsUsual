import { expect, test } from '@playwright/test';
import {
  assessLesson, validateJurisdiction, validateLocaleVersion, validateOverlay,
  type CanonicalLesson
} from '../src/lib/content-trust';

/**
 * These are deliberately synthetic fixture records. Passing the structural
 * contract does NOT mean a real-world claim was independently verified.
 * Publication still needs an external evidence checker and editor approval.
 */
const fixture = (): CanonicalLesson => ({
  id: 'in-test-only',
  revision: '1',
  title: 'Synthetic lesson for validation tests',
  origin: 'india-original',
  reviewStatus: 'ai-reviewed-draft',
  claims: [{
    id: 'in-test-only-claim1',
    text: 'A synthetic claim, not for public publication.',
    risk: 'low',
    jurisdiction: 'IN',
    sourceIds: ['fixture-doc']
  }],
  evidence: [{
    id: 'fixture-doc',
    title: 'Synthetic reference',
    publisher: 'Fixture publisher',
    url: 'https://example.org/test/document',
    locator: 'Section 3: Example process',
    checkedAt: '2026-11-01',
    jurisdiction: 'IN',
    assessment: 'supports'
  }],
  verification: [{
    reviewer: 'Synthetic independent verifier',
    method: 'independent-ai',
    reviewedAt: '2026-11-01',
    lessonRevision: '1',
    claimIds: ['in-test-only-claim1'],
    verdict: 'pass',
    reportPath: 'fixtures/not-an-actual-report.md'
  }]
});

test.describe('India-first claim-level trust contract (synthetic fixtures)', () => {
  test('a complete versioned AI draft meets structural requirements only', () => {
    const result = assessLesson(fixture());
    expect(result.publishable).toBe(true);
    expect(result.status).toBe('ai-reviewed-draft');
  });


  test('future-dated evidence and verification cannot authorize publication', () => {
    const lesson = fixture();
    lesson.evidence[0].checkedAt = '2099-01-01';
    expect(assessLesson(lesson).errors.join(' ')).toContain('Invalid evidence checked date');
    lesson.evidence[0].checkedAt = '2026-11-01';
    lesson.verification![0].reviewedAt = '2099-01-01';
    expect(assessLesson(lesson).publishable).toBe(false);
    lesson.verification![0].reviewedAt = '2026-11-01';
    lesson.reviewStatus = 'human-reviewed';
    lesson.humanApproval = {
      name: 'Fixture reviewer', qualification: 'Fixture qualification',
      scope: 'Fixture claim', approvedAt: '2099-01-01'
    };
    lesson.verification = [{
      reviewer: 'Fixture reviewer', method: 'qualified-human',
      reviewedAt: '2026-11-01', lessonRevision: '1',
      claimIds: ['in-test-only-claim1'], verdict: 'pass',
      reportPath: 'fixtures/human-review-example.md'
    }];
    expect(assessLesson(lesson).errors.join(' ')).toContain('Named, dated, scoped qualified human approval');
  });

  test('unknown Indian jurisdiction codes cannot be used by claims or source evidence', () => {
    const lesson = fixture();
    lesson.claims[0].jurisdiction = 'IN-XX';
    expect(assessLesson(lesson).errors.join(' ')).toContain('Invalid Indian jurisdiction for claim');

    lesson.claims[0].jurisdiction = 'IN';
    lesson.evidence[0].jurisdiction = 'IN-XX';
    expect(assessLesson(lesson).errors.join(' ')).toContain('Invalid Indian source jurisdiction');
  });

  test('a known state-specific claim can use a national Indian source', () => {
    const lesson = fixture();
    lesson.claims[0].jurisdiction = 'IN-MH';
    expect(assessLesson(lesson).publishable).toBe(true);
  });

  test('missing evidence locator fails closed', () => {
    const lesson = fixture();
    lesson.evidence[0].locator = '';
    const result = assessLesson(lesson);
    expect(result.publishable).toBe(false);
    expect(result.errors.join(' ')).toContain('Exact source locator');
  });

  test('a regulator homepage with no supporting claim location is inadequate', () => {
    const lesson = fixture();
    lesson.evidence[0].url = 'https://example.gov/';
    lesson.evidence[0].locator = '';
    expect(assessLesson(lesson).publishable).toBe(false);
  });

  test('unchecked and withdrawn content is not recommended for publication', () => {
    const lesson = fixture();
    lesson.reviewStatus = 'unverified';
    expect(assessLesson(lesson).publishable).toBe(false);
    lesson.reviewStatus = 'withdrawn';
    expect(assessLesson(lesson).publishable).toBe(false);
  });

  test('independent AI verification cannot be claimed for a changed revision', () => {
    const lesson = fixture();
    lesson.revision = '2';
    const result = assessLesson(lesson);
    expect(result.publishable).toBe(false);
    expect(result.errors.join(' ')).toContain('current lesson revision');
  });

  test('contradictory evidence and unknown sources block publication', () => {
    const lesson = fixture();
    lesson.evidence[0].assessment = 'contradicts';
    expect(assessLesson(lesson).publishable).toBe(false);
    lesson.evidence[0].assessment = 'supports';
    lesson.claims[0].sourceIds = ['not-a-source'];
    expect(assessLesson(lesson).publishable).toBe(false);
  });

  test('international study population cannot be silently dropped', () => {
    const lesson = fixture();
    lesson.claims[0].studyPopulation = 'Country X registry';
    expect(assessLesson(lesson).publishable).toBe(false);
    lesson.evidence[0].population = 'Country X registry';
    expect(assessLesson(lesson).publishable).toBe(true);
  });

  test('qualified human review requires an approval record and matching event', () => {
    const lesson = fixture();
    lesson.reviewStatus = 'human-reviewed';
    expect(assessLesson(lesson).publishable).toBe(false);
    lesson.humanApproval = {
      name: 'Reviewer Example', qualification: 'Qualified reviewer fixture',
      scope: 'Synthetic lesson 1', approvedAt: '2026-11-01', independent: true
    };
    lesson.verification = [{
      reviewer: 'Reviewer Example', method: 'qualified-human',
      reviewedAt: '2026-11-01', lessonRevision: '1',
      claimIds: ['in-test-only-claim1'], verdict: 'pass',
      reportPath: 'fixtures/human-review-example.md'
    }];
    expect(assessLesson(lesson).publishable).toBe(true);
  });

  test('AI-only review cannot publish high or critical risk claims', () => {
    for (const risk of ['high', 'critical'] as const) {
      const lesson = fixture();
      lesson.claims[0].risk = risk;
      const result = assessLesson(lesson);
      expect(result.publishable).toBe(false);
      expect(result.errors.join(' ')).toContain('require qualified human review');
    }
  });

  test('a valid human review is necessary for high-risk claims but not a substitute for evidence', () => {
    const lesson = fixture();
    lesson.claims[0].risk = 'high';
    lesson.reviewStatus = 'human-reviewed';
    lesson.humanApproval = {
      name: 'Fixture reviewer', qualification: 'Fixture qualification',
      scope: 'Fixture claim', approvedAt: '2026-11-01', independent: true
    };
    lesson.verification = [{
      reviewer: 'Fixture reviewer', method: 'qualified-human',
      reviewedAt: '2026-11-01', lessonRevision: '1',
      claimIds: ['in-test-only-claim1'], verdict: 'pass',
      reportPath: 'fixtures/human-review-example.md'
    }];
    expect(assessLesson(lesson).publishable).toBe(true);
    lesson.evidence[0].assessment = 'inconclusive';
    expect(assessLesson(lesson).publishable).toBe(false);
  });

  test('foreign and other-state sources cannot alone support high-stakes India claims', () => {
    const lesson = fixture();
    lesson.claims[0].risk = 'high';
    lesson.claims[0].jurisdiction = 'IN-MH';
    lesson.reviewStatus = 'human-reviewed';
    lesson.humanApproval = {
      name: 'Fixture reviewer', qualification: 'Fixture qualification',
      scope: 'Fixture claim', approvedAt: '2026-11-01', independent: true
    };
    lesson.verification = [{
      reviewer: 'Fixture reviewer', method: 'qualified-human',
      reviewedAt: '2026-11-01', lessonRevision: '1',
      claimIds: ['in-test-only-claim1'], verdict: 'pass',
      reportPath: 'fixtures/human-review-example.md'
    }];
    for (const jurisdiction of ['international', 'IN-KA', 'US']) {
      lesson.evidence[0].jurisdiction = jurisdiction;
      const result = assessLesson(lesson);
      expect(result.publishable).toBe(false);
      expect(result.errors.join(' ')).toContain('No precise supporting evidence');
    }
    lesson.evidence[0].jurisdiction = 'IN';
    expect(assessLesson(lesson).publishable).toBe(true);
    lesson.evidence[0].jurisdiction = 'IN-MH';
    expect(assessLesson(lesson).publishable).toBe(true);
  });

  test('failed review on current revision overrides a passing review', () => {
    const lesson = fixture();
    lesson.verification?.push({
      reviewer: 'Synthetic dissenting verifier', method: 'independent-ai',
      reviewedAt: '2026-11-02', lessonRevision: '1',
      claimIds: ['in-test-only-claim1'], verdict: 'fail',
      reportPath: 'fixtures/failed-review.md'
    });
    const result = assessLesson(lesson);
    expect(result.publishable).toBe(false);
    expect(result.errors.join(' ')).toContain('Failed verification for current lesson revision');
    // A failed review on an older revision is not automatically a failure of
    // the current revision, which must independently satisfy its own gates.
    lesson.verification![1].lessonRevision = '0';
    expect(assessLesson(lesson).publishable).toBe(true);
  });

  test('current-revision rejection cannot be hidden by omitting claim IDs', () => {
    const lesson = fixture();
    lesson.verification?.push({
      reviewer: 'Synthetic dissenting verifier', method: 'independent-ai',
      reviewedAt: '2026-11-02', lessonRevision: '1',
      claimIds: [], verdict: 'fail',
      reportPath: 'fixtures/failed-review.md'
    });
    const result = assessLesson(lesson);
    expect(result.publishable).toBe(false);
    expect(result.errors.join(' ')).toContain('Failed verification for current lesson revision');
    lesson.verification![1].lessonRevision = '0';
    expect(assessLesson(lesson).publishable).toBe(true);
  });

  test('inherited content retains its original ID mapping', () => {
    const lesson = fixture();
    lesson.origin = 'inherited';
    expect(assessLesson(lesson).publishable).toBe(false);
    lesson.sourceEditionId = '4-9';
    expect(assessLesson(lesson).publishable).toBe(true);
  });

  test('owner self-review is labelled as such and cannot claim qualified review', () => {
    const lesson = fixture();
    lesson.reviewStatus = 'human-reviewed';
    lesson.claims[0].risk = 'high';
    lesson.humanApproval = {
      name: 'Fixture owner',
      qualification: 'Site owner, not a licensed professional',
      scope: 'Fixture claim',
      approvedAt: '2026-11-01',
      independent: false,
      limitation: 'A careful reading of the cited documents, not independent review.'
    };
    lesson.verification = [{
      reviewer: 'Fixture owner', method: 'owner-self-review',
      reviewedAt: '2026-11-01', lessonRevision: '1',
      claimIds: ['in-test-only-claim1'], verdict: 'pass',
      reportPath: 'fixtures/owner-self-review.md'
    }];
    // Editorial self-review can publish high-risk guidance only while it is
    // recorded honestly as self-review.
    expect(assessLesson(lesson).publishable).toBe(true);
    // The same reading cannot be relabelled as qualified human review.
    lesson.verification![0].method = 'qualified-human';
    expect(assessLesson(lesson).publishable).toBe(false);
    // Nor can the approval be marked independent without an independent review.
    lesson.verification![0].method = 'owner-self-review';
    lesson.humanApproval!.independent = true;
    expect(assessLesson(lesson).publishable).toBe(false);
  });

  test('self-review without a stated limitation fails closed', () => {
    const lesson = fixture();
    lesson.reviewStatus = 'human-reviewed';
    lesson.humanApproval = {
      name: 'Fixture owner', qualification: 'Site owner',
      scope: 'Fixture claim', approvedAt: '2026-11-01', independent: false
    };
    lesson.verification = [{
      reviewer: 'Fixture owner', method: 'owner-self-review',
      reviewedAt: '2026-11-01', lessonRevision: '1',
      claimIds: ['in-test-only-claim1'], verdict: 'pass',
      reportPath: 'fixtures/owner-self-review.md'
    }];
    expect(assessLesson(lesson).errors.join(' ')).toContain('Owner self-review must state its limitation');
  });

  test('state and locale variants cannot pretend to be reviewed without evidence', () => {
    expect(validateJurisdiction('IN')).toBe(true);
    expect(validateJurisdiction('IN-MH')).toBe(true);
    expect(validateJurisdiction('IN-DL')).toBe(true);
    expect(validateJurisdiction('IN-XX')).toBe(false);
    expect(validateJurisdiction('IN-mh')).toBe(true);
    expect(validateJurisdiction('UK')).toBe(false);
    expect(validateOverlay({
      lessonId: 'in-test-only', jurisdiction: 'IN-MH', status: 'unsupported', claimIds: []
    })).toEqual([]);
    expect(validateOverlay({
      lessonId: 'in-test-only', jurisdiction: 'IN-MH', status: 'reviewed', claimIds: []
    }).length).toBeGreaterThan(0);
    expect(validateLocaleVersion({
      lessonId: 'in-test-only', lessonRevision: '1', locale: 'hi-IN', status: 'reviewed'
    }).length).toBeGreaterThan(0);
    expect(validateLocaleVersion({
      lessonId: 'in-test-only', lessonRevision: '1', locale: 'mr-IN',
      status: 'reviewed', reviewedBy: 'Synthetic reviewer', translatedAt: '2026-11-01'
    })).toEqual([]);
  });
});
