import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gridiron Edge – College Football Analytics",
  description:
    "Model-driven power ratings, projected spreads/totals, and PnL tracking for college football sickos who want to test betting ideas against real numbers.",
  path: "/sports/cfb/gridiron-edge",
});

export default function GridironEdgeCFBPage() {
  return (
    <div className="container px-4 py-10 sm:py-14 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Gridiron Edge – College Football
          </h1>
          <p className="text-xl text-muted-foreground">
            Power ratings, spreads, totals, and result tracking for the sickos
            who bet Wednesday MACtion.
          </p>
        </div>

        {/* What It Does */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">What It Does</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Gridiron Edge – CFB ingests schedule, odds, and results to compute
              power ratings and model spreads/totals. It compares model lines vs
              market and surfaces ATS/OU &quot;edges&quot; that might actually
              mean something.
            </p>
            <p>
              The app tracks PnL using a synthetic &quot;Official $100
              Flat&quot; strategy (and others later), so you can see if the
              model is actually beating the market or just making pretty charts.
            </p>
            <p>
              Everything is built to test strategies, not just vibes. If the
              model can&apos;t beat the closing line over a season, it&apos;s
              not an edge—it&apos;s noise.
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
                  See all games with market spread/total vs model spread/total,
                  ATS edges, and model confidence.
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
                  advantage, ATS & totals analysis, model vs market view, and
                  betting ticket style summary.
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
                  plus see PnL and ROI over the season for a given strategy tag
                  like official_flat_100.
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
  );
}


