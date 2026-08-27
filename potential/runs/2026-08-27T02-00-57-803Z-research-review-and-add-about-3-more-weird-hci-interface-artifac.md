# Run Trace: research-review-and-add-about-3-more-weird-hci-interface-artifacts

Date: 2026-08-27T02:00:57Z

## Goal
Find ~3 more weird HCI interface artifacts from 1976-1992, review, and promote the strongest to the collection. The well is well-explored at 213+ exhibits, so expect 0-3 additions.

## Plan
1. Scan potential/*/info.json for ready, unpromoted candidates (historical gold mine).
2. Launch up to 3 focused research subagents on unexplored angles.
3. Verify candidates, create info.json, promote best ones.

## Progress

### Step 1: Scan existing potential directories
- No ACTIVE info.json files remain in potential/ (all archived = already promoted). 205 info.json.archived files, all correspond to promoted exhibits.
- Collection has 216 exhibits in src/data.ts. Well is at 213+ per memory; expect 0-3 additions.

### Step 2: Launch 3 research subagents
Angles chosen (fresh, not saturated, targeting interaction-model-rich hardware likely to have CC images):
1. Laboratory/scientific instruments as HCI (waveform/spectrum analyzers, chart recorders with novel controls — beyond Tektronix 7854, Fluke 9010A, Kay Visi-Pitch)
2. Broadcast/video production control surfaces (character generators, still-stores, teleprompters, video switchers with unusual physical interfaces — beyond Strand Light Palette, Quantel Paintbox)
3. Electronic cash registers / point-of-sale / office automation with unusual physical interaction (touch screens, spatial keyboards, odd entry mechs)

### Step 3: Subagent results & screening
Octen budget fully consumed by subagents (7/7 used across 3). No further Octen/Exa. Must use direct fetches/Commons for all image work.

Candidates returned:
- [Lab] Rockland 7530A FFT Spectrum Analyzer (1980) — "intelligent interface" collapses ~12 params to 3 knobs (Sensitivity/Span/Tuning) + soft-keypad; constraint-enforcing modeless UI. NOT in museum. Images: manual-scan only, no unit photo. Distinct HCI story but image-poor.
- [Lab] Nicolet 4094 Digital Oscilloscope w/ Light Pen (1981) — optical light-pen on CRT. Images scattered.
- [Lab] Spectral Dynamics SD345 Spectrum Analyzer — full custom LED keypad banks. Images @ recycledgoods (non-CC).
- [Broadcast] Ampex ACE edit controller (1981) — early Carroll IR touchframe screen + designated edit keyboard + joystick; patent US4521870. NOT in museum. Images @ evl.uic.edu operator guide.
- [Broadcast] VISTA80 character generator (1975-77) — custom composition keyboard, in Canada Science & Tech Museum. 
- [Broadcast] Dubner CBG-2 (1982) — tablet-template interaction, needs verification.
- [POS] ViewTouch (1986) — ALREADY IN MUSEUM (verified via data.ts). EXCLUDE.
- [POS] IBM 5265 Retail Terminal (1979) — rolling-cylinder prompt drum + paper keyboard overlays + chicklet keys. NOT in museum. Strangest physical interaction. Weak-ish images (Wikipedia prototype photo + Hagley video).
- [POS] IBM 3653 (1978 Model P1) — 20-backlit-caption guidance panel. In era (P1 1978).

Selection: IBM 5265 (strongest embodiment), Ampex ACE (early IR touchscreen), Rockland 7530A (best HCI-PhD angle). Need image verification before promotion.

### Step 4: Image verification results
Image subagent + my own direct Commons API sweeps (Octen/Exa all exhausted; 7/7 used):
- IBM 5260: CLEAN CC BY-SA 4.0 hero image from Norsk Teknisk Museum via Commons (IBM_5260_retail_system_prototypes_1.jpg). VERIFIED downloaded (779×1240 valid JPEG).
- Rockland 7530A: NO free image anywhere on Commons (0 hits). Only in-manual scans with unclear copyright. DISQUALIFIED on images.
- Ampex ACE: Commons has 0 relevant images; only all-rights-reserved operator-guide screenshots at evl.uic.edu. NOT cleanly licensed. DEFERRED for image resolution.
- Nicolet 4094 (light-pen scope): no Commons images. DEFERRED.
- IBM 3653: no Commons images; near-sibling of 5265 (both IBM retail). DEFERRED.

### Step 5: Fact verification for IBM 5265
Verified via Wikipedia "IBM Retail Store Systems" + vintagepointofsale.com first-hand account (Byron, operator 1978-85):
- IBM 5260 Retail System / IBM 5265 POS terminal. Announced 8 Jan 1979, IBM General Systems Division. Aimed at smaller stores.
- Rolling-cylinder prompt display (physical rotating cylinder showing captions through a window; customization stickers added/removed). CONFIRMED first-hand.
- Paper keyboard overlays over oddly-sized chicklet keys for programming the register directly, no host. CONFIRMED.
- Data to removable 8-inch floppy disks; standalone or cluster up to 10; Bisync to System/34/32/3. $3,850 standalone; first deliveries Sep 1979; withdrawn 16 Apr 1986.
- CC BY-SA prototypes image (Norsk Teknisk Museum).

Decision: Promote IBM 5265 as a single strong, honest addition. The image well is dry (confirmed by extensive Commons sweeps); do NOT pad with image-blocked candidates per museum discipline.

### Step 6: Promotion (manual)
- Created potential/ibm-5265-retail-system/info.json
- Downloaded hero image to assets/wiki/ibm_5260_retail_prototypes.jpg (CC BY-SA 4.0, Norsk Teknisk Museum, 779×1240 valid JPEG)
- Edited docs/hci-wiki.md: added ToC #216, updated intro count to "two hundred and seventeen", appended full wiki section
- Edited src/data.ts: added exhibit entry (id ibm-5265-retail-system, year 1979, sortYear 1979)
- Archived potential/ibm-5265-retail-system/info.json → info.json.archived (prevents auto-promotion)
- Verification: `bun run typecheck` PASS. `bun run build` PASS (216 exhibits + blog + about, 284 pages).
- Collection exhibit count: now 216 (was 215).

### Outcome
- Added: 1 exhibit (IBM 5265 Point of Sale Terminal / IBM 5260 Retail System, 1979).
- The other strong candidates (Ampex ACE, Rockland 7530A, Nicolet 4094) were image-blocked or not cleanly licensed and are documented as DEFERRED. ViewTouch (returned by POS subagent) was already in the museum. Do NOT re-scout Rockland (no free image confirmed via Commons 0-hits).

### Step 7: QA fix
- ToC anchor: initial entry used `#ibm-5265-point-of-sale-terminal-1979` but the section heading has " / " so the true GitHub-slugified anchor is `#ibm-5265-point-of-sale-terminal--ibm-5260-retail-system-1979`. Fixed the ToC display text to match the heading exactly and corrected the anchor (per 2026-08-01 memory gotcha). Build re-verified PASS.