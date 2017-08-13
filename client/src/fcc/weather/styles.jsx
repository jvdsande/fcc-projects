import styled, {injectGlobal} from 'styled-components'


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
  background-size: cover;
  background-image: url('./base-${props => props.time}.png');
  border-radius: 1vmin;
  box-shadow: 0 0 20px 10px #171717;
`

export const Foreground = styled.div`
  display: inline-block;
  position: relative;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  margin: -2px;
  background-size: cover;
  background-image: url('./base-${props => props.time}.png');
`

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

export const ErrorPanel = styled(Panel)`
  top: 3vmin;
  left: 3vmin;
  bottom: 3vmin;
  right: 3vmin;
  font-size: 30px;
`


export const City = styled.div`
  font-size: 140%;
  font-weight: bold;
  padding-left: 16px;
  padding-right: 16px;
`

export const Type = styled.div`
  font-size: 110%;
`

export const Temp = styled.div`
  font-size: 220%;
  padding: 4px;
  color: ${props => props.temp < 25 ? (props.temp < 10 ? '#0288D1' : '#00796B') : 'E64A19'};
`

export const Unit = styled.span`
  cursor: pointer;
  font-weight: bold;
`
