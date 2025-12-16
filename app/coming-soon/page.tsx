import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ComingSoonList } from "./ComingSoonList";

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

        {/* Filterable Projects List */}
        <ComingSoonList />
      </div>
    </div>
  );
}

