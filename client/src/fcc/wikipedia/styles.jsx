/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Wikipedia app                                               */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled from 'styled-components'


/* Body: <div> element used as our main page body. Fills the complete page    */
export const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: auto;

  background: #EEEEEE;
  font-family: 'Bree Serif', serif;
  font-size: 120%;
  text-align: center;
`

/* Header: <div> element used as the page title                               */
export const Header = styled.div`
  width: 100%;
  text-align: center;
  font-size: 300%;
`

/* SearchBox: <input> element styled with a search icon                       */
export const SearchBox = styled.input`
  width: 320px;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  padding-bottom: 4px;
  font-size: 120%;
  border: 2px solid black;
  border-radius: 100px;
  display: inline-block;
  margin: 16px;
  outline: none;
  font-family: inherit;

  background-image: url('./search.png');
  background-size: contain;
  background-position: calc(100% - 3px) center;
  background-repeat: no-repeat;
`

/* Prepare a set of common properties for Random and Link                     */
const A = styled.a`
  color: #AD1457;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`

/* Random: <a> element to load a random article                               */
export const Random = styled(A)`
  display: inline-block;
  margin-bottom: 16px;
`

/* Articles: <div> element with a 'flex' display, to hold a list of articles  */
export const Articles = styled.div`
  display: flex;

  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
`

/* Article: <div> element containing the preview of an article                */
export const Article = styled.div`
  position: relative;

  max-width: 95%;
  width: 440px;
  min-width: calc(20% - 16px);

  text-align: center;

  font-size: 16px;

  padding: 16px;
  margin: 8px;

  background: #FFFFFF;
  box-shadow: 0 0 5px 3px #E0E0E0;

  box-sizing: border-box;

  border-radius: 5px;
`

/* ArticleSpacer: dummy <Article> to align the Article left despite the
                  'space-around' property of Articles                         */
export const ArticleSpacer = styled(Article)`
  height: 0;
  padding: 0;
  box-shadow: none;
`

/* Thumbnail: <img> element for showing the article's thumbnail image         */
export const Thumbnail = styled.img`
  display: inline-block;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  margin-bottom: 16px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 5px #E0E0E0;
`

/* Title: <div> element to hold the article's title                           */
export const Title = styled.div`
  font-size: 110%;
  margin-bottom: 10px;
`

/* Content: <div> element to hold the article's extract                       */
export const Content = styled.div`
  color: #424242;
  text-align: justify;

  /* The padding-bottom reserve space after the longest article content for
     the Link element                                                         */
  padding-bottom: 24px;
`

/* Link: <a> element to link to the full article                              */
export const Link = styled(A)`
  color: #AD1457;
  text-align: right;
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
`
