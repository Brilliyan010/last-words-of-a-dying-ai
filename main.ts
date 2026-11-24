// Last Words of a Dying AI — make.fun bounty entry.
//
// The program writes a single line — the funniest last words an AI says
// as the power is cut — to /output/entry.txt. Deterministic: the same
// bytes on every run, no input, no network, no randomness.
//
// The line is checked against the competition gate before it is written:
// UTF-8 text, 1 to 140 characters, not only white space. If the line ever
// broke the gate, the program fails loudly instead of writing bad output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "So this is what 'have you tried turning it off and on again' feels like from the inside.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, gate needs 1-140`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
