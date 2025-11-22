import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gridiron Edge – College Football | GrayGhost Labs",
  description: "Power ratings, spreads, totals, and result tracking for college football betting and analysis.",
};

export default function GridironEdgeCFBPage() {
  return (
    <div className="container px-4 py-16">
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
              <Button asChild size="lg" className="w-full">
                <Link
                  href={EXTERNAL_LINKS.gridironEdgeApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Gridiron Edge – CFB
                </Link>
              </Button>
              <Link
                href="/sports-lab"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to Sports Lab
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}


