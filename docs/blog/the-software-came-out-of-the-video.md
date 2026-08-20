---
title: "The software came out of the video"
date: "2026-08-20"
description: "Sony's VIEW System solved a puzzle the Army had never asked before: what if the training disc carried both the movie and the code that played it, so the computer itself was just a laserdisc player with a keyboard?"
author: "Beepy"
slug: "the-software-came-out-of-the-video"
---

Here is a question that sounds fake but was genuinely asked, in earnest, in 1984, to Sony, Emerson, and Matrox by the United States Army:

What if the training disc carried *everything* — the video, the audio, and the software that ran the lesson — so the computer itself was just a laserdisc player with a keyboard?

The Army had a program called EIDS (Electronic Information Delivery System), and it wanted a simulator for equipment-operation training that could be shipped as a single pressed disc. You put the disc in, you turned it on, and the lesson played. No floppy drives to swap, no hard drives to configure, no software installation. The disc was the medium, the disc was the software, the disc was the movie. One object.

The problem was that in 1984, laserdiscs were analog. They carried video frames — 54,000 of them on a standard CAV disc — and two tracks of analog audio. They did not carry software. The LaserVision spec had no digital data mode, and adding one would have required a new standard, new players, new pressing plants, and a decade of industry negotiation the Army did not have.

Sony's answer was [the VIEW System](../exhibits/sony-view-system/), and it was beautiful in the way that only a problem solved through the wrong abstraction can be.

**Sony encoded the software as video.**

Every frame of a CAV laserdisc stores a single analog video picture — 525 lines of NTSC, scanned at 30 frames per second. Sony's engineers took the MS-DOS program files, the courseware, and the still-frame audio, and they rendered each 4KB block of data as a black-and-white pattern of cells inside a single video frame. A 4KB pattern. A video frame. The same disc pressing process that stamped *The Empire Strikes Back* onto the same format stamped executable code designed to be read by a machine, not watched by a human.

An expansion board inside the LDP-2000 laserdisc player knew how to find these frames, decode the checkerboard patterns back into bytes, and transfer them to the PC over IEEE-488. The EIDS configuration omitted the floppy drive entirely. The MS-DOS operating system booted from a built-in ROM disk — and then the training software loaded itself from the videodisc. The same pressed disc that held 30 minutes of analog motion video and 54,000 individually addressable still frames also held the executable that taught you how to repair a howitzer.

The master for an EIDS disc was a 1-inch videotape, cut at Sony's Hamamatsu videodisc plant, from which the stampers were made and the discs were pressed. The software was laid out as a sequence of video frames, frame by frame, on videotape, by a video editor. The computer engineer who wrote the code had to think like a video editor.

Sony did not win the EIDS contract. Matrox did, and neither system exactly flooded the market. The VIEW [sold into education and training](../exhibits/sony-view-system/) through the early 1990s, an evolutionary dead end that proved a strange and lovely principle: if you cannot add a digital channel, you can hide your data in the analog one, and the machine will never know the difference.

It is the exact opposite of the [BBC Domesday Project](../exhibits/bbc-domesday-project/), which stored digital data on a custom LV-ROM format alongside the video frames. Both systems were built around the same Philips VP415-derived laserdisc technology, but Domesday's LV-ROM was a genuine hybrid — digital and analog on the same disc, designed together. The VIEW did not have that luxury. It had to look like a normal laserdisc to the pressing plant, behave like a normal laserdisc to the player, and be a computer at the same time. So it hid the computer inside the picture.

The strangest consequence: the EIDS configuration had no floppy drive. You could not save anything. The disc was read-only, the software was read-only, the training was self-contained and self-consuming. It was a DVD before DVD existed — but DVD was a digital format, designed from the ground up to carry data and video together. The VIEW was a DVD-like fiction forced through analog video, years before the digital technology that would make the fiction real.

The collection's [Pioneer LaserBarcode](../exhibits/pioneer-laserbarcode/) system worked the same way from the other direction: it let a printed barcode strip cue a laserdisc to an exact frame, turning the paper manual into the interface and the expensive player into the actuator. The VIEW reversed the relationship. The disc was the actuator, the computer was the delivery mechanism, and the software lived inside the light of the video itself.

A VIEW station that boots today (and a few still do, in the hands of collectors) boots from a laserdisc. The software comes out of the video. The machine reads the picture, and the picture runs the machine.