import sharp from "sharp";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, "..", "public");
const iconsDir = join(publicDir, "icons");

// Ensure directories exist
mkdirSync(iconsDir, { recursive: true });

function pngToIco(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const directory = Buffer.alloc(16);
  directory.writeUInt8(32, 0);
  directory.writeUInt8(32, 1);
  directory.writeUInt8(0, 2);
  directory.writeUInt8(0, 3);
  directory.writeUInt16LE(1, 4);
  directory.writeUInt16LE(32, 6);
  directory.writeUInt32LE(pngBuffer.length, 8);
  directory.writeUInt32LE(22, 12);

  return Buffer.concat([header, directory, pngBuffer]);
}

// SVG template for GrayGhost Labs icon
// Dark background (#020617), light slate text, subtle emerald accent
const svgTemplate = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#020617"/>
  <text 
    x="256" 
    y="320" 
    font-family="system-ui, -apple-system, sans-serif" 
    font-size="200" 
    font-weight="700" 
    fill="#e2e8f0" 
    text-anchor="middle" 
    letter-spacing="-0.02em"
  >GGL</text>
  <line 
    x1="156" 
    y1="360" 
    x2="356" 
    y2="360" 
    stroke="#22c55e" 
    stroke-width="4" 
    stroke-linecap="round"
  />
</svg>
`;

// Generate icons
async function generateIcons() {
  const svgBuffer = Buffer.from(svgTemplate);

  // Generate icon-192.png
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(join(iconsDir, "icon-192.png"));

  console.log("✓ Generated icon-192.png");

  // Generate icon-512.png
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(join(iconsDir, "icon-512.png"));

  console.log("✓ Generated icon-512.png");

  // Generate apple-touch-icon.png (180×180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, "apple-touch-icon.png"));

  console.log("✓ Generated apple-touch-icon.png");

  // Generate favicon.png (32×32)
  const faviconPng = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  await sharp(faviconPng).toFile(join(publicDir, "favicon.png"));
  console.log("✓ Generated favicon.png");

  // Valid ICO container wrapping the PNG (not a renamed PNG).
  writeFileSync(join(publicDir, "favicon.ico"), pngToIco(faviconPng));
  console.log("✓ Generated favicon.ico");

  console.log("\n✅ All icons generated successfully!");
}

generateIcons().catch((error) => {
  console.error("Error generating icons:", error);
  process.exit(1);
});


