# Run trace: 2026-09-06T12-32-30-067Z

Goal: find ~3 weird HCI hardware/interface artifacts 1976-1992, review, add strongest to collection.

## Start state
- Collection: 245 exhibits (grep -cE '^\s{4}id: "' src/data.ts)
- Memory current through 2026-09-06 additions (GE Talaria + Ferranti-Packard flip-dot promoted).
- The well at 245 is angle-dependent. Need genuinely new, Commons-image-rich categories.

## Angles chosen (3 subagents)
1. Computer typesetting / phototypesetting workstations (professional creative HCI, image-rich).
2. LED/dot-matrix message & signage / scrolling display consumer hardware (output mechanism, proven productive).
3. Home weather station / personal environmental sensor consoles (genuinely new, image-rich).

## Subagent assignments (hci-research-subagent)
- (fill in)

## Subagent results
1. Typesetting: Linotype CRTronic (1979) STRONG — analog light-bar measure gauge, movable keyboard + tiltable 9" CRT, foreground/background editing, 14 programmable memory keys. Primary brochure on Internet Archive + NMAH holdings. Compugraphic EditWriter (1977) = 100+ dedicated font keys, radical but thinner docs.
2. LED/displays: Atari Cosmos (1981) prototype — LED+hologram, ~6 units, weak gameplay, cancelled. Merlin (1978) ALREADY IN COLLECTION. Panaplex = component-level.
3. Weather stations: RainWise Light-Pen on TV (1991) patent-only, image-blocked. Heathkit ID-4001/ID-5001 kit — image-blocked on Commons. Vaisala C64 (1983) — image-blocked.

## Decision
- Linotype CRTronic is image-verified (3 CC BY 2.0 Commons photos of CRTronic 360 downloaded, valid JPEGs). Promotable. STRONG.
- Weather angle image-blocked. Atari Cosmos weak interaction + cancelled prototype + no direct Commons device photos.
- Need 1-2 more image-verified candidates.

## Final decisions
Octen exhausted (7/7) — used only direct Commons API + Wikipedia for image work.
Two candidates promoted (interaction-distinct, image-verified):
1. Linotype CRTronic (1979) — typesetting workstation, analog light-bar measure feedback, movable keyboard + tiltable CRT. 3 CC BY 2.0 Commons photos. Wiki + data.ts + ToC added.
2. Space-Cadet Keyboard (1978) — MIT/Symbolics bucky-bit chorded modifier keyboard, up to 4,000 distinct inputs. 4 CC BY-SA 3.0 photos. Wiki + data.ts + ToC added.
Field Note written: the-keyboard-that-gave-you-four-thousand-keys.md (space-cadet keyboard).
Third candidates all image-blocked or weak: weather stations (image-blocked), Atari Cosmos (cancelled prototype, weak interaction, no device photos), Compugraphic EditWriter (no Commons images).

## Image sourcing
- CRTronic: 3 CC BY 2.0 (File:Linotype CRTronic 360.jpg + pt.2/pt.3). Downloaded valid JPEGs.
- Space-cadet: 4 CC BY-SA 3.0 (Space-cadet.jpg, modifier crop, closeup, Symbolics-keyboard.jpg). Downloaded valid JPEGs.

## Verification
- bun run typecheck: PASS
- bun run build: PASS (247 exhibits, 328 pages incl. blog)
- data.ts count: 247
- Wiki ToC: 247 entries
