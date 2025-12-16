import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/constants";

export function NewsletterCTA() {
  return (
    <section className="container px-4 mt-12">
      <div className="glass-panel-subtle px-6 py-8">
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">
              Newsletter – This Week in Macro Mayhem
            </h2>
            <p className="text-sm text-muted-foreground">
              A weekly-ish rundown of macro, Bitcoin, markets, and whatever
              blew up in the news this week, plus the occasional sports model rant. Charts,
              receipts, and gallows humor from the same brain that built
              GhostGauge, Ghost Allocator, and Gridiron Edge.
            </p>
            <p className="text-xs text-muted-foreground italic">
              The only newsletter where geopolitics and gallows humor collide
              head-on.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400">
              <Link
                href={EXTERNAL_LINKS.substack}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Substack
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              Prefer social?{" "}
              <Link
                href={EXTERNAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Follow @GrayGhost on X
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

