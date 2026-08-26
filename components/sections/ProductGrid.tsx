import type { ReactNode } from "react";
import Link from "next/link";
import { AppLink } from "@/components/ui/app-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getHighlightItems } from "@/lib/comingSoon";
import { getProjectById, type Project } from "@/lib/projects";

function CategoryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <AppLink
      href={href}
      className="inline-flex items-center min-h-[44px] sm:min-h-0 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {children}
    </AppLink>
  );
}

function StatusBadge({ project }: { project: Project }) {
  return (
    <Badge
      variant={project.status === "LIVE" ? "default" : "outline"}
      className="shrink-0 text-[10px] sm:text-xs tracking-wide"
    >
      {project.statusLabel}
    </Badge>
  );
}

function ProjectActions({
  project,
  openLabel = "Open app",
}: {
  project: Project;
  openLabel?: string;
}) {
  return (
    <div className="flex w-full flex-col sm:flex-row gap-2">
      <Button asChild className="flex-1 min-w-0 w-full sm:w-auto">
        <Link
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="whitespace-nowrap">{openLabel}</span>
        </Link>
      </Button>
      <Button asChild variant="outline" className="flex-1 min-w-0 w-full sm:w-auto">
        <AppLink href={project.internalPath}>
          <span className="whitespace-nowrap">Learn more</span>
          <span className="sr-only"> about {project.name}</span>
        </AppLink>
      </Button>
    </div>
  );
}

export function ProductGrid() {
  const ghostGauge = getProjectById("ghostgauge");
  const ghostAllocator = getProjectById("ghost-allocator");
  const trend100 = getProjectById("trend100");
  const gridiron = getProjectById("gridiron-edge");
  const ace = getProjectById("ace-suppressor");
  const highlights = getHighlightItems();

  return (
    <section
      id="ghost-products"
      className="container px-4 pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-10 md:pb-12 space-y-10 sm:space-y-12"
      style={{ contentVisibility: "auto" }}
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold">Current Work</h2>
        <p className="text-muted-foreground">
          Some are finished enough to trust. Some are still being interrogated.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <h3 className="text-2xl font-bold">Markets</h3>
          <CategoryLink href="/markets">Explore Markets →</CategoryLink>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ghostGauge && (
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <CardTitle>{ghostGauge.name}</CardTitle>
                  <StatusBadge project={ghostGauge} />
                </div>
                <CardDescription>{ghostGauge.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Five-pillar composite Bitcoin risk model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Risk bands + Risk-Based DCA context</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <ProjectActions project={ghostGauge} />
              </CardFooter>
            </Card>
          )}

          {ghostAllocator && (
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <CardTitle>{ghostAllocator.name}</CardTitle>
                  <StatusBadge project={ghostAllocator} />
                </div>
                <CardDescription>{ghostAllocator.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-foreground/80">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Inside the hub:
                  </span>{" "}
                  GhostRegime · GhostYield · GhostFlow Preview
                </p>
                <p className="text-sm text-foreground/80">
                  One research hub for allocation, regime, income, and market
                  structure.
                </p>
              </CardContent>
              <CardFooter>
                <ProjectActions project={ghostAllocator} />
              </CardFooter>
            </Card>
          )}

          {trend100 && (
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <CardTitle>{trend100.name}</CardTitle>
                  <StatusBadge project={trend100} />
                </div>
                <CardDescription>{trend100.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Market leadership, participation, and overextension across
                      multiple decks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Historical + turbulence views for changing regime conditions
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <ProjectActions project={trend100} openLabel="Launch Trend100" />
              </CardFooter>
            </Card>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <h3 className="text-2xl font-bold">Sports Research</h3>
          <CategoryLink href="/sports-lab">Explore Sports Lab →</CategoryLink>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
          {gridiron && (
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <CardTitle>{gridiron.name}</CardTitle>
                  <StatusBadge project={gridiron} />
                </div>
                <CardDescription>{gridiron.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Power ratings and model-vs-market matchup research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Spreads, totals, and season-long results evaluation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <ProjectActions project={gridiron} openLabel="Current week slate" />
              </CardFooter>
            </Card>
          )}

          {ace && (
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <CardTitle>{ace.name}</CardTitle>
                  <StatusBadge project={ace} />
                </div>
                <CardDescription>{ace.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Daily Research Board ranks the slate for research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Historical + prospective validation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <ProjectActions project={ace} openLabel="Open research app" />
              </CardFooter>
            </Card>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <h3 className="text-2xl font-bold">On the Workbench</h3>
          <CategoryLink href="/coming-soon">View Roadmap →</CategoryLink>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Concept
                </p>
                <CardTitle className="text-base leading-snug">{item.title}</CardTitle>
                {item.tags[0] ? (
                  <CardDescription>{item.tags[0]}</CardDescription>
                ) : null}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
