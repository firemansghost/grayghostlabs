import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";

export function ProductGrid() {
  return (
    <section className="container px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Ghost Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
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
              <Link href={EXTERNAL_LINKS.ghostGauge} target="_blank">
                Launch app
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/ghostgauge">Learn more</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* GhostEdge – CFB Card */}
        <Card>
          <CardHeader>
            <CardTitle>GhostEdge – College Football</CardTitle>
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
              <Link href={EXTERNAL_LINKS.ghostEdgeCFB} target="_blank">
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
            <CardDescription>
              Ghost projects that may or may not ruin some actuary&apos;s day.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Firefighters&apos; 457 / retirement tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Medical bill dispute helper</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>More Ghost utilities as time (and rage) allow</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="#">Get updates</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

