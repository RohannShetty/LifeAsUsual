import { assessLesson, type CanonicalLesson } from './content-trust';

export interface IndiaPublicationRecord {
  route: string;
  lesson: CanonicalLesson;
}

export function normalizePublicationRoute(route: string): string {
  const parts = route.split('/').filter(Boolean);
  return parts.length === 0 ? '/' : '/' + parts.join('/') + '/';
}

/**
 * Validate the complete inventory of India-first help routes against their
 * claim-level records. Routes without a record are withheld by the build.
 */
export function publicationInventoryErrors(
  routes: string[],
  records: IndiaPublicationRecord[]
): string[] {
  const errors: string[] = [];
  const routeSet = new Set(routes.map(normalizePublicationRoute));
  const recordByRoute = new Map<string, IndiaPublicationRecord>();

  for (const record of records) {
    const route = normalizePublicationRoute(record.route);
    if (recordByRoute.has(route)) {
      errors.push('Duplicate publication record for ' + route);
      continue;
    }
    recordByRoute.set(route, record);
  }

  for (const route of routeSet) {
    if (!recordByRoute.has(route)) {
      errors.push('No canonical trust record for India-first route ' + route);
    }
  }

  for (const [route, record] of recordByRoute) {
    if (!routeSet.has(route)) {
      errors.push('Publication record has no matching help route: ' + route);
      continue;
    }
    const result = assessLesson(record.lesson);
    if (!result.publishable) {
      errors.push(
        'India-first route is blocked from publication: ' + route + ' — ' +
        result.errors.join('; ')
      );
    }
  }

  return errors;
}
