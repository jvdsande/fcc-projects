/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point and main component for the Weather project                     */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import jsonp to use the weather AP                                         */
import jsonp from 'jsonp'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {
  Background, Foreground,
  Panel, ErrorPanel,
  Temp, Unit, Type, City,
} from './styles'

/* Import the Sun and Particles components                                    */
import {Sun, Particles} from './particles'


/* The Weather component is the main component of our app. It renders a weather
 * card inspired by Google's Material Design                                  */
class Weather extends Component {
  constructor() {
    super()

    /* Prepare our React state to store options and weather information       */
    this.state = {
      weather: {},
      unit: 'C',
      error: '',
      position: {lat: 0, lon: 0}
    }

    /* Get the current position                                               */
    this.getPosition()

    /* Refresh weather every minute                                           */
    setInterval(this.refresh, 60 * 1000)

    /* Refresh position every 30 minutes                                      */
    setInterval(this.getPosition, 30 * 60 * 1000)
  }

  /* Use the built-in navigator API to get the user's position                */
  getPosition = () => {
    /* Check if the navigator supports geolocation                            */
    if(navigator.geolocation) {

      /* Get the user's position                                              */
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        /* Update the state with the new position                             */
        this.setState({position: {lat, lon}})

        /* Queue a refresh of the app after the last state update             */
        setTimeout(this.refresh, 0)
      },
      /* In case of error, show an error message                              */
      (err) => {
        let error = 'Error: please use HTTPS'
        this.setState({error})
      })
    }
    /* If not, display an error message accordingly                           */
    else {
      let error = 'Error: your browser does not support location-based services'
      this.setState({error})
    }
  }

  /* Check the weather through the FCC weather API using the current position */
  refresh = () => {
    let lat = this.state.position.lat
    let lon = this.state.position.lon
    jsonp(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`, (err, weather) => this.setState({weather}))
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

/* If the page was loaded over http, redirect to the https version            */
if(window.location.protocol == 'http:')
{
  window.location.href = 'https://'+window.location.hostname+window.location.pathname
}

let target = document.getElementById('root')
ReactDOM.render(<Weather />, target)
