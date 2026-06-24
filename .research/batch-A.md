# Batch A — Five Weird/Important HCI Projects (c. 1975–1995)

---

## 1. Hubot (c. 1983)
**By:** Hubotics Inc.  
**Category tags:** Robot, Voice, Home Computer, CES, Assistive/Companion

### Overview
Hubot was a butler-esque personal home robot developed by California startup Hubotics Inc. Marketed as a companion, educator, entertainer and sentry, it combined a wheeled mobile robot with a voice synthesizer, an on-board computer, a TV/monitor, an Atari 2600 game console, and ultrasonic obstacle sensing. Sources disagree on the exact year: the Science Photo Library and CNET caption it as 1981, while a detailed hardware retrospective dates the company’s formation and CES debut to 1984. It is therefore best treated as an early-1980s project.

### Deep dive
* **Origins and team.** Hubotics Inc. was a small Carlsbad, California startup formed to build a personal home robot named Hubot. Mechanical/graphic designer Glen Keith hand-built early prototypes in his home, carving the rotating sensor head from plastic and fiberglass [1][2].
* **Hardware.** Hubot stood roughly 1.10 m tall and moved on wheels. It contained a proprietary CP/M-class computer (one source names SysCon), a monochrome monitor, a detachable keyboard, printer support, joystick control, a 12-inch display, a TV tuner, a cassette deck and an Atari 2600 [1][2].
* **Sensing and speech.** A Polaroid-style ultrasonic transducer mounted on a rotating collar scanned the room for obstacles before movement. An optional voice-command module with a built-in microphone allowed limited spoken control; the voice synthesizer could speak about 1,200 words in English [1][3].
* **Launch and price.** The robot was demonstrated at the January 1984 Consumer Electronics Show (CES). It was priced at US$3,495 (well over US$10,000 in 2025 dollars). Planned optional modules included a fire/burglar alarm, a robotic arm, a drink tray, a vacuum unit, route programming, and autonomous recharging [1].
* **Commercial fate.** The project was too expensive and too far ahead of its ecosystem to succeed at scale. Production estimates vary; one Reddit post claims roughly 75 units were made, but this is a single-source figure and should be treated cautiously [4].
* **Weird/fun facts.** Hubot’s body was rotomolded in polyethylene — the same material used for trash cans and water tanks — because it was cheap, rugged and still looked good after scratches. Its head used the same sonar sensor found in Polaroid cameras. Today a Hubot is preserved in the Computer History Museum’s collection [3].
* **Impact.** Hubot is an early, exuberant example of the 1980s personal-robot boom. It anticipated later voice-activated smart-home assistants by several decades, even if it failed commercially.

### Media
* `assets/wiki/hubot-cnet.webp` — CNET gallery photo of Hubot, captioned “Hubot, Hubotics, 1981.” [3]
* `assets/wiki/hubot-hardware.webp` — Hardware.com.br photo showing Hubot’s display and Atari 2600 slot. [1]
* `assets/wiki/hubot-sciencephoto.jpg` — Science Photo Library image of Hubot being held from behind. [5]

### Sources
1. Hardware.com.br, “O robô doméstico com Atari embutido que custava caro demais para dar certo” (2025) — https://www.hardware.com.br/tecnologia/hubot-robo-atari-1984/
2. acrmuseum.org / American Computer and Robotics Museum, “Hubot: A Personal History and Reminiscence” (snippet via last30days) — https://acrmuseum.org/hubot-history
3. CNET, “Rise of the robots, from sci-fi to our homes – Hubot, Hubotics, 1981” — https://www.cnet.com/pictures/rise-of-the-robots-from-sci-fi-to-our-homes/
4. Reddit r/cassettefuturism, “Hubot by Hubotics: A sophisticated personal household robot, c.1983” — https://www.reddit.com/r/cassettefuturism/comments/15q8sck/hubot_by_hubotics_a_sophisticated_personal/
5. Science Photo Gallery, “Hubot Robot Acrylic Print by Volker Steger / Science Photo Library” — https://sciencephotogallery.com/featured/hubot-robot-volker-steger.html?product=acrylic-print
6. YouTube: “The Story of Hubot” (Hubotics Inc.) — https://www.youtube.com/watch?v=Je4TjjtFDNU

---

## 2. The P300 Speller (1988)
**By:** Lawrence A. Farwell & Emanuel Donchin  
**Category tags:** Brain Control, BCI, EEG, P300, Assistive Technology

### Overview
The P300 Speller was the first brain-computer interface (BCI) spelling system based on the P300 event-related potential (ERP). Users selected letters and numbers from a 6×6 matrix simply by focusing attention on the target; the system detected the resulting P300 brainwave and inferred the chosen character. It provided a non-muscular communication channel for people with severe motor impairments.

### Deep dive
* **Publication.** Farwell and Donchin described the system in “Talking off the top of your head: toward a mental prosthesis utilizing event-related brain potentials,” *Electroencephalography and Clinical Neurophysiology* 70(6):510–523, 1988 [1][2].
* **The P300 signal.** The P300 is a positive EEG deflection that peaks roughly 300 ms after an infrequent, attended “oddball” stimulus. In the speller, this signal is elicited whenever the row or column containing the user’s target character flashes [3].
* **Row-column paradigm.** A 6×6 grid displays the alphabet plus digits. Rows and columns flash in random order; the user silently counts flashes that include the desired character. The row and column producing the largest P300 responses are identified, and their intersection gives the selected character [2][3].
* **Performance.** The original report used a stepwise linear discriminant analysis (SWLDA) classifier, tested on four subjects, and achieved about 95% accuracy at roughly 12 bits/min information transfer rate [3].
* **Notable experiments/demos.** Farwell and Donchin’s paper demonstrated that people could spell without any overt muscle movement. Later work introduced the checkerboard paradigm, region-based spellers, auditory/tactile variants, hybrid P300+SSVEP systems, and, most recently, LLM-augmented P300 spellers such as ChatBCI [4].
* **Impact.** The P300 Speller established the dominant design for non-invasive visual BCI spellers and remains the reference architecture for communication BCIs used by people with ALS and locked-in syndrome.
* **Weird/fun facts.** The paper’s title coined the phrase “talking off the top of your head.” Modern descendants literally pair the speller with large language models to predict words and cut the number of required selections by up to 80% [4].

### Media
* `assets/wiki/p300-rowcolumn.webp` — Row-column paradigm figure from the 2022 Frontiers review (open access). [3]
* `assets/wiki/p300-paper-01.png` — First page of the original Farwell & Donchin (1988) scanned paper. [1]

### Sources
1. Farwell, L. A. & Donchin, E. (1988). “Talking off the top of your head: toward a mental prosthesis utilizing event-related brain potentials.” PDF — https://www.farwellbrainfingerprinting.com/pdf/Farwell-Donchin-1988-Talking-Off-the-Top-of-Your-Head-BCI-brain-computer-interface.pdf
2. Sapien Labs, “Implementations of the P300 BCI Speller” — https://sapienlabs.org/implementations-of-the-p300-bci-speller/
3. Pan, J. et al. (2022). “Advances in P300 brain–computer interface spellers: toward paradigm design and performance evaluation.” *Frontiers in Human Neuroscience* 16:1077717 — https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2022.1077717/full
4. IEEE Brain on X, ChatBCI pairing P300 speller with LLMs — https://x.com/IEEEBrain/status/2026003399527813560
5. YouTube: “The P300 Speller: ‘Talking off the Top of Your Head’” — https://www.youtube.com/watch?v=FllhWvw8mfk

---

## 3. VPL Research EyePhone & DataGlove (1980s)
**By:** Jaron Lanier, Thomas G. Zimmerman and colleagues at VPL Research  
**Category tags:** VR, Gesture, Wearables, HMD, Commercial VR

### Overview
VPL Research, founded by Jaron Lanier in 1984, was one of the first companies to develop and sell virtual-reality products. Its best-known devices were the DataGlove wired glove, the EyePhone head-mounted display, the DataSuit full-body suit, and the “Reality Built for Two” shared-VR system. Lanier is widely credited with popularizing the term “virtual reality.”

### Deep dive
* **Company.** VPL stood for “Virtual Programming Languages.” The company was founded in Palo Alto by Lanier and Thomas G. Zimmerman after they left Atari; early funding came in part from Marvin Minsky. VPL filed for bankruptcy in 1990, and its patents were bought by Sun Microsystems in 1998/1999 [1][2].
* **DataGlove.** Zimmerman invented the optical-fiber glove. It used 6502 microcontrollers and fiber-optic bundles along the fingers to track hand posture and orientation, letting users manipulate virtual objects. VPL later licensed the technology to Mattel, which turned it into the Nintendo Power Glove (1989), a US$90 holiday hit that sold roughly 1.3 million units [1][3].
* **EyePhone.** Released in June 1989, the EyePhone was a head-mounted display with Fresnel lenses that tracked head orientation. Because 1980s graphics hardware could manage only about five to six frames per second, the experience was crude, and a full EyePhone system cost upwards of US$250,000, keeping it firmly in research and trade-show territory [1][4].
* **DataSuit and RB2.** The DataSuit extended full-body motion capture. “Reality Built for Two” (RB2) let two people share a virtual world, making it an early commercial networked-VR system [1].
* **Weird/fun facts.** In a 1988 description Lanier imagined a “Home Reality Engine” that plugged into the phone jack; users could choose to inhabit a cat, a mountain range, a galaxy, or even a piano. The DataGlove’s affordable consumer descendant, the Power Glove, became “one of the hottest gift items of the 1989 holiday season” but disappointed gamers because it lacked supported software [3].
* **Impact.** VPL’s products defined the visual vocabulary of 1990s VR, influenced films such as *The Lawnmower Man*, and laid the commercial groundwork for today’s HMDs and hand-tracking controllers.

### Media
* `assets/wiki/vpl-datasuit.jpg` — VPL Research DataSuit on display (Wikimedia Commons). [1]
* `assets/wiki/vpl-eyephone-demo.jpg` — Two people demonstrating EyePhone and DataGlove at the Texpo Telecommunications Show, San Francisco, June 1989 (AP/Flashbak). [4]
* `assets/wiki/vpl-jaron-lanier.jpg` — Jaron Lanier, VPL co-founder (Flashbak). [4]

### Sources
1. Wikipedia, “VPL Research” — https://en.wikipedia.org/wiki/VPL_Research
2. Wikipedia, “Jaron Lanier” — https://en.wikipedia.org/wiki/Jaron_Lanier
3. Mental Floss, “An Oral History of Nintendo’s Power Glove” — https://www.mentalfloss.com/article/91939/losing-their-grip-oral-history-nintendos-power-glove
4. Flashbak, “Jaron Lanier’s EyePhone: Head And Glove Virtual Reality In The 1980s” — https://flashbak.com/jaron-laniers-eyephone-head-and-glove-virtual-reality-in-the-1980s-26180/
5. VR & AR Wiki, “VPL EyePhone” — https://vrarwiki.com/wiki/VPL_EyePhone
6. YouTube: “1990s Jaron Lanier Presents VPL Virtual Reality Glove” — https://www.youtube.com/watch?v=E1q9zDSAQEw

---

## 4. Put-That-There (1980)
**By:** Richard A. Bolt, Chris Schmandt & Eric A. Hulteen, MIT Architecture Machine Group  
**Category tags:** Voice, Gesture, Multimodal, Graphics Interface

### Overview
“Put-That-There” was a pioneering voice-and-gesture system demonstrated at MIT’s Architecture Machine Group (a predecessor to the Media Lab). A user could create and rearrange simple graphics on a large video display by speaking naturally while pointing — for example, saying “Put that there” and indicating the object and destination with hand gestures. The system compensated for imperfect speech recognition by combining redundant input channels, context, and speech-based feedback.

### Deep dive
* **Publication.** The work was presented at SIGGRAPH ’80 as “Put-that-there: Voice and gesture at the graphics interface.” MIT’s Media Lab publication page also hosts the paper PDF [1][2].
* **Design philosophy.** The project explicitly assumed that speech-recognition hardware would never be 100% accurate. To raise “effective accuracy,” it combined voice, gesture, syntax, semantics, context-sensitive interpretation, immediate visual feedback, and spoken clarification questions [1].
* **Interaction.** Users referred to objects and locations deictically: “Create a blue square there,” “Put that below that,” etc. The system asked aloud when input was ambiguous, making the conversation loop visible and correctable [1].
* **Notable demos.** The canonical demo shows a user moving colored shapes around a large-format screen using only voice and pointing, anticipating the multimodal interfaces now common in phones, cars, and AR/VR systems.
* **Impact.** Put-That-There is a foundational reference for multimodal HCI. It inspired decades of research on gesture+speech input and is still revisited today; a 2025 arXiv paper proposes “Revisiting put-that-there” for modern head-mounted displays using large language models [3].
* **Weird/fun facts.** The project’s very name became shorthand for the entire genre of multimodal, deictic interaction. The phrase has outlived the specific hardware by more than four decades.

### Media
* `assets/wiki/put-that-there-paper-1.png` — Title page of the scanned SIGGRAPH ’80 paper PDF. [2]
* `assets/wiki/put-that-there-video.jpg` — YouTube thumbnail from the original demo recording. [4]

### Sources
1. MIT Media Lab, “Put-that-there: Voice and gesture at the graphics interface” — https://www.media.mit.edu/publications/put-that-there-voice-and-gesture-at-the-graphics-interface/
2. MIT Media Lab PDF of the paper — https://dam-prod.media.mit.edu/uuid/8e6d934b-6c6f-48e4-b0a1-270e0dae745f
3. Du, R., “‘Put-That-There’: Voice and Gesture at the Graphics Interface” citation page — https://duruofei.com/cites/Bolt1980Put.html
4. YouTube: “Put That There (Original)” — https://www.youtube.com/watch?v=RyBEUyEtxQo

---

## 5. VIDEOPLACE / Artificial Reality (1970s–80s)
**By:** Myron Krueger  
**Category tags:** Gesture, Artificial Reality, Interactive Art, Computer Vision, Telepresence

### Overview
VIDEOPLACE was an interactive “artificial reality” environment created by Myron Krueger beginning in the mid-1970s. Users in separate rooms stood before large projection screens and video cameras; their live silhouettes were digitized, colored, and placed into a shared virtual space where they could interact with computer graphics and with each other — all without headsets, gloves, or other worn equipment.

### Deep dive
* **Origins.** Krueger established the Videoplace laboratory in the mid-1970s, first at the University of Wisconsin and later at the University of Connecticut. It grew out of earlier installations: GLOWFLOW (1969), METAPLAY (1975), and PSYCHIC SPACE [1][2].
* **No-wearable philosophy.** Krueger deliberately avoided goggles and gloves. His goal was an artificial reality that surrounded users and responded to their natural body movements [1].
* **Technology.** The first 1975 environment used no computer; by 1984 Krueger had built a custom real-time system that performed image recognition, image analysis, and graphical response fast enough for live interaction. Projectors, cameras, special-purpose hardware, and software produced colored user silhouettes and 25 different interaction programs [2].
* **Notable experiments/demos.** Users could push, pull, or play with virtual creatures and objects. Because they saw their silhouettes on screen, they experienced social presence: people instinctively pulled away when their silhouettes intersected with another person’s [1].
* **Legacy.** The work formed the basis of Krueger’s influential 1983 book *Artificial Reality*. VIDEOPLACE is now on permanent display at the State Museum of Natural History at the University of Connecticut [1].
* **Weird/fun facts.** Krueger’s team admitted they never achieved their ultimate goal of a program that could learn independently. The project is usually styled VIDEOPLACE in all caps.
* **Impact.** VIDEOPLACE pioneered camera-based full-body interaction, shared virtual spaces, and unencumbered embodied interfaces. It is a direct ancestor of modern depth-camera installations, motion-controlled games, and social VR.

### Media
* `assets/wiki/videoplace-mediaartnet.jpg` — Myron Krueger, *Videoplace*, 1974 video still (Media Art Net). [2]
* `assets/wiki/videoplace-video.jpg` — YouTube thumbnail from “Myron Kreuger – Video Place – 1989.” [3]

### Sources
1. Wikipedia, “Videoplace” — https://en.wikipedia.org/wiki/Videoplace
2. Media Art Net, “Krueger, Myron: Videoplace” — http://www.medienkunstnetz.de/works/videoplace/
3. YouTube: “Myron Kreuger – Video Place – 1989” — https://www.youtube.com/watch?v=dqZyZrN3Pl0
4. YouTube: “Video Place Examples – Myron Kreuger (c.1989)” — https://www.youtube.com/watch?v=XrQaXKKoTjY
5. Ars Electronica Archive entry on Videoplace — http://archive.aec.at/#23842
6. HandWiki, “Artificial Reality” — https://handwiki.org/wiki/Artificial_Reality
