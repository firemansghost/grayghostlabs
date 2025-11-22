import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="container px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            GrayGhost Labs
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Data-driven tools for Bitcoin, ball, and whatever breaks next.
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            GrayGhost Labs is a small collection of obsessively-built tools for
            markets and sports. Bitcoin risk dashboards, college football
            models, and other experiments that probably took way too many hours.
            No hype—just numbers, edges, and a bit of gallows humor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link
                href={EXTERNAL_LINKS.ghostGaugeApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open GhostGauge
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href={EXTERNAL_LINKS.gridironEdgeApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Gridiron Edge – CFB
              </Link>
            </Button>
          </div>
        </div>

        {/* Console Card */}
        <Card className="bg-card/50 border-accent/20">
          <CardContent className="p-6 font-mono text-sm">
            <div className="space-y-2 text-foreground/90">
              <div className="text-accent">Ghost Products Online:</div>
              <div className="pl-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-primary">▸</span>
                  <span>BTC risk score</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">▸</span>
                  <span>College football edges</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">▸</span>
                  <span>More experiments loading…</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

