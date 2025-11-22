import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { AboutSection } from "@/components/sections/AboutSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "GrayGhost Labs – Tools for Bitcoin, Ball, and Whatever Breaks Next",
  description:
    "GhostGauge for Bitcoin risk, Gridiron Edge for college football analytics, and more Ghost utilities as time and rage allow.",
  path: "/",
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


