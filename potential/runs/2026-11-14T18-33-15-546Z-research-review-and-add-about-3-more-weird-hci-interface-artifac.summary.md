# Summary — research & add ~3 weird HCI interface artifacts

**Outcome:** 1 exhibit promoted (319 → 320). Zero ready candidates existed in `potential/` (all 317 info.json archived), so the run was research-first.

## Promoted
- **Variophon Breath Controller (1981)** — Realton (Euskirchen) / Univ. Cologne musicology institute. Breath pressure + lip-reed pulsation used as the synthesizer's raw *excitation signal* (Impulse-forming synthesis), not as a loudness fader. Talk Talk's *The Colour of Spring* (1986). Two CC BY-SA 4.0 Commons photos (Reuter/Schefczik) downloaded locally. Differentiated in text from the existing Lyricon (1977, optical breath) and EWI exhibits.

## Considered and rejected
- **Scriptel electrostatic pen tablet (~1984–86)** — best "unusual transduction" story, but no free image exists.
- **Ticket validators / punch validators (DDR, SNCF, NS)** — interaction too thin, no in-period free imagery (SNCF composteur photo is generic, undated).
- **Nerve-based / prosthesis keyboard switches (Keystroke, Tongue Touch Keypad)** — only John Wiley's Apple II lash-up photo exists; that depicts Apple hardware, not the switch.
- **Computone Wind Synthesizer** — near-duplicate of Lyricon already in museum.
- **3M 5210 library self-check** — subagent evidence was hallucinated (Grok); discarded.
- Corrected subagent errors: IBM TrackPoint and U-Force were reported as new but are already in `src/data.ts`.

## Verification
- Commons API hit HTTP 429 after burst requests; recovered with 20–45 s backoff, batched `titles=`, `maxlag=5`.
- `bun run typecheck` clean; `bun run build` → 320 exhibits, 457 pages.
- Changes left uncommitted for review.
