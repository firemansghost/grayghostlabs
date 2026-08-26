import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/markets",
    "/ghostgauge",
    "/ghost-allocator",
    "/trend100",
    "/sports-lab",
    "/sports/cfb/gridiron-edge",
    "/sports/mlb/ace-suppressor",
    "/coming-soon",
    "/about",
    "/press-kit",
    "/status",
  ];

  const hubPaths = new Set(["/markets", "/sports-lab"]);

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : hubPaths.has(path) ? 0.8 : 0.7,
  }));
}
