# FreeCodeCamp Frontend Certification Projects
## Project: Build a Simon Game
### Overview

The Simon Game project was built on the same design as the Tic Tac Toe game. The design is based on clear, bright colors and handwriting-like font.

The game present's a classic four-color wheel, with game state and options available in the center of the wheel.

The live demo can be accessed here: [Simon Game](http://jvdsande.github.io/fcc-projects/fcc/simon)

### User Stories
##### I am presented with a random series of button presses.
As soon as the user presses "play", a first random button is added to the series.

##### Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
The game always presents two steps: one where the series is shown, the other where the user has to input the series. At the end of the second phase, if the series was correctly input, a new random button is added to the series, and phase one starts again.

##### I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
I used the default sounds provided by FreeCodeCamp here. As soon as a button is lit, be it by the program or by the user, the sound plays.

##### If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
When a wrong button is pressed, the background color changes to a bright red, and the game goes back to phase one.

##### I can see how many steps are in the current series of button presses.
The panel in the middle of the wheel shows the current number of steps above the configuration buttons.

##### If I want to restart, I can hit a button to do so, and the game will return to a single step.
The middle panel presents a reset button allowing to restart the series to a new single-step series.

##### I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
The middle panel also presents a switch for playing in "Easy" or "Strict" mode. In "Easy" mode a wrong button will just change the background color temporarily, then replay the current series. In "Strict" mode, a wrong button will also reset the series to a brand new single-step one.

##### I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.
When pressing all 20 steps correctly, the user is presented with a "win" animation. The number of steps in the middle is replaced by a win message, and the button lit one after the other is a victory series.
