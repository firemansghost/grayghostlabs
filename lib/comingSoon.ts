export type ComingSoonFamilyId = "macro-markets" | "intelligence" | "fire-service";

export type ComingSoonItem = {
  title: string;
  description: string;
  tags: string[];
  family: ComingSoonFamilyId;
};

export const COMING_SOON_FAMILIES: {
  id: ComingSoonFamilyId;
  title: string;
  descriptor: string;
}[] = [
  {
    id: "macro-markets",
    title: "Macro & Markets",
    descriptor:
      "Stress, structure, currencies, and the machinery underneath the headlines.",
  },
  {
    id: "intelligence",
    title: "Intelligence & Analysis",
    descriptor:
      "Tools for comparing narratives, escalation signals, and information overload.",
  },
  {
    id: "fire-service",
    title: "Fire Service",
    descriptor: "Operational and training ideas built around problems that actually exist.",
  },
];

export const COMING_SOON: ComingSoonItem[] = [
  {
    title: "Global Narrative Engine",
    description:
      "One event. Many spins. A narrative-intelligence concept for comparing how the same event is framed across countries, languages, and media systems—showing what gets emphasized, omitted, repeated, or changed as the story moves.",
    tags: ["Geopolitics", "Media", "AI", "Analysis", "Visualization"],
    family: "intelligence",
  },
  {
    title: "GrayGhost Plumbing Dashboard",
    description:
      "A macro-stress dashboard concept for combining pressure signals across shipping, energy, sanctions, industrial activity, fiscal stress, and other system plumbing into one readable view of where strain is building.",
    tags: ["Macro", "Dashboard", "Risk"],
    family: "macro-markets",
  },
  {
    title: "Poverty Line Re-Calibrator",
    description:
      "Reworks official poverty thresholds using real-world housing, healthcare, food, and regional cost assumptions to show how official definitions compare with actual household survival math.",
    tags: ["Economics", "Policy", "Data"],
    family: "macro-markets",
  },
  {
    title: "Rate My Collapse",
    description:
      "An experimental systemic-risk dashboard for tracking the kinds of institutional, fiscal, infrastructure, and social stress indicators that usually get discussed separately.",
    tags: ["Macro", "Systems", "Risk"],
    family: "macro-markets",
  },
  {
    title: "WarCast AI",
    description:
      "A conflict-analysis research concept for organizing escalation indicators across official statements, force posture, logistics, economic signals, and diplomatic behavior—without pretending war can be reduced to one magic probability.",
    tags: ["Geopolitics", "AI", "Risk"],
    family: "intelligence",
  },
  {
    title: "GhostGauge: Nations",
    description:
      "A concept for extending the GhostGauge framework to sovereign risk using debt, currency, fiscal, external-balance, and political-stability indicators.",
    tags: ["Macro", "Sovereign", "Risk"],
    family: "macro-markets",
  },
  {
    title: "Stablecoin Reality Check",
    description:
      "A stablecoin risk dashboard concept combining reserve disclosures, flows, liquidity, concentration, and de-pegging signals into a clearer view of what sits behind the peg.",
    tags: ["Crypto", "Stablecoins", "Risk"],
    family: "macro-markets",
  },
  {
    title: "Dollar Endgame Simulator",
    description:
      "A scenario simulator for exploring what gradual erosion of dollar reserve dominance could mean for rates, capital flows, currencies, commodities, and U.S. financing conditions.",
    tags: ["Macro", "Currency", "Simulation"],
    family: "macro-markets",
  },
  {
    title: "Incident Command AI Trainer",
    description:
      "An AI-assisted fire-service training concept built around evolving incident-command scenarios, incomplete information, resource constraints, and decision points.",
    tags: ["Fire Service", "Training", "AI"],
    family: "fire-service",
  },
  {
    title: "ESO Sanity Tools",
    description:
      "A collection of practical fire-service operations utilities for shift planning, resource checks, workflow sanity checks, and other small problems that should not require another spreadsheet.",
    tags: ["Fire Service", "Operations", "Tools"],
    family: "fire-service",
  },
  {
    title: "GhostBrief (working title)",
    description:
      "A briefing-tool concept for turning dense reports, policy documents, research, and fast-moving news cycles into concise executive summaries while preserving sources, uncertainty, and the details that actually matter.",
    tags: ["AI", "Productivity", "Media"],
    family: "intelligence",
  },
];

export const COMING_SOON_HIGHLIGHTS = [
  "Global Narrative Engine",
  "GrayGhost Plumbing Dashboard",
  "Incident Command AI Trainer",
] as const;

export function getHighlightItems() {
  const order: readonly string[] = COMING_SOON_HIGHLIGHTS;
  return COMING_SOON.filter((item) => order.includes(item.title)).sort(
    (a, b) => order.indexOf(a.title) - order.indexOf(b.title)
  );
}

export function getComingSoonByFamily(familyId: ComingSoonFamilyId) {
  return COMING_SOON.filter((item) => item.family === familyId);
}
