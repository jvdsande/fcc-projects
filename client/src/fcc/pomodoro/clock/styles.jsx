/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Clock component                                             */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled from 'styled-components'


/* Body: <div> element used as the root of the Clock component                */
export const Body = styled.div`
  display: flex;
  position: absolute;

  font-size: 22vmin;
  text-shadow: 0 0 8px #9E9E9E;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  justify-content: center;
  align-items: center;
  cursor: pointer;
`

/* Time: <div> element used to display the current time, correctly centered
         vertically                                                           */
export const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

/* Reset: <div> element used for displaying the reset button                  */
export const Reset = styled.div`
  background-image: url('./reset.png');
  background-position: center center;
  background-size: cover;
  filter: invert(95%);
  opacity: 0.5;
  width: 20vmin;
  height: 20vmin;
  display: ${props => props.show?'block':'none'};

  &:hover {
    opacity: 0.8;
  }
`

/* ResetPlacer: <div> invisible element to correctly align the Reset element  */
export const ResetPlacer = styled(Reset)`
  background: none;
`
