# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run context
- Earlier run today (2026-08-20T00:29) already promoted CAPTAIN NTX-5000 and View-Master Interactive Vision
- Collection at 206 exhibits, build passes
- Memory notes: candidate well is thin, zero-additions runs are normal
- This is the second run of the day

## Fresh angles for this run
1. Early computer-controlled musical instruments with unusual physical interfaces (beyond existing collection)
2. Early electronic learning aids with unusual physical/digital hybrid interaction
3. Early document/image scanning with unusual physical interaction paradigms

## Research Subagents Launched (3 parallel)

### Subagent 1: Music HCI — unusual physical interfaces
- Octen: 2 calls
- Found: VideoHarp (1990) — optical occlusion finger tracking, no CC images
- Found: Airdrums (1986) — first commercial motion-sensing hand-held MIDI controller, no CC images
- Both were research prototypes or obscure commercial failures with no CC-licensed images
- Top recommendation: VideoHarp (genuinely novel interaction model but no CC images)

### Subagent 2: Learning aids — physical/digital hybrid
- Octen: 2 calls
- Found: Playskool Alphie (1978) — physical card-swapping as program selection, CC image on Commons
- Found: Talk 'n Play (1983) — 4-track cassette + microphone, same inventor as 2-XL, no dedicated CC images
- Found: Databar OSCAR (1983) — barcode wand for software distribution, already deferred
- Found: MB OMNI Entertainment System (1980) — 8-track tape with dual-layer data, no CC images
- Top recommendation: Playskool Alphie

### Subagent 3: Scanning/OCR — unusual physical interaction
- Octen: 2 calls
- Found: TSI OsCar (1985) — OCR reading machine for blind, no CC images
- Found: Canon NoteJet (1993) — laptop with built-in scanner, outside 1992 window
- Found: Kurzweil Reading Machine (1976) — already in museum
- Found: Xerox Telecopier 200 (1978) — drum-based fax, no CC images
- Top recommendation: none (all image-blocked or out of range)

**Octen budget: 6 of 7 used by subagents. 1 attempted but exhausted. Exa: 0 of 2 used.**

## Direct Research (Post-Octen)

### Alphie the Robot (1978)
- Wikipedia article: https://en.wikipedia.org/wiki/Alphie
- CC BY 2.0 image on Commons: File:Alphie (5200963278).jpg by jencu
- Released by Playskool (Hasbro) in 1978
- Interaction: card-swapping tangible programming — printed cardboard cards inserted into slot mechanically align with soft-touch buttons
- Not optically scanned, magnetically encoded, or barcode-read — purely mechanical alignment
- True TUI (tangible user interface) predating "Tangible Bits" (CHI 1997) by 19 years
- Alphie II (1983), Talking Alphie (1983) with speech synthesis
- Renamed "Talking Alphie" — card library grows to cover math, spelling, matching, sequencing, music
- Preserved at Strong National Museum of Play

### Other candidates considered:
- Talk 'n Play (1983): invented by Michael Freeman (same as 2-XL), 4-track cassette + microphone. No dedicated CC images on Commons. Deferred — overlaps with 2-XL too closely.
- Game Genie (1990): pass-through ROM modification cartridge. Interesting but interaction model is "plug in and type letters" — not weird embodied HCI.
- Capsela Voice Command (1987): voice-controlled construction toy. Subagent reported no CC images.
- VideoHarp (1990): optical occlusion finger tracking. No CC images. Deferred.
- Airdrums (1986): first motion-sensing hand-held MIDI controller. Already deferred in prior run.

## Promotion Plan (Manual)

### Playskool Alphie (1978)
1. ✅ Created potential/alphie-robot/info.json
2. ✅ Downloaded CC BY 2.0 image from Wikimedia Commons
3. ✅ Copied image to assets/wiki/alphie.jpg
4. ✅ Added wiki section to docs/hci-wiki.md (appended at end)
5. ✅ Added ToC entry (#207)
6. ✅ Added entry to src/data.ts
7. ✅ Updated intro count from "two hundred and six" to "two hundred and seven"
8. ✅ Verified: typecheck passes, build succeeds (207 exhibits)

## Verification
- bun run typecheck: ✅ PASS
- bun run build: ✅ PASS (207 exhibits, 268 pages)

## Files Changed
- docs/hci-wiki.md (new wiki section + ToC entry + intro count update)
- src/data.ts (new data entry)
- assets/wiki/alphie.jpg (new image)
- potential/alphie-robot/info.json (new)
- potential/alphie-robot/images/alphie.jpg (downloaded source)
- potential/runs/2026-08-20T12-28-28-032Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md (this trace)
