# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Round 1: Parallel subagent research

Launched 4 subagents:
1. **hci-research-subagent** - Obscure commercial computer peripherals
2. **hci-research-subagent** - Unconventional arcade HCI
3. **hci-research-subagent** - Consumer sensor/input devices
4. **hci-research-subagent** - Research lab prototypes

### Results analysis:

**Subagent 1 (computer peripherals):**
- NewTek DigiView (1986) - Video digitizer, rotating color wheel. NOT HCI input paradigm. REJECT.
- BodyLink Biofeedback System (1987) - Overlaps with Synapse Relax (in museum).
- Fischertechnik Computing Interface (1983-84) - Overlaps with AtariLab (in museum).
- AlphaSyntauri Digital Synthesizer (1980) - Music HCI category saturated.
- Commodore Sound Sampler (1986) - Audio recorder, not novel interaction model.

**Subagent 2 (arcade HCI):**
- Fire Truck (1978) - Atari dual-steering cooperative. INTERESTING. Investigated further below.
- Tapper (1984) - Bally Midway beer tap as controller. INTERESTING. Investigated further below.
- Ice Cold Beer (1983) - Taito electro-mechanical balancing. Physical ball + tilting bar. More mechanical amusement than computer HCI.
- VS. Slalom (1986) - Nintendo/Rare ski poles + skis. Full-body stance. Verified: real optional controller upgrade per Wikipedia, but overlaps with Surf Champ (in museum).
- Arm Wrestling (1985) - ALREADY DEFERRED. Do not re-scout.

**Subagent 3 (consumer sensors):**
- Synapse Relax (1984) - ALREADY IN MUSEUM!
- AtariLab (1983) - ALREADY IN MUSEUM!
- U-Force (1989) - ALREADY IN MUSEUM!
- Amiga Joyboard (1983) - ALREADY IN MUSEUM!
- Datasoft Le Stick (1982) - ALREADY DEFERRED!
ALL FIVE were already covered. ZERO new candidates.

**Subagent 4 (research lab):**
- Nimish Mehta Multi-Touch Tablet (1982) - First multi-touch. U of Toronto. Research prototype, not commercial.
- Sayre Glove (1977) - ALREADY DEFERRED.
- Bob Boie Transparent Multi-Touch (1984) - Bell Labs. Research prototype.
- TeamWorkStation (1990) - Overlaps with ClearBoard (in museum).
- Buxton "Soft Machine" (1984-86) - Deformable touch. Research prototype.

## Round 2: Direct research

- Exa credits exhausted
- Grok used for multiple targeted queries
- Direct Wikipedia verification of top candidates

### Verified facts:
- **Alpine Ski** (Taito, 1981): No physical skis. Standard 8-way joystick. Grok hallucination.
- **VS. Slalom**: Real optional ski-pole + foot platform controller. Confirmed on Wikipedia. But overlaps with Surf Champ and images hard to find.
- **Ice Cold Beer**: Real electro-mechanical game with physical ball + tilting bar. No computer display. DECIDED: too mechanical, not HCI.
- **Lunar Lander** (1979): Proportional thrust handle with haptic rubber stop. But essentially a specialized analog joystick.
- **Chalk Board PowerPad** (1983): Real pressure-sensitive pad. Overlaps with KoalaPad (in museum).
- **ThunderScan** (1984): Real printer-to-scanner conversion. Not HCI input.

## Round 3: Final selection

After extensive research, the candidate well is confirmed genuinely thin (as noted in beepy-memory).

**SELECTED FOR PROMOTION:**

1. **Fire Truck (Atari, 1978)**
   - First arcade game designed around cooperative two-player control of a single shared vehicle
   - Front player sits forward steering tractor; rear player stands backward steering tiller
   - Designed by Wendi Allen (Howard Delman) and John Ray
   - Strong Wikipedia article, KLOV documentation, Retro Gamer magazine coverage
   - Images: Wikipedia fair-use flyer + screenshot; KLOV cabinet photos
   - Interaction model: cooperative social HCI paradigm

2. **Tapper (Bally Midway, 1984)**
   - Real Budweiser beer tap handle as primary game controller
   - Early machines used actual off-the-shelf tap handles
   - Cabinet designed as bar furniture (brass foot rail, drink holders)
   - Developed by Marvin Glass and Associates (Rock 'Em Sock 'Em Robots firm)
   - Strong Wikipedia article, Wikimedia Commons CC-licensed cabinet photo
   - Images: CC BY 2.0 cabinet photo + Wikipedia fair-use screenshot
   - Interaction model: real-world prop repurposed as computer interface

## Promotion actions

1. Created potential/fire-truck/info.json and potential/tapper/info.json
2. Ran `bun scripts/promote-potentials.ts` — wiki updated, data.ts NOT updated (known bug)
3. Downloaded 4 images to assets/wiki/:
   - assets/wiki/fire-truck-flyer.png (156 KB)
   - assets/wiki/fire-truck-screenshot.png (57 KB)
   - assets/wiki/tapper-cabinet.jpg (733 KB) — CC BY 2.0
   - assets/wiki/tapper-gameplay.png (5 KB)
4. Manually added both entries to src/data.ts
5. Updated image paths in docs/hci-wiki.md from remote URLs to local assets/wiki paths
6. Updated wiki Table of Contents (entries 107 and 108)
7. Archived potential/{fire-truck,tapper}/info.json → info.json.archived
8. Typecheck: PASSED
9. Build: PASSED (111 exhibits, 139 pages)

