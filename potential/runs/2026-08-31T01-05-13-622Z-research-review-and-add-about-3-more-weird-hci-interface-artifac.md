# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run start
- Collection state: 230 exhibits confirmed via `grep -cE '^\s{4}id: "' src/data.ts`.
- No active (unarchived) info.json files in potential/ — no stale candidates to worry about.
- Budget: shared 7 Octen / 2 Exa across all subagents + manager.
- Angles chosen (fresh, image-productive likely): (1) unusual-physical-principle home video controllers; (2) dedicated info appliances with mechanical/physical interaction rituals; (3) weird consumer/telephony/clock hardware with distinctive interaction.
- Launched 3 hci-research-subagents in parallel, each 2 Octen max.
  - Subagent A (music/wind instruments) — FAILED: got lost in deliberation, output was truncated deliberation with no usable report. Discarded.
  - Subagent B (dedicated info appliances) — returned HP-01 (deferred in memory, not re-promoted), Lexicon/Nixdorf LK-3000 (brain-in-a-cartridge, CC image verified), Psion Organiser I (write-once EPROM Datapak ritual, CC image verified).
  - Subagent C (game controllers) — returned Foot Craz, QuickJoy foot pedals, Nordic Quest — all image-blocked on Commons and/or overlapping NES Power Pad. Discarded.

## Candidate selection
- Chose **Psion Organiser I (1984)** and **Lexicon/Nixdorf LK-3000 (1978)**. Both interaction-distinct, not in museum, image-verified.
- HP-01 was explicitly deferred in memory (2026-07-24, "wrist-worn calculator incremental") — respected, not re-promoted.
- Could not find a clean 3rd candidate at the quality bar; per memory do-not-pad rule, promoting 2.

## Images
- assets/wiki/psion-organiser-1.jpg (1122×1126, CC Science Museum UK)
- assets/wiki/psion-organiser-datapak.jpg (1756×1756, CC BY-SA 4.0)
- assets/wiki/lk3000-nixdorf-handheld.jpg (4608×3456, CC BY-SA 2.0)
- LK-3000 first download returned HTML error; retried with -L follow-redirect — succeeded.

## Promotion
- Added 2 exhibits: Psion Organiser I (1984) + Lexicon/Nixdorf LK-3000 (1978).
- Manual edits (promote-potentials.ts NOT run — known bugs: no image copy, no data.ts, no ToC):
  - src/data.ts: 2 entries appended.
  - docs/hci-wiki.md: intro count 230→232; added ToC #231, #232; appended 2 wiki sections.
  - Images copied to assets/wiki/ (3 files).
- info.json files archived as info.json.archived (both).
- Verify: `bun run typecheck` passes; `bun run build` passes (232 exhibits, 305 pages).
- data.ts exhibit count = 232; wiki ToC count = 232. Clean match.
- No active info.json files remain in potential/.

## Notes for future
- Commons filename with commas/parentheses: first direct download returned HTML error page; retry with `curl -L -A <browser-UA>` succeeded. Add `-L` for filenames with special chars.
- One-of-three research subagents (music angle) failed entirely (deliberation loop, truncated output). Music-HCI angle remains hard; discard-prone.

