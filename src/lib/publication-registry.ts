import { z } from 'zod';
import type { IndiaPublicationRecord } from './publication-gate';

/**
 * Runtime validation for data/india-publications.json.
 *
 * TypeScript types erase at runtime, so a hand-edited registry can carry an
 * invalid enum ("High" for "high") and silently skip a safety branch. This
 * module validates the shipped JSON itself, not a fixture, and fails closed on
 * unknown values.
 */

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be a YYYY-MM-DD date');
const nonEmpty = z.string().trim().min(1);

const sourceSchema = z.object({
  id: nonEmpty,
  title: nonEmpty,
  publisher: nonEmpty,
  url: z.string().url(),
  locator: z.string().trim().min(4),
  checkedAt: isoDate,
  jurisdiction: z.string().trim().min(2),
  population: nonEmpty.optional(),
  assessment: z.enum(['supports', 'contradicts', 'inconclusive'])
}).strict();

const claimSchema = z.object({
  id: nonEmpty,
  text: z.string().trim().min(10),
  risk: z.enum(['low', 'medium', 'high', 'critical']),
  jurisdiction: z.string().trim().min(2),
  sourceIds: z.array(nonEmpty).min(1),
  studyPopulation: nonEmpty.optional()
}).strict();

const approvalSchema = z.object({
  name: nonEmpty,
  qualification: nonEmpty,
  scope: nonEmpty,
  approvedAt: isoDate,
  // Only an independent reviewer may be recorded as qualified human review.
  // A missing value is read as self-review, which fails closed.
  independent: z.boolean().optional(),
  limitation: nonEmpty.optional()
}).strict();

const verificationSchema = z.object({
  reviewer: nonEmpty,
  method: z.enum(['independent-ai', 'qualified-human', 'owner-self-review']),
  reviewedAt: isoDate,
  lessonRevision: nonEmpty,
  claimIds: z.array(nonEmpty).min(1),
  verdict: z.enum(['pass', 'fail']),
  reportPath: nonEmpty
}).strict();

const lessonSchema = z.object({
  id: nonEmpty,
  revision: nonEmpty,
  title: nonEmpty,
  origin: z.enum(['inherited', 'india-original']),
  sourceEditionId: nonEmpty.optional(),
  reviewStatus: z.enum(['unverified', 'ai-reviewed-draft', 'human-reviewed', 'withdrawn']),
  claims: z.array(claimSchema).min(1),
  evidence: z.array(sourceSchema).min(1),
  verification: z.array(verificationSchema).optional(),
  humanApproval: approvalSchema.optional()
}).strict();

const recordSchema = z.object({
  route: z.string().regex(/^\/[a-z0-9][a-z0-9\-/]*\/?$/, 'must be a lowercase absolute route'),
  lesson: lessonSchema
}).strict();

export const publicationRegistrySchema = z.array(recordSchema);

export interface RegistryValidationOptions {
  /** Read a repo-relative file; return null when it cannot be read. */
  readReport?: (relativePath: string) => string | null;
}

function formatIssues(error: z.ZodError): string[] {
  return error.issues.map((issue) => {
    const where = issue.path.join('.') || '(root)';
    return 'registry ' + where + ': ' + issue.message;
  });
}

/**
 * Validate the registry against its schema, then check the cross-references a
 * schema cannot express: unique ids, claim/source/verification links, and the
 * existence of the evidence report named by every passing verification.
 */
export function publicationRegistryErrors(
  input: unknown,
  options: RegistryValidationOptions = {}
): string[] {
  const parsed = publicationRegistrySchema.safeParse(input);
  if (!parsed.success) return formatIssues(parsed.error);

  const errors: string[] = [];
  for (const record of parsed.data as IndiaPublicationRecord[]) {
    const lesson = record.lesson;
    const label = record.route + ' (' + lesson.id + ')';
    const claimIds = new Set<string>();
    for (const claim of lesson.claims) {
      if (claimIds.has(claim.id)) errors.push(label + ': duplicate claim id ' + claim.id);
      claimIds.add(claim.id);
    }
    const sourceIds = new Set<string>();
    for (const source of lesson.evidence) {
      if (sourceIds.has(source.id)) errors.push(label + ': duplicate evidence id ' + source.id);
      sourceIds.add(source.id);
    }
    for (const claim of lesson.claims) {
      for (const sourceId of claim.sourceIds) {
        if (!sourceIds.has(sourceId)) {
          errors.push(label + ': claim ' + claim.id + ' references unknown source ' + sourceId);
        }
      }
    }
    for (const event of lesson.verification ?? []) {
      for (const claimId of event.claimIds) {
        if (!claimIds.has(claimId)) {
          errors.push(label + ': verification references unknown claim ' + claimId);
        }
      }
      if (event.lessonRevision !== lesson.revision) {
        errors.push(
          label + ': verification covers revision ' + event.lessonRevision +
          ' but the lesson revision is ' + lesson.revision
        );
      }
    }
    for (const event of lesson.verification ?? []) {
      if (!options.readReport) continue;
      const report = options.readReport(event.reportPath);
      if (report === null) {
        errors.push(label + ': evidence report does not exist: ' + event.reportPath);
        continue;
      }
      if (report.trim().length === 0) {
        errors.push(label + ': evidence report is empty: ' + event.reportPath);
        continue;
      }
      if (!report.includes(lesson.revision)) {
        errors.push(
          label + ': evidence report ' + event.reportPath +
          ' does not mention the reviewed revision ' + lesson.revision
        );
      }
    }
  }
  return errors;
}
