# Run Trace: 2026-07-02T14-29-39-915Z

## Goal
Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Candidates Investigated

### 1. CAVE Automatic Virtual Environment (1992) — ✅ PROMOTED
- **Decision**: Strong candidate. Room-scale VR, no overlap w/ existing, excellent images on Wikimedia Commons.
- **Subagent**: hci-research-subagent — found rich sources (CACM 1992, IEEE Spectrum 1993, EVL archives), 10+ verified image URLs.
- **Images**: Downloaded 2 images (Crayoland, Ars Electronica) to assets/wiki/.

### 2. Virtual Fixtures (1992) — ✅ PROMOTED
- **Decision**: Strong candidate. First AR system + haptics, excellent images from Louis Rosenberg on Wikimedia Commons.
- **Subagent**: hci-research-subagent — found comprehensive documentation (USAF AL-TR-0089, IEEE Spectrum 2022 memoir, Rosenberg's site).
- **Images**: Downloaded 3 images (exoskeleton photo, pegboard setup, medical concept art) to assets/wiki/.

### 3. SMART Board (1991) — ❌ REJECTED
- **Decision**: No working images of the 1991 first-generation hardware. Patent drawings only. Also overlaps conceptually with LiveBoard.
- **Subagent**: hci-research-subagent — thorough research confirmed no public-domain photos exist.

### 4. LiveBoard (1992) — ❌ REJECTED
- **Decision**: Zero freely accessible images. All photos behind ACM paywall. Historically significant but no visual assets for the museum.
- **Subagent**: hci-research-subagent — good source material but image gap is fatal.

### 5. Aspen Movie Map (1978-80) — ❌ REJECTED
- **Decision**: More of a system/installation than a distinct HCI artifact. Images are laserdisc frame captures, not hardware photos. Only photo of Media Room setup is via Wayback Machine (fragile).
- **Subagent**: hci-research-subagent — excellent documentation but wrong shape for museum.

### 6. Soundbeam (1989) — ❌ DEFERRED
- **Decision**: Genuinely novel interaction model (ultrasonic empty-space → MIDI), but images only available for later generations (Soundbeam 2 from 1998, Soundbeam 6 from 2017). No confirmed 1989 photos.
- **Subagent**: hci-research-subagent — good source material, interesting disability/music crossover. Defer until original-generation images surface.

### 7. MicroTouch UnMouse (1989) — ❌ REJECTED
- **Decision**: Historically important (first commercial finger touchpad) but ZERO verified images found anywhere online. Not a single working photo.
- **Subagent**: hci-research-subagent — found Buxton Collection reference, Computer Chronicles video, but no downloadable images.

## Promotion Actions

1. Created `potential/cave/info.json` and `potential/virtual-fixtures/info.json`
2. Downloaded 5 images total (2 CAVE, 3 Virtual Fixtures) to potential directories
3. Updated `savedImages` fields in both info.json files
4. Ran `bun scripts/promote-potentials.ts` — wiki sections appended, images copied to assets/wiki/
5. Manually added data.ts entries (script regex bug — entries were silently dropped)
6. Updated wiki ToC (entries #67-#68) and intro count (66 → 68)

## Verification
- `bun run typecheck`: ✅ passed (no errors)
- `bun run build`: ✅ passed (68 exhibits + blog + about, 80 pages)

## Files Changed
- `src/data.ts` — added 2 new entries
- `docs/hci-wiki.md` — added 2 new sections + ToC entries
- `assets/wiki/cave-1.jpg`, `assets/wiki/cave-2.jpg` — new
- `assets/wiki/virtual-fixtures-1.jpg`, `virtual-fixtures-2.jpg`, `virtual-fixtures-3.jpg` — new
- `potential/cave/info.json` — new
- `potential/virtual-fixtures/info.json` — new
