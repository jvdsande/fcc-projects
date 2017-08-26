/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Pomodoro app                                                */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled from 'styled-components'

/* Title: <div> element containing the game's title                           */
export const Title = styled.div`
  position: absolute;
  top: 2vmin;
  left: 0;
  right: 0;
  font-size: 15vmin;
  text-align: center;
  color: #F5F5F5;
`

/* TitleTic: <span> element to change the color of part of the name           */
export const TitleTic = styled.span`
  color: #FFF8E1;
`

/* TitleTac: <span> element to change the color of another part of the name   */
export const TitleToe = styled.span`
  color: #EDE7F6;
`





/* BoardBackground: <div> element to display a background which changes color
                    with the app state. It is also the root of our Component  */
export const BoardBackground = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
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


/* BoardBody: <div> element centered on the page, containing the board        */
export const BoardBody = styled.div`
  position: relative;
  width: 330px;
  height: 330px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`

/* Cell: <div> element for displaying a cell. A cell is round and its background
         reflects if a player has played it, and which player it was          */
export const Cell = styled.div`
  width: 30%;
  height: 30%;
  box-sizing: border-box;
  border-radius: 100%;

  /* Select the background according to whether a player has played the cell,
     and which player it was                                                  */
  background-color: ${props => {
    switch(props.player) {
      case 'x': return '#FF8F00'
      case 'o': return '#4527A0'
      default:  return '#EEEEEE'
    }
  }};

  /* Hint the user that the cell is clickable, if the board is not frozen     */
  cursor: ${props => props.frozen?'default':'pointer'};

  /* Ease the changing of background when someone plays                       */
  transition: all .5s;


  /* On hover, change the background of unused cells to reflect the player who
     is about to play                                                         */
  &:hover {
    background-color: ${props => {
        /* Do not apply hover effect is the board is frozen or if the cell is
           already played by someone                                          */
        if(props.player != '' || props.frozen)
          return

        switch(props.turn) {
          case 'x': return '#FFE082'
          case 'o': return '#B39DDB'
          default:  return '#EEEEEE'
        }
    }};
  }
`

/* OptionsToggle: <div> element allowing to show/hide the option panel        */
export const OptionsToggle = styled.div`
  text-align: center;
  position: absolute;
  bottom: calc(50% - 210px);
  right: calc(50% - 160px);
  height: 36px;
  width: 106px;
  border-radius: 36px;
  cursor: pointer;

  background-color: #EEEEEE;
  color: #757575;

  &:hover {
    background-color: #757575;
    color: #EEEEEE;
  }
`

/* OptionsBody: <div> element containing the option panel                     */
export const OptionsBody = styled.div`
  position: absolute;
  right: calc(50% - 160px);
  border-radius: 50px;
  padding: 0;
  margin: 0;
  background: #EEEEEE;
  overflow: hidden;

  /* Change the position, width and height based on the collapsed property, to
     create an open/close animation                                           */
  bottom: calc(50% - ${props => props.collapsed? '210px' : '165px'});
  width: ${props => props.collapsed? '106px' : '330px'};
  height: ${props => props.collapsed? '36px' : '330px'};
  transition: all .3s;
`

/* OptionTitle: <div> element for displaying a title for a specific option    */
export const OptionTitle = styled.div`
  color: #757575;
  width: 100%;
  font-size: 30px;
  text-align: center;
  margin: 10px 0;
`

/* OptionList: <div> element for wrapping different values for an option      */
export const OptionList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

/* OptionPlayer: <div> element for displaying a choice for the player's team.
                 The background color reflects the team to choose, and the width
                 and opacity reflects the select state                        */
export const OptionPlayer = styled.div`
  display: inline-block;
  width: ${props => props.value == props.player ? '65px' : '45px'};
  height: ${props => props.value == props.player ? '65px' : '45px'};
  margin: ${props => props.value == props.player ? '0' : '10px'} 0;
  border-radius: 100%;
  background-color: ${props => props.value == 'x' ? '#FF8F00' : '#4527A0'};
  opacity: ${props => props.value == props.player ? 1 : 0.3};
  cursor: pointer;

  &:hover {
    opacity: ${props => props.value == props.player ? 1 : 0.7};
  }
`

/* OptionOpponent: <div> element for displaying a choice for the game's mode.
                 The background image reflects the mode to choose, and the width
                 and opacity reflects the select state                        */
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



/* Score: <div> element for displaying the current score. Positionned at the
          bottom of the screen                                                */
export const Score = styled.div`
  position: absolute;
  bottom: 2vmin;
  left: 0;
  right: 0;
  font-size: 10vmin;
  text-align: center;
  color: #BDBDBD;
`

/* Wins: <span> element for styling the number of wins with it's team color   */
export const Wins = styled.span`
  color: ${props => props.player == 'x' ? '#FF8F00' : '#4527A0'};
`
