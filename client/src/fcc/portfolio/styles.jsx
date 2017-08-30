/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Portfolio app                                               */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds   */
import styled, {injectGlobal}  from 'styled-components'


/* Small tweak to the base DOM behavior & looks                               */
injectGlobal `
  * {
    font-family: sans-serif;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    background: #888888;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }


  h2 {
    color: #009688;
    font-size: 130%;
  }

  h3 {
    color: #00796B;
    text-align: left;
    font-size: 150%;
    font-weight: bold;
  }
`



/* Link: styled <a> element removing underline and tweaking the color.        */
export const Link = styled.a`
  text-decoration: none;
  outline: none;
  color: #1976D2;
  position: relative;

  &:visited {
    color: #1976D2;
  }
`

/* Title: <h1> element with configured padding and a horizontal bottom line   */
export const Title = styled.h1`
  padding: 16px;

  &::after {
    display: block;
    content: ' ';
    height: 1px;
    background: #00695C;
    width: 50%;
    margin: auto;
    margin-top: 16px;
  }
`


/* Navigation panel     */

/* Nav: <div> element, fixed to the side of the page, configured as a flex-box*/
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 64px;
  background: #009688;
`

/* Section: <a> element for the navigation bar. Text written sideways.
 *          Inherits the styling of the Link element                          */
export const Section = styled(Link)`

  /* Clean way that works on Chrome/IE but not Firefox due to bug with
   * flexbox and vertical mode                                                */
  /*
  flex: 1;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  */
  /* End of clean way                                                         */

  /* Hack to make it cross-browser */
  height: 64px;
  width: 33.33vh;
  transform: rotate(-90deg) translateX(-16.66vh) translateY(32px);
  transform-origin: 0 32px;
  /* End of hack */

  background: #009688;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  text-transform: uppercase;
  color: white !important;

  &:hover {
    cursor: pointer;
    background: #00695C;
    text-decoration: none;
  }
`

/* Portfolio     */

/* PortfolioBody: <div> element styling the root of the Portfolio app.
 *                Leave a margin for the Navigation bar                       */
export const PortfolioBody = styled.div`
  display: block;
  box-sizing: border-box;
  background: white;
  width: calc(100% - 64px);
  padding: 24px;
  margin: 0;
  margin-left: 64px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-bottom: 420px;

  & p {
    text-align: justify;
  }
`

/* Achievements       */

/* Preview: <iframe> element styled with a fixed width. Scaled down to fit on
 *          the document while showing off a better view of the pointed page  */
export const Preview = styled.iframe`
  transform: scale(0.3);
  transform-origin: 0 0;
  width: 1280;
  height: 720;
  border: none;
  position: relative;
  margin-top: 44px;
`

/* NoClick: <div> element removing the ability to Click & Drag on the page
 *          rendered in the Preview element.                                  */
export const NoClick = styled.div`
  display: block;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.01); /* Disable click & scroll on mobile */
`

/* Achievements: <div> element containing a list of Achievement. Grey background
 *               and inset shadow to make it look like coming from inside the
 *               main frame                                                   */
export const Achievements = styled.div`
  display: flex;
  background: #CCCCCC;
  padding: 8px;
  margin-left: -24px;
  margin-right: -24px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.16), inset 0 1px 3px rgba(0,0,0,0.23);
  flex-direction: horizontal;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

/* AchievementLink: <a> element serving both as link to a project's page, and
 *                  as body for the Achievement component.                    */
export const AchievementLink = styled(Link)`
  position: relative;
  display: block;
  width: 384px;
  height: 260px;
  margin-bottom: 16px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  overflow: hidden;
`

/* AchievementTitle: <div> element with absolute positioning sitting atop of a
 *                   Preview element to make a complete Achievement           */
export const AchievementTitle = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  line-height: 48px;
  color: #00695C;
  font-size: 160%;
  font-weight: bold;
  margin: 0;
  padding: 0;
`

/* AchievementHidden: <div> element mocking an Achievement component, with
 *                    the same width but no height. Invisible element helping
 *                    align children of the Achievements element to the left
 *                    despite the 'justify-content: space-around' property    */
export const AchievementHidden = styled.div`
  display: block;
  width: 384px;
  height: 0px;
`


/* Footer             */

/* Footer: <footer> element styled with a bit of margins                      */
export const Footer = styled.footer`
  margin-top: 16px;
  margin-bottom: -16px;
  text-align: right;
  width: 100%;
  display: block;
`

/* LinkedIn: <a> element showing the LinkedIn logo                            */
export const LinkedIn = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-left: 16px;
  background-image: url("linkedin.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

/* GitHub: <a> element showing the GitHub logo                                */
export const GitHub = styled(LinkedIn)`
  background-image: url("github.png");
`

/* FreeCodeCamp: <a> element showing FreeCodeCamp logo                        */
export const FreeCodeCamp = styled(LinkedIn)`
  background-image: url("fcc.png");
  width: 40px;
  height: 32px;
`
