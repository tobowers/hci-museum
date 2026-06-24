# HCI Museum Wiki – Batch B Research Notes

Five weird/important HCI projects from roughly 1975–1995.

---

## 1. Nintendo Power Glove (1989)

- **Title:** Nintendo Power Glove
- **Year:** 1989 (North American release October 1989)
- **Category tags:** Gesture, Wearable, Gaming, Motion Control, Virtual Reality

### Overview

The Power Glove was an officially licensed, third-party controller accessory for the Nintendo Entertainment System (NES). Marketed as a futuristic, gesture-based way to play games, it tracked hand position and finger bending and mapped them to NES inputs. It sold strongly at launch—around one million units in North America and roughly 1.3 million worldwide including Japan—but was widely criticized for imprecise controls, difficult calibration, and a lack of dedicated software. Today it is remembered as both a famous flop and an early mass-market experiment in wearable motion control that influenced later controllers and VR hardware.

### Deep dive

**Background.** The Power Glove originated outside Nintendo. Abrams/Gentile Entertainment (AGE) licensed technology from VPL Research, the virtual-reality company co-founded by Jaron Lanier and Thomas G. Zimmerman. VPL’s DataGlove was a high-end research instrument used by NASA and others, costing around $10,000. AGE, together with Mattel as manufacturer, aimed to produce a consumer version for the NES boom. Mattel engineers had roughly nine months to shrink a $10,000 lab device into a toy with about $26 worth of parts.

**Technical details.** The glove was worn on the right hand and contained:

- Conductive-ink flex sensors on four fingers (the pinky was omitted to save cost), giving roughly four positions per finger.
- Ultrasonic transmitters/receivers to track hand roll and position in 3D space (x, y, z and roll). The system used two ultrasonic sensors mounted near the TV and receivers on the glove.
- A keypad on the forearm with traditional NES buttons (A, B, Start, Select, D-pad) plus programmable buttons 0–9 and a Program button for entering game-specific codes.
- A serial connection to the NES.

The DataGlove used fiber-optic flex sensors with much higher resolution; the Power Glove replaced these with cheaper conductive ink on Mylar.

**Notable experiments, demos, and games.** Only two games were released specifically for the glove: *Super Glove Ball* (a first-person puzzle-maze game) and *Bad Street Brawler* (a beat-’em-up). Both were playable with a standard controller but included moves intended for the glove. Several other titles were announced—*Glove Pilot*, *Manipulator Glove Adventure*, and *Tech Town*—but never released. The glove appeared prominently in the 1989 film *The Wizard*, where the character Lucas Barton declares, “I love the Power Glove. It’s so bad.”

**Impact.** Despite its commercial failure, the Power Glove is often cited as a precursor to later motion controllers (Nintendo Wii Remote, PlayStation Move, Microsoft Kinect) and as an early affordable entry point for hobbyist VR experiments. 1990s VR enthusiasts used the glove with shareware such as REND386 to interact with 3D worlds more cheaply than with VPL’s DataGlove. It has since become a popular hacking platform for drone controllers, musical instruments, and stop-motion animation tools.

**Weird/fun facts.**

- The design was inspired by the *RoboCop* franchise.
- Mattel reportedly took 700,000 retailer orders after a CES demo where much of the on-screen action was staged with an Amiga and an actor pretending to play.
- Nintendo required the glove to survive 10 million finger bends before granting its Seal of Quality.
- A 2019 documentary, *The Power of Glove*, chronicles its history.

### Media

- `assets/wiki/power-glove-1.jpg` — The American NES Power Glove, showing the forearm keypad and knuckle-mounted ultrasonic sensors. Source: Wikimedia Commons.
- `assets/wiki/power-glove-2.jpg` — Promotional advertising imagery for the Power Glove, c. 1989. Source: ACMI (Australian Centre for the Moving Image).

### Sources

- Wikipedia, “Power Glove.” https://en.wikipedia.org/wiki/Power_Glove
- ACMI, “The promise of the Nintendo Power Glove.” https://www.acmi.net.au/stories-and-ideas/nintendo-nes-power-glove/
- Jake Rossen, “An Oral History of Nintendo's Power Glove,” Mental Floss, 22 Feb 2017. https://mentalfloss.com/article/91939/losing-their-grip-oral-history-nintendos-power-glove
- HowStuffWorks, “How the Nintendo Power Glove Worked.” https://electronics.howstuffworks.com/nintendo-power-glove.htm
- Design News, cover story, 4 Dec 1989 (PDF via Microsoft Research/Bill Buxton collection). https://research.microsoft.com/en-us/um/people/bibuxton/buxtoncollection/a/pdf/powerglove%20design%20news%20%20article.pdf

---

## 2. Olivetti Active Badge (1992)

- **Title:** Olivetti Active Badge / Active Badge System
- **Year:** Conceived 1989; system described 1992
- **Category tags:** Wearable, Location-Aware, Ubiquitous Computing, Context-Aware, Infrared

### Overview

The Active Badge system was one of the first building-scale indoor location systems. Developed at the Olivetti Research Laboratory (ORL) in Cambridge, England, it let a computer system track where people were inside an office by having them wear small infrared badges. The idea pioneered “location-aware” or context-aware computing: applications could route phone calls, find colleagues, or move virtual desktops based on a person’s physical location.

### Deep dive

**Background.** The Olivetti Research Laboratory was founded in 1986 by Hermann Hauser and Andy Hopper after Olivetti acquired Acorn Computers. The Active Badge was conceived, designed, and prototyped between 1989 and 1992 by a team including Roy Want, Andy Hopper, Andy Harter, and others.

**Technical details.**

- Each badge was a small wearable device that transmitted a unique infrared signal every 10 seconds (early versions every 15 seconds).
- Rooms were equipped with one or more networked sensors that received these signals and forwarded them to a central location service.
- The original badge sent a 5-bit unique code; later versions expanded to 10-bit and then 48-bit addresses, with the final version adding a microprocessor and bi-directional communication.
- Because infrared signals do not pass through walls, the system could locate a badge at roughly room-level granularity.
- Location information was exposed through a web service called the WWW Active Badge Service.

**Notable experiments and demos.** Deployments reached over 1,500 badges and 2,000 sensors across European universities (Kent, Imperial College, Lancaster, Twente) and U.S. research labs (Xerox PARC, DEC, Bellcore, MIT Media Lab). The largest single site was the Cambridge University Computer Laboratory, with more than 200 badges and 300 sensors in daily use. The system enabled early “follow-me” applications such as phone call forwarding and moving a user’s desktop session as they walked between rooms.

**Impact.** The Active Badge is widely cited as a foundational system for indoor localization, context-aware computing, and what later became known as sentient/ubiquitous computing. Follow-up work at ORL/AT&T Laboratories Cambridge evolved into the Active Bat ultrasonic system and the broader Sentient Computing project.

**Weird/fun facts.**

- The Active Badge was once the subject of a cartoon in a British national newspaper.
- The system raised early privacy questions: wearing a badge that broadcasts your location every few seconds was a novel social concern in the early 1990s.
- ORL later became AT&T Laboratories Cambridge and is also famous for developing VNC.

### Media

- `assets/wiki/active-badge-1.gif` — Four generations of the Active Badge, showing the progression from 5-bit to 48-bit bidirectional designs. Source: Cambridge University Computer Laboratory / AT&T Laboratories Cambridge Active Badge archive.

### Sources

- Cambridge Computer Laboratory, “The Active Badge System.” https://www.cl.cam.ac.uk/research/dtg/attarchive/ab.html
- Cambridge Computer Laboratory, “The Active Badge.” https://www.cl.cam.ac.uk/research/dtg/attarchive/thebadge.html
- Roy Want, Andy Hopper, Veronica Falcão, Jonathan Gibbons, “The Active Badge Location System,” *ACM Transactions on Information Systems*, Jan 1992. https://www.roywant.com/cv/papers/pubs/1992-01%20(ACM%20TOIS)%20Active%20Badge.pdf
- Wikipedia, “Olivetti Research Laboratory.” https://en.wikipedia.org/wiki/Olivetti_Research_Laboratory
- Microsoft Research, “Location-Aware Computing Comes of Age,” *IEEE Computer*, 2004. https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/locationaware-ieeecomputer2004.pdf
- YouTube, “The Active Badge System | ACM SIGCHI.” ID: `-vQ48S1IVD4`

---

## 3. The Digital Desk (1991)

- **Title:** The Digital Desk
- **Year:** 1991
- **Category tags:** Tangible Interface, Augmented Reality, Projection, Computer Vision, Office Work

### Overview

The Digital Desk was a research prototype created by Pierre Wellner at Rank Xerox EuroPARC in Cambridge. It augmented a normal office desk with an overhead video camera and a computer-controlled projector. The camera watched the desk surface, detected where the user was pointing (with an LED-tipped pen or stylus), and recognized paper documents placed on the desk. The projector could then overlay electronic images, controls, and text directly onto the paper, blending physical and digital work on a single surface.

### Deep dive

**Background.** Wellner’s project explored how to make the transition between paper and electronic information less awkward. Rather than forcing users to look back and forth between a physical desk and a computer screen, the Digital Desk turned the desk itself into a display and input surface.

**Technical details.**

- An ordinary desk was used as the work surface.
- A video camera mounted above the desk pointed down at the surface.
- Image processing detected pointing (initially via an LED-tipped pen) and recognized documents.
- A computer-controlled projector mounted above the desk displayed electronic objects, menus, numbers, and annotations onto the physical desk and onto paper documents.
- The system required coordinate transformations between the camera, the pointing device, and the projected image.
- Early image-processing work focused on adaptive thresholding to convert grayscale camera images into clean black-and-white representations of documents and handwriting.

**Notable experiments and demos.**

- The “DigitalDesk Calculator” (UIST ’91) demonstrated tangible manipulation: a user could point at printed numbers on paper and the system would project a running calculation back onto the sheet.
- *PaperPaint* was a freehand drawing application developed on an early Digital Desk prototype.
- A CHI ’92 video, “Tactile Manipulation on a Digital Desk,” showed scenarios including sketching, note-taking, and expense calculations; the sketching segment is sometimes cited as an early instance of the multi-touch “pinch” gesture.
- The EuroCODE project (1992–1995) produced *Ariel*, a DigitalDesk tailored to annotating engineering drawings.
- Later work evolved into *LightWorks* and *CamWorks*, over-the-desk video-capture systems for casual scanning.

**Impact.** The Digital Desk is widely recognized as one of the first projection-based augmented-reality systems and a direct ancestor of modern tangible and augmented-reality interfaces. It influenced research in interactive surfaces, digital whiteboards, and projected augmented reality.

**Weird/fun facts.**

- Wellner originally envisioned using a finger—or two fingers for certain tasks—as the pointing device, though a tablet and stylus proved more practical at the time.
- Some of the famous CHI ’92 demo sequences were scripted “envisionments” because the real-time technology of 1991 could not yet fully realize the concepts.

### Media

- `assets/wiki/digital-desk-1.gif` — Early DigitalDesk prototype showing projected user-interface elements on the desktop surface. Source: NAVER LABS Europe / Xerox EuroPARC.
- `assets/wiki/digital-desk-2.jpg` — YouTube thumbnail for “Tactile Manipulation on a Digital Desk (1991) Xerox,” the CHI ’92 video demonstration. Source: YouTube / VintageCG.

### Sources

- Pierre Wellner, “The DigitalDesk Calculator: Tactile Manipulation on a Desk Top Display,” *UIST ’91 Proceedings*, pp. 27–33. https://uist.acm.org/archive/html/proceedings/1991.html
- ACM Digital Library, DOI 10.1145/120782.120785. https://dl.acm.org/doi/pdf/10.1145/120782.120785
- Pierre Wellner, “Interacting with Paper on the DigitalDesk,” University of Cambridge Technical Report UCAM-CL-TR-330, 1994. https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-330.pdf
- Eindhoven University presentation slides, “The Digital Desk from Pierre Wellner in 1991.” https://rauterberg.employee.id.tue.nl/presentations/How-to-acquire-HCI-knowledge/tsld006.htm
- NAVER LABS Europe, “DigitalDesk to CamWorks.” https://europe.naverlabs.com/history/past-research/digitaldesk-to-camworks/
- YouTube, “Tactile Manipulation on a Digital Desk (1991) Xerox.” ID: `laApNiNpnvI`
- YouTube, “Digital Desk” by Pierre Wellner, 1991. ID: `S8lCetZ_57g`

---

## 4. Atari Mindlink (1984)

- **Title:** Atari Mindlink
- **Year:** 1984 (announced; never released)
- **Category tags:** Brain-Computer Interface, Biofeedback, Wearable, Gaming, Vaporware

### Overview

The Atari Mindlink was an unreleased controller for the Atari 2600 (and planned for Atari home computers and the 7800) that promised to let players control games with their minds. In reality it read myoneural signal voltage from forehead muscles using a headband with infrared sensors. Players moved game objects by twitching their eyebrows or forehead. The device was demonstrated at the 1984 Summer CES but was canceled after Atari’s consumer division was sold to the Tramiel family.

### Deep dive

**Background.** Atari explored biofeedback and alternative input as part of its push into novel game peripherals. The Mindlink grew out of earlier work on a biofeedback relaxation system and a project called “Bionics.” Because the medical-device market was small and carried liability concerns, Atari reworked the headband as a game controller.

**Technical details.**

- The controller consisted of an elastic headband with three metal contact sensors pressed against the player’s forehead.
- It detected myoneural signal voltage (electrical activity associated with muscle contraction) in the forehead muscles.
- The signal was transmitted via infrared to a receiver connected to the Atari 2600 controller port.
- In its basic form the device supported only “bang-bang” control: moving an object left/right or up/down based on muscle tension.
- An advanced lab prototype could reportedly control almost any Atari joystick-compatible software by strapping the headband to different muscle groups (bicep, thigh).

**Notable experiments, demos, and games.** Three games were in development:

- *Bionic Breakthrough* — essentially a *Breakout* clone controlled with forehead movements.
- *Telepathy*
- *Mind Maze* — a pseudo-ESP card-guessing game.

None were released. The demo at the 1984 Summer CES in Chicago used simple Pong/Breakout-style software because the more advanced controller could not be finished in time.

**Impact.** The Mindlink is remembered as one of the earliest consumer brain–computer / biofeedback interfaces and a classic example of 1980s vaporware. It predated modern EMG-based and consumer EEG devices by decades and foreshadowed today’s interest in hands-free and thought-adjacent control.

**Weird/fun facts.**

- Atari’s marketing claimed the device let you control games “with your mind,” but it actually responded to forehead muscle movement.
- Testers frequently got headaches from consciously moving their eyebrows to play.
- The day after the CES introduction, a representative of the Special Olympics (via Rafer Johnson) approached Atari about developing sports software for disabled athletes; the project’s cancellation closed that opportunity.
- Proposed follow-ups included attaching sensors to forehead, biceps, and thighs for five-degree “bang-bang” control—essentially a Wii-style motion controller for the late 1980s.

### Media

- `assets/wiki/atari-mindlink-1.jpg` — A Mindlink controller on display at the National Videogame Museum. Source: Wikimedia Commons.
- `assets/wiki/atari-mindlink-2.jpg` — Prototype Mindlink headband and hardware shown by the Atari Museum. Source: Atari Museum / ctrl-alt-rees mirror.

### Sources

- Wikipedia, “Atari Mindlink.” https://en.wikipedia.org/wiki/Atari_Mindlink
- Atari Museum, “The Atari Mindlink System.” https://atarimuseum.ctrl-alt-rees.com/videogames/consoles/2600/mindlink.html
- Atari Compendium, “MindLink.” https://www.ataricompendium.com/game_library/prototypes/vcs/mindlink.html
- Chris Scullion, “The Atari Mindlink and other outrageous controllers,” *Computer and Video Games*, 10 Mar 2014. https://www.cvg.com/453147/blog/the-atari-mindlink-and-other-outrageous-controllers/
- T3, “20 Worst game accessories ever.” https://www.t3.com/features/20-worst-game-accessories-ever-1/mindlink-jpg
- YouTube, “Atari Mindlink (Atari 2600) Commercial 1984.” ID: `VgQ-nii_9OY`
- YouTube, “Anthony Jones, Atari UK; Atari Mindlink — interview.” ID: `PqBuVLAEmzs`

---

## 5. Texas Instruments Speak & Spell (1978)

- **Title:** Texas Instruments Speak & Spell
- **Year:** 1978 (introduced at CES June 1978)
- **Category tags:** Voice, Speech Synthesis, Educational Toy, Handheld, Consumer Electronics

### Overview

The Speak & Spell was an electronic educational toy that used solid-state speech synthesis to teach children spelling and pronunciation. Introduced by Texas Instruments in 1978, it was one of the first handheld electronic devices to use interchangeable ROM cartridges and one of the first consumer products to put a digital model of the human vocal tract on a single integrated circuit. It became a cultural icon, appearing in films, music, and museums, and its voice chip technology influenced later speech-synthesis applications.

### Deep dive

**Background.** Development began in 1976 at Texas Instruments, led by Paul Breedlove, with an initial budget of $25,000. It grew out of TI’s research into linear predictive coding (LPC) speech synthesis. The goal was to create a talking learning aid for children ages 7 and up.

**Technical details.**

- Speech synthesis was performed by the TMC0280 chip, later known as the TI TMS5100. It used a 10th-order LPC model implemented with pipelined digital signal-processing logic.
- Phoneme data for spoken words were stored on a pair of 128 Kbit PMOS ROMs—at the time the largest-capacity ROMs in use.
- A professional speaker recorded the words; the recordings were processed in Dallas to drastically reduce the data rate to roughly 1,000 bits per second, with significant hand-editing required to fix voicing errors.
- The device had a small vacuum fluorescent display (VFD) capable of showing 8 characters at a time (later Super Speak & Spell models used LCDs).
- Power came from four C batteries or a 6-volt DC adapter.
- Expansion modules plugged into a slot near the battery compartment to add word libraries and games.

**Notable experiments and games.**

- Built-in games included *Say It*, *Mystery Word* (electronic hangman), *Secret Code* (Caesar-cipher encoder/decoder), and *Letter*.
- Cartridge expansions included *Vowel Power*, *Super Stumpers*, *Mighty Verbs*, and an *E.T. the Extra-Terrestrial* tie-in module.
- The toy spawned companion products: Speak & Read (1980), Speak & Math (1980), and later Super Speak & Spell models.

**Impact.**

- The Speak & Spell was named an IEEE Milestone in 2009 for being the first use of a digital signal-processing IC for speech generation.
- It is held in the collections of the Computer History Museum and the Smithsonian National Museum of American History.
- Its synthesized voice became a staple of popular music (Kraftwerk, Depeche Mode album title *Speak & Spell*, Beck, E.T. soundtrack, etc.).
- It inspired the circuit-bending community, with musicians modifying units to create strange electronic instruments.

**Weird/fun facts.**

- The toy’s voice was provided by radio announcer Mitch Carr.
- The 1978 American model had raised chiclet-style buttons; a 1980 redesign introduced a flat membrane keyboard.
- In *E.T. the Extra-Terrestrial* (1982), a Speak & Spell is the key component of E.T.’s improvised “phone home” device.
- A 2019 reissue by Basic Fun replaced the original synthesized voice with recorded dialog processed to sound synthesized and removed the cartridge slot.

### Media

- `assets/wiki/speak-spell-1.jpg` — An American 1978-model Speak & Spell with raised chiclet keyboard. Source: Wikimedia Commons.
- `assets/wiki/speak-spell-2.jpg` — TI Speak & Spell as featured in the Computer History Museum timeline. Source: Computer History Museum.

### Sources

- Wikipedia, “Speak & Spell (toy).” https://en.wikipedia.org/wiki/Speak_%26_Spell_(toy)
- Computer History Museum, “Speak & Spell.” https://www.computerhistory.org/timeline/ai-robotics/
- Computer History Museum, “Graphics & Games Timeline.” https://www.computerhistory.org/timeline/graphics-games/
- IEEE Global History Network, “Milestones: Speak & Spell, the First Use of a Digital Signal Processing IC for Speech Generation, 1978.” http://www.ieeeghn.org/wiki/index.php/Milestones:Speak_%26_Spell,_the_First_Use_of_a_Digital_Signal_Processing_IC_for_Speech_Generation,_1978
- Audrey Watters, “Speak & Spell: A Brief History,” Circuit Bent, 13 Mar 2020. https://circuit-bent.net/talking-teacher-circuit-bent/speak-spell-a-brief-history.html
- Texas Instruments press release, “TI Talking Learning Aid Sets Pace for Innovative CES Introductions,” 11 June 1978. http://www.datamath.org/Speech/SpeaknSpell.htm
- YouTube, “Speak & Spell (1978) Texas Instruments.” ID: `B_bahLxKF_k`
- YouTube, “1978 Texas Instruments Speak & Spell.” ID: `F65l31ZkZKw`

---

*Research compiled June 2026. Facts are sourced from the references listed; uncertainty is noted where evidence is thin or conflicting.*
