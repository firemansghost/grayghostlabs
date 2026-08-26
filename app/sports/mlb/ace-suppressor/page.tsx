import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ace Suppressor – MLB Totals Research | GrayGhost Labs",
  description:
    "Ace Suppressor is an active MLB totals research and model-validation lab for daily game ranking, historical testing, point-in-time market research, and prospective validation ahead of the 2027 season.",
  path: "/sports/mlb/ace-suppressor",
  ogImage: "/og/ace-suppressor.png",
});

export default function AceSuppressorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Ace Suppressor",
    description:
      "An MLB totals research and model-validation platform for daily game ranking, historical testing, point-in-time market analysis, and prospective validation.",
    applicationCategory: "SportsApplication",
    operatingSystem: "Any",
    url: EXTERNAL_LINKS.aceSuppressorApp,
    mainEntityOfPage: `${SITE_URL}/sports/mlb/ace-suppressor`,
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
      <JsonLd id="jsonld-ace-suppressor" data={jsonLd} />
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-ace-suppressor"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Sports Lab", path: "/sports-lab" },
          { name: "Ace Suppressor", path: "/sports/mlb/ace-suppressor" },
        ]}
      />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              ACTIVE RESEARCH · 2027 SEASON BUILD
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              Ace Suppressor – MLB Totals Research
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Ace Suppressor is an MLB totals research and model-validation lab
              built to test whether pitcher-duel and game-context hypotheses
              survive contact with real market prices. It ranks the daily slate,
              freezes point-in-time evidence, and keeps receipts on what actually
              happens.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              It is not currently a betting-picks service. The 2026 season is
              being used heavily for research, backtesting, ranking, and
              prospective validation ahead of a fuller 2027-season build.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What it does</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">•</span>
                <div>
                  <strong className="text-foreground">Daily Research Board</strong>
                  <span className="text-foreground/80">
                    {" "}
                    – ranks and prioritizes the daily slate for research, not as
                    a picks sheet.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">•</span>
                <div>
                  <strong className="text-foreground">Model validation</strong>
                  <span className="text-foreground/80">
                    {" "}
                    – historical and prospective testing instead of winner
                    screenshots.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">•</span>
                <div>
                  <strong className="text-foreground">
                    Point-in-time market discipline
                  </strong>
                  <span className="text-foreground/80">
                    {" "}
                    – research is compared against the totals market available at
                    the relevant time, not a rewritten board after the fact.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">•</span>
                <div>
                  <strong className="text-foreground">Historical Lab</strong>
                  <span className="text-foreground/80">
                    {" "}
                    – backtest-ready archives and coverage research so hypotheses
                    can be checked against seasons that already happened.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">•</span>
                <div>
                  <strong className="text-foreground">Results / receipts</strong>
                  <span className="text-foreground/80">
                    {" "}
                    – prospective outcomes are tracked rather than edited after
                    the game is in the books.
                  </span>
                </div>
              </li>
            </ul>
          </section>

          <section className="flex justify-center">
            <Card className="w-full max-w-md">
              <CardContent className="p-8 space-y-6 text-center">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild size="lg">
                    <Link
                      href={EXTERNAL_LINKS.aceSuppressorApp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Ace Suppressor
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/sports-lab">Back to Sports Lab</Link>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Research platform only. No active betting recommendations.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
