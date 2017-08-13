import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import get from 'simple-get'

import {Sun, Particles} from './particles'
import {
  Background, Foreground,
  Panel, ErrorPanel,
  Temp, Unit, Type, City,
} from './styles'

class Weather extends Component {
  constructor() {
    super()

    this.state = {
      weather: {},
      unit: 'C',
      error: '',
    }

    this.position = {
      lat: 0,
      lon: 0,
    }


    this.getPosition()

    // Refresh weather every minute
    setInterval(this.refresh, 60 * 1000)

    // Refresh position every 30 minutes
    setInterval(this.getPosition, 30 * 60 * 1000)
  }

  getPosition = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        this.position = {lat, lon}

        this.refresh()
      }, (err) => {
        let error = 'Error: please use HTTPS'
        this.setState({error})
      })
    } else {
      let error = 'Error: your browser does not support location-based services'
      this.setState({error})
    }
  }

  refresh = () => {
    let lat = this.position.lat
    let lon = this.position.lon
    get.concat(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`, (err, res, data) => {
      let weather = (JSON.parse(data))
      this.setState({weather})
    })
  }

  changeUnit = () => {
    let unit = this.state.unit == 'C' ? 'F' : 'C'
    this.setState({unit})
  }

  render() {
    let infos = this.state.weather
    let city = infos.name || ''
    let sys = infos.sys || {}
    let country = sys.country || ''
    if(country != '') {
      country = `(${country})`
    }

    let weather = (infos.weather || [{}])[0]
    let type = weather.main || ''
    let code = weather.id || 800

    let celsius = (infos.main || {}).temp || 0
    let temp = Math.floor(celsius)

    if(this.state.unit == 'F') {
      temp = Math.floor(celsius * 1.8 + 32)
    }

    let sunrise = new Date(0)
    sunrise.setUTCSeconds(sys.sunrise)
    sunrise = sunrise.getHours() + sunrise.getMinutes() / 60

    let sunset = new Date(0)
    sunset.setUTCSeconds(sys.sunset)
    sunset = sunset.getHours() + sunset.getMinutes() / 60

    let time = new Date()
    time = time.getHours() + time.getMinutes() / 60
    time = time > sunrise ? time < sunset ? 'day' : 'night' : 'night'


    let wind = infos.wind

    return(
      <Background time={time}>
        <Sun time={time} hours={{sunset, sunrise}} />
        <Particles time={time} offsetTop={0} config={code} wind={wind} />
        <Foreground time={time}>
          <Particles time={time} offsetTop={5} config={code} wind={wind} />
          {this.state.error != '' ? (
            <ErrorPanel>{this.state.error}</ErrorPanel>
          ):(
            <Panel>
              <br />
              <City>{city} <small>{country}</small></City>
              <Type>{type}</Type>
              <Temp temp={celsius}>{temp}<Unit onClick={this.changeUnit}> °{this.state.unit}</Unit></Temp>
              <br />
            </Panel>
          )}
        </Foreground>
      </Background>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<Weather />, target)
