import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About GrayGhost Labs",
  description:
    "GrayGhost Labs is a one-person lab built by a stubborn firefighter who mixes fire service experience, markets research, and sports models into oddly useful tools.",
  path: "/about",
  ogImage: "/og/default.png",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-about"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PageJsonLd
        type="AboutPage"
        name="About GrayGhost Labs"
        path="/about"
        description="Who GrayGhost is, why the tools exist, and how they're built."
        id="jsonld-about-page"
      />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold">About GrayGhost Labs</h1>

        {/* Origin Story */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Origin Story</h2>
          <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
            <p>
              GrayGhost Labs started as my digital junkyard: a place to park
              questions that wouldn&apos;t stay inside a spreadsheet. The tools
              are the coping mechanism.
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
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Who is GrayGhost?</h2>
          <p className="text-base text-foreground/80 leading-relaxed">
            GrayGhost is the pen name for a stubborn 30+ year firefighter who
            spends off days buried in macro charts, Bitcoin data, market
            structure, portfolio research, sports models, and whatever new
            dataset has created a question he can&apos;t leave alone. By day
            it&apos;s fire trucks and medical calls; by night it&apos;s
            spreadsheets, models, and asking why the market or the oddsmakers
            just did what they did.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            The persona is simple: take the curiosity of a markets nerd, the dark
            humor of someone who&apos;s seen too many bad days, and the skepticism
            of a noir detective who assumes every story—from governments to markets
            to models—is leaving something out.
          </p>
          <p className="text-base italic text-foreground/80 leading-relaxed">
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
                      – Build things that solve problems, not things designed
                      mainly to generate engagement.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <div>
                    <strong className="text-foreground">Show the receipts</strong>
                    <span className="text-foreground/80">
                      {" "}
                      – Freeze the rules, track the results, document the misses,
                      and don&apos;t rewrite the story after the fact.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <div>
                    <strong className="text-foreground">Uncertainty is allowed</strong>
                    <span className="text-foreground/80">
                      {" "}
                      – A useful model does not need to pretend certainty exists.
                      Confidence, limits, and missing data are part of the answer.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <div>
                    <strong className="text-foreground">If it breaks, say so</strong>
                    <span className="text-foreground/80">
                      {" "}
                      – Models decay. Data fails. Assumptions stop working. Fix
                      it, document it, or retire it.
                    </span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* How the tools are built */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">How the tools are built</h2>
          <p className="text-base text-foreground/80 leading-relaxed">
            Every project in GrayGhost Labs starts as a personal annoyance: a
            question that&apos;s hard to answer, data that&apos;s annoying to pull, or
            a problem that keeps showing up at work or in the markets. The workflow is
            the same every time:
          </p>
          <ol className="grid gap-x-8 gap-y-5 md:grid-cols-2">
            {[
              {
                title: "Start with the real question",
                body: "What decision or uncertainty are we actually trying to understand?",
              },
              {
                title: "Collect boring, defensible data",
                body: "Reliable inputs before clever models.",
              },
              {
                title: "Define the rules before looking at the answer",
                body: "Avoid changing the test just because the result is inconvenient.",
              },
              {
                title: "Track the receipts",
                body: "Backtests, prospective results, failures, missing data, and revisions.",
              },
              {
                title: "Fix it or kill it",
                body: "If the model does not survive contact with reality, change it or retire it.",
              },
              {
                title: "UI comes last",
                body: "A project becomes a public GrayGhost tool only after it is useful enough to earn one.",
              },
            ].map((step, index) => (
              <li key={step.title} className="flex items-start gap-3">
                <span className="font-mono text-sm font-semibold text-primary tabular-nums pt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1 min-w-0">
                  <p className="font-semibold text-foreground leading-snug">{step.title}</p>
                  <p className="text-base text-foreground/80 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-base text-foreground/80 leading-relaxed">
            If something makes it onto this site, it&apos;s because it earned its
            keep first on the builder&apos;s own time and money.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-base text-foreground/80 leading-relaxed">
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
          <Button asChild className="w-full sm:w-auto">
            <Link
              href={EXTERNAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
            >
              DM @GrayGhost on X
            </Link>
          </Button>
        </section>
      </div>
    </div>
    </>
  );
}

