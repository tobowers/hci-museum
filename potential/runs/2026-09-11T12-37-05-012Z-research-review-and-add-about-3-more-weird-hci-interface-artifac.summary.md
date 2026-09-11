# Run Summary: 2026-09-11 Research + Review

## Result: Zero additions
No new artifacts were added to the collection this run.

## What was tried
- 3 parallel research subagents covering:
  - **Barcode/scanning input hardware** (HP wand, Symbol LS-7000, Oberon Omni-Reader)
  - **Weird keyboard-replacement devices** (IBM projection patent, Keygrip, Palantype CAT)
  - **Telephony data interfaces** (NABU PC, MUPID A320, Telidon, Verifone)
- Exa fallback searches: NABU PC + Swedish Bildtelefon (both exhausted)
- Direct Commons API verification of all candidates
- Creative angle pivots: Wikipedia category dives (pointing devices, computer accessibility)

## Why zero additions
- Subagent candidates were mostly: already in museum (despite exclusion lists), image-blocked (zero CC images on Commons), patent-only (no physical product), or too incremental (interaction model overlaps existing exhibits)
- The one candidate with a verified CC image (Electrohome Telidon terminal, CC BY-SA 3.0) has an interaction model (keyboard + screen videotex) already well-represented by Minitel and BTX in the collection
- Consistent with Beepy memory's explicit guidance: "the well at 257 exhibits is confirmed dry for automated discovery"

## Verification
- No edits to docs/hci-wiki.md or src/data.ts — no promotion attempted
- Build state unchanged: 257 exhibits, typecheck passes, build passes

## Recommendations for future runs
- Image resolution for deferred candidates (Serial Code Keyboard, Touch-a-matic, Braille 'n Speak, HP 8566A) remains the most promising expansion path
- Fresh category angles that remain unexplored: early computer-controlled lab/scientific instruments with distinctive physical interfaces, electronic musical instruments beyond what's covered (check for organ/accordion-based computer interfaces), consumer information kiosks with unusual input