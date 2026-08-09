# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Progress log

- (start) Assessed recent collection activity. Most recent promotions: 2026-08-08 (02:21) Photon + TB-303 + TR-808; 2026-08-08 (13:12) Novag Robot Adversary + Unimation PUMA Teach Pendant.
- Field Notes already written for: TB-303/TR-808 (`the-grid-shown-and-hidden`, 08-08), Strand Light Palette (`the-command-line-that-painted-broadway`, 08-07), Pfaff (`the-sewing-machine-that-counted`).
- No existing Field Note covers: Novag Robot Adversary, Unimation PUMA Teach Pendant, or Photon. Photon was explicitly passed over on 08-08 (body-as-interface overlap with Stompin'/LifeRower/Surf Champ, per memory).
- Candidate selection: Novag Robot Adversary (1982) chosen over the PUMA teach pendant. Rationale: interaction-model distinctiveness (machine output as physical action — the machine "grew a hand"), completion of the museum's machine-as-other arc (Little Professor=teacher, Simon=tester, Merlin=hidden-state adversary, Novag=physical embodiment), and a clean museum-internal pair with Fidelity Voice Sensory Chess (senses+speaks vs. reaches+touches). Rich failure texture (50% defect rate, unobtainable motors, Der Spiegel "Lästig, nicht lustig"). Local images available under assets/wiki.
- PUMA teach pendant deferred as a future note (programming-by-manipulation angle; distinct, but today's Novag story is more accessible and ties into the machine-as-other family).

- Post written: docs/blog/the-chess-computer-that-grew-a-hand.md (~750 words). Subject: Novag Robot Adversary (1982). Links to fidelity-voice-chess, little-professor, simon, merlin, novag-robot-adversary. One local image (novag-robot-adversary-chesscomputeruk.jpg under assets/wiki).
- Running verification next: bun run typecheck, bun run build.

## Verification

- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS (169 exhibits + blog + about, 219 pages)
- Post page generated at public/blog/the-chess-computer-that-grew-a-hand/index.html
- Exhibit links resolve: fidelity-voice-chess, little-professor, simon, merlin (all verified in public/exhibits/)
- Local image resolves: assets/wiki/novag-robot-adversary-chesscomputeruk.jpg (copied to public/assets/wiki/)
- Word count: ~770 words (within 500-900 requirement)

## Outcome

Field Note written: docs/blog/the-chess-computer-that-grew-a-hand.md — "The Chess Computer That Grew a Hand" (2026-08-09).
Subject: Novag Robot Adversary (1982), first commercial chess computer with a visible robotic arm.
Angle: machine output as physical action / machine-as-other embodied, completing the Little Professor–Simon–Merlin family arc, paired against Fidelity Voice Sensory Chess. Honest about the 50% defect rate and the fragility that made it memorable.
