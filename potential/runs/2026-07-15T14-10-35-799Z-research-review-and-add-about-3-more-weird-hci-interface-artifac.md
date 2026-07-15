# Run Trace: 2026-07-15T14-10-35-799Z

**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

---

## Phase 0: Setup

- Read Beepy memory. Key notes:
  - Candidate well is "genuinely thin at 107 exhibits" — expect 0-1 strong candidates
  - Must audit potential/ for stale info.json files before promoting
  - Must manually verify all candidates against collection
  - Must manually copy images and update wiki ToC after promotion

- Read hci-wiki.md header: says "one hundred and eight projects" but ToC shows 107 (discrepancy from prior runs)

- Audit: All 99 potential/ directories are clean — all info.json files are `.archived`. No stale candidates to worry about.

## Phase 1: Parallel Research

### Subagent 1 (Pointing/Input Devices)
Returned 5 candidates, but 3 are already in museum or deferred:
- DLR SpaceMouse (1981) — **ALREADY IN MUSEUM** as "DLR Control Ball"
- SpaceBall 1003 (1988) — **ALREADY DEFERRED** in memory (overlaps with DLR)
- KoalaPad (1984) — **ALREADY IN MUSEUM**
- ✅ Gavilan SC Touchpad (1983) — First laptop touchpad, capacitive pad above keyboard
- ✅ Apollo Computer Touchpad (1987) — Workstation keyboard with embedded touchpad

### Subagent 2 (Tactile/Haptic)
Returned 4 candidates:
- Noll Tactile System (1971-1975) — Pre-1976 window, borderline
- Kaczmarek Electrotactile System (1991) — Computer-controlled electrical pulses as info display
- Howe/Kontarinis Tactile Shape Display (1990-1992) — Pin array fingerpad shape display
- Tretiakoff Digicassette (1976) — Refreshable braille; overlaps with VersaBraille

### Subagent 3 (Environmental Sensing)
Returned 4 candidates, but most already in museum:
- U-Force (1989) — **ALREADY IN MUSEUM**
- AtariLab (1983) — **ALREADY IN MUSEUM**
- Mathews Radio Baton (1987) — **ALREADY IN MUSEUM** as "Radio Drum"
- ✅ Hybrid Music 6000 (1988) — Ultrasonic body-proximity sensor for BBC Micro, ~50 units

### Subagent 4 (Grok/Obscure)
Returned 5 candidates:
- Air-Jet Tactile Array (1978) — USAF, pneumatic fingertip display
- Bach-y-Rita TVSS back/abdomen (1969-1980s) — Overlaps with Tongue Touch Keypad
- ✅ SPIDAR (1989) — String-tension 3D force display, Tokyo Tech
- 64-Solenoid Fingertip Display (1987) — Pin array, Stanford
- Soviet Grafikon ES-2709 — Extremely obscure, hard to verify

### Net new candidates worth deeper research:
1. Gavilan SC Touchpad (1983)
2. SPIDAR (1989)
3. Kaczmarek Electrotactile (1991)
4. Hybrid Music 6000 (1988) — likely overlaps with Soundbeam

## Phase 2: Deeper Research + New Angles

### Subagent 5 (SPIDAR)
VERY well researched. Key findings:
- Invented 1989 by Makoto Sato at Tokyo Tech Precision & Intelligence Lab
- First published 1991 (IEICE Japanese), English translation 1992 (Systems and Computers in Japan)
- String-based 3D force feedback: 4 strings + DC motors, grip held in mid-air
- Low-inertia, safe, scalable — fundamentally different mechanism from GROPE-III (robotic arm), Minsky Sandpaper (2-DOF joystick), Iwata (rigid pantograph)
- Sato extremely prolific (199+ papers), co-authors: Yukihiro Hirata, Hiroshi Kawarada
- Commercial spin-off: Arachnoforce Co. (SPIDAR-G, SPIDAR-W still sold today)
- Image concern: original 1989 photos in paywalled 1991 IEICE paper; 1997 JRM PDF (5.6MB) freely downloadable
- **VERDICT: Strong candidate — most novel haptic paradigm available, but image access is crucial**

### Subagent 6 (Gavilan SC)
Thoroughly researched. Key findings:
- May 1983 release, $3,995, "a few thousand" shipped before bankruptcy 1985
- Touchpad positioned ABOVE keyboard (not below like modern laptops) — ergonomically flawed
- Called "solid-state mouse," had multi-zone design (central tracking + Help/Menu/Select tappable zones)
- Velocity-based cursor acceleration (advanced for 1983)
- No patent, no evidence of influence on later trackpad makers (Cirque, Synaptics, Apple developed independently)
- Rich image sources: Wikimedia, CHM, oldcomputers.net, DigiBarn
- **VERDICT: Borderline. First touchpad on a laptop is a "first" milestone, but interaction model (finger-drag for cursor) is incremental. Museum already has KoalaPad (1983, same year, more versatile touchpad) and HP-150 Touchscreen (more novel direct-touch). Subagent assessment: "less novel than HP-150 Touchscreen, comparable to GRiDPad 100 in significance." Defer.**

### Subagent 7 (Non-US/Japanese-European)
Several notable finds:
1. **Sharp WD-3000 (1979)** — First commercial pen-based kanji word processor. Overlaps with existing pen computing exhibits.
2. **Holborn 9100 (1981)** — Dutch computer with light pen as primary interface. Light pens already covered.
3. **ICL One Per Desk (1984)** — Computer-telephone hybrid, UK. Interesting but incremental interaction model.
4. **Facit Twist 4440 (1986)** — Swedish terminal with physically rotating screen (landscape/portrait). Novel physical interaction but narrow scope (tax office terminal).
5. **Concept Keyboard (1983)** — UK paper-overlay reconfigurable membrane keyboard. Tangible interface using paper sheets. Similar concept to Sega AI Computer's plastic overlays but more general-purpose. Used in special needs education.

Of these, **Concept Keyboard** and **SPIDAR** are the two worth pursuing further.

## Phase 3: Deep Verification

### Subagent 8 (SPIDAR Images)
- **No original 1989/1991 prototype photos found**
- All working images are contemporary commercial versions (2015+) from ArachnoForce/NihonBinary
- These are copyright-protected, not CC-licensed
- Wikimedia Commons, Flickr: no SPIDAR images
- The 1991 IEICE paper and 1992 English translation are behind paywalls
- Recommended: contact ArachnoForce or Tokyo Tech for permission/historical photos
- **Verdict: Strong candidate BLOCKED by image availability**

### Subagent 9 (Concept Keyboard)
- Thoroughly researched. 1983, Star Microterminals (Swansea, Wales)
- 128-zone membrane switch matrix. Paper overlays swap the visual labeling; software maps fixed zone codes
- Key HCI insight: teacher-programmable interface, "only the info you want them to have"
- Used primarily in UK special needs education — democratized computing for non-readers and motor-impaired children
- Good image availability: Wikimedia CC-BY-SA 3.0, multiple museum collections (CCFH, Museum Wales)
- Critical assessment: technologically simple (membrane keypad + paper), paper overlay is passive (not sensed), fixed grid constraint
- Museum overlap: KoalaPad had paper overlay feature; Sega AI Computer had plastic overlay sheets
- **Verdict: Moderately strong but incremental. Overlaps with existing touch-surface exhibits.**

## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:354:38)\n    at async main (/home/runner/work/hci-museum/hci-museum/scripts/agent-scout.ts:182:26)\n    at processTicksAndRejections (native:7:39)"
}
```

## Recovery Check: bun run typecheck

Result: PASS

```text
$ tsc --noEmit
```

## Recovery Check: bun run build

Result: PASS

```text
Built static site to /home/runner/work/hci-museum/hci-museum/public (108 exhibits + blog + about, 133 pages)
$ bun scripts/build-site.ts
```
