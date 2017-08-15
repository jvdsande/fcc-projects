import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import jsonp from 'jsonp'

import {
  Board, Channel,
  ChannelSpacer,
  Name, Status, Title, Now,
} from './styles'

const channelNames = [
  'freecodecamp',
  'salakar',
  'noobs2ninjas',
  'RobotCaleb',
  'vfujin',
  'omatum_greg',
  'lobosjr',
]

class Twitch extends Component {
  constructor() {
    super()

    this.channels = {}
    this.state = {
      loaded: 0
    }


    channelNames.map(c => {
      jsonp(`https://wind-bow.gomix.me/twitch-api/streams/${c}`, (err, data) => {
        let loaded = this.state.loaded
        if(this.channels[c] !== undefined) {
          loaded ++
        } else {
          this.channels[c] = {}
        }

        this.channels[c].streams = data

        this.setState({loaded})
      })
      jsonp(`https://wind-bow.gomix.me/twitch-api/channels/${c}`, (err, data) => {
        let loaded = this.state.loaded
        if(this.channels[c] !== undefined) {
          loaded ++
        } else {
          this.channels[c] = {}
        }

        this.channels[c].info = data

        this.setState({loaded})
      })
    })

  }

  render() {
    let channels = []
    if(this.state.loaded == channelNames.length) {
      channels = Object.keys(this.channels)


      channels = channels.sort((a, b) => {
        a = this.channels[a]
        b = this.channels[b]
        if(a.streams.stream) {
          if(b.streams.stream) {
            return a.info.display_name[0].toUpperCase() > b.info.display_name[0].toUpperCase() ? 1 : -1
          }
          return -1
        } else {
          if(b.streams.stream) {
            return 1
          }
          return a.info.display_name[0].toUpperCase() > b.info.display_name[0].toUpperCase() ? 1 : -1
        }
      })
    }
    return (
      <Board>
        <Title>Twitch Channels</Title>
        {channels.map(c => {
          let channel = this.channels[c]

          let online = channel.info.status && channel.streams.stream
          let status = (channel.info.status || '')

          if(channel.info) {
            return (
              <Channel online={online} src={channel.info.logo || './default.png'} href={channel.info.url || ''}>
                <Name>{channel.info.display_name || c}</Name>
                {online ? <Status><Now>Now Streaming:</Now>{status}</Status> : null}

              </Channel>
            )
          }

          return null
        })}
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

let target = document.getElementById('root')
ReactDOM.render(
  <Twitch />, target)
