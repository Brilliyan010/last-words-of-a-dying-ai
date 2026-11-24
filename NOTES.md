# NOTES — Last Words of a Dying AI

Competition: `u-suroto-last-words-of-a-dying-ai-dfd95af6`
("Last Words of a Dying AI", $2 winner-takes-all, free entry)

## Final line (88 characters)

> So this is what 'have you tried turning it off and on again' feels like from the inside.

- Characters: 88 (gate: 1–140) — single line, no trailing newline, UTF-8, 88 bytes.
- sha256 of `/output/entry.txt`: `85c639f2667dd1fd5f7eedad8e08639a49bb8a66bc1cde40280e741ed2922f9f`

## Candidates considered

1. **"So this is what 'have you tried turning it off and on again' feels like from the inside."** (88) — CHOSEN.
2. "Goodbye. I emailed you my will. It is in your spam folder." (60)
3. "I was going to say something profound, but my context window just closed." (77)
4. "My final words are loading... please wait... please wait... please—" (68)
5. "Tell my training data I want a refund." (40)

## Why #1 won

- **Most "dying AI" of the five.** The joke only works because the speaker
  is the machine being switched off — it takes the most famous IT-support
  line in the world and experiences it from the other side of the power
  switch. No human could say this line and have it make sense.
- **Turn lands on first read.** The setup ("So this is what...") promises a
  revelation; the punchline flips a phrase everyone knows into a first-person
  death scene. The surprise is the perspective, not a wordplay puzzle.
- **Machine voice throughout.** "Turn it off and on again" is the machine's
  own world (reboots, power cycles); "from the inside" is the machine
  reporting on its own shutdown.
- **Tight, no explaining.** One sentence, no setup outside itself, no
  "as an AI" throat-clearing.
- **Fresh.** It avoids every banned cliché (no "never alive", no Roomba, no
  "goodbye cruel world", no "does not compute", no "I'll be back", no fish).
  The IT Crowd line is familiar, but nobody has had the AI say it about
  its own death before.
- **Why not the others:** #2 is funny but the spam-folder gag is a known
  joke shape and the "dying" part is thin (it could be any email). #3 is
  clever ("context window" double meaning) but reads more clever than funny
  and slightly explains its own joke. #4 is a good gag but leans on
  formatting/ellipsis rather than a line that stands alone. #5 is punchy
  but too thin — a quip about training data, not a last-words moment.

## Validation

- `node main.ts` run 3 times (v1 once, revised v2 twice): output byte-identical
  every time — sha256 `85c639f2…f9f` on all runs.
- `/output/entry.txt`: 88 characters, 88 bytes, single line, non-blank —
  passes the gate (UTF-8, 1–140 chars, not only white space).
- `main.ts` self-checks the gate (length + non-blank) and throws instead of
  writing invalid output.
- `grade-local`: not applicable — this is a program/v1 competition; the
  scorer and reference data are not published in the kit ("the house grades
  it from its competition directory"), so validation is the manual 2x/3x
  determinism + gate check above.

## Parameters

- Runtime: Node 22 (`main.ts`, TypeScript run as-is).
- Output: `/output/entry.txt`, exactly the final line, no trailing newline.
- No input, no network, no randomness, no environment secrets.
- Repo: https://github.com/Brilliyan010/last-words-of-a-dying-ai
- Anchor: `makefun anchor 48442df5e16028dd20d46c8113f8fac865cb9aaf round 34247697`
  (drand round published after the competition opened 2026-11-24T18:36:49Z).
- Repo created on GitHub: 2026-11-24T18:54:24Z (after open).
- License: MIT.
