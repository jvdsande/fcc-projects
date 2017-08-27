/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Particles and Sun Components                                */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled from 'styled-components'

/* SunBody: <div> element for displaying the sun or the moon. It's top and left
            positions are dictated by props                                   */
export const SunBody = styled.div`
  background-image: url('./icons/${props => props.time == 'day' ? 'sun' : 'moon'}.png');
  background-size: cover;

  width: 10%;
  height: 13.3333%;

  position: absolute;

  top: ${props => props.top}%;
  left: ${props => props.left}%;
`


/* ParticleBody: <div> element for displaying a cloud. It's image depends on the
                 type of cloud (normal, rain, lightning...),and it's top and left
                 positions are controlled by props. It also has a transition of
                 1s to make the change in 'left' property smoother            */
export const ParticleBody = styled.div`
  background-image: url('./icons/${props => props.particle}.png');
  background-size: cover;

  opacity: ${props => props.time == 'day' ? 1 : 0.8};

  width: 10%;
  height: 13.3333%;

  position: absolute;

  top: ${props => props.top}%;
  left: ${props => props.left}%;

  transition: all 1s;
  transition-timing-function: linear;
`
