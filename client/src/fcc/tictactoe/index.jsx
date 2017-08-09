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

const BoardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => {
    switch(props.winner) {
      case 'x': return '#FFE082'
      case 'o': return '#B39DDB'
      case 'draw' : return '#E0E0E0'
      default:  return 'white'
    }
  }};
  transition: all .5s
`

const Title = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  position: absolute;
  top: 2vmin;
  left: 0;
  right: 0;
  font-size: 15vmin;
  text-align: center;
  color: #F5F5F5;
`
const TitleTic = styled.span`
  color: #FFF8E1;
`
const TitleToe = styled.span`
  color: #EDE7F6;
`

const Score = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  position: absolute;
  bottom: 2vmin;
  left: 0;
  right: 0;
  font-size: 10vmin;
  text-align: center;
  color: #BDBDBD;
`
const Wins = styled.span`
  color: ${props => props.player == 'x' ? '#FF8F00' : '#4527A0'};
`

const OptionsToggle = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  text-align: center;
  color: #757575;
  position: absolute;
  bottom: calc(50% - 210px);
  right: calc(50% - 160px);
  height: 36px;
  width: 106px;
  background: #EEEEEE;
  border-radius: 36px;
  cursor: pointer;
  &:hover {
    background: #757575;
    color: #EEEEEE;
  }
`

const OptionsBody = styled.div`
  position: absolute;
  bottom: calc(50% - ${props => props.collapsed? '210px' : '165px'});
  right: calc(50% - 160px);
  width: ${props => props.collapsed? '106px' : '330px'};
  height: ${props => props.collapsed? '36px' : '330px'};
  border-radius: 50px;
  padding: 0;
  margin: 0;
  background: #EEEEEE;
  transition: all .3s;
  overflow: hidden;
`

const OptionTitle = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  color: #757575;
  width: 100%;
  font-size: 30px;
  text-align: center;
  margin: 10px 0;
`

const OptionList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

const OptionPlayer = styled.div`
  display: inline-block;
  width: ${props => props.value == props.player ? '65px' : '45px'};
  height: ${props => props.value == props.player ? '65px' : '45px'};
  margin: ${props => props.value == props.player ? '0' : '10px'} 0;
  border-radius: 100%;
  background: ${props => props.value == 'x' ? '#FF8F00' : '#4527A0'};
  opacity: ${props => props.value == props.player ? 1 : 0.3};
  cursor: pointer;

  &:hover {
    opacity: ${props => props.value == props.player ? 1 : 0.7};
  }
`

const OptionOpponent = styled.div`
  display: inline-block;
  width: ${props => props.value == props.mode ? '75px' : '65px'};
  height: ${props => props.value == props.mode ? '75px' : '65px'};
  margin: ${props => props.value == props.player ? '0' : '5px'} 0;
  border-radius: 100%;
  background-color:  ${props => props.value == props.mode ? '#BDBDBD' : 'transparent'};
  background-image: url('./${props => props.value}.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.value == props.mode ? '#BDBDBD' : '#E0E0E0'};
  }
`

const BoardBody = styled.div`
  position: absolute;
  top: calc(50% - 165px);
  left: calc(50% - 165px);
  width: 330px;
  height: 330px;
`

const Cell = styled.div`
  display: inline-block;
  width: 110px;
  height: 110px;
  box-sizing: border-box;
  border-radius: 100%;
  border: 7px solid ${props => {
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
      default:  return '#EEEEEE'
    }
  }};
  cursor: pointer;
  transition: all .5s;

  &:hover {
    background-color: ${props => {
      switch(props.player) {
        case 'x': return '#FF8F00'
        case 'o': return '#4527A0'
      }
      switch(props.turn) {
        case 'x': return '#FFE082'
        case 'o': return '#B39DDB'
      }
    }};
  }
`

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

  computerPlay() {
    let computer = this.state.options.player == 'x' ? 'o' : 'x'

    let computerPlay = computerNextPlay(this.board, computer)
    this.board.play(computerPlay, computer)
  }

  play = (cell) => {
    let winner = this.board.winner()
    let finished = winner != ''
    if(!finished) {
      let turn = this.state.turn
      let correctPlay = this.board.play(cell, turn)

      if(correctPlay) {
        let winner = this.board.winner()
        let finished = winner != ''

        if(this.state.options.mode == 'pvp') {
          turn = turn == 'x' ? 'o' : 'x'
        } else if(!finished) {
          this.computerPlay()

          winner = this.board.winner()
          finished = winner != ''
        }

        this.setState({turn})

        if(finished) {
          setTimeout(this.reset, 2000)
          let wins = this.state.wins
          if(wins[winner] !== undefined)
            wins[winner]++

          this.setState({wins})
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
      <div>
        <BoardBackground winner = {this.board.winner()} onClick={this.closeOptions}>
          <Title>
            <TitleTic>Tic</TitleTic> Tac <TitleToe>Toe</TitleToe>
          </Title>
          <BoardBody>
            {this.board.cells.map((c, i) => {
              return <Cell key={i} onClick={() => this.play(i)} player = {c} turn = {this.state.turn} winner = {this.board.winner()}/>
            })}
          </BoardBody>
          <Score>
            <Wins player='x'>{this.state.wins.x}</Wins> - <Wins player='o'>{this.state.wins.o}</Wins>
          </Score>
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
          <OptionsToggle onClick={this.toggleOptions}>Options</OptionsToggle>
        </BoardBackground>
      </div>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<TicTacToe />, target)
