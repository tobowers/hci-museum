# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start
- Collection at 329 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- Scanned `potential/*/info.json` → **zero active** info.json files. No ready backlog.
- Recent promotions: ponsse-hs15, grass-valley-1600, hell-chromagraph, jumbotron, digistar, sl-1200mk2, atc-flight-progress-strips, ishiguro-storm-surge-model, houston-hipad, computervision-cadds3, tmi-2, isg-viewing-wand, avl-eagle, genigraphics-100, wrigley, addressograph, dasa-mark-18, kodak-komstar, sal-mar-construction.
- Note: `genigraphics-100`, `dasa-mark-18-reader-printer`, `kodak-komstar`, `sal-mar-construction`, `houston-hipad`, `computervision-cadds3`, `isg-viewing-wand`, `wrigley`, `addressograph` are recent / possibly un-noted → candidate Field Note subjects, but goal is additions.

## Subagent round 1 (3 parallel angles)
- Angle A (retail/POS/warehouse handhelds): **EMPTY RESULT** — subagent returned nothing.
- Angle B (clinical/dental/optometry): returned 4 candidates, but only the **Eckstein EB-46 audiometer** (c.1975, out-of-window) had a verified free image. DentaCam (1987), AO SR III refractor, Humphrey HFA were all patent-drawing-only or image-unverified. No promotable artifact.
- Angle C (built-environment/public-space): **EMPTY RESULT**.
- Octen: 0 spent by manager so far (subagents report no budget usage signal; assume their spend was minimal since two produced nothing).
- Next: manager-side direct research on fresh angles with free Commons API.

## Manager-side Commons verification & collection audit
- Collection is **329 exhibits** (no additions yet this run).
- Vetted fresh candidate angles via direct Wikimedia Commons API:
  - **Linn 9000** (1984, Roger Linn) — verified Commons images (`Linn 9000 view top 300dpi 2550 1635.jpg`, brochure pages). NOT in collection. Strong candidate: the pad-as-program paradigm matured from LM-1; footswitch/step interface.
  - **Oberheim Prommer** (1984) — verified image (`Oberheim Prommer.jpg`, `Oberheim Prommer (ROM toaster).jpg`). NOT in collection. Niche EPROM burner-with-audio-preview device.
  - **E-mu Drumulator** (1983) — verified image (`Drumulator Vorderseite.png`). NOT in collection. But overlaps heavily with LM-1/Linn 9000 storytelling.
  - Rejected: Fairlight Series III (collection already has `fairlight-cmi`), NED Synclavier (already has `synclavier`), DX7 / TR-909 / 3M / Mitsubishi / Soundstream / Publison / Waveframe (no free Commons image or already covered).
- Image integrity audit: all 329 `image: img(...)` refs resolve on disk under `assets/wiki/` (0 missing). `assets/wiki/` holds 723 files including multi-image exhibit folders.
- Recent promoted exhibits with **no Field Note** reference: `computervision-cadds3`, `kodak-komstar` (CERN 1981), `sal-mar-construction`, `dasa-mark-18-reader-printer`. (`houston-hipad` is already cited in a blog post.)

## STOP — awaiting direction
Subagent angles A (retail/POS) and C (built-environment) returned empty; angle B yielded nothing promotable. Remaining decision for manager/user: authorize promotion of Linn 9000 / Oberheim Prommer / Drumulator, or pick a new angle.
