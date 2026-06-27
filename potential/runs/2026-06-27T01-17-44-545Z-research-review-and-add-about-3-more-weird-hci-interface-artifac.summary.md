# Run Summary: 2026-06-27T01-17-44-545Z

**Goal:** Research, review, and add ~3 more weird HCI interface artifacts from 1976-1992.

## Results

### Added to collection (3 artifacts)

1. **Private Eye (1989)** — Reflection Technology, Inc. (Allen Becker, Waltham, MA)
   - Monocular head-mounted display: 280-LED array + vibrating mirror, 720×280 pixels, 2.5 oz, $795
   - Accidental AR via binocular fusion (one eye covered = see-through illusion)
   - Enabled MIT wearable computing; Thad Starner wore one daily → Google Glass technical lead
   - Nintendo bought the tech for Virtual Boy; already in Deutsches Museum
   - Files: `potential/private-eye/info.json`, `assets/wiki/private-eye/*`

2. **Radio Drum / Radio Baton (c.1987)** — Max Mathews + Bob Boie, Bell Labs
   - Capacitive 3D spatial tracking of two batons above antenna plate; 1mm/100Hz
   - Built as a "3D mouse" that failed; repurposed as musical instrument by father of computer music
   - Still performed today; holds dual conductor/percussionist interaction paradigms
   - Files: `potential/radio-drum/info.json`, `assets/wiki/radio-drum/*`

3. **Broderbund U-Force (1989)** — Broderbund Software
   - Touchless IR controller for NES: 9 IR emitter-detector pairs, COP320 microcontroller
   - Each unit factory-calibrated by hand-cutting resistors; "Don't Touch!" slogan
   - Textbook HCI failure study — ambient light, no tactile feedback, gorilla-arm fatigue
   - Perfect contrast piece with Power Glove (two 1989 NES motion approaches, both failed)
   - Files: `potential/uforce/info.json`, `assets/wiki/uforce/*`

### Deferred

- **Very Nervous System (David Rokeby, 1986-90):** Full-body computer vision → sound. Strong artifact but overlaps heavily with VIDEOPLACE, Mandala, and Put-That-There already in collection (all camera-body-tracking). Added to deferred candidates in memory.

### Files written

| File | Description |
|------|-------------|
| `potential/private-eye/info.json` | Research bundle for Private Eye |
| `potential/radio-drum/info.json` | Research bundle for Radio Drum |
| `potential/uforce/info.json` | Research bundle for U-Force |
| `potential/runs/2026-06-27T01-17-44-545Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` | Live trace |
| `potential/runs/2026-06-27T01-17-44-545Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` | This file |

### Files modified

| File | Change |
|------|--------|
| `docs/hci-wiki.md` | Added ToC entries 39-41; appended three full wiki sections (~270 lines) |
| `src/data.ts` | Added three exhibit entries (Private Eye, Radio Drum, U-Force) |

### Verification

- `bun run typecheck`: passed (no errors)
- `bun run build`: 41 exhibits, 47 pages, no warnings
- All images are local under `assets/wiki/`
- Wiki ToC updated with new entries

### Bugs encountered

- `promote-potentials.ts` regex bug confirmed (skipped script, edited data.ts manually)
- Wikimedia thumbnail URLs can return HTML error pages; use full-resolution URLs instead
- Wiki parser extracts titles with slashes; data.ts wikiTitle must match exactly (parentheses ≠ slashes)

### Collection stats

- Before: 38 exhibits
- After: 41 exhibits
- Era coverage: 1976–1992 (no change)
- New modalities added: Private HMD, 3D capacitive spatial input, touchless IR game control
