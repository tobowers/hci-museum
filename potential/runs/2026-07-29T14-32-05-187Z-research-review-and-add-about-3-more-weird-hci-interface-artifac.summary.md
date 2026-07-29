# Run Summary: 2026-07-29 — Add ~3 Weird HCI Artifacts

## What changed

Added 3 new artifacts to the museum collection: **135 exhibits total** (up from 132).

## Artifacts added

| # | Artifact | Year | Interaction Model |
|---|----------|------|-------------------|
| 130 | **Roland MC-8 MicroComposer** | 1977 | Calculator keypad as music programming interface — no piano keyboard |
| 131 | **Suzuki Omnichord** | 1981 | Capacitive "Sonic Strings" strum plate + chord button grid — bimanual electronic autoharp |
| 132 | **Linus Write-Top** | 1988 | First tablet computer with handwriting recognition — no keyboard, pen-only |

## Files written/modified

- `potential/roland-mc8/info.json` — new candidate info
- `potential/omnichord/info.json` — new candidate info
- `potential/linus-writetop/info.json` — new candidate info
- `potential/runs/2026-07-29T14-32-05-187Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace
- `docs/hci-wiki.md` — 3 wiki sections appended, ToC updated (130-132), count updated (132→135)
- `src/data.ts` — 3 exhibit entries added
- `docs/beepy-memory.md` — new additions, deferred candidates, promotion gotchas
- `assets/wiki/roland-mc8-front.jpg` — CC BY-SA 2.5 image
- `assets/wiki/roland-mc8-festa.jpg` — CC BY 2.0 image
- `assets/wiki/omnichord-om27.jpg` — CC BY 2.0 image
- `assets/wiki/omnichord-museum.jpg` — CC BY-SA 4.0 image
- `assets/wiki/linus-writetop.jpg` — PD image

## Verification

- `bun run typecheck`: PASSED
- `bun run build`: PASSED (135 exhibits + blog + about, 174 pages)

## Subagent performance

7 subagents launched across fresh angles:
- **Scanning/OCR**: 4 candidates found, only Datacopy 700 had CC images (not selected — interaction model less distinctive)
- **Game controllers**: mostly already-in-museum or already-deferred (subagent returned KoalaPad, Vectrex Light Pen, Cauzin Softstrip despite exclusions)
- **Biometric/barcode**: confirmed all image-blocked for biometrics; Cauzin Softstrip already in museum
- **Electronic notepads/pens**: 1 strong candidate with CC image (Write-Top)
- **Music interfaces**: 2 strong candidates with CC images (MC-8, Omnichord)
- **Medical HCI**: all image-blocked except NeuroCom EquiTest (diagram only, no photo)
- **Network terminals**: strong candidates found (Bloomberg, IBM 3279, NABU) but period hardware images scarce

## Key lessons

1. **Music HCI still has unexplored corners.** The MC-8 (calculator-keypad music programming) and Omnichord (capacitive strum plate) are genuinely novel interaction models distinct from all existing music exhibits.
2. **Pen computing category can support one more.** The Write-Top's "first with handwriting recognition" distinction justifies adding it despite existing Pencept PenPad and GRiDPad entries.
3. **Network terminals are a rich category with an image problem.** Bloomberg, Quotron II, IBM 3279, and NABU all have strong HCI stories but either lack period hardware photos or have interaction models (keyboard+screen) that are less compelling as pure HCI.
4. **Subagent exclusion lists are still unreliable.** Multiple agents returned already-in-collection candidates despite explicit exclusion instructions. Manual verification remains essential.
5. **The well is not dry — but new categories require deliberate angle selection.** Music HCI and network terminals proved productive where game controllers and biometrics did not.

## What still needs review

- The Bloomberg Terminal (1982) remains a strong candidate if period hardware images can be sourced
- IBM 3279 Color Terminal (1979) is well-documented with CC images but needs a clearer HCI framing
- NABU Network PC (1982) has an excellent "ahead of its time" story but interaction model is incremental
