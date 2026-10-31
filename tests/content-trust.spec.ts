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
      scope: 'Synthetic lesson 1', approvedAt: '2026-11-01'
    };
    lesson.verification = [{
      reviewer: 'Reviewer Example', method: 'qualified-human',
      reviewedAt: '2026-11-01', lessonRevision: '1',
      claimIds: ['in-test-only-claim1'], verdict: 'pass',
      reportPath: 'fixtures/human-review-example.md'
    }];
    expect(assessLesson(lesson).publishable).toBe(true);
  });

  test('inherited content retains its original ID mapping', () => {
    const lesson = fixture();
    lesson.origin = 'inherited';
    expect(assessLesson(lesson).publishable).toBe(false);
    lesson.sourceEditionId = '4-9';
    expect(assessLesson(lesson).publishable).toBe(true);
  });

  test('state and locale variants cannot pretend to be reviewed without evidence', () => {
    expect(validateJurisdiction('IN')).toBe(true);
    expect(validateJurisdiction('IN-MH')).toBe(true);
    expect(validateJurisdiction('IN-DL')).toBe(true);
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
