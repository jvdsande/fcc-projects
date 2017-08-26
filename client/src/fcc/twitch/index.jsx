/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point and main component for the Twitch project                      */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import jsonp to handle the JSON requests                                   */
import jsonp from 'jsonp'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {
  Board, Channel,
  ChannelSpacer,
  Name, Status, Title, Now,
} from './styles'


/* Create an array of channel to watch                                        */
const channelNames = [
  'freecodecamp',
  'salakar',
  'noobs2ninjas',
  'RobotCaleb',
  'vfujin',
  'omatum_greg',
  'lobosjr',
]


/* The Twitch component shows a list of Twitch channels, with the corresponding
 * status. It's the root of our appliation and renders the whole page         */
class Twitch extends Component {
  constructor() {
    super()

    /* Prepare an named array to hold the status of each channel              */
    this.state = {
      channels: {}
    }

    /* Load information about the channels                                    */
    this.refresh()

    /* Refresh the status of the channels every minute                        */
    setInterval(this.refresh, 60 * 1000)
  }

  /* Use the wind-bow.gomix API to fetch data from Twitch                     */
  loadFromTwitch = (channel, path) => {
    /* Load the required path on the passed channel                           */
    jsonp(`https://wind-bow.gomix.me/twitch-api/${path}/${channel}`, (err, data) => {
      /* Get the current list of channels                                     */
      let channels = this.state.channels

      /* Initialize the channel's object if it does not exist                 */
      channels[channel] = channels[channel] || {}

      /* Convert the path to an Object key to be used in render               */
      const pathKeys = {
        channels: 'info',
        streams: 'streams'
      }
      let key = pathKeys[path]

      /* Add the loaded data to the channel's object                          */
      channels[channel][key] = data

      /* Update the list of channels                                          */
      this.setState({channels})
    })
  }

  /* Refresh the status of the channels                                       */
  refresh = () => {
    /* We start by looping through the channelNames array                     */
    channelNames.map(c => {
      /* First we load the general channel infos                              */
      this.loadFromTwitch(c, 'channels')

      /* Then we load infos specific to the current stream                    */
      this.loadFromTwitch(c, 'streams')
    })
  }

  render() {
    /* Get all the loaded channels name                                       */
    let channels = Object.keys(this.state.channels)

    /* Filter out the channels where either the streams infos or general infos
     * are not yet loaded                                                     */
    channels = channels.filter(c => {
      c = this.state.channels[c]
      return (c.info && c.streams)
    })

    /* Sort the channels by name, with the online channels showing first      */
    channels = channels.sort((a, b) => {
      a = this.state.channels[a]
      b = this.state.channels[b]

      /* Check if A is online                                                 */
      if(a.streams.stream) {
        /* If it is, check if B is online                                     */
        if(b.streams.stream) {
          /* If B and A are both online, sort by name                         */
          return a.info.display_name[0].toUpperCase() > b.info.display_name[0].toUpperCase() ? 1 : -1
        }

        /* If only A is online, then A comes first                            */
        return -1
      } else {
        /* If A is not online, check if B is online                           */
        if(b.streams.stream) {
          /* If B is online and not A, then B comes first                     */
          return 1
        }

        /* If both are offline, sort by name                                  */
        return a.info.display_name[0].toUpperCase() > b.info.display_name[0].toUpperCase() ? 1 : -1
      }
    })

    /* Render our component                                                   */
    return (
      <Board>
        {/* First we add a title to our list of channels                      */}
        <Title>Twitch Channels</Title>

        {/* Then we loop through our sorted list                              */}
        {channels.map(c => {
          /* Get the current channel                                          */
          let channel = this.state.channels[c]

          /* Check if the channel is online                                   */
          let online = channel.info.status && channel.streams.stream
          /* Get the name of the stream, if any                               */
          let status = (channel.info.status || '')

          return (
            <Channel online={online} src={channel.info.logo || './default.png'} href={channel.info.url || ''}>
              {/* Create a Channel element reflecting the status and showing the
                * logo of the channel                                         */}

              {/* Add the channel's name                                      */}
              <Name>{channel.info.display_name || c}</Name>

              {/* If the channel is online, append information on the stream  */}
              {online ? <Status><Now>Now Streaming:</Now>{status}</Status> : null}
            </Channel>
          )
        })}

        {/* The ChannelSpacer allows to align channels to the left despite the
          * flexbox 'space-around' property                                   */}
        <ChannelSpacer />
        <ChannelSpacer />
        <ChannelSpacer />
        <ChannelSpacer />
        <ChannelSpacer />
        <ChannelSpacer />
      </Board>
    )
  }
}


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the Twitch project                                                  */
ReactDOM.render(<Twitch />, target)
