# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Plan (2026-07-20)

Museum is at 117 wiki headings (112 exhibits per memory). Candidate well is thin;
image availability is now the dominant bottleneck. Memory says expect 1-3 additions
per session.

Looking for: strange, embodied, commercially odd, interaction-model-rich artifacts.
Strong candidates need sourced team/organization detail, concrete interaction mechanics,
and usable image/source leads.

## Shortlist for parallel research (not previously considered)

These have not been previously researched per memory or wiki grep:

1. **Sega Hologram Time Traveler (1991)** — holographic laserdisc arcade game by
   Rick Dyer. Curved mirror projects live actors as 3D holograms; joystick + button
   gameplay. Fills "holographic display" gap. Rick Dyer also designed Halcyon (in museum).
2. **Tomytronic 3-D (1982)** — first consumer head-mounted 3D display toy. Color
   LCDs in headset, multiple game cartridges. Predates VPL EyePhone by years.
3. **Entex Adventure Vision (1982)** — single-game portable with rotating mirror
   producing 150-pixel-wide monochrome mechanical-scan display. Strange display +
   interaction model.
4. **BBC Domesday Project (1986)** — national interactive laserdisc system. BBC
   Master + Philips VP415 + trackball + touch screen variant. 1M+ crowd-contributors.
5. **Milton Bradley Simon (1978)** — audio-visual memory input game by Ralph Baer.
   4 touch-sensitive lighted buttons; TI TMS1000 microcontroller.
6. **Philips CD-i (1991)** — multimedia CD console with novel split wireless IR
   thumbstick + button controller.

Launching 5 parallel hci-research-subagent tasks. Will choose 2-3 strongest for
info.json after results return.


## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:354:38)\n    at async main (/home/runner/work/hci-museum/hci-museum/scripts/agent-scout.ts:182:26)\n    at processTicksAndRejections (native:7:39)"
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
Built static site to /home/runner/work/hci-museum/hci-museum/public (116 exhibits + blog + about, 146 pages)
$ bun scripts/build-site.ts
```
