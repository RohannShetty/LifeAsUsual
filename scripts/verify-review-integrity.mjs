#!/usr/bin/env node
// Guards the review-status vocabulary: automation, source URLs and inherited
// evidence grades must never render as a human, qualified or independent review.
import fs from 'node:fs';
import path from 'node:path';

export const CHAPTER_REVIEW_STATES = ['draft', 'checked', 'reviewed'];
export const TIP_REVIEW_STATES = ['independently-checked', 'reviewed'];
export const APPROVED_METHODS = ['qualified-human', 'owner-self-review'];
export const CHAPTER_NOTICE_MARKERS = [
  'AI-reviewed draft for India.',
  'do not establish that every claim has a matching primary source',
  'AI-reviewed drafts, not professional sign-off.',
];
export const TIPCARD_MARKERS = ['AI-reviewed draft', 'Automated source checks are not professional verification.'];
export const FORBIDDEN_VERIFICATION_PHRASES = [
  'verified for India', 'India-verified', 'clinically verified', 'legally verified', 'specialist-approved',
];

export function chapterRoute(chapter) {
  return '/chapters/' + String(chapter.chapter).padStart(2, '0') + '-' + chapter.slug + '/';
}

export function reviewIntegrityErrors(input) {
  const errors = [];
  const records = input.records || [];
  const approvedByRoute = new Map();
  for (const record of records) {
    const route = record && record.route;
    const reviewStatus = record && record.lesson && record.lesson.reviewStatus;
    if (reviewStatus !== 'human-reviewed') continue;
    const raw = (record.lesson && record.lesson.verification) || [];
    const events = Array.isArray(raw) ? raw : [raw];
    const revision = record.lesson && record.lesson.revision;
    const event = events.find((e) => e && e.verdict === 'pass' && (!revision || e.lessonRevision === revision)) || events[0] || {};
    const method = event.method;
    if (!APPROVED_METHODS.includes(method)) {
      errors.push('Publication record ' + route + ' is human-reviewed with method ' + method + '.');
      continue;
    }
    const approval = event.humanApproval || (record.lesson && record.lesson.humanApproval) || {};
    if (method === 'qualified-human' && approval.independent !== true) {
      errors.push('Publication record ' + route + ' claims qualified-human without an independent reviewer.');
      continue;
    }
    if (method === 'owner-self-review' && (approval.independent !== false || !String(approval.limitation || '').trim())) {
      errors.push('Publication record ' + route + ' must mark owner-self-review as not independent and state its limitation.');
      continue;
    }
    approvedByRoute.set(route, method);
  }

  const manifest = input.manifest || {};
  for (const chapter of input.chapters || []) {
    const route = chapterRoute(chapter);
    const status = chapter.rewriteStatus || 'draft';
    if (!CHAPTER_REVIEW_STATES.includes(status)) {
      errors.push(route + ': unknown chapter review status ' + status + '.');
    }
    if (status === 'reviewed' && !approvedByRoute.has(route)) {
      errors.push(route + ': renders as human-reviewed but has no approved publication record.');
    }
    const entry = (manifest.chapters || {})[String(chapter.chapter)] || {};
    if (entry.humanReview === 'signed-off' && !approvedByRoute.has(route)) {
      errors.push(route + ': manifest says signed-off with no approved publication record.');
    }
    for (const tip of chapter.tips || []) {
      const tipStatus = tip.reviewStatus || 'independently-checked';
      if (!TIP_REVIEW_STATES.includes(tipStatus)) {
        errors.push(route + '# ' + tip.id + ': unknown tip review status ' + tipStatus + '.');
      }
      if (tipStatus === 'reviewed' && !approvedByRoute.has(route)) {
        errors.push(route + '# ' + tip.id + ': shows Human-reviewed with no approved publication record.');
      }
    }
  }

  const chapterPage = String(input.chapterPage || '');
  for (const marker of CHAPTER_NOTICE_MARKERS) {
    if (!chapterPage.includes(marker)) errors.push('Chapter template lost the draft notice marker: ' + marker);
  }
  const tipCard = String(input.tipCard || '');
  for (const marker of TIPCARD_MARKERS) {
    if (!tipCard.includes(marker)) errors.push('TipCard lost the draft badge marker: ' + marker);
  }
  for (const phrase of FORBIDDEN_VERIFICATION_PHRASES) {
    if (chapterPage.toLowerCase().includes(phrase.toLowerCase())) {
      errors.push('Chapter template contains unearned verification phrase: ' + phrase);
    }
    if (tipCard.toLowerCase().includes(phrase.toLowerCase())) {
      errors.push('TipCard contains unearned verification phrase: ' + phrase);
    }
  }
  return errors;
}

export function loadInputs(root = process.cwd()) {
  const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
  return {
    chapters: read('data/en-in/all-chapters.json'),
    manifest: read('data/en-in/manifest.json'),
    records: read('data/india-publications.json'),
    chapterPage: fs.readFileSync(path.join(root, 'src/pages/chapters/[n]-[slug].astro'), 'utf8'),
    tipCard: fs.readFileSync(path.join(root, 'src/components/TipCard.astro'), 'utf8'),
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'))) {
  const input = loadInputs();
  const errors = reviewIntegrityErrors(input);
  if (errors.length) {
    console.error('Review-status integrity failed:');
    for (const error of errors) console.error(' - ' + error);
    process.exit(1);
  }
  const tips = input.chapters.reduce((n, c) => n + (c.tips || []).length, 0);
  console.log('Review-status integrity passed for ' + input.chapters.length + ' chapter route(s), ' + tips + ' tip(s) and ' + input.records.length + ' publication record(s).');
}
