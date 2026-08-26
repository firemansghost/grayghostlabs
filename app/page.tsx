import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { AboutSection } from "@/components/sections/AboutSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "GrayGhost Labs – Markets, Models, and Whatever Breaks Next",
  description:
    "GrayGhost Labs builds data-driven tools for Bitcoin risk, portfolio research, market structure, and sports analytics—plus experiments born from problems too specific for normal software.",
  path: "/",
  ogImage: "/og/home.png",
});

export default function Home() {
  const publisher = {
    "@type": "Organization",
    name: "GrayGhost Labs",
    url: SITE_URL,
  };

  const homeItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "GrayGhost Labs — Featured Tools",
    description:
      "Featured tools from GrayGhost Labs across markets, sports research, and the Labs roadmap.",
    url: SITE_URL,
    mainEntityOfPage: SITE_URL,
    publisher,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebApplication",
          name: "GhostGauge",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          url: EXTERNAL_LINKS.ghostGaugeApp,
          mainEntityOfPage: `${SITE_URL}/ghostgauge`,
          publisher,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebApplication",
          name: "Ghost Allocator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          url: EXTERNAL_LINKS.ghostAllocatorApp,
          mainEntityOfPage: `${SITE_URL}/ghost-allocator`,
          publisher,
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "WebApplication",
          name: "Trend100",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          url: EXTERNAL_LINKS.trend100App,
          mainEntityOfPage: `${SITE_URL}/trend100`,
          publisher,
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "WebApplication",
          name: "Gridiron Edge",
          applicationCategory: "SportsApplication",
          operatingSystem: "Any",
          url: EXTERNAL_LINKS.gridironEdgeApp,
          mainEntityOfPage: `${SITE_URL}/sports/cfb/gridiron-edge`,
          publisher,
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "WebApplication",
          name: "Ace Suppressor",
          applicationCategory: "SportsApplication",
          operatingSystem: "Any",
          url: EXTERNAL_LINKS.aceSuppressorApp,
          mainEntityOfPage: `${SITE_URL}/sports/mlb/ace-suppressor`,
          publisher,
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "WebPage",
          name: "Coming Soon",
          url: `${SITE_URL}/coming-soon`,
          mainEntityOfPage: `${SITE_URL}/coming-soon`,
          publisher,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd id="jsonld-home-itemlist" data={homeItemListJsonLd} />
      <Hero />
      <ProductGrid />
      <NewsletterCTA />
      <AboutSection />
    </>
  );
}


