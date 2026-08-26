import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Trend100 | GrayGhost Labs",
  description:
    "A market leadership and regime dashboard tracking participation, overextension, turbulence, and market plumbing across multiple decks. A flashlight, not a prophecy.",
  path: "/trend100",
  ogImage: "/og/default.png",
});

export default function Trend100Page() {
  const publisher = {
    "@type": "Organization",
    name: "GrayGhost Labs",
    url: SITE_URL,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Trend100",
    description:
      "A market leadership and regime dashboard tracking participation, overextension, turbulence, and market plumbing across multiple decks.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    url: EXTERNAL_LINKS.trend100App,
    mainEntityOfPage: `${SITE_URL}/trend100`,
    publisher,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <JsonLd id="jsonld-trend100" data={jsonLd} />
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-trend100"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Markets", path: "/markets" },
          { name: "Trend100", path: "/trend100" },
        ]}
      />
      <PageJsonLd
        type="WebPage"
        name="Trend100"
        path="/trend100"
        description="A market leadership and regime dashboard tracking participation, overextension, turbulence, and market plumbing across multiple decks."
        id="jsonld-trend100-page"
      />

      <div className="container px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Trend100</h1>
            <p className="text-xl text-muted-foreground">
              Market leadership and regime context across multiple decks
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Trend100 tracks participation, overextension, turbulence, and
              market plumbing across multiple decks. Health and heat help
              distinguish a broad trend from froth; historical and turbulence
              views add regime context. It does not predict the next move.
            </p>
          </div>

          {/* Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">•</span>
                <div>
                  <strong className="text-foreground">Multiple decks</strong>
                  <span className="text-foreground/80">
                    {" "}
                    – leadership and macro-sensitive groups, not a single 100-ticker list.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">•</span>
                <div>
                  <strong className="text-foreground">Health + heat</strong>
                  <span className="text-foreground/80">
                    {" "}
                    – participation versus overextension, so you can tell a broad trend from froth.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">•</span>
                <div>
                  <strong className="text-foreground">Historical health</strong>
                  <span className="text-foreground/80">
                    {" "}
                    – look back at how participation has evolved, not just today&apos;s snapshot.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">•</span>
                <div>
                  <strong className="text-foreground">Turbulence and plumbing</strong>
                  <span className="text-foreground/80">
                    {" "}
                    – regime and market-structure context when conditions get noisy.
                  </span>
                </div>
              </li>
            </ul>
          </section>

          {/* How to read it */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">How to read it</h2>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Health = broad participation (trend strength)</li>
              <li>Heat / % Upper = how stretched it is</li>
              <li>Turbulence and plumbing = regime context, not a forecast</li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="flex justify-center">
            <Card className="w-full max-w-md">
              <CardContent className="p-8 space-y-6 text-center">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild size="lg">
                    <Link
                      href={EXTERNAL_LINKS.trend100App}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Launch Trend100
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <AppLink href="/markets">
                      Back to Markets
                    </AppLink>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Not financial advice. It&apos;s a flashlight, not a prophecy.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}

