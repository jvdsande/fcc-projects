/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Simon Game app                                              */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled from 'styled-components'

/* Title: <div> element containing the game's title                           */
export const Title = styled.div`
  position: absolute;
  top: 2vh;
  left: 0;
  right: 0;
  font-size: 15vmin;
  text-align: center;
  color: #F5F5F5;
`

/* TitleSimon: <span> element to change the color of part of the name         */
export const TitleSimon = styled.span`
  color: #FFEBEE;
`

/* TitleGame: <span> element to change the color of another part of the name  */
export const TitleGame = styled.span`
  color: #F1F8E9;
`




/* BoardBackground: <div> element to display a background which changes color
                    with the app state. It is also the root of our Component  */
export const BoardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.fail ? '#FFCDD2' : (props.win ? '#E3F2FD' : 'white')};
  transition: all .5s;
  font-family: 'Gloria Hallelujah', cursive;
`

/* BoardBody: <div> element centered on the page, containing the rest of the
              board                                                           */
export const BoardBody = styled.div`
  position: absolute;
  bottom: 15vh;
  left: calc(50% - 25vh);
  width: 50vh;
  height: 50vh;
`

/* BoardMiddle: <div> element with rounded edges for the center of the pie    */
export const BoardMiddle = styled.div`
  text-align: center;
  color: #757575;

  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;

  background: #FAFAFA;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`


/* Prepare an array of per-cell properties                                    */
const CELLS = {
  'top-left':     {color: '#D32F2F', border: '100% 0 0 0'},
  'top-right':    {color: '#303F9F', border: '0 100% 0 0'},
  'bottom-right': {color: '#689F38', border: '0 0 100% 0'},
  'bottom-left':  {color: '#FFA000', border: '0 0 0 100%'},
}

/* Cell: <div> element positioned on one of the board's edges. React's to user
         actions such as click or hover, but those reaction can be frozen using
         the 'frozen' prop                                                    */
export const Cell = styled.div`
  display: inline-block;
  width: 50%;
  height: 50%;

  opacity: ${props => props.lit ? 0.3 : 0.6};
  cursor: ${props => props.frozen ? 'default' : 'pointer'};


  /* The color depends on the position                                        */
  background: ${props => CELLS[props.position].color};

  /* The radius depends on the position to make a quarter of circle           */
  border-radius: ${props => CELLS[props.position].border};


  /* Only activate user reaction if the frozen prop is false                  */
${props => {
  const states = [
    '&:hover { opacity: 0.7 }',
    '&:active { opacity: 0.3 }'
  ]
  if(!props.frozen)
    return states.join('\n')
}}

  transition: all .3s;
`


/* OptionMode: <div> element acting as a dual-radio choice element            */
export const OptionMode = styled.div`
  display: inline-block;

  padding: 0.5vh 2vh;
  width: 5vh;

  font-size: 1.8vh;
  cursor: pointer;

  /* The background-color and text color depend on whether the element is
     selected                                                                 */
  background-color: ${props => props.selected ? '#757575' : '#EEEEEE'};
  color: ${props => props.selected ? '#EEEEEE' : '#757575'};


  /* The border depends whether the element is the first of its kind or not   */
  border-radius: 0 1vh 1vh 0;
  &:first-child {
    border-radius: 1vh 0 0 1vh;
  }

  &:hover {
    /* The background-color and text color depend on whether the element is
       selected                                                               */
    background-color: ${props => props.selected ? '#757575' : '#BDBDBD'};
    color:  ${props => props.selected ? '#EEEEEE' : '#FAFAFA'};
  }
`


/* NumberOfSteps: <div> element for displaying the current step message       */
export const NumberOfSteps = styled.div`
  font-size: 7vh;
`

/* Reset: <div> acting as a reset button                                      */
export const Reset = styled.div`
   background-color: #EEEEEE;
   color: #757575;
   cursor: pointer;
   padding: 0.5vh 2vh;
   border-radius: 1vh;
   font-size: 1.8vh;

   &:hover {
     background-color: #757575;
     color: #EEEEEE;
   }
`
