# Summary: 2026-07-19 Research Run

## What changed

Added 2 new exhibits to the HCI Museum collection:

1. **Fire Truck (1978)** — Atari arcade game. First cooperative two-player control of a single shared vehicle. One player seated forward steering the tractor; one standing backward steering the tiller. Designed by Wendi Allen.

2. **Tapper (1984)** — Bally Midway arcade game. Real beer tap handle as primary game controller. Cabinet designed as bar furniture. Developed by Marvin Glass and Associates.

## Files written/modified

- `potential/fire-truck/info.json` → archived as info.json.archived
- `potential/tapper/info.json` → archived as info.json.archived
- `src/data.ts` — added both entries (known promote script bug)
- `docs/hci-wiki.md` — 2 new sections + updated ToC + local image paths
- `assets/wiki/fire-truck-flyer.png` — downloaded
- `assets/wiki/fire-truck-screenshot.png` — downloaded
- `assets/wiki/tapper-cabinet.jpg` — downloaded (CC BY 2.0)
- `assets/wiki/tapper-gameplay.png` — downloaded
- `potential/runs/2026-07-19T03-55-16-336Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace
- `potential/runs/2026-07-19T03-55-16-336Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file

## Verification results

- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (111 exhibits, 139 pages)

## What still needs review

- Wiki ToC still missing entries for 2-XL (1978), Surf Champ (1985), and possibly others from prior promotion batches. Pre-existing issue, not introduced in this run.
- Candidate well is genuinely thin at 109+ exhibits. Future runs should expect 0-2 strong candidates and err on the side of fewer additions.
