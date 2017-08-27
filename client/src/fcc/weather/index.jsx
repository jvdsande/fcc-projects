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

/* Import jsonp to use the weather API                                        */
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

    /* Prepare the API's url                                                  */
    let url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`

    /* Fetch the weather data, and update the state accordingly               */
    jsonp(url, (err, weather) => this.setState({weather}))
  }

  /* Update the unit used for displaying the temperature                      */
  changeUnit = () => {
    let unit = this.state.unit == 'C' ? 'F' : 'C'
    this.setState({unit})
  }

  /* Render the application                                                   */
  render() {
    /* Get the complete information fetched from the API                      */
    let infos = this.state.weather

    /* Extract the City name if any                                           */
    let city = infos.name || ''

    /* Extract the sys parameter                                              */
    let sys = infos.sys || {}

    /* Get the Country code if any                                            */
    let country = sys.country ? `(${sys.country})` : ''

    /* Get the Weather information                                            */
    let weather = (infos.weather || [{}])[0]

    /* Extract the type, if any                                               */
    let type = weather.main || ''

    /* Extract the type code                                                  */
    let code = weather.id || 800

    /* Get the current temperature in celsius                                 */
    let celsius = (infos.main || {}).temp || 0

    /* Get the temperature either in celsius or in farenheit                  */
    let temp = this.state.unit == 'C' ? (celsius) : (celsius * 1.8 + 32)
    /* Round the temperature to one digit after the dot                       */
    temp = Math.floor(temp * 10) / 10

    /* Get the sunrise time for the day, in hours                             */
    let sunrise = new Date(0)
    sunrise.setUTCSeconds(sys.sunrise)
    sunrise = sunrise.getHours() + sunrise.getMinutes() / 60

    /* Get the sunset time for the day, in hours                              */
    let sunset = new Date(0)
    sunset.setUTCSeconds(sys.sunset)
    sunset = sunset.getHours() + sunset.getMinutes() / 60

    /* Get the current time                                                   */
    let time = new Date()
    time = time.getHours() + time.getMinutes() / 60

    /* Check if it's night or day                                             */
    time = (time < sunset && time > sunrise) ? 'day' : 'night'

    /* Get wind information                                                   */
    let wind = infos.wind

    return(
      <Background time={time}>
        {/* The Background element changes color to reflect day or night      */}

        {/* Add the sun element, positionned according to the current time and
          * sunset/sunrise                                                    */}
        <Sun time={time} hours={{sunset, sunrise}} />

        {/* Add a bunch of clouds depending on the weather code, below the
          * Foreground                                                        */}
        <Particles time={time} offsetTop={0} config={code} wind={wind} />

        {/* The Foreground shows a mountain with trees. It reflects day or
          * night                                                             */}
        <Foreground time={time}>

          {/* Add a bunch of clouds depending on the weather code, above the
            * Foreground to give a depth effect                               */}
          <Particles time={time} offsetTop={5} config={code} wind={wind} />

          {/* If there was an error fetching the information, display an error
            * message, else, display the weather                              */}
          {
            this.state.error != '' ?
            (
              <ErrorPanel>{this.state.error}</ErrorPanel>
            )
            :
            (
              <Panel>
                <br />
                {/* Display the City's name and the Country                   */}
                <City>{city} <small>{country}</small></City>

                {/* Show information about the current weather                */}
                <Type>{type}</Type>

                {/* Print the temperature. Clicking on the unit changes between
                  * celsius and farenheit. The color depends on the current
                  * temperature to reflect if its cold, average or hot        */}
                <Temp temp={celsius}>
                  {temp}<Unit onClick={this.changeUnit}> °{this.state.unit}</Unit>
                </Temp>
                <br />
              </Panel>
            )
          }
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


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the Weather project                                                 */
ReactDOM.render(<Weather />, target)
