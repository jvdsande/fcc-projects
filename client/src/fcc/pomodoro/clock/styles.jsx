import styled from 'styled-components'

export const Body = styled.div`
  font-size: 22vmin;
  font-weight: bold;
  text-shadow: 0 0 8px #9E9E9E;
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`

export const Reset = styled.div`
  background-image: url('./reset.png');
  background-position: center center;
  background-size: cover;
  filter: invert(95%);
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
  width: 160px;
  height: 160px;
  position: relative;
  display: ${props => props.show?'inline-block':'none'}
`

export const ResetPlacer = styled(Reset)`
  background: none
`
