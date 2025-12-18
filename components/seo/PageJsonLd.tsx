import { SITE_URL } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

interface PageJsonLdProps {
  type: "WebPage" | "AboutPage" | "CollectionPage";
  name: string;
  path: string;
  description?: string;
  id?: string;
}

export function PageJsonLd({ type, name, path, description, id }: PageJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "GrayGhost Labs",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "GrayGhost Labs",
      url: SITE_URL,
    },
    ...(description ? { description } : {}),
  };

  return <JsonLd id={id} data={jsonLd} />;
}

