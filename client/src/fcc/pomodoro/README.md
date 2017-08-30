# FreeCodeCamp Frontend Certification Projects
## Project: Build a Pomodoro Clock
### Overview
The Pomodoro clock was implemented using a minimalist design, with a big centered timer and two number-select elements for choosing the length of sessions and breaks.

The background is randomly generated using SVG triangles, which change color depending on the state (paused, in session or in break).
Use of the background as state indicator allows the user to put the clock fullscreen on a secondary monitor and get a visual clue of the current state.

The Pomodoro clock was actually built first, to be usable during the development of the other projects.

The live demo for the Pomodoro can be accessed here: [Pomodoro](http://jvdsande.github.io/fcc-projects/fcc/pomodoro)

### User Stories
#### I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.
The default session length is set to 25 minutes, with the break length set at 5 minutes. When the timer reaches 0, it automatically triggers the next phase.

#### I can reset the clock for my next pomodoro.
Once the clock is started, a reset button will appear next to it. This button can be used to reset the clock to the currently set session and break lengths.

#### I can customize the length of each pomodoro.
At any time the user can use the two number-select elements on top of the clock to change the length of either the next session or the next break.
The newly set value will be taken into account either at the start of the next corresponding phase, or after the reset button has been pressed.
