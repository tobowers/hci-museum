# Field Notes Write Loop Trace — 2026-07-10

## Decision: Write one Field Note

**Artifact chosen:** Surf Champ (1985)

### Reasoning

Reviewed all recent additions from the last 3 curation runs (2026-07-07 through 2026-07-10):

| Artifact | Blog present? | Notes |
|----------|--------------|-------|
| BAT Keyboard | Yes — `the-invisible-keyboard-in-space.md` | Soundbeam, not BAT. Still: chord keyboard covered indirectly. |
| NTT ClearBoard-1 | Yes — `how-to-draw-while-looking-someone-in-the-eye.md` | Already has a great post. |
| Xerox LiveBoard | No | Good candidate but interaction model is large-format display collaboration — less specific a story. |
| Butler in a Box | Yes — `the-box-that-said-yes-boss.md` | Already covered. |
| Gibson Light Pen | No | Good story (Steve Gibson origin) but interaction model (light pen) is well-trodden. |
| Versatron Footmouse | No | Fun story (missile actuators → foot mouse) but less rich. |
| Sega SubRoc-3D | Yes — `the-spinning-disk-that-painted-3d.md` | Actually that's about Vectrex 3D Imager. But SubRoc-3D's spinning-shutter periscope is similar territory. |
| Bandai Terebikko | No | Good story but essentially VHS-as-interaction-medium; less visceral than Surf Champ. |
| 2-XL | No | Strong candidate. Analog HCI, no CPU, 8-track track-switching as interaction. Rich story. |
| **Surf Champ** | **No** | **Selected.** |
| Iwata Desktop Force Display | No | Strong candidate but haptics already covered in `the-machine-that-pushed-back.md` (GROPE-III). |

**Why Surf Champ won:**

1. **Unique interaction model:** Proprioceptive weight-shifting on a physical surfboard that presses keyboard keys. There is nothing else like this in the museum.
2. **Layered story:** Physics professor + surfer + astrophysicist (Mars/Venus missions) + real fluid dynamics + first esports tournament + 180K pre-sales → 3K produced → company collapse. Every layer adds something.
3. **Visual details:** The 19cm board, the metal bobbles, Fistral Beach, the decreasing energy bar, Side B tutorial.
4. **No existing blog overlap:** No post covers weight-shifting, sports simulation, or this kind of doom-by-bureaucracy story.
5. **Modern connection:** True Surf (2020) explicitly credits Surf Champ. Jed Stone, the 1985 champion, played True Surf during lockdown and said it was the same — "only without the feel of the board."

### Slug

`the-surfboard-that-sat-on-your-keyboard`

### Image

`../assets/wiki/surf-champ-surfboard-1.jpg` — the surfboard controller

## Verification

- `bun run typecheck`: PASS (no errors)
- `bun run build`: PASS (95 exhibits + blog + about, 115 pages)

## File written

- `docs/blog/the-surfboard-that-sat-on-your-keyboard.md`

