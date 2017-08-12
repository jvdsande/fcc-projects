import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {
  BoardBackground, BoardBody, BoardMiddle, Cell,
  Title, TitleSimon, TitleGame,
  Score, Wins,
  NumberOfSteps, OptionMode, Option, Reset,
} from './styles'


function randomCell() {
  return Math.floor(Math.random() * 4)
}

const MOVE_TO_WIN = 20

const sounds = [
  new Audio('./simonSound1.mp3'),
  new Audio('./simonSound2.mp3'),
  new Audio('./simonSound3.mp3'),
  new Audio('./simonSound4.mp3')
]

sounds[0].volume = 0.3
sounds[1].volume = 0.3
sounds[2].volume = 0.7


class SimonGame extends Component {
  constructor() {
    super()

    this.series = [0]
    this.timeout = null

    this.state = {
      lit: [false, false, false, false],
      current: 0,
      step: 'show',
      mode: 'easy',
      onTime: 1000,
      win: false,
      fail: false,
      init: false,
    }
  }

  reset = () => {
    let onTime = 900
    if(this.state.win)
      onTime = 300
    else if(this.series.length > 5) {
      onTime = 750
    } else if(this.series.length > 10) {
      onTime = 600
    }

    this.setState({fail: false, current: 0, step: 'show', init: true, onTime})

    clearTimeout(this.timeout)
    setTimeout(this.show, onTime)
  }

  hardReset = () => {
    this.series = [randomCell()]
    this.setState({win: false})
    this.reset()
  }

  softReset = () => {
    if(this.state.mode == 'strict')
      this.series = [randomCell()]
    this.reset()
  }

  off = () => {
    this.setState({lit: [false, false, false, false]})
  }

  play = (cell) => {
    let current = this.state.current
    if(cell == this.series[current]) {
      current++
      if(current >= this.series.length) {
        if(this.series.length == MOVE_TO_WIN) {
          this.setState({win: true})
          this.series = [0, 1, 3, 2]
          setTimeout(this.reset, 0)
          setTimeout(this.hardReset, 5000)
        } else {
          this.series.push(randomCell())
          this.reset()
        }
      } else {
        this.setState({current})
        this.configureTimeout()
      }
    } else {
      this.fail()
    }

    sounds[cell].play()
  }

  stall = () => {
    let lit = [false, false, false, false]
    let current = this.state.current

    this.setState({lit})

    if(current < this.series.length) {
      setTimeout(this.show, 200)
    } else if(!this.state.win) {
      this.setState({step: 'play', current: 0})
      this.configureTimeout()
    } else {
      this.reset()
    }
  }

  fail = () => {
    this.setState({fail: true})
    setTimeout(this.softReset, 1000)
  }

  configureTimeout = () => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.fail, 5000)
  }

  show = () => {
    let lit = [false, false, false, false]
    let current = this.state.current

    sounds[this.series[current]].play()
    lit[this.series[current++]] = true
    this.setState({lit, current})

    setTimeout(this.stall, this.state.onTime)
  }

  selectMode = (mode) => {
    this.setState({mode})
  }


  render() {
    let message = this.series.length

    if(this.state.fail && this.state.mode == 'strict')
      message = '--'

    if(this.state.win)
      message = 'Yeah!'

    return (
      <div>
        <BoardBackground fail={this.state.fail} win={this.state.win}>
          <Title>
            <TitleSimon>Simon</TitleSimon> <TitleGame>Game</TitleGame>
          </Title>
          <BoardBody>
            <Cell onClick={() => this.play(0)} position='top-left'     lit={this.state.lit[0]} frozen={this.state.step == 'show'} />
            <Cell onClick={() => this.play(1)} position='top-right'    lit={this.state.lit[1]} frozen={this.state.step == 'show'} />
            <Cell onClick={() => this.play(2)} position='bottom-left'  lit={this.state.lit[2]} frozen={this.state.step == 'show'} />
            <Cell onClick={() => this.play(3)} position='bottom-right' lit={this.state.lit[3]} frozen={this.state.step == 'show'} />
            <BoardMiddle>
              <NumberOfSteps>
                {message}
              </NumberOfSteps>
              <Option>
                <OptionMode selected={this.state.mode} value={'easy'}   onClick={() => this.selectMode('easy')}>Easy</OptionMode>
                <OptionMode selected={this.state.mode} value={'strict'} onClick={() => this.selectMode('strict')}>Strict</OptionMode>
              </Option>
              <Reset onClick={this.hardReset}> {this.state.init ? 'Reset' : 'Play'} </Reset>
            </BoardMiddle>
          </BoardBody>
        </BoardBackground>
      </div>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<SimonGame />, target)
