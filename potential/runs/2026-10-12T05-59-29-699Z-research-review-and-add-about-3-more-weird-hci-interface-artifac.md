# Run 2026-10-12T05-59-29-699Z — Research, review, and add ~3 weird HCI interface artifacts

## Start state
- Collection: 293 exhibits (data.ts `grep -cE '^\s{4}id: "'`).
- Found one READY candidate scanning potential/: `potential/cpt-8100/` (CPT 8100 Word Processor, 1979).
  - Complete info.json, 2 local images in potential/cpt-8100/images/ (valid PNGs, verified with `file`).
  - NOT in data.ts or wiki. Distinct editing-keyboard-with-OOPS-undo-key angle on the word-processor family.
  - This is the highest-confidence addition this run.

## Plan
1. Promote the ready CPT 8100 candidate (first action = scan potential/ for ready candidates).
2. Launch research subagents on fresh angles for 1-2 more candidates.
3. Review, promote, verify, summarize.

## Trace
(append as work happens)

### 05:59 — Discovered ready candidate
- `potential/cpt-8100/` = CPT 8100 Word Processor (1979), complete info.json + 2 local valid PNGs, NOT in collection.
- Highest-confidence addition. Will promote regardless of subagent yield.

### 06:00 — Research angles for 2 more candidates
Launching 3 hci-research-subagent in parallel, each ~2 Octen searches, on fresh image-productive angles:
- Angle A: computer numerical control / CAD / physical drawing input devices 1976-1992 (beyond VersaWriter/GrafBar).
- Angle B: home exercise/health-monitoring computer appliances 1976-1992 (beyond LifeRower/Orca/Suncom).
- Angle C: electronic learning/preschool toys with embodied computer interaction 1976-1992 (beyond Speak&Spell/Alphie/Socrates).
Each instructed to verify candidates against the exclusion list (they often ignore it) and check Commons image availability.