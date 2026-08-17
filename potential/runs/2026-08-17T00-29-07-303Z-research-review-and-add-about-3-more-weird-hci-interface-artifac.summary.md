# Summary — research, review, and add about 3 more weird HCI interface artifacts (2026-08-17)

## What changed

Three artifacts were added to the HCI Museum collection (197 exhibits → 200):

1. **Bildschirmtext (BTX) Terminal (1983)** — West Germany's national videotex terminal whose receiver pays per page, with a chip-card reader as the billing meter. The only metered-pay-per-screen interface in the museum. Promoted from a pre-existing fully-researched candidate in `potential/btx-terminal/`.
2. **Quotron II (1986)** — Wall Street's dedicated market-data terminal driven entirely by a custom field-key keyboard (LAST/BID/ASK/VOL...) into a green-phosphor CRT. The Bloomberg ancestor. Promoted from `potential/quotron-ii/`.
3. **Turbo Touch 360 (1992)** — Triax's capacitive touch-plate game controller that replaced the D-pad with eight touch sensors under a membrane; slide-to-steer with zero downward force, marketed against "numb thumb." Fresh find from the game-controller research angle.

CAPTAIN System / NEC NTX-5000 (1984) — fully researched prior-run candidate — was **deferred** (info.json archived): the batch already contained two terminal-family artifacts, and a third videotex terminal would saturate the category. Its fax-raster interaction model is unique; noted in memory for a future themed run.

## Files written

- `potential/turbo-touch-360/info.json` — new candidate file (with local images in `potential/turbo-touch-360/images/`).
- `potential/runs/2026-08-17T00-29-07-303Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace.
- `potential/runs/2026-08-17T00-29-07-303Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file.
- `docs/hci-wiki.md` — 3 new exhibit sections, 3 ToC entries, intro count updated to "two hundred."
- `src/data.ts` — 3 new Exhibit entries.
- `assets/wiki/` — 10 local images (7 carried over from prior-run potential dirs + 3 new Sega Retro CC-BY-4.0 downloads).
- `docs/beepy-memory.md` — durable lessons appended.
- `potential/{btx-terminal,captain-ntx5000,quotron-ii,turbo-touch-360}/info.json` → archived (`info.json.archived`) to prevent future auto-promotion.

## Verification

- `bun run typecheck` — PASS
- `bun run build` — PASS (200 exhibits, 257 pages)
- Generated exhibit pages confirmed to render parsed wiki content (deep-dive sections + local `assets/wiki/` image references).
- All 10 images verified as valid files with `file`; all promoted collection exhibits use local images only.

## Research process

- 3 research subagents launched in parallel (electronic toys / learning aids; unusual game controllers; dedicated information appliances), each with focused angles and excluded-list instructions.
- Octen budget was fully consumed by subagents (7/7) before a final validation query; Turbo Touch 360 was validated instead via the Sega Retro MediaWiki API + full-page fetch (primary print citations: Electronic Games #1 Oct 1992, GamePro #39 Oct 1992 → 1992 US release at $34.95), Wikipedia, and Google Patents (US5367199, priority 1992-05-01). No Exa used.
- Subagent quality: two of three returned already-in-museum candidates despite excluded lists (Barcode Battler, Atari Mindlink, Covox Voice Master, Optacon II, Kurzweil, Speak & Spell). Every candidate was manually verified against `src/data.ts` before promotion.

## Still needs review

- **CAPTAIN / NEC NTX-5000** — archived deferred; promote alongside other national pre-Internet online terminals in a future themed run (Minitel + BTX are in; CAPTAIN's fax-raster mechanism has no equivalent in the collection).
- Field Note candidates from this batch: Turbo Touch 360 (touch-pad paradigm / the "360 that wasn't" angle — no near-neighbor note), Quotron II (keyboard-as-query-language), BTX (the meter economy / CCC hack).
- The Merrill Lynch Quotron image (6.5MB, 4551×2941) and desk-unit PNG (5.7MB) are large but within the museum's existing asset-size precedent (largest existing is 13MB); no resize tool was available. Consider optimization in a future site-polish pass.
