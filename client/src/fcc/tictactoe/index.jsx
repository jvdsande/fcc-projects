import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import styled, {injectGlobal} from 'styled-components'

const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

class Board {
  constructor() {
    this.cells = []
    this.reset()
  }

  reset() {
    this.cells = [
      '', '', '',
      '', '', '',
      '', '', ''
    ]
  }

  play(cell, player) {
    if(this.cells[cell] === '') {
      this.cells[cell] = player
      return true
    }

    return false
  }

  winner() {
    let winner = 'draw'
    winningLines.map(l => {
      if( this.cells[l[0]] != '' &&
          this.cells[l[0]] == this.cells[l[1]] &&
          this.cells[l[0]] == this.cells[l[2]]
        ) {
          winner = this.cells[l[0]]
        }
    })

    if(winner === 'draw') {
      this.cells.map(c => {
        if(c == '')
          winner = ''
      })
    }

    return winner
  }
}

const BoardBody = styled.div`
  width: 256px;
  height: 256px;
  border-radius: 18px;
  background-color: ${props => {
    switch(props.winner) {
      case 'x': return '#FFE082'
      case 'o': return '#B39DDB'
      case 'draw' : return '#E0E0E0'
      default:  return 'white'
    }
  }};
`

const Cell = styled.div`
  display: inline-block;
  width: 33.33%;
  height: 33.33%;
  box-sizing: border-box;
  border-radius: 18px;
  border: 4px solid ${props => {
    switch(props.winner) {
      case 'x': return '#FFE082'
      case 'o': return '#B39DDB'
      case 'draw' : return '#E0E0E0'
      default:  return 'white'
    }
  }};
  background-color: ${props => {
    switch(props.player) {
      case 'x': return '#FF8F00'
      case 'o': return '#4527A0'
      default:  return '#212121'
    }
  }};
  cursor: pointer;
`

class TicTacToe extends Component {
  constructor() {
    super()

    this.state = {
      board: new Board(),
      turn: 'x',
      finished: false
    }
  }

  play = (cell) => {
    if(!this.state.finished) {
      let turn = this.state.turn
      this.state.board.play(cell, turn)
      let finished = this.state.board.winner() != ''
      turn = turn == 'x' ? 'o' : 'x'
      this.setState({turn, finished})
    }
  }

  render() {
    return (
      <div>
        <div>Winner: {this.state.board.winner()}</div>
        <BoardBody winner = {this.state.board.winner()}>
          {this.state.board.cells.map((c, i) => {
            return <Cell key={i} onClick={() => this.play(i)} player = {c}  winner = {this.state.board.winner()}/>
          })}
        </BoardBody>
      </div>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<TicTacToe />, target)
