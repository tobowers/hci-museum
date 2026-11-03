# Run summary — 2026-11-03T19:36:32Z — research, review, add ~3 more weird HCI interface artifacts

## Outcome
Promoted **2** new exhibits (task allowed up to ~3; 2 were ready and image-verified, so I stopped rather than pad with weaker candidates).

- **Sony JumboTron JTS-1 (1985)** — `potential/sony-jumbotron-jts1/`, image `assets/wiki/sony-jumbotron-jts1.jpg`
- **Evans & Sutherland Digistar 1 (1983)** — `potential/evans-sutherland-digistar-1/`, image `assets/wiki/es-digistar-1-console.jpg`

Collection grew **311 → 313**. `bun run typecheck` clean. `bun run build` → "313 exhibits + blog + about, 441 pages".

## Process
1. Read `docs/beepy-memory.md`. Scanned `potential/`: two active `info.json` (grass-valley-1600, hell-chromagraph-dc300b) were already promoted (verified in `src/data.ts` + wiki ToC) → archived both.
2. Launched 3 parallel `hci-research-subagent` tasks on distinct angles (unusual sensing input / exotic output-actuation / professional-trade instruments). All exhausted the shared Octen budget and terminated at max steps with text-only reports.
3. Triaged returns manually: VideoHarp (1988–90) image unverified; Wild theodolite already covered (Zeiss REC-100); two strong survivors → **JumboTron** (Angle B) and **Digistar 1** (Angle C).
4. Duplicate-checked both against `src/data.ts` / wiki (neither present). Verified images via Wikimedia Commons API:
   - Expo85_sony.jpg — CC BY-SA 2.5 (not CC BY, corrected in field notes)
   - E&S Digistar's parts.jpg — CC BY 2.0
5. Downloaded both with a browser UA, `file`-verified as JPEG. Built `info.json` from Wikipedia + cited sources. Wrote manual wiki sections + ToC entries (310, 311) + `src/data.ts` entries. Typecheck + build. Archived `info.json`.

## Notes / corrections
- **Digistar year is 1983, not 1981** (release/first install). Used 1983. The famous 3'×4' console with the 6-DOF joystick and the "Boldly Go" button is the interface hook.
- Both are output/display-adjacent but each has a strong embodied-interface angle (JumboTron = physical CRT-lightbulb wall; Digistar = cockpit-like performance console), keeping the collection's weirdness bar.
- Octen budget (7/7) exhausted by subagents; Exa also largely consumed. All discovery after subagent return used free Wikipedia/Commons fetches.
- `promote-potentials.ts` remains broken — all promotion done manually (wiki section + ToC + `src/data.ts` + image copy + archive).

## Deferred
- VideoHarp (Rubine & Hahn, CMU, 1988–90) — interesting orthogonal-IR-beam contactless input; needs an image verification pass.
