import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import styled, {injectGlobal} from 'styled-components'

const Decrease = styled.button`
  display: inline-block;
  content: '+';
`
const Increase = styled(Decrease)`

`
const Value = styled.div`
  display: inline-block;
`

const NumberSelect = ({value, onIncrease, onDecrease}) => {
  return (
    <div>
      <Decrease onClick={onDecrease} />
      <Value>{value}</Value>
      <Increase onClick={onIncrease} />
    </div>
  )
}

class Pomodoro extends Component {
  constructor() {
    super()

    this.state = {
      sessionTime: 25,
      breakTime: 5,
    }
  }

  increaseSession = () => {
    this.setState({sessionTime: ++this.state.sessionTime <= 60 ? this.state.sessionTime : 60})
  }
  decreaseSession = () => {
    this.setState({sessionTime: --this.state.sessionTime > 0 ? this.state.sessionTime : 1})
  }
  increaseBreak = () => {
    this.setState({breakTime: ++this.state.breakTime <= 60 ? this.state.breakTime : 60})
  }
  decreaseBreak = () => {
    this.setState({breakTime: --this.state.breakTime > 0 ? this.state.breakTime : 1})
  }

  render() {
    return (
      <div>
        <NumberSelect onIncrease={this.increaseSession} onDecrease={this.decreaseSession} value={this.state.sessionTime}/>
        <NumberSelect onIncrease={this.increaseBreak} onDecrease={this.decreaseBreak} value={this.state.breakTime}/>
      </div>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<Pomodoro>Pomodoro</Pomodoro>, target)
