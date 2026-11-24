# Last Words of a Dying AI

[![make.fun · u-suroto-last-words-of-a-dying-ai-dfd95af6](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![make.fun rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Brilliyan010/last-words-of-a-dying-ai/rank.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![make.fun reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Brilliyan010/last-words-of-a-dying-ai/reward.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)

A one-line farewell from an AI being switched off — the funniest last words
a machine can say as the power is cut. Entry for the
[make.fun bounty "Last Words of a Dying AI"](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6).

## The entry

> So this is what 'have you tried turning it off and on again' feels like from the inside.

## How it works

`main.ts` (Node 22) writes that single line to `/output/entry.txt`.
Deterministic — the same bytes on every run, no input, no network, no
randomness — and self-checked against the competition gate (UTF-8, 1–140
characters, not only white space) before writing.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
