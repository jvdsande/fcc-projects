import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import styled, {injectGlobal} from 'styled-components'

import jsonp from 'jsonp'

const channels = [
  'ESL_SC2',
  'OgamingSC2',
  'cretetion',
  'freecodecamp',
  'storbeck',
  'habathcx',
  'RobotCaleb',
  'noobs2ninjas'
]

class Twitch extends Component {
  constructor() {
    super()

    this.channels = {}
    this.state = {
      loaded: 0
    }


    channels.map(c => {
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
    if(this.state.loaded == channels.length) {
      console.log(this.channels)
    }
    return (
      <div>
        {this.state.loaded == channels.length ? 'All loaded' : 'Loading...'}
        <br />
        {this.state.loaded == channels.length ? JSON.stringify(this.channels) : ''} </div>
    )
  }
}

let target = document.getElementById('root')
ReactDOM.render(
  <Twitch />, target)
