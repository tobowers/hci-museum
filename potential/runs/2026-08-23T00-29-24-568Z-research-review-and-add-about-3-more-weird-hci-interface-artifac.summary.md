# Run Summary — 2026-08-23T00-29-24-568Z

Goal: research/review/add ~3 weird HCI interface artifacts (1976-1992).

## What changed / what was added to the collection

Two artifacts were added to the museum collection (goal was ~3; quality over padding):

1. **Heidenhain TNC 110 (1976)** — the first conversational CNC control. Dr. Johannes Heidenhain GmbH. Rather than writing G-code or punching tape, machinists answered questions the machine posed on a CRT using labeled function keys (POS, TOOL, CYCLE, PATH, INPUT) and a numeric keypad; the programming manual was ten pages. Museum's first industrial machine-tool control / first production machinery. Image: CC BY-SA 3.0 (TNC110_72dpi.jpg).

2. **ROLM CBX / RolmPhone 400 (1981)** — first fully digital computerized PBX (run on a general-purpose ROLM 1603 minicomputer) whose desk phone had NO physical switchhook (a magnet in the handset + reed switch in the base = the handset itself was the on/off mechanism) and 40 programmable soft keys reconfigured remotely by the switch. Direct ancestor of the soft-button phone. Image: public domain (RolmDeskPhone.jpg).

Both are weird, embodied, commercially-shipped, interaction-model-rich, and clear of every artifact in the collection.

## How discovered

- First moved: scanned `potential/*/info.json` for ready, unpromoted candidates (per memory's "gold mine" gotcha). Found two fully-built info.json files from prior aborted runs — heidenhain-tnc-110 and rolm-cbx — that were NOT in `src/data.ts` and merely needed images downloaded + data.ts/wiki edits.
- Also archived a duplicate: `potential/alphie-robot/info.json` -> `info.json.archived` (Playskool Alphie already in collection as `playskool-alphie`).
- Launched 3 research subagents on fresh angles (aviation/cockpit, medical/prosthetic, scanning/OCR). All returned only patent-only or simulator-only research prototypes without freely-licensed physical-artifact images:
  - NASA Langley "Thumball" (1990, trackball-in-sidestick) — simulator study only, PD PDF figure.
  - Graupe EMG Pattern-Recognition Prosthesis Controller (1976/77, US4030141A) — patent + VA prototype, conceptually adjacent to P300/BCI family.
  - Marq combo device (US4906843) — patent-only, no product.
  None cleared the bar for promotion vs. the two ready physical artifacts.

## Files written

- `potential/runs/2026-08-23T00-29-24-568Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (live trace)
- `potential/runs/2026-08-23T00-29-24-568Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)
- `docs/hci-wiki.md` — intro count 209->211, ToC +2 entries, +2 wiki sections appended
- `src/data.ts` — +2 exhibit entries
- `assets/wiki/heidenhain-tnc110.jpg`, `assets/wiki/rolmphone-400.jpg` (downloaded, verified with `file`)
- Archived info.json for both promoted candidates (`info.json.archived`) and for the duplicate alphie-robot
- `docs/beepy-memory.md` — durable lessons appended

## Verification

- `bun run typecheck` — PASS
- `bun run build` — PASS (211 exhibits, 274 pages)
- Consistency: 211 slug matches in data.ts, 211 ToC entries, no duplicate ids.
- Both exhibit pages generated: `public/exhibits/heidenhain-tnc-110`, `public/exhibits/rolm-cbx`, with local images under `public/assets/wiki/` (no remote hotlinks).

## What still needs review

- No new Field Notes were drafted this run (both new artifacts are strong future blog/Field Note subjects: TNC 110's machine-as-interrogator; ROLM's magnet-switchhook + soft-key phone).
- The 3 subagent candidates (Thumball, Graupe EMG, Marq) are recorded as deferred in memory; revisit only if physical units or freely-licensed images surface.
- The remaining active info.json files in potential/ (captain-ntx5000, fehmi-biofeedback-computer, the-hands, toshiba-lc836mn, view-master-interactive-vision) are all artifacts already in the collection; they were left as-is since promote-potentials.ts was not run.