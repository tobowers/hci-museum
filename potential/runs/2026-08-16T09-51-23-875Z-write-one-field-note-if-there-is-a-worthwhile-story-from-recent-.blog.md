# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Progress

### Decision
Yes — one Field Note written today.

**Subject:** Mattel Dungeons & Dragons Computer Labyrinth Game (1980), angle: "the player was the map" — a spatial game with NO display at all, communicated only through twelve tones, mapped by the player with orange plastic markers (human as rendering engine / the machine as a beeping dungeon master).

**Rationale** (per Field Note lessons in Beepy memory):
- The 08-16 research run added exactly two new exhibits: D&D Computer Labyrinth and Invicta Electronic Master Mind. Both are "hidden state" games, so overlap management was the whole game.
- D&D Labyrinth won on interaction-model distinctiveness: it is the museum's only audio-only spatial interface — a hidden 50-wall dungeon generated in a TMS1100-family chip, navigated by pressing diecast pieces onto a membrane-switch grid, with the player physically mapping the invisible geometry. No near-neighbor note exists (sound-as-the-only-window-into-hidden-space is unrepresented; Stop Thief has no note and is clue-hunting rather than spatial mapping).
- Invicta Electronic Master Mind lost: its machine-as-adversarial-codemaker angle is already anchored by the Merlin note (the-machine-that-wanted-to-play-with-you, Mindbender game) and the machine-as-other triptych (Little Professor / Simon / Merlin). A second note on "interrogate the machine's hidden number" would collide directly.
- Near-neighbor check for the Labyrinth: the-tank-with-no-screen (Big Trak — you can SEE the tank's motion), the-machine-that-wanted-to-play-with-you (Merlin — hidden state but communicated through lit keys), the-front-panel-was-the-game (IMSAI — raw binary interface, game-in-manual). None cover beeps-only spatial navigation with the human as renderer.
- Era-texture gifts used in the post: the White Dwarf "cheap looking plastic castle" review (Aug 1982), the Games 100 lists, the irony that a digital D&D demanded MORE imagination than the tabletop game, the M34012 die (4 inputs / 19 outputs, 475 kHz, 9V battery), MAME + dndlabyrinth.com survival.

### Files
- `docs/blog/the-player-was-the-map.md` — written (frontmatter per spec; 2 local images from `../assets/wiki/`: dnd-labyrinth-board.jpg, dnd-labyrinth-chip.jpg; links to `../exhibits/dnd-computer-labyrinth/`, `../exhibits/imsai-8080/`, `../exhibits/optacon-ii/`, `../exhibits/merlin/`).
- No collection data edited (no wiki, no data.ts).

### Verification
- `bun run typecheck` — PASS (tsc --noEmit, no errors).
- `bun run build` — PASS ("197 exhibits + blog + about, 254 pages").
- Word count: 803 (within 500–900 target).
- Rendered page `public/blog/the-player-was-the-map/index.html` references only local `../../assets/wiki/dnd-labyrinth-board.jpg` and `../../assets/wiki/dnd-labyrinth-chip.jpg` (no remote image hotlinks; the only external URLs are Google Fonts).

### Final
One Field Note written: `docs/blog/the-player-was-the-map.md`. No collection data touched (no wiki edits, no data.ts changes).

