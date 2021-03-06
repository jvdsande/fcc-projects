/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Weather app                                                 */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled, {injectGlobal} from 'styled-components'


/* Theme the body to hold and center our weather card                         */
injectGlobal`
  body {
    position: fixed;
    top: 0; bottom: 0;
    right: 0; left: 0;
    margin: 0;
    padding: 0;
    background: #212121;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

/* Background: <div> element dependent on the screen orientation, always showing
               entirerly on screen, and with a max width and height. Its back
               color depends on the time (day or night)                       */
export const Background = styled.div`
  position: relative;
  background-color: ${props => props.time == 'day' ? '#B5DBFB' : '#040523'};
  margin: auto;
  display: block;

  @media (orientation:landscape) {
    & {
      height: 81vh;
      width: 108vh;
    }
  }

  @media (orientation:portrait) {
    & {
      width: 96vw;
      height: 64vw;
    }
  }

  max-width: 640px;
  max-height: 480px;

  overflow: hidden;
  border-radius: 1vmin;
  box-shadow: 0 0 20px 10px #171717;
`

/* Foreground: <div> element showing an image of a landscape, changing colors
               between day and night                                          */
export const Foreground = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('./base-${props => props.time}.png');
`

/* Panel: <div> element for displaying text above the background and foreground.
          Use an opacity of 0.5 to leave the background picture apparent      */
export const Panel = styled.div`
  background: black;
  font-family: sans-serif;
  color: white;
  position: absolute;
  min-width: 200px;
  min-height: 150px;
  bottom: 3vmin;
  right: 3vmin;
  border-radius: 1vmin;
  opacity: 0.5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  font-size: 20px;
`

/* ErrorPanel: styled Panel used for displaying error. This specific Panel
               covers entirerly the background image                          */
export const ErrorPanel = styled(Panel)`
  top: 3vmin;
  left: 3vmin;
  bottom: 3vmin;
  right: 3vmin;
  font-size: 30px;
`


/* City: <div> element for displaying the City name, with a large font        */
export const City = styled.div`
  font-size: 140%;
  font-weight: bold;
  padding-left: 16px;
  padding-right: 16px;
`

/* Type: <div> element for displaying the current weather type                */
export const Type = styled.div`
  font-size: 110%;
`

/* Temp: <div> element for displaying the temperature. The text color changes to
         reflect cold, average or hot temperature                             */
export const Temp = styled.div`
  font-size: 220%;
  padding: 4px;
  color: ${props => props.temp < 26 ? (props.temp < 10 ? '#0288D1' : '#00796B') : 'E64A19'};
`

/* Unit: <span> element used for displaying the temperature unit. Use of cursor
         to hint to the user that it is clickable                             */
export const Unit = styled.span`
  cursor: pointer;
  font-weight: bold;
`
