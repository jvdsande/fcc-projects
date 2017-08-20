/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point and main component for the Pomodoro project                    */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {Body} from './styles.jsx'

/* Import the various components needed for the complete app                  */
import NumberSelect from './number-select'
import Background from './background'
import Clock from './clock'


/* Create an enum of human-readable states for the Pomodoro app               */
const [STEP_INIT, STEP_BREAK, STEP_SESSION] = [0, 1, 2]

/* Pomodoro is the main component of the Pomodoro app. It uses the NumberSelect,
 * Background and Clock component to create the complete app                  */
class Pomodoro extends Component {
  constructor() {
    super()

    /* Prepare the React state. This state will hold the remaining time,
     * the next session and break time, a running flag for the clock, and the
     * current step                                                           */
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      currentTime: 25 * 60,
      currentStep: STEP_INIT,
      running: false,
    }
  }

  /* Updater for the session length value                                     */
  sessionUpdate = (sessionTime) => {
    /* Get the current time                                                   */
    let currentTime = this.state.currentTime

    /* If the application is in the INIT state, then update the current time
     * with the new session value                                             */
    if(this.state.currentStep == STEP_INIT) {
      currentTime = sessionTime * 60
    }

    /* Update the state with new session and current time values              */
    this.setState({sessionTime, currentTime})
  }

  /* Updater for the break length value                                       */
  breakUpdate = (breakTime) => {
    /* Update the state with the new break length value                       */
    this.setState({breakTime})
  }

  /* Handler for the clock 'tick' event. The clock emits a 'tick' event every
   * second                                                                   */
  tickUpdate = () => {
    /* Remove 1 to the current remaining time                                 */
    let currentTime = this.state.currentTime - 1

    /* Get the current step                                                   */
    let currentStep = this.state.currentStep

    /* If the remaining time has reached 0, got to the next step              */
    if(currentTime < 0) {
      /* If we were at break, then we load the next session time, and go to the
       * session step                                                         */
      if(currentStep == STEP_BREAK) {
        currentStep = STEP_SESSION
        currentTime = 60 * this.state.sessionTime
      }
      /* If we were in session, then we load the next break time, and go to the
       * break step                                                           */
      else {
        currentStep = STEP_BREAK
        currentTime = 60 * this.state.breakTime
      }
    }

    /* Update the state with the new step and remaining time                  */
    this.setState({currentStep, currentTime})
  }

  /* Toggle the running state of the clock                                    */
  toggle = () => {
    let currentStep = this.state.currentStep

    /* If we were in the INIT state, then we start a session step             */
    if(!this.state.running && currentStep == STEP_INIT)
      currentStep = STEP_SESSION

    /* Update the state with the new running flag and step                    */
    this.setState({running: !this.state.running, currentStep})
  }

  /* Reset the counter and go back to INIT state                              */
  reset = () => {
    this.setState({currentStep: STEP_INIT, currentTime: 60 * this.state.sessionTime})
  }

  /* Render the Pomodoro app                                                  */
  render() {
    return (
      <Body>
        {/* Contextual background changing color depending on the step        */}
        <Background color={this.state.currentStep} />

        {/* Clock displaying the current time, emitting a tick event while running
          * and showing a reset button when not                               */}
        <Clock
                time={this.state.currentTime}

                onTick={this.tickUpdate}
                onClick={this.toggle}

                disabled={!this.state.running}
                showReset={!this.state.running && this.state.currentStep != STEP_INIT}

                reset={this.reset}
              />

        {/* Number selectors for the session and break time                   */}
        <NumberSelect onChange={this.sessionUpdate} value={this.state.sessionTime} max={60} min={1}>
          Session Length
        </NumberSelect>
        <NumberSelect onChange={this.breakUpdate} value={this.state.breakTime} max={30} min={1}>
          Break Length
        </NumberSelect>
      </Body>
    )
  }
}


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the Pomodoro project                                                */
ReactDOM.render(<Pomodoro />, target)
