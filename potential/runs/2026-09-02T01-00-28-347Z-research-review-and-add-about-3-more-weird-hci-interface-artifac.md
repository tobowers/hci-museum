# Beepy scout run — 2026-09-02T01:00:28Z

Goal: research, review, and add ~3 weird HCI interface artifacts from 1976–1992.

## Run start state
- data.ts exhibits: 233
- Wiki ToC entries: 233 (ends at Tomy Digital Derby #233)
- Wiki intro count text: "two hundred and thirty-two"

## Discovery: two ready half-promoted candidates found in potential/
Per memory lesson ("prior half-promoted candidates are a gold mine"), scanned potential/*/info.json
for active (non-archived) files. Found:
- **potential/cmx-340/info.json** — CMX-340 broadcast edit console (1976)
- **potential/sony-bve-600/info.json** — Sony BVE-600 desktop U-Matic edit controller (1985)

Verified both have:
- Full info.json (title, year, why_scout_cares, research, sources, imageUrls)
- Local images already in assets/wiki/ (cmx-340-console.jpg, cmx-340-keyboard.jpg,
  bve-600-controller.jpg, bve-600-jogdial.jpg) — verified present with `ls -la`
- Wiki sections ALREADY appended to docs/hci-wiki.md (CMX ~line 11045, BVE-600 ~line 11080)
- NOT in src/data.ts (grep returned nothing)
- NOT in wiki ToC

Both are video editing control surfaces — a genuinely unrepresented category in the museum.
Complementary paradigms: CMX-340 = broadcast keyboard-driven editing + re-positionable GIZMO jog knob
(left/right-handed); BVE-600 = desktop bimanual dual-jog-dial scrubbing. Fits goal well.

## Plan
1. Promote CMX-340 + Sony BVE-600 into collection (data.ts + ToC + images already local).
2. Launch 3 research subagents for a 3rd genuinely new candidate.
3. Build + typecheck verification.

## Research subagents launched (3, each 2 Octen)
1. **Broadcast/interactive video** — returned Ampex ADO (image-poor), Ampex touch-edit patent, Dubner CBG, Chyron CG. All image-poor (manual/patent based). Not promoted.
2. **Medical/clinical** — returned Dobelle cortical visual prosthesis (image-blocked), Polhemus 3Space (already in museum), Bolton CID (paper-only, image-blocked). Not promoted.
3. **Hybrid analog/digital instruments** — returned Movement MCS Drum Computer (CC BY 3.0 image CONFIRMED on Commons), Vako Orchestron/Optigan (year 1974-76 below floor), Birotron (image-blocked), AlphaSyntauri (weaker interaction).

## Decision: promote Movement MCS Drum Computer (1981) as 3rd candidate
- CC BY 3.0 image verified via Commons API + downloaded + `file`-verified (valid JPEG 837x628).
- Interaction distinct: drum machine built around a Nascom 2 microcomputer, programmed via QWERTY keyboard + CRT graphic pattern editor. No near-neighbor in collection (distinct from MC-8 numeric keypad, TR-808 step buttons, Fairlight CMI touchscreen).
- vintagesynth.com confirmed specs (~30 units, 14 voices, hybrid analog+8-bit sampled, David Stewart of Eurythmics used it on "Sweet Dreams").
- info.json created at potential/movement-mcs-drum-computer/info.json.
- Image copied to assets/wiki/mcs-drum-computer.jpg.
