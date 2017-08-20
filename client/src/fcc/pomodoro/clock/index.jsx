/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Clock component for the Pomodoro app                                       */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {Body, Reset, ResetPlacer, Time} from './styles'

export default class Clock extends Component {
  timer = null

  /* Propagate the 'reset' event if existing                                  */
  reset = (event) => {
    event.stopPropagation()
    event.preventDefault()
    if(this.props.reset)
      this.props.reset()
  }

  /* Render the Clock component                                               */
  render() {
    /* Helper function for padding numbers                                    */
    function pad(text) {
      text = ''+text
      return (text.length<2?'0':'') + text
    }

    /* If the clock is disabled, clear the timer interval                     */
    if(this.props.disabled) {
      clearInterval(this.timer)
      this.timer = null
    }
    /* If the clock should be enabled, then set the interval if its not set   */
    else if(this.timer === null) {
      this.timer = setInterval(this.props.onTick, 1000)
    }

    /* Extract the minutes and seconds from the time value (in seconds)       */
    let minutes = Math.floor(this.props.time/60)
    let seconds = this.props.time%60

    return (
      <Body onClick={this.props.onClick}>
        {/* Put an invisible element to correctly align the reset button      */}
        <ResetPlacer show={this.props.showReset} />

        {/* Show the current time                                             */}
        <Time><strong>{pad(minutes)}</strong>:{pad(seconds)}</Time>

        {/* Conditionally show the reset button                               */}
        <Reset show={this.props.showReset} onClick={this.reset}/>
      </Body>
    )
  }
}
