# Release validation and deployment checks

Operational runbook for the India-first LifeAsUsual release. It records the checks that must pass, the exact commands, the expected output, and the failure modes seen in practice. Update it when a gate changes.

## Preconditions

- Node 22 (the Pages workflow pins Node 22).
- Clean tree on the commit you intend to release: `git status --short` empty.
- `npm ci` completed, so the lockfile is authoritative.

## Gate map

| Gate | Command | Protects against |
| --- | --- | --- |
| India data generation | `npm run build` (prebuild) | Missing or malformed India records |
| India verification | `npm run verify:india` | Count, attribution and coverage drift |
| Publication gate | `npm run verify:publication` | Publishing India-first routes without a trust record, or high-risk content without documented human review |
| Jurisdiction registry | `npm run verify:jurisdictions` | Missing State/UT coverage states |
| Types | `npx astro check` | Type and template errors |
| Internal links | `npm run check:links` | Broken navigation |
| Terminology | `npm run scan:terms` | Banned wording and non-English text in shipped pages |
| Behaviour | `npx playwright test` | Regressions across 360x800, 390x844, 768x1024, 1440x900 |

## Release sequence

```bash
npm ci
npx astro check              # expect: 0 errors, 0 warnings, hints only
npm run build                # runs every prebuild gate, then the static build
npm run check:links          # expect: PASS, every internal link resolves
npm run scan:terms           # expect: PASS, no banned terms found
npx playwright test          # expect: all tests passed
```

Verified on master `e198f5f` on 16 November 2026: `astro check` 0/0/5, build 52 pages, link check 2,234 links, term scan 37 pages, Playwright 332 passed.

### Playwright serves `dist`, it does not build it

`playwright.config.ts` starts `npx astro preview --port 4321` with `reuseExistingServer: true`. It serves whatever is already in `dist/`. If a new route "404s" in a test, run `npm run build` first, and make sure no preview server from an earlier run is still holding the port. This is the most common false failure.

## Publication gate in detail

`scripts/verify-published-lessons.ts` runs from `prebuild`, so a failing gate fails the Pages deploy. It scans `src/pages/help/**/*.astro`, rejects dynamic routes, and requires one record per route in `data/india-publications.json`.

`assessLesson` (in `src/lib/content-trust.ts`) then decides publishability:

- High and critical risk require `reviewStatus: "human-reviewed"` with a documented `humanApproval` (reviewer, role, date, reviewed revision).
- Evidence needs an exact locator of at least four characters, a date, and a matching verification event for the revision.
- `checkedAt`, `reviewedAt` and `approvedAt` must not be in the future.
- Duplicate normalized routes fail closed.

Observed failure when a route is unregistered:

```
India-first publication gate failed closed:
 - No canonical trust record for India-first route /help/report-financial-cyber-fraud/
```

**Do not** satisfy this by inventing a review, marking high-risk content as low risk, or deleting the route check. Publish the route only after the documented review exists; until then the page stays off `master`.

Coverage limit: the gate only sees `/help` routes. On master there are none, so the gate currently passes vacuously. Extending it to every India-original route is still open work.

## Deployment verification

```bash
# What is deployed, and from which commit?
gh api repos/RohannShetty/LifeAsUsual/pages --jq '{url:.html_url,status:.status}'
gh api repos/RohannShetty/LifeAsUsual/deployments --jq '.[0] | {sha:.sha,created:.created_at}'

# Do the expected routes answer?
BASE=https://rohannshetty.github.io/LifeAsUsual
for p in "" chapters/ guides/ about/ india/; do
  printf '%s %s\n' "$p" "$(curl -s -o /dev/null -w '%{http_code}' "$BASE/$p")"
done
```

Expected on 16 November 2026: deployment `e198f5f`, Pages `built`, routes 200. Unpublished draft routes must return 404 — `/help/report-financial-cyber-fraud/` returning 200 would mean the publication gate was bypassed.

Check the rendered title matches the India-first identity: `curl -s $BASE/ | grep -o '<title>[^<]*'`.

## Rollback

1. Revert the offending merge commit on `master` (`git revert -m 1 <sha>`) and push; the Pages workflow redeploys automatically.
2. If the build itself is broken, use the Pages deployment history to redeploy the last good commit: `gh api repos/RohannShetty/LifeAsUsual/deployments --jq '.[].sha'` lists candidates.
3. Do not "fix forward" by weakening a gate under time pressure; revert first, then fix with tests.

## Evidence log

| Date | Commit | Check | Result |
| --- | --- | --- | --- |
| 2026-11-16 | `e198f5f` | astro check / build / links / terms | 0 errors; 52 pages; 2,234 links; PASS |
| 2026-11-16 | `e198f5f` | Playwright matrix | 332 passed |
| 2026-11-16 | `e198f5f` | Pages deployment | built, deployment SHA matches master |
| 2026-11-16 | `ad2c046` | PR #15 guide + spec | astro check clean; 12 passed; gate fails closed as designed |
