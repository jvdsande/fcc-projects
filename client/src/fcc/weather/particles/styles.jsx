import styled from 'styled-components'

export const SunBody = styled.div`
  background-image: url('./icons/${props => props.time == 'day' ? 'sun' : 'moon'}.png');
  background-size: cover;

  width: 10%;
  height: 13.3333%;

  position: absolute;

  top: ${props => props.top}%;
  left: ${props => props.left}%;
`

export const ParticleBody = styled.div`
  background-image: url('./icons/${props => props.particle}.png');
  background-size: cover;

  opacity: ${props => props.time == 'day' ? 1 : 0.8}

  width: 10%;
  height: 13.3333%;

  position: absolute;

  top: ${props => props.top}%;
  left: ${props => props.left}%;

  transition: all 2s;
  transition-timing-function: linear;
`
