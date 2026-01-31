import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/ghostgauge",
    "/ghost-allocator",
    "/trend100",
    "/sports-lab",
    "/sports/cfb/gridiron-edge",
    "/coming-soon",
    "/about",
    "/press-kit",
    "/status",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}

