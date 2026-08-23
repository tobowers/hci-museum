# Run trace — 2026-08-23T00-29-24-568Z

Goal: research/review/add ~3 weird HCI artifacts (1976-1992).

## Initial discovery
- Scanned potential/*/info.json for ready candidates (per memory "gold mine" lesson).
- Found active info.json files for: alphie-robot (duplicate of playskool-alphie, in collection), 
  captain-ntx5000 (in collection), fehmi-biofeedback-computer (in collection), 
  heidenhain-tnc-110 (NOT in collection - READY), rolm-cbx (NOT in collection - READY),
  the-hands (in collection), toshiba-lc836mn (in collection), view-master (in collection).
- Two ready, unpromoted candidates:
  * Heidenhain TNC 110 (1976) — first conversational CNC control
  * ROLM CBX / RolmPhone 400 (1981) — magnetic switchhook + soft keys

## Plan
- Verify the two ready candidates + archive duplicate alphie-robot.
- Launch research subagents on fresh angles to find a 3rd candidate.
- Promote the strongest.


## Discovery results
- 2 READY candidates found in potential/ from prior aborted runs (verified NOT in collection):
  * Heidenhain TNC 110 (1976) — first conversational CNC. CC BY-SA 3.0 image asetic/wiki/heidenhain-tnc110.jpg.
  * ROLM CBX / RolmPhone 400 (1981) — magnetic switchhook + soft keys. PD image assets/wiki/rolmphone-400.jpg.
- Duplicate archived: potential/alphie-robot/info.json -> info.json.archived (Playskool Alphie already in collection as playskool-alphie).
- 3 research subagents (aviation/cockpit, medical/prosthetic, scanning/OCR) all returned only patent-only
  or simulator-only research prototypes without freely-licensed physical-artifact images:
  * NASA Langley "Thumball" (1990, trackball-in-sidestick) — simulator study only, PD PDF figure needs extraction.
  * Graupe EMG Pattern-Recognition Prosthesis Controller (1976/77, US4030141) — patent + VA prototype, overlaps P300/BCI family conceptually.
  * Marq combo device (US4906843) — patent-only, no product, scanning category.
  None cleared the promotion bar vs the 2 ready physical artifacts.

## Promotion (manual — promote-potentials.ts NOT run, known bugs)
- docs/hci-wiki.md: intro count 209->211, ToC +2 (Heidenhain TNC 110 1976, ROLM CBX/RolmPhone 400 1981), +2 wiki sections appended.
- src/data.ts: +2 exhibit entries.
- assets/wiki/: heidenhain-tnc110.jpg (CC BY-SA 3.0), rolmphone-400.jpg (PD).
- Archived info.json for both promoted candidates (heidenhain-tnc-110, rolm-cbx) to prevent auto-promotion.

## Verification
- bun run typecheck: PASS
- bun run build: PASS (211 exhibits, 274 pages)
- data.ts 211 slugs, wiki ToC 211 entries, no duplicate ids.
- Both exhibit pages generated at public/exhibits/{heidenhain-tnc-110,rolm-cbx}.

## Decisions / blockers
- Only 2 artifacts added this run (goal was ~3). Subagent finds were weaker (patent/prototype-only, no free images).
  Per memory "do not pad the collection," accepted 2 quality additions.
- CC BY-SA 3.0 image used (TNC110) — acceptable, attribution in caption.
