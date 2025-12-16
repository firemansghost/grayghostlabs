import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ComingSoonList } from "./ComingSoonList";

export const metadata: Metadata = buildMetadata({
  title: "Coming Soon | GrayGhost Labs",
  description:
    "Upcoming tools and experiments across macro, geopolitics, crypto, and the fire service.",
  path: "/coming-soon",
  ogImage: "/og/coming-soon.png",
});

export default function ComingSoonPage() {
  return (
    <div className="container px-4 py-10 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Coming Soon: Weapons-Grade Curiosity
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            A list of future tools. Born in chaos. Assembled with caffeine. No
            timelines — just the next problems I&apos;m dumb enough to try
            solving.
          </p>
        </div>

        {/* Filterable Projects List */}
        <ComingSoonList />
      </div>
    </div>
  );
}

