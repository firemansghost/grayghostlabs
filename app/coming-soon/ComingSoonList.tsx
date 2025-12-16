"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { COMING_SOON, getAllTags, type ComingSoonItem } from "@/lib/comingSoon";

export function ComingSoonList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = getAllTags();

  const filteredItems = useMemo(() => {
    if (!selectedTag) {
      return COMING_SOON;
    }
    return COMING_SOON.filter((item) => item.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <>
      {/* Filter Row */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">Filter by tag:</span>
          <div className="flex overflow-x-auto gap-2 pb-1 -mx-1 px-1 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap">
            <button
              onClick={() => setSelectedTag(null)}
              className={`text-xs px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                selectedTag === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-xs px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Showing {filteredItems.length} of {COMING_SOON.length}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
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
    </>
  );
}

