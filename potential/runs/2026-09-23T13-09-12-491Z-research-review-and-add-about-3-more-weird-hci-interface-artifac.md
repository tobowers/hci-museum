# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run start
- Date: 2026-09-23
- Build count at start: 271 exhibits (grep -cE '^\s{4}id: "' src/data.ts)
- Prior run (2026-09-22) was zero-addition at ~268 exhibits
- Octen budget: 7 shared across manager + all subagents
- Exa budget: 2 shared

## Fresh angles launched via 3 parallel subagents

### Subagent 1: Telephone adjunct / automatic dialer HCI
- Searched: Octen (2 queries) for automatic dialers, telephone adjuncts, computer telephone interfaces
- **Result: Western Electric Card Dialer (1969)** — physical punched-card-as-dialing-directory. ZERO Commons images. 
- **Result: C64 Voice-Controlled Dialer (1989)** — academic prototype. ZERO Commons images.
- **Result: Bell 801A ACU (1964)** — pre-window. ZERO Commons images.
- **Verdict: All image-blocked. No promotable candidates.**

### Subagent 2: Computerized sewing / embroidery machine HCI
- Searched: Octen (2 queries), Exa (2 queries) for early electronic sewing machines
- **Result: Singer Athena 2000 / Touch-tronic 2000 (1975/78)** — "first electronic sewing machine" with radical knob-less touch interface. ZERO Commons images.
- **Result: Singer "draw-to-program" patent (US4074642, 1976)** — operator draws patterns on planar surface to program embroidery. Patent-figures-only.
- **Result: Necchi microprocessor-controlled household machine** — Commons unverified.
- **Verdict: Image-blocked or patent-figures-only. No promotable candidates.**

### Subagent 3: Electronic safe lock / access control HCI
- Searched: Octen (2 queries) + patent lookups + Commons verification
- **Result: La Gard Electronic Dial Combination Lock (US4745784, 1988)** — push-and-turn rotary dial, thin-film pressure pad array, penalty delays. Commons image exists but of modern 3740M variant, not period unit. Interaction model uses rotary dial repurposed as code input with axial push — genuinely novel.
- **Result: C&M Technology Computerized Combination Lock (US5061923, 1991)** — self-powered stepper-generator dial with LCD showing random starting number + directional arrows. Zero Commons images (patent figures only).
- **Result: Sargent & Greenleaf Hotel Room Safe Lock (US4887445, 1989)** — keypad+LCD menu-driven dialog with penalty timer. Zero Commons images (patent figures only).
- **Verdict: The La Gard push-and-turn dial interaction is genuinely novel but the only Commons image is a modern production unit, not the 1988-patent era device. Patent-drawing promotion possible but weaker than preferred.**

## Manager-side followup (Octen exhausted — used by subagents)

### Additional Commons searches performed directly (free, no Octen):
- Yamaha WX7 wind controller: 6 CC BY-SA/CC BY images on Commons. Distinct interaction (magnetic reed switches vs EWI's capacitive touch) but overlaps Akai EWI already in museum. Per memory: music/expressional music controllers are exhausted. Deferred.
- Tomy Digital Diamond (1978): CC BY-SA 2.0 image. LED-mechanical handheld game. Interaction too simple for museum at 271 exhibits.
- Tomy Drive Yourself Crazy (1976): CC BY-SA 2.0 image. Simple driving game. Too simple.
- Tomy Hit and Missile (1979): CC BY-SA 2.0 image. Electro-mechanical game with light bulbs. Not computer interface.
- Mattel Aquarius (1983): 5 Commons images. Conventional home computer, not distinct enough.
- Emerson Arcadia 2001: 5 Commons images. Conventional console, controller similar to existing exhibits.
- VTech CreatiVision: 7 Commons images. Conventional console with detachable keyboard. Not strange enough.
- Milton Electronic Talking Game (1980): CC BY-SA 2.0 image. "First competitive talking game." Interaction simple (recorded voice + buttons).
- Sequential Circuits Prophet 5: Commons images. Standard keyboard synth with patch memory — not strange enough for museum.
- Parker Brothers Wildfire (1979): Electronic pinball. LED display, standard buttons. Too simple.

### Zero-addition angles confirmed:
- Telephone adjuncts (all image-blocked for period devices)
- Computerized sewing machines (all image-blocked or patent-figures-only)
- Electronic safe locks (patent-figures-only or modern-unit images)
- Wind controllers (WX7 overlaps EWI)
- Simple electronic handheld games (interaction too simple for museum at current size)
- Conventional game consoles with minor interface variations (not strange enough)

## Conclusions
- The well at 271+ exhibits is confirmed structurally thin for automated discovery.
- Three fresh angles returned ZERO promotable candidates with clean Commons images.
- Image resolution for deferred candidates remains the primary expansion path.
- This is another zero-addition run.

## Files updated
- This trace file
- Beepy memory updated with run findings
- Summary written to .summary.md