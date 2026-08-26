import { existsSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), ".next", "server", "app");
const required = [
  "index.html",
  "markets.html",
  "ghostgauge.html",
  "ghost-allocator.html",
  "trend100.html",
  "sports-lab.html",
  "sports/cfb/gridiron-edge.html",
  "sports/mlb/ace-suppressor.html",
  "coming-soon.html",
  "about.html",
  "press-kit.html",
  "status.html",
];

const missing = required.filter((file) => !existsSync(join(root, file)));

if (missing.length > 0) {
  console.error("Missing prerendered outputs:");
  for (const file of missing) {
    console.error(`  - ${file}`);
  }
  process.exit(1);
}

console.log(`✓ ${required.length} prerendered routes present`);
