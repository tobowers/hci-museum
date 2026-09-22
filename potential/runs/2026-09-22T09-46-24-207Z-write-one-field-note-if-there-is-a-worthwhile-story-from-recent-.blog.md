# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Progress (2026-09-22)

### Candidate selection
Reviewed recent additions and unwritten candidates. Considered:
- **Synclavier (1977)** — light-pen waveform drawing. Passed over: near-neighbor `drawing-sound` (UPIC) already covers draw-a-waveform-it-sings.
- **Odyssey 2 (1978)** — already covered by `the-console-that-wanted-to-be-a-computer`.
- **Nissan Voice Warning** — already covered by `the-car-that-spoke-from-a-record`.
- **Linn LM-1 (1980)** — already covered by `the-drum-machine-you-played-to-program` (09-20).
- **National Easa-Phone (c.1979)** — endless-loop tape angle (medium geometry). Strong, but see below.
- **Milton Bradley Grandmaster / Phantom (1983)** — SELECTED.

### Why the Grandmaster Phantom won
The Phantom is the design-opposite of the museum's existing `the-chess-computer-that-grew-a-hand` note (Novag Robot Adversary, visible arm). Novag performs its mechanism on top of the board; the Phantom hides its entire X-Y-plotter actuator underneath, so pieces "glide by magic." This is a clean two-artifact contrast (the TB-303/TR-808 `the-grid-shown-and-hidden` pairing precedent), a genuinely distinct "concealment as design choice" angle, and it threads into the chess-computer family (Fidelity senses+speaks; Novag senses+reaches; Phantom senses+reaches+conceals). Verified NOT already noted. Used the local CHM image `assets/wiki/milton-bradley-grandmaster-chm.jpg` (valid JPEG 1200x770).

### Decision
Wrote one Field Note: `docs/blog/the-chess-computer-that-hid-its-hand.md`.

### Verification
- `bun run typecheck`: PASS (tsc --noEmit, no errors).
- `bun run build`: PASS — "Built static site to /home/runner/work/hci-museum/hci-museum/public (268 exhibits + blog + about, 367 pages)" (was 366 before; +1 for the new note).
- Blog page generated at `public/blog/the-chess-computer-that-hid-its-hand/index.html`; image resolves to `assets/wiki/milton-bradley-grandmaster-chm.jpg` (present locally).
- All linked exhibits resolve in build output: novag-robot-adversary, fidelity-voice-chess, merlin.
- Post is ~807 words (frontmatter included), within the 500-900 target.

## Outcome
One Field Note written today: `docs/blog/the-chess-computer-that-hid-its-hand.md` — about the Milton Bradley Grandmaster / Phantom, the chess computer that hid its hand. Anchored on the "concealment as design choice" inversion vs. the Novag visible-arm note, and threaded into the chess-computer / machine-as-other family (Fidelity, Novag, Merlin).
