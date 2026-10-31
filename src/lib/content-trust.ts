/**
 * India-first content trust model (first additive slice).
 *
 * This module does not upgrade the 765 inherited tips to a new review status.
 * Existing badges/manifest remain under the current compatibility adapter
 * until each claim is migrated with specific evidence.
 */
export type ClaimRisk = 'low' | 'medium' | 'high' | 'critical';
export type ReviewStatus = 'unverified' | 'ai-reviewed-draft' | 'human-reviewed' | 'withdrawn';
export type EvidenceAssessment = 'supports' | 'contradicts' | 'inconclusive';

export interface SourceReference {
  id: string;
  title: string;
  publisher: string;
  url: string;
  /** Exact heading, numbered paragraph, table or document page supporting the claim. */
  locator: string;
  checkedAt: string; // ISO date YYYY-MM-DD
  jurisdiction: string; // IN, IN-MH, or an international study jurisdiction
  population?: string; // Required for statistics imported from study populations
  assessment: EvidenceAssessment;
}

export interface ClaimRecord {
  id: string;
  text: string;
  risk: ClaimRisk;
  jurisdiction: string;
  sourceIds: string[];
  studyPopulation?: string;
}

export interface HumanApproval {
  name: string;
  qualification: string;
  scope: string;
  approvedAt: string;
}

export interface VerificationEvent {
  reviewer: string; // Named AI model/harness or reviewer identity
  method: 'independent-ai' | 'qualified-human';
  reviewedAt: string;
  lessonRevision: string;
  claimIds: string[];
  verdict: 'pass' | 'fail';
  /** This must be a real stored evidence report, never a fabricated label. */
  reportPath: string;
}

export interface CanonicalLesson {
  id: string;
  revision: string;
  title: string;
  origin: 'inherited' | 'india-original';
  sourceEditionId?: string;
  reviewStatus: ReviewStatus;
  claims: ClaimRecord[];
  evidence: SourceReference[];
  verification?: VerificationEvent[];
  humanApproval?: HumanApproval;
}

export interface JurisdictionOverlay {
  lessonId: string;
  jurisdiction: string;
  status: 'unsupported' | 'draft' | 'reviewed';
  claimIds: string[];
  validFrom?: string;
  validUntil?: string;
}

export interface LocaleVersion {
  lessonId: string;
  lessonRevision: string;
  locale: string;
  status: 'untranslated' | 'draft' | 'reviewed';
  translatedAt?: string;
  reviewedBy?: string;
}

export interface TrustAssessment {
  publishable: boolean;
  status: ReviewStatus;
  errors: string[];
  warnings: string[];
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const LOCAL_JURISDICTION = /^IN(?:-[A-Z0-9]{2,3})?$/;

function validDate(date: string | undefined): boolean {
  if (!date || !ISO_DATE.test(date)) return false;
  const value = new Date(date + 'T00:00:00Z');
  return !Number.isNaN(value.valueOf()) && value.toISOString().slice(0, 10) === date;
}

function validSourceUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return (url.protocol === 'https:' || url.protocol === 'http:') && !!url.hostname;
  } catch {
    return false;
  }
}

export function validateJurisdiction(value: string): boolean {
  return LOCAL_JURISDICTION.test(value);
}

export function assessLesson(lesson: CanonicalLesson): TrustAssessment {
  const errors: string[] = [];
  const warnings: string[] = [];
  const add = (reason: string) => errors.push(reason);
  const sources = new Map(lesson.evidence.map((source) => [source.id, source]));
  const ids = new Set<string>();

  if (!lesson.id.trim() || !lesson.revision.trim()) add('Lesson ID and revision are required');
  if (!lesson.title.trim()) add('Lesson title is required');
  if (lesson.origin === 'inherited' && !lesson.sourceEditionId?.trim()) {
    add('Inherited lesson must preserve source edition ID');
  }
  if (lesson.origin === 'india-original' && lesson.sourceEditionId) {
    warnings.push('Original India lesson unexpectedly has a source edition ID');
  }
  if (sources.size !== lesson.evidence.length) add('Source IDs must be unique');

  for (const source of lesson.evidence) {
    if (!source.id.trim() || !source.title.trim() || !source.publisher.trim()) {
      add('Source identity, title and publisher are required');
    }
    if (!validSourceUrl(source.url)) add('Invalid evidence URL: ' + source.id);
    if (!source.locator?.trim() || source.locator.trim().length < 4) {
      add('Exact source locator missing: ' + source.id);
    }
    if (!validDate(source.checkedAt)) add('Invalid evidence checked date: ' + source.id);
    if (!source.jurisdiction.trim()) add('Missing study/source jurisdiction: ' + source.id);
  }

  for (const claim of lesson.claims) {
    if (!claim.id.trim() || ids.has(claim.id)) add('Missing or duplicated claim ID: ' + claim.id);
    ids.add(claim.id);
    if (!claim.text.trim()) add('Empty claim text: ' + claim.id);
    if (!claim.jurisdiction.trim()) add('Missing claim jurisdiction: ' + claim.id);
    if (claim.sourceIds.length === 0) add('Claim has no source: ' + claim.id);
    if (new Set(claim.sourceIds).size !== claim.sourceIds.length) add('Duplicate claim source IDs: ' + claim.id);

    let supported = false;
    for (const sourceId of claim.sourceIds) {
      const source = sources.get(sourceId);
      if (!source) {
        add('Unknown source ' + sourceId + ' for claim ' + claim.id);
        continue;
      }
      if (source.assessment === 'contradicts') add('Contradicting source for claim ' + claim.id);
      if (source.assessment === 'supports' && source.locator?.trim().length >= 4) supported = true;
      // International studies can inform general advice but do not establish
      // that a jurisdiction-specific law or percentage applies in India.
      if (claim.jurisdiction.startsWith('IN') &&
          source.jurisdiction !== claim.jurisdiction &&
          source.jurisdiction !== 'IN' &&
          source.jurisdiction !== 'international') {
        warnings.push('Check jurisdiction mismatch for claim ' + claim.id + ': ' + sourceId);
      }
      if (claim.studyPopulation && !source.population?.trim()) {
        add('Study population not stated in source for ' + claim.id);
      }
    }
    if (!supported) add('No precise supporting evidence for claim ' + claim.id);
  }

  if (lesson.reviewStatus === 'withdrawn') add('Withdrawn lessons are not publishable');
  if (lesson.claims.length === 0) add('Lesson has no claim records');
  if (lesson.reviewStatus === 'unverified') add('Unverified lessons are not publishable');
  if (lesson.reviewStatus === 'ai-reviewed-draft' || lesson.reviewStatus === 'human-reviewed') {
    const method = lesson.reviewStatus === 'human-reviewed' ? 'qualified-human' : 'independent-ai';
    const validEvent = lesson.verification?.some((v) =>
      v.method === method && v.verdict === 'pass' &&
      v.lessonRevision === lesson.revision &&
      v.reviewer.trim() && v.reportPath.trim() &&
      validDate(v.reviewedAt) &&
      lesson.claims.every((claim) => v.claimIds.includes(claim.id))
    );
    if (!validEvent) add('Missing independent passing verification for current lesson revision');
  }

  if (lesson.reviewStatus === 'human-reviewed') {
    const approval = lesson.humanApproval;
    if (!approval?.name.trim() || !approval.qualification.trim() ||
        !approval.scope.trim() || !validDate(approval.approvedAt)) {
      add('Named, dated, scoped qualified human approval is required');
    }
  }

  return {
    publishable: errors.length === 0,
    status: lesson.reviewStatus,
    errors,
    warnings
  };
}

export function validateOverlay(overlay: JurisdictionOverlay): string[] {
  const errors: string[] = [];
  if (!overlay.lessonId.trim()) errors.push('Overlay has no lesson ID');
  if (!validateJurisdiction(overlay.jurisdiction)) errors.push('Invalid Indian jurisdiction');
  if (overlay.status === 'reviewed' && overlay.claimIds.length === 0) {
    errors.push('Reviewed jurisdiction overlay must reference reviewed claims');
  }
  if (overlay.validFrom && !validDate(overlay.validFrom)) errors.push('Invalid validFrom date');
  if (overlay.validUntil && !validDate(overlay.validUntil)) errors.push('Invalid validUntil date');
  if (overlay.validFrom && overlay.validUntil && overlay.validFrom > overlay.validUntil) {
    errors.push('Overlay validity dates are reversed');
  }
  return errors;
}

export function validateLocaleVersion(locale: LocaleVersion): string[] {
  const errors: string[] = [];
  if (!locale.lessonId.trim() || !locale.lessonRevision.trim()) errors.push('Missing locale lesson identity');
  if (!/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(locale.locale)) errors.push('Invalid BCP-47 locale');
  if (locale.status === 'reviewed' && (!locale.reviewedBy?.trim() || !validDate(locale.translatedAt))) {
    errors.push('Reviewed translation needs reviewer and date');
  }
  return errors;
}
