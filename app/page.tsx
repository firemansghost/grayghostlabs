import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
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
  return (
    <>
      <Hero />
      <ProductGrid />
      <NewsletterCTA />
      <AboutSection />
    </>
  );
}


