import { siteConfig } from "@/config/site";

export const EXTERNAL_LINKS = {
  ghostGauge: "https://ghostgauge.com",
  ghostEdgeCFB: "https://gridiron-edge-v1.vercel.app",
  twitter: siteConfig.links.x,
  substack: siteConfig.links.newsletter,
  x: siteConfig.links.x,
  newsletter: siteConfig.links.newsletter,
  email: siteConfig.links.email,
} as const;

export const SITE_NAME = siteConfig.name;

