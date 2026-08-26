# GrayGhost Labs — site maintenance & product governance

Lightweight playbook so product status, copy, dependencies, and roadmap information stay accurate as the ecosystem evolves.

This is governance, not a redesign brief. Do not treat a maintenance pass as an invitation to restyle the site, rewrite product copy, or upgrade dependencies merely because updates exist.

## Public architecture

GrayGhost Labs is a marketing/hub site for the public ecosystem. Current public structure:

### Markets (`/markets`)

- **GhostGauge** — Bitcoin risk dashboard (`/ghostgauge`)
- **Ghost Allocator** — pension-aware 457 portfolio research hub (`/ghost-allocator`)
  - Nested tools on the Allocator page/status surfaces: GhostRegime, GhostYield, GhostFlow
- **Trend100** — market leadership and regime dashboard (`/trend100`)

### Sports Lab (`/sports-lab`)

- **Gridiron Edge** — college football analytics (`/sports/cfb/gridiron-edge`)
- **Ace Suppressor** — MLB totals research (`/sports/mlb/ace-suppressor`)

### Roadmap (`/coming-soon`)

Coming Soon concepts grouped by family (Macro & Markets, Intelligence & Analysis, Fire Service). These are workbench ideas, not current products.

### Utility

- **About** (`/about`)
- **Press Kit** (`/press-kit`)
- **Status** (`/status`)

Homepage (`/`) is the front door: Current Work grouped by Markets, Sports Research, and Workbench, plus the status-console concept in the hero.

## Sources of truth

| Concern | Source |
| --- | --- |
| Current public projects (identity, status, category, primary links, short description) | `lib/projects.ts` |
| Future concepts / roadmap | `lib/comingSoon.ts` |
| Canonical site URL and external product/social URLs | `lib/constants.ts` |
| Header navigation | `lib/nav.ts` |
| Public route list for crawlers | `app/sitemap.ts` |
| Exact dependency versions | `package.json` / lockfile |
| Hub overview copy and README inventory | `README.md` |

Detailed product-page copy can remain local to the product page (methodology, nested tool explanations, longer body copy). Identity, maturity/status, category, and primary internal/external links should come from shared data where practical.

### Nested tools vs catalog projects

GhostFlow is currently a **preview nested under Ghost Allocator**, not a top-level entry in `PROJECTS`. Status, Markets, Press Kit, the Allocator page, and the homepage console mention it explicitly.

`ProjectStatus` in `lib/projects.ts` includes `PREVIEW_ACTIVE_BUILD` for when a preview is a catalog-level current project. Do not add a catalog row just to make a nested preview “fit the type.”

Homepage console labels may be shortened (see maturity language). `QUEUED` on “More bad ideas” is decorative console copy, not a product-maturity label.

## Product maturity language

Current public vocabulary:

| Label | Meaning |
| --- | --- |
| **LIVE** | Public product that should be represented as operational. |
| **ACTIVE RESEARCH** | Public research environment doing real work, but not represented as a finished production/picks product. |
| **PREVIEW · ACTIVE BUILD** | Accessible preview still being actively developed. |
| **COMING SOON / ROADMAP** | Concept / roadmap item, not a current product. |

Rules:

- Do not invent additional maturity labels casually.
- Qualifiers on a status label are allowed when they are true and specific (example: Ace’s catalog label `ACTIVE RESEARCH · 2027 SEASON BUILD`). The maturity class is still **ACTIVE RESEARCH**.
- Short display forms are allowed on dense UI:
  - homepage console: `ACTIVE RESEARCH`, `PREVIEW`
  - elsewhere: full `PREVIEW · ACTIVE BUILD` when space allows
- Do not call unreleased or preview work **LIVE**.
- Do not call Ace a picks/recommendation product. Research, ranking, testing, and validation language stays.

Current catalog snapshot (see `lib/projects.ts` for the live list):

- LIVE: GhostGauge, Ghost Allocator, Trend100, Gridiron Edge
- ACTIVE RESEARCH: Ace Suppressor
- PREVIEW · ACTIVE BUILD: GhostFlow (nested; not a `PROJECTS` row)
- ROADMAP: items in `lib/comingSoon.ts`

## Product-graduation checklist

When a roadmap project becomes real:

1. Decide maturity state (`LIVE`, `ACTIVE RESEARCH`, or `PREVIEW · ACTIVE BUILD`).
2. Add or update the external canonical URL in `lib/constants.ts`.
3. Add or update `lib/projects.ts` if it is now a current public project.
4. Remove it from `lib/comingSoon.ts` (and `COMING_SOON_HIGHLIGHTS` if listed) if it is no longer a concept.
5. Decide Markets vs Sports vs a future category (`ProjectCategory` is currently `"markets" | "sports"`).
6. Create or update the internal detail page.
7. Update the appropriate hub (`/markets` or `/sports-lab`).
8. Update the homepage only if the product is publicly represented there (Current Work, console, Workbench).
9. Update Status (`/status`).
10. Update Press Kit (`/press-kit`).
11. Update `app/sitemap.ts`.
12. Update `README.md` overview/pages inventory.
13. Update JSON-LD only where visible site content supports it. Do not let structured data advertise something the visible page does not (no LIVE WebApplication markup for a concept; no extra products in ItemLists that the page does not show).
14. Generate a dedicated OG asset if warranted (`npm run generate:og`, files under `public/og/`).
15. Run QA (see Routine checks).

Graduation is a product-ownership decision, not a copy tweak.

## Product-status change checklist

When maturity changes on an existing product, audit every surface that mentions it, then search the repo for old status wording before committing.

### Example: GhostFlow `PREVIEW → LIVE`

Required audit:

- `lib/projects.ts` / product-ownership decision (stay nested under Allocator vs become a catalog project)
- `lib/constants.ts` (canonical GhostFlow URL)
- Ghost Allocator page (`app/ghost-allocator/page.tsx`)
- Markets (`app/markets/page.tsx`)
- Homepage (`components/sections/Hero.tsx`, `components/sections/ProductGrid.tsx`)
- Status (`app/status/page.tsx`)
- Press Kit (`app/press-kit/page.tsx`)
- Roadmap (confirm it is not still treated as Coming Soon)
- Metadata / JSON-LD on pages that describe it
- `README.md`

Search for leftover preview language, for example: `PREVIEW`, `ACTIVE BUILD`, `public preview`, `Open preview`.

Same pattern applies to other transitions (research → live, live → archived). If a product is archived, remove or recategorize it from live hubs and do not leave LIVE structured data behind.

## Copy truth rules

GrayGhost Labs public copy should avoid:

- guaranteed predictions
- unsupported profitability or “edge” claims (Gridiron Edge is a proper name; do not turn the name into a performance claim)
- “live” for unreleased products
- “real-time” unless the architecture actually supports it
- fake update schedules (daily/weekly claims that are not true)
- pretending research products are recommendation or picks services
- unnecessary exposure of private repositories or internal infrastructure

Preferred language:

- research
- monitor
- compare
- test
- validate
- scenario
- preview
- receipts
- uncertainty

Product-page detail copy can be longer and more specific. Shared catalog `shortDescription` values should stay conservative and reusable across homepage, hubs, Status, and Press Kit.

## Visual rules

Protect:

- noir/navy background
- emerald primary accent
- restrained glass panels (`glass-panel`, `glass-panel-subtle`)
- GGL monogram in the header (`/icons/icon-192.png`)
- current status-console concept on the homepage hero
- existing responsive typography
- reduced-motion support (`prefers-reduced-motion` / `motion-safe`)
- zero-JS navigation (native `<details>` mobile menu; no authored client components at the current baseline)

GrayGhost detective artwork is **not** part of the production visual system. If artwork is introduced later, treat it as an intentional brand campaign decision, not routine decoration.

Do not combine visual-system changes with product-graduation or dependency upgrades.

## Technical baseline

Recorded foundation (exact patch versions live in `package.json`):

- Next.js 16 Active LTS, App Router, Turbopack for normal `next dev` / `next build`
- React 19
- Tailwind CSS 4 (CSS-first `@theme` tokens)
- Node `>=20.9` locally (`package.json` `engines`)
- Node 22 in GitHub Actions CI
- ESLint flat config (`eslint.config.mjs`, `npm run lint`)
- TypeScript typecheck (`npm run typecheck`)
- GitHub Actions CI: lint, typecheck, build, static-route smoke on PRs and `main` pushes (CI does not deploy)
- Vercel for production deploys
- Installable-shell PWA (`public/manifest.webmanifest`, icons, Apple web app metadata). No service worker / offline cache
- No authored `"use client"` components at the current baseline

Do not enable React Compiler, Cache Components, or Instant Navigation as a side effect of maintenance. Bundle analysis (`npm run analyze`, `npm run analyze:turbopack`) is optional diagnostics, not a release gate.

`lib/buildInfo.generated.ts` is a committed placeholder. Local builds skip overwriting it unless `VERCEL` is set.

## Routine checks

Before a significant site release:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm run smoke
npm audit
```

Periodically:

```bash
npm outdated
```

`npm outdated` is informational. Do not upgrade because a newer version exists.

Do not blindly run:

```bash
npm audit fix --force
```

`npm run smoke` checks that the production build prerendered the public routes listed in `scripts/smoke-static.mjs`.

## Security update rule

Framework and security patches should be handled promptly when they affect supported production dependencies.

Major upgrades should remain isolated tasks. Do not combine:

- a Next.js major upgrade
- a Tailwind major upgrade
- broad dependency churn
- a redesign

into one migration.

Match `next`, `eslint-config-next`, and `@next/bundle-analyzer` versions when touching the Next line. Keep React types aligned with React.

## Content review cadence

Run a lightweight truth pass whenever:

- a product changes maturity
- a new app becomes public
- a product is archived
- an external URL changes
- methodology materially changes

Also perform an occasional site-wide truth pass even when no redesign is planned: catalog vs hubs vs Status vs Press Kit vs README vs JSON-LD vs sitemap.

No artificial monthly copy churn is required. Quiet accuracy beats rotating headlines.
