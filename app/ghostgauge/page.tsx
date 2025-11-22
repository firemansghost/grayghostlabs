import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "GhostGauge – Bitcoin Risk Dashboard | GrayGhost Labs",
  description: "A single 0-100 risk score for Bitcoin that combines macro, flows, momentum, and structure.",
};

export default function GhostGaugePage() {
  return (
    <div className="container px-4 py-16">
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
              <Button asChild size="lg" className="w-full">
                <Link
                  href={EXTERNAL_LINKS.ghostGaugeApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open GhostGauge
                </Link>
              </Button>
              <Link
                href="/"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to GrayGhost Labs
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

