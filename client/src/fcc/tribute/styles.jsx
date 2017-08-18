import styled, {injectGlobal} from 'styled-components'

injectGlobal`
  body {
    background-color: #EEEEEE;
    padding: 0;
    margin: 0;
    font-family: 'Exo', sans-serif;
  }
`

export const Panel = styled.div`
  position: relative;
  width: 100%;
  height:60vh;
  margin-bottom: 70vh;
  background-color: #212121;
  box-shadow: 0 0 5px 3px #171717;
  color: #FAFAFA;
  padding: 32px;
  box-sizing: border-box;
  text-align: center;
  font-size: calc(10px + 1.5vmin);
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  &:nth-child(4) {
    margin-bottom: 55vh;
  }
`

export const SongQuote = styled.div`
  position: absolute;
  bottom: -40vh;

  text-align: left;
  font-size: calc(10px + 1.5vmin);

  left: 5%;
  font-weight: bold;
  text-shadow: 0 0 25px #212121, 0 0 1px black;
  color: #FAFAFA;
  font-family: 'Rock Salt', sans-serif;

  div:nth-child(3) & {
    text-align: center;
    left: auto;
    right: 10%;
  }

  div:nth-child(4) & {
    text-align: right;
    left: auto;
    right: 5%;
  }
`

export const ScrollerImage = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 100vh;
`

export const ScrollerBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 25vh;
  overflow: hidden;
  z-index: -1;
`

export const Name = styled.div`
  font-size: 250%;
  font-weight: bold;
  margin: 16px;
  flex: 1;
`

export const Title = styled.div`
  font-size: 150%;
  flex: 1;
  margin-bottom: 16px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 960px;
  text-align: justify;
  flex: 2;
  color: #CBCBCB;
`

export const Quote = styled.div`
  margin: 16px;
  font-style: italic;
  text-align: center;
  color: #FF6F00;
`

export const More = styled(Panel)`
  height: auto;
  margin: 0;

  & a {
    text-decoration: none;
    color: #FFAB00;
    font-weight: bold;
  }
`
