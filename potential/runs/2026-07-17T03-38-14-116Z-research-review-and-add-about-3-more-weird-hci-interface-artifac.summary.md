# Run Summary — 2026-07-17

**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## What happened

This run found three pre-built info.json files in `potential/` that had been researched and half-promoted in a prior session — their wiki sections were already written and local images were already downloaded to `assets/wiki/`, but they were missing from the wiki Table of Contents and `src/data.ts`.

The `promote-potentials.ts` script detected the wiki sections and skipped them, so promotion was done manually.

## Artifacts added to collection

### 1. Flute Playing Machine (1979–1982)
- **By:** Martin Riches (electronics by Roland Pfrengle)
- **Interaction model:** Drawing-to-acoustic-flute — users draw with felt-tip pens on a transparent scroll; 15 photocells read the marks and drive 12 electromagnetic keys on a specially-made alto flute plus a compressed-air blower. The marks are visible to the audience before they're heard.
- **Institutional home:** Berlinische Galerie
- **Distinct from:** UPIC (1977, already in museum) which drives a synthesizer — this drives a real acoustic flute
- **Images:** 4 photos from martinriches.de (CC BY-NC-ND), all verified HTTP 200
- **Files:** Wiki section, data.ts entry, local images in assets/wiki/

### 2. MIDI Dance Floor (1989–1990)
- **By:** Russell Pinkston, Jim Kerkhoff, Mark McQuilken — UT Austin
- **Interaction model:** 32-foot Marley dance floor with 128 Force Sensing Resistors in 8×8 grid — continuous analog pressure sensing (not binary switches). Dancer's weight transfers, speed, and pressure gradients become MIDI messages controlling music and video in real time. Used with Merce Cunningham Dance Studio dancers. Published in JASA 1990.
- **Distinct from:** NES Power Pad (binary rubber switches) and Stompin' (3×3 membrane switch arcade grid)
- **Images:** 2 GIFs from columbia.edu, verified HTTP 200
- **Files:** Wiki section, data.ts entry, images in assets/wiki/

## Deferred

### JHU Serial Code Keyboard (1983)
- Frequency-encoded pseudo-Morse with 3-position switch. Accessibility device.
- Only 1 image (magazine scan). Overlaps with multiple text input devices already in collection.
- info.json archived to .archived

## Research subagent findings

Four parallel subagents explored biometric HCI, telepresence, robot programming toys, and multi-touch/floor interfaces. Key findings:
- **Biometric:** EyeDentify 7.5 (1982), Fingermatrix (1977), HandKey ID3D (1986) — novel category entirely missing from museum
- **Telepresence:** 19 candidates but most military/industrial; consumer standouts like TOMY Verbot (1984)
- **Robot programming toys:** Many candidates but Big Trak, HERO 1 already in museum
- **Multi-touch:** VIDEOPLACE, CMU Sensor Frame, CERN touchscreen already in museum or out of scope

No new candidates were strong enough to build fresh info.json in this run.

## Files written/modified

| File | Change |
|------|--------|
| `docs/hci-wiki.md` | Updated intro count (108→110), added ToC entries #106-107, fixed MIDI Dance Floor remote→local images |
| `src/data.ts` | Added Flute Playing Machine and MIDI Dance Floor entries |
| `potential/flute-playing-machine/info.json` → `.archived` | Archived after promotion |
| `potential/midi-dance-floor/info.json` → `.archived` | Archived after promotion |
| `potential/jhu-serial-code-keyboard/info.json` → `.archived` | Archived (deferred) |
| `potential/runs/2026-07-17T03-38-14-116Z-*.md` | Trace and summary |

## Verification

- ✅ `bun run typecheck` — passed
- ✅ `bun run build` — 110 exhibits, 136 pages
- ✅ Both exhibit pages render correctly
- ✅ No stale info.json files remain in potential/

## Collection gaps still open

- Biometric identity interfaces (retinal, fingerprint, hand geometry) — entirely unrepresented
- Body-worn vibrotactile spatial displays (TSAS Vest, Collins Vest — images remain the blocker)
- Tangible token-based interfaces (Marble Answering Machine — image licensing remains the blocker)
- Speech-to-visual biofeedback for therapy (IBM SpeechViewer — zero screenshots survive)

## Lessons for Beepy memory

- The wiki body can get ahead of data.ts/wiki-ToC when promotion scripts are skipped or incomplete. Run a reconciliation check periodically.
- Three pre-built candidates in potential/ represented work done in a prior session — their wiki sections existed but were incomplete (missing ToC, missing data.ts). Future cleanup should audit for these half-promoted states.
