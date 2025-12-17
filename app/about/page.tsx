import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About GrayGhost Labs",
  description:
    "GrayGhost Labs is a one-person lab built by a stubborn firefighter who mixes fire service experience, macro analysis, and sports models into oddly useful tools.",
  path: "/about",
  ogImage: "/og/default.png",
});

export default function AboutPage() {
  return (
    <div className="container px-4 py-10 sm:py-14 md:py-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold">About GrayGhost Labs</h1>

        {/* Origin Story */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Origin Story</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              GrayGhost Labs started as my digital junkyard: ex-IT professional, macro/crypto/sports data addict, and yes… firefighter. The tools are the coping mechanism.
            </p>
            <p>
              Everything here was built first for personal use and friends, then
              made public because if it&apos;s useful to one stubborn
              firefighter who thinks numbers beat vibes, it might be useful to
              others.
            </p>
          </div>
        </section>

        {/* Who is GrayGhost? */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Who is GrayGhost?</h2>
          <p className="text-sm text-muted-foreground">
            GrayGhost is the pen name for a stubborn 30+ year firefighter who
            spends off days buried in macro charts, Bitcoin data, and college
            football box scores. By day it&apos;s fire trucks and medical calls; by
            night it&apos;s spreadsheets, models, and asking why the market or the
            oddsmakers just did what they did.
          </p>
          <p className="text-sm text-muted-foreground">
            The persona is simple: take the curiosity of a markets nerd, the dark
            humor of someone who&apos;s seen too many bad days, and the skepticism
            of a noir detective who assumes every story—from governments to markets
            to models—is leaving something out.
          </p>
          <p className="text-sm italic text-muted-foreground">
            &quot;In life, there are no black and white answers, only shades of
            gray.&quot; That&apos;s the working assumption behind GrayGhost Labs: the
            tools don&apos;t promise certainty, they just try to make the uncertainty
            a little more honest.
          </p>
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

        {/* How the tools are built */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How the tools are built</h2>
          <p className="text-sm text-muted-foreground">
            Every project in GrayGhost Labs starts as a personal annoyance: a
            question that&apos;s hard to answer, data that&apos;s annoying to pull, or
            a problem that keeps showing up at work or in the markets. The workflow is
            the same every time:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>
              Start with the real question – What decision am I trying to make, or
              what lie is the chart telling me?
            </li>
            <li>
              Collect boring but reliable data – Market feeds, public stats, or
              internal records.
            </li>
            <li>
              Build a simple, testable model – Something that can be checked against
              history, not just vibes.
            </li>
            <li>
              Track results over time – If it doesn&apos;t hold up, fix it or throw
              it away.
            </li>
            <li>
              Only then put a UI on top – Once it&apos;s useful, it becomes a
              GhostGauge view, a Gridiron Edge screen, or some other ghost utility.
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            If something makes it onto this site, it&apos;s because it earned its
            keep first on the builder&apos;s own time and money.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-foreground/80">
            Find me on{" "}
            <Link
              href={EXTERNAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              X
            </Link>
            {" "}— DMs are the fastest way. If you&apos;ve got a problem worth building for, start there.
          </p>
        </section>
      </div>
    </div>
  );
}

