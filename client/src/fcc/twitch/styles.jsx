/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the Twitch app                                                  */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled from 'styled-components'

/* Board: <div> element taking the complete page, with a display 'flex'       */
export const Board = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #212121;

  overflow: auto;

  font-family: 'Saira Semi Condensed', sans-serif;
`

/* Title: <div> element holding the Board's title, centered and taking the
          whole width                                                         */
export const Title = styled.div`
  flex: none;
  width: 100%;
  min-height: 100px;
  max-height: 160px;
  height: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 300%;
  color: white;

  text-shadow: 0 0 5px #171717;
`

/* Channel: <a> element used for displaying a channel                         */
export const Channel = styled.a`
  position: relative;
  flex: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #EEEEEE;
  box-shadow: 0 0 10px 5px #171717;

  margin: 1vmax 0.5vmax;
  border-radius: 0.3vmax;

  min-width: 200px;
  min-height: 200px;

  width: 30vw;
  height: 30vw;

  max-width: 320px;
  max-height: 320px;

  background-size: cover;
  background-position: center;
  background-image: url(${props => props.src});

  overflow: hidden;

  cursor: pointer;

  ${
    props => {
      if(!props.online)
        return 'filter: grayscale(100%);'
    }
  }
`

/* ChannelSpacer: Dummy <Channel> element to align the Board's children left
 * despite the 'space-around' property                                        */
export const ChannelSpacer = styled(Channel)`
  height: 0;
  max-height: 0;
  min-height: 0;
  margin-top: 0;
  margin-bottom: 0;
  box-shadow: none;
`

/* Prepare a common set of properties for the Name and Status elements        */
export const AbsoluteOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  min-height: 15%;
  background: rgba(0,0,0,0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

/* Name: <div> element for displaying the channel's name                      */
export const Name = styled(AbsoluteOverlay)`
  top: 0;

  font-size: 160%;
  font-weight: bold;
  letter-spacing: 3px;

  max-height: 30%;
`

/* Status: <div> element for displaying online channels' stream               */
export const Status = styled(AbsoluteOverlay)`
  bottom: 0;

  font-size: calc(5px + 1.75vmin);
  padding-top: 16px;
  padding-bottom: 16px;

  flex-direction: column;

  max-height: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
`

/* Now: <div> element used as a title for online channels                     */
export const Now = styled.div`
  font-size: 110%;
  color: #4CAF50;
  flex: none;
`
