# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start (2026-11-23)
- Repo HEAD `a64cd2a`. src/data.ts exhibits = 327 via `grep -cE '^\s{4}id: "'`.
- Active potential info.json at start: NONE (good — 11-22 run archived its stale one).
- 11-22 run ABORTED mid-research but left two verified-pending leads: **Kodak Recordak Miracode microfilm retrieval** (1968 origin, needs in-window in-use evidence) and **Linotron 202E** (1978, CC BY-SA 4.0 Commons photo confirmed).
- Memory reviewed. Saturated: kiosk/POS, lab instruments, industrial PLC, music/expressional, digitizers, braille tactile, home automation, scanning/OCR, answering machines, fax, marine, time & attendance, paper-as-arrangement (ATC strips / Addressograph), keyboard text-entry (8+ entries), turntable/physical-media-play.
- Chosen angles:
  A. (carry-over) Microfilm/microfiche retrieval + document storage-and-find machinery.
  B. Phototypesetting/scientific-output hardware not covered (CRTronic done) — Linotron lead.
  C. Fresh left-field: **telephone network operator/test positions & things where the human completes a routing/lookup task** (directory assistance, crossbar test desks).
  D. Fresh: **medical imaging consoles** (ultrasound/CT viewing stations, trackball-as-diagnostic instrument).

## Subagent round 1 (3 parallel) + manager Octen (1/7)
- Octen 1/7 used (manager): Miracode verification → historyofinformation confirms **1963 origin**. Science Museum has Recordak Motormatic c.1972.
- Angle 1 (medical imaging consoles): Best find **Stanford ophthalmic ultrasound on Cromemco Z-2 (1977)**, on-screen caliper measurement to 0.1 mm. Commons `File:Ophthalmic Ultrasound System built on Cromemco Z-2 (1977).jpg` CC BY-SA 4.0, 4235×3038. Everything else (Octoson, EMI/Picker CT consoles, planning tablets) image-blocked.
- Angle 2 (operator lookup desks): weak. Only `File:IBM Eastern Airlines Reservations Terminal 1980s.jpg` (CC BY 2.0) and `File:IBM 3755 Operator Desk.jpg` (PD, likely pre-1976). Subagent hit step cap; airline set unverified visually.
- Angle 3 (document-finding machines): **Kodak Recordak Miracode** confirmed with 5 high-res CC BY-SA 4.0 Commons photos by Yves Tessier / Bibliothèque de l'Université Laval — incl. a close-up of the code-entry keyboard. Mechanism detailed from a declassified CIA operator manual: Model KIR(E) automated retrieval keyboard, 3 rows of 0-9 + off, rotary 15-code-column selector, photosensor auto-stop on code match; KIR(1) does inequality/range searches. Origin 1963; in-service Laval unit is a **1968** model. In-window question: continued deployment into 1990s (NARA 1910 Soundex Miracode film).
- Manager verified **Linotron 202E** Commons file: CC BY-SA 4.0, 3217×3377, self-published 2023 photo of surviving machine. Japanese description notes it needs MK-10/20/50 shift-type input/correction units to work.

## Decisions so far
- Miracode: strong interaction (query-a-keypad, machine hunts the film, range queries!) but the specific unit photographed is a **1968** system → out-of-window introduction. Decide after checking whether an in-window (Miracode II / Kodak IMS) model can be documented; otherwise borderline-defer.
- Linotron 202E (1978): in-window, distinct from CRTronic (that's direct-entry desktop composition; the 202 is a separate keyboard/VDU front end driving a remote CRT film engine). Strong candidate.
- Stanford/Cromemco ultrasound (1977): in-window, free hi-res image, measurement-by-cursor — genuinely unrepresented (medical image measurement). Strong candidate but need to verify the hardware claim (Susal, IEEE Computer 1978).

## Manager verification round (no Octen spent; free APIs + PDF)
- Dup check: `cromemco`=0, `miracode`=0, `recordak`=0, `linotron`=0. Existing neighbours: `linotype-crtronic` (1979), `dasa-mark-18-reader-printer` (microfilm *reader-printer*, no code search), `hell-chromagraph-dc300b` (1975 scanner). So all three leads are distinct.
- Images (Commons API) all valid, hi-res:
  - `File:Ophthalmic Ultrasound System built on Cromemco Z-2 (1977).jpg` 4235×3038 CC BY-SA 4.0, uploader User:Cromemco.
  - `File:Appareil Miracode 332-1-002.jpg` 4233×2795 CC BY-SA 4.0; `File:Appareil Miracode 339-6-003.jpg` (query console + viewer/printer + 16 mm cassettes); `File:Clavier de saisie de l’appareil Miracode 331-6-003.jpg` 3458×2647 (code-entry keyboard close-up); `File:Miracode 338-6-002.jpg` (on-film coding device). Photographer Yves Tessier / Bibliothèque de l'Université Laval.
  - `File:High-Speed CRT Computer Phototypesetter Linotron-202E.jpg` 3217×3377 CC BY-SA 4.0.
  - `File:IBM Eastern Airlines Reservations Terminal 1980s.jpg` 4000×3000 CC BY 2.0 — **deferring** (airline/home-terminal angle is saturated in memory; the display desk alone isn't novel enough).
- Linotron 202 primary source found & text-extracted: Condon/Kernighan/Thompson, *Experience with the Mergenthaler Linotron 202 Phototypesetter*, Bell Labs CSTR 80-1270-1 (Jan 1980), `cs.princeton.edu/~bwk/202/summer.reconstructed.pdf`. Key HCI facts:
  - In-window: "In mid-1978 we learned of the recently announced Linotron 202"; installed July 6, 1979 at Bell Labs ($45,000 list).
  - The 202 is a **passive output engine**: 16-bit Computer Automation Naked Mini, dual floppies ≈60 fonts × 100 chars, special-purpose outline→vertical-stroke processor, 972 lines/inch horizontally, 4½–72 pt, 450 newspaper lines/min. It has a **paper-tape reader** and a **DR11-C interface**; Bell Labs made it a *readable/writable* peripheral ("since the typesetter is an active element, it is possible to read from it as well as write to it").
  - The human interface is **not** at the 202: typesetting was done on separate Mergenthaler MK-10/20/50 shift-type input/correction terminals (per the Commons caption), and Bell Labs drove it from a PDP-11 running `troff` via an **anonymous device-independent intermediate language** — the origin of `troff -T202` device post-processors. Operator experience documented as painful (paper sticking to rollers, tape reader failing on light-coloured tape, defective font disks, missing π).
  - Great exhibit framing: the "interface" is a machine protocol, and the museum's first typesetter whose *keyboard was another computer and a paper tape*.
- Decision: add **Miracode (keypad-queries-film)**, **Linotron 202 (paper tape / device-independent output)**, **Stanford–Cromemco ophthalmic ultrasound (caliper on the echo)**. Miracode year: mark as "1968–1990s" with sortYear 1976 to keep it in window, or use the 1968 model honestly? → using year "1968 (still in service into the 1990s)" with sortYear 1976 would falsify the sort. Will date it honestly and note the in-window deployments (NARA Soundex index, 1970s–80s).

## Subagent round 2 — two verdicts that change the plan
**Miracode (upgraded):** the Laval photos are dated **Nov 1971** and **March 1972** (Commons `DateTimeOriginal`) — in-window. Mechanism confirmed verbatim from the 1963 Recordak brochure (archive.org `recordakmiracode`): "Each keyboard, containing three rows of 11 keys each (0 through 9 and an off key)… Up to 15 of these Equality Decimal Keyboards may be used"; binary clear/opaque code on 16 mm film; 10 ft/s search; "located and is automatically displayed". Coding done *at filming time*; the searcher must read codes off an **external index/code sheet** first. **My earlier "range/inequality search" claim is NOT supported — do not write it.** NARA 1910 census used Miracode-format cards (archives.gov). Successor lineage (Miracode II → Oracle → IMT → KIMS) only from an ex-Kodak enthusiast page — treat as caveated.
**Susal/Cromemco (downgraded, must fix):** primary citation is **Susal AL, "Gray scale echography with simultaneous A mode presentation…", J Clin Ultrasound 1977;5(6):393-397**, doi:10.1002/jcu.1870050607 — *not* "IEEE Computer 1978, S. M. Susal". Distances to 0.1 mm reported. **No source links the 1977 scanner to a Cromemco Z-2**; documented hardware is a Tektronix 5403 scope with TTL logic. The Commons photo caption claiming "built on a Cromemco Z-2" comes from uploader User:Cromemco — i.e. a vendor claim. → I must verify this myself before writing, else reframe the exhibit around the *verified* Sonometrics/Coleman A-scan (knob-set gates, thumbwheel velocity, numeric read-out on the CRT), accepting that it is ~1977–79.
