# Trace: Research run 2026-07-23 (afternoon)

## Phase 0: Setup
- Read beepy-memory.md. 117 exhibits. Three consecutive zero-addition runs.
- No active info.json files in potential/ — all archived.
- Exa credits exhausted. Grok quality degraded in prior run. Web fetches primary tool.
- Goal: accept zero additions if nothing qualifies. Try fresh, targeted angles not tried in recent runs.

## Phase 1: Candidate Discovery
Launched 5 parallel subagents with angles UNLIKE previous runs:
- Target specific technologies, not broad categories
- Avoid: arcade controllers, assistive tech, media labs (PARC/MIT), European/Japanese broad, Grok brainstorming
- New angles: biometrics, thermal feedback, muscle stimulation, home computer unusual peripherals, telephone interfaces

### Subagent 1: Biometric/identity input devices (1976-1992)
**Results:** 5 STRONG, 3 POSSIBLE, 3 WEAK
- Identimat Hand Geometry Reader (~1974-1987) — STRONG. Peg-guided hand placement, first commercial biometric, deployed at Shearson Hamill. Wikipedia-sourced.
- EyeDentify Model 7.5 Retinal Scanner (1981) — STRONG. "Look into my eyes" paradigm, 360 IR LEDs, Motorola 6800 controller. Patent drawings exist.
- Autosig Signature Verification Pen (1980-1988) — STRONG. Piezoresistive pressure transducer hidden in normal pen. Elegant but image-poor.
- ThumbScan PC-Bio (1986-1989) — STRONG. Cylindrical rotating-prism thumb scanner for PC boot-time login.
- CIC Sign/On (1985-1987) — STRONG. Dynamic signature verification for PC login.
- Identix TouchPrint, Disney Biometric Turnstile, TI Voice Verification — all POSSIBLE but interaction model too generic.

### Subagent 2: Thermal feedback devices
**Results:** ZERO viable candidates before 1992. Thermal output as HCI was virtually nonexistent in this era. Only academic prototypes at 1992 boundary: Ino et al. (1992 Japan), Caldwell et al. (1992-93 UK). Medical thermodes existed but no HCI framing. Dead category.

### Subagent 3: Unusual home computer peripherals
**Results:** 5 STRONG candidates
- Databar Oscar (1983) — barcode wand for C64/VIC-20/Apple II. Overlaps with Cauzin Softstrip.
- Broderbund Science Toolkit (1985) — sensor probes for Apple II. Overlaps with AtariLab.
- dk'tronics Sound Digitizer (1986) — ZX Spectrum audio sampler. Genuinely novel category (sound-as-data) but no CC images.
- Applied Engineering Sonic Blaster (1988) — Apple IIGS stereo audio digitizer. Same category.
- SunRize Perfect Sound (1987) — Amiga audio digitizer. Same category.
- Thought Technology GSR/Temp 2X (1985) — overlaps with Synapse Relax.
- TRS-80 ADC (1982) — generic ADC, not HCI-distinctive enough.

### Subagent 4: Telephone-computer interfaces
**Results:** 5 candidates
- Hayes Smartmodem (1981) — foundational but interaction is typing AT commands. Not HCI-distinctive.
- Novation CAT Acoustic Coupler (1979) — physical handset-in-rubber-cups gesture. Interesting but just a modem.
- IBM Audio Distribution System (1981) — first voicemail. Important but no distinctive hardware.
- Dialogic Voice Boards (1983+) — PC telephony cards. Interesting hardware but developer-facing.
- Audichron STM (1930s-1980s) — electromechanical time/temperature announcer. Fascinating mechanically but passive interaction + origin outside window.
- Verdict: None strong enough as HCI artifacts.

### Subagent 5: EMS/electrical stimulation
**Results:** 3 STRONG, 2 MODERATE
- Nucleus 22 Cochlear Implant (1982-85) — computer → electrical pulses → auditory nerve. First multi-channel CI. But: deeply medical, implanted device.
- Ljubljana FES Walking System (1977-85) — computer-controlled muscle stimulation for paraplegic walking.
- CWRU Hand Grasp FES (1978-90) — computer-controlled hand grasp via electrical stimulation.
- Brindley SARS (1976-82) — sacral nerve stimulator. Too niche.
- Electrotactile TVSS (~1978-88) — electrical skin stimulation for "vision." Image-blocked (Collins Tactile Vest variant already deferred).
- Verdict: Medically significant but blurry line between medical prosthesis and HCI artifact.

## Phase 2: Image Verification
- Wikimedia Commons: zero results for Identimat, EyeDentify, dk'tronics, Databar Oscar, cochlear implant (searched 10+ queries).
- Found: Wikipedia Hand Geometry article uses File:Hand_Geometry_Reading_Device.jpg (CC BY-SA 3.0) — BUT it's a MODERN hand geometry reader (Recognition Systems HandKey, likely 2000s), not the 1970s Identimat. Shows the same peg-guided interaction paradigm.
- Found: File:Hand_Geometry_and_Measurements.jpg (CC BY-SA 3.0) — measurement diagram.
- Found: File:Retina_camera_controls.jpg (CC BY-SA 3.0) — modern Topcon retinal camera, not EyeDentify.
- Downloaded both hand geometry images to potential/identimat/images/ (213KB + 31KB).
- EyeDentify patent US4109237A confirmed with extensive technical drawings. Patent drawings are public domain.

## Phase 3: Decision
**1 addition: Identimat Hand Geometry Reader**

Reasoning:
- Only candidate with verified Wikipedia sources + CC-licensed image demonstrating the interaction paradigm
- Genuinely novel interaction model in the collection: biometric identity as computer input, peg-guided body positioning
- Museum precedent for using later-model photos to represent form factor (Lightwriter SL1)
- EyeDentify and dk'tronics rejected due to image scarcity
- All other candidates rejected for overlap, weakness, or image problems

## Phase 4: Promotion
- Ran `bun scripts/promote-potentials.ts` — script appended wiki section correctly
- Manual fixes required (per known script bugs):
  1. Copied 2 images to assets/wiki/
  2. Added exhibit entry to src/data.ts (before line 1446 `];`)
  3. Added ToC entry #115 to hci-wiki.md
  4. Updated wiki intro count from "114" to "115"
- Build verified: `bun run typecheck` — PASSED
- Build verified: `bun run build` — 118 exhibits, 151 pages

## Phase 5: Files Written
- potential/identimat/info.json
- potential/identimat/images/Hand_Geometry_Reading_Device.jpg (218KB)
- potential/identimat/images/Hand_Geometry_and_Measurements.jpg (31KB)
- assets/wiki/Hand_Geometry_Reading_Device.jpg (copied)
- assets/wiki/Hand_Geometry_and_Measurements.jpg (copied)
- src/data.ts (edited: added identimat entry)
- docs/hci-wiki.md (edited: added ToC entry + updated count + wiki section appended by script)
- potential/runs/2026-07-23T14-32-46-102Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md (this trace)
- docs/beepy-memory.md (to be updated)
