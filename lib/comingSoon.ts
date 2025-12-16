export type ComingSoonItem = {
  title: string;
  description: string;
  tags: string[];
};

export const COMING_SOON: ComingSoonItem[] = [
  {
    title: "Global Narrative Engine",
    description:
      "Compares how the same world event is reported across 7–8 countries/languages. Finds alignment, omissions, spin — then produces one blunt summary.",
    tags: ["Geopolitics", "Media", "AI"],
  },
  {
    title: "Narrative Map",
    description:
      "Visualizes how narratives spread across platforms and time. Tracks what gets amplified, what gets buried, and where the gaps are.",
    tags: ["Geopolitics", "Media", "Visualization"],
  },
  {
    title: "Propaganda Comparator",
    description:
      "Side-by-side comparison of how different governments/media frame the same event. No commentary, just the receipts.",
    tags: ["Geopolitics", "Media", "Analysis"],
  },
  {
    title: "Poverty Line Re-Calibrator",
    description:
      "Takes official poverty thresholds and adjusts for real-world costs (housing, healthcare, food). Shows the gap between official numbers and actual survival math.",
    tags: ["Economics", "Policy", "Data"],
  },
  {
    title: "Rate My Collapse",
    description:
      "Tracks leading indicators of institutional/systemic breakdown. Not doomer porn — just early warning signals that most people ignore until it's too late.",
    tags: ["Macro", "Systems", "Risk"],
  },
  {
    title: "WarCast AI",
    description:
      "AI-powered analysis of conflict escalation patterns. Reads between the lines of official statements, troop movements, and economic signals to flag when things are about to get real.",
    tags: ["Geopolitics", "AI", "Risk"],
  },
  {
    title: "GhostGauge: Nations",
    description:
      "Extends the GhostGauge risk framework to sovereign debt, currency stability, and political risk. One score per country, updated weekly.",
    tags: ["Macro", "Sovereign", "Risk"],
  },
  {
    title: "Stablecoin Reality Check",
    description:
      "Real-time audit of stablecoin reserves, flows, and de-pegging risk. No marketing spin — just the numbers that matter.",
    tags: ["Crypto", "Stablecoins", "Risk"],
  },
  {
    title: "Dollar Endgame Simulator",
    description:
      "Models different scenarios for dollar reserve status erosion. Not predicting the end — just showing what the math looks like if current trends continue.",
    tags: ["Macro", "Currency", "Simulation"],
  },
  {
    title: "Incident Command AI Trainer",
    description:
      "AI-powered training scenarios for fire service incident commanders. Simulates complex multi-unit responses with realistic chaos and decision points.",
    tags: ["Fire Service", "Training", "AI"],
  },
  {
    title: "ESO Sanity Tools",
    description:
      "Tools for Emergency Service Officers: shift planning, resource allocation, and sanity checks for when the system is asking too much.",
    tags: ["Fire Service", "Operations", "Tools"],
  },
  {
    title: "GhostBrief (working title)",
    description:
      "AI-powered briefing generator for complex topics. Takes dense reports, policy docs, or news cycles and produces executive summaries that don't leave out the important parts.",
    tags: ["AI", "Productivity", "Media"],
  },
];

// Curated highlights for homepage card (3 items)
export const COMING_SOON_HIGHLIGHTS = [
  "Global Narrative Engine",
  "Rate My Collapse",
  "GhostGauge: Nations",
] as const;

// Helper to get highlight items from COMING_SOON
export function getHighlightItems() {
  return COMING_SOON.filter((item) =>
    COMING_SOON_HIGHLIGHTS.includes(item.title as any)
  );
}

// Get all unique tags from COMING_SOON
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  COMING_SOON.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

