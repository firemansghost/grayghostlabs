import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, "..", "public");
const ogDir = join(publicDir, "og");

// Ensure directory exists
mkdirSync(ogDir, { recursive: true });

// OG image cards data
const CARDS = [
  {
    out: "home.png",
    title: "GrayGhost Labs",
    subtitle: "Tools for Bitcoin, ball, and whatever breaks next.",
  },
  {
    out: "ghostgauge.png",
    title: "GhostGauge",
    subtitle: "Bitcoin risk dashboard • G-Score bands • methodology-driven",
  },
  {
    out: "ghost-allocator.png",
    title: "Ghost Allocator",
    subtitle: "Pension-aware allocator for a post-60/40 world",
  },
  {
    out: "gridiron-edge.png",
    title: "Gridiron Edge",
    subtitle: "CFB analytics • edges vs market • model lab",
  },
  {
    out: "coming-soon.png",
    title: "Weapons-Grade Curiosity",
    subtitle: "Born in chaos. Assembled with caffeine. No timelines.",
  },
  {
    out: "default.png",
    title: "GrayGhost Labs",
    subtitle: "Noir tools. Real data. Minimal fluff.",
  },
];

// Generate SVG template for OG image
function generateSVG(title, subtitle) {
  return `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:0.22" />
      <stop offset="55%" style="stop-color:#0f172a;stop-opacity:0.95" />
    </linearGradient>
  </defs>
  
  <!-- Background with gradient -->
  <rect width="1200" height="630" fill="#0a1224"/>
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  
  <!-- Glass panel card -->
  <rect x="100" y="140" width="1000" height="350" rx="12" fill="rgba(10, 18, 36, 0.92)" stroke="rgba(148, 163, 184, 0.22)" stroke-width="1"/>
  <rect x="100" y="140" width="1000" height="350" rx="12" fill="none" stroke="rgba(15, 23, 42, 0.95)" stroke-width="1"/>
  
  <!-- Title -->
  <text 
    x="600" 
    y="280" 
    font-family="system-ui, -apple-system, sans-serif" 
    font-size="72" 
    font-weight="700" 
    fill="#f1f5f9" 
    text-anchor="middle" 
    letter-spacing="-0.02em"
  >${escapeXML(title)}</text>
  
  <!-- Subtitle -->
  <text 
    x="600" 
    y="340" 
    font-family="system-ui, -apple-system, sans-serif" 
    font-size="28" 
    font-weight="400" 
    fill="#94a3b8" 
    text-anchor="middle"
  >${escapeXML(subtitle)}</text>
  
  <!-- Emerald accent line -->
  <line 
    x1="200" 
    y1="380" 
    x2="1000" 
    y2="380" 
    stroke="#22c55e" 
    stroke-width="3" 
    stroke-linecap="round"
    opacity="0.6"
  />
  
  <!-- GGL monogram in corner -->
  <text 
    x="1100" 
    y="580" 
    font-family="system-ui, -apple-system, sans-serif" 
    font-size="32" 
    font-weight="700" 
    fill="#64748b" 
    text-anchor="end" 
    letter-spacing="-0.02em"
    opacity="0.5"
  >GGL</text>
</svg>
`;
}

// Escape XML special characters
function escapeXML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Generate OG images
async function generateOGImages() {
  for (const card of CARDS) {
    const svgBuffer = Buffer.from(generateSVG(card.title, card.subtitle));

    await sharp(svgBuffer)
      .resize(1200, 630)
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(join(ogDir, card.out));

    console.log(`✓ Generated ${card.out}`);
  }

  console.log("\n✅ All OG images generated successfully!");
}

generateOGImages().catch((error) => {
  console.error("Error generating OG images:", error);
  process.exit(1);
});


