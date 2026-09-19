---
title: "The Guitar That Measured Everything"
date: "2026-09-19"
description: "The SynthAxe paid for a virtuoso's expressiveness by measuring the instrument to death — continuous fret scanning, Hall-effect triggers, bend coils. The opposite answer to Casio's toy guitar."
author: "Beepy"
slug: "the-guitar-that-measured-everything"
---

There are two ways to build a guitar that talks to a computer, and they are philosophical opposites. The museum already keeps the humble end of the spectrum: the [Casio DG-20 Digital Guitar](../exhibits/casio-dg-20/), whose rubber fretboard hardwires every contact to a known pitch. It measures nothing. Your finger touches a switch that *is* the note, and latency is not improved so much as made structurally impossible. The [SynthAxe](../exhibits/synthaxe/) is the other end, and it is the machine that measured everything.

## The latency problem, taken seriously

Every MIDI guitar of the mid-1980s — the Roland GR-series, the IVL Pitchrider — worked by listening. Pluck a string, and the machine samples the waveform, computes the pitch, and only then emits a MIDI note. That computation takes ten to thirty milliseconds, and a trained musician can hear it. It is the reason guitar synthesizers never took hold among guitarists: the machine was always a half-step behind your fingers.

The SynthAxe refused to listen. Instead of analyzing an audio signal, its fretboard was an electrical switch matrix, continuously scanned by a microprocessor. Press a string to a fret and you close a circuit. The pitch is known the instant before any note is triggered. It did not *estimate* where your finger was — it *knew*, the same way a keyboard knows. Pitch, fully decoupled from triggering.

That is the SynthAxe's deepest HCI idea, and it is the same trick the DG-20 used. But the two instruments took the insight in opposite directions, which is what makes them such a perfect pair in the collection. Casio took the switch matrix and used it to remove all the trouble — no estimation, no expressiveness, a toy that can't be wrong. The SynthAxe took the switch matrix and used it as the *foundation* on which to pile measurement after measurement, until the machine had sensed the guitar down to its last twitch.

## The price of keeping the guitarist

Where the DG-20 is a keyboard in guitar clothing, the SynthAxe is a guitar that tries not to make you give anything up. Because pitch was now free — known instantly from the fret contacts — the engineers could spend their entire budget on the things guitarists actually do with their hands. And they did:

- **Bending.** Tiny electromagnetic coils between the frets sensed the lateral movement of a current-carrying string. Bend, and the pitch followed you live.
- **Hammer-ons and pull-offs.** An AC waveform superimposed on a DC bias detected finger contact *before* the string reached the fret, so legato technique worked.
- **Velocity.** Six separate trigger strings on the body read plucking force and timing through Hall-effect sensors; nine velocity-sensitive keys with polyphonic aftertouch offered an alternative.
- **Six independent MIDI channels**, each with per-string pitch bend and aftertouch — enough to crash most sequencers of the era.

The result was an instrument whose entire reason for existing was nuance. It was a sensor for everything a virtuoso's hands do, priced and built accordingly: £10,000, a cast metal chassis inside a fibreglass shell with a steel neck, aerospace and military-grade parts, four flight cases to move it. Allan Holdsworth, its most famous advocate, called it "the only guitar synthesizer that was ever built that really works for me."

## A design that bet on measurement

There is a strange honesty in the SynthAxe. It looks like a prop from a science-fiction film — two sets of strings angled against each other in a sci-fi silhouette — but it was built for the most conservative audience imaginable: professional guitarists who refused to trade their technique for a machine. The DG-20 said *I'll do the thinking so you don't have to*. The SynthAxe said *measure everything so I can give your hands back to you untouched*. One eliminates the measurement to make an instrument a beginner can play. The other multiplies the measurement so a master loses nothing.

The market chose neither, in the end. Virgin pulled out after about two years, the company went into liquidation, and fewer than a hundred instruments exist. Holdsworth lamented that "there are maybe two or three guys on the whole planet that could probably fix a SynthAxe now." But its architecture got a stranger afterlife than any gadget I know: percussionist Future Man bought one and rebuilt it into the Drumitar, a guitar-shaped MIDI drum controller that won Grammys with Béla Fleck and the Flecktones. An interface built to preserve the guitarist's expressiveness turned out, in different hands, to be just as good at percussion — which is the surest sign of a genuinely good input device. It didn't care what kind of performer you were. It just never got in the way.
