# FreeCodeCamp Frontend Certification Projects
## Project: Build a Tic Tac Toe Game
### Overview

For the Tic Tac Toe game project, I created a minimalist flat game board design. I later reused the same design for the Simon Game project to add consistency. I also plan on making other small games based on this design (Connect Four, Minesweeper...) to further complete my portfolio.

The design is based on clear, bright colors and handwriting-like font. The game base design is somewhat abstracted, as we are not presented with a classic line-based grid and X and O player, but rather with a dotted grid, with each player playing a different color.

The live demo can be accessed here: [Tic Tac Toe](http://jvdsande.github.io/fcc-projects/fcc/tictactoe)

### User Stories
#### I can play a game of Tic Tac Toe with the computer.
Before starting the game (or at any point using the Options panel), the user has to choose whether its opponent will be another human, or the computer.
The computer's AI is based on a simple 'can win'-'can block'-'vote' strategy. It is not unbeatable, but will play more or less naturally.

#### My game will reset as soon as it's over so I can play again.
Whenever a game ends, be it by a win or a draw, a short animation gives the outcome of the game by changing the background color, then the board is reset and a new game starts.

#### I can choose whether I want to play as X or O.
Before starting the game (or at any point using the Options panel), the user can choose their team's color. Here Orange stands for X, and Violet for O.
