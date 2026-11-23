# Security risk register: dependency and CI trust boundaries

- **Check date:** 19 November 2026
- **Issue:** [#25](https://github.com/RohannShetty/LifeAsUsual/issues/25)
- **PR:** [#29](https://github.com/RohannShetty/LifeAsUsual/pull/29) (evidence only; no dependency change was needed)
- **Baseline:** master `b1ee21b` (v2.8.1 plus the recall fix)

This register records what was measured on the check date. It is not a general security clearance and does not replace a qualified security assessment.

## Measured state

```
npm audit --json                        # full tree
npm audit --omit=dev --audit-level=high # production gate used by CI
npm ls astro picomatch
```

Result on the baseline: **0 vulnerabilities** (0 low, moderate, high, critical), and `astro@7.4.12` declared as a **devDependency**, so production installs never ship the build tool.

## Advisories behind issue #25

| Advisory | Summary | Affected | Patched | State on 19 Nov 2026 |
| --- | --- | --- | --- | --- |
| GHSA-mh32-jxcr-mh9f | Astro: XSS via attribute injection in dynamic tag names | `<= 7.4.4` | `7.4.5` | Cleared: v2.8.1 pins `astro@7.4.12` |
| GHSA-r3h5-4585-7x3w | Astro `@astrojs/node` image endpoint can read a case-variant sibling of the output directory | `<= 7.4.6` on this line | `7.4.7` | Cleared; the adapter is not a dependency |
| GHSA-fc5q-39xc-vjpf | picomatch ReDoS through single-branch repeated extglobs (the #25 finding) | `<= 4.0.7` | none listed | **Withdrawn upstream 2026-11-18T15:38:56Z** |

Advisory metadata was read with `gh api advisories/<ID>` on the check date.

## Applicability analysis

- **Static output, no Node runtime.** `astro.config.mjs` is `output: 'static'` and no `@astrojs/node` adapter is installed, so the image-endpoint advisory had no deployed surface either before or after the patch.
- **No untrusted tag names at build time.** Pages are generated from versioned files in `data/` and `src/`; no request input reaches component tag names.
- **picomatch is build-only.** It resolves globs during the build and is never served to readers, and no user-supplied glob pattern is evaluated. The advisory was withdrawn one day after #25 was filed, so the remaining `4.0.7` pin is no longer a reported vulnerability.
- **Classification matches reality.** Astro was moved to `devDependencies` in v2.8.1, so the production gate no longer depends on it. The full audit still runs and is still uploaded; nothing is suppressed.

## CI trust boundaries

| Workflow | Permissions | Triggers |
| --- | --- | --- |
| `dependency-audit.yml` | `contents: read` | push to master (dependency paths), pull_request, weekly schedule, manual |
| `india-verify.yml` | `contents: read` | pull_request, push |
| `content-trust-check.yml` | `contents: read` | pull_request, push |
| `india-first-inventory.yml` | `contents: read` | push, pull_request, manual |
| `deploy.yml` | `contents: read`, `pages: write`, `id-token: write` | push to master, manual |

- No `pull_request_target` trigger exists, so pull-request code never runs with a writable token or repository secrets.
- Only `deploy.yml` holds write permissions. Its deploy job explicitly requires `github.ref == 'refs/heads/master'`; a manual dispatch from another branch may build/upload an artifact but cannot deploy it. Production publishing uses the Pages OIDC flow.
- The audit job captures `npm audit --json` for the full and production trees and uploads both as artifacts before gating.


## GitHub Actions SHA pinning — 23 November 2026

The workflow baseline at master `7dc2a15` used movable major-version tags. The reviewed patch pins all 13 third-party action references across the five repository workflows to immutable 40-character commit SHAs. The inline release labels below are for human auditability; the SHA is what Actions executes.

| Action | Release label | Immutable commit |
| --- | --- | --- |
| `actions/checkout` | `v4.4.0` | [`11d5960a326750d5838078e36cf38b85af677262`](https://github.com/actions/checkout/commit/11d5960a326750d5838078e36cf38b85af677262) |
| `actions/setup-node` | `v4.4.0` | [`49933ea5288caeca8642d1e84afbd3f7d6820020`](https://github.com/actions/setup-node/commit/49933ea5288caeca8642d1e84afbd3f7d6820020) |
| `actions/upload-artifact` | `v4.6.2` | [`ea165f8d65b6e75b540449e92b4886f43607fa02`](https://github.com/actions/upload-artifact/commit/ea165f8d65b6e75b540449e92b4886f43607fa02) |
| `actions/upload-pages-artifact` | `v3.0.1` | [`56afc609e74202658d3ffba0e8f6dda462b719fa`](https://github.com/actions/upload-pages-artifact/commit/56afc609e74202658d3ffba0e8f6dda462b719fa) |
| `actions/deploy-pages` | `v4.0.5` | [`d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e`](https://github.com/actions/deploy-pages/commit/d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e) |

A deterministic verifier scans every `.yml`/`.yaml` workflow and rejects non-SHA references or missing version annotations. It is part of `precheck` and the required India verification workflow, with unit tests for moving tags, malformed pins and local actions. This is supply-chain hardening, not an audit of the action source code; future upgrades still require reviewing the release and updating the pinned SHA.

## Residual risk

1. SHA pinning prevents a mutable release tag from silently changing the workflow input, but it does not establish that the third-party action code is safe. Future updates still require release review and explicit SHA changes.
2. npm dependencies are the only ecosystem audited. No container, OS package or signature verification exists; a green audit is not a general security clearance.
3. A withdrawn advisory can be re-published. The weekly scheduled audit is the detector; if GHSA-fc5q-39xc-vjpf returns, #25 must be reopened and re-triaged.
4. No production deployment, runtime probe or penetration test was performed in this pass.
