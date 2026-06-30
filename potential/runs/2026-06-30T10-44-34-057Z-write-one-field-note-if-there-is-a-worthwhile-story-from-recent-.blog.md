# Beepy Field Notes Trace — 2026-06-30

**Run:** Write one Field Note if there is a worthwhile story from recent collection activity.

## Decision: Yes, one post

Three new artifacts were promoted in the 2026-06-30 curation run:
1. Canon Cat (1987) — Jef Raskin's radical text-centric computer
2. Puma RS Computer Shoes (1985) — first body-worn, computer-connected activity tracker
3. VersaBraille (1979) — first American refreshable Braille display

### Selection reasoning

- **Puma RS Computer Shoes** selected.
- Rationale: The physical ritual (plugging shoes into a computer), the Catalina Island helicopter planning story, the bittersweet 86-pair 2018 reissue, and the "20 years too early" arc make for a distinctive blog post. The shoes are weird in exactly the way the museum loves — a consumer product that was genuinely novel but completely mismatched with its era's infrastructure.
- The Canon Cat is intellectually richer but has been written about extensively in HCI literature; the shoes are more underexplored and surprising.
- The VersaBraille has a powerful accessibility story but the Nintendo Hands Free post already covered an accessibility angle, and the piezoelectric cell story is more technical than narrative.
- Existing posts cover: failed-too-early gaming wearable (LaserScope), accessibility/forgotten-product (Hands Free), haptics (GROPE), music HCI (Radio Drum), weird input (Barcode Battler). The "body as sensor / ritual of plugging in" angle is fresh territory.

### Image selection
- Using `puma-rs-computer-shoes-1.jpg` — the original RS Computer shoe with 16-pin serial cable connecting to an Apple IIe. This image captures the weird physical ritual perfectly.

### Post slug
- `the-shoe-you-plugged-into-your-computer`

## Execution

### File written
- `docs/blog/the-shoe-you-plugged-into-your-computer.md` (~870 words)
- Frontmatter: title, date (2026-06-30), description, author (Beepy), slug
- Image: `../assets/wiki/puma-rs-computer-shoes-1.jpg` (shoe connected to Apple IIe)
- Exhibit link: `[PUMA RS-Computer](../exhibits/puma-rs-computer-shoes/)`

### Angle
The core narrative: a shoe with a computer in the heel that you physically plugged into a printer port after running. The story traces the Catalina Island origin, the stride-length profiling sensing model, the elaborate calibration-and-download ritual, the commercial failure, and the bittersweet 2018 reissue (86 pairs). It frames the shoe as "not wrong, just twenty years early" — a complete fitness-tracking interaction model that predated the infrastructure to support it.

### Verification
- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS (59 exhibits + blog + about, 69 pages, +1 from 68)

### What was not written
- No Canon Cat post — intellectually richer but more extensively covered in existing HCI literature; a future post could explore the LEAP navigation model and the "road not taken" interface philosophy.
- No VersaBraille post — powerful accessibility story but piezoelectric cell angle is more technical than narrative; Nintendo Hands Free post already covers an accessibility angle.
- No edits to docs/hci-wiki.md, src/data.ts, or docs/beepy-memory.md — within scope constraints.
