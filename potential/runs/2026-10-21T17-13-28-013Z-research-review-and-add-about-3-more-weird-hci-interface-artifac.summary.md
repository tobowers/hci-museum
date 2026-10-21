# Run summary — review & add about 3 more weird HCI interface artifacts

**Run:** `2026-10-21T17:13:28Z` (trace: `potential/runs/2026-10-21T17-13-28-013Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`)

## Outcome
**Promoted 1 exhibit** (Entex Select-A-Game, 1981). Collection: 299 → 300.

Fewer than 3 was acceptable per the goal ("Do not promote weak or poorly sourced candidates. It is
okay to add fewer than 3 if fewer are ready."). Only one candidate had both a distinctive
interaction AND a freely-licensed local image; the other two well-researched candidates were
image-blocked and were archived as deferred rather than padded in.

## Candidates reviewed
| Candidate | Interaction | Image status | Decision |
|---|---|---|---|
| **Entex Select-A-Game (1981)** | Cartridge-as-computer: base unit is only a two-color 7×16 VFD dot-matrix display + controls; the CPU lives in each cartridge; static per-game overlay | Public Domain on Commons (2 images) | **Promoted** |
| **Tomy Tutor Play Computer (1984)** | Kids' programming toy scaffolding edit-step-run into physical PROGRAMME/STEP/RUN keys | V&A-restricted only; no free image | Deferred (image-blocked) |
| **Talk 'n Play (CBS Toys, 1984)** | Child records own voice into tape program; music mode lets child add/remove instruments (mini mixer) | No image anywhere | Deferred (image-blocked) |

## What was done
- Verified Entex images are **Public Domain** via Commons API; copied + resized to 1200px into
  `assets/wiki/` (`entex-select-a-game.jpg`, `entex-select-a-game-01.jpg`).
- Added exhibit entry to `src/data.ts` (`id: entex-select-a-game`, `sortYear: 1981`).
- Added wiki section + ToC entry 298 in `docs/hci-wiki.md`; updated intro count to "three hundred".
- Archived Tomy Tutor Play Computer + Talk 'n Play in `potential/` with `info.json` documenting the
  image blocker so future runs can revisit them.
- `bun run typecheck`: **PASS**. `bun run build`: **PASS** (300 exhibits, 421 pages).

## Lesson recorded
Image availability is the dominant bottleneck for kids'-toy / V&A-held candidates. Both deferred
candidates are interaction-distinctive and worth revisiting only if a free image surfaces.
