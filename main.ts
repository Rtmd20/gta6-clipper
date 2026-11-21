// gta6-clipper-01 entry for @dahiru: "GTA 6 Alternative Ending: Jason & Lucia ESCAPE".
// The entry is the YouTube Short itself; this program only hands its address to the
// grader. It reads VIDEO.json from the repository, makes sure it is a JSON object
// with a url string, and writes that file to the output directory unchanged.
// It uses only the Node standard library, touches no network, and writes the same
// bytes on every run.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The placeholder URL in VIDEO.json passes this check untouched: it is only a
// placeholder until the real Short is uploaded and its address is written in.
// The house refuses a placeholder at submission, as it should.
const source = join(botDir, 'VIDEO.json');
const raw = readFileSync(source, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  throw new Error('VIDEO.json must be a JSON object with a string "url" field');
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'VIDEO.json'), raw);
