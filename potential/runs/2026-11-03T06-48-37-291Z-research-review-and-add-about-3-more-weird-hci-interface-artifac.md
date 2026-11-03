# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start (2026-11-03)
- Collection count: 309 exhibits (grep id: src/data.ts)
- potential/ scan: NO active info.json leftovers (all archived). Only orphan dirs: u235-meltdown (deferred, never built), plus already-promoted dirs missing .archived.
- Fresh angles chosen (memory says well is angle-dependent): 
  1. Early computer-aided drafting/measurement & physical-coordinate instruments (plotters' input side, encoders, scanners), 1976-1992.
  2. Odd/hybrid consumer entertainment-control peripherals not yet covered (e.g., novelty light/motion/voice toys with real logic).
  3. Professional/industrial embodied control surfaces (transport, mixing, broadcast, machine control) untried subclasses.

## Research wave 1 results (3 subagents)
- Drafting/measurement angle: Polhemus 3SPACE (patent US4613866A), FaroArm (unverified), Gerber/Summagraphics digitizer found by angle 3.
- Entertainment angle: RETURNED MOSTLY IN-MUSEUM ITEMS (R.O.B., Sega R360, Big Trak, Fidelity Voice Chess, Tomytronic 3D, Simon, Merlin) — subagent ignored exclusion list again. No usable new candidate.
- Professional control angle: Gerber large-format digitizer station (CC BY-SA Commons File:Tablet gerber.jpg) — STRONG. HP 9874A travelling-wave digitizer (PD patent US4255617) — real second. Honeywell TDC 2000 / Foxboro VIDEOSPEC — IMAGE-BLOCKED + unverified sources.
- Decision: verify Gerber tablet image + distinctness; consider HP 9874A. Need a 3rd angle.

## Wave 2
- Octen budget EXHAUSTED (7/7 consumed by subagents). Continue with direct fetches + Commons API + Google Patents only.
- Polhemus 3SPACE: already in museum (polhemus-isotrak). DROPPED.
- Subagent 3 (body channels) hit step limit; no verified candidate.
- Busy re-check confirmed: "summagraphics-bit-pad" in museum (small consumer digitizer).
- Gerber large-format digitizing station (Summagraphics OEM): image confirmed https://upload.wikimedia.org/wikipedia/commons/5/57/Tablet_gerber.jpg (CC BY-SA 3.0, 899x689). Need real model/date facts.

## Wave 3 — resolution & outcome
Rejected remaining leads:
- Gerber large-format digitizing station: REJECTED. Wikipedia "Graphics tablet" (graphics tablets/Pucks section) states outright: "A large-format graphic tablet by manufacturer Summagraphics (OEM'd to Gerber): The puck's external copper coil can be clearly seen." It is a rebadged Summagraphics magnetostriction tablet — the same interaction model already in the collection as `summagraphics-bit-pad`. Not distinct. Also image (File:Tablet gerber.jpg) has no machine-readable model/date and a dead source.
- HP 9874A: REJECTED. Same Wikipedia article lists HP amongst Summagraphics' private-label OEM customers ("private labeled for HP, Tektronix, Apple, Evans and Sutherland"). Another rebadge of `summagraphics-bit-pad`. Not distinct.
- Busy consumer-entertainment angle (wave 1): only returned in-museum items. No candidate.
- Body/non-hand control angle (wave 2): no verified promotable candidate; `active-badge` already in museum.

OUTCOME: ZERO-ADDITION RUN. Collection remains at 309 exhibits. No active info.json in potential/. No promotions, no data.ts/wiki edits.
Rationale: all three chosen angles resolved to (a) already-in-museum artifacts or (b) rebadges of an existing exhibit. Per standing guidance ("Add fewer artifacts when quality is low; do not pad"), no padding.
