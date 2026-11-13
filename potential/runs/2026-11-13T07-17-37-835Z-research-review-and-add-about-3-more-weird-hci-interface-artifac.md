# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run log — 2026-11-13

### 0. Orientation
- `grep -cE '^\s{4}id: "' src/data.ts` → **318 exhibits**.
- Scanned `potential/*/info.json`: **ZERO active (unpromoted) candidates**. Backlog clean; fresh research required.

### 1. Three parallel research angles dispatched (general subagents, 2 Octen each max)
- **Angle A** — postal/telex/mailing machinery (embodied back-office operator interfaces)
- **Angle B** — bench instruments / weighing scales (answer in strange physical form)
- **Angle C** — consumer electronic toys/educational hardware (strange input/output channel)

### 2. Subagent returns
- **A:** Siemens T1000 telex (1976), Francotyp/Hasler franking machine, SAGEM TX35 (CC0), ITT Creed 23B, BT Puma.
- **B:** Mettler AE260 balance (single control bar = on/off/tare/configure), Mettler AJ100, Brüel & Kjær 2225, Gossen Sixtomat BW1.
- **C:** VTech Socrates + Barcode Battler — **BOTH ALREADY IN MUSEUM** (subagent ignored exclusion list, as memory warned). Real finds with images: Entex Select-a-Game (1981). No-Commons-image: Questron (already deferred), Game Handler (already deferred).
- Decision: verify A and B candidates directly against Commons; discard C.

### 3. Verification round 1 (my own fetches + 2 subagents)
- **Siemens T1000 (1976)** — verified against the Siemens *Description, General Section* manual (scan: samhallas.co.uk) and Crypto Museum.
  - Print **wheel** struck by solenoid hammer (NOT dot-matrix) — correct subagent.
  - ITA2, 50/75/100 Bd selectable; local mode fixed at 100 Bd.
  - Plug-in tape punch (LO) + reader (LE); Local mode does tape preparation, verification, duplication, overpunch correction.
  - **Answerback = diode matrix (≤100 diodes), 20 chars — NOT a peg drum.** Big correction; peg drum is an earlier electromechanical convention.
  - 415×545×208 mm; 17–24 kg. Withdrawal date unverified → will omit.
- **Mettler AE260** — image PD (US DEA). Subagent owned the brief but returned empty; **AE260 production date and the "single control bar" claim remain UNVERIFIED.** Do NOT publish the control-bar interaction.
- **Designa K10 keypunch** — subagent found **no evidence the device exists** at all (no museum, archive, auction, or Wikipedia record). **DROPPED** rather than risk fabricated history.

### 4. Candidate swap: Bull P80 manual card punch
- Commons `File:Bull P80 card punch (1).jpg` CC BY 4.0, Teddy Rosenthal, 3008×2000; same object documented by Tekniska museet.
- Tekniska record (TEKS0047640): **produced 1950–1970, used 1960–1975** (QZ, Stockholm) → **outside the 1976–1992 window**. **DROPPED.**
- Does not fill the epoch gap; do not substitute a manual puncher for a period keypunch.
