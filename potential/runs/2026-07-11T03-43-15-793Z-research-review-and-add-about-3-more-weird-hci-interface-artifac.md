# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Session start: 2026-07-11T03:43:15Z
- Read beepy-memory.md — noted deferred list, collection gaps, promotion gotchas
- Identified angles to explore: thermal feedback, squeeze/bend sensors, unusual arcade HCI, environmental interfaces, early textile/soft interfaces, unusual musical controllers, interactive furniture, electrical stimulation feedback
- Launching 5 parallel research subagents with diverse query angles

## Subagent results received

### Arcade HCI:
- Nintendo Arm Wrestling (1985) — DISQUALIFIED per beepy-memory.md (deferred 2026-07-08, passive spring-loaded joystick, no force feedback)
- Bally Sente Stompin' (1986) — Arcade foot-pad. Interesting but conceptual overlap with Power Pad (already in museum) and Amiga Joyboard. Defer.
- Namco Shoot Away (1977) — Projector-on-diorama shooting gallery. Electro-mechanical bridging artifact but interaction model (aim+shoot) is conventional. Defer.

### Squeeze/bend/deform:
- Street Fighter Deluxe Pneumatic Controller (1987) — STRONG CANDIDATE. Rubber pneumatic punch/kick pads with pressure sensing. Players injured themselves. Capcom recalled it. Ars Technica deep-dive with photos. Genuinely novel HCI.
- Wang Squeezable Mouse (1988-1991) — STRONG CANDIDATE. Entire mouse body is deformable; squeeze to "grasp" objects on screen. Patent US5006836A. No production photos found yet — patent drawings only.
- Atari Strain Gauge Brake Pedal (1989-1992) — DEFER. Hard Drivin' already in museum. Strain gauge is interesting but belongs as footnote to existing exhibit.

### Thermal:
- No viable candidates within 1976-1992. Caldwell & Monkman 1992 is borderline. Confirmed dead end for this run.

### Furniture/environmental:
- MIT SDMS Dataland / Media Room (1976-1979) — Eames chair with joysticks, touchpads, voice. Same lab (Architecture Machine Group) as Put-That-There (already in museum). Conceptually interesting but input modalities individually not novel. Defer.
- Nintendo Power Pad — ALREADY IN MUSEUM. Subagent error.
- Automated Desk (1981) — Too uncertain, no access to full paper. Defer.

### Music/art:
- SOUND=SPACE (1985) — Ultrasonic echolocation room-as-instrument. Distinct from Soundbeam (beam interruption vs. ranging). MODERATE CANDIDATE — check overlap with Soundbeam more carefully.
- Brontologic (1979-1981) — Analog patch-panel sequencer, not digital HCI. Defer.
- Cracklebox/Kraakdoos (1970s) — Body-as-circuit, analog audio. Not digital HCI. Defer.

## Top candidates for deep research:
1. Street Fighter Pneumatic Controller (1987) — force-sensing pneumatic pads
2. Wang Squeezable Mouse (1988-1991) — deformable mouse body
3. SOUND=SPACE (1985) — ultrasonic room-as-instrument (check Soundbeam overlap)

Launching deep-dive research on top candidates + 2 more exploratory angle subagents.

## Deep-dive results received

### Street Fighter Pneumatic Controller (1987): EXTREMELY STRONG
- Verified: Aug 1987 release, Capcom + Atari Games collaboration
- Team: Takashi Nishiyama (director), Hiroshi Matsumoto (planner), Ken Hata (Atari cabinet designer), patent team (Takezawa, Kamimori, Morohashi, Kubozono)
- Mechanism: Pneumatic piston-cylinder → pressure sensor → 3 threshold levels → light/medium/heavy attack. Bleed port ensures speed-dependent sensing (can't cheat by leaning).
- ~1,000 pneumatic units sold before recall due to player injuries (bloody fists), physical exhaustion, machine damage
- IMAGES: CC BY-SA 3.0 Wikimedia Commons photo of control panel! Patent drawings (public domain). Ars Technica deep-dive with restoration photos. Atari concept sketches from The Strong Museum.
- ROM difference: pneumatic and 6-button versions use different ROM sets — discovered during 2019 restoration
- PROMOTABLE: Genuinely novel HCI (force-sensing pneumatic impact). Distinct from Exciting Boxing (positional dummy). Well-sourced.

### Wang Squeezable Mouse (1988-1991): MODERATE but IMAGE-POOR
- Verified: patent filed 1988, granted 1991. Inventor James L. Cooper.
- Mechanism: flexible mouse walls → squeeze to "grasp" on-screen objects. Squeeze below threshold = cursor move, above threshold = select/grab.
- Wang FreeStyle system (1989) used stylus+tablet, NOT this mouse. Mouse may never have shipped.
- CRITICAL: ZERO photos of actual squeezable mouse hardware. Patent drawings only.
- DEFERRED: No production photos, no surviving units, may never have shipped. Patent-drawings-only exhibits are weak.

### Mirrors/optics candidates: ALL DEFERRED
- Sega Hologram Time Traveler (1991): Laserdisc FMV + concave mirror Pepper's Ghost. Display innovation, not HCI input innovation.
- Varifocal Mirror 3D Display / Genisco SpaceGraph (1978-1982): Vibrating mirror volumetric display. Display tech, not interaction.
- Atari Asteroids Deluxe (1981): Half-silvered mirror compositing. Same Asteroids interaction, optical trick only.

### Electrical stimulation candidates:
- Strong & Troxel Electrotactile Display (1970): PRE-1976. Out of era window.
- MELDOG Electrocutaneous Robot (1977-1985): Robot zaps blind user's arms with directional commands. Interesting but a complete robotics system, not an interface artifact. Defer.
- Tickle Talker Electrotactile Vocoder (1985): Speech→electrical patterns on fingers. Sensory substitution / hearing aid alternative. Defer.

## Plan:
- Build info.json for Street Fighter Pneumatic Controller → promote
- Launch 2-3 more targeted Exa searches for additional unusual angles
- If 2+ more good candidates found, build their info.json files too

## Deep-dive results for Aesthedes: EXCELLENT
- Aesthedes (1984): Dutch 6-screen design workstation, 10× 68000 CPUs, 220 kg, $150K
- Founder: D.P.G. "Dominique" Claessens (1922–2019), Rijksakademie-trained designer
- Radical UI: no overlapping windows, everything permanently visible, custom designer's keyboard built into entire desk surface (~600 keys on model 2)
- ~200 units made, ~5 survive, 2 fully operational at HomeComputerMuseum Netherlands
- Used for: Dutch 25-guilder note (Jaap Drupsteen, 1989), Heineken labels, Marks & Spencer packaging
- IMAGES: 7+ Wikimedia Commons photos, HomeComputerMuseum gallery, promotional video, original manuals on Bitsavers
- Interactively restored by community — fully documented restoration
- PROMOTABLE: excellent sources, many images, genuinely novel HCI philosophy

## Third-angle subagent results:
- Marble Answering Machine (1992): ALREADY DEFERRED per beepy-memory (copyright-locked images). Skip.
- TI Touch & Tell (1981): Touch-sensitive picture panel + speech synthesis for children. Overlaps with Speak & Spell (TI speech) and KoalaPad/HP-150 (touch). Modality covered.
- Micomsoft Sensor Kid (1985-86): MSX sensor kit. Overlaps with AtariLab (1983, same concept for Atari 8-bit). Skip.

## Final candidates for promotion (2 strong):
1. Street Fighter Pneumatic Controller (1987) — force-sensing pneumatic fight pads
2. Aesthedes (1984) — Dutch 6-screen anti-WIMP design workstation

Both have rich sources, many images, clear HCI novelty. Building info.json files now.


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
Built static site to /home/runner/work/hci-museum/hci-museum/public (97 exhibits + blog + about, 117 pages)
$ bun scripts/build-site.ts
```
