# Curator Scout Run Summary — 2026-07-07

## What changed

3 new HCI artifacts added to the museum collection (84 → 87 exhibits):

### 1. BAT Keyboard (1990)
- **Slug:** bat-keyboard
- **Interaction model:** 7-key one-handed chord keyboard with 25° tilt, backwards keycaps, three thumb-key layers (red/grey/blue), Cherry MX switches with ultra-light custom springs
- **Origins:** Israeli Air Force human-factors research → NASA Stennis Space Center partnership → Infogrip, Inc. (Baton Rouge, LA)
- **NASA Spinoff 1993 verified** (document ID 20020080924)
- **Image:** CHM photo by Mark Richards (bat-keyboard-1.jpg, 600×854)
- **Distinct from Microwriter:** BAT is a desktop tilt-keyboard (not handheld), 7 keys with thumb-layer architecture vs. Microwriter's 5-key handheld device

### 2. NTT ClearBoard-1 (1991)
- **Slug:** ntt-clearboard
- **Interaction model:** Shared glass drawing surface with half-silvered mirror superimposing remote collaborator's video face, maintaining eye contact and gaze awareness. Physical markers on glass — no computer for the drawing itself.
- **Created by:** Hiroshi Ishii & Minoru Kobayashi, NTT Human Interface Laboratories, Yokosuka, Japan
- **Published:** CHI 1992
- **Collection:** ICC Tokyo permanent collection
- **Image:** ICC Tokyo collection photo (ntt-clearboard-1.jpg, 900×716)
- **Significance:** Ishii's breakthrough work; directly preceded his MIT Media Lab Tangible Media Group

### 3. Xerox LiveBoard (1990)
- **Slug:** xerox-liveboard
- **Interaction model:** 67-inch rear-projection interactive display with laser-based (copier-derived rotating polygon mirror) multi-pen sensing. Centerpiece of the Colab electronic meeting room at Xerox PARC. Networked multi-user collaboration with WYSIWIS shared workspace.
- **Team:** 12 CHI 1992 co-authors (Elrod, Bruce, Gold, Goldberg, Halasz, Janssen, Lee, McCall, Pedersen, Pier, Tang, Welch) + Colab team (Stefik, Bobrow, Foster, Suchman, et al.)
- **Commercial:** LiveWorks, Inc. spin-off (1992), $49,500, 2,000+ units sold by 2000
- **Image:** Mark Stefik skunkworks prototype photo (xerox-liveboard-1.jpg, 482×319)
- **Note:** CHM image server returned HTML instead of JPEG for main CHM photo; used Stefik's skunkworks image instead

## Files written
- `potential/bat-keyboard/info.json`
- `potential/ntt-clearboard/info.json`
- `potential/xerox-liveboard/info.json`
- `potential/runs/2026-07-07T04-17-12-502Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-07-07T04-17-12-502Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

## Files modified
- `src/data.ts` — Added 3 new exhibit entries (manual edit; promotion script regex bug prevented auto-insert)
- `docs/hci-wiki.md` — Appended 3 wiki sections + updated TOC entries 85-87 + changed remote image URLs to local `../assets/wiki/` paths

## Images downloaded
- `assets/wiki/bat-keyboard-1.jpg` — CHM catalog photo (Mark Richards) ✓
- `assets/wiki/ntt-clearboard-1.jpg` — ICC Tokyo collection photo (© NTT ICC) ✓
- `assets/wiki/xerox-liveboard-1.jpg` — Mark Stefik skunkworks prototype photo ✓

## Verification
- ✅ `bun run typecheck` — PASSED (0 errors)
- ✅ `bun run build` — PASSED (87 exhibits, 103 pages)

## Deferred / not promoted
- **VersaWriter (1981):** Pantograph drawing arm. Poor image quality (362×339 grayscale only). Revisit if better photos surface from VCFed collectors.
- **Wacom SD-510C (1988):** Brilliant EMR technology, bizarre founder story. But interaction model (pen tablet) already well-covered in collection. Deferred.
- **Bell Labs Electronic Blackboard (1974-82):** Pre-window era, Popular Science images only. Deferred.
- **Maltron Keyboard (1977):** Original 3D contoured keyboard. Deferred for future run.
- **Logitech 3D Mouse (1991):** 6-DOF category already covered. Deferred.

## Lessons for memory

No new promotion gotchas discovered. The known regex bug in promote-potentials.ts (doesn't match `export const exhibits` between `];` and `export const featured`) continues to require manual data.ts editing.

One new note: The CHM images.computerhistory.org server (revonline/ path) returns HTML for some URLs (102678840p-03-01.jpg) but JPEG for others (102662183p-03-01.jpg). CHM image availability is inconsistent. The fallback S3 wasabisys.com URL also returned XML. Mark Stefik's blog images were the reliable fallback for LiveBoard.
