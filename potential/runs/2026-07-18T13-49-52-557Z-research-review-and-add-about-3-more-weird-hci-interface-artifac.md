# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## 2026-07-18 13:50 UTC — Starting research

Memory says the candidate well is thin (107 exhibits). Expect 0-2 strong finds. Accepting lower yield.

### Angles to explore:
- Multimodal office/document interfaces (pen+voice, etc.)
- Acoustic/ultrasonic interfaces (not SOUND=SPACE, already deferred)
- Thermal/haptic consumer devices
- Earliest computer vision-as-input products
- Gesture-sensing musical instruments not yet covered
- Early RFID/tag-based interaction (before Active Badge)
- Electronic musical toys with novel computer interaction
- Pressure-sensitive or force-sensing consumer devices
- Early EMG/muscle-sensing consumer interfaces (not BioMuse/EEG)
- Puff/wind/air-pressure as continuous (not binary) input
- Truly weird Japanese arcade interfaces not yet covered
- Balance/wobble/tilt boards and platforms
- Ultrasonic positioning input devices (not camera-based)

### Subagents launched (parallel):
1. **Arcade weird interfaces** — returned HotSeat (already deferred), Namco F-1 (interesting but EM-hybrid), Xybots (twist joystick — incremental), Fire Truck (two-posture coop — novel body positioning but standard controls), Time Traveler (holographic display, standard joystick)
2. **Novel physical input devices** — best find: **Electroglottograph / Kay Visi-Pitch** (~1985-1990). Vocal fold impedance via neck electrodes — completely novel body part, distinct from microphones. Also: **T-Scan dental bite force mapper** (1987), teeth as computer input.
3. **Home console weird controllers** — TERRIBLE results. Le Stick (deferred), Roll & Rocker (deferred), Exciting Boxing (ALREADY IN MUSEUM), RDI Halcyon (ALREADY IN MUSEUM), Barcode Battler II (ALREADY IN MUSEUM). Subagent completely failed to exclude known artifacts.
4. **Multimodal/accessibility** — ALL WASTED. Put-That-There, VIDEOPLACE, BioMuse, Microwriter, Buchla Lightning — ALL already in museum. Zero net yield.
5. **Exergaming/body devices** — Computrainer (1986, bike trainer with electromagnetic brake, Apple II-connected), Bach-y-Rita TVSS (1977, already deferred — no images), TSAS Vest (already deferred), NASA VIEW (overlaps with VPL EyePhone), Virtual Fixtures (ALREADY IN MUSEUM)

### Net new candidates (not in museum, not previously deferred):
1. **Electroglottograph / Kay Visi-Pitch** (~1985) — STRONG. Laryngeal impedance sensing. Novel body part.
2. **T-Scan Dental Bite Force** (1987) — MEDIUM. Teeth as computer input. Dental context may be too narrow.
3. **Namco F-1** (1976) — WEAK. Electro-mechanical, no CPU. More amusement device.
4. **Atari Fire Truck** (1978) — WEAK. Novel body positioning but standard controls.
5. **Computrainer** (1986) — MEDIUM-WEAK. Good story but overlaps with Suncom Aerobics + LifeRower.

### Follow-up needed:
- Electroglottograph needs image availability check
- Need additional search angles — the subagent yield was poor

### Round 2 subagents (parallel):
1. **Electroglottograph deep dive** — Confirmed Kay Visi-Pitch Model 6300 (1987) as first PC-connected version with custom ISA ADC card. Kay Elemetrics founded 1949, renamed KayPENTAX 1993, brand now retired. EGG measures vocal fold contact area via 2-3MHz impedance across larynx — works during silent speech. Image availability: Wikipedia fair-use EGG signal trace only. No CC hardware photos. WorthPoint has archived eBay listing photo of Model 6087. Score: 7/10.
2. **Capacitive/electric field HCI** — The Hands (1984, previously deferred), Buchla Thunder (1989, previously deferred), STEIM SensorLab (1990, new but infrastructure, not interface artifact). All music-controller-adjacent, confirming the music-HCI vein is well-mined.
3. **Obscure output/display HCI** — Several finds but mostly already deferred (TSAS, EXOS). New: Teletact Pneumatic Glove (1991-92, William Harwin, air bladders on glove for cutaneous haptics), Fraunhofer IAO 64-pin shape display (1991-92, Peter Astheimer), Smith-Kettlewell fingertip electrotactile array (1978-85, Collins/Madey, electrical pixel display on fingertip — but closely related to Collins work already deferred).

### Net new candidates after Round 2:
- **Electroglottograph / Kay Visi-Pitch** (1987) — STRONG. Novel body part. Image very weak.
- **Teletact Pneumatic Glove** (1991-92) — STRONG. Air pressure cutaneous haptics. Image unknown.
- **Fraunhofer IAO Pin Array** (1991-92) — MEDIUM. Physical shape display. Image unknown. Research prototype.
- **Smith-Kettlewell Electrotactile Array** (1978-85) — MEDIUM-WEAK. Related to deferred Collins work.
- **Computrainer** (1986) — WEAK. Exergaming overlap with LifeRower.
- **STEIM SensorLab** (1990) — WEAK. Infrastructure, not an interaction artifact.

### Decision: focus on Electroglottograph as primary candidate, evaluate Teletact Glove as secondary.

### Image search round:
- Exa failed (API credits exhausted) — used Grok and direct web fetches instead
- Wikipedia EGG page has 3 usable images: Glottal Enterprises hardware (CC), EGG signal trace (fair use, shows Kay), electrodes (fair use)
- WorthPoint blocked (403) — Kay Visi-Pitch 6087 photos behind login wall
- Internet Archive: only 1 text result for "Visi-Pitch" (ERIC document ED364068, 1989, about hearing-impaired children — not a Kay product manual)
- No US patent for Kay's EGG implementation — no public domain patent drawings available
- No freely-licensed photo of the specific Kay Visi-Pitch 6087/6300 hardware exists anywhere online
- Decision: use Glottal Enterprises CC photo as representative hardware with honest captioning. Acceptable per museum precedent.

### Round 3: Grok ideation
- Grok suggested 5 "ultra-obscure" devices: HeadMaster (in museum), Felix (isometric puck — incremental), UnMouse (touchpad — incremental), TongueTouch Keypad (in museum), Magic Wand (overlaps with HeadMaster)
- None were genuinely novel against the existing collection

### Final decision: promote 1 artifact
- Electroglottograph / Kay Visi-Pitch (1987) — only genuinely novel, well-documented commercial product found
- Teletact, Fraunhofer pin array, T-Scan dental — all deferred due to research prototype status, niche context, or image limitations
- Computrainer, Namco F-1 — deferred due to category overlap or borderline HCI status

### Promotion (2026-07-18 ~14:15 UTC):
- Archived 3 stale info.json files (flute-playing-machine, jhu-serial-code-keyboard, midi-dance-floor)
- Ran `bun scripts/promote-potentials.ts` — promoted electroglottograph to wiki and data.ts
- Data.ts entry silently dropped (known bug) — manually added
- Manually updated wiki image refs from remote URLs to local `assets/wiki/` paths
- Manually updated wiki ToC (added line 106)
- Copied 3 images to assets/wiki/
- Typecheck: ✅ clean
- Build: ✅ 109 exhibits, 137 pages

### Lessons for memory:
- Subagents remain unreliable at excluding already-collected artifacts
- The candidate well at 107+ exhibits is genuinely thin — future runs will find 0-1 strong new candidates
- Image-scarce commercial products (Kay Visi-Pitch) are acceptable for promotion when the interaction paradigm is novel, per existing museum precedent
- Grok 4.5 suggestions are mostly already in the museum — the collection has good coverage

