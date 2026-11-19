export const GUIDE_PUBLICATION_STATES = ['inherited-unverified', 'reviewed', 'withheld'] as const;
export type GuidePublicationState = (typeof GUIDE_PUBLICATION_STATES)[number];

export interface GuideRouteDeclaration {
  route: string;
  title: string;
  state: GuidePublicationState;
}

export interface GuidePublicationInput {
  declarations: GuideRouteDeclaration[];
  discoveredRoutes: string[];
  guideTemplate: string;
  reviewedRoutes?: string[];
}

export const GUIDE_DISCLOSURE_MARKERS = [
  'Inherited field manual',
  'not been adapted or verified for India'
];

export function normalizeGuideRoute(route: string): string {
  const trimmed = route.split('#')[0].split('?')[0];
  return trimmed.endsWith('/') ? trimmed : trimmed + '/';
}

/**
 * P2.3: every generated guide route is publishable advice, so it must be declared
 * and must disclose its provenance. Fail closed: an undeclared, stale, withheld or
 * silently "reviewed" guide route stops the build.
 */
export function guidePublicationErrors(input: GuidePublicationInput): string[] {
  const errors: string[] = [];
  const discovered = new Set(input.discoveredRoutes.map(normalizeGuideRoute));
  const declared = new Map<string, GuideRouteDeclaration>();
  for (const declaration of input.declarations) {
    const route = normalizeGuideRoute(declaration.route ?? '');
    if (!route || route === '/') {
      errors.push('Guide declaration has an empty route');
      continue;
    }
    if (declared.has(route)) {
      errors.push('Duplicate guide declaration: ' + route);
      continue;
    }
    if (!GUIDE_PUBLICATION_STATES.includes(declaration.state)) {
      errors.push('Unknown guide publication state for ' + route + ': ' + String(declaration.state));
      continue;
    }
    declared.set(route, declaration);
  }
  for (const route of discovered) {
    if (!declared.has(route)) errors.push('Guide route is generated but undeclared: ' + route);
  }
  for (const route of declared.keys()) {
    if (!discovered.has(route)) errors.push('Guide declaration is stale, no such generated route: ' + route);
  }
  const missingMarkers = GUIDE_DISCLOSURE_MARKERS.filter((marker) => !input.guideTemplate.includes(marker));
  const reviewed = new Set((input.reviewedRoutes ?? []).map(normalizeGuideRoute));
  for (const [route, declaration] of declared) {
    if (declaration.state === 'withheld') {
      errors.push('Guide route is declared withheld but is still generated: ' + route);
      continue;
    }
    if (declaration.state === 'inherited-unverified' && missingMarkers.length > 0) {
      errors.push(
        'Guide route ' + route + ' has no visible provenance disclosure; template is missing: ' +
        missingMarkers.join(', ')
      );
    }
    if (declaration.state === 'reviewed' && !reviewed.has(route)) {
      errors.push('Guide route ' + route + ' claims reviewed status without a human-reviewed publication record');
    }
  }
  return errors;
}
