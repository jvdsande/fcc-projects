/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Tribute app                                                 */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled, {injectGlobal} from 'styled-components'

/* Remove the browser's default margin to the <body> tag                      */
injectGlobal`
  body {
    margin: 0;
  }
`

/* Image: <div> element showing an image taking up the whole width of the page,
 * and the whole height of the browser's window                               */
export const Image = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 100vh;
`


/* Panel: <div> element for holding texts, with a fixed height at 60% of the
          browser window and a following space of 70% of the browser window.
          The emtpy space is meant to show the background image               */
export const Panel = styled.div`
  position: relative;

  width: 100%;

  height:60vh;
  margin-bottom: 70vh;

  background-color: #212121;
  box-shadow: 0 0 5px 3px #171717;
  padding: 32px;
  box-sizing: border-box;

  font-size: calc(10px + 1.5vmin);
  font-family: 'Exo', sans-serif;
  color: #FAFAFA;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  /* The last Panel has a thinner margin to account for the footer            */
  &:nth-child(4) {
    margin-bottom: 55vh;
  }
`

/* SongQuote: <div> element positionned absolutely to lie in the empty space
              after a Panel element. Its final position in this space depends
              on the child number                                             */
export const SongQuote = styled.div`
  position: absolute;
  bottom: -40vh;

  font-size: calc(10px + 1.5vmin);
  font-weight: bold;
  font-family: 'Rock Salt', sans-serif;

  /* Add a thin text border and a text shadow so that it is readable above any
     image                                                                    */
  text-shadow: 0 0 25px #212121, 0 0 1px black;
  color: #FAFAFA;

  /* Position the first quote                                                 */
  text-align: left;
  left: 5%;
  right: auto;

  /* Position the second quote                                                */
  div:nth-child(3) & {
    text-align: center;
    left: auto;
    right: 10%;
  }

  /* Position the last quote                                                  */
  div:nth-child(4) & {
    text-align: right;
    left: auto;
    right: 5%;
  }
`

/* Name: <div> element with a bold, large font                                */
export const Name = styled.div`
  font-size: 250%;
  font-weight: bold;
  margin: 16px;
  flex: 1;
`

/* Title: <div> element with a large font                                     */
export const Title = styled.div`
  font-size: 150%;
  flex: 1;
  margin-bottom: 16px;
`

/* Content: <div> element with a maximum width and the text justified, to
            contain descripitons about the man                                */
export const Content = styled.div`
  width: 100%;
  max-width: 960px;
  text-align: justify;
  flex: 2;
  color: #CBCBCB;
`

/* Quote: <div> element for quoting people inside a <Content> element         */
export const Quote = styled.div`
  margin: 16px;
  font-style: italic;
  text-align: center;
  color: #FF6F00;
`

/* More: styled <Panel> to use as a footer, with no bottom margin             */
export const More = styled(Panel)`
  height: auto;
  margin: 0;

  /* The links in the footer are also styled                                  */
  & a {
    text-decoration: none;
    color: #FFAB00;
    font-weight: bold;
  }

  & a:hover {
    text-decoration: underline;
  }
`
