# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run start (2026-08-02T14:26Z)

State check:
- 150 exhibits in src/data.ts, wiki ToC has 149 entries (incl. orphan research sections + Appendix not in ToC).
- Archived 3 stale active info.json files BEFORE any promotion: etch-a-sketch-animator, merlin, sony-typecorder (all three are already in the collection; renaming to info.json.archived prevents auto-promotion gotcha).
- Confirmed promote-potentials.ts still has known bugs (data.ts regex targets `\n\];\s*\n\nexport const featured` which cannot match actual `];\n\nexport const exhibits...` structure; copyImages checks fs.existsSync without prepending potential dir; no ToC update). Plan: manual promotion as in prior runs.

Budget: 7 Octen total (3 subagents x 2 = 6, reserve 1 for validation). 2 Exa fallbacks (not to be used unless needed).

Angles chosen (fresh categories per memory notes, targeting CC-image-likely device classes):
1. Electronic board/tabletop games with handheld electronic "game master" components, esp. audio-clue devices (Stop Thief 1979, Electronic Clue, etc.).
2. Biometric identity / fingerprint verification terminals 1976-1992 (Identix TouchSign, Fingermatrix, Recognition Systems).
3. Child-oriented computer input devices 1980s (Muppet Learning Keys, kid keyboards/trackballs).

## Progress log

### Subagent results (all 3 completed, 2 Octen each = 6 used, 1 reserved)

ANGLE 1 — Electronic game-master devices:
- Stop Thief (1979, Parker Brothers): acoustic-deduction Crime Scanner by Bob Doyle (Merlin designer). STRONG interaction model but ZERO CC images (V&A holds object w/o online image). BLOCKED.
- Electronic Battleship (1977, MB): TMS1000 hidden-state arbiter. No CC images of electronic unit. BLOCKED.
- Voice of the Mummy (1971) out of era; Mystic Skull disproven.

ANGLE 2 — Biometric identity:
- Recognition Systems ID-3D Hand Geometry Verifier (1986, David Sidlauskas): whole-hand ritual, CCD w/ Micron IS-32 DRAM-as-sensor, 9-byte template. Commons CC BY-SA 3.0 image + PD NPS thesis photos + patent US4736203 drawings. IMAGE PASS.
- Identix Fingerprint Terminal (1983-86, Randall Fowler): mechanical finger-roll scanner, garage origin 1972. CC BY-SA 4.0 garage prototype photos (out-of-era) + PD patent US4537484 drawings. IMAGE PASS (with caveats).
- Fingermatrix Ridge Reader (1985): PD patent drawings only, deployment claims unverified. WEAK.

ANGLE 3 — Child computer input:
- Muppet Learning Keys (1984, Koala Technologies; Henson Assocs + Sunburst; Bill Prady & Chris Cerf): 83-key membrane keyboard, sequential alphabet, joystick-port interface. NO Commons images; Centre for Computing History direct photo (HTTP 200) + archive.org 1987 Sunburst flier scan. IMAGE PARTIAL.
- Chalk Board PowerPad (1983): overlay-defined multi-touch 14,400-switch membrane pad. archive.org scans only. IMAGE WEAK.
- KoalaPad (1983): CC images PASS but ALREADY IN COLLECTION (subagent missed excluded list). REJECT.

Next: verify images via Commons API + CCH URL, decide batch.
