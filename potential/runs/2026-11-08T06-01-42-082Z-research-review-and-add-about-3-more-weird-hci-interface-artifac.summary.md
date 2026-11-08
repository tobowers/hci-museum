# Run summary — 2026-11-08T06:01:42Z — research, review, add ~3 more weird HCI interface artifacts

## Outcome
Promoted **1** new exhibit (task allowed up to ~3; one candidate met all four criteria — distinctive interaction model, sourced mechanics, free image, in era — so I stopped rather than pad).

- **Famicom Disk Writer & Disk Fax Kiosks (1986)** — `potential/famicom-disk-writer/`, image `assets/wiki/famicom-disk-writer.jpg` (public domain, Evan-Amos)

Collection **313 → 314**. `bun run typecheck` clean. `bun run build` → "314 exhibits + blog + about, 446 pages".

## Process
1. Recovered prior-run state from traces + `docs/beepy-memory.md`; confirmed zero active (unpromoted) `potential/*/info.json`.
2. **Changed the order of operations**: probed Wikimedia Commons FIRST (free, bot UA, 3s spacing) instead of spending Octen on discovery, per the 11-04 lesson that images are the bottleneck.
3. Screened 6 topic ideas: Steadicam (held — era/operator evidence), Galileo thermometer (rejected — no computing interface), pen plotters/VFD/FED (already represented or refill photos), **Famicom Disk System → Disk Writer/Disk Fax kiosks (selected)**.
4. Verified via the Wikipedia article that the kiosk rewrite transaction (¥500 onto your own Disk Card), the 10,000-kiosk plan, the 1984 rental ban context, the 1987 Disk Fax leaderboard, retailer resentment, and the service running until 2003 are all sourced.
5. Downloaded the PD hardware photo, `file`-verified JPEG, wrote the wiki section + ToC entry 312 + intro count + Appendix credit, added the `src/data.ts` entry, archived the staging info.

## Budget
- Octen 0/7, Exa 0/2 — unused. Free Wikipedia/Commons channels carried the entire run.

## Notes
- Commons API rate-limited mid-run ("You are making too many requests" as a 200 text body); ~60s cool-off fixed it.
- No free photo of an actual kiosk cabinet exists; used a clean PD photo of the Famicom + Disk System and said so in the caption.
- No Field Note written (zero is acceptable); the "shop counter as content delivery system" angle is recorded in memory as a strong future subject and remains un-noted.
