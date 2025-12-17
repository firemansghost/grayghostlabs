import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ghost Allocator – Post-60/40 Portfolio Builder",
  description:
    "Pension-aware 457 allocator that maps a modern sleeve portfolio onto Voya core funds and Schwab ETFs—no options chains required.",
  path: "/ghost-allocator",
  ogImage: "/og/ghost-allocator.png",
});

export default function GhostAllocatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Ghost Allocator",
    description:
      "Pension-aware 457 allocator that maps a modern sleeve portfolio onto Voya core funds and Schwab ETFs—no options chains required.",
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
      <div className="container px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Ghost Allocator – Post-60/40 Portfolio Builder
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Ghost Allocator is a pension-aware, 457-aware portfolio builder for a
            post-60/40 world. It maps a modern sleeve-based allocation onto your
            real 457 plan options—Voya core funds and Schwab ETFs via
            BrokerageLink. The goal is roughly right, not perfectly wrong: a
            portfolio that accounts for your pension floor and doesn&apos;t
            require options chains or complex derivatives.
          </p>
        </div>

        {/* Feature List */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">
                  Pension / income-floor aware intake
                </strong>
                <span className="text-foreground/80">
                  {" "}
                  – Accounts for your pension as a floor, so the allocation
                  doesn&apos;t over-allocate to bonds you don&apos;t need.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">
                  Sleeve-based allocation (post-60/40)
                </strong>
                <span className="text-foreground/80">
                  {" "}
                  – Modern portfolio structure that moves beyond the traditional
                  60/40 split, organized into risk sleeves.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">
                  Plan mapping for Voya core funds + Schwab ETFs/BrokerageLink
                </strong>
                <span className="text-foreground/80">
                  {" "}
                  – Translates the sleeve model into actual funds available in
                  your 457 plan, including BrokerageLink options.
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
                  – Built for people who want a modern allocation without
                  derivatives complexity or financial advisor speak.
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

