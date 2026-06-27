# Run Trace: 2026-06-27T01-17-44-545Z

**Goal:** Research, review, and add ~3 more weird HCI interface artifacts from 1976-1992.

## 01:17 — Session start
- Read beepy-memory.md, current data.ts, existing collection inventory.
- Collection now has 40 exhibits. Known gaps mostly filled.
- Deferred candidates file contains 10+ items deferred for various reasons.
- Looking for genuinely new candidates that don't overlap with existing collection or deferred list.

## 01:18 — Candidate ideation
Brainstorming distinctive, uncollected artifacts:
1. **Reflection Technology Private Eye (1989)** — Tiny head-mounted LED display using vibrating mirror. Used by MIT wearable computing. "Glance-at" private display.
2. **Radio Drum / Radio Baton (Max Mathews, 1987, Bell Labs)** — 3D capacitive position-sensing musical controller. Two batons tracked in space above a plate.
3. **Very Nervous System (David Rokeby, 1986-1990)** — Full-body video motion-tracking interactive sound installation, not commercial but deeply influential.
4. **Multiple candidate search needed** — Need to send subagents to search broadly for obscure HCI artifacts.

## 01:19 — Launching research subagents
Launching 4 parallel research subagents covering different query angles.

## 01:22 — Subagents returned
All four subagents returned strong results.

**Private Eye (1989):** Excellent candidate. Monocular LED+vibrating-mirror HMD. 720×280 pixels, 2.5 oz, $795. Used by MIT wearable computing, Boeing. Direct ancestor of Google Glass (Thad Starner). Became Nintendo Virtual Boy. Already in Deutsches Museum. Rich sources via Kill Screen, MIT Media Lab, Bill Buxton. NO overlap with existing collection (EyeTap is different lineage).

**Radio Drum/Baton (c.1987):** Excellent candidate. Max Mathews + Bob Boie at Bell Labs. Capacitive 3D tracking of two batons above an antenna plate. 1mm resolution, 100Hz. Musical expression controller. "3D mouse that failed and became an instrument." CHM holds one. In production. Some adjacency to BioMuse (both CCRMA/music) but distinct interaction model. NO direct duplicate.

**Very Nervous System (1986-90):** Strong candidate but overlaps heavily with VIDEOPLACE (already in museum). Both use computer vision for full-body interaction. VNS differs in output (sound vs visuals) and philosophy (resonance vs artificial reality). The collection already has VIDEOPLACE, Mandala, and Put-That-There in the camera-body-tracking space. DECISION: Defer VNS — too much modality overlap. Add to deferred candidates list.

**Additional candidates from broad search:**
- The Legible City (1989): Bicycle-as-controller for virtual text-city navigation. Art installation. Interesting but more art than hardware artifact.
- The Hands (1984, Waisvisz/STEIM): Wearable gestural MIDI controllers. Interesting but thin on sources and visually.
- Buchla Lightning (1991): Spatial MIDI wands. Interesting but Buchla Thunder already deferred.
- Rutgers Master (1992): Force-feedback hand exoskeleton with pneumatic actuators. Promising! Fills wearable haptics gap. Need deeper research.

## 01:24 — Decision
Going to pursue Private Eye + Radio Drum as first two. Research Rutgers Master as third candidate.

## 01:25 — Creating info.json files
Starting with Private Eye and Radio Drum.

## 01:25 — Third candidate: U-Force
Launched subagent for Broderbund U-Force (1989). Returned excellent results. Touchless IR game controller with hand-cut calibration resistors. Spectacular commercial failure. Perfect complement to Power Glove as contrasting 1989 NES motion-control approaches.

## 01:26 — Created all three info.json files
- potential/private-eye/info.json
- potential/radio-drum/info.json
- potential/uforce/info.json

## 01:27 — Image downloads
Downloaded images for all three candidates into assets/wiki/:
- private-eye/: pe-display-unit.png, pe-separate-view.gif, pe-composite-view.gif
- radio-drum/: rd-chm-mathews.jpg, rd-ccrma-device.jpg, rd-uvic-drum.jpg
- uforce/: uf-wikipedia.jpg, uf-hackaday-internal.jpg, uf-compute-press.jpg

One Wikimedia thumbnail returned HTML error; re-downloaded full-res version (9.8MB, acceptable).

## 01:28 — Manual promotion (bypassing broken script)
- Updated docs/hci-wiki.md: added ToC entries 39-41, appended three full wiki sections
- Updated src/data.ts: added three exhibit entries before closing `];`

## 01:29 — Build & verify
- Typecheck: passed
- First build: 40 exhibits, warning "No wiki entry found for Radio Drum (Radio Baton)"
- Root cause: wiki heading uses "/" (Radio Drum / Radio Baton) but data.ts had "(" (Radio Drum (Radio Baton)). Parser extracted "Radio Drum / Radio Baton" from heading.
- Fixed data.ts wikiTitle to "Radio Drum / Radio Baton"
- Second build: 41 exhibits, 47 pages, no warnings. All three artifacts properly included.

## 01:30 — Run complete
Three artifacts promoted to collection. Very Nervous System deferred (overlaps with VIDEOPLACE).
