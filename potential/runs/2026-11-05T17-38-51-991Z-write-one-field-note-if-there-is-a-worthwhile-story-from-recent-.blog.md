# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Decision

Wrote ONE Field Note: `docs/blog/the-wall-made-of-televisions.md` — Sony JumboTron JTS-1 (1985), the last un-noted exhibit from the 2026-11-03 promotion pair (Digistar was noted 2026-11-04).

## Why this subject

- `grep -rl "exhibits/sony-jumbotron-jts1" docs/blog/` → no hits. Only `the-hallway-in-tsukuba.md` mentions the place (Expo/Tsukuba), not the screen.
- The most recent *output-mechanism* notes are Talaria (oil), Solari (split-flap), flip-dot, Commodore 1520 plotter, Visicorder, Gyricon. The "giant public raster built from thousands of individual display devices" channel was empty.
- Fresh thesis rather than a mechanism retread: the JumboTron's defining property is **pixel-as-whole-device** — each pixel lives inside its own sealed vacuum tube with its own beam, so the crowd-facing interface is a coalition of displays forced to agree. That inverts the standard transparency of output and is the opposite of Talaria (one continuous sculpted medium).
- Explicitly corrected a live claim from an earlier note: `the-sign-that-flipped-its-message.md` (2026-10-06) calls the Solari "the only output device in the museum meant to be watched by a crowd." The JumboTron is a counterexample on scale — built to *erase* its mechanism at viewing distance, where the Solari performs it. The new note concedes the Solari's qualitative point and argues the quantitative one, so neither note is contradicted in spirit.
- Used the local hero `../assets/wiki/sony-jumbotron-jts1.jpg` (CC BY-SA 2.5, credit in alt text), the only image for the exhibit in the wiki.

## Passed over

- Casio CMD-40 — IR code-learning / universal-remote channel still genuinely unoccupied, but deserves a standalone run (adjacent to the wearable-watch family). Not written today to keep to one note.
- Sega Hologram Time Traveler — still blocked by `reaching-into-the-image.md`.
- `potential/atari-star-wars-yoke/` — staged but unpromoted; not eligible as a subject.

## Verification

- Slugs checked against `src/data.ts`: `sony-jumbotron-jts1`, `solari-split-flap-display`, `ge-talaria` — all present.
- `bun run typecheck` clean; `bun run build` clean → "313 exhibits + blog + about, 444 pages".
- Body word count trimmed from 926 to ~895 to stay inside the 500–900 guidance (frontmatter excluded).

## Note to self

Memory's 2026-11-04 entry and the resumed context both said JumboTron "remains un-noted and is a strong future subject" — accurate. The one correction the run needed was **not** about the exhibit facts but about a *prior note's exclusivity claim* ("the only output device meant to be watched by a crowd"). When a new subject sits in the same family as an existing note, grep family notes for words like "only", "first", "the one device" — the new note's best angle is often to qualify that sentence rather than introduce a new taxonomy.
