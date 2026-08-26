import { EXTERNAL_LINKS } from "@/lib/constants";

export type ProjectCategory = "markets" | "sports";

export type ProjectStatus = "LIVE" | "ACTIVE_RESEARCH" | "PREVIEW_ACTIVE_BUILD";

export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  statusLabel: string;
  shortDescription: string;
  internalPath: string;
  externalUrl: string;
};

export const PROJECTS: Project[] = [
  {
    id: "ghostgauge",
    name: "GhostGauge",
    category: "markets",
    status: "LIVE",
    statusLabel: "LIVE",
    shortDescription:
      "Five-pillar Bitcoin risk dashboard built around a daily 0–100 G-Score.",
    internalPath: "/ghostgauge",
    externalUrl: EXTERNAL_LINKS.ghostGaugeApp,
  },
  {
    id: "ghost-allocator",
    name: "Ghost Allocator",
    category: "markets",
    status: "LIVE",
    statusLabel: "LIVE",
    shortDescription:
      "Pension-aware portfolio research hub spanning allocation, regime, income, and market-structure research.",
    internalPath: "/ghost-allocator",
    externalUrl: EXTERNAL_LINKS.ghostAllocatorApp,
  },
  {
    id: "trend100",
    name: "Trend100",
    category: "markets",
    status: "LIVE",
    statusLabel: "LIVE",
    shortDescription:
      "Market leadership and regime dashboard tracking participation, overextension, turbulence, and market plumbing.",
    internalPath: "/trend100",
    externalUrl: EXTERNAL_LINKS.trend100App,
  },
  {
    id: "gridiron-edge",
    name: "Gridiron Edge",
    category: "sports",
    status: "LIVE",
    statusLabel: "LIVE",
    shortDescription:
      "College-football analytics for power ratings, matchup research, model-vs-market comparisons, and results tracking.",
    internalPath: "/sports/cfb/gridiron-edge",
    externalUrl: EXTERNAL_LINKS.gridironEdgeApp,
  },
  {
    id: "ace-suppressor",
    name: "Ace Suppressor",
    category: "sports",
    status: "ACTIVE_RESEARCH",
    statusLabel: "ACTIVE RESEARCH · 2027 SEASON BUILD",
    shortDescription:
      "MLB totals research, daily slate ranking, historical testing, and prospective model validation.",
    internalPath: "/sports/mlb/ace-suppressor",
    externalUrl: EXTERNAL_LINKS.aceSuppressorApp,
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return PROJECTS.filter((project) => project.category === category);
}

export function getLiveProjects(): Project[] {
  return PROJECTS.filter((project) => project.status === "LIVE");
}

export function getActiveResearchProjects(): Project[] {
  return PROJECTS.filter((project) => project.status === "ACTIVE_RESEARCH");
}
