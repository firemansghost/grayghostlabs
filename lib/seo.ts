import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string; // e.g. "/og/ghostgauge.png"
};

export function buildMetadata(config: SeoConfig): Metadata {
  const url = config.path ? `${SITE_URL}${config.path}` : SITE_URL;
  const ogImage = config.ogImage || "/og/default.png";
  const ogImageUrl = `${SITE_URL}${ogImage}`;

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName: "GrayGhost Labs",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [ogImageUrl],
    },
    metadataBase: new URL(SITE_URL),
  };
}



