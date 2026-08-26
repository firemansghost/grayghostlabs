import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { AppLink } from "@/components/ui/app-link";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { getProjectById } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sports Lab – Where Numbers Talk Trash",
  description:
    "GrayGhost Labs Sports Lab: college football analytics with Gridiron Edge, plus Ace Suppressor MLB totals research and model validation.",
  path: "/sports-lab",
  ogImage: "/og/default.png",
});

export default function SportsLabPage() {
  const gridiron = getProjectById("gridiron-edge");
  const ace = getProjectById("ace-suppressor");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sports Lab",
    description:
      "A small lab for sports research: college football analytics and MLB totals model validation.",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Ace Suppressor",
          item: `${SITE_URL}/sports/mlb/ace-suppressor`,
        },
      ],
    },
  };

  return (
    <>
      <JsonLd id="jsonld-sports-lab" data={jsonLd} />
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-sports-lab"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Sports Lab", path: "/sports-lab" },
        ]}
      />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Sports Lab – Where Numbers Talk Trash
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            The Sports Lab is where the models get tested before anybody starts
            believing their own press releases. College football lives here. MLB
            research now does too. Power ratings, market comparisons, daily
            rankings, backtests, and season-long receipts.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Current Projects</h2>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <CardTitle className="text-2xl">{gridiron?.name ?? "Gridiron Edge"}</CardTitle>
                {gridiron && (
                  <Badge className="shrink-0 text-[10px] sm:text-xs tracking-wide">
                    {gridiron.statusLabel}
                  </Badge>
                )}
              </div>
              <CardDescription className="text-base">
                {gridiron?.shortDescription ??
                  "College-football analytics for power ratings, matchup research, model-vs-market comparisons, and results tracking."}
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
                    Week review and season review to evaluate how projections held up
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2">
              <Button asChild className="w-full sm:w-auto">
                <Link
                  href={gridiron?.externalUrl ?? EXTERNAL_LINKS.gridironEdgeApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch Gridiron Edge – CFB
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <AppLink href={gridiron?.internalPath ?? "/sports/cfb/gridiron-edge"}>
                  Learn more about Gridiron Edge
                </AppLink>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <CardTitle className="text-2xl">{ace?.name ?? "Ace Suppressor"}</CardTitle>
                <Badge variant="outline" className="shrink-0 text-[10px] sm:text-xs tracking-wide">
                  {ace?.statusLabel ?? "ACTIVE RESEARCH · 2027 SEASON BUILD"}
                </Badge>
              </div>
              <CardDescription className="text-base">
                {ace?.shortDescription ??
                  "MLB totals research, daily slate ranking, historical testing, and prospective model validation."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Daily Research Board ranks the slate for research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Historical and prospective validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Point-in-time totals-market discipline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>No active betting recommendations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2">
              <Button asChild className="w-full sm:w-auto">
                <Link
                  href={ace?.externalUrl ?? EXTERNAL_LINKS.aceSuppressorApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Ace Suppressor
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <AppLink href={ace?.internalPath ?? "/sports/mlb/ace-suppressor"}>
                  Learn more about Ace Suppressor
                </AppLink>
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Research Inputs</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gridiron Edge</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>CollegeFootballData</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Market / odds feeds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Weather / context where relevant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ace Suppressor</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>MLB schedule / official results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pregame totals markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pitcher / bullpen / game-context evidence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground italic">
            Inputs feed the research. Any bad takes are still on the model
            builder, not the source.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Future Sports Experiments</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-foreground/80">
                Sports Lab currently contains active college football and MLB
                work. Future sports projects show up here only when they escape
                the spreadsheet.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    </>
  );
}
