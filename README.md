# GrayGhost Labs

Marketing + hub site for GrayGhost Labs (GhostGauge, GhostEdge, etc.)

## Overview

This is the marketing and hub site for GrayGhost Labs, serving as the front door to the "Ghost" ecosystem:

- **GrayGhost Labs** (parent brand)
- **GhostGauge** (Bitcoin risk dashboard – https://ghostgauge.com)
- **GhostEdge – CFB** (College football model – https://gridiron-edge-v1.vercel.app)

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Lucide React** (icons)

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
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── ghostgauge/         # GhostGauge product page
│   ├── sports-lab/         # Sports Lab overview
│   ├── sports/cfb/ghostedge/ # GhostEdge-CFB product page
│   └── about/              # About page
├── components/
│   ├── layout/             # SiteHeader, SiteFooter
│   ├── sections/           # Hero, ProductGrid, AboutSection
│   └── ui/                 # shadcn/ui components
└── lib/
    ├── utils.ts            # Utility functions
    └── constants.ts        # Site constants and external links
```

## Pages

- `/` - Home page with hero, product grid, and about section
- `/ghostgauge` - GhostGauge product page
- `/sports-lab` - Sports Lab overview page
- `/sports/cfb/ghostedge` - GhostEdge-CFB product page
- `/about` - About page

## Build

```bash
npm run build
```

## Deploy

The site is ready to deploy to Vercel, Netlify, or any platform that supports Next.js.
