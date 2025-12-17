import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "GhostGauge – Bitcoin Risk Dashboard",
  description:
    "GhostGauge wraps Bitcoin's macro, flow, and sentiment signals into a single 0–100 BTC G-Score with simple risk bands built for DCA and sanity checks.",
  path: "/ghostgauge",
  ogImage: "/og/ghostgauge.png",
});

export default function GhostGaugePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "GhostGauge",
    description:
      "A Bitcoin risk dashboard that turns market data into a clearer risk signal (G-Score + bands).",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    url: EXTERNAL_LINKS.ghostGaugeApp,
    mainEntityOfPage: `${SITE_URL}/ghostgauge`,
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
      <JsonLd id="jsonld-ghostgauge" data={jsonLd} />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            GhostGauge – Bitcoin Risk, Condensed
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            GhostGauge wraps Bitcoin&apos;s macro, flow, and sentiment signals
            into a single 0–100 risk score. It&apos;s built for people who DCA,
            rebalance, and occasionally panic—so they can do less panicking and
            more thinking.
          </p>
        </div>

        {/* Feature List */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">Macro & liquidity aware</strong>
                <span className="text-foreground/80">
                  {" "}
                  – Looks at the bigger system, not just candles.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">Score bands that mean something</strong>
                <span className="text-foreground/80">
                  {" "}
                  – Color-coded ranges for &apos;accumulate&apos;,
                  &apos;neutral&apos;, &apos;take risk off&apos;.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">No black-box hype</strong>
                <span className="text-foreground/80">
                  {" "}
                  – The factors are documented. You may still disagree, but you
                  won&apos;t be blind.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 text-xl">•</span>
              <div>
                <strong className="text-foreground">Built for humans</strong>
                <span className="text-foreground/80">
                  {" "}
                  – You get an opinionated score, not a 40-page PDF.
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* How it works */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How it works</h2>
          <p className="text-sm text-muted-foreground">
            Under the hood, GhostGauge blends several pillars into a single BTC
            G-Score: liquidity and flows, momentum and valuation, term structure
            and leverage, macro context, and social/attention. Each pillar is
            scored versus its own history and then combined into a 0–100 read on
            how stretched or washed-out conditions look today.
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>
              Liquidity &amp; flows – stablecoins, ETF flows, and liquidity
              proxies
            </li>
            <li>
              Momentum &amp; valuation – trend vs long-term baselines and cycle
              position
            </li>
            <li>
              Term structure &amp; leverage – derivatives, funding, and stress
              in the curve
            </li>
            <li>Macro overlay – broader liquidity and rates regime</li>
            <li>
              Social &amp; attention – narrative and sentiment as a supporting
              input
            </li>
          </ul>
        </section>

        {/* How to Use Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">How to Use</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">1.</div>
              <p className="text-foreground/80">
                Check today&apos;s score.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">2.</div>
              <p className="text-foreground/80">
                Map score band to your BTC behavior (accumulating, chilling,
                trimming).
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">3.</div>
              <p className="text-foreground/80">
                Don&apos;t treat it as a god—treat it as one more lens.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 space-y-6 text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg">
                  <Link
                    href={EXTERNAL_LINKS.ghostGaugeApp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open GhostGauge
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link
                    href={EXTERNAL_LINKS.ghostGaugeMethodology}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read methodology
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

