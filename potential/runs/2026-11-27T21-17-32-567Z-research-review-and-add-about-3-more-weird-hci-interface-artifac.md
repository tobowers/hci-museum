# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## 2026-11-27 run
- Start: HEAD 35d536e (skills merge). `src/data.ts` = 334 exhibits. Zero active `potential/*/info.json` — no ready backlog.
- Checked un-noted tail: `linn-9000` (1984 Linn workstation) is genuinely un-noted (the "drum machine you played to program" note covers the LM-1, not the 9000). Good fallback Field Note subject.
- Plan: 3 parallel research angles on categories under-covered per memory. Memory says these are saturated/image-blocked: music HCI, keyboards, braille/tactile, lab instruments, broadcast, marine, surveying, physical-card appliances, kiosks, lab instrumentation. Fresh angle candidates: (A) theatrical/stage automation & rigging consoles, (B) agricultural/forestry/heavy-vehicle in-cab computers, (C) point-of-sale/embedded industrial HMI panels.

- Revision to plan: memory shows lab-instrument, broadcast, marine, surveying, retail-POS (IBM 5265, ViewTouch exist), agricultural-forestry (Ponsse HS-15 exists) and theatrical lighting (Strand Light Palette, AVL Eagle, GVG 1600 exist) angles are already partly covered or repeatedly image-blocked.
- Revised angles (3 subagents, max 2 Octen each):
  A. Theatrical stage rigging / scenery automation / fly-system control consoles (distinct from lighting desks).
  B. Financial/banking self-service beyond ATM+Quotron: cheque-sorting, banking terminals, share-dealing terminals, airport self-check-in.
  C. Nuclear/utility/railway signalling & dispatch control panels — or better: cellular/radio-dispatch, EPOS hand-held ordering. Picked: railway signalling panel / train dispatch desks with physical train-describer stacks.

### Subagent round 1 results
- **A (stage automation):** returned 4 candidates. Phantom (1986) Barry Steel desk = great interaction but images © Theatrecrafts/Cameron Mackintosh, non-free. Hoffend MicroCommander = interaction undocumented. PRG StageCommand 1988 = UI undocumented. **Ziller DE2649370 (1976)** = patent figures only (PD) but it's a *method patent* for synchronous winch control, no console, no product. Verdict: all weak on our four criteria (distinct interaction + documented + real product + free image).
- **B (financial self-service):** Tandata TD1400 / Homelink (1983) — detachable IR keypad on a TV, home banking by dialling Prestel, existing-artifact-adjacent (Minitel/BTX) but genuinely distinct: *detached wireless keypad* + mail-first-bill-pay ritual. Images: only generic Prestel terminal CC BY-SA 3.0 (not the TD1400). IBM 3694 proof machine (1980) — cheque proofing keyboarding ritual, but its exact keyboard is UNVERIFIED and Wikipedia sourcing is thin. IBM 3890 sorter — CC BY 4.0 images but weak interaction distinctness.
- **C (railway signalling):** subagent returned EMPTY result tuple — failed silently. Logging as failed; will verify directly if I pursue the angle.

Assessment: none of round 1 is a clean pass yet. Tandata TD1400 is the most promising (IR-detached keypad is a real embodied inversion; needs a proper image check). Let me check Commons directly for a few candidates in parallel while starting round 2.

### Round 2 — direct verification (free sources, no budget spend)
- **Tandata TD1400 / Homelink — VERIFIED, STAGED.** Commons API `File:Prestel-Terminal.jpg` description explicitly: "Tandata Td1400 Prestel terminal as supplied by the Nottingham Building Society for its home banking service. ... remote keyboard and docking station ... connected to a television and phone line." License CC BY-SA 3.0, by Wiffy. Image downloaded (250x333 JPEG, file-verified). Not present anywhere in src/data.ts, docs/hci-wiki.md, docs/blog, assets/wiki. Facts cross-checked against Wikipedia "Online banking" + "Prestel": restricted launch Sept 1982, national 1983, withdrawn April 1991; Tandata TD1400 keyboard mentioned by name on the Online banking page. Wrote `potential/tandata-td1400/info.json`.
- **IBM 802 Proof Machine** — CC0 image (Yngve Hellström, 1965) but it is a 1965 *photo of a 1965-era machine*, outside meaning for the 1976-92 window unless framed as a predecessor; IBM 802 itself predates the window. Not staged.
- **Railway signalling (C)** — retried via Commons search; only irrelevant results (art, roads). No usable free image and no self-documented interaction. Angle dropped for this run.

### Decision
Only one candidate (Tandata TD1400) clears the four criteria cleanly this run. I will stop after staging that one and report, rather than pad with weak/upsourced exhibits. Promotion is a manual separate step (see beepy-memory gotchas).

### Files touched
- `potential/tandata-td1400/info.json` (new)
- `potential/tandata-td1400/photo.jpg` (new, CC BY-SA 3.0)
- this trace file
