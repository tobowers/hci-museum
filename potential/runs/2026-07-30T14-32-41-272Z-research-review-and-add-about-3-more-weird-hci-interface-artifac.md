# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## 2026-07-30T14:32 — Run Start

Stale info.json files archived: casio-sk1, casio-vl1, linus-writetop, omnichord, rockwell-aim65, roland-mc8 (all already promoted to collection).

Museum at 135 exhibits. Launching 3 parallel subagents with fresh angles:

## Subagent Results

### Angle 1: Video Digitizers (hci-research-subagent)
- **ComputerEyes (1984, Digital Vision)** — iconic, commercially successful. NO CC images on Commons. Founder's website on Internet Archive has photos.
- **Eye-Scan (1986, Digital Engineering and Design)** — direct clone of ComputerEyes, legal takedown story. NO CC images.
- **Kinney Software Video Digitizer (1985)** — DIY kit, build-it-yourself ethos. NO CC images.
- All three strong candidates, all image-blocked.

### Angle 2: Unusual Musical Instruments (hci-research-subagent)
- **Casio DG-20 Digital Guitar (1987)** — rubber-string guitar with fretboard switch matrix. NO CC images.
- **Palmtree Instruments Airdrums (1986)** — free-air gestural drumming with IR wands. NO CC images, extremely rare.
- **Mattel Synsonics Drums (1981)** — toy drum synth with hybrid pad/auto-sequencer interface. ✅ CC BY 2.0 image on Commons.

### Angle 3: Amateur Radio Interfaces (hci-research-subagent)
- **TAPR TNC-1 (1983)** — origin of packet radio, DIY kit. NO CC images.
- **AEA PK-232 (1986)** — iconic multimode TNC, 21-LED dashboard. ✅ CC BY-SA 3.0 image on Commons (PK-232MBX ~1991 variant).
- **HAL CWR6850 Telereader (1979)** — last dedicated standalone radio terminal. NO CC images.

### Additional Searches
- Grok returned only already-in-museum candidates (Power Glove, Sega Activator, U-Force, Power Pad, HeadMaster)
- Octen budget exhausted (7/7 used by subagents)
- Commons searches for additional PK-232 / Kantronics images returned no new relevant results

## Promotion

Two artifacts promoted to collection:
1. **Mattel Synsonics Drums (1981)** — CC BY 2.0 image downloaded to assets/wiki/synsonics.jpg
2. **AEA PK-232 Pakratt 232 (1986)** — CC BY-SA 3.0 image downloaded to assets/wiki/pk232.jpg (MBX variant shown)

Manual edits:
- src/data.ts: 2 exhibit entries added (lines before closing `];`)
- docs/hci-wiki.md: TOC entries 136-137 added, 2 wiki sections appended, intro count updated to 137
- Images verified as valid JPEGs with `file` command

## Verification
- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (140 exhibits, 180 pages)

## Notes
- Build reports 140 exhibits; wiki intro says 137; TOC has 137 entries. 3-exhibit discrepancy pre-existed this run (same issue noted in prior memory entries).
- Only 2 of 9 candidates found had CC images on Commons. Image bottleneck confirmed structural.
- Discovered productive angle: amateur radio/packet radio interfaces were completely unexplored — a genuinely new HCI category.
- Music instrument angle partially productive (Synsonics was new; Casio DG-20 and Airdrums are strong but image-blocked).
