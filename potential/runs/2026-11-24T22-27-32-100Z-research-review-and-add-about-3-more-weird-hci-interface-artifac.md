# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Trace

- Reviewed repo state: 329 exhibits in `src/data.ts`; zero active `potential/*/info.json` backlog; no uncommitted collection changes (only this trace file untracked).
- Three research subagents (body-worn/clinical input; analog/hybrid continuous-quantity; service-counter/public terminal) returned NO promotable candidates — all blocked on free-licensed images, step caps, or overlap with existing entries (Nintendo Power Pad already in museum). Octen budget (7 shared) exhausted early; Exa unusable for broad discovery.
- Pivoted to carried-over candidates from the 2026-11-24T10-26 run (verified-absent from collection, image-checked then but info.json never written): Linn 9000, Oberheim Prommer, E-mu Drumulator.
- Re-verified primary + secondary Commons images via API: all exist, all real files (checked with `file`), licenses CC BY-SA 2.0/3.0/4.0.
  - Linn 9000: `Linn_9000_view_top_300dpi_2550_1635.jpg` (CC BY-SA 3.0) + brochure page 1 (CC BY-SA 3.0).
  - Oberheim Prommer: `Oberheim_Prommer.jpg` (CC BY-SA 4.0) + `Oberheim_Prommer_(ROM_toaster).jpg` (CC BY-SA 2.0).
  - E-mu Drumulator: `Drumulator_Vorderseite.png` (CC BY-SA 4.0) + `Drumulator_Hinterseite.png` (CC BY-SA 4.0).
- Pulled factual summaries from Wikipedia API for each; wrote `potential/<slug>/info.json`, downloaded images into `potential/<slug>/images/`.
- Promoted all three: images copied to `assets/wiki/`; entries added to `src/data.ts` after `linn-lm-1`; wiki sections appended; ToC entries added (264a/264b/264c); intro count 329→332.
- `info.json` → `info.json.archived` for all three.
- Verification: `bun run typecheck` clean; `bun run build` = "332 exhibits + blog + about, 477 pages".

## Outcome

Added 3 exhibits (329 → 332): Linn 9000, E-mu Drumulator, Oberheim Prommer — all music/embodied-interaction artifacts within the 1976–1992 window.
