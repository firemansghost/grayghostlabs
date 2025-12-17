import { SITE_URL } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

interface Breadcrumb {
  name: string;
  path: string;
}

interface BreadcrumbJsonLdProps {
  crumbs: Breadcrumb[];
  id?: string;
}

export function BreadcrumbJsonLd({ crumbs, id }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };

  return <JsonLd id={id} data={jsonLd} />;
}

