# GrayGhost Labs

Marketing and hub site for the GrayGhost Labs ecosystem.

## Overview

GrayGhost Labs is the public front door for data-driven tools covering Bitcoin risk, portfolio research, market structure, sports analytics, and experiments that started as personal annoyances.

### Live products

- **GhostGauge** — five-pillar Bitcoin risk dashboard with a daily 0–100 G-Score (`https://www.ghostgauge.com`)
- **Ghost Allocator** — pension-aware 457 portfolio research hub (`https://ghost-allocator.vercel.app/`)
  - **GhostRegime** — market regime and risk posture
  - **GhostYield** — income-sleeve research
  - **GhostFlow** — public preview of the passive-pressure / market-structure dashboard (`https://ghost-allocator.vercel.app/ghostflow`)
- **Trend100** — market leadership and regime dashboard (`https://trend100.vercel.app`)
- **Gridiron Edge** — college football analytics (`https://gridiron-edge-v1.vercel.app`)

### Site support pages

- `/coming-soon` — roadmap of future experiments
- `/about` — origin, philosophy, and contact (X DMs)
- `/press-kit` — brand assets and boilerplate
- `/status` — live vs preview vs next-up, plus build info

## Tech Stack

- **Next.js** App Router
- **TypeScript**
- **Tailwind CSS**
- **Vercel**
- **PWA** support (`manifest.webmanifest`, icons, Apple web app metadata)
- Generated **OG / social** assets (`/og/*`, `npm run generate:og`)
- Structured data and SEO helpers (`lib/seo.ts`, JSON-LD components, canonical metadata)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx                    # Root layout, default metadata, JSON-LD
│   ├── page.tsx                      # Home
│   ├── sitemap.ts                    # Public routes
│   ├── ghostgauge/                   # GhostGauge product page
│   ├── ghost-allocator/              # Ghost Allocator product page
│   ├── trend100/                     # Trend100 product page
│   ├── sports-lab/                   # Sports Lab overview
│   ├── sports/cfb/gridiron-edge/     # Gridiron Edge product page
│   ├── coming-soon/                  # Roadmap
│   ├── about/                        # About
│   ├── press-kit/                    # Press kit
│   └── status/                       # Status
├── components/
│   ├── layout/                       # SiteHeader, SiteFooter
│   ├── sections/                     # Hero, ProductGrid, AboutSection
│   ├── seo/                          # JSON-LD helpers
│   └── ui/                           # Shared UI
├── config/
│   └── site.ts                       # siteConfig derived from lib/constants.ts
└── lib/
    ├── constants.ts                  # SITE_URL and EXTERNAL_LINKS (URL source of truth)
    ├── comingSoon.ts                 # Future projects only
    ├── seo.ts                        # buildMetadata() with canonical URLs
    └── utils.ts
```

## Pages

- `/` — Home (hero, product grid, newsletter, about)
- `/ghostgauge` — GhostGauge
- `/ghost-allocator` — Ghost Allocator (GhostRegime, GhostYield, GhostFlow preview)
- `/trend100` — Trend100
- `/sports-lab` — Sports Lab overview
- `/sports/cfb/gridiron-edge` — Gridiron Edge
- `/coming-soon` — Roadmap
- `/about` — About
- `/press-kit` — Press kit
- `/status` — Live / preview / next-up and build info

## Build

```bash
npm run build
```

## Deploy

The site deploys on Vercel.
