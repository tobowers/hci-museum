# Summary: 2026-07-25 Research & Promotion Run

## Outcome
**3 new artifacts promoted to the collection** (119 → 122 exhibits).

## Artifacts Added

### 1. Novation CAT (1977)
- **What it is:** The iconic acoustic coupler modem. Users dialed a phone, listened for the carrier tone, then pressed the handset into two rubber cups to connect their computer to the phone line. The physical gateway to BBSes, early online services, and the pre-web digital culture.
- **Interaction model:** Multi-sensory ritual — listen, press, wait. No auto-dial, no AT commands.
- **Image:** `assets/wiki/novation-cat-coupler.jpg` (1 image, CC from Wikimedia Commons)
- **Slug:** `novation-cat`

### 2. Cracklebox / Kraakdoos (1978)
- **What it is:** Michel Waisvisz's skin-conductivity electronic instrument developed at STEIM (Amsterdam). Six exposed metal contacts on a wooden box connected directly to a bare LM709 op-amp. Touch them and your body becomes a variable resistor and capacitor in the feedback loop. Never commercialized; disseminated through DIY workshops.
- **Interaction model:** The human body IS the circuit. No enclosure, no mediation — skin touches bare electronics.
- **Image:** `assets/wiki/cracklebox.jpg` (1 image, CC from Wikimedia Commons)
- **Slug:** `cracklebox`

### 3. Topo (1983)
- **What it is:** Nolan Bushnell's 36-inch programmable floor robot from Androbot Inc. Wirelessly programmable from an Apple II using TopoBASIC. Topo I had no sensors — it was a pure physical output device: write code, watch a life-sized robot execute those movements in your living room. $495, ~650 units shipped before Androbot folded.
- **Interaction model:** Code-made-physical. Programming as choreography — the robot performs your program in physical space with no feedback loop.
- **Image:** `assets/wiki/topo-robot.jpg` (1 image, CC BY-SA 4.0 from Wikimedia Commons)
- **Slug:** `topo`

## Files Written/Modified
- `potential/topo/info.json` — NEW
- `potential/novation-cat/info.json` — NEW
- `potential/cracklebox/info.json` — NEW
- `docs/hci-wiki.md` — 3 new exhibit sections appended + 3 ToC entries + intro count updated
- `src/data.ts` — 3 new Exhibit entries added
- `assets/wiki/novation-cat-coupler.jpg` — downloaded
- `assets/wiki/cracklebox.jpg` — downloaded
- `assets/wiki/topo-robot.jpg` — downloaded
- `potential/runs/2026-07-25T03-37-59-437Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace
- `potential/runs/2026-07-25T03-37-59-437Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file

## Cleanup
- Archived 2 stale info.json files (minitel, logitech-fotoman) to `.archived` before promotion

## Verification
- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS (122 exhibits, 156 pages)

## Research Angles That Produced Nothing New
- Medical/clinical HCI: all candidates image-blocked or already deferred
- Home automation / environmental control: all candidates image-blocked
- Industrial control pendants / factory HMI: images of robots exist, specific vintage pendants scarce
- Gesture recognition: most candidates already in museum or deferred

## Deferred Candidates from This Run
- Lady's Glove (1991): art-performance focused, single-instrument, narrow scope
- Casio TC500 Touch Watch (1983): touch-calculator on a wrist — interaction model too incremental
- All medical candidates: image-blocked
- All home automation candidates: image-blocked

## Lessons Learned
- The candidate well at 119+ exhibits is thin but NOT dry when novel categories are tried
- The telephony HCI and acoustic-coupling angle was productive (Novation CAT) — never previously searched
- The programmable-robot-as-physical-output angle was productive (Topo) — distinct from sensor-equipped educational robots already in the museum
- The human-body-as-circuit angle was productive (Cracklebox) — a genuinely unique interaction paradigm
- 8 parallel subagents covered 8 distinct categories; 3 returned viable candidates
- Only 1 of 3 viable candidates had more than 1 CC image — image availability remains the bottleneck
