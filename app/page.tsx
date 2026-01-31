import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

// Code-split below-the-fold components to reduce initial JS
const NewsletterCTA = dynamic(() => import("@/components/sections/NewsletterCTA").then((mod) => ({ default: mod.NewsletterCTA })), {
  ssr: true, // Keep SSR for SEO
});

const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then((mod) => ({ default: mod.AboutSection })), {
  ssr: true, // Keep SSR for SEO
});

export const metadata = buildMetadata({
  title: "GrayGhost Labs – Tools for Bitcoin, Ball, and Whatever Breaks Next",
  description:
    "GhostGauge for Bitcoin risk, Gridiron Edge for college football analytics, and more Ghost utilities as time and rage allow.",
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
      "Featured tools from GrayGhost Labs across markets, crypto, and sports analytics.",
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
        position: 4,
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
        position: 5,
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


