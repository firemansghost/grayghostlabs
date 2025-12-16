import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata(config: SeoConfig): Metadata {
  const url = config.path ? `${SITE_URL}${config.path}` : SITE_URL;

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName: "GrayGhost Labs",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
    },
    metadataBase: new URL(SITE_URL),
  };
}



