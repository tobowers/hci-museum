# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

Run start: 2026-08-10T12:33:13Z (UTC)
Session: Beepy curator scout run (opencode agent session)

## Plan

Goal: find ~3 genuinely weird, interaction-model-rich HCI hardware artifacts from
1976-1992, verify against the 175-exhibit collection, and promote the strongest.

Prior runs (see docs/beepy-memory.md) show the well is dry for re-searched
categories; the last several successful runs found new material only in
previously unexplored topical angles with Wikimedia Commons image availability.
Image availability is the dominant bottleneck, so all three angles below target
device classes likely to have CC/PD images on Commons.

Three parallel research angles (hci-research-subagent, 2 Octen searches each,
shared run budget is 7 total Octen requests):

1. **RCA Studio II / numeric-keypad-only home game consoles (1976-1983)** — the
   "computing as button-pushing, not joystick movement" paradigm. Keypad-only
   gaming is genuinely odd and contrasts with the joystick that won.
   Reserve: Entex Select-A-Game, VideoBrain, other keypad-centric consoles.

2. **Philips/Magnavox CD-i (1991) and the living-room "interactive appliance"
   computer** — consumer multimedia computer driven by a remote control with a
   built-in trackball; interactive-TV vision, famous commercial disaster.
   Interaction model: domestic appliance computer, input device as remote.
   Reserve: Commodore CDTV (same category, pick one).

3. **TI Dataman (1977) / magnetic card-fed consumer computers** — handheld
   educational computer where software physically lives on a card you slide
   through a reader. "The card IS the program." Distinct physical-software-medium
   paradigm (vs Cauzin Softstrip barcode, iButton).
   Reserve: other card-fed consumer devices in the window.

Backup candidates if an angle fails: Votrax Type 'N Talk (hobbyist text-to-speech
box, 1979-80) — speech collection is saturated (~11 entries) so only if clearly
distinct; CDTV if CD-i image-check fails.

## Budget bookkeeping

- Octen: shared run budget 7. Subagent A: 2, Subagent B: 2, Subagent C: 2.
  Reserve 1 for curator verification.
- Exa: shared run budget 2. Do not use unless a final candidate needs
  independent validation.
- Grok: not planned (quality degraded in recent runs); only if needed.

## Progress log

### 2026-08-10 Subagent results (3 launched in parallel, 2 Octen each = 6 used)

**Angle A — RCA Studio II (1977): GO.**
- All input via two wired 10-key numeric keypads built into the console; no joystick.
  Pressing two adjacent keys together = diagonal (16-direction claim, like Intellivision).
- $149.95, RCA 1802 COSMAC @1.78MHz, 64x32 monochrome, 5 built-in games + 11 cartridges.
- ~53k-64k units (RCA internal doc), discontinued 1978, Radio Shack fire-sale $59.95.
- Chip later flew on Galileo (6x 1802), Magellan, Hubble — NOT Voyager (Wikipedia calls the
  Voyager claim erroneous).
- Joyce Weisbecker = first female commercial game developer (School House I, Speedway/Tag).
- Color overlays claim UNVERIFIED — drop it.
- Images: abundant PD (Evan-Amos set incl. console + keypads + opened internals) + CC screenshots.

**Angle B — Philips/Magnavox CD-i (1991): GO.**
- US launch Dec 3 1991 as Magnavox CDI 910 (in window). ~$799-1000. SCC68070 15.5MHz, CD-RTOS.
- Interaction: IR remote with built-in thumb-operated trackball ("thumbstick ball" 22ER9051
  Shell 1 / "CD-i Commander" 22ER9055 Shell 2, pressure-sensitive); cursor-driven GUI;
  full-size wired Trackerball 22ER9013 + Mouse + Touchpad were separate peripherals.
- ~$1B reported investment, 570k units, famous Zelda/Hotel Mario CD-i games, EA defection,
  abandoned US 1996, discontinued 1998. "Terrible game machine AND terrible PC" (Gates).
- Images: 29 free files (PD/CC0/CC-BY/CC-BY-SA) incl. launch unit, remotes, rollerball.

**Angle C — TI Dataman (1977): PREMISE FALSIFIED → NO-GO as card device.**
- No magnetic keying cards. Games preprogrammed in TMC1982 ROM (TMS1000 lineage).
  The magnetic program-card device is the TI-58/TI-59 (also 1977).
- Dataman is real and image-rich (4 CC files) but its interaction (machine poses
  problems, grades your answer) = Little Professor's model → too duplicative, defer.
- Good reframe for memory: "the calculator that can't calculate — it grades you."

### Decision
- Promote RCA Studio II and CD-i.
- Third candidate: TI-59 (1977) magnetic-card programmable calculator — the actual
  card-fed device. Verify via Wikipedia + Commons API directly (no Octen budget left
  for subagents; 1 Octen reserved for curator verification, likely unused).
  If images are weak, promote just 2.

(append as work happens)
