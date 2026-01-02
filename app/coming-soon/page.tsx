import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { SITE_URL } from "@/lib/constants";
import { COMING_SOON } from "@/lib/comingSoon";
import { buildMetadata } from "@/lib/seo";
import { ComingSoonList } from "./ComingSoonList";

export const metadata: Metadata = buildMetadata({
  title: "Coming Soon | GrayGhost Labs",
  description:
    "Upcoming tools and experiments across macro, geopolitics, crypto, and the fire service.",
  path: "/coming-soon",
  ogImage: "/og/coming-soon.png",
});

export default function ComingSoonPage() {
  const publisher = {
    "@type": "Organization",
    name: "GrayGhost Labs",
    url: SITE_URL,
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Coming Soon: Weapons-Grade Curiosity",
    description: "A list of future tools. Born in chaos. Assembled with caffeine.",
    url: `${SITE_URL}/coming-soon`,
    mainEntityOfPage: `${SITE_URL}/coming-soon`,
    publisher,
    itemListElement: COMING_SOON.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Thing",
        name: p.title,
        description: p.description,
        keywords: (p.tags || []).join(", "),
        publisher,
      },
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd
        id="jsonld-breadcrumb-coming-soon"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Coming Soon", path: "/coming-soon" },
        ]}
      />
      <JsonLd id="jsonld-coming-soon-itemlist" data={itemListJsonLd} />
      <PageJsonLd
        type="WebPage"
        name="Coming Soon"
        path="/coming-soon"
        description="A list of future tools. Born in chaos. Assembled with caffeine."
        id="jsonld-coming-soon-page"
      />
      <div className="container px-4 py-10 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Coming Soon: Weapons-Grade Curiosity
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            A list of future tools. Born in chaos. Assembled with caffeine. No
            timelines — just the next problems I&apos;m dumb enough to try
            solving.
          </p>
        </div>

        {/* Filterable Projects List */}
        <ComingSoonList />
      </div>
    </div>
    </>
  );
}

