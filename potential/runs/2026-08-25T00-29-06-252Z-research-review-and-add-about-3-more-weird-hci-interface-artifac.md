# Run trace: 2026-08-25 — research, review, add ~3 weird HCI artifacts

## Session start
Today's date in env: 2026-08-25. Collection at 213 exhibits (per memory 2026-08-24).

## Step 1: Scan potential/*/info.json for ready candidates
Found 2 active (non-archived) info.json files among 212 potential dirs:
- potential/the-hands/ — "The Hands" (1984) — ALREADY IN COLLECTION (src/data.ts)
- potential/view-master-interactive-vision/ — ALREADY IN COLLECTION

Both are stale. Archiving both to info.json.archived so promote-potentials.ts won't auto-promote duplicates next time.

Proceeding to fresh research. Launching 3 research subagents on unexplored angles.

## Step 2: Launch research subagents
3 potential fresh unexplored angles chosen:
1. Early home computers / educational "computer peripherals" with embodied or robot-linked interaction
2. Weird mechanical/analog output or input transducer artifacts (e.g., unusual CRT/monitor input devices)
3. Non-telephony consumer "smart" appliances with novel physical UI (not already soft-key/answering-machine covered)

Assigning one subagent per angle, each with ≤2 Octen searches.

## Step 2 results (3 subagents completed)

### Angle 1: educational/home-computer peripherals (embodied/robot-linked)
- **Colne Robotics Armdroid (1981)** — "first British home construction robot arm", user-builds like Meccano, programs via Z80 home computer, continuous-path. NOT in museum. BUT: no Wikimedia Commons image; Science Museum images are CC BY-NC-SA (non-commercial — problematic for public museum display). Image-blocked-ish.
- **Commotion Beasty arm (1985)** — 8-channel IR servo control. Museums Victoria CC BY images, not Commons. Image-blocked.
- PIR-1 (1986) — too weak.

### Angle 2: display/output reframing
- **GE Talaria oil-film light-valve projector (1983)** — PD Commons image EXISTS (File:GE_Taleria.png). Deformable-oil display channel (electron beam writes raster onto oil film that deforms into a diffraction grating). Used as computer-graphics output. BUT interaction model is output-only (a projector) — weak fit for "interaction model is the point."
- Hughes see-through HMD (1981) — interesting mirror/reflection output, but NO Commons image.
- Xerox Sheridon gyricon — out of period, rejected.

### Angle 3: unusual tracking/input principle
- **Prentice Romich HeadMaster (1985)** — ultrasonic head-tracking mouse. **DUPLICATE: HeadMaster (1986) is ALREADY IN THE COLLECTION LEDGER.** Subagent reported wrong year. Verified in src/data.ts. REJECT as duplicate.
- Wang orientation-sensor headset — patent-only, no product, no images. Weak.

### Assessment
No candidate is a clean promotion:
- Armdroid/Beasty = image-blocked (no Commons; museum images non-free/CC-BY-NC).
- Talaria = weak interaction model (output-only projector), though PD image exists.
- HeadMaster = duplicate.

## Step 3: Direct verification of strongest candidate's image situation (no Octen, direct slany)

### Armdroid (Colne Robotics, 1981)
Checking Wikimedia Commons for Armdroid images via API before deciding.

## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:445:38)\n    at async main (/home/runner/work/hci-museum/hci-museum/scripts/agent-scout.ts:194:26)\n    at processTicksAndRejections (native:7:39)"
}
```

## Recovery Check: bun run typecheck

Result: PASS

```text
$ tsc --noEmit
```

## Recovery Check: bun run build

Result: PASS

```text
Built static site to /home/runner/work/hci-museum/hci-museum/public (213 exhibits + blog + about, 279 pages)
$ bun scripts/build-site.ts
```
