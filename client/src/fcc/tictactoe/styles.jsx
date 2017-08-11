import styled from 'styled-components'

/* Title    */
export const Title = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  position: absolute;
  top: 2vmin;
  left: 0;
  right: 0;
  font-size: 15vmin;
  text-align: center;
  color: #F5F5F5;
`
export const TitleTic = styled.span`
  color: #FFF8E1;
`
export const TitleToe = styled.span`
  color: #EDE7F6;
`


/* Game Board     */
export const BoardBackground = styled.div`
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
  transition: all .5s;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BoardBody = styled.div`
  position: relative;
  width: 330px;
  height: 330px;
`

export const Cell = styled.div`
  display: inline-block;
  width: 33.33%;
  height: 33.33%;
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
  cursor: ${props => props.frozen?'default':'pointer'};
  transition: all .5s;

  &:hover {
    ${props => {
        if(props.player != '' || props.frozen)
          return

        switch(props.turn) {
          case 'x': return 'background-color: #FFE082'
          case 'o': return 'background-color: #B39DDB'
        }
    }}
  }
`


/* Option Panel   */

export const OptionsToggle = styled.div`
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

export const OptionsBody = styled.div`
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

export const OptionTitle = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  color: #757575;
  width: 100%;
  font-size: 30px;
  text-align: center;
  margin: 10px 0;
`

export const OptionList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const OptionPlayer = styled.div`
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

export const OptionOpponent = styled.div`
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


/*  Score     */

export const Score = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  position: absolute;
  bottom: 2vmin;
  left: 0;
  right: 0;
  font-size: 10vmin;
  text-align: center;
  color: #BDBDBD;
`
export const Wins = styled.span`
  color: ${props => props.player == 'x' ? '#FF8F00' : '#4527A0'};
`
