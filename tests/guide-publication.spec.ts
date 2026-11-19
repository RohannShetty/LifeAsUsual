import { expect, test } from '@playwright/test';
import { GUIDE_DISCLOSURE_MARKERS, guidePublicationErrors, type GuidePublicationInput } from '../src/lib/guide-publication';

// P2.3: the nine field manuals are generated, publishable advice routes. They must
// be declared, disclose their provenance, and cannot claim review without a record.
function base(overrides: Partial<GuidePublicationInput> = {}): GuidePublicationInput {
  return {
    declarations: [{ route: '/guides/a/', title: 'A', state: 'inherited-unverified' }],
    discoveredRoutes: ['/guides/a/'],
    guideTemplate: GUIDE_DISCLOSURE_MARKERS.join(' '),
    reviewedRoutes: [],
    ...overrides,
  };
}

test.describe('guide publication gate', () => {
  test('accepts a declared, disclosed inherited guide', () => {
    expect(guidePublicationErrors(base())).toEqual([]);
  });

  test('an undeclared generated guide fails closed', () => {
    const errors = guidePublicationErrors(base({ discoveredRoutes: ['/guides/a/', '/guides/b/'] }));
    expect(errors.join('\n')).toContain('generated but undeclared: /guides/b/');
  });

  test('a declaration for a route that no longer exists is stale', () => {
    const errors = guidePublicationErrors(base({ discoveredRoutes: [] }));
    expect(errors.join('\n')).toContain('stale');
  });

  test('an inherited guide without the visible provenance note fails', () => {
    const errors = guidePublicationErrors(base({ guideTemplate: 'nothing here' }));
    expect(errors.join('\n')).toContain('no visible provenance disclosure');
  });

  test('reviewed status needs a human-reviewed publication record', () => {
    const errors = guidePublicationErrors(base({ declarations: [{ route: '/guides/a/', title: 'A', state: 'reviewed' }] }));
    expect(errors.join('\n')).toContain('without a human-reviewed publication record');
    expect(guidePublicationErrors(base({ declarations: [{ route: '/guides/a/', title: 'A', state: 'reviewed' }], reviewedRoutes: ['/guides/a'] }))).toEqual([]);
  });

  test('a withheld guide that is still generated fails', () => {
    const errors = guidePublicationErrors(base({ declarations: [{ route: '/guides/a/', title: 'A', state: 'withheld' }] }));
    expect(errors.join('\n')).toContain('declared withheld but is still generated');
  });

  test('duplicate declarations and unknown states fail', () => {
    const errors = guidePublicationErrors(base({
      declarations: [
        { route: '/guides/a/', title: 'A', state: 'inherited-unverified' },
        { route: '/guides/a/', title: 'A', state: 'inherited-unverified' },
        { route: '/guides/b/', title: 'B', state: 'approved' as never },
      ],
      discoveredRoutes: ['/guides/a/', '/guides/b/'],
    }));
    expect(errors.join('\n')).toContain('Duplicate guide declaration');
    expect(errors.join('\n')).toContain('Unknown guide publication state');
  });
});
