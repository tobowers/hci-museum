# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

Date: 2026-08-21

## State at start
- ~207 exhibits in src/data.ts; candidate well genuinely thin. Prior runs returned mostly already-in-museum/already-deferred/image-blocked candidates.
- Productive unexplored angles per memory: early information appliances / electronic databanks, physiological/computational biofeedback, odd embodied controllers.

## Plan
1. 3 research subagents in parallel, fresh focused angles, max 2 Octen each.
2. Manually verify every candidate against src/data.ts before building info.json.
3. Create info.json for strong candidates.
4. Promote the strongest to the collection.
5. Verify typecheck + build.

## Subagents

### Subagent 1: Odd info-appliances (databanks, translators, data-entry devices, keyboards)
- Result: Toshiba LC-836MN "Memo Note 30" (1978) / Canon LC-MEMO — STRONG. First portable electronic databank; character-by-character text entry through shared calculator keypad onto 8-segment alphanumeric display; 30 fixed slots (6 alpha + 8 numeric each). Verified via Datamath museum (Joerg Woerner). Also Radio Shack EC-4002, Hanimex SLC 891. Image leads: 2 CC images on Commons (actual device LC-836MN CC BY-SA 4.0; LC-1019MN Memo Note III CC BY-SA 2.0).
- Sanders "Precessing display pager" (1976) — patent-only, output-side weirdness; not pursued (borderline).
- Hindsight — unverifiable lead, dropped.

### Subagent 2: Scientific/clinical/biological interfaces
- Sayre Glove (1977) — DROPPED: explicitly deferred in memory (overlaps VPL DataGlove already in museum).
- Fehmi Multiple-Channel Phase-Integrating Biofeedback Computer (1977) — STRONG. 5-channel EEG/EMG, phase-synchrony between cortical sites encoded as audio feedback. US 4,031,883 (filed 1976-07-21, granted 1977-06-28; Fehmi & Schneider / Biofeedback Computers Inc). Distinct from Relax (GSR) and IBVA (single-channel EEG). Patent drawings public domain. Image leads: found full-res patent image URLs via Google Patents meta itemprop="full".
- CID (1982) — paper-only, no artifact/images; dropped.

### Subagent 3: Embodied toys/games controllers
- Braeunig US 4,925,189 body-mounted mercury-switch controller (1990) — patent-only, no known product; not promoted.
- MB OMNI 8-track trivia — discarded (button keypads, not embodied).
- No usable consumer ultrasonic console found (dropped avenue).

## Image subagent
- Toshiba: 2 usable CC images on Commons confirmed; Datamath images are © Joerg Woerner (NOT freely usable) — used Commons images instead, cited Datamath as text source only.
- Fehmi: no Commons images; got full-resolution patent figures via Google Patents meta itemprop="full" URLs (2320×3408, public domain). Fig 3 (trainee with electrodes) = hero image.

## Promotion decision
Promoted 2 well-sourced artifacts with usable free images:
1. **Toshiba LC-836MN Memo Note 30 (1978)** — ur-organizer; real consumer product; 2 CC images.
2. **Fehmi Phase-Integrating Biofeedback Computer (1977)** — only phase-synchrony biofeedback; public-domain patent figures.

Not promoted (weak/poorly sourced): Sanders precessing pager, Braeunig mercury controller, CID, Sayre Glove (deferred), Hindsight (unverifiable).

## Promotion mechanics (all manual — promote-potentials.ts NOT run due to known bugs)
- Downloaded 4 images to assets/wiki/ (toshiba-lc836mn.jpg, toshiba-lc1019mn-memonote3.jpg, fehmi-biofeedback-fig3-trainee.png, fehmi-biofeedback-fig1.png).
- Appended 2 wiki sections to docs/hci-wiki.md + updated ToC (entries 208, 209) + intro count (207→209).
- Added 2 Exhibit entries to src/data.ts.
- Verified: `bun run typecheck` passes; `bun run build` passes (209 exhibits, 271 pages). Both new exhibit pages and OG images generated.

## Blockers / notes
- Octen budget fully consumed by 3 research subagents (7 total). Image validation done via image subagent + direct Google Patents / Commons API fetches.
- datamath.org primary site blocked via webfetch; retrieved content via Wayback Machine snapshot (text facts confirmed; images © — not used).

## Files written
- potential/toshiba-lc836mn/info.json + images/
- potential/fehmi-biofeedback-computer/info.json + images/
- docs/hci-wiki.md (2 sections + ToC + count)
- src/data.ts (2 exhibits)
- assets/wiki/ (4 images)