import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { COMING_SOON } from "@/lib/comingSoon";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Coming Soon | GrayGhost Labs",
  description:
    "Upcoming tools and experiments across macro, geopolitics, crypto, and the fire service.",
  path: "/coming-soon",
});

export default function ComingSoonPage() {
  return (
    <div className="container px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Coming Soon: Weapons-Grade Curiosity
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            This is the roadmap. Projects that keep annoying me eventually get
            built. No timelines, no promises—just what&apos;s cooking.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMING_SOON.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-border">
          <Button asChild size="lg">
            <Link
              href={EXTERNAL_LINKS.substack}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read TWIMM on Substack
            </Link>
          </Button>
          <Link
            href={EXTERNAL_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Follow @GrayGhost on X
          </Link>
        </div>

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
          >
            <span aria-hidden="true" className="mr-1">
              ←
            </span>
            Back to GrayGhost Labs
          </Link>
        </div>
      </div>
    </div>
  );
}

