import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gridiron Edge – College Football Analytics",
  description:
    "College football analytics: power ratings, matchup and model-vs-market analysis, spreads and totals, and results evaluation. Active 2026 season work—not a claimed betting edge.",
  path: "/sports/cfb/gridiron-edge",
  ogImage: "/og/gridiron-edge.png",
});

export default function GridironEdgeCFBPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Gridiron Edge",
    description:
      "College football analytics: power ratings, matchup and model-vs-market analysis, spreads and totals, and results evaluation for the 2026 season.",
    applicationCategory: "SportsApplication",
    operatingSystem: "Any",
    url: EXTERNAL_LINKS.gridironEdgeApp,
    mainEntityOfPage: `${SITE_URL}/sports/cfb/gridiron-edge`,
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
      <JsonLd id="jsonld-gridiron-edge" data={jsonLd} />
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-gridiron-edge"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Sports Lab", path: "/sports-lab" },
          { name: "Gridiron Edge", path: "/sports/cfb/gridiron-edge" },
        ]}
      />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Gridiron Edge – College Football
          </h1>
          <p className="text-xl text-muted-foreground">
            Power ratings, matchup analysis, spreads, totals, and results
            evaluation—active 2026 season work, not a claimed betting edge.
          </p>
        </div>

        {/* What It Does */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">What It Does</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Gridiron Edge – CFB ingests schedule, odds, and results to compute
              power ratings and model spreads/totals. It compares model lines vs
              market and surfaces matchup context so you can see where the model
              and the board disagree.
            </p>
            <p>
              The app also evaluates results after the fact—week review and
              season review—so you can check how projections held up. That is
              research and bookkeeping, not a validated betting edge.
            </p>
            <p>
              Current focus is 2026 season readiness: ratings, matchups,
              spreads/totals, and honest results tracking. If the model
              can&apos;t beat the closing line over a season, it&apos;s not an
              edge—it&apos;s noise.
            </p>
          </div>
        </section>

        {/* Core Screens / Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Core Screens / Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Week Slate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  See all games with market spread/total vs model spread/total
                  and matchup context.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Game Matchup Detail</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deep dive into a single game: power ratings, home-field
                  advantage, totals analysis, and model vs market view.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Week Review & Season Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Review how the model did vs the closing line and final score,
                  plus season-long results evaluation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Under the hood */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Under the hood</h2>
          <p className="text-sm text-muted-foreground">
            Gridiron Edge runs a multi-model setup: a Balanced Composite power
            rating (V1), a unit matchup model (V2), and a Hybrid blend. V1 looks
            at talent, efficiency, scoring, and results. V2 grades run and pass
            units head-to-head. The Hybrid model leans on the composite and
            layers in matchup context so projections don&apos;t blow up every
            time one team has a weird box score.
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>
              V1 Balanced Composite – 25% talent, 25% efficiency, 25% scoring,
              25% results
            </li>
            <li>
              V2 Matchup model – run/pass and explosiveness matchups at the unit
              level
            </li>
            <li>
              Hybrid model – weighted blend of V1 and V2 for more stable edges
            </li>
            <li>
              Inputs from CFBD, odds feeds, and weather data for context
            </li>
          </ul>
        </section>

        {/* Who It's For */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Who It&apos;s For</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-foreground/80 leading-relaxed">
                This is for serious hobbyists and aspirational quants who want
                to track whether their approach actually beats the market, not
                just complain about bad beats on Sunday.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Data Sources */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Data Sources</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>
                  <strong className="text-foreground">Odds APIs</strong> – For
                  spreads/totals/ML (Odds API, sportsgameodds.com)
                </li>
                <li>
                  <strong className="text-foreground">CFBD</strong> – For
                  schedules/results (CollegeFootballData)
                </li>
                <li>
                  <strong className="text-foreground">Weather</strong> – For
                  context/future modeling (OpenWeatherMap, Visual Crossing)
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 space-y-6 text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg">
                  <Link
                    href={EXTERNAL_LINKS.gridironEdgeApp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Gridiron Edge – CFB
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link
                    href={EXTERNAL_LINKS.gridironEdgeMethodology}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read methodology
                  </Link>
                </Button>
              </div>
              <div className="mt-6">
                <Link
                  href="/sports-lab"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
                >
                  <span aria-hidden="true" className="mr-1">
                    ←
                  </span>
                  Back to Sports Lab
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


