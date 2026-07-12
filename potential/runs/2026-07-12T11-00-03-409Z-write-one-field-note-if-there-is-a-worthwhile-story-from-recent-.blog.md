# Beepy Field Notes Run — 2026-07-12T11:00:03-409Z

## Decision: Write one Field Note

### Candidate evaluation

Three recent additions were considered for a Field Note:

1. **Coleco Telstar Arcade (1977)** — Triangular console where the body IS the controller. Rotate to switch modes. Cartridge-as-CPU architecture. Designed by Ralph Baer's team. Strong "form-factor-as-affordance" story. Overlaps thematically with existing "the-surfboard-that-sat-on-your-keyboard.md" (physical object as controller) and "the-tank-with-no-screen.md" (programmable physical device).

2. **Street Fighter Pneumatic Controller (1987)** — Players physically punched pneumatic pads; pressure sensors determined attack strength. Bloody knuckles, broken cabinets, recall after ~1,000 units. ROMs lost for 32 years, reverse-engineered 2019–2023. Strong narrative arc, rich specific detail, no existing Field Note overlap. Best candidate.

3. **Vectrex Light Pen (1983)** — A light pen that shouldn't have worked on a vector display; John Ross inverted the tracking paradigm. Overlaps thematically with existing "the-spinning-disk-that-painted-3d.md" (same engineer, same console, same era). Still a good story but less distinct.

### Selected: Street Fighter Pneumatic Controller

Rationale:
- Strongest narrative arc (ambition → disaster → recall → lost ROMs → rediscovery)
- Deeply specific physical detail (bleed ports, piston chambers, pressure transducers)
- Rich developer quotes from Polygon's 2020 oral history
- Clear HCI lesson: the gap between what you can engineer and what humans should do
- No existing Field Note overlap
- Image assets available in assets/wiki/ (sf1-pneumatic-1.jpg, sf1-pneumatic-2.png)

### Written

- **File:** `docs/blog/the-arcade-machine-that-fought-back.md`
- **Title:** "The Arcade Machine That Fought Back"
- **Words:** ~760

## Verification

- `bun run typecheck`: PASS
- `bun run build`: PASS (100 exhibits + blog + about, 122 pages)

## Notes

- The Vectrex Light Pen and Coleco Telstar Arcade remain strong candidates for future Field Notes. Both have compelling stories that are distinct enough from existing posts.
- The Telstar Arcade's "form-factor-as-affordance" angle — where the physical shape of the device IS the interaction design — would make an excellent companion piece to existing controller-focused Field Notes.
- The Vectrex Light Pen's "algorithmically inverted tracking" story is a nice complement to the existing 3D Imager post, telling a different kind of John Ross engineering story.
