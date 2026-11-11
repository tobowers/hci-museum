# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run 2026-11-11 (second session, 19:36Z)

- Start: collection at **316 exhibits** (`grep -cE '^\s{4}id: "' src/data.ts`).
- Scanned `potential/*/info.json` → **zero active** (all 314 archived). No ready backlog this run. Every `potential/*/images` dir belongs to an already-promoted exhibit.
- Memory (entry 1050/1051) says the well is dry for: music, retail terminals, board games, telephony, scanning/OCR, medical, biometric, game controllers, home automation, drafting instruments, output mechanisms, raw-machine interfaces, chorded keyboards, accessibility displays, fax (Mufat was the catch), kiosk/self-service, lab instruments.
- Strategy: choose 3 angles NOT in that exhausted set, weighted toward those proven image-productive on Commons.

### Subagent round 1 (3 angles, launched in parallel)

| Subagent | Angle | Result |
|---|---|---|
| A | chaotic/unstable analog media & displays | **PLATO V plasma terminal** — REJECTED, already in collection (`plato-v-terminal`); **Lucasfilm EditDroid** — image-blocked on Commons. Subagent hit its step cap. |
| B | non-visual output channels (thermal/electrotactile/GVS) | **FAILED** — returned truncated/failed output, no report. |
| C | whole-body posture/balance/locomotion input | **FAILED** — returned truncated/failed output, no report. |

- Confirmed subagents 2 & 3 unusable; subagent 1 wasted a slot on an in-museum artifact despite exclusion list (recurring pattern).
- Octen used: ~4 of 7 shared budget by subagent A. Exa used: 0.

### Subagent round 2 (2 retries, leaner prompts)

| Subagent | Angle | Result |
|---|---|---|
| B2 | thermal/electrotactile/GVS non-visual output | Returned 4 candidates — **all IMAGE-BLOCKED** (Kaczmarek 1991 electrotactile array etc. are academic papers, no device photos). Not promotable per museum image rule. Confirmed thermal Peltier display is 1993 (out of window). Confirmed air-jet arrays have no in-window built hardware. |
| C2 | whole-body posture/balance/locomotion input | **FAILED again** (empty output). This angle's subagent is unreliable. |

- Octen budget now exhausted by subagents. Exa still untouched (0/2).
- Both angles yielded nothing promotable. Confirmed memory's image bottleneck.

### Own free-channel reconnaissance (no budget)

Commons API (paced, desktop UA) checked candidates:

| Candidate | Year | Verdict |
|---|---|---|
| Genigraphics 100 | 1973 | **REJECTED** — pre-window (sortYear would be 1973); also overlaps Polaroid Digital Palette (film-recorder ritual) already in museum. PD images exist (`Genigraphics 100 in use.png` 948x617 PD; `Console.png`; `Sample Slides.png`). |
| Tektronix 4051 | 1975 | **REJECTED** — pre-window; Tektronix instrument-front-panel / scope category already has 7854 + 11401 in museum; storage-tube display not distinct enough. CC BY 2.0 photos exist. |
| Intellivoice | 1982 | **REJECTED** — game-console voice-synthesis add-on; game hardware + speech categories already covered. |
| Canon Communicator | ~1974 | **REJECTED** — out of window; already deferred in memory. |
| IBM SpeechViewer | 1988 | **STILL IMAGE-BLOCKED** — no Commons image. |
| Electrochromic / electroluminescent / bubble-memory displays | various | No usable in-window HCI device photos on Commons; mostly papers. |
| Kodak Carousel / slide-projector control | 1960s-80s | Device is pervasive and not-HCI-distinctive; computer-slide-control interfaces not uniquely documented. |
| cmatrix/logitech etc | n/a | n/a |

### Budget state (FINAL)
- Octen: exhausted (subagents).
- Exa: exhausted (subagent consumed before my attempt; ExaBudgetExceededError).
- Both budgets are final for this run per run rules. No bypass used.

### Curatorial decision
- **Zero promotions from the three fresh angles.** Assessment:
  - PLATO V already in museum.
  - Genigraphics & Tektronix 4051 are pre-1976 (violates in-window rule).
  - Kaczmarek electrotactile, thermal Peltier (1993 out of window), air-jet, GVS — no built in-window hardware with free images.
  - Full-body posture/balance subagent (C) failed twice; own Commons searches for stabilometry/posturography/balance-board/gait returned nothing usable.
- Consistent with memory's "well is dry" assessment. Forcing a weak/low-quality entry would dilute the collection, so no promotion and no `src/data.ts` / wiki edits this run.

### Next-run suggestions (for the record)
- Extract figure from a PD DTIC PDF for TSAS Vest (1991) / Petrofsky FES (needs image pipeline beyond Commons).
- Revisit Genigraphics with Tobowers only if a pre-1976 in-window subdivision or a 1980s service-bureau slide ritual framing is acceptable (edge-case window policy).
- Consider Aesthedes, GreenMan, Legible City — all deferred for scope/license, not image.
