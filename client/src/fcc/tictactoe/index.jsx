import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {
  BoardBackground, BoardBody, Cell,
  Title, TitleTic, TitleToe,
  Score, Wins,
  OptionsToggle, OptionsBody, OptionList,
  OptionPlayer, OptionOpponent, OptionTitle,
} from './styles'

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

  copy() {
    let copy = new Board()
    this.cells.map((c, i) => copy.cells[i] = c)

    return copy
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

  emptyCells() {
    let empties = []
    this.cells.map((c,i) => {
      if(c == '')
        empties.push(i)
    })

    return empties
  }

  winner() {
    let winner = 'draw'

    if(this.emptyCells == 0)
      return winner

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

function computerNextPlay(board, computer)
{
  let play = -1
  let user = computer == 'x' ? 'o' : 'x'

  let empties = board.emptyCells()


  // Check if the computer can win
  empties.map(c => {
    let copy = board.copy()
    copy.play(c, computer)
    if(copy.winner() == computer && play == -1)
      play = c
  })

  if(play > -1)
    return play

  // Check if the user needs to be blocked
  empties.map(c => {
    let copy = board.copy()
    copy.play(c, user)
    if(copy.winner() == user && play == -1)
      play = c
  })

  if(play > -1)
    return play

  // Give a ranking to each empty cell
  // Rank = (3 - number of play to win) * number of winning lines
  empties = empties.map(c => {
    let vote = 0
    let copy = board.copy()
    copy.play(c, computer)

    winningLines.map(l => {
      l = l.map(c => copy.cells[c])
      // Check all lines where two are computer and one is empty
      if(
        (l[0] == computer && l[1] == computer && l[2] == '') ||
        (l[0] == computer && l[1] == '' && l[2] == computer) ||
        (l[0] == '' && l[1] == computer && l[2] == computer)
      ) {
        vote += 2
      }

      // Check all lines where two are empty and one is computer
      if(
        (l[0] == computer && l[1] == '' && l[2] == '') ||
        (l[0] == '' && l[1] == '' && l[2] == computer) ||
        (l[0] == '' && l[1] == computer && l[2] == '')
      ) {
        vote += 1
      }
    })

    return {cell: c, vote}
  })

  empties = empties.sort((a, b) => a.vote < b.vote)

  return empties[0].cell
}

class TicTacToe extends Component {
  constructor() {
    super()

    this.board = new Board()
    this.state = {
      turn: 'x',
      wins: {x: 0, o: 0},
      freeze: false,
      options: {
        collapsed: false,
        player: '',
        mode: '',
      },
    }
  }

  reset = () => {
    this.board.reset()

    let turn = 'x'

    if(this.state.options.mode == 'pvc' && this.state.options.player == 'o') {
      this.computerPlay()
      turn = 'o'
    }

    this.setState({turn})
  }

  end() {
    setTimeout(this.reset, 2000)


    let winner = this.board.winner()
    let wins = this.state.wins
    if(wins[winner] !== undefined)
      wins[winner]++

    this.setState({wins})
  }

  computerPlay = () => {
    let computer = this.state.options.player == 'x' ? 'o' : 'x'

    let computerPlay = computerNextPlay(this.board, computer)
    this.board.play(computerPlay, computer)

    let winner = this.board.winner()
    let freeze = false

    this.setState({freeze})

    if(winner != '')
      this.end()
  }

  play = (cell) => {
    if(this.state.freeze)
      return

    let winner = this.board.winner()
    let finished = winner != ''
    let freeze = false
    if(!finished) {
      let turn = this.state.turn
      let correctPlay = this.board.play(cell, turn)

      if(correctPlay) {
        let winner = this.board.winner()
        let finished = winner != ''

        if(this.state.options.mode == 'pvp') {
          turn = turn == 'x' ? 'o' : 'x'
        } else if(!finished) {
          freeze = true
          setTimeout(this.computerPlay, 700)
        }

        this.setState({turn, freeze})

        if(finished) {
          this.end()
        }
      }
    }
  }

  toggleOptions = (e) => {
    e.preventDefault()
    e.stopPropagation()

    let options = this.state.options
    options.collapsed = !options.collapsed && (options.mode != '' && options.player != '')
    this.setState({options})
  }

  closeOptions = () => {
    let options = this.state.options
    options.collapsed = true && (options.mode != '' && options.player != '')
    this.setState({options})
  }

  selectPlayer = (e, player) => {
    e.preventDefault()
    e.stopPropagation()


    let options = this.state.options
    options.player = player

    this.setState({options})

    this.reset()
  }

  selectMode = (e, mode) => {
    e.preventDefault()
    e.stopPropagation()

    let options = this.state.options
    options.mode = mode

    this.setState({options})

    this.reset()
  }


  render() {
    return (
      <BoardBackground winner = {this.board.winner()} onClick={this.closeOptions}>
        <Title>
          <TitleTic>Tic</TitleTic> Tac <TitleToe>Toe</TitleToe>
        </Title>
        <Score>
          <Wins player='x'>{this.state.wins.x}</Wins> - <Wins player='o'>{this.state.wins.o}</Wins>
        </Score>
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
        <OptionsBody collapsed={this.state.options.collapsed}>
          <OptionTitle>Choose your team</OptionTitle>
          <OptionList>
            <OptionPlayer value={'x'} player={this.state.options.player} onClick={(e) => this.selectPlayer(e, 'x')} />
            <OptionPlayer value={'o'} player={this.state.options.player} onClick={(e) => this.selectPlayer(e, 'o')} />
          </OptionList>
          <OptionTitle>Choose your opponent</OptionTitle>
          <OptionList>
            <OptionOpponent value={'pvp'} mode={this.state.options.mode} onClick={(e) => this.selectMode(e, 'pvp')} />
            <OptionOpponent value={'pvc'} mode={this.state.options.mode} onClick={(e) => this.selectMode(e, 'pvc')} />
          </OptionList>
        </OptionsBody>
        <OptionsToggle onClick={this.toggleOptions}>{this.state.options.collapsed ? 'Options' : 'Play'}</OptionsToggle>
      </BoardBackground>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<TicTacToe />, target)
