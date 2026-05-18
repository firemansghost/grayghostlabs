import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ghost Allocator – Portfolio Research Hub (457-Aware)",
  description:
    "Pension-aware 457 hub: core allocator, GhostRegime, GhostYield income-sleeve research, model portfolios, and GhostFlow (passive-pressure monitor, in development).",
  path: "/ghost-allocator",
  ogImage: "/og/ghost-allocator.png",
});

export default function GhostAllocatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Ghost Allocator",
    description:
      "Portfolio research hub for building around a pension-aware 457 framework: core allocator, GhostRegime risk posture, GhostYield income-sleeve research, model portfolios, and GhostFlow passive-pressure dashboard (in development).",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    url: EXTERNAL_LINKS.ghostAllocatorApp,
    mainEntityOfPage: `${SITE_URL}/ghost-allocator`,
    publisher: {
      "@type": "Organization",
      name: "GrayGhost Labs",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <JsonLd id="jsonld-ghost-allocator" data={jsonLd} />
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-ghost-allocator"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Ghost Allocator", path: "/ghost-allocator" },
        ]}
      />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Ghost Allocator – Portfolio Research Hub
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Ghost Allocator is a portfolio research hub for building around a
            pension-aware 457 framework. Inside one roof you get the core
            allocator, GhostRegime for risk posture, GhostYield for income-sleeve
            research (v0.1), static model portfolios, and—in development—GhostFlow,
            a passive-pressure dashboard for market structure. Still roughly right,
            not perfectly wrong—and still allergic to options chains.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground/90">GhostYield</strong> compares
            yield-producing sleeves by income source, NAV behavior, payout quality,
            data freshness, and risk flags before you bolt them around an existing
            portfolio. Research only—not a model portfolio, not a recommendation
            engine, not a substitute for reading the boring stuff yourself.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground/90">GhostFlow</strong> (
            <em>not live yet</em>
            ) tracks passive-flow pressure, ETF issuance, index concentration,
            volatility mechanics, systematic-flow proxies, and structural
            fragility.{" "}
            <strong className="text-foreground/90">
              Not a crash predictor.
            </strong>{" "}
            A plumbing monitor for a market where price discovery increasingly
            shares the wheel with autopilot.
          </p>
        </div>

        {/* Feature List */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">What&apos;s in the hub</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">
                  Core allocator (457-aware)
                </strong>
                <span className="text-foreground/80">
                  {" "}
                  — Pension / income-floor aware intake; sleeve-based allocation
                  mapped to Voya core funds + Schwab ETFs via BrokerageLink.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">GhostRegime</strong>
                <span className="text-foreground/80">
                  {" "}
                  — Market regime and risk posture readout so the rest of the hub
                  isn&apos;t flying blind.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">GhostYield</strong>
                <span className="text-foreground/80">
                  {" "}
                  — Live v0.1 manual yield-sleeve research dashboard; use it to
                  compare sleeves, not to outsource thinking.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">Model portfolios</strong>
                <span className="text-foreground/80">
                  {" "}
                  — Static templates: starting points, not mandates.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">GhostFlow (in development)</strong>
                <span className="text-foreground/80">
                  {" "}
                  — Passive pressure / market-structure fragility dashboard. Not
                  predictive—just checks whether the plumbing is making weird
                  noises.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">
                  No options chains / minimal jargon
                </strong>
                <span className="text-foreground/80">
                  {" "}
                  — Built for people who want modern allocation without derivatives
                  rabbit holes or advisor word salad.
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 space-y-6 text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg">
                  <Link
                    href={EXTERNAL_LINKS.ghostAllocatorApp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Ghost Allocator
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link
                    href={EXTERNAL_LINKS.ghostYieldApp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open GhostYield
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link
                    href={EXTERNAL_LINKS.ghostAllocatorWhy6040}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Why 60/40?
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link
                    href={EXTERNAL_LINKS.ghostAllocatorRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </div>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
                >
                  <span aria-hidden="true" className="mr-1">
                    ←
                  </span>
                  Back to GrayGhost Labs
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    </>
  );
}

