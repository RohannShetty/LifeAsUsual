import { expect, test } from '@playwright/test';
import {
  AI_DRAFT_NOTICE_MARKERS,
  inheritedPublicationErrors,
  type InheritedRouteDeclaration
} from '../src/lib/inherited-publication';

const template = 'AI-reviewed draft for India\n' + AI_DRAFT_NOTICE_MARKERS.slice(1).join('\n') + '\nAI-reviewed drafts, not professional sign-off';

function declaration(overrides: Partial<InheritedRouteDeclaration> = {}): InheritedRouteDeclaration {
  return {
    route: '/chapters/01-do-not-die-early/',
    chapter: 1,
    signals: ['health-safety'],
    state: 'ai-draft-labelled',
    ...overrides
  };
}

test.describe('inherited chapter publication gate', () => {
  test('a declared, labelled sensitive chapter passes', () => {
    expect(inheritedPublicationErrors({
      declarations: [declaration()],
      discoveredRoutes: ['/chapters/01-do-not-die-early/'],
      chapterTemplate: template
    })).toEqual([]);
  });

  test('a published chapter without a declaration fails closed', () => {
    const errors = inheritedPublicationErrors({
      declarations: [],
      discoveredRoutes: ['/chapters/01-do-not-die-early/'],
      chapterTemplate: template
    });
    expect(errors.join('\n')).toContain('without a publication declaration');
  });

  test('a declaration for a chapter that no longer builds is stale', () => {
    const errors = inheritedPublicationErrors({
      declarations: [declaration()],
      discoveredRoutes: [],
      chapterTemplate: template
    });
    expect(errors.join('\n')).toContain('stale declaration');
  });

  test('a withheld route that is still generated fails closed', () => {
    const errors = inheritedPublicationErrors({
      declarations: [declaration({ state: 'withheld' })],
      discoveredRoutes: ['/chapters/01-do-not-die-early/'],
      chapterTemplate: template
    });
    expect(errors.join('\n')).toContain('still generated');
  });

  test('a reviewed route without a trust record fails closed', () => {
    const errors = inheritedPublicationErrors({
      declarations: [declaration({ state: 'reviewed' })],
      discoveredRoutes: ['/chapters/01-do-not-die-early/'],
      chapterTemplate: template
    });
    expect(errors.join('\n')).toContain('without a passing trust record');
  });

  test('a reviewed route with a human-reviewed record passes', () => {
    expect(inheritedPublicationErrors({
      declarations: [declaration({ state: 'reviewed' })],
      discoveredRoutes: ['/chapters/01-do-not-die-early/'],
      chapterTemplate: template,
      reviewedRoutes: ['/chapters/01-do-not-die-early/']
    })).toEqual([]);
  });

  test('a sensitive chapter that lost the draft notice fails closed', () => {
    const errors = inheritedPublicationErrors({
      declarations: [declaration()],
      discoveredRoutes: ['/chapters/01-do-not-die-early/'],
      chapterTemplate: '<p>Read fresh India advice.</p>'
    });
    expect(errors.join('\n')).toContain('without the AI-reviewed draft notice');
  });

  test('an unknown risk signal or state fails closed', () => {
    const errors = inheritedPublicationErrors({
      declarations: [declaration({ signals: ['vibes'], state: 'verified' as never })],
      discoveredRoutes: ['/chapters/01-do-not-die-early/'],
      chapterTemplate: template
    });
    expect(errors.join('\n')).toContain('unknown risk signal vibes');
    expect(errors.join('\n')).toContain('unknown publication state verified');
  });
});
