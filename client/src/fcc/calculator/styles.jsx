/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Portfolio app                                               */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds   */
import styled, {injectGlobal} from 'styled-components'


/* Small tweak to the base DOM behavior & looks                               */
injectGlobal`
  body {
    font-family: 'Open Sans', sans-serif;
    background: #555555;
    text-align: center;
  }
`

/* Body: <div> element containing the calculator. It is centered on the page
 *       thanks to 'inline-block', will only exceed the screen width if the
 *       screen is smaller than 240px, and will expand to a max of 440px      */
export const Body = styled.div`
  position: relative;
  display: inline-block;
  max-width: 440px;
  min-width: 240px;
  width: 95%;
  background: #ECEFF1;
  margin-top: 5%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
  padding-bottom: 10px;
`

/* Screen: <div> element for the screen of the calculator. Green background,
 * with a discrete shadow. Fills the entire width                             */
export const Screen = styled.div`
  display: block;
  position: relative;
  margin: 15px;
  height: 96px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
  border-radius: 5px;
  background: #009688;
  font-weight: bold;
  color: white;
`

/* Formula: <div> element to hold the formula. Positionned at the top of the
            Screen element                                                    */
export const Formula = styled.div`
  height: 40%;
  padding: 10px;
  text-align: left;
  font-size: 140%;
  width: 100%;
  box-sizing: border-box;
`

/* Result: <div> element to hold the result. Positionned at the bottom of the
           Screen element, text aligned right                                 */
export const Result = styled.div`
  height: 60%;
  padding: 10px;
  padding-top: 5px;
  text-align: right;
  font-size: 200%;
  width: 100%;
  box-sizing: border-box;
`

/* Button: <div> element representing a button of the calculator. Can either
           take a fourth or half of the width, depending on the 'double' prop.
           Discrete shadow like the screen, serving as a hover & press hint   */
export const Button = styled.div`
  display: inline-block;
  position: relative;

  width: ${props => props.double? 'calc(50% - 20px)':'calc(25% - 15px)'};
  height: 70px;
  line-height: 70px;
  margin: 5px;

  text-align: center;
  font-size: 48px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
  border-radius: 4px;
  background: #FFFFFF;

  -webkit-touch-callout: none;
  user-select: none;

  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  &:active {
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
  }
`
