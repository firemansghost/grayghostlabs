import type { Metadata } from "next";
import Link from "next/link";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { getHighlightItems } from "@/lib/comingSoon";
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
  const buildTimeFormatted = formatBuildTime(BUILD_TIME);
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
            <CardTitle>Live Products</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold">GhostGauge</h3>
                  <p className="text-sm text-muted-foreground">Bitcoin risk dashboard</p>
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1 sm:flex-initial">
                    <Link
                      href={EXTERNAL_LINKS.ghostGaugeApp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open app
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="ghost" className="flex-1 sm:flex-initial">
                    <AppLink href="/ghostgauge">Learn more</AppLink>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold">Ghost Allocator</h3>
                  <p className="text-sm text-muted-foreground">Pension-aware portfolio builder</p>
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1 sm:flex-initial">
                    <Link
                      href={EXTERNAL_LINKS.ghostAllocatorApp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open app
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="ghost" className="flex-1 sm:flex-initial">
                    <AppLink href="/ghost-allocator">Learn more</AppLink>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold">Gridiron Edge</h3>
                  <p className="text-sm text-muted-foreground">College football analytics</p>
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1 sm:flex-initial">
                    <Link
                      href={EXTERNAL_LINKS.gridironEdgeApp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open app
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="ghost" className="flex-1 sm:flex-initial">
                    <AppLink href="/sports/cfb/gridiron-edge">Learn more</AppLink>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Up */}
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Next Up</CardTitle>
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
            <CardTitle>Build Info</CardTitle>
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

