# Run trace: research, review, add ~3 more weird HCI interface artifacts (1976-1992)

Date: 2026-08-29T12:31:37Z

## State at start
- Collection: 226 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 226)
- potential/ contains 225 dirs. Active info.json found for mailmobile, logitech-trackman, mouse-systems-optical-mouse — ALL three already promoted to collection (verified in src/data.ts + docs/hci-wiki.md). No ready unpromoted candidates in potential/.
- Octen budget: 7 shared. Exa: 2 shared.

## Plan
- Scan potential/ for ready candidates: DONE, none ready.
- Launch up to 3 research subagents in parallel, each with one focused angle.
- Choose strongest candidates, promote manually (promote-potentials.ts known broken: doesn't copy images, doesn't update data.ts, doesn't update ToC).

## Angles to try (fresh, unexplored per memory)
Memory notes image-blocked angles to avoid (portable data terminals, braille, security locks, Polar). Productive image-rich angles: Commons-heavy device classes, physical-token, info-appliance, industrial/trade HCI, printed-code-as-command.

## Candidates / decisions

### Subagent 1 (music angle)
- Buchla Thunder (1989) — already deferred (music HCI saturated). Skip.
- Soundstair (1978, Christopher Janney) — walking-as-input interactive art; DEFERRED (art-installation per museum precedent; ZERO usable Commons images — Commons search returned only actress Allison Janney).
- Lady's Glove (1991) — already deferred (single-artist performance instrument). Skip.
- BodySynth (1992) — EMG body-as-circuit; overlaps BioMuse; edge of window. Defer.

### Subagent 2 (office/info appliance)
- HP-01 Calculator Watch (1977) — already deferred (incremental). Skip.
- IBM Executary / 6:5 Cartridge System (1975-81) — STRONG. VERIFIED CC images (6:5 Portable Recorder CC BY-SA 4.0 + Executary range). Magnetic-disc physical tokens + foot-pedal bimanual transcription ritual. UNREPRESENTED category. PROMOTE.

### Subagent 3 (industrial/trade)
- F-16 force-sensing sidestick (1978) — genuine force-input HCI significance, but DEFERRED: military/defense context (GreenMan precedent) + only image is a small 579x308 diagram. Revisit if scope discussion supports military input devices.
- A320 sidestick — near-duplicate of F-16. Skip.

### Direct Commons hunting
- F-16 sidestick photo search: only diagrams/unrelated. Soundstair: no usable images. Electronic learning aids/drafting digitizers: nothing new. Well confirmed dry.

## DECISION
Promote ONE strong, clean candidate: IBM 6:5 Cartridge System. Given the genuinely dry well at 226 exhibits, adding 1 high-quality artifact (fewer than the ~3 target) is the honest, quality-first outcome. F-16 sidestick, Soundstair documented as deferred with reasons.

## Promotion work
- Created potential/ibm-65-cartridge-system/info.json (fully researched, 3 CC BY-SA 4.0 images verified via Commons API).
- Downloaded 3 images to potential/ibm-65-cartridge-system/images/, copied to assets/wiki/ (ibm-65-portable-recorder.jpg hero, ibm-executary-range.jpg, ibm-dictation-machine.jpg), all file-verified valid JPEGs.
- Added entry to src/data.ts (id ibm-65-cartridge-system, wikiTitle "IBM 6:5 Cartridge System", year 1975, sortYear 1975, image img("ibm-65-portable-recorder.jpg")).
- Added wiki section "## IBM 6:5 Cartridge System (1975)" at end of docs/hci-wiki.md + ToC entry #227 + updated intro count to "two hundred and twenty-seven".
- Archived potential/ibm-65-cartridge-system/info.json → info.json.archived. Also archived 3 stale already-promoted info.json (mailmobile, logitech-trackman, mouse-systems-optical-mouse) to prevent auto-promotion.
- Wrote Field Note blog: docs/blog/the-voice-that-became-a-thing-you-could-hold.md.
- Updated docs/beepy-memory.md with addition + deferred candidates + gotchas + Field Note lesson.

## Verification
- bun run typecheck: PASS (no errors)
- bun run build: PASS — "227 exhibits + blog + about, 299 pages"
- Counts: data.ts 227 exhibits, wiki ToC 227 entries, wiki sections 232 (5 orphan research + Appendix uncounted, consistent with pre-existing discrepancy).
- Confirmed public/exhibits/ibm-65-cartridge-system/ and public/blog/the-voice-that-became-a-thing-you-could-hold/ generated.
