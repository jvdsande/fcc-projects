/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Scroller component                                          */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled from 'styled-components'


/* Body: <div> element representing the body of the scroller. Fixed element
         taking all of the window space, with a negative z-index to lie beneath
         everything by default                                                */
export const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 25vh;
  overflow: hidden;
  z-index: -1;
`
