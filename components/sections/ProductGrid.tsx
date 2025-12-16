import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { COMING_SOON, getHighlightItems } from "@/lib/comingSoon";

export function ProductGrid() {
  return (
    <section className="container px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Ghost Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* GhostGauge Card */}
        <Card>
          <CardHeader>
            <CardTitle>GhostGauge – Bitcoin Risk Dashboard</CardTitle>
            <CardDescription>
              A single score for Bitcoin risk and macro conditions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Combines macro, flows, momentum, and structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Simple 0–100 risk score</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Built for DCA and sanity checks, not day-trading hopium</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2">
            <Button asChild className="w-full sm:w-auto">
              <Link
                href={EXTERNAL_LINKS.ghostGaugeApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch app
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/ghostgauge">Learn more</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Ghost Allocator Card */}
        <Card>
          <CardHeader>
            <CardTitle>Ghost Allocator</CardTitle>
            <CardDescription>
              Pension-aware portfolio builder for a post-60/40 world. Maps a modern sleeve model onto your real 457 options (Voya + Schwab).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Pension / income-floor aware</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Sleeve-based allocation (post-60/40)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Maps to Voya core funds + Schwab ETFs</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2">
            <Button asChild className="w-full sm:w-auto">
              <Link
                href={EXTERNAL_LINKS.ghostAllocatorApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch app
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/ghost-allocator">Learn more</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Gridiron Edge – CFB Card */}
        <Card>
          <CardHeader>
            <CardTitle>Gridiron Edge – College Football</CardTitle>
            <CardDescription>
              Model-driven spreads, totals, and season-long PnL tracking.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Power ratings & model vs market edges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Week review + season review dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Built to test strategies, not just vibes</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2">
            <Button asChild className="w-full sm:w-auto">
              <Link
                href={EXTERNAL_LINKS.gridironEdgeApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Current week slate
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/sports-lab">Sports Lab overview</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Experiments Card */}
        <Card>
          <CardHeader>
            <CardTitle>Other Experiments</CardTitle>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Prototypes for problems too specific for normal software.
              </p>
              <p className="text-sm text-muted-foreground">
                If it keeps annoying me, it eventually shows up here with a UI.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Coming soon highlights ({getHighlightItems().length} of {COMING_SOON.length}):
              </p>
              <ul className="space-y-1 text-sm text-foreground/80">
                {getHighlightItems().map((item) => (
                  <li key={item.title} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/coming-soon">View roadmap</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

