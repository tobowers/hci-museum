# Run trace: research-review-and-add-about-3-more-weird-hci-interface-artifac (2026-09-24)

Goal: find ~3 strange/embodied HCI hardware artifacts from 1976-1992, promote the strongest.
Collection count at start: 271 exhibits. Well is angle-dependent, not empty.

## Plan
- Read memory, check potential/ for ready candidates (none active; all archived).
- Launch 3 parallel hci-research-subagents, each with one fresh angle and ≤2 Octen + ≤1 Exa.
- Build info.json for strong candidates, promote manually (promote-potentials.ts has known bugs), verify typecheck+build.

## Angles chosen (fresh, image-likely, unexplored per memory)
1. Early fax / telefacsimile machines as embodied electromechanical output ritual (1976-1992).
2. Computer-linked surveying/digital measuring instruments with distinctive hand controllers.
3. Electronic/electromechanical music-adjacent OR "smart home appliance with physical programming card" — need to pick; will decide in subagent prompt.

## Subagent results
- **Angle 1 (fax machines):** Mufax Courier (1975) — 4 verified CC BY-SA 2.0 Commons images, portable drum fax, "1-bit instant feedback" lamp. QWIP TWO/401E (1980-82) — distinctive handset-into-coupler+drum interaction but ZERO Commons images (museum provenance only). Ricoh PF-2 (1991) — world's smallest in-car fax but CC BY-NC-SA (non-commercial), not freely licensed.
- **Angle 2 (surveying/geodetic):** All four (HP 3820A, Geodimeter System 2000, Wild DI1000/GRE, Sokkia SET) image-blocked on Commons. Strong embodied interaction (belt-worn data recorders, remote keypads) but no free images → not promotable.
- **Angle 3 (smart-home physical-card):** Robertshaw Energy Manager program-card thermostat (image-blocked + needs period manual), Constructa Programmkarte washing machine (image-blocked + unverified), Intermatic TN311 timer (free image but interaction incremental — mechanical timer, not really computer HCI).

## Decision
Promote ONLY the Mufax Courier (272nd exhibit). Every other candidate is image-blocked, non-free-image, or interaction-incremental. Per museum discipline, do NOT pad to 3 weak candidates. One strong, well-sourced, image-verified addition is honest at 271 exhibits.

## Promotion
- Mufax Courier (1975) — Muirhead & Co portable drum fax. 3 images resized to 1200px → assets/wiki/mufax-*.jpg. Added to src/data.ts (id/slug mufax-courier, sortYear 1975), wiki ToC (272), wiki intro count → "two hundred and seventy-two", wiki section appended. info.json archived as info.json.archived.
- typecheck PASS, build PASS (272 exhibits, 372 pages). Built page public/exhibits/mufax-courier/index.html verified with local assets/wiki refs.

## Blockers / still needs review
- QWIP TWO / QWIP 401E is the strongest interaction-distinct fax candidate (handset-into-acoustic-coupler + rotating drum + speed/contrast + test-sheet ritual) but is image-blocked — revisit if a period photo surfaces (Powerhouse, Canada SciTech Museum hold units).
- Surveying hand-controller instruments (Geodimeter System 2000 remote keypad, HP 3820A, Wild GRE data recorder) all image-blocked — revisit with a unit-photo/brochure/manual-scan source.
- Robertshaw program-card thermostat & Constructa Programmkarte washer image-blocked and need period-manual confirmation.
