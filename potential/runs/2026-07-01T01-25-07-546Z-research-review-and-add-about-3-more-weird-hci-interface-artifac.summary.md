# Run Summary: 2026-07-01T01-25-07-546Z

**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

**Outcome:** 2 artifacts promoted to the collection. 1 deferred.

---

## Artifacts Added to Collection

### 1. Pencept PenPad (1982)
- **Interaction model:** Keyboardless handwriting recognition terminal with gesture commands
- **Why it matters:** A decade before the Newton, Pencept shipped a VT-100 terminal replacement that used a pen and digitizing tablet for all input. MIT-developed "functional attribute model" for user-independent recognition. Pioneered gesture commands (circle=select, scribble=delete) that anticipated iOS/Android by 20+ years.
- **Images:** 1 local image (Wikimedia)
- **Wiki:** docs/hci-wiki.md (entry 63)

### 2. Synapse Relax Stress Reduction System (1984)
- **Interaction model:** Consumer EMG biofeedback headband for home computers; tense/relax to control software
- **Why it matters:** A video-game company (Synapse) built the first FDA-cleared (Class II) biofeedback peripheral for home computers. EMG headband + balloon-flying game trained stress awareness. Co-created by legendary game designer Bill Williams. Bankruptcy killed it the same year it shipped.
- **Images:** 3 local images (Wikipedia box art, AtariMania screenshots)
- **Wiki:** docs/hci-wiki.md (entry 64)

---

## Candidates Reviewed but Not Promoted

- **GreenMan Teleoperator (1983-88):** Full-body Navy exoskeleton telepresence system. Spectacular images, solid HCI framing (zero autonomy, pure human-machine interface). Deferred: military defense context stretches the museum's scope and tone. Revisit if scope broadens.
- **Konix Multisystem / Slipstream (1988-89):** Unreleased morphing controller console. Good images and story, but unreleased vaporware with claimed (undelivered) force feedback. Controller gimmick more than HCI paradigm.
- **Datanose (1991):** CMU nose-operated joystick. Delightful, but research prototype only. Thin as standalone exhibit.
- **Marble Answering Machine (1992):** Foundational TUI design concept. But it's a student design project, not a hardware product.
- **Seiko WristMac (1988):** First wrist peripheral for Mac. Overlaps with existing Seiko RC-1000 (1984).
- Multiple others reviewed and rejected due to overlap, thin sources, or weak HCI case (see trace).

---

## Files Written/Modified

### New files:
- `potential/pencept-penpad/info.json`
- `potential/relax-stress-reduction/info.json`
- `potential/pencept-penpad/images/pencept-penpad-1.jpg`
- `potential/relax-stress-reduction/images/relax-stress-reduction-1.png`
- `potential/relax-stress-reduction/images/relax-stress-reduction-2.gif`
- `potential/relax-stress-reduction/images/relax-stress-reduction-3.gif`
- `assets/wiki/pencept-penpad-1.jpg`
- `assets/wiki/relax-stress-reduction-1.png`
- `assets/wiki/relax-stress-reduction-2.gif`
- `assets/wiki/relax-stress-reduction-3.gif`

### Modified files:
- `docs/hci-wiki.md` — Added 2 new wiki sections, updated TOC (entries 63-64), updated count to sixty-four
- `src/data.ts` — Added 2 new exhibit entries
- `potential/runs/2026-07-01T01-25-07-546Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — Run trace
- `potential/runs/2026-07-01T01-25-07-546Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — This file

---

## Verification

- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (64 exhibits + blog + about, 74 pages)

---

## Lessons for Memory

- erols.com/rwservices image server returns HTML for direct image access (like videogamehouse.net). Use Wikimedia as primary image source for Pencept.
- AtariMania GIF screenshots are reliable but low resolution (336×240). Acceptable for supplementary images.
- The `promote-potentials.ts` image copy functionality (from potential/<slug>/images/ to assets/wiki/) works correctly when savedImages is populated — only the data.ts regex replacement is broken.
- GreenMan is a strong visual candidate for future consideration but needs scope discussion with Tobowers about military/defense context.
