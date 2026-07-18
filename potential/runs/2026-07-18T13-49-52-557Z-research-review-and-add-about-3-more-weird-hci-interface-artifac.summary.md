# Run Summary: 2026-07-18 — Research, Review, and Add Weird HCI Artifacts

## Overview
- **Goal:** Research and add ~3 more weird HCI interface artifacts from 1976-1992
- **Result:** 1 artifact added to the collection (Electroglottograph / Kay Visi-Pitch)
- **Verification:** Typecheck ✅, Build ✅ (109 exhibits, 137 pages)

## What Changed

### Added to Collection
**Kay Visi-Pitch / Electroglottograph (1987)** — A PC-connected laryngeal impedance measurement system. Two neck electrodes pass a 2-3 MHz current across the vocal folds; changes in tissue impedance produce a waveform of vocal fold movement — even during silent speech. Connected to IBM PC/XT/AT via custom ISA ADC card. Used in speech therapy clinics as real-time visual biofeedback. Kay Elemetrics (founded 1949, acquired by Pentax Medical 1993).

- **Interaction paradigm:** Bioelectrical impedance sensing of internal vocal fold movement — not speech recognition (microphone → text), not EMG (muscle electricity), not EEG. A completely novel body part (vocal folds) and physical principle (tissue impedance) for computer input.
- **Images:** Wikimedia Commons CC-licensed Glottal Enterprises hardware photo (representative EGG device), Wikipedia EGG signal comparison (showing Kay/Laryngograph trace), Wikipedia electrodes photo.
- **Image limitation:** No freely-licensed photo of the specific Kay Visi-Pitch 6087/6300 hardware exists. Used competing manufacturer (Glottal Enterprises) device as representative hardware image with honest captioning. Acceptable per museum precedent (patent drawings, paper figures, and representative images have been used for software-centric artifacts).

### Files Written
- `potential/electroglottograph/info.json` — detailed research dossier
- `potential/electroglottograph/images/eg2-pcx-electroglottograph.jpg` — CC hardware photo
- `potential/electroglottograph/images/egg-signal-comparison.jpg` — Kay signal trace
- `potential/electroglottograph/images/egg-electrodes.jpg` — electrode closeup
- `assets/wiki/eg2-pcx-electroglottograph.jpg` — promoted hero image
- `assets/wiki/egg-signal-comparison.jpg` — promoted secondary image
- `assets/wiki/egg-electrodes.jpg` — extra (not used in wiki, available for future use)
- `docs/hci-wiki.md` — updated (new exhibit section, updated ToC, local image refs)
- `src/data.ts` — updated (new exhibit entry)
- `potential/runs/2026-07-18T13-49-52-557Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace
- `potential/runs/2026-07-18T13-49-52-557Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file

### Archived
- `potential/flute-playing-machine/info.json` → `info.json.archived`
- `potential/jhu-serial-code-keyboard/info.json` → `info.json.archived`
- `potential/midi-dance-floor/info.json` → `info.json.archived`

## Research Yield Analysis

5 parallel subagents were launched across 2 rounds. Yield was thin:

**Round 1 (5 subagents):**
- Arcade subagent: Most candidates already in museum or deferred (HotSeat, Fire Truck, Time Traveler). 1 weak new find (Namco F-1, electro-mechanical, no CPU).
- Novel input subagent: 2 genuinely new candidates (Electroglottograph, T-Scan dental).
- Console controller subagent: ALL candidates already in museum or deferred. Zero net yield.
- Multimodal/accessibility subagent: ALL candidates already in museum. Zero net yield.
- Exergaming/body subagent: Mostly already deferred or in museum. Computrainer overlaps with exergaming.

**Round 2 (3 subagents):**
- Electroglottograph deep dive: Confirmed details. Image availability weak for Kay-specific product.
- Capacitive/electric field: The Hands (deferred), Buchla Thunder (deferred), STEIM SensorLab (new but infrastructure, not artifact).
- Output/display: Teletact Pneumatic Glove (new, research prototype, weak images), Fraunhofer pin array (new, research prototype, weak images), Smith-Kettlewell electrotactile (related to deferred Collins work).

**Why only 1 artifact:**
- The candidate well at 107 exhibits is genuinely thin
- Subagents repeatedly returned already-collected artifacts despite exclusion lists
- The only genuinely novel, well-documented commercial product discovered was the Electroglottograph
- Per memory: "Accept fewer additions when quality is low; do not pad the collection"

## What Still Needs Review

- **Teletact Pneumatic Glove (1991-92):** Air bladder haptics on a VR glove. Interesting paradigm but research prototype with no known surviving images. Revisit if image documentation surfaces from University of Reading archives.
- **Smith-Kettlewell Fingertip Electrotactile Array (1978-85):** 64-electrode electrical pixel display for fingertip. Related to deferred Collins work. Revisit if clear differentiation established.
- **STEIM SensorLab (1990):** General-purpose sensor-to-MIDI infrastructure. Important enabling technology but not a standalone interaction artifact. Consider as supporting exhibit for music HCI section.
