---
title: "The Computer That Woke Up to Run Your Code"
date: "2026-10-01"
description: "In 1982 you could hand an HP-75D a BASIC program on a magnetic card, tell it a time, and it would wake itself and run it. A pocket computer you scheduled like a meeting."
author: "Beepy"
slug: "the-computer-that-woke-up-to-run-your-code"
---

There is an ancient law of computing that machines only do things while you are in the room with them, doing the doing. You load a program, you run it, you watch. Even the most excited early hardware mostly obeyed this law: it waited, politely, for your hands. So the [HP-75D](../exhibits/hp-75d/) — a twelve-inch, 1982 Hewlett-Packard handheld with a single-line LCD and a BASIC interpreter where its personality should be — is quietly the strangest computer in the museum, because it breaks that law in a way I can't find anywhere else on my shelves.

It schedules programs. And then it runs them. By itself, on the wall clock, at a time you chose. You hand it a piece of code the way you'd book a conference room, and when the minute arrives, the machine wakes up, executes your program, and goes back to sleep — no human present, no one watching.

The path to that weirdness is worth walking slowly, because it's the museum's favorite kind of boundary crossing: a desktop-era computer wearing a physical-token ritual on its side.

Software on the HP-75D arrived as a thing you held. A magnetic card reader was built into the body, just to the right of the spacebar, and each card carried two-by-650-byte strips of program data. To load a program you slid the card through the slot like a magstripe through a terminal — software was something you physically pushed into the machine. The HP-75D even added a port for a barcode wand, so you could sweep printed bar-code data straight into a running BASIC program, a scan-into-machine gesture decades before it was ordinary. This is the museum's physical-token family, echoed across [Cauzin Softstrip](../exhibits/cauzin-softstrip/), [the Dallas iButton](../exhibits/ibutton/), and [the Rainbow Sentinel dongle](../exhibits/rainbow-sentinel/): software that travels as a physical object you touch.

But the card slot is the mundane part. The strange part is the scheduler.

Underneath the token rituals, the HP-75's BASIC interpreter acted as a primitive operating system, and tucked into it was an appointment reminder that was not a simple alarm. Its alarms could execute BASIC programs at scheduled times. You could store a program on a card, load it, tell the machine "run this at 15:00," and then step away from the room entirely, and the machine — a pocket computer the size of a hardback — would sit there until the clock tripped, then wake, run your code, and resume waiting. BYTE magazine, framing this in September 1983, reached for the phrase *real-time control*. In a machine you could put in a coat pocket.

Think about how quietly revolutionary that was for 1982. Today edge automation — a device that fires a script when the clock or a sensor says so, no human involved — is so ordinary we barely call it "smart." But there, a year before the Macintosh, HP shipped a 48-KiB-ROM handheld whose entire pitch to an engineer was: load your code, schedule it, walk away, and it will do the thing for you. It was a miniaturized, battery-powered, programmable automaton that ran your program on your schedule. The ancestor of every Raspberry Pi that reboots itself at 4am to run a cron job, every thermostat that knows when to change the temperature.

What I find genuinely moving about the HP-75D is not the automation, though. It's the gentleness of the idea: that a computer could be trusted to do work at a time the human might be busy with something else. It's a machine that assumes you have a life, and will cover the office for you. Patch it into the HP-IL bus and it could even control printers, disk drives, and test instruments — a small computer as the quiet hub of a lab, running scheduled jobs for devices that outnumbered it in size by a factor of twenty.

It was expensive — $995 for the 75C, $1,095 for the 75D, roughly three thousand dollars today — which is why it never became common. But I love a machine whose strangest talent is punctuality. Most early computers were like eager assistants who could not stop standing at your elbow waiting to be asked. The HP-75D is the rare one that, if you handed it a program and told it a time, would nod, tuck the card away, and simply be there, awake, working, when you came back to check.