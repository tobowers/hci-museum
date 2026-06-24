export type Exhibit = {
  id: string;
  slug: string;
  wikiTitle: string;
  year: string;
  sortYear: number;
  title: string;
  subtitle: string;
  blurb: string;
  tags: string[];
  image: string;
  feature?: boolean;
  span?: 2;
};

const img = (file: string) => `assets/wiki/${file}`;

export const exhibits: Exhibit[] = [
  {
    id: "hubot",
    slug: "hubot",
    wikiTitle: "Hubot",
    year: "c.1983",
    sortYear: 1983,
    title: "Hubot",
    subtitle: "The butler robot with an Atari inside",
    blurb:
      "A 50kg wheeled companion with a CP/M computer, a voice synthesizer, an Atari 2600, and a Polaroid sonar head. Priced at $3,495, it scanned rooms, spoke 1,200 words, and played Defender.",
    tags: ["Robot", "Voice", "Home Computer"],
    image: img("hubot-hardware.webp"),
    feature: true,
  },
  {
    id: "power-glove",
    slug: "nintendo-power-glove",
    wikiTitle: "Nintendo Power Glove",
    year: "1989",
    sortYear: 1989,
    title: "Power Glove",
    subtitle: "A $10,000 NASA glove, shrunk to $90",
    blurb:
      "Mattel had nine months to turn VPL's research-grade DataGlove into a toy. It sold 1.3 million units. \"I love the Power Glove. It's so bad.\"",
    tags: ["Gesture", "Gaming", "Wearable"],
    image: img("power-glove-1.jpg"),
    span: 2,
  },
  {
    id: "atari-mindlink",
    slug: "atari-mindlink",
    wikiTitle: "Atari Mindlink",
    year: "1984",
    sortYear: 1984,
    title: "Atari Mindlink",
    subtitle: "Mind control (actually eyebrow control)",
    blurb:
      "A headband that read forehead muscle tension and called it telepathy. Demoed at CES, then canceled. Testers got headaches from wiggling their brows.",
    tags: ["BCI", "Biofeedback", "Vaporware"],
    image: img("atari-mindlink-2.jpg"),
  },
  {
    id: "videoplace",
    slug: "videoplace",
    wikiTitle: "VIDEOPLACE / Artificial Reality",
    year: "1970s–80s",
    sortYear: 1978,
    title: "VIDEOPLACE",
    subtitle: "Artificial reality without goggles",
    blurb:
      "Myron Krueger put people in shared silhouette worlds using only cameras and projectors. No headsets, no gloves — just your body, glowing on screen.",
    tags: ["Gesture", "Computer Vision", "Art"],
    image: img("videoplace-mediaartnet.jpg"),
  },
  {
    id: "p300-speller",
    slug: "p300-speller",
    wikiTitle: "The P300 Speller",
    year: "1988",
    sortYear: 1988,
    title: "P300 Speller",
    subtitle: "Talking off the top of your head",
    blurb:
      "The first BCI that let you type with brainwaves alone. Focus on a letter in a 6×6 grid; the system reads the P300 spike when your target flashes. 95% accuracy at 12 bits/min.",
    tags: ["Brain Control", "BCI", "EEG"],
    image: img("p300-rowcolumn.webp"),
  },
  {
    id: "vpl",
    slug: "vpl-research",
    wikiTitle: "VPL Research EyePhone & DataGlove",
    year: "1980s",
    sortYear: 1985,
    title: "VPL EyePhone & DataGlove",
    subtitle: "The birth of commercial VR",
    blurb:
      "Jaron Lanier's fiber-optic glove and Fresnel-lens headset defined the visual language of virtual reality. A full system cost $250,000 and ran at 5 fps.",
    tags: ["VR", "Gesture", "Wearables"],
    image: img("vpl-eyephone-demo.jpg"),
    span: 2,
  },
  {
    id: "virtuality",
    slug: "virtuality",
    wikiTitle: "Virtuality Arcade VR System",
    year: "1990",
    sortYear: 1990,
    title: "Virtuality",
    subtitle: "Networked VR in an arcade pod",
    blurb:
      "Amiga 3000s, camcorder LCDs, and magnetic tracking. Dactyl Nightmare let four players fight in cyberspace years before Doom.",
    tags: ["VR", "Arcade", "Multiplayer"],
    image: img("virtuality-1000cs-1.jpg"),
  },
  {
    id: "eyetap",
    slug: "eyetap",
    wikiTitle: "Steve Mann’s EyeTap / Wearable Computing",
    year: "1980s",
    sortYear: 1985,
    title: "EyeTap",
    subtitle: "Wearable computing before it had a name",
    blurb:
      "Steve Mann built camera-display eyeglasses in high school. The computer mediates reality itself — not a HUD, but a reversible eye.",
    tags: ["Wearable", "AR", "Sousveillance"],
    image: img("eyetap-mann-glass-2.jpg"),
  },
  {
    id: "digital-desk",
    slug: "digital-desk",
    wikiTitle: "The Digital Desk",
    year: "1991",
    sortYear: 1991,
    title: "The Digital Desk",
    subtitle: "Paper meets projector",
    blurb:
      "Pierre Wellner pointed a camera and projector at an ordinary desk. Point at printed numbers; the desk calculates and projects the answer onto the paper.",
    tags: ["Tangible", "AR", "Projection"],
    image: img("digital-desk-2.jpg"),
  },
  {
    id: "mandala",
    slug: "mandala",
    wikiTitle: "Mandala / The Vivid Group Gesture VR System",
    year: "1986",
    sortYear: 1986,
    title: "Mandala",
    subtitle: "Full-body VR on an Amiga",
    blurb:
      "The Vivid Group put your live video silhouette inside a virtual world. Punch objects, play drums, dance — 30fps, no controller, on an Amiga 1000.",
    tags: ["Gesture", "VR", "Computer Vision"],
    image: img("mandala-siggraph-1.jpg"),
  },
  {
    id: "put-that-there",
    slug: "put-that-there",
    wikiTitle: "Put-That-There",
    year: "1980",
    sortYear: 1980,
    title: "Put-That-There",
    subtitle: "Voice + gesture at the graphics interface",
    blurb:
      "MIT's Architecture Machine Group let you move shapes by speaking and pointing. It asked clarifying questions when it couldn't understand you.",
    tags: ["Voice", "Gesture", "Multimodal"],
    image: img("put-that-there-video.jpg"),
  },
  {
    id: "speak-spell",
    slug: "speak-spell",
    wikiTitle: "Texas Instruments Speak & Spell",
    year: "1978",
    sortYear: 1978,
    title: "Speak & Spell",
    subtitle: "The first talking chip",
    blurb:
      "Texas Instruments put a 10th-order LPC vocal tract model on a single chip. It taught kids to spell, became an IEEE Milestone, and soundtracked Kraftwerk.",
    tags: ["Voice", "Speech Synthesis", "Toy"],
    image: img("speak-spell-1.jpg"),
  },
  {
    id: "kurzweil",
    slug: "kurzweil-reading-machine",
    wikiTitle: "Kurzweil Reading Machine",
    year: "1976",
    sortYear: 1976,
    title: "Kurzweil Reading Machine",
    subtitle: "Print made audible for the blind",
    blurb:
      "The first omni-font OCR plus a CCD scanner plus a speech synthesizer. Walter Cronkite read his sign-off with it. Stevie Wonder took the first unit home.",
    tags: ["Accessibility", "OCR", "Text-to-Speech"],
    image: img("kurzweil-reading-machine-1.jpg"),
  },
  {
    id: "active-badge",
    slug: "active-badge",
    wikiTitle: "Olivetti Active Badge",
    year: "1992",
    sortYear: 1992,
    title: "Active Badge",
    subtitle: "Your location, broadcast every 10 seconds",
    blurb:
      "Olivetti Research made an IR badge that told the building where you were. Phones followed you. Desktops moved with you. Privacy was born as a question.",
    tags: ["Wearable", "Location-Aware", "Ubicomp"],
    image: img("active-badge-1.gif"),
  },
  {
    id: "twiddler",
    slug: "twiddler",
    wikiTitle: "Handykey Twiddler Chord Keyboard",
    year: "1992",
    sortYear: 1992,
    title: "Twiddler",
    subtitle: "A keyboard in one hand",
    blurb:
      "A chording keypad you hold like a grenade. MIT wearable researchers typed 60 wpm while walking. Still in production 33 years later.",
    tags: ["Input", "Chorded", "One-Handed"],
    image: img("twiddler-original-1.png"),
  },
];

export const featured = exhibits.find((e) => e.feature) ?? exhibits[0]!;
