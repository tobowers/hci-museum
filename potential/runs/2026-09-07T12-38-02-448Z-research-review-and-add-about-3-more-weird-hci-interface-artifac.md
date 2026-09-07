# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Start (2026-09-07 ~12:40)
- Collection at 247 exhibits (grep -cE '^\s{4}id: "' = 247).
- Earlier same-day run (01:36) was a zero-addition run: HP 8566A (image-blocked), sip-and-puff breath controller (duplicative), rotary-reference (dead end).
- Memory guidance: well is angle-dependent. Image-blocked angles to avoid: medical pen-output, security hardware, weather stations, portable data terminals, refreshable braille, breath input, military.
- Plan: 3 fresh research subagents, each one focused angle, each ≤2 Octen. Manager does image verification via Commons API.
- Angles chosen:
  - A: Broadcast/video editing production hardware with unusual physical input (jog/shuttle wheels, dedicated control surfaces) not already in museum
  - B: Industrial/scientific graphical recorders & data loggers with novel physical-pen / mechanical output as the interaction point
  - C: Digital telephone / phone-adjacent consumer appliances with novel embodied physical interaction (answering machines, phone-based services) beyond modems

## Round 1 results (3 subagents)
- Angle A (broadcast/video): Chyron IV (1977) character generator — big dedicated operator console, rare 1985 schematic on archive.org. IMAGE-BLOCKED (no CC images of IV console). Dubner CBG weaker. Likely skip (image policy).
- Angle B (industrial chart recorders): subagent returned EMPTY (no usable report). Need to relaunch this angle.
- Angle C (telephone): **Luma LU-1000 Lumaphone (1986)** — STRONG. Still picture-phone, ~1 still/3-5s over POTS, sliding privacy shutter over camera, Atari→Mitsubishi project. CC BY 2.0 image on Commons (AtariTel Mitsubishi Luma Phone). Distinct from AT&T VideoPhone 2500 (streams video). AT&T Sceptre (1983) image-blocked.
- Decision: Luma is a strong promotion candidate. Need 1-2 more. Relaunch industrial-recorder angle.

## Round 1 continued (industrial recorder subagent)
- Honeywell "Visicorder" fiber-optic CRT optical chart recorder (in-service 1970s-80s, Vandenberg AFB launch ops). STRONG output-mechanism exhibit: stationary CRT whose fiber-optic faceplate physically touches moving photosensitive paper; the CRT IS the stylus. Darkroom loading + developing the wet trace = embodied setup ritual. PD HAER (NPS) image on Commons verified (4032x5000 TIF; downloaded 1920px JPEG thumb to potential/honeywell-visicorder/images/). Not a duplicate.
- Gould Brush oscillographic chart recorder: PD HAER image but near-duplicate of Visicorder (both chart recorders, same Vandenberg docs). Decided NOT to promote both — pick the more distinctive (Visicorder fiber-optic) to avoid diluting category.
- Siemens Oscillomink / BBC Goerz: image-blocked, skipped.

## Round 1 continued (payment-terminal subagent)
- Verifone ZON Jr (1984): foundational swipe-and-authorize terminal but too canonical + no ZON-specific CC image. Weak.
- ITL 102 ACT terminal: CC BY 2.0 image but unverified period/interaction. Weak.
- Payment-terminal angle NOT productive. Skipped.

## Image verification (manager, via Commons API + curl, free channels)
- Luma: File:AtariTel_Mitsubishi_Luma_Phone_(9727158384).jpg = CC BY 2.0, downloaded valid JPEG to potential/luma-lu1000-lumaphone/images/luma-phone.jpg (1985x1846).
- Visicorder: HAER/NPS PD, downloaded 1920px JPEG to potential/honeywell-visicorder/images/visicorder-fiberoptic.jpg (1920x2381).
- Teletext-decoder angle searched: only PCB/component shots, no strong consumer terminal artifact. Skipped.

## Decision
- Promote 2 strong, image-verified, distinct candidates: Luma LU-1000 (1986) + Honeywell Visicorder (fiber-optic CRT). Well is dry; per memory "add fewer if fewer are ready." Third candidate (Chyron IV, AT&T Sceptre, ZON, Gould) all image-blocked or weak.

## Promotion (manual; promote-potentials.ts NOT run due to known bugs)
- Images copied to assets/wiki/: luma-lumaphone.jpg, honeywell-visicorder.jpg (both verified valid JPEGs).
- docs/hci-wiki.md: ToC entries 248-249 added; intro count "two hundred and forty-seven" → "two hundred and forty-nine"; 2 wiki sections appended.
- src/data.ts: 2 exhibit entries added before closing `];`.
- Blog Field Note written: docs/blog/the-phone-that-sent-you-a-photograph-at-a-time.md (Luma).
- info.json files archived as info.json.archived.
- typecheck + build both pass. Build: 249 exhibits, 332 pages. data.ts count = 249, wiki ToC = 249.
- Memory updated in docs/beepy-memory.md.



