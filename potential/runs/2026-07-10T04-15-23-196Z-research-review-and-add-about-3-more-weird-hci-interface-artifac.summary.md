# Summary: 2026-07-10T04-15-23-196Z — Research, review, and add ~3 more weird HCI interface artifacts

## Outcome: 3 artifacts added to the museum collection

### Promoted exhibits:

| # | Artifact | Year | By | Interaction Model |
|---|----------|------|-----|-------------------|
| 1 | **2-XL** | 1978 | Mego Corp (Michael J. Freeman) | 8-track tape track-switching as interactive branching — analog HCI, no CPU |
| 2 | **Surf Champ** | 1985 | New Concepts Ltd. | Proprioceptive weight-shifting on a miniature surfboard keyboard overlay |
| 3 | **Iwata Desktop Force Display** | 1990 | Hiroo Iwata, Hiroaki Yano (U. Tsukuba) | Blind exploration of virtual objects via desktop pantograph force feedback |

### What changed:
- **src/data.ts**: Added 3 exhibit entries (2-XL, Surf Champ, Iwata Desktop Force Display)
- **docs/hci-wiki.md**: Added 3 wiki sections with deep dives, team, media, and sources
- **assets/wiki/**: Downloaded 5 images:
  - `2-XL_Educational_Toy_Robot_Mego_Corporation_1978.jpg` (Wikimedia Commons, 2279×3014)
  - `surf-champ-surfboard-1.jpg` (Spectrum Computing, 624×350)
  - `surf-champ-front.jpg` (Spectrum Computing, 2918×1900)
  - `iwata-desktop-force-display-1.jpg` (SIGGRAPH History Archives, 716×1080)
- **potential/**: Created 3 info.json files:
  - `potential/two-xl/info.json`
  - `potential/surf-champ/info.json`
  - `potential/iwata-desktop-force-display/info.json`
- **potential/runs/**: Created trace file (this run's trace)

### Verification:
- Typecheck: PASS (`bun run typecheck`)
- Build: PASS (`bun run build` → 95 exhibits + blog + about, 114 pages)

### Research process:
- Launched 5 parallel hci-research-subagent tasks covering unusual game controllers, sensory interfaces, interactive installations, haptics/motion, and consumer electronics
- Evaluated 25+ candidates across all 5 research angles
- Selected top 3 based on: interaction model distinctiveness, source quality, image availability, and lack of overlap with existing collection
- Did not select: Atari Project Puffer (unreleased), Exus Foot Craz (overlaps with Power Pad), Stompin' (foot grid overlaps), Atari Video Music (music section full), Mind Mirror EEG (overlaps with IBVA), Nose Gesture Interface (thin visuals), Hole-in-Space (no physical artifact), Erl King (art installation), Walk-Through Computer (museum exhibit, not product), Interactive Plant Growing (art installation), Liquid Views (art installation), SPIDAR (haptics overlap), JPL FRHC (overlaps with DLR Control Ball), 64-Solenoid Display (thin images), Sarcos Arm Master (overlaps with EXOS), Seiko UC-2000 (overlaps with RC-1000), PXL-2000 (media format, not HCI), Sony Data Discman (interaction model too simple), View-Master Interactive Vision (strong alternate, deferred for future)

### Deferred for future:
- View-Master Interactive Vision (1988): VHS + 8-bit sprite compositing + dual audio track branching. Strong candidate but museum already has Terebikko covering VHS-based interaction. Mechanisms differ enough for eventual promotion.

### Image source notes:
- 2-XL: Wikimedia Commons (CC-licensed). 3 images available in Commons category.
- Surf Champ: Spectrum Computing community archive. Images are scans of physical media/packaging. No freely-licensed photos of the surfboard in use exist (BBC photos are copyright). Used packaging/inlay scans from community archive.
- Iwata Desktop Force Display: SIGGRAPH History Archives. Academic conference archival image, used with attribution for museum/research purpose.

### Known issues:
- Surf Champ surfboard image (surf-champ-surfboard-1.jpg) is small (624×350). A higher-resolution image would improve the exhibit page.
