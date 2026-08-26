import type { Metadata } from "next";
import Link from "next/link";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { getHighlightItems } from "@/lib/comingSoon";
import { getActiveResearchProjects, getLiveProjects } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";
import { BUILD_TIME, COMMIT_SHA, BRANCH, VERCEL_ENV } from "@/lib/buildInfo.generated";

export const metadata: Metadata = buildMetadata({
  title: "Status | GrayGhost Labs",
  description: "What's live, what's next, and what build is running.",
  path: "/status",
  ogImage: "/og/default.png",
});

function formatBuildTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

function formatCommitSha(sha: string | null): string {
  if (!sha) return "(local)";
  return sha.substring(0, 7);
}

export default function StatusPage() {
  const highlights = getHighlightItems().slice(0, 3);
  const liveProjects = getLiveProjects();
  const activeResearch = getActiveResearchProjects();
  const buildTimeFormatted = COMMIT_SHA ? formatBuildTime(BUILD_TIME) : "local";
  const commitShort = formatCommitSha(COMMIT_SHA);

  return (
    <>
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-status"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Status", path: "/status" },
        ]}
      />
      <PageJsonLd
        type="WebPage"
        name="Status"
        path="/status"
        description="What's live, what's next, and what build is running."
        id="jsonld-status-page"
      />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold">Status</h1>
          <p className="text-lg text-muted-foreground">
            What&apos;s live, what&apos;s next, and what build is running.
          </p>
        </div>

        {/* Live Products */}
        <Card className="glass-panel">
          <CardHeader>
            <h2 className="font-semibold leading-none tracking-tight">Live Products</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {liveProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.shortDescription}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild size="sm" variant={project.id === "ghost-allocator" ? "default" : "outline"} className="flex-1 sm:flex-initial">
                      <Link
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open app
                        <span className="sr-only">: {project.name}</span>
                      </Link>
                    </Button>
                    {project.id === "ghost-allocator" && (
                      <Button asChild size="sm" variant="outline" className="flex-1 sm:flex-initial">
                        <Link
                          href={EXTERNAL_LINKS.ghostYieldApp}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GhostYield
                        </Link>
                      </Button>
                    )}
                    <Button asChild size="sm" variant="ghost" className="flex-1 sm:flex-initial">
                      <AppLink href={project.internalPath}>
                        Learn more
                        <span className="sr-only"> about {project.name}</span>
                      </AppLink>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Research */}
        <Card className="glass-panel">
          <CardHeader>
            <h2 className="font-semibold leading-none tracking-tight">Active Research</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            {activeResearch.map((project) => (
              <div key={project.id} className="space-y-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {project.statusLabel}
                </p>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">▸</span>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-sm">{project.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild size="sm" className="w-full sm:w-auto">
                    <Link
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open research app
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="w-full sm:w-auto">
                    <AppLink href={project.internalPath}>
                      Learn more
                      <span className="sr-only"> about {project.name}</span>
                    </AppLink>
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Preview / Active Build */}
        <Card className="glass-panel">
          <CardHeader>
            <h2 className="font-semibold leading-none tracking-tight">Preview / Active Build</h2>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              PREVIEW · ACTIVE BUILD
            </p>
            <div className="flex items-start gap-3">
              <span className="text-primary mt-0.5">▸</span>
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-sm">GhostFlow</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Public preview of the passive-pressure / market-structure
                  dashboard inside Ghost Allocator. Tracks mechanical bid, ETF
                  flows, index concentration, and structural fragility. Not a
                  crash predictor.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm" className="w-full sm:w-auto">
                <Link
                  href={EXTERNAL_LINKS.ghostFlowApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open preview
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="w-full sm:w-auto">
                <AppLink href="/ghost-allocator">Ghost Allocator</AppLink>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Next Up */}
        <Card className="glass-panel">
          <CardHeader>
            <h2 className="font-semibold leading-none tracking-tight">Next Up</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                <AppLink href="/coming-soon">View full roadmap</AppLink>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Build Info */}
        <Card className="glass-panel">
          <CardHeader>
            <h2 className="font-semibold leading-none tracking-tight">Build Info</h2>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <dt className="font-semibold text-muted-foreground min-w-[100px]">Build time:</dt>
                <dd className="font-mono text-foreground">{buildTimeFormatted}</dd>
              </div>
              {COMMIT_SHA && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <dt className="font-semibold text-muted-foreground min-w-[100px]">Commit:</dt>
                  <dd className="font-mono text-foreground">{commitShort}</dd>
                </div>
              )}
              {BRANCH && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <dt className="font-semibold text-muted-foreground min-w-[100px]">Branch:</dt>
                  <dd className="font-mono text-foreground">{BRANCH}</dd>
                </div>
              )}
              {VERCEL_ENV && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <dt className="font-semibold text-muted-foreground min-w-[100px]">Environment:</dt>
                  <dd className="font-mono text-foreground">{VERCEL_ENV}</dd>
                </div>
              )}
              {!COMMIT_SHA && !BRANCH && !VERCEL_ENV && (
                <div className="text-xs text-muted-foreground italic">(local build)</div>
              )}
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}

