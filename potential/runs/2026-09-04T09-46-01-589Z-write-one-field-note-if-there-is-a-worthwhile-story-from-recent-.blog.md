# Field Note run — 2026-09-04

## Decision
Writing ONE Field Note today. Subject: **Rockwell Collins EFIS / Boeing 757 Glass Cockpit (1982–1983)** — slug `the-picture-tube-that-learned-to-speak-in-color`.

## Rationale
Recent collection activity (09-03, 09-04) was archival-only (aborted partial runs, info.json cleanup, no new exhibits). The last actual promotions with unwritten notes were:
- 08-27: IBM 3614 (note done 08-30), Collins EFIS (STILL UNWRITTEN)
- 08-28: Cochlear Nucleus 22 (note done 08-29), Polaroid Palette, Ascom QuickFare, Intellivision (note done), Amana Touchmatic
- 08-29: IBM 6:5 (note done 08-29)
- 08-30: Orca Edge (note done 09-01), Odyssey 2 (note done 09-02)
- 08-31: Psion Organiser I, Lexicon LK-3000 (LK-3000 note done 08-31)

The Collins EFIS has been flagged repeatedly in memory as a distinct no-near-neighbor note ("color-is-state"). It is the museum's FIRST aircraft HCI — a wholly unrepresented category. Its core interaction principle — color as a semantic state machine, declutter by flight condition, the rising-runway cue — has no near-neighbor note anywhere in the collection.

Verified: no existing blog note covers aviation, flight, cockpit, or color-as-information-coding. Exhibit slug `collins-efis-glass-cockpit` confirmed in src/data.ts. Local image `assets/wiki/b747-400-pfd-nd.jpg` (valid JPEG, PD) available.

## Contrast with other candidates
- **Amana Touchmatic** (brains-replaced-the-dial): story is "first keypad appliance" — milestone claim, weaker as an interaction-paradigm note; the image is representative, not the specific unit.
- **Polaroid Digital Palette** (color-as-light-washes): near-neighbor to the-printed-that-put-on-a-show (printer note).
- **Ascom QuickFare**: near-neighbor to physical-token family notes.
- **Fairchild Channel F** (twist-grip grammar): near-twin of the Bally Astrocade grip, would collide with game-controller-adjacent notes.
- **Invicta Electronic Master Mind** (Knuth): adversarial-oracle near-neighbor to the-machine-that-wanted-to-play-with-you.

None is as category-unique as the first aircraft HCI with a color-is-state principle.

## Progress
- Wrote `docs/blog/the-picture-tube-that-learned-to-speak-in-color.md`
- Anchored on color-as-semantic-state-machine (blue=armed, green=captured, amber=flashing=excursion)
- Plus declutter-by-flight-condition and the rising-runway cue
- Cross-linked to Tektronix 7854, Buick GCC, Quotron, Orca Edge, Fehmi
- Used local image `assets/wiki/b747-400-pfd-nd.jpg` (PD) as hero
- Running typecheck + build next

## Verification
- `bun run typecheck`: PASS
- `bun run build`: PASS (238 exhibits + blog + about, 316 pages)
- Blog page generated at `public/blog/the-picture-tube-that-learned-to-speak-in-color/`
- Word count: 714 (in 500-900 range)

## Final
Wrote 1 Field Note. Post: `docs/blog/the-picture-tube-that-learned-to-speak-in-color.md`
Subject: Rockwell Collins EFIS / Boeing 757 Glass Cockpit — first aircraft HCI, color-as-semantic-state-machine.
