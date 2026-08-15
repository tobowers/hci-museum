# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start (2026-08-15)

State: 186 exhibits in data.ts, wiki ToC at 188 entries. Candidate well thin; image availability is the dominant bottleneck.

Angles chosen (3 parallel subagents, 2 Octen each = 6 of 7 Octen budget):
- A: AAC / speech-generating devices with physical grid + template interfaces (Vocaid 1980, Touch Talker/Minspeak 1986) — category empty in museum.
- B: Raw-binary front-panel microcomputers (IMSAI 8080 1976, KIM-1 1976) — museum has no bit-level programming interface.
- C: Embedded speech output in unexpected consumer objects (Chrysler Electronic Voice Alert 1983, talking appliances) — voice dashboard sibling to Buick GCC.

## Subagent results (all 3 returned)

ANGLE A (AAC grid speech): Vocaid verified as 1982 (not 1980), 36-key 6x6 grid (not 4x4), TMS1100+TMS5110A, derived from TI Touch & Tell, MAME-emulated. ZERO freely-licensed images -> image-blocked, defer. Touch Talker (1984, PRC) = first Minspeak icon-sequencing device, rich Bruce Baker story, but ZERO images of Touch Talker. Scout claimed Mini-VisiCom was PRC with 6 CC BY-SA 4.0 Commons images — I verified the file page: it is a GOEDHART Mini-VisiCom (Dutch), NOT PRC. Rejected as a Touch Talker stand-in. Minspeak/AAC angle deferred on image grounds.

ANGLE B (front-panel microcomputers): IMSAI 8080 (1976) READY — $439 kit, 16 address + 8 data + sense switches, no ROM monitor, user IS boot loader. Verified the manual's game program (shifting bit pattern; sense switches as game input, PROGRAMMED OUTPUT LEDs as display). 3 free images confirmed (CC0 WarGames machine, CC BY-SA 4.0, CC BY 2.0 CHM). KIM-1 (1976) READY — $245, 24-key hex keypad + 6-digit LED, TIM monitor in ROM, Microchess (first commercial micro game). 2 PD images confirmed (unit + May 1976 ad).

ANGLE C (talking consumer objects): Chrysler EVA (1983-88, TMS5110A) facts solid but only 1 questionable free image -> defer. Nissan/Datsun Voice Warning (1981-84) SELECTED — 3-inch white vinyl record with six parallel grooves inside a box under the dash; analog logic drops the tonearm on the right groove; "bocking brake". Verified via Autoweek + Jalopnik (Murilee Martin) + patent US4426691 (Teruo Kawasaki, Nissan, priority 1979-07-02). Patent drawings (PD) downloaded as exhibit images. Solid-state replacement in 1985.

DECISION: Promote IMSAI 8080 (1976), KIM-1 (1976), Nissan/Datsun Voice Warning (1981). All with freely-licensed local images. Defer: Vocaid, Touch Talker/Minspeak, Chrysler EVA, Seiko Pyramid Talk, Nissan solid-state 1985 unit.

## Promotion (manual)

All three promoted manually (promote-potentials.ts NOT run — known bugs: no image copy, no data.ts update, no ToC update; consistent with all runs since 2026-07-27).

1. Images downloaded to assets/wiki/: imsai-8080-wargames.jpg (CC0), imsai-8080-front-panel.jpg (CC BY-SA 4.0), imsai-8080-chm.jpg (CC BY 2.0), kim-1-computer.jpg (PD), kim-1-ad-1976.jpg (PD), nissan-voice-warning-patent-1.png + patent-2.png (PD, Google Patents). All verified with `file` as valid JPEG/PNG.
2. src/data.ts: +3 entries (imsai-8080, kim-1, nissan-voice-warning). wikiTitle values match parse-wiki extraction: "IMSAI 8080", "KIM-1", "Nissan/Datsun Voice Warning System".
3. docs/hci-wiki.md: ToC +3 (189-191), fixed stray leading spaces on entries 186-188, 3 wiki sections appended, intro project count fixed (one hundred and forty -> one hundred and eighty-nine).
4. info.json files archived (info.json.archived) after promotion.

## Verification

- bun run typecheck: PASS.
- bun run build: PASS — "191 exhibits + blog + about, 246 pages".
- Cross-check: ToC 191 entries; 191 exhibit wiki sections; every data.ts wikiTitle resolves to a wiki heading; 0 missing.
- data.ts actual exhibit count was 188 before this run (memory said 186); now 191.
- Rendered pages public/exhibits/{imsai-8080,kim-1,nissan-voice-warning}/index.html all reference local assets/wiki images.

## Deferred (image-blocked or weak) this run

- Vocaid (1982, TI): verified 1982 (not 1980), 36-key 6x6 grid, TMS1100+TMS5110A, derived from Touch & Tell, MAME-emulated. ZERO freely-licensed images anywhere. Defer until Datamath/Smithsonian permission.
- Touch Talker / Minspeak (1984, PRC): first icon-sequencing AAC language device; rich Bruce Baker story. ZERO images of the Touch Talker. NOTE: Mini-VisiCom on Commons is GOEDHART (Dutch), NOT PRC — do not use as PRC stand-in.
- Chrysler Electronic Voice Alert (1983-88): facts solid (TMS5110A, 11/24 phrases, "A door is ajar") but only 1 questionable CC interior photo; no free photo of the unit. Complements the Nissan analog record story — revisit if an EVA module photo surfaces.
- Seiko Pyramid Talk (1984): 1 CC image, but interaction (press-to-hear clock) too incremental.
- Nissan 1985 solid-state Voice Warning: digital successor, no longer the weird analog artifact.

## Durable lessons for memory

- Google Patents fetches succeeded this run (returned full HTML with patentimages.storage.googleapis.com URLs) — earlier memory said 503; retry may now work. Use `meta itemprop="full"` URLs for direct drawing downloads.
- Parallel-groove phonograph records were a small family in the era (Nissan cars, 1977 Mattel Monday Night Football, Japanese appliances) — a new analog-media lineage for the museum.
- Mini-VisiCom correction: it is Goedhart (Dutch), not PRC — an earlier subagent mislabeled it.
- New productive angle proven: raw/bare machine programming interfaces (front panel + hex keypad) were completely unexplored. Both had strong CC/PD images.
