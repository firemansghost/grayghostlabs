import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About | GrayGhost Labs",
  description: "Learn about GrayGhost Labs, a one-person lab building data-driven tools for Bitcoin, sports, and more.",
};

export default function AboutPage() {
  return (
    <div className="container px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold">About GrayGhost Labs</h1>

        {/* Origin Story */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Origin Story</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              GrayGhost Labs started as a firefighter + ex-IT guy + macro/crypto/sports
              nerd who got tired of tools that didn&apos;t exist or tools that
              existed but were full of hype.
            </p>
            <p>
              Everything here was built first for personal use and friends, then
              made public because if it&apos;s useful to one stubborn
              firefighter who thinks numbers beat vibes, it might be useful to
              others.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Philosophy</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <div>
                    <strong className="text-foreground">Tools &gt; takes</strong>
                    <span className="text-foreground/80">
                      {" "}
                      – Build things that solve problems, not things that solve
                      for engagement.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <div>
                    <strong className="text-foreground">
                      Show the PnL, not just the winner screenshots
                    </strong>
                    <span className="text-foreground/80">
                      {" "}
                      – If a model can&apos;t beat the market over time, it&apos;s
                      not an edge. Transparency matters.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <div>
                    <strong className="text-foreground">
                      No subscription funnel right now
                    </strong>
                    <span className="text-foreground/80">
                      {" "}
                      – Build trust first, then maybe we&apos;ll talk. For now,
                      everything is free and public.
                    </span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-foreground/80">
            Find me on{" "}
            <Link
              href={siteConfig.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              X
            </Link>{" "}
            or reach out via{" "}
            <Link
              href={siteConfig.links.email}
              className="text-primary hover:underline"
            >
              email
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

