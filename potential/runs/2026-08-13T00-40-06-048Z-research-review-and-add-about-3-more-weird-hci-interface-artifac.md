# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Progress notes

- 2026-08-13: Run start. Read beepy-memory.md (442 lines). Collection at ~183-184 exhibits.
- DISCOVERY: The aborted 08-12 run (potential/runs/2026-08-12T12-33-06-898Z-*.md) left downloaded
  images in assets/wiki/ for three candidates that were NOT promoted and have NO info.json files:
  - fairchild-channel-f-1/2/3.jpg (Fairchild Channel F, 1976 — first cartridge console, twist-grip controller)
  - bally-arcade-1.jpg (Bally Professional Arcade, 1978 — pistol-grip controller + keypad)
  - spacegraph-patent-2.png / spacegraph-patent-3.png (BBN Spacegraph, 1977 — volumetric varifocal-mirror display)
  None of these three appear in src/data.ts or docs/hci-wiki.md. None are in the museum or the excluded list.
  The aborted trace also flagged Cyclops (Datasoft 1981, Apple II light-scanning digitizer) as angle A.
- Plan: verify these leftover candidates against the collection, run up to 3 research subagents
  (2 Octen calls each) on the strongest fresh angles, build info.json for the strongest 3, promote manually
  (promote-potentials.ts has known bugs: no image copy, no data.ts update, no ToC update).

## Candidates under review

- Fairchild Channel F (1976): first microprocessor cartridge console, twist-grip pistol controller
  (push = joystick, twist = paddle hybrid). 3 Evan-Amos-style photos already in assets/wiki. Commons API
  confirms more files exist. Jerry Lawson (first Black console engineer) story. NOT in museum (RCA Studio II
  mentions it in passing only). STRONG.
- Bally Professional Arcade (1978): pistol-grip joystick + keypad controller, Bally BASIC cartridge. 1 photo
  in assets/wiki. Commons has more. Interaction distinctiveness TBD vs existing joystick exhibits. MEDIUM.
- BBN Spacegraph (1977): volumetric varifocal-mirror display, "reach into the image" paradigm. Only 2 tiny
  patent PNGs (82x120) in assets/wiki. No Commons images. Interaction genuinely unique (no volumetric
  display in museum). Image situation is the blocker. MEDIUM-HIGH if images found.
- Datasoft Cyclops (1981): Apple II light-scanning digitizer (lamp + rotating slit drum + phototransistor,
  no lens). Weird and embodied but ZERO Commons images. LOW unless image source surfaces.
- Bally/other first-wave console controllers were angle B of aborted run.

## Decisions

(to be filled)
