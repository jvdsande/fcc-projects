import styled, {injectGlobal} from 'styled-components'

injectGlobal`
  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    background: #888888;
    color: #212121;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }
`


export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
