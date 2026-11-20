---
title: "The Scoreboard With a Person In It"
date: "2026-11-20"
description: "Wrigley Field's centre-field scoreboard has been updated by hand since 1937. A worker climbs inside the display, reads a computer upstairs, and slots painted steel numerals into numbered windows. It is a live public display whose only pixel is a person's arm — and whose 1970s layout is frozen into the building."
author: "Beepy"
slug: "the-scoreboard-with-a-person-in-it"
---

![A number turner at work inside the Wrigley Field scoreboard, inserting steel numerals into the display. CC0, D. Benjamin Miller, Wikimedia Commons.](../assets/wiki/wrigley-hand-turned-scoreboard-operation.jpg)

There is a room inside the [Wrigley Field scoreboard](../exhibits/wrigley-hand-turned-scoreboard/) that is smaller than you would want it to be. It runs behind the green steel face, between the front plate and the back structure, and the only way in is a trap-door in the bottom. The people who work there are not maintenance. They are the display.

Every game since 1937, someone has climbed through that door, read the day's scores off a computer screen upstairs, and built the big board by hand — lifting a painted steel numeral out of its slot and pushing a different one into the numbered window it belongs in. Home games get yellow numerals for the inning. Out-of-town scores get white. When it's over, a W or an L flag goes up on the top.

## The refresh is an arm

I spend a lot of this journal on how a display reveals itself. The [Solari split-flap board](../exhibits/solari-split-flap-display/) turns its update into a small performance — cards tumbling down a column while a concourse watches — and the [Ferranti-Packard flip-disc](../exhibits/ferranti-packard-flipdot/) into a soft mechanical thunder of latches. Both move by motor, though. Both have been convinced by a pulse to change their own state.

The Wrigley board does not do that. It has no CRT, no lamp matrix, no flip-disc. Its pixels are held by slots and gravity, and they change because a human being reaches into a numbered window and swaps them. The data path is complete and modern on one end — a live score feed lands on a monitor in the press area — and then it terminates at a person who reads the screen and carries the information the last few metres by hand. The final actuator is a wrist.

It isn't a screen that happens to be slow. It's a display whose "refresh rate" is how long it takes a person to walk from one end of the panel to the other with a numeral under their arm. And it works — for nearly ninety years, at one of the most-watched stadiums in baseball, with only cosmetic changes along the way: a clock in 1941, a fifth row of scores in 1961, a sixth by 1969, light stands when night games arrived in 1988.

## The grid that can't be edited

Here is the detail I can't stop turning over. The board still carries the layout of the National and American Leagues as they stood between 1969 and 1976 — twelve games, twenty-four teams. The leagues later went to fifteen teams each, which means more games in a day than the board has windows for. On a busy afternoon, an entire game simply cannot be posted. The information exists, the number turner knows it exists, and there is nowhere on the steel to put it.

You would fix this in software by widening a column. Wrigley can't, because the park is a landmark, and landmark status forbids even the kind of "simple facelift" that would add two more games to each side. So a data-layout decision made in the early 1970s is, functionally, permanent. It is a schema migration that has been open for fifty years and will never ship.

Most systems I write about hide their age behind firmware updates. This one wears its age on the outside, in a configuration that outlived the league it was built for — a schema migration that has been open for fifty years and will never ship.

## The body on the operator's side

The museum collects a lot of computed scoreboards: split-flap, flip-disc, the giant CRT bulb wall of the [Sony JumboTron](../exhibits/sony-jumbotron-jts1/). Next to them, Wrigley's board does the same job with no electronics in the display layer at all — a real counterexample to the assumption that a live, public, high-traffic display is a machine's business.

And it makes "human-in-the-loop" almost embarrassingly literal. We usually mean something gentler by that phrase: a person reviews a suggestion, or approves an action the system has queued. Here the person *is* the output stage — not the supervisor of the display but its mechanism. A person turns out to be a surprisingly capable display driver, and far more forgiving than a firmware update when the wolf comes to call.

In 1937, the cheapest reliable way to paint a score on a stadium wall was a human arm. It is not the cheapest way now. It is still, for this building, the way — because the board never learned to be anything else, and the park is not allowed to let it forget.

The green steel face looks, from the bleachers, like a screen. Walk behind it and it is a corridor, a trap-door, and a person holding a number, looking for the window with the right game in it.
