import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/constants";

export function NewsletterCTA() {
  return (
    <section className="container px-4 mt-8 sm:mt-12" style={{ contentVisibility: "auto" }}>
      <div className="glass-panel-subtle px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">
              Newsletter – This Week in Macro Mayhem
            </h2>
            <p className="text-sm text-muted-foreground">
              A weekly-ish rundown of macro, markets, Bitcoin, geopolitics, and
              whatever broke the narrative this week. Charts, receipts, and
              gallows humor from the same lab that keeps building tools to make
              sense of it.
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

