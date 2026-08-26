import type { Metadata } from "next";
import Link from "next/link";
import { AppLink } from "@/components/ui/app-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { getProjectById, getProjectsByCategory } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Markets | GrayGhost Labs",
  description:
    "Market tools from GrayGhost Labs: Bitcoin risk, pension-aware portfolio research, market regime analysis, income research, and market leadership monitoring.",
  path: "/markets",
  ogImage: "/og/default.png",
});

export default function MarketsPage() {
  const marketProjects = getProjectsByCategory("markets");
  const ghostAllocator = getProjectById("ghost-allocator");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Markets",
    description:
      "Market tools from GrayGhost Labs: Bitcoin risk, portfolio research, and market leadership monitoring.",
    url: `${SITE_URL}/markets`,
    mainEntityOfPage: `${SITE_URL}/markets`,
    publisher: {
      "@type": "Organization",
      name: "GrayGhost Labs",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "GrayGhost Labs market tools",
      itemListElement: marketProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        item: `${SITE_URL}${project.internalPath}`,
      })),
    },
  };

  return (
    <>
      <JsonLd id="jsonld-markets" data={jsonLd} />
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-markets"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Markets", path: "/markets" },
        ]}
      />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Markets</h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Risk, allocation, regime, and market plumbing. These are the tools
              I built because one dashboard was apparently never going to be
              enough.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Current tools</h2>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marketProjects.map((project) => (
              <Card key={project.id} className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <CardTitle className="text-2xl">{project.name}</CardTitle>
                    <Badge
                      variant={project.status === "LIVE" ? "default" : "outline"}
                      className="shrink-0 text-[10px] sm:text-xs tracking-wide"
                    >
                      {project.statusLabel}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>
                {project.id === "ghost-allocator" && ghostAllocator && (
                  <CardContent>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Inside the hub
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>GhostRegime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>GhostYield</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          GhostFlow — PREVIEW · ACTIVE BUILD{" "}
                          <Link
                            href={EXTERNAL_LINKS.ghostFlowApp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline underline-offset-2"
                          >
                            Open preview
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                )}
                <CardFooter className="flex flex-col sm:flex-row gap-2">
                  <Button asChild className="w-full sm:w-auto">
                    <Link
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open app
                      <span className="sr-only">: {project.name}</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <AppLink href={project.internalPath}>
                      Learn more
                      <span className="sr-only"> about {project.name}</span>
                    </AppLink>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
