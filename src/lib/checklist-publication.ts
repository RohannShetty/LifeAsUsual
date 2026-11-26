import { createHash } from 'node:crypto';
import { z } from 'zod';
import { assessLesson, type CanonicalLesson, validateJurisdiction } from './content-trust';

/**
 * Publication contract for practical checklists.
 *
 * This module is server/build-only. It validates authored records before they
 * can be exposed as actionable content. The browser ledger stores completion
 * state only; it is not an approval or publication source.
 *
 * A checklist must point to one exact canonical lesson revision, and every
 * action must point to the claims that justify it. A separate qualified,
 * independent human review must cover the exact checklist revision, content
 * hash, action IDs and claim IDs. This validator records that evidence; it
 * cannot authenticate a person's identity or credentials.
 */
const idPattern = /^[a-z0-9][a-z0-9._-]{0,79}$/;
const nonEmpty = z.string().trim().min(1);
const actionSchema = z.object({
  id: z.string().regex(idPattern),
  text: z.string().trim().min(10),
  claimIds: z.array(nonEmpty).min(1)
}).strict();

const reviewSchema = z.object({
  reviewer: nonEmpty,
  qualification: nonEmpty,
  method: z.literal('qualified-human'),
  independent: z.literal(true),
  reviewedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  checklistRevision: nonEmpty,
  contentHash: z.string().regex(/^[a-f0-9]{64}$/),
  actionIds: z.array(nonEmpty).min(1),
  claimIds: z.array(nonEmpty).min(1),
  scope: nonEmpty,
  reportPath: z.string()
    .regex(/^reports\/checklist-reviews\/[a-z0-9][a-z0-9._/-]*\.md$/)
    .refine((value) => !value.split('/').includes('..'), 'must not traverse outside the review-report directory')
}).strict();

const checklistSchema = z.object({
  id: z.string().regex(idPattern),
  revision: nonEmpty,
  title: nonEmpty,
  route: z.string().regex(/^\/checklists\/[a-z0-9][a-z0-9/-]*\/$/),
  locale: z.string().regex(/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/),
  jurisdiction: z.string().regex(/^IN(?:-[A-Z0-9]{2,3})?$/),
  lessonId: nonEmpty,
  lessonRevision: nonEmpty,
  actions: z.array(actionSchema).min(1),
  review: reviewSchema
}).strict();

export interface ChecklistAction {
  id: string;
  text: string;
  claimIds: string[];
}

export interface ChecklistContent {
  id: string;
  revision: string;
  title: string;
  route: string;
  locale: string;
  jurisdiction: string;
  lessonId: string;
  lessonRevision: string;
  actions: ChecklistAction[];
}

export interface ChecklistReviewRecord {
  reviewer: string;
  qualification: string;
  method: 'qualified-human';
  independent: true;
  reviewedAt: string;
  checklistRevision: string;
  contentHash: string;
  actionIds: string[];
  claimIds: string[];
  scope: string;
  reportPath: string;
}

export interface IndiaChecklistRecord extends ChecklistContent {
  review: ChecklistReviewRecord;
}

export interface ChecklistValidationOptions {
  readReport?: (relativePath: string) => string | null;
}

/** Hash every user-visible field and claim link that the reviewer approved. */
export function checklistContentHash(content: ChecklistContent): string {
  const canonical = JSON.stringify({
    id: content.id,
    revision: content.revision,
    title: content.title,
    route: content.route,
    locale: content.locale,
    jurisdiction: content.jurisdiction,
    lessonId: content.lessonId,
    lessonRevision: content.lessonRevision,
    actions: content.actions.map((action) => ({
      id: action.id,
      text: action.text,
      claimIds: [...action.claimIds]
    }))
  });
  return createHash('sha256').update(canonical, 'utf8').digest('hex');
}

function validPastDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(value + 'T00:00:00.000Z');
  if (Number.isNaN(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== value) return false;
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());
  return value <= today;
}

function sameMembers(left: string[], right: string[]): boolean {
  if (left.length !== right.length) return false;
  const a = [...left].sort();
  const b = [...right].sort();
  return a.every((value, index) => value === b[index]);
}

function formatSchemaErrors(error: z.ZodError): string[] {
  return error.issues.map((issue) => {
    const where = issue.path.join('.') || '(root)';
    return 'checklist registry ' + where + ': ' + issue.message;
  });
}

/**
 * Validate approved checklist records against the canonical lesson registry.
 * An empty registry is valid while no checklist route is published. The first
 * checklist cannot enter the public data file without a full review record.
 */
export function checklistPublicationErrors(
  input: unknown,
  lessons: CanonicalLesson[],
  options: ChecklistValidationOptions = {}
): string[] {
  const parsed = z.array(checklistSchema).safeParse(input);
  if (!parsed.success) return formatSchemaErrors(parsed.error);

  const errors: string[] = [];
  const lessonById = new Map<string, CanonicalLesson>();
  for (const lesson of lessons) {
    if (lessonById.has(lesson.id)) errors.push('Duplicate canonical lesson ID for checklist source: ' + lesson.id);
    else lessonById.set(lesson.id, lesson);
  }

  const checklistIds = new Set<string>();
  const routes = new Set<string>();
  for (const checklist of parsed.data as IndiaChecklistRecord[]) {
    const label = checklist.id + '@' + checklist.revision;
    if (checklistIds.has(checklist.id)) errors.push('Duplicate checklist ID: ' + checklist.id);
    checklistIds.add(checklist.id);
    if (routes.has(checklist.route)) errors.push('Duplicate checklist route: ' + checklist.route);
    routes.add(checklist.route);

    if (!validateJurisdiction(checklist.jurisdiction)) {
      errors.push(label + ': invalid Indian jurisdiction');
    }

    const lesson = lessonById.get(checklist.lessonId);
    if (!lesson) {
      errors.push(label + ': canonical source lesson not found: ' + checklist.lessonId);
      continue;
    }
    if (lesson.revision !== checklist.lessonRevision) {
      errors.push(label + ': source lesson revision mismatch; expected ' + lesson.revision);
      continue;
    }

    const trust = assessLesson(lesson);
    if (!trust.publishable) {
      errors.push(label + ': source lesson is not publishable: ' + trust.errors.join('; '));
    }

    const claims = new Map(lesson.claims.map((claim) => [claim.id, claim]));
    const actionIds: string[] = [];
    const referencedClaimIds = new Set<string>();
    for (const action of checklist.actions) {
      if (actionIds.includes(action.id)) errors.push(label + ': duplicate action ID: ' + action.id);
      actionIds.push(action.id);
      if (action.claimIds.length !== new Set(action.claimIds).size) {
        errors.push(label + ': duplicate claim reference in action ' + action.id);
      }
      for (const claimId of action.claimIds) {
        const claim = claims.get(claimId);
        if (!claim) {
          errors.push(label + ': action ' + action.id + ' references unknown claim ' + claimId);
          continue;
        }
        referencedClaimIds.add(claimId);
        const claimJurisdiction = claim.jurisdiction.trim().toUpperCase();
        if (claimJurisdiction !== 'IN' && claimJurisdiction !== checklist.jurisdiction) {
          errors.push(label + ': action ' + action.id + ' uses claim ' + claimId +
            ' from a different jurisdiction (' + claim.jurisdiction + ')');
        }
      }
    }

    const review = checklist.review;
    if (review.checklistRevision !== checklist.revision) {
      errors.push(label + ': qualified review covers a different checklist revision');
    }
    if (!review.scope.includes(checklist.id + '@' + checklist.revision)) {
      errors.push(label + ': qualified review scope must identify the exact checklist ID and revision');
    }
    if (!validPastDate(review.reviewedAt)) {
      errors.push(label + ': qualified review date is invalid or future-dated');
    }
    if (!sameMembers(review.actionIds, actionIds)) {
      errors.push(label + ': qualified review does not cover the exact current action IDs');
    }
    if (!sameMembers(review.claimIds, [...referencedClaimIds])) {
      errors.push(label + ': qualified review does not cover the exact action claim IDs');
    }

    const hash = checklistContentHash(checklist);
    if (review.contentHash !== hash) {
      errors.push(label + ': checklist content hash does not match the reviewed revision');
    }

    if (options.readReport) {
      const report = options.readReport(review.reportPath);
      if (report === null || !report.trim()) {
        errors.push(label + ': qualified review report is missing or empty: ' + review.reportPath);
      } else {
        const markers = [
          'Checklist: ' + checklist.id,
          'Revision: ' + checklist.revision,
          'SHA-256: ' + hash,
          ...actionIds.map((id) => 'Action: ' + id),
          ...[...referencedClaimIds].map((id) => 'Claim: ' + id)
        ];
        for (const marker of markers) {
          if (!report.includes(marker)) {
            errors.push(label + ': review report does not record ' + marker);
          }
        }
      }
    }
  }

  return errors;
}
