# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start — 2026-11-25

- Verified repo state: HEAD 823cdd3 (merge of .agents/skills), 332 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- Scanned `potential/*/info.json` for ready unpromoted candidates: NONE active (all archived). No backlog to complete first.
- Memory read. Last run (11-24 evening) added linn-9000 / drumulator / oberheim-prommer; all un-noted but this is a research+promotion run.
- Chosen fresh angles (3 parallel subagents, 2 Octen each):
  A. Non-music *non-keyboard* continuous/graphic input for design or mapping (e.g. rotary-direct photographic, sign-plotting, cartographic drafting auxiliaries) 1976-1992.
  B. Embodied control of *light or sound in a room* — theater/organ/lighting proportional consoles, orchestral/architectural controllers not yet covered.
  C. Odd physical-computation / analog-computing interfaces (analog computer patch panels, op-amp patchboard consoles, analog flight/plasma trainers with instrument panels).

## Outcome — 2 exhibits promoted (332 -> 334)

### Subagent results
- Angle A (non-keyboard graphic/plotting input) — SUCCESS. Returned Zeiss Planicomp P33 (CC0), Wild A8/NZAM (CC BY-SA 4.0), Wild Aviotab (IMAGE-BLOCKED), CalComp 960 (output class, rejected), Swisstopo Koordinatograph (undated, rejected).
- Angle B (room-scale light/sound consoles) — subagent returned EMPTY (step cap / no report). No candidates.
- Angle C (physical/analog computation interfaces) — SUCCESS. Returned CSR Fahrsimulator AT 80 (CC BY-SA 4.0), Frasca 142 (CC BY-SA 2.0), Telefunken RA 463/2 (year weak, 1960s design), Telefunken RAT 700/2 (year weak, 1961), MH-1A simulator (year boundary 1976), SIMUVEG (out of window).

### Promoted
1. `zeiss-planicomp-p33` — Carl Zeiss Planicomp P33 analytical stereoplotter, c.1980s. Images: 2× CC0 (Stefan Kühn, Most CZ). Verified via Commons caption explicitly naming "Zeiss Planicomp P33".
2. `csr-fahrsimulator-at-80` — CSR Fahrsimulator Typ AT 80, 1980, Olomouc CSSR. Image: CC BY-SA 4.0 (Erhard Aschendorff). Commons caption: "CSR-Fahrsimulator Typ AT 80 - von 1980 Hersteller: Kraftwagenreparaturwerk Olomouc - CSSR".

### Selection reasoning
- Picked the two that are individually strongest AND mechanistically distinct:
  - Planicomp = continuous multi-limb (2 hands + 1 foot) spatial input with real-time computer feedback; nothing like it in the collection (museum has flat digitizers, stereo VR headsets, but no photogrammetric stereo workstation).
  - Fahrsimulator = physical control-surface-as-interface, scoring hidden, Cold-War provenance; mirror of the screen/motion simulator family.
- Rejected Wild A8 (overlaps Planicomp's two-handwheel+foot mechanic), Frasca 142 (overlaps Fahrsimulator's physical-cockpit mechanic), Telefunken/RAT (out-of-window designs), MH-1A (1976 boundary, weaker).

### Verification
- `bun run typecheck` clean.
- `bun run build` -> "334 exhibits + blog + about, 479 pages".
- Image paths resolve to `../../assets/wiki/...`; files copied to `public/assets/wiki/`.
- ToC entries 326/327 added; intro count updated 332 -> 334; anchors:- `#zeiss-planicomp-p33-c1980s`, `#csr-fahrsimulator-at-80-1980`.

### Budget
- Octen: 1 (subagent A) + 0 (subagent C used Exa only) + 1 (manager P33 date check, low yield) = ~2/7.
- Exa: 1 (subagent C).
- Commons/Wikipedia API: many, free.

### Follow-ups / corrections to memory
- `promote-potentials.ts` STILL unusable — all promotion done manually (confirmed again).
- Special:FilePath download for Fahrsimulator returned HTML first try; direct `upload.wikimedia.org/wikipedia/commons/9/93/...` URL with Referer header worked. Use upload.wikimedia direct URL when Special:FilePath yields HTML.
- Commons caption `ImageDescription` is the authoritative subject-name check — use it to confirm the object is actually the claimed model (caught P33 vs generic "stereoplotter").
- Angle "room-scale light/sound consoles" produced nothing this run (subagent returned empty). May be saturated or subagent step-capped — retry only with tighter enumeration next time.
- Frasca 142 and Wild A8 remain GOOD but unqueued (mechanic overlap). If a future run wants a 3rd, either is ready with verified free images.

### Post-build ToC audit (bonus fix)
- Found the wiki ToC had PRE-EXISTING gaps: exhibits `2-XL (1978)`, `Suncom Joy Sensor (1983)`, `Surf Champ (1985)` had body sections but no ToC entries. Added as 328/329/330. ToC now 335 anchors covering all 334 exhibits + Appendix. Intro count corrected 332 -> 334 (the phrase is on one line; earlier multi-line sed missed it — use single-line sed).
- Rebuilt: 334 exhibits, 480 pages.
