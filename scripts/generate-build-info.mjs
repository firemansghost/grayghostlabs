import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const libDir = join(__dirname, "..", "lib");
const outputFile = join(libDir, "buildInfo.generated.ts");

// Ensure lib directory exists
mkdirSync(libDir, { recursive: true });

// Get build info from environment variables (Vercel provides these)
const buildTime = new Date().toISOString();
const commitSha = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GIT_COMMIT_SHA || null;
const branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.GIT_BRANCH || null;
const vercelEnv = process.env.VERCEL_ENV || null;

// Generate TypeScript file
const content = `// Auto-generated at build time - do not edit manually
export const BUILD_TIME = "${buildTime}";
export const COMMIT_SHA = ${commitSha ? `"${commitSha}"` : "null"};
export const BRANCH = ${branch ? `"${branch}"` : "null"};
export const VERCEL_ENV = ${vercelEnv ? `"${vercelEnv}"` : "null"};
`;

writeFileSync(outputFile, content, "utf8");
console.log(`✓ Generated ${outputFile}`);

