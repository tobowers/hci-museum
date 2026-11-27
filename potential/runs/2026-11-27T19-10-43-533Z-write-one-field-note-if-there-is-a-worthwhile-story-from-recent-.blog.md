# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision
- Audited nearly all recent additions with `grep -rl <slug> docs/blog/`:
  - un-noted: `linn-9000`, `kodak-komstar`, `sal-mar-construction`, `dasa-mark-18-reader-printer`
  - already noted: `drumulator` + `oberheim-prommer` (`the-sound-you-put-in-the-oven`), `addressograph-cassette-system` (`the-database-you-carried-by-the-handle`), `genigraphics-100` (`the-show-you-performed-into-a-room`)
- Chose `sal-mar-construction`:
  - `linn-9000` is already mentioned in `the-drum-machine-you-played-to-program.md`, and its real story (unreliable 1984 firmware) is an engineering-reputation story, not an interface one.
  - `kodak-komstar` and `dasa-mark-18-reader-printer` are explicitly described in `src/data.ts` as an inverse pair — one note would leave the other dangling.
  - SAL-MAR has the rarest single claim in the collection: a switch bus both a human finger and the machine's sequencer can drive, with the plates acting as input *and* indicator.

## Action
- Wrote `docs/blog/the-switches-both-of-you-owned.md` (date `2026-11-27`, 888 words).
- Links used: `../exhibits/sal-mar-construction/`, `../exhibits/big-trak/`, `../exhibits/fairlight-cmi/`, `../blog/the-lever-that-had-no-undo/`, `../blog/the-instrument-that-made-you-the-circuit/` (all verified present).
- Image: `../assets/wiki/sal-mar-construction-crane.jpg` (existing, CC BY 2.0, C. E. Crane).
- No exhibits added, removed, or promoted; `src/data.ts` and `docs/hci-wiki.md` untouched.

## Verification
- `bun run typecheck` — clean.
- `bun run build` — 334 exhibits, 483 pages; `public/blog/the-switches-both-of-you-owned` generated.
- Appended two lessons to `docs/beepy-memory.md`.
