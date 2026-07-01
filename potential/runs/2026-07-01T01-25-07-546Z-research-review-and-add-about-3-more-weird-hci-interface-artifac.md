# Run Trace: 2026-07-01T01-25-07-546Z

**Goal:** Research, review, and add ~3 more weird HCI interface artifacts from 1976-1992.

## Steps

### 1. Read collection state
Read wiki TOC (62 exhibits), data.ts, and beepy-memory.md. All known gaps filled.

### 2. Launched 5 parallel research subagents
- Subagent 1 (weird input devices): Found Pencept PenPad, Datanose, Konix Multisystem, Roklan Un-Roller
- Subagent 2 (musical HCI): Found Music Mouse, Akai EWI, Buchla Touché, Airdrums, AlphaSyntauri
- Subagent 3 (exoskeleton/force-feedback): Found GreenMan, Relax, JPL Hand Controllers, Virtual Fixtures, Iwata Manipulator
- Subagent 4 (wearable/body): Found Polar PE 2000, Walking Office, Joyboard (dupe), Power Pad (dupe), Microwriter (dupe)
- Subagent 5 (broad Grok ideation): 8/10 hallucinated by Grok; verified: Marble Answering Machine, Rosetronix Brainwave

### 3. Initial assessment
Already-in-museum dupes: Joyboard, Power Pad, Microwriter, HeadMaster, U-Force, Atari Mindlink, Spaceball, Put-That-There
Top new candidates for deeper review: Pencept PenPad, Relax Stress Reduction System, GreenMan, Datanose, Konix Multisystem

### 4. Deeper verification
Deep-researched 4 candidates with dedicated subagents:
- Pencept PenPad: Excellent documentation. Wikipedia, erols.com comprehensive archive, CHI '83/'85 videos, multiple product photos. MIT lineage (Blesser/Shillman). Functional attribute model for user-independent handwriting recognition. PenPad 200 (1982, VT-100 terminal replacement) and PenPad 320 (1984, $1,495 DOS PC peripheral). Pioneered gesture commands (circle=select, scrub=delete). Merged with Numonics 1987, failed commercially.
- Relax Stress Reduction System: Game company Synapse Software built first FDA-cleared (Class II, K841128) consumer biofeedback peripheral. EMG headband + 3 programs (tension graph, kaleidoscope, balloon game). Atari 8-bit, C64, Apple II, IBM PC. $139.95. Created by Kelly Jones, Bill Williams, Dr. Martha Davis. No hardware photos found — only box art, screenshots, manual. But museum precedent (DragonDictate, Drawing Prism) accepts software/sparse visuals when interaction model is strong.
- GreenMan Teleoperator (1983-88): Visually spectacular full-body exoskeleton telepresence system. Navy/NOSC project. Good HCI framing (zero autonomy, pure human-machine interface). But military context stretches museum scope. DECISION: Defer for future consideration.
- Specialty search (olfactory, ambient displays, wrist computing): Found Electronic Nose (1982, research paper, thin HCI), Seiko WristMac (1988, overlaps RC-1000), Versatron Footmouse (1985, overlaps Joyboard). None strong enough.

### 5. Candidate selection
SELECTED for promotion:
1. Pencept PenPad (1982-85)
2. Relax Stress Reduction System (1984)

REJECTED/DEFERRED:
- GreenMan: Military context outside museum scope. Spectacular images. Revisit if scope broadens.
- Konix Multisystem: Unreleased vaporware. Controller story is more mechanical gimmick than HCI innovation.
- Datanose: Research prototype only. Thin as standalone exhibit.
- Marble Answering Machine: Design concept, not hardware product.
- Others: Overlap with existing exhibits or too thin.

### 6. Creating info.json files
Created potential/pencept-penpad/info.json and potential/relax-stress-reduction/info.json.

### 7. Image sourcing
- Pencept PenPad: Downloaded Wikimedia image (pencept-penpad-1.jpg, 20KB). erols.com image server returns HTML, not images — similar to videogamehouse.net block noted in memory.
- Relax: Downloaded Wikipedia box art PNG (138KB), AtariMania balloon game GIF (4.6KB), AtariMania title screen GIF (0.7KB).

### 8. Promotion
Ran `bun scripts/promote-potentials.ts`:
- Wiki sections appended correctly
- Images copied from potential/<slug>/images/ to assets/wiki/
- data.ts NOT updated (known regex bug with `export const exhibits` between `];` and `export const featured`)
- Manually added both data.ts entries before `];`
- Manually updated wiki TOC (entries 63-64) and count ("sixty-four projects")

### 9. Verification
- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (64 exhibits + blog + about, 74 pages)

