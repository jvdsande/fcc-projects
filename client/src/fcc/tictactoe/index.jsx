/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point and main component for the Tic Tac Toe project                 */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {
  BoardBackground, BoardBody, Cell,
  Title, TitleTic, TitleToe,
  Score, Wins,
  OptionsToggle, OptionsBody, OptionList,
  OptionPlayer, OptionOpponent, OptionTitle,
} from './styles'


/* Keep an array of winning combinations                                      */
const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]


/* Create a class to handle the game board state                              */
class Board {
  cells = []

  /* Reset the board when it gets created                                     */
  constructor() {
    this.reset()
  }

  /* Empty all cells of the board                                             */
  reset() {
    this.cells = [
      '', '', '',
      '', '', '',
      '', '', ''
    ]
  }

  /* Helper to copy the current state of a board in a new board               */
  copy() {
    let copy = new Board()
    this.cells.map((c, i) => copy.cells[i] = c)

    return copy
  }

  /* Play a cell if possible. Returns true if it was possible, false if not   */
  play(cell, player) {
    if(this.cells[cell] === '') {
      this.cells[cell] = player
      return true
    }

    return false
  }

  /* Get an array of all empty cells in the board                             */
  emptyCells() {
    let empties = []
    this.cells.map((c,i) => {
      if(c == '')
        empties.push(i)
    })

    return empties
  }

  /* Check the board for a valid winning line                                 */
  winner() {
    let winner = null

    /* Search each winning line. If one is correct, then there is a winner    */
    winningLines.map(l => {
      if( this.cells[l[0]] != '' &&
          this.cells[l[0]] == this.cells[l[1]] &&
          this.cells[l[0]] == this.cells[l[2]]
        ) {
          winner = this.cells[l[0]]
        }
    })

    /* If there wasn't a winner, then check if the board is full. If it is, it's
     * a draw. If not, then the game continues                                */
    if(winner === null) {
      if(this.emptyCells().length == 0)
        return 'draw'
      return ''
    }

    /* Return the winner                                                      */
    return winner
  }
}


/* Function to decide the next move from the computer                         */
function computerNextPlay(board, computer)
{
  /* Variable to hold the best next move                                      */
  let play = -1

  /* Guess the user based on the computer                                     */
  let user = computer == 'x' ? 'o' : 'x'

  /* Find all empty cells in the current board                                */
  let empties = board.emptyCells()


  /* Check if the computer can win                                            */
  empties.map(c => {
    /* Make a copy of the board to be able to dummy play                      */
    let copy = board.copy()

    /* Dummy play on the cell                                                 */
    copy.play(c, computer)

    /* If that made us win, then play here                                    */
    if(copy.winner() == computer && play == -1)
      play = c
  })

  /* If we can win, play here                                                 */
  if(play > -1)
    return play



  /* Check if the user needs to be blocked                                    */
  empties.map(c => {
    /* Make a copy of the board to be able to dummy play                      */
    let copy = board.copy()

    /* Make the user dummy play on the cell                                   */
    copy.play(c, user)

    /* If that made them win, play here before they can                       */
    if(copy.winner() == user && play == -1)
      play = c
  })

  /* If we can block, play here                                               */
  if(play > -1)
    return play



  /* If we can't win, nor block the user, then we need to decide where is the
   * next best play                                                           */

  /* Give a ranking to each empty cell
   * Rank = (3 - number of play to win) * number of winning lines             */
  empties = empties.map(cell => {
    /* Prepare the vote for the cell                                          */
    let vote = 0

    /* Make a copy of the board so we can dummy play                          */
    let copy = board.copy()

    /* Dummy play on the cell                                                 */
    copy.play(cell, computer)

    /* Check every winning combination to see how far off we are              */
    winningLines.map(l => {
      l = l.map(cell => copy.cells[cell])
      /* Check all lines where two are computer and one is empty, update the
       * vote by 2                                                            */
      if(
        (l[0] == computer && l[1] == computer && l[2] == '')        ||
        (l[0] == computer && l[1] == ''       && l[2] == computer)  ||
        (l[0] == ''       && l[1] == computer && l[2] == computer)
      ) {
        vote += 2
      }

      /* Check all lines where two are empty and one is computer, update the
       * vote by 1                                                            */
      if(
        (l[0] == computer && l[1] == ''       && l[2] == '')        ||
        (l[0] == ''       && l[1] == ''       && l[2] == computer)  ||
        (l[0] == ''       && l[1] == computer && l[2] == '')
      ) {
        vote += 1
      }
    })

    return {cell, vote}
  })

  /* Find the max vote value                                                  */
  let max = 0
  empties.map(e => e.vote > max ? (max = e.vote) : (max))

  /* Keep only the cells with the max vote value                              */
  empties = empties.filter(e => e.vote == max)

  /* Sort the cells in order to prioritize side and low-prioritize edges      */
  empties = empties.sort((a, b) => (a.cell % 2) ? -1 : 1)

  /* Return the first cell of the sorted array                                */
  return empties[0].cell
}



/* The TicTacToe Component is the main component of the app. It creates the
 * complete page and handles the game logic                                   */
class TicTacToe extends Component {
  board = new Board()

  constructor() {
    super()

    /* Prepare our React state                                                */
    this.state = {
      /* Keep track of which player should play next                          */
      turn: 'x',

      /* Keep track of scores                                                 */
      wins: {x: 0, o: 0},

      /* Prevent the user from playing while it's the computer turn           */
      freeze: false,

      /* Keep a list of options                                               */
      options: {
        collapsed: false,
        player: '',
        mode: '',
      },
    }
  }

  /* Reset the board and the game's logic                                     */
  reset = () => {
    /* Reset the board                                                        */
    this.board.reset()

    /* Pick a random player to start                                          */
    let rand = Math.floor(Math.random()*2)
    let turn = (rand%2)?'x':'o'
    let next = (rand%2)?'o':'x'

    /* If the mode is Player versus Computer, and it's the Computer turn, make
     * the computer play                                                      */
    if(this.state.options.mode == 'pvc' && this.state.options.player == next) {
      this.computerPlay()

      /* Once the Compute has played, it's the Player's turn                  */
      turn = next
    }

    /* Unfreeze the game if it was frozen                                     */
    let freeze = false

    /* Update the state with the current turn                                 */
    this.setState({turn, freeze})
  }

  /* Called when the game is finished, either with a win or a draw            */
  end() {
    /* Prepare to reset the game in two seconds                               */
    setTimeout(this.reset, 2000)

    /* Get the winner if any                                                  */
    let winner = this.board.winner()
    let wins = this.state.wins

    /* If there is a winner, update its points                                */
    if(undefined !== wins[winner])
      wins[winner]++

    /* Freeze the game until reset                                            */
    let freeze = true

    /* Update the state with the new point count                              */
    this.setState({wins, freeze})
  }

  /* Function to let the Computer play                                        */
  computerPlay = () => {
    /* Find the Computer's team based on the Player's team                    */
    let computer = this.state.options.player == 'x' ? 'o' : 'x'

    /* Get the cell on which the AI would play                                */
    let computerPlay = computerNextPlay(this.board, computer)

    /* Play the cell                                                          */
    this.board.play(computerPlay, computer)

    /* Check if there is a winner                                             */
    let winner = this.board.winner()

    /* Stop freezing the Player's actions                                     */
    let freeze = false

    this.setState({freeze})

    /* If there is a winner, trigger the end function                         */
    if(winner != '')
      this.end()
  }

  /* Function to let the Player play when clicking on a cell                  */
  play = (cell) => {
    /* Stop the function if the game is currently frozen                      */
    if(this.state.freeze)
      return

    /* Get the current turn                                                   */
    let turn = this.state.turn

    /* Play the cell for the correct team                                     */
    let correctPlay = this.board.play(cell, turn)

    /* If the play was possible (e.g. empty cell), update the state           */
    if(correctPlay) {
      /* Check if there is a new winner                                       */
      let winner = this.board.winner()
      let finished = winner != ''

      /* If the mode is Player versus Computer, freeze the board to avoid Player
       * interaction                                                          */
      let freeze = (this.state.options.mode == 'pvc')

      /* If the mode is Player versus Player, go on to the next turn          */
      if(this.state.options.mode == 'pvp') {
        turn = turn == 'x' ? 'o' : 'x'
      }
      /* If not, and there is no winner, make the Computer play with a slight
       * delay to make it feel more natural                                   */
      else if(!finished) {
        setTimeout(this.computerPlay, 700)
      }

      /* Update the state of the app                                          */
      this.setState({turn, freeze})

      /* If there was a winner, trigger the end function                      */
      if(finished) {
        this.end()
      }
    }
  }

  /* Open or close the options panel                                          */
  toggleOptions = (e) => {
    /* Prevent the click event to be propagated                               */
    e.preventDefault()
    e.stopPropagation()

    let options = this.state.options

    /* Update the state of the panel. Only close the panel if all options are
     * set                                                                    */
    options.collapsed = !options.collapsed && (options.mode != '' && options.player != '')
    this.setState({options})
  }

  /* Just like the toggleOptions, but always close the options panel          */
  closeOptions = () => {
    let options = this.state.options
    options.collapsed = (options.mode != '' && options.player != '')
    this.setState({options})
  }

  /* Update the player's team option                                          */
  selectPlayer = (e, player) => {
    /* Prevent click event propagation                                        */
    e.preventDefault()
    e.stopPropagation()

    let options = this.state.options

    /* Set the player's new team                                              */
    options.player = player

    /* Update the state with the new options                                  */
    this.setState({options})

    /* Reset the game                                                         */
    this.reset()
  }

  /* Update the game mode (versus Player or versus Computer)                  */
  selectMode = (e, mode) => {
    /* Prevent click event propagation                                        */
    e.preventDefault()
    e.stopPropagation()

    let options = this.state.options

    /* Select the new mode                                                    */
    options.mode = mode

    /* Update the state with the new options                                  */
    this.setState({options})

    /* Reset the game                                                         */
    this.reset()
  }

  /* Render the app                                                           */
  render() {
    return (
      <BoardBackground winner = {this.board.winner()} onClick={this.closeOptions}>
        {/* The background reflects the winner's color when there is one. It is
          * also the root of our application                                  */}

        {/* Add the game's title                                              */}
        <Title>
          <TitleTic>Tic</TitleTic> Tac <TitleToe>Toe</TitleToe>
        </Title>

        {/* Display the current score                                         */}
        <Score>
          <Wins player='x'>{this.state.wins.x}</Wins> - <Wins player='o'>{this.state.wins.o}</Wins>
        </Score>

        {/* Display the game's board                                          */}
        <BoardBody>
          {this.board.cells.map((c, i) => {
            return <Cell
              frozen={this.state.freeze} key={i}
              onClick={() => this.play(i)}
              player = {c}
              turn = {this.state.turn}
              winner = {this.board.winner()}/>
          })}
        </BoardBody>

        {/* Display the game's options                                        */}
        <OptionsBody collapsed={this.state.options.collapsed}>

          {/* The first option is Player 1's team                             */}
          <OptionTitle>Choose your team</OptionTitle>
          <OptionList>
            <OptionPlayer value={'x'} player={this.state.options.player} onClick={(e) => this.selectPlayer(e, 'x')} />
            <OptionPlayer value={'o'} player={this.state.options.player} onClick={(e) => this.selectPlayer(e, 'o')} />
          </OptionList>

          {/* The second option is the mode: versus Player or versus Computer */}
          <OptionTitle>Choose your opponent</OptionTitle>
          <OptionList>
            <OptionOpponent value={'pvp'} mode={this.state.options.mode} onClick={(e) => this.selectMode(e, 'pvp')} />
            <OptionOpponent value={'pvc'} mode={this.state.options.mode} onClick={(e) => this.selectMode(e, 'pvc')} />
          </OptionList>
        </OptionsBody>

        {/* Display a button for toggling the options panel                   */}
        <OptionsToggle onClick={this.toggleOptions}>{this.state.options.collapsed ? 'Options' : 'Play'}</OptionsToggle>
      </BoardBackground>
    )
  }
}


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the TicTacToe project                                               */
ReactDOM.render(<TicTacToe />, target)
