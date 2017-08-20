/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Pomodoro app                                                */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled from 'styled-components'

/* Body: <div> element holding the Pomodoro app. Display 'flex' to help center
         the app horizontally and vertically                                  */
export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  font-family: 'Oxygen Mono', sans-serif;
`
