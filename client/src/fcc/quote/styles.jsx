/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Quote app                                                   */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled, {withComponent} from 'styled-components'


/* Prepare a common CSS base for the Foreground and Background                */
const AbsoluteFullWidth = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`

/* Background: <div> element herited from AbsoluteFullWidth, to display the
 * background. Add a stripe to the side using the ::after pseudo element      */
export const Background = styled(AbsoluteFullWidth)`
  bottom: 0;
  background-color: #C5E1A5;
  transition: all .5s;
  &::after {
    display: block;
    content: ' ';
    position: absolute;
    right: 0;
    width: 9%;
    background-color: #9CCC65;
    top: 0;
    bottom: 0;
  }
`

/* Foreground: <div> element herited from AbsoluteFullWidth, to display the
 * foreground and content. Add a stripe to the side using ::after             */
export const Foreground = styled(AbsoluteFullWidth)`
  min-height: 40%;
  max-height: 100%;
  padding-bottom: 64px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: none;
  &::after {
    display: block;
    content: ' ';
    position: absolute;
    left: 0;
    width: 12%;
    background-color: #EEEEEE;
    top: 0;
    bottom: 0;
  }
`

/* Prepare a CSS base for Content and Author                                  */
const RelativeText = styled.div`
  position: relative;
  display: inline-block;
  max-width: 720px;
  width: 70%;
`


/* Content: <div> element for displaying the Quote content. The font size is
            dependant of the screen size                                      */
export const Content = styled(RelativeText)`
  color: #424242;
  text-align: left;
  font-size: calc(24px + 2vmin);
  font-family: sans-serif;
`

/* Author: <div> element for the Author name. Italic and aligned right        */
export const Author = styled(RelativeText)`
  font-style: italic;
  text-align: right;
  font-size: calc(24px + 1vmin);
  font-family: serif;
`


/* Prepare a CSS base for buttons. No border or active outline, small border
   radius                                                                     */
const Button = styled.button`
  position: absolute;
  background-color: #C5E1A5;
  opacity: 0.7;
  height: 44px;
  border: none;
  outline: none;
  font-size: 100%;
  font-weight: bold;
  color: black;
  border-radius: 4px;
  cursor: pointer;
`

/* NewQuote: <button> element for requesting a new quote                      */
export const NewQuote = styled(Button)`
  width: 100px;

  bottom: 8px;
  right: 15%;
`

/* Twitter: <button> element for sharing on Twitter                           */
export const Twitter = styled(Button)`
  background-image: url('./twitter.png');
  background-size: cover;

  width: 44px;

  bottom: 8px;
  right: calc(15% + 110px);
`
