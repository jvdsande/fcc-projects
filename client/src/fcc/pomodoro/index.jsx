import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import NumberSelect from './number-select'
import Background from './background'
import Clock from './clock'

import {Body} from './styles.jsx'

const STEP_INIT = 0
const STEP_BREAK = 1
const STEP_SESSION = 2

class Pomodoro extends Component {
  constructor() {
    super()

    this.state = {
      sessionTime: 25,
      breakTime: 5,
      currentTime: 25 * 60,
      currentStep: STEP_INIT,
      running: false,
    }
  }

  sessionUpdate = (value) => {
    let currentTime = this.state.currentTime
    let sessionTime = value
    if(this.state.currentStep == STEP_INIT) {
      currentTime = sessionTime * 60
    }
    this.setState({sessionTime, currentTime})
  }

  breakUpdate = (value) => {
    let currentTime = this.state.currentTime
    let breakTime = value
    this.setState({breakTime, currentTime})
  }

  tickUpdate = () => {
    let currentTime = this.state.currentTime - 1
    let currentStep = this.state.currentStep

    if(currentTime < 0) {
      if(currentStep == STEP_BREAK) {
        currentStep = STEP_SESSION
        currentTime = 60 * this.state.sessionTime
      }
      else {
        currentStep = STEP_BREAK
        currentTime = 60 * this.state.breakTime
      }
    }

    this.setState({currentStep, currentTime})
  }

  toggle = () => {
    let currentStep = this.state.currentStep
    if(!this.state.running && currentStep == STEP_INIT)
      currentStep = STEP_SESSION

    this.setState({running: !this.state.running, currentStep})
  }

  reset = () => {
    this.setState({currentStep: STEP_INIT, currentTime: 60 * this.state.sessionTime, running: false})
  }

  render() {
    return (
      <Body>
        <Background color={this.state.currentStep} />
        <Clock  time={this.state.currentTime}
                totalTime={this.state.currentStep == STEP_BREAK ? this.state.breakTime : this.state.sessionTime}
                onTick={this.tickUpdate}
                onClick={this.toggle}
                disabled={!this.state.running}
                showReset={!this.state.running && this.state.currentStep != STEP_INIT}
                reset={this.reset}
              />
        <NumberSelect title="Session Length" onChange={this.sessionUpdate} value={this.state.sessionTime} disabled={this.state.running} max={60} min={1}/>
        <NumberSelect title="Break Length" onChange={this.breakUpdate} value={this.state.breakTime} disabled={this.state.running} max={60} min={1}/>
      </Body>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<Pomodoro />, target)
