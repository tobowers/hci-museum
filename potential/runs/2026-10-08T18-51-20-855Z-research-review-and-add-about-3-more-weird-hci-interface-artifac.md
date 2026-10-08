# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Baseline (start)
- Build: 290 exhibits in src/data.ts (`grep -cE '^\s{4}id: "'`).
- Wiki intro count: "two hundred and ninety" (290). Wiki ToC: 240 entries / 295 `^## ` sections (known ToC-vs-section discrepancy from prior runs).
- potential/ has 2 ACTIVE (non-archived) info.json:
  - `sequential-prophet-vs` (Sequential Circuits Prophet VS, 1986) — vector synthesis, 2-axis joystick crossfades 4 wavetables across 2D timbre plane. CC0 + CC BY 4.0 images downloaded.
  - `moog-liberation` (Moog Liberation, 1980) — keytar with neck-length ribbon controller. CC BY 2.0 + CC BY-SA 3.0 images downloaded.
  - Both are READY candidates (interaction-distinct, image-verified, NOT in data.ts/wiki). From prior aborted run.

## Ready candidates (from prior aborted run; verified not in data.ts/wiki)
1. sequential-prophet-vs (Prophet VS, 1986) — joystick-as-timbre-plane.
2. moog-liberation (Moog Liberation, 1980) — ribbon-neck keytar.

## Plan
- Promote both ready candidates (do not pad).
- Launch 3 hci-research-subagent angles on fresh, Commons-image-arguably-rich categories to hunt a possible 3rd distinct candidate.
- Track shared Octen budget (7).

## Progress
(append as you go)

## Subagent results (3 angles)
1. Pocket reference appliances — subagent returned EMPTY (no usable report).
2. Odd-sensing input — returned DataHand (1990): magnetic-return pivoting finger wells + optical-interrupter sensing. REJECTED: already in museum as "DataHand Keyboard (1990)". Also GyroPoint — rejected (commercial release 1994, outside window).
3. Educational/learning machines — returned Comp IV (1976, MB, code-breaker oracle) and Talk 'n Play (1984, branched analog cassette + voice recording). Both rejected: Comp IV is interactionally a near-duplicate of in-museum Invicta Electronic Master Mind; Talk 'n Play has zero freely-licensed Commons images (image-blocked).

## Decision
Fresh 3rd-hunt produced no promotable candidate. Per anti-padding discipline, promoted the 2 READY candidates already verified in prior aborted run:
- sequential-prophet-vs (Prophet VS, 1986)
- moog-liberation (Moog Liberation, 1980)
This is a 2-addition run; no padding.

## Promotion applied (build 290 -> 292)
- assets/wiki/: copied moog-liberation.jpg, moog-liberation-neck.jpg, prophet-vs-front.png, prophet-vs-smem.jpg
- src/data.ts: appended 2 exhibit objects (sequential-prophet-vs, moog-liberation); grep id count 290->292; tsc --noEmit passes
- docs/hci-wiki.md: intro count "two hundred and ninety-two"; ToC entries 291,292; two full ## sections appended
- bun run build: "292 exhibits + blog + about, 406 pages" OK
