# Curator Run Summary: 2026-07-27

## What changed

Two new artifacts added to the HCI Museum collection:
1. **Etch A Sketch Animator (1986)** — Ohio Art Company's handheld digital animation computer with dual-knob interface
2. **Linus Write-Top (1988)** — First keyboardless tablet computer with handwriting recognition from Linus Technologies, Inc.

Collection now stands at **124 exhibits** (was 122).

## Artifacts added

### Etch A Sketch Animator (1986)
- **Interaction model:** Two blue knobs from the classic mechanical Etch A Sketch repurposed to control a blinking cursor on a 40×30 dot-matrix LCD. Eight red buttons for animation functions (Draw, Animate, Save, Recall, etc.). 2 KB memory, up to 96 frames, 4 AA batteries. A portable animation workstation disguised as a kid's toy, years before desktop animation was accessible.
- **Image:** PD (Wikimedia Commons, Tim Morgan)
- **Slug:** `etch-a-sketch-animator`

### Linus Write-Top (1988)
- **Interaction model:** No physical keyboard at all — write on the 9.4-inch LCD with any stylus (even a mechanical pencil). A TSR called Your-Write converts handwriting to ASCII in real time after a 30-minute training session. MS-DOS 3.30, NEC V20 @ 7.16 MHz, 640 KB RAM. First tablet computer released to public with handwriting recognition. ~1,500 units sold at $2,795. Company bankrupt by 1990.
- **Image:** PD (Wikimedia Commons, from Linus Technologies 1988 brochure, no copyright notice)
- **Slug:** `linus-write-top`

## Files written/modified

### New files:
- `potential/linus-write-top/info.json` — research dossier
- `potential/etch-a-sketch-animator/info.json` — research dossier
- `potential/runs/2026-07-27T04-02-36-812Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace log
- `potential/runs/2026-07-27T04-02-36-812Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file
- `assets/wiki/linus-write-top.jpg` — 753 KB, PD image from 1988 brochure
- `assets/wiki/etch-a-sketch-animator.jpg` — 731 KB, PD image

### Modified files:
- `docs/hci-wiki.md` — added wiki sections for both exhibits, updated ToC (added entries 120-121), fixed intro count (122→124), fixed image URLs to local paths
- `src/data.ts` — added Exhibit entries for both artifacts

### Archived files:
- `potential/novation-cat/info.json` → `.archived` (prior promotion cleanup)
- `potential/cracklebox/info.json` → `.archived` (prior promotion cleanup)
- `potential/topo/info.json` → `.archived` (prior promotion cleanup)

## Verification

- `bun run typecheck`: ✅ PASS (no errors)
- `bun run build`: ✅ PASS (124 exhibits + blog + about, 160 pages)

## Research notes

### Subagent quality
- 8 parallel subagents launched across different angles (game controllers, portable computing, scanning/OCR, telephony, smart home, edutainment toys, music interfaces, wearable computing)
- Subagents returned ~60% already-in-museum or already-deferred candidates. This is structural, consistent with prior runs at 122+ exhibits.
- Two subagents returned incorrect Commons image availability claims (IXO Telecomputing claimed to have a Commons image — verified to have 0 results)

### New angles that worked
- **Portable computing oddities** angle returned the Linus Write-Top (strong)
- **Interactive toys/edutainment** angle returned the Etch A Sketch Animator (strong)
- **Telephony HCI** angle was productive but all candidates had borderline HCI relevance

### Angles that were dry
- Game controllers: every candidate was already collected or deferred
- Scanning/OCR: rich candidates but zero Commons images (ThunderScan, DigiView, ComputerEyes, Caere Typist, PageBrush)
- Smart home: zero Commons images for all candidates
- Music interfaces: zero confirmed Commons images
- Wearable computing: none had confirmed Commons images

### Image availability remains the dominant bottleneck
Only 3 of ~40 candidates across all subagent angles had confirmed Commons images. The well is not structurally dry in terms of candidate quality, but image availability filters out about 90% of otherwise viable candidates. ThunderScan (printer-turned-scanner, 1984) was the most compelling image-blocked candidate this run.

## What still needs review

- None. Both artifacts are fully sourced, verified, and promoted.

## Lessons for future runs

- Image verification must be done BEFORE building info.json — subagents are unreliable on Commons image availability
- New productive angles: portable computing oddities, interactive creative toys, telephony HCI
- Exa remains out of credits (confirmed since 7/22 run)
- Build count: 124 exhibits, Wiki ToC: 121 (now updated)
- The promote-potentials.ts script still has all three known bugs: (a) doesn't copy images, (b) doesn't update data.ts, (c) doesn't update wiki ToC. All three were handled manually.
