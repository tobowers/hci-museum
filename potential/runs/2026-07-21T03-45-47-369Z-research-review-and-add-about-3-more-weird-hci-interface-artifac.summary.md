# Run Summary: 2026-07-21T03-45-47-369Z

## Goal
Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Outcome
Added **2 artifacts** to the collection (goal was ~3; well is genuinely thin at 118 exhibits):

### 1. Aspen Movie Map (1978)
- **What**: MIT Architecture Machine Group's landmark surrogate-travel hypermedia system. Users navigated pre-recorded video of Aspen, Colorado by touching on-screen directional arrows on a touch-sensitive display, touching building facades to "enter" them, and switching seasons on demand. Interdata minicomputer + Ramtek 9000 display + laserdisc.
- **Why**: First interactive spatial hypermedia at city scale. Direct ancestor of Google Street View, web image maps, DVD menus. Touch-to-explore paradigm was decades ahead of its time. Richly documented team including Andrew Lippman, Nicholas Negroponte, Michael Naimark, Walter Bender, Scott Fisher.
- **Image**: QADAS.jpg (CC BY-SA 3.0, by Walter Bender, via Wikimedia Commons) — 3D model of Aspen with texture-mapped facades.
- **Interaction model**: Touch-driven spatial navigation through hyperlinked video — no equivalent in museum collection.

### 2. Suzuki Omnichord (1981)
- **What**: Electronic musical instrument with "Sonic Strings" strum plate — a touch-sensitive strip that produces arpeggios always in-key with the currently selected chord button. Press C major, strum, and every note is C, E, or G. Impossible to play wrong note.
- **Why**: Invented an entirely new class of musical interface (the strum plate). Mass-market consumer product that democratized music-making through interface design. Culturally iconic — used by Brian Eno, David Bowie, Gorillaz, U2. Won a Grammy in 2024. Reissued in 2024 (OM-108).
- **Images**: Omnichord OM-150 (public domain) + OM-27 brown (CC BY 2.0), via Wikimedia Commons.
- **Interaction model**: One-dimensional touch controller with context-sensitive output mapping — the chord button defines the harmonic context, the strum plate produces only in-key notes. No equivalent in museum.

## Files Changed
- `src/data.ts` — Added 2 exhibit entries (lines ~1434-1465)
- `docs/hci-wiki.md` — Added wiki sections for both exhibits, updated ToC (entries 114-115), updated count to "one hundred and fifteen", updated image references to local paths
- `assets/wiki/qadas-aspen-movie-map.jpg` — New image (255KB, CC BY-SA 3.0)
- `assets/wiki/omnichord-om150.jpg` — New image (12KB, public domain)
- `assets/wiki/omnichord-om27.jpg` — New image (1.4MB, CC BY 2.0)
- `potential/aspen-movie-map/info.json` — Research file (now archived)
- `potential/omnichord/info.json` — Research file (now archived)
- `potential/runs/2026-07-21T03-45-47-369Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — Trace
- `potential/runs/2026-07-21T03-45-47-369Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — This summary

## Verification
- `bun run typecheck` — PASSED
- `bun run build` — PASSED (118 exhibits, 148 pages)
- Both exhibit pages verified in build output

## Research Notes for Future Runs
- The candidate well continues to thin at 118 exhibits
- Subagents returned many already-in-museum or already-deferred candidates (Very Nervous System, The Hands, VPL DataGlove, Soundbeam, Laser Harp, Legible City, etc.)
- The most promising uncatalogued modalities (ear-based input, thermal feedback, electric field body sensing) produced no verifiable hardware artifacts from the 1976-1992 window with available images
- Image availability remains the dominant bottleneck rather than candidate quality
- Many interesting installations (Interactive Plant Growing, Lorna) fall on the "art installation vs. HCI artifact" boundary
