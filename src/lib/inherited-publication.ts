/**
 * Publication policy for the inherited chapter library.
 *
 * The inherited chapters are published as AI-reviewed drafts. That is an
 * honest label only while the page actually shows the draft notice and no
 * route claims a review it does not have. Every chapter route must therefore
 * be declared here and in data/india-inherited-publication.json; an
 * undeclared route, a stale declaration, a reviewed route without a trust
 * record, or a sensitive route whose notice disappeared all fail closed.
 */

export const INHERITED_PUBLICATION_STATES = ['ai-draft-labelled', 'reviewed', 'withheld'] as const;
export type InheritedPublicationState = (typeof INHERITED_PUBLICATION_STATES)[number];

export const INHERITED_RISK_SIGNALS = ['health-safety', 'legal-rights', 'financial-benefits'] as const;

export interface InheritedRouteDeclaration {
  route: string;
  chapter: number;
  signals: string[];
  state: InheritedPublicationState;
}

export interface InheritedPublicationInput {
  declarations: InheritedRouteDeclaration[];
  discoveredRoutes: string[];
  /** Source of src/pages/chapters/[n]-[slug].astro. */
  chapterTemplate: string;
  /** Routes with a canonical record whose reviewStatus is human-reviewed. */
  reviewedRoutes?: Iterable<string>;
}

/** The page-level notice each published draft must keep. */
export const AI_DRAFT_NOTICE_MARKERS = [
  'AI-reviewed draft for India',
  'do not establish that every claim',
  'AI-reviewed drafts, not professional sign-off'
] as const;

export function normalizeInheritedRoute(route: string): string {
  const parts = route.split('/').filter(Boolean);
  return '/' + parts.join('/') + '/';
}

export function inheritedPublicationErrors(input: InheritedPublicationInput): string[] {
  const errors: string[] = [];
  const reviewed = new Set([...(input.reviewedRoutes ?? [])].map(normalizeInheritedRoute));
  const discovered = new Set(input.discoveredRoutes.map(normalizeInheritedRoute));
  const declared = new Map<string, InheritedRouteDeclaration>();

  for (const declaration of input.declarations) {
    const route = normalizeInheritedRoute(declaration.route ?? '');
    if (route === '/') {
      errors.push('Inherited publication declaration has an empty route');
      continue;
    }
    if (declared.has(route)) {
      errors.push('Duplicate inherited publication declaration for ' + route);
      continue;
    }
    if (!INHERITED_PUBLICATION_STATES.includes(declaration.state)) {
      errors.push('Inherited route ' + route + ' has unknown publication state ' + String(declaration.state));
    }
    for (const signal of declaration.signals ?? []) {
      if (!(INHERITED_RISK_SIGNALS as readonly string[]).includes(signal)) {
        errors.push('Inherited route ' + route + ' carries unknown risk signal ' + signal);
      }
    }
    declared.set(route, declaration);
  }

  for (const route of discovered) {
    if (!declared.has(route)) {
      errors.push('Inherited chapter route is published without a publication declaration: ' + route);
    }
  }

  for (const [route, declaration] of declared) {
    const published = discovered.has(route);
    if (declaration.state === 'withheld' && published) {
      errors.push('Inherited route ' + route + ' is declared withheld but the chapter is still generated');
    }
    if (declaration.state !== 'withheld' && !published) {
      errors.push('Inherited route ' + route + ' is declared published but no chapter generates it (stale declaration)');
    }
    if (declaration.state === 'reviewed' && !reviewed.has(route)) {
      errors.push('Inherited route ' + route + ' claims review without a passing trust record');
    }
  }

  const sensitive = [...declared.entries()].filter(([, d]) =>
    d.state !== 'withheld' && (d.signals ?? []).some(s => s !== 'standard'));
  if (sensitive.length > 0 && !input.chapterTemplate.includes(AI_DRAFT_NOTICE_MARKERS[0])) {
    errors.push('Sensitive inherited chapter routes are published without the AI-reviewed draft notice: ' +
      sensitive.map(([route]) => route).slice(0, 5).join(', '));
  }
  for (const marker of AI_DRAFT_NOTICE_MARKERS) {
    if (sensitive.length > 0 && !input.chapterTemplate.includes(marker)) {
      errors.push('The chapter template lost a required draft notice sentence: "' + marker + '"');
    }
  }

  return errors;
}
