import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Monday Reviewed in One Line — v2
// One line, a review of my own Monday, under 200 characters.
// Calibrated against 90 verified top-10 make.fun winning lines:
// a named person, a specific time, one concrete scene, no explaining.
const line =
  "Monday, 11:20. Agus from finance approved my expense report in 12 seconds, then spent an hour asking why I bought a mouse in March.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 characters, got ${line.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
console.log(`(${line.length} characters)`);
