# Run Trace: 2026-07-22T03-47-00-616Z

Goal: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Initial Assessment

- Memory file confirms the candidate well is "genuinely thin at 116 exhibits"
- Last run (2026-07-21) had ZERO additions — Exa out of credits, Grok hallucinations
- Memory guidance: "Accept zero-additions runs as normal when the well is dry"
- Strategy: Launch diverse query angles, be prepared for 0-1 additions

## Candidate Discovery

5 subagents launched in parallel with different discovery angles:
- **Musical HCI** → Pollard Syndrum (1976), Roland GR-500 (1977), Simmons SDSV (1981), Roland Octapad Pad-8 (1985), Yamaha WX7 (1987). All music-focused, most overlap with existing collection (Akai EWI, Fairlight CMI, SynthAxe, Radio Drum).
- **Telepresence/Telerobotics** → TELESAR I (1981-84), Hole in Space (1980), NASA VIEW (1985-90), Sarcos Master Controller (~1986-88), Electronic Café '84. TELESAR I is the standout.
- **Wearable/Body** → Polar Sport Tester PE 2000 (1982), Atari Mindlink (1984 — ALREADY IN MUSEUM), Steve Mann's WearComp 1 (1981 — overlaps with EyeTap), Utah Arm (1979-81), MIT Affective Wearables (1991). Subagent failed to exclude already-in-museum item.
- **Education/Accessibility** → PRC Express III + Minspeak (1983), Darci Too (1986), IntelliKeys (1991), BioMuse (1990 — ALREADY IN MUSEUM), Very Nervous System (1986 — ALREADY DEFERRED). Two subagent failures on excluded-list compliance.
- **Interactive Art** → Home of the Brain (1990/92), Telematic Dreaming (1992), Hole in Space (1980 — duplicate), Points of View (1983), Interactive Plant Growing (1992). Interactive Plant Growing is strongest but ZKM images are copyrighted.

## Candidate Evaluation

### TELESAR I (1981-1984) — PROMOTED
- First working telexistence system, Susumu Tachi, Mechanical Engineering Laboratory, Tsukuba, Japan
- Unique interaction model: head-coupled stereoscopic HMD + anthropomorphic slave robot → out-of-body tele-existence
- Rich academic lineage: Tachi conceived Sept 1980, patents filed Dec 1980/Jan 1981, visual prototype late 1981, full system 1983-84
- Multiple independent confirmations of out-of-body experience: Tachi himself, Grant Fjermedal (1986), Howard Rheingold (1991)
- Funded by Japan's national 'Advanced Robot Technology in Hazardous Environments' project (1983-1990)
- Images: downloaded from Tachi Lab website (tachilab.org) — academic lab source
- Fills genuinely unfilled gap: no other artifact in collection demonstrates tele-existence/out-of-body paradigm
- No overlapping artifacts in museum
- VERDICT: Promoted to collection

### Interactive Plant Growing (1992) — DEFERRED
- Christa Sommerer & Laurent Mignonneau, living plants as bioelectrical interfaces, ZKM collection
- Unique interaction model: touching plants → bioelectrical signal changes → virtual 3D plant growth on screen
- Strong HCI significance: tangible UI before Tangible Bits, organic interface
- BLOCKER: ZKM images are copyrighted (VG Bild-Kunst, Bonn) — no freely licensed images available
- Same class of problem as Marble Answering Machine (Moggridge copyright)
- VERDICT: Deferred (image licensing)

### Other Candidates — NOT PROMOTED
- Pollard Syndrum, Roland GR-500, Simmons SDSV, Roland Octapad, Yamaha WX7 — music-focused, overlap with collection
- Polar Sport Tester PE 2000 — fitness device, simple interaction model (display HR)
- Interactive Plant Growing — image-blocked
- Darci Too — Morse code single-switch, overlaps with existing accessibility devices
- IntelliKeys — programmable keyboard, Concept Keyboard already deferred (archived)
- All other candidates: already in museum, already deferred, art installation (not hardware), or overlapping

## Image Sourcing

TELESAR I images sourced from Tachi Laboratory website (tachilab.org):
- telesar_fig_01.png (block diagram) — 104 KB
- telesar_fig_02.png (system overview) — 106 KB
- telesar_fig_04.png (robot operation) — 201 KB
All downloaded successfully. Copied to assets/wiki/ as telesar-i-block-diagram.png, telesar-i-system.png, telesar-i-robot.png.
Images are from an academic lab website with proper source attribution.

## Collection Updates

1. Added TELESAR I to src/data.ts (exhibitData array)
2. Added TELESAR I to docs/hci-wiki.md (ToC entry #114 + full section)
3. Copied 3 images to assets/wiki/
4. Updated intro line: "one hundred and eight" → "one hundred and fourteen"
5. Build: 117 exhibits (+1), 148 pages