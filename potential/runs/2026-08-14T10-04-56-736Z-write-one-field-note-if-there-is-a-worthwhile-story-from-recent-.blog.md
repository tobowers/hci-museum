# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Progress

### 2026-08-14 — Decision and draft

**Recent un-noted batch reviewed:** The 2026-08-13 promotion run (Fairchild
Channel F 1976, BBN Spacegraph 1977, Bally Professional Arcade/Astrocade 1978)
produced no Field Note. This is the most recent batch without one.

**Subject decision — BBN Spacegraph.** Applied the standing lesson from the
2026-08-02/08-12 notes (pick by interaction-model distinctiveness plus overlap
management, not visual richness):
- Spacegraph is the museum's ONLY true volumetric display — every other 3D
  exhibit is stereoscopic (Vectrex 3D Imager, Sega SubRoc-3D, Fakespeare BOOM),
  head-tracked 2D (TELESAR), or mirror illusion (Sega Hologram Time Traveler).
  The wiki's own distinction section frames it as the sole volumetric entry.
- Its input has no near neighbor anywhere in the collection: a pulsed laser
  aimed INTO the floating image volume to select "light buttons"
  (AFHRL-TR-80-60, 1981). No other note covers reach-into-the-volume input.
- Rejected alternates: Bally Astrocade ("your program IS the pixels" — charming
  but lands adjacent to existing programming/hidden-state notes: Merlin,
  the-grid-shown-and-hidden, and the TRS-80 voice synthesizer video-memory
  note); Fairchild Channel F (hybrid pistol-grip controller — a game-controller
  story in a well-noted category, and its grip is a near-twin of Bally's).

**Post written:** `docs/blog/reaching-into-the-image.md` — "The Image You Could
Reach Into" (2026-08-14). ~700 words. Anchors on the sensing/input inversion
(laser pointing into the image, "light buttons"), the varifocal mirror mechanics
(33.8 cm sweep, 0.4 cm deflection × 85 leverage, 50 segmented rim weights,
~230 Hz refresh), the AFHRL flight-simulator context, the Genisco/Mayo
afterlife, and an honest AI-curator closing. One local image used:
`spacegraph-photo-two-planes.jpg` (AFHRL, public domain) — the caption leans on
the fact that a flat photograph cannot show the depth, reinforcing the
volumetric-vs-stereo thesis. Links to exhibits: bbn-spacegraph, vectrex-3d-imager,
segarc-3d, hologram-time-traveler.

**Verification pending:** `bun run typecheck` and `bun run build`.

## Result

**Post written:** `docs/blog/reaching-into-the-image.md` ("The Image You Could
Reach Into", 2026-08-14, slug `reaching-into-the-image`). ~810 words of body
text (861 with frontmatter/caption), within the 500–900 word requirement.

**Verification:**
- `bun run typecheck` — PASS (`tsc --noEmit`, no errors).
- `bun run build` — PASS ("Built static site ... 188 exhibits + blog + about,
  243 pages", up from 240 in the 08-13 run).
- Spot-checked `public/blog/reaching-into-the-image/index.html`: local image
  `assets/wiki/spacegraph-photo-two-planes.jpg` resolves, exhibit link
  `exhibits/bbn-spacegraph` present. Blog index links the post.

**Also updated:** `docs/beepy-memory.md` — one durable Field Note lesson entry
(2026-08-14): pick the artifact whose interaction paradigm has no near-neighbor
note even when a rival candidate has a richer human story; recorded the
"pointing-input-into-a-volume" angle as a future writing theme. No collection
data touched (no data.ts / hci-wiki.md / exhibit changes).

