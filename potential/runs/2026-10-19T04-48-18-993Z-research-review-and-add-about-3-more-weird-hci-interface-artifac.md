# Beepy Research Run — 2026-10-19

Goal: research, review, and add ~3 more weird HCI interface artifacts from 1976-1992.

## Initial state
- Collection: 296 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- Active (non-archived) info.json in potential/: 0. No ready unpromoted candidates.
- Archived info.json: 287.

## Angles to try (fresh, image-productive, unexplored)
Based on memory, the well is angle-dependent. Productive fresh categories historically:
- Electronic musical instruments with unusual physical interfaces
- Early dedicated-purpose information appliances
- Early computer-aided instruction/education hardware
- Industrial control pendants

Memory notes the well is mostly dry, so I'll pick 3 distinct fresh angles and expect 0-3 additions.

## Trace

### 1. Scanned potential/ for ready candidates first (per memory guidance)
- Active (non-archived) info.json count: 0 confirmed again at 296 exhibits. No ready unpromoted candidates. Verified against the `runs/` history — prior run (2026-10-18) already cleaned up the stale Scantron 888P info.json.
- So: research-only run expected. Spent remaining effort on fresh angles + direct Commons-verified hunting.

### 2. Three parallel hci-research-subagents (fresh angles, 1976-1992)
- **Angle A — chess / board-game computers** → all image-blocked (Boris Handroid robotic-arm chess, etc.). No viable.
- **Angle B — audio / listening** → Bone Fone (1979, bone-conduction scarf radio), Big Ear, Dancing Flower, Boss TU-12 tuner. All Commons image-blocked except none. Bone Fone is the standout interaction story.
- **Angle C — consumer electronics with unusual input** → Power Pad, Power Glove (BOTH already in museum — duplicates), Super Scope (already deferred 2026-08-01), Talkboy (1992). Mostly duplicates/deferred/weak.

### 3. Direct Commons-verified follow-up on the strongest candidates
- **Bone Fone (1979)**: Confirmed ZERO relevant free Commons images (Commons API search returns only bone-scaffold/skull files — nothing about the radio). **Strongest interaction candidate**: AM/FM stereo worn as a scarf; bone-conduction transducers drive the skeleton so the body becomes the speaker and the ears stay open — a genuine embodied audio interface that inverts the personal-audio paradigm pre-Walkman. Invented when a motorcycle ride revealed vibration carried music through the rider's bones. Era-correct, not in collection. **Located a full-page period advertisement** in *Radio-Electronics*, September 1980 (archive.org identifier `radio_electronics_1980-09`, OCR lines 175-349), as a possible primary-source image path (VersaWriter precedent) — but licensing is a copyrighted magazine ad, so flagged Deferred pending image-resolution decision.
- **Videomaster Star Chess (1979)**: CC-BY-4.0 image DOES exist (José Antonio Ortigueira Amore, 1270×1088; console is a 6808-CPU second-gen dedicated console). Era-correct, not in collection. But interaction = Pong-era directional controllers on a single-game console (chess-as-spaceships with missile capture); NOT a distinctive HCI paradigm. **Not promoting** (avoid padding collection with weak interaction models — per curation principle).
- **Talkboy (1992)**: 6 free Commons images exist. But interaction = varispeed slide on a tape recorder (incremental, not paradigm-level) and it sits at the edge of the window (1992). **Not promoting.**

### 4. Self-checks
- Confirmed Bone Fone image-blocked via Commons API directly (not just subagent claim).
- Confirmed Power Pad / Power Glove already in museum (grep of docs/hci-wiki.md) — subagent duplicates caught.
- Confirmed Videomaster Star Chess and Talkboy images exist with their licensing/era caveats.

### Outcome
**ZERO additions.** Collection stays at **296 exhibits**. The well remains dry across fresh angles. The single standout interaction candidate (Bone Fone) is image-blocked on Commons; a concrete period-ad image path is now documented for it. Videomaster Star Chess and Talkboy are the only clean-image candidates this run, but both have weak/derivative interaction models — deliberately not promoted to avoid padding the collection.
