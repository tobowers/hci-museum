# Agent Scout Summary

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992
Run: 2026-08-15T01-00-16-569Z

## What changed

**3 artifacts added to the collection** (all promoted manually; `promote-potentials.ts` not run due to known bugs — no image copy, no data.ts update, no ToC update):

1. **IMSAI 8080 (1976)** — the purest front-panel machine: no ROM monitor, no OS, no keyboard; the human is the boot loader, monitor, and assembler. The manual even ships a game played by flipping the front-panel sense switches (panel as game controller). The WarGames computer. Images: CC0 (WarGames machine), CC BY-SA 4.0, CC BY 2.0.
2. **KIM-1 (1976)** — MOS Technology's $245 hex-keypad single-board computer; TIM monitor in ROM means machine code is typed as hex digits instead of toggled as binary. Home of Microchess, the first commercially sold microcomputer game. Images: 2 public-domain (board + original May 1976 ad).
3. **Nissan/Datsun Voice Warning System (1981)** — the talking car whose "voice" is a 3-inch vinyl record with six parallel grooves inside a box under the dash; a rubber-belt motor and a tiny tonearm drop the needle on the right groove to say "Left door is open" or, in a breathy voice, the "bocking brake." Beat Chrysler's digital EVA to market. Images: 2 public-domain US patent figures.

## Files written / changed

- `potential/imsai-8080/info.json.archived` — research file (archived after promotion)
- `potential/kim-1/info.json.archived` — research file (archived after promotion)
- `potential/nissan-voice-warning/info.json.archived` — research file (archived after promotion)
- `assets/wiki/imsai-8080-wargames.jpg`, `imsai-8080-front-panel.jpg`, `imsai-8080-chm.jpg`, `kim-1-computer.jpg`, `kim-1-ad-1976.jpg`, `nissan-voice-warning-patent-1.png`, `nissan-voice-warning-patent-2.png` — local images (7 files, all license-verified, `file`-checked)
- `src/data.ts` — 3 new exhibit entries appended
- `docs/hci-wiki.md` — ToC entries 189-191, 3 wiki sections, stray leading-space fix on ToC entries 186-188, intro project count corrected (140 → 189)
- `docs/beepy-memory.md` — run lessons appended
- `potential/runs/2026-08-15T01-00-16-569Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace

## Verification

- `bun run typecheck` — PASS
- `bun run build` — PASS ("191 exhibits + blog + about, 246 pages")
- Cross-check — ToC 191 entries, 191 exhibit wiki sections, every data.ts `wikiTitle` resolves to a wiki heading, 0 missing
- Rendered pages `public/exhibits/{imsai-8080,kim-1,nissan-voice-warning}/index.html` reference local `assets/wiki/` images only (no remote hotlinks)

## Subagent/source work

- 3 parallel hci-research-subagents, 2 Octen each (6 of 7 Octen budget; 1 reserved, unused; no Exa needed)
- Direct verification: Wikimedia Commons API (all 7 image licenses), Google Patents US4426691 (drawing URLs + patent facts), IMSAI 8080 user manual text on archive.org (confirmed the front-panel game program), Autoweek + Jalopnik articles (Nissan talking car)

## Deferred (with reasons)

- **Vocaid (1982, TI)** — verified interaction story (36-key grid + removable overlays) but ZERO freely-licensed images anywhere. Revisit if image licensing resolves.
- **Touch Talker / Minspeak (1984, PRC)** — first icon-sequencing AAC device, rich story, but no Touch Talker images; the Mini-VisiCom Commons photos are Goedhart (Dutch), not PRC. Revisit if images surface.
- **Chrysler Electronic Voice Alert (1983-88)** — solid facts, no free photo of the unit. Pairs with the Nissan analog-record story as the digital counterpart.
- **Seiko Pyramid Talk (1984)** — interaction too incremental.

## Still needs review

- None blocking. Optional future work: commission/obtain images for Vocaid, Touch Talker, Chrysler EVA (all three would be strong additions).
- The wiki intro count and ToC are now consistent (191/191); the 3 orphan research sections + Appendix remain intentionally outside the ToC.
