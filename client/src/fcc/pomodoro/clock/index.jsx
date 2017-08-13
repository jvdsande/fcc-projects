import React, {Component} from 'react'

import {Body, Reset, ResetPlacer} from './styles'

export default class Clock extends Component {
  constructor() {
    super()

    this.timer = null
  }

  reset = (event) => {
    event.stopPropagation()
    event.preventDefault()
    if(this.props.reset)
      this.props.reset()
  }

  render() {
    function pad(text) {
      text = ''+text
      return (text.length<2?'0':'') + text
    }
    if(this.props.disabled) {
      clearInterval(this.timer)
      this.timer = null
    } else if(this.timer === null) {
      this.timer = setInterval(this.props.onTick, 1000)
    }

    let minutes = Math.floor(this.props.time/60)
    let seconds = this.props.time%60

    return (
      <Body onClick={this.props.onClick}>
        <ResetPlacer show={this.props.showReset} />
        {pad(minutes)}:{pad(seconds)}
        <Reset show={this.props.showReset} onClick={this.reset}/>
      </Body>
    )
  }
}
