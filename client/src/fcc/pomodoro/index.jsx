import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import styled, {injectGlobal} from 'styled-components'


const PomodoroBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`


const NumberSelectBody = styled.div`
  margin: 24px;
  text-align: center;
  font-size: 150%;
  color: #313131;
`

const NumberSelectMain = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,0.3);
  width: 200px;
  border-radius: 56px;
`

const Decrease = styled.button`
  display: inline-block;
  border: none;
  background: none;
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background: rgba(255,255,255,0.6);
  font-size: 110%;
  cursor: pointer;
  font-weight: bold;
  &:active, &:focus {
    outline: 0 !important;
  }
`
const Increase = styled(Decrease)`
`
const Value = styled.div`
  display: inline-block;
  width: 56px;
  height: 56px;
  line-height: 56px;
  text-align: center;
`
const NumberTitle = styled.div`
  font-size: 120%;
  text-align: center;
  margin-bottom: 12px;
`

const ClockBody = styled.div`
  font-size: 1000%;
  font-weight: bold;
  text-shadow: 0 0 8px #9E9E9E;
  position: absolute;
  left: calc(50% - 320px);
  width: 640px;
  text-align: center;
  top: calc(50% - 160px);
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`

const Back = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`


class Background extends Component {
  constructor() {
    super()

    function randomPoint() {
      let x = Math.floor(Math.random() * 250 - 50)
      let y = Math.floor(Math.random() * 250 - 50)
      return x + "," + y
    }

    let pa = randomPoint()
    let pb = randomPoint()

    this.triangles = []

    let i = 300
    while(i--) {
      let pc = randomPoint()
      this.triangles.push({pa,pb,pc})
      pa = pb
      pb = pc
    }
  }

  shouldComponentUpdate(nProps) {
    return (nProps.color != this.props.color)
  }

  render()
  {
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1
        ? "0" + hex
        : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
    }

    const colors = [
      [ // Green
        '#66BB6A',
        '#4CAF50',
        '#43A047',
        '#388E3C',
        '#2E7D32',
        '#1B5E20'
      ],
      [ // Red
        '#EF5350',
        '#F44336',
        '#E53935',
        '#D32F2F',
        '#C62828',
        '#B71C1C'
      ],
    ]

    let idx = 0
    let c = this.props.color
    function randomColor() {
      idx = (idx+1)%6
      return colors[c][idx]
    }

    function createTriangle(i) {
      let t = <polygon points={i.pa + " " + i.pb + " " + i.pc} style={{
        fill: randomColor(),
        transition: "all 1s"
      }}/>
      return t
    }


    return (
      <Back>
        <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <polygon points="-100,-100 300,-100 300,300" style={{
            fill: randomColor(),
            transition: "all 1s"
          }}/>
          <polygon points="-100,-100 300,300 -100,300" style={{
            fill: randomColor(),
            transition: "all 1s"
          }}/> {this.triangles.map(function(i) {
            return createTriangle(i)
          })
}
        </svg>
      </Back>
    )
  }
}



class NumberSelect extends Component {
  increase = () => {
    let step = this.props.step || 1
    if(this.props.onChange)
      this.props.onChange(this.props.value + step)
  }

  decrease = () => {
    let step = this.props.step || 1
    if(this.props.onChange)
      this.props.onChange(this.props.value - step)
  }
  render()
  {
    return (
      <NumberSelectBody>
        {this.props.title?(<NumberTitle>{this.props.title}</NumberTitle>):''}
        <NumberSelectMain>
          <Decrease onClick={this.decrease} disabled={this.props.disabled}> - </Decrease>
          <Value>{this.props.value}</Value>
          <Increase onClick={this.increase} disabled={this.props.disabled}> + </Increase>
        </NumberSelectMain>
      </NumberSelectBody>
    )
  }
}


class Clock extends Component {
  constructor() {
    super()

    this.timer = null
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
      <ClockBody onClick={this.props.onClick}>
        {pad(minutes)}:{pad(seconds)}
      </ClockBody>
    )
  }
}

const STEP_BREAK = 0
const STEP_SESSION = 1

class Pomodoro extends Component {
  constructor() {
    super()

    this.state = {
      sessionTime: 25,
      breakTime: 5,
      currentTime: 25 * 60,
      currentStep: STEP_SESSION,
      running: false,
    }
  }

  sessionUpdate = (value) => {
    let currentTime = this.state.currentTime
    let sessionTime = value <= 60 ? (value > 0 ? value : 1) : 60
    if(this.state.currentStep == STEP_SESSION) {
      currentTime = sessionTime * 60
    }
    this.setState({sessionTime, currentTime})
  }

  breakUpdate = (value) => {
    let currentTime = this.state.currentTime
    let breakTime = value <= 60 ? (value > 0 ? value : 1) : 60
    if(this.state.currentStep == STEP_BREAK) {
      currentTime = breakTime * 60
    }
    this.setState({breakTime, currentTime})
  }

  tickUpdate = () => {
    let currentTime = this.state.currentTime - 1
    let currentStep = this.state.currentStep

    if(currentTime < 0) {
      currentStep = (currentStep + 1)%2
      if(currentStep == STEP_SESSION) {
        currentTime = 60 * this.state.sessionTime
      }
      else {
        currentTime = 60 * this.state.breakTime
      }
    }

    this.setState({currentStep, currentTime})
  }

  toggle = () => {
    this.setState({running: !this.state.running})
  }


  render() {return (
      <PomodoroBody>
        <Background color={this.state.currentStep} />
        <NumberSelect title="Session Length" onChange={this.sessionUpdate} value={this.state.sessionTime} disabled={this.state.running} />
        <Clock  time={this.state.currentTime}
                totalTime={this.state.currentStep == STEP_SESSION ? this.state.sessionTime : this.state.breakTime}
                onTick={this.tickUpdate}
                onClick={this.toggle}
                disabled={!this.state.running} />
        <NumberSelect title="Break Length" onChange={this.breakUpdate} value={this.state.breakTime} disabled={this.state.running} />
      </PomodoroBody>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<Pomodoro>Pomodoro</Pomodoro>, target)


injectGlobal`
  * {
    font-family: sans-serif;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    background: #888888;
    color: #212121;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }
`
