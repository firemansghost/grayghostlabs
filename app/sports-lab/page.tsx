import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sports Lab – Where Numbers Talk Trash",
  description:
    "The Sports Lab is where Gridiron Edge and future sports models live: power ratings, edges vs the market, and season-long tracking.",
  path: "/sports-lab",
  ogImage: "/og/default.png",
});

export default function SportsLabPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sports Lab",
    description:
      "A small lab for model comparisons, experiments, and college football analytics work-in-progress.",
    url: `${SITE_URL}/sports-lab`,
    mainEntityOfPage: `${SITE_URL}/sports-lab`,
    publisher: {
      "@type": "Organization",
      name: "GrayGhost Labs",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Sports Lab resources",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Gridiron Edge",
          item: `${SITE_URL}/sports/cfb/gridiron-edge`,
        },
      ],
    },
  };

  return (
    <>
      <JsonLd id="jsonld-sports-lab" data={jsonLd} />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Sports Lab – Where Numbers Talk Trash
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            The Sports Lab is where all the college football and (eventually)
            other sports models live. Think power ratings, edges vs the market,
            and season-long PnL tracking—not &quot;my gut says this backup QB
            is due.&quot;
          </p>
        </div>

        {/* Featured Gridiron Edge – CFB Card */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Gridiron Edge – College Football</CardTitle>
            <CardDescription className="text-base">
              Power ratings, spreads, totals, and result tracking for the sickos
              who bet Wednesday MACtion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Power ratings for all FBS teams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Model vs market spreads and totals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Week review and season review to see if the model is actually
                  earning its oats
                </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2">
            <Button asChild className="w-full sm:w-auto">
              <Link
                href={EXTERNAL_LINKS.gridironEdgeApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Gridiron Edge – CFB
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/sports/cfb/gridiron-edge">Learn more about Gridiron Edge</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Data & Sources Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Data & Sources</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3 text-sm text-foreground/80">
                <li>
                  <strong className="text-foreground">Odds & lines:</strong>
                  <ul className="pl-6 mt-1 space-y-1">
                    <li>• Odds API</li>
                    <li>• sportsgameodds.com</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-foreground">Games & stats:</strong>
                  <ul className="pl-6 mt-1 space-y-1">
                    <li>• CollegeFootballData (CFBD)</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-foreground">
                    Weather (for future modeling / context):
                  </strong>
                  <ul className="pl-6 mt-1 space-y-1">
                    <li>• OpenWeatherMap</li>
                    <li>• Visual Crossing</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground italic">
                These providers feed the underlying data. Any bad takes are
                still on the model builder, not them.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Future Sports Experiments */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Future Sports Experiments</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-foreground/80">
                More sports models are in the pipeline: NFL power ratings, prop
                betting edges, and whatever else breaks when you combine too
                much data with too much free time.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    </>
  );
}

