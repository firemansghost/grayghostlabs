import Link from "next/link";
import { AppLink } from "@/components/ui/app-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { COMING_SOON, getHighlightItems } from "@/lib/comingSoon";
import { getProjectById, type Project } from "@/lib/projects";

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
      className="container px-4 py-10 sm:py-14 md:py-16 space-y-12 sm:space-y-14"
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
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <AppLink href="/markets">Explore Markets</AppLink>
          </Button>
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
                    <span>Five-pillar composite risk model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Risk bands + Risk-Based DCA context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Transparent methodology, not black-box signals</span>
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
              <CardContent>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Inside the hub
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong className="text-foreground/90">GhostRegime</strong>
                      {" "}
                      — market regime and risk posture
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong className="text-foreground/90">GhostYield</strong>
                      {" "}
                      — income-sleeve research
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong className="text-foreground/90">GhostFlow</strong>
                      {" "}
                      — PREVIEW · ACTIVE BUILD
                    </span>
                  </li>
                </ul>
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
                    <span>Multiple market decks covering leadership and macro-sensitive groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Health + heat distinguish broad trend from froth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Historical and turbulence views help identify changing regime conditions</span>
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
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <AppLink href="/sports-lab">Explore Sports Lab</AppLink>
          </Button>
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
                    <span>Power ratings and model-vs-market matchup analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Spreads, totals, and results evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Active 2026 season work — research, not a claimed betting edge</span>
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
                    <span>No active betting recommendations</span>
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
        <h3 className="text-2xl font-bold">On the Workbench</h3>
        <Card>
          <CardHeader>
            <CardTitle>Coming soon highlights</CardTitle>
            <CardDescription>
              {highlights.length} of {COMING_SOON.length} future projects currently in the window.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground/80">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <AppLink href="/coming-soon">View Roadmap</AppLink>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
