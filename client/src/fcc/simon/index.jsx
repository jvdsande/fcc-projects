/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point and main component for the Simon Game project                  */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {
  BoardBackground, BoardBody, BoardMiddle, Cell,
  Title, TitleSimon, TitleGame,
  NumberOfSteps, OptionMode, Reset,
} from './styles'


/* Helper function to get a random number between 0 and 3                     */
function randomCell() {
  return Math.floor(Math.random() * 4)
}

/* Number of move to win. Set to 20 as per the user story                     */
const MOVE_TO_WIN = 20

/* Sound files for the keys                                                   */
const sounds = [
  new Audio('./simonSound1.mp3'),
  new Audio('./simonSound2.mp3'),
  new Audio('./simonSound3.mp3'),
  new Audio('./simonSound4.mp3')
]

/* Equalize all the volume from the files                                     */
sounds[0].volume = 0.3
sounds[1].volume = 0.3
sounds[2].volume = 0.7


/* SimonGame is the main component of our app. It renders the complete page and
 * handles the game's logic                                                   */
class SimonGame extends Component {
  /* Keep an array of the current series                                      */
  series = [0]

  /* Keep a handle for the move timeout                                       */
  timeout = null


  constructor() {
    super()

    /* Initialize our React state                                             */
    this.state = {
      /* All the cells start unlit                                            */
      lit: [false, false, false, false],
      /* Index of the next move from the player                               */
      current: 0,

      /* Start by showing the series                                          */
      step: 'show',
      /* The base mode is "easy" mode. User can then switch to "strict" mode  */
      mode: 'easy',

      /* Time during which a cell is lit                                      */
      onTime: 1000,

      /* Win flag to show the win animation                                   */
      win: false,

      /* Fail flag to show the fail animation                                 */
      fail: false,

      /* Init flag to know if the player has pressed "play"                   */
      init: false,
    }
  }10

  /* Prepare the fail timeout. Give the user 5 seconds to play or they loose  */
  configureTimeout = () => {
    /* First remove any pending timeout                                       */
    clearTimeout(this.timeout)

    /* Then configure the new timeout                                         */
    this.timeout = setTimeout(this.fail, 5000)
  }



  /* Reset go back to the "show" step                                         */
  reset = () => {
    /* Remove the fail timeout                                                */
    clearTimeout(this.timeout)

    /* Select the correct on-time based on current series length              */
    let onTime = 900
    if(this.state.win)
      onTime = 300
    else if(this.series.length > (MOVE_TO_WIN / 4)) {
      onTime = 750
    } else if(this.series.length > (MOVE_TO_WIN / 2)) {
      onTime = 600
    }

    /* Update the state                                                       */
    this.setState({fail: false, current: 0, step: 'show', init: true, onTime})

    /* Start showing the series                                               */
    setTimeout(this.show, onTime)
  }

  /* Completely reset the game with a new series, after a win or when clicking
   * on the Reset button                                                      */
  hardReset = () => {
    this.series = [randomCell()]
    this.setState({win: false})
    this.reset()
  }

  /* Reset the game on a wrong move. In case of 'strict' mode, launch a new
   * series                                                                   */
  softReset = () => {
    if(this.state.mode == 'strict')
      this.series = [randomCell()]
    this.reset()
  }

  /* Turn off all cells                                                       */
  off = () => {
    this.setState({lit: [false, false, false, false]})
  }


  /* Play a cell. OnClick handler for cells                                   */
  play = (cell) => {
    /* Get the current index in the series                                    */
    let current = this.state.current

    /* Clear the fail timeout                                                 */
    clearTimeout(this.timeout)

    /* Check if the chosen cell is the one in the series                      */
    if(cell == this.series[current]) {
      /* If it is, proceed to the next move                                   */
      current++

      /* Check if we've reached the end of the series                         */
      if(current >= this.series.length) {
        /* If we did, check if we've reached the max number of moves          */
        if(this.series.length == MOVE_TO_WIN) {
          /* If we did, trigger the 'win' animation                           */
          this.setState({win: true})
          this.series = [0, 1, 3, 2]

          /* Then launch asynchronously our reset (making sure the previous
           * setState fires first)                                            */
          setTimeout(this.reset, 0)

          /* Finally, launch an hard reset after 5 seconds of win animation   */
          setTimeout(this.hardReset, 5000)
        } else {
          /* If not, add a new cell to the series                             */
          this.series.push(randomCell())
          this.reset()
        }
      } else {
        /* If not, wait for another user input                                */
        this.setState({current})
        this.configureTimeout()
      }
    } else {
      /* If not, trigger the fail state                                       */
      this.fail()
    }

    /* Play the sound of the cell                                             */
    sounds[cell].play()
  }

  /* Go to fail state, then reset                                             */
  fail = () => {
    this.setState({fail: true})
    setTimeout(this.softReset, 1000)
  }

  /* Show one step of the series                                              */
  show = () => {
    let lit = [false, false, false, false]

    /* Get the next step to show                                              */
    let current = this.state.current

    /* Play the cell's sound                                                  */
    sounds[this.series[current]].play()
    /* Lot the cell                                                           */
    lit[this.series[current++]] = true

    /* Set the new state: lit cell and next step                              */
    this.setState({lit, current})

    /* Leave the cell lit during the on-time                                  */
    setTimeout(this.stall, this.state.onTime)
  }

  /* Wait a bit before showing the next step                                  */
  stall = () => {
    /* Start by turning off all cells                                         */
    this.off()

    /* Get the current step index                                             */
    let current = this.state.current

    /* If the step is not the last one, show the next one                     */
    if(current < this.series.length) {
      setTimeout(this.show, 200)
    }
    /* If the step is the last one and the user didn't win, let the user play */
    else if(!this.state.win) {
      this.setState({step: 'play', current: 0})
      this.configureTimeout()
    }
    /* If the step is the last one and the user won, start the win animation
     * again                                                                  */
    else {
      this.reset()
    }
  }


  /* Render the app                                                           */
  render() {
    /* Prepare the central message with the current number of steps           */
    let message = this.series.length

    /* If the user just lost in strict mode, display a "--" message           */
    if(this.state.fail && this.state.mode == 'strict')
      message = '--'

    /* If the use just won, display a win message                             */
    if(this.state.win)
      message = 'Yeah!'

    /* The background changes color if we loose or win                        */
    return (
      <BoardBackground fail={this.state.fail} win={this.state.win}>
        {/* Show the game's title                                             */}
        <Title>
          <TitleSimon>Simon</TitleSimon> <TitleGame>Game</TitleGame>
        </Title>

        {/* Construct the game's board                                        */}
        <BoardBody>
          {/* The board is made of four cells                                 */}
          <Cell onClick={() => this.play(0)} position='top-left'     lit={this.state.lit[0]} frozen={this.state.step == 'show'} />
          <Cell onClick={() => this.play(1)} position='top-right'    lit={this.state.lit[1]} frozen={this.state.step == 'show'} />
          <Cell onClick={() => this.play(2)} position='bottom-left'  lit={this.state.lit[2]} frozen={this.state.step == 'show'} />
          <Cell onClick={() => this.play(3)} position='bottom-right' lit={this.state.lit[3]} frozen={this.state.step == 'show'} />

          {/* The central part of the board contains button and information   */}
          <BoardMiddle>
            {/* Display the current step message                              */}
            <NumberOfSteps>
              {message}
            </NumberOfSteps>

            {/* Allow the user to choose between 'easy' and 'strict' mode     */}
            <div>
              <OptionMode selected={this.state.mode == 'easy'}    onClick={() => this.setState({mode:'easy'})}>Easy</OptionMode>
              <OptionMode selected={this.state.mode == 'strict'}  onClick={() => this.setState({mode:'strict'})}>Strict</OptionMode>
            </div>

            {/* Add a Reset button                                            */}
            <Reset onClick={this.hardReset}> {this.state.init ? 'Reset' : 'Play'} </Reset>
          </BoardMiddle>
        </BoardBody>
      </BoardBackground>
    )
  }
}


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the Simon Game project                                                */
ReactDOM.render(<SimonGame />, target)
