# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run log

### 2026-09-27 — Session start
Collection: 277 exhibits (data.ts id count). Wiki intro stale at "two hundred and seventy".

### Research (3 parallel subagents, one angle each)
1. **Telewriting / electronic blackboard / remote handwriting transmission** (hci-research-subagent):
   - Bell Labs Ultrasonic Remote Blackboard (1972-74) — pre-window, image-blocked
   - Teleboard (1978, Dagnélie) — prototype, no images
   - Victor Electrowriter Remote Blackboard (VERB) — pre-window
   - Telautograph — pre-window. ALL image-blocked/pre-window. Not promotable.

2. **Electronic chess / sensory-board & token board games beyond collection** (hci-research-subagent):
   - Dark Tower (1981) — ALREADY IN COLLECTION
   - Stop Thief (1979) — ALREADY IN COLLECTION
   - **Fidelity Bridge Challenger (1980)** — genuine new candidate. Real playing cards with bar-coded backs fed through an optical barcode reader beside the keyboard ("deal blind to the machine"); machine plays and tells you which physical card to lay down by number. Physical-token optical card input — distinct from chess sensory boards. Image-blocked on Commons (verified: 0 hits). Collector-site photo at electronicchess.free.fr.

3. **Specialty kiosk / self-service / transaction terminals** (hci-research-subagent):
   - ByVideo/Florsheim Express Shop kiosk (1986-87) — rights-managed images only
   - PLATO IV/V terminal + Hotline (1977) — PLATO V Terminal (1981) ALREADY IN COLLECTION
   - WA optical-mark pari-mutuel betting terminal — no artifact/images
   - Mobil pay-at-pump (1986) — weak interaction. None cleanly promotable.

### Decision
Octen budget exhausted (7/7) by subagents. Image work done via direct Commons API + curl (no Octen).
- Fidelity Bridge Challenger (1980) = the single genuinely-strong, distinct-interaction, image-solvable candidate. Promotable via collector-site device photo (Tachi Lab / SIGGRAPH documentation-source precedent) downloaded locally to potential/fidelity-bridge-challenger/images/bridge-challenger.jpg (768x1060 JPEG, verified).
- All other candidates are in-collection or image-blocked; documented as deferred, not promoted.

### Verify / build
- Confirmed Fidelity Bridge Challenger not in collection (no bridge/card-game computer present).
- Created potential/fidelity-bridge-challenger/info.json.
- Promoted via manual edits (promote-potentials.ts NOT run — known data.ts regex + image-copy + ToC bugs).
