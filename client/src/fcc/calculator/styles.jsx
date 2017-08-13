import styled, {injectGlobal} from 'styled-components'


injectGlobal`
  body {
    font-family: 'Open Sans', sans-serif;
    background: #555555;
    text-align: center;
  }
`


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

export const Formula = styled.div`
  height: 40%;
  padding: 10px;
  text-align: left;
  font-size: 140%;
  width: 100%;
  box-sizing: border-box;
`

export const Result = styled.div`
  height: 60%;
  padding: 10px;
  padding-top: 5px;
  text-align: right;
  font-size: 200%;
  width: 100%;
  box-sizing: border-box;
`

export const Button = styled.div`
  display: inline-block;
  position: relative;;
  width: ${props => props.double? 'calc(50% - 20px)':'calc(25% - 15px)'};
  height: 70px;
  line-height: 70px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
  border-radius: 4px;
  text-align: center;
  font-size: 48px;
  background: #FFFFFF;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 5px;

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
  }
`
