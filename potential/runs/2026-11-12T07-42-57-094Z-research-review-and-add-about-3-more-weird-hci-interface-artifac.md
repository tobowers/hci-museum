# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## 2026-11-12 run 1

- Start: HEAD `8acd71f` (merge of .agents/skills PR). Collection at 316 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- Scanned `potential/*/info.json`: **zero active (unpromoted) candidates**. All 314 are archived. No ready backlog this run — must launch fresh research.
- Orphan dirs checked (atari-star-wars-yoke, microvision-1979, u235-meltdown, etc.) — images only or already-promoted items. No salvageable unpromoted candidate.
- Memory review: priority image-blocked deferrals (Game Handler gyro, Braille 'n Speak, Tomy Verbot, JHU Serial Code Keyboard, Touch-a-matic, HP 8566A, Allen-Bradley 1770-T2, Electronic Stratego). Known-saturated sectors: videotex terminals, music HCI, keyboards, game controllers, output-mechanism displays, fax, organizers, calculators.
- Launched 3 research subagents in parallel (banking/office back-office machines; field/industrial instruments; unusual professional pointing hardware). **Two returned empty tool-less responses** (subagent infra failure, not budget). The third (professional pointing hardware) returned a full report.
- Octen budget: 3 subagent queries reported (third agent: 2 Octen + 1 Exa). Manager used 1 Octen sanity probe (requests now 5/7).
- Candidate report from angle 3:
  - **Houston Instruments HIPAD** (inductive absolute-positioning digitizer, Håkan Lans; in professional use 1976-1992) — 3 verified CC images (Tekniska Museet, CC BY 4.0/CC BY-SA 4.0). STRONG.
  - **Computervision CADDS3 menu-tablet workstation** (c.1979) — 2 verified CC images. STRONG interaction (printed menu palette).
  - DEC Graphics-15 spark pen (1973) — outside window; near miss.
  - Science Accessories Graf/Pen — image-blocked.

### 2026-11-12 — continuation: verification, writing, promotion

- **Octen budget hit 7/7** during this continuation (the manager's extra probe consumed the last slot). All further verification was done with free sources: Wikipedia, Wikimedia Commons API, and `Special:FilePath` downloads. No Octen retries after the budget error.
- **Inform user:** the runtime cannot read images (no image input for this model), so photographs were verified by **Commons metadata + description text + a crop-existence check**, not by visually inspecting content. `file` confirmed valid JPEGs and `sharp` metadata confirmed dimensions. Where I could not see the picture, captions describe what the object record documents rather than things visible only in the frame (e.g. the HIPAD's cable/connector details come from the Tekniska Museet description).
- **Images downloaded and resized** (browser UA via `Special:FilePath`, sharp `rotate().resize(1400 inside, no enlarge)`, mozjpeg q84):
  - `hipad-tablet.jpg` 1400×933 (HIPAD EPT-11 (1), CC BY 4.0, Gunnar Sundin / Tekniska Museet)
  - `hipad-puck.jpg` 1400×940 (HIPAD EPT-11 (2), CC BY 4.0)
  - `hipad-tekniska-museet.jpg` 1400×939 (Digitaliseringsbord, CC BY-SA 4.0, Ellinor Algin / Tekniska Museet)
  - `computervision-cadds3.jpg` 592×785 (original resolution only; CC BY-SA 3.0, Arnold Reinhold)
  - `computervision-designer.jpg` 570×638 (original resolution only; CC BY-SA 3.0, Arnold Reinhold)
  - Originals kept in `potential/*/images/`; copies promoted to `assets/wiki/`.
- **Facts rechecked against free sources:**
  - Tekniska Museet object description (Commons extmetadata, fetched in full): Lans begins development 1972 for seismic measurement; Houston Instrument wanted absolute positioning; four separate layers, different frequencies, phase shift, 1/10 mm; 70 units → ~10,000/month estimate; puck buttons RESET / POINT / SWITCH STREAM / STREAM; 25-pin D-sub + 3.5 mm jack.
  - Wikipedia *Håkan Lans*: puck tablet sold to Houston Instruments and marketed as HIpad; KTH grand prize 1996; the article says "late 1960s … 1971", which conflicts with the object record's 1972 development date. Handled by noting both dates and attributing the 1972 date to the Tekniska Museet.
  - Wikipedia *Computervision*: founded 1969 (Allen, Villers); CADDS-1 PCB/drafting; CADDS3 late 1970s on CGP80/CGP100 with Tektronix storage tubes and **graphics tablets with menus**; Hanratty/S3 code ~1973; Boeing 757/767; US Navy Designer V/CADDS4 ~$63M in 1981; GPU 1980; DCU 1983; first large Sun customer. Commons description pins the photo to a training lab, circa 1979, Tektronix 19-inch storage tube, ADM-3 terminals for typed commands.
  - DECUS Oct 1979 HIPAD/MINC support remains **second-hand** (from the subagent report); marked in the wiki sources as unverified pending the DECUS volume.
- **Deliberate pruning:** dropped unsupported claims added in an earlier draft — e.g. "shown at SIGGRAPH" (not reconfirmed this run), speculative button semantics, and a claim that Lans's later litigation made the tablet "a footnote in graphics history".
- **Promotion done manually** (promote-potentials.ts avoided):
  - `src/data.ts`: appended `houston-hipad` (sortYear 1979) and `computervision-cadds3` (sortYear 1978) before the closing `];`.
  - `docs/hci-wiki.md`: appended two full sections (Overview, Deep dive, Team, Media, Sources) after the Ishiguro section; ToC entries 315 and 316 added with GitHub-slug anchors; intro "three hundred and fourteen" → "three hundred and sixteen".
  - Images copied to `assets/wiki/`.
  - `potential/*/info.json` → `info.json.archived`.
- **Verification:** `bun run typecheck` clean; `bun run build` → `Built static site ... (318 exhibits + blog + about, 452 pages)`; `grep -cE '^\s{4}id: "'` = 318; compiled pages contain the h1s and all image `src`s.

### Decisions / state
- Two strong artifacts promoted this run. The third candidate (Ormrod/Direct Numerical Control or similar) was **not** pursued because Octen was exhausted; no half-researched entries were written.
- Collection is now 318 exhibits. Newest-added ordering puts CADDS3 (1978) then HIPAD (1979) at the end of `exhibitData`.
- No `docs/beepy-memory.md` change this run: the durable lessons (Commons metadata verification without image sight, Octen budget accounting, storage-tube/tablet menu lineage) are either already recorded or belong in this trace.
