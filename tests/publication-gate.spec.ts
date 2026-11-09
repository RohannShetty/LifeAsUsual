import { expect, test } from '@playwright/test';
import { publicationInventoryErrors, type IndiaPublicationRecord } from '../src/lib/publication-gate';
import type { CanonicalLesson } from '../src/lib/content-trust';

const makeLesson = (risk: 'low' | 'high' | 'critical' = 'low'): CanonicalLesson => ({
  id: 'fixture-only',
  revision: '1',
  title: 'Synthetic publication gate lesson',
  origin: 'india-original',
  reviewStatus: 'ai-reviewed-draft',
  claims: [{
    id: 'fixture-claim',
    text: 'Synthetic test claim; no real-world advice.',
    risk,
    jurisdiction: 'IN',
    sourceIds: ['fixture-source']
  }],
  evidence: [{
    id: 'fixture-source',
    title: 'Synthetic source',
    publisher: 'Test fixture',
    url: 'https://example.org/fixture',
    locator: 'Section 1: synthetic fixture',
    checkedAt: '2026-11-09',
    jurisdiction: 'IN',
    assessment: 'supports'
  }],
  verification: [{
    reviewer: 'Synthetic test verifier',
    method: 'independent-ai',
    reviewedAt: '2026-11-09',
    lessonRevision: '1',
    claimIds: ['fixture-claim'],
    verdict: 'pass',
    reportPath: 'tests/fixtures/not-a-real-review.md'
  }]
});

function record(lesson: CanonicalLesson): IndiaPublicationRecord {
  return { route: '/help/example/', lesson };
}

test.describe('production publication inventory gate', () => {
  test('a fully assessed low-risk fixture is accepted for its registered route', () => {
    expect(publicationInventoryErrors(['/help/example'], [record(makeLesson())])).toEqual([]);
  });

  test('an India-first help route without a trust record is withheld', () => {
    const errors = publicationInventoryErrors(['/help/example'], []);
    expect(errors.join(' ')).toContain('No canonical trust record');
  });

  test('high and critical AI-only lessons fail the production inventory gate', () => {
    for (const risk of ['high', 'critical'] as const) {
      const errors = publicationInventoryErrors(['/help/example/'], [record(makeLesson(risk))]);
      expect(errors.join(' ')).toContain('require qualified human review');
    }
  });

  test('inconclusive evidence still blocks a high-risk lesson with a human-review event', () => {
    const lesson = makeLesson('high');
    lesson.reviewStatus = 'human-reviewed';
    lesson.humanApproval = {
      name: 'Synthetic reviewer',
      qualification: 'Synthetic qualification',
      scope: 'Synthetic claim only',
      approvedAt: '2026-11-09'
    };
    lesson.verification = [{
      reviewer: 'Synthetic reviewer',
      method: 'qualified-human',
      reviewedAt: '2026-11-09',
      lessonRevision: '1',
      claimIds: ['fixture-claim'],
      verdict: 'pass',
      reportPath: 'tests/fixtures/not-a-real-review.md'
    }];
    lesson.evidence[0].assessment = 'inconclusive';
    const errors = publicationInventoryErrors(['/help/example/'], [record(lesson)]);
    expect(errors.join(' ')).toContain('No precise supporting evidence');
  });

  test('stale and dangling trust records cannot create or hide routes', () => {
    const errors = publicationInventoryErrors(['/help/example/'], [{
      route: '/help/removed/',
      lesson: makeLesson()
    }]);
    expect(errors.join(' ')).toContain('No canonical trust record');
    expect(errors.join(' ')).toContain('no matching help route');
  });
});
