# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start (2026-11-16)

State audit:
- `git log` HEAD = 610cad2 (merge of prior scout PR). Clean tree apart from the auto-created trace file.
- Collection: `grep -cE '^\s{4}id: "' src/data.ts` = **320 exhibits**.
- `potential/*/info.json` active (unpromoted) candidates: **NONE** — no leftover ready candidates from a prior aborted run. (Prior runs' stale-leftover trap does not apply this run.)
- `docs/hci-wiki.md` has 325 `## ` headings. `docs/blog/` has 136 files.

Decision: launch 3 parallel `hci-research-subagent` angle scouts, 2 Octen searches each (hard cap 7 total for the run — budget 6 for subagents, hold 1 for manager validation).

Angle selection (based on memory gaps — avoiding exhausted sectors: videotex terminals, organizers/PDA, palmtop calculators, output-mechanism displays, music HCI, keyboards/chording, typing, OCR wands, light guns, financial terminals, cars, aviation EFIS/glass cockpit):

- **Angle A — Operating-theatre / clinical-bedside computer instrumentation.** The museum is deep on *reading the body* (P300, EEG, EGG, visi-pitch) and one *writing into the nerve* (cochlear), but has nothing on surgical/theatre computer HCI: computer-assisted surgery workstations, frameless stereotactic wands, operating-theatre robotics consoles, anaesthesia record-keeping panels. Requires a physical console/wand, not a paper.
- **Angle B — Automated-teller/self-service beyond banking & the *cash* niche.** ATM (IBM 3614) is in, ticketing (QuickFare) is in. Untouched: racetrack off-track-betting terminals, lottery terminals, cheque-clearing/currency-authentication hardware, and the *lottery draw/data-entry* devices — plus arcade-adjacent cash interfaces. Focus on a device where inserting matter/money IS the ceremony.
- **Angle C — Peripherals that turn a general computer into a measurement/control appliance via a novel physical transducer** (different from AtariLab, which is sensor-probe): e.g. computer-interfaced voice input for disabled operators driven by an unusual body part not already used (eyelid, jaw, neck), computerised *pipetting/chemistry* lab front panels, or a computer-driven environmental chamber controller with a physical dial. Avoid anything whose channel is already noted.

Subagents are told: in-window 1976–1992, physical commercial/prototype artifact, must have a freely-licensed (Commons/PD patent) image lead, and must not be in the exclusion list.

## Mid-run: subagent returns and tooling blocker

First round of 3 `hci-research-subagent` scouts all returned `state="completed"` with **empty `<task_result>` bodies** — no candidate intelligence received. A single retry (surgical angle) did return a substantive report.

Retry result — **ISG Viewing Wand** (ISG Technologies, Toronto, ~1988–1992):
- Interaction model is genuinely museum-worthy: the "pointing device" is a **passive six-DOF articulated arm** with joint encoders (proprioceptive), NOT an optical tracker. Surgeon grips a probe at the free end, registers to fiducials by touching the patient's scalp, then a cursor tracks through triplanar/3D reformatted CT/MRI while the surgeon physically sweeps the arm. Visual-only feedback, no force feedback. Accuracy ~few mm.
- Citable: Drake/Rutka/Hoffman *Neurosurgery* 1994 (doi:10.1227/00006123-199406000-00026); J. Laryngol. Otol. Cambridge article; Springer chapters; PMID 7616261 (325-case series).
- **Image gap:** Commons API searched — no ISG Viewing Wand image, only unrelated German "Wand" hits. No ISG-assigned patent found. Only usable lead is the 1996 US6019724 figure referencing the wand — out of window and not an ISG design patent.

Commons tooling blocker: after the burst of searches above, the Commons API began returning **HTTP 429 (rate limited)**. Backing off; image sourcing must be paced with longer sleeps and fewer queries per batch.

Naming caution recorded: Drake/Rutka/Hoffman journal paper vs. the **Douglas/Carl Zeiss "Viewing Wand"** (a separate, commonly-confused product) vs. ISG Allegro successor. Do not merge.

## Octen query (manager, budget 6/7 consumed)

One reserved Octen search spent on the surgical angle. It **independently corroborated** the subagent and added hard numbers:

- "The wand is a **multijointed mechanical arm** with a range of a **25 inch radius sphere**. The arm has **analog/digital hybrid transducers** to locate the spatial position of the probe tip." (PMID 8748583, Doshi et al., Acta Neurochir Suppl / Springer ch. 10.1007/978-3-7091-9419-5_11)
- Accuracy **1.8 mm (SEM ±0.36 mm)** lesion localisation in 17 patients; fiducial-based registration more accurate than anatomical landmarks.
- "a **proprioceptive robotic-like jointed arm**" (Flinders/Adelaide otolaryngology paper); >400 neurosurgical patients at Bristol plus 14 skull-base cases.
- 325-case series: 165 CT + 145 MR; useful registration in **310/325 (95.4%)**; "minimal additional effort … as long as a trained technician performed the data transfer."
- Mounted on "a standard **HP Unix workstation**" importing data from the ISG Allegro over magnetic tape (McGill MNI thesis).
- Later units branded by **Elekta Instruments, Atlanta, GA** — so ISG → Elekta is a brand lineage, another naming trap.

Verdict: **strong, uniquely-strange candidate.** The interaction is the surprise — the "pointer" is a counterweighted industrial robot arm, and the surgeon's hand *is* the cursor. This is exactly the museum's kind of embodied artefact, and nothing like it exists in the 320-entry collection.

Remaining risk: **no free image.** This is the gating problem for the whole run.

## Candidate 1 dossier written — `potential/aided-surgery-arm/`

Breakthrough on the image blocker: **Google Patents is a free, no-budget, high-resolution public-domain image source** — no Octen/Exa cost, just HTML fetch.

Found the primary patent: **US5251127A "Computer-aided surgery apparatus"**
- Inventor **Simon Raab**, assignee **FARO Medical Technologies Inc.**
- Filed **1990-07-31**, issued **1993-10-05** — inside the window.
- 10 drawing pages at `meta itemprop="full"` URLs, downloaded 4, verified `file` = **PNG 2320×3408 1-bit grayscale** (usably large, unlike the ~82×120 tiles).
- Figure captions scraped from the description text (I cannot view images with this model, so I identified figures by their captions rather than by looking):
  - FIG. 1 = 3D view of apparatus with patient on operating table
  - FIG. 2 = rolling upright stand, monitor, electrogoniometer
  - FIG. 3 = means of connecting surgical instruments to the electrogoniometer
  - Saved pages 2, 3, 4 as figs 1, 2, 3 respectively (page N→figure N−1 mapping assumed from sequential pagination).
- Abstract confirms the interaction loop: patient data from imaging + instrument position/orientation sensed → both converted to signals on **one video display**, so the practitioner positions the instrument "by watching the display."

Important curator correction recorded: the patent **assignee (FARO Medical Technologies)** and the **product vendor (ISG Technologies / later Elekta)** are different names for adjacent things — the patent calls the device an "electrogoniometer." Dossier flags this plus two other naming traps (Zeiss/Douglas "Viewing Wand"; Allegro planning workstation ≠ OR arm).

Remaining gap: this candidate cites the patent as primary image and the ISG product as the named artefact. Patent and product are closely related but not proven identical — dossier wording keeps them adjacent rather than equating them ("the articulated measurement technology underlying the class of devices"). This is a real historiographic caveat, not a blocker.

Verified figure mapping rather than assuming it: the drawing list begins at `drawings-page-2.png` (no page 1), so page N → FIG. (N−1) is consistent for pages 2–11.

Scraped the FIG. 2 body text for a detail I could not get from any image: the **electrogoniometer and its "swinging balanced arm" were enclosed in a tubular sterile barrier**, rollers let the stand be towed alongside the operating table, and instruments attached to the arm tip were autoclave-sterilisable via a **V-block inside the barrier**. This "surgeon reaches into a plastic sleeve to move a measuring arm" detail has been added to the dossier deep-dive — it is the strongest embodied-description sentence available for the wiki write-up.
