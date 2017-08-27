/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point of the Portfolio project, and main page of www.jeremie-vds.com */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {SunBody, ParticleBody} from './styles'

/* Create an array containing the situation for clouds, rain, snow and lightning
 * for each open-weather code ID                                              */
const WeatherID = {
  200: {clouds: true,     rain: 'light',      lightning: 'light',   snow: false},
  201: {clouds: true,     rain: 'normal',     lightning: 'light',   snow: false},
  202: {clouds: true,     rain: 'heavy',      lightning: 'light',   snow: false},
  210: {clouds: true,     rain: false,        lightning: 'light',   snow: false},
  211: {clouds: true,     rain: false,        lightning: 'normal',  snow: false},
  212: {clouds: true,     rain: false,        lightning: 'heavy',   snow: false},
  221: {clouds: true,     rain: false,        lightning: 'normal',  snow: false},
  230: {clouds: true,     rain: 'light',      lightning: 'light',   snow: false},
  231: {clouds: true,     rain: 'normal',     lightning: 'light',   snow: false},
  232: {clouds: true,     rain: 'heavy',      lightning: 'light',   snow: false},

  300: {clouds: true,     rain: 'light',      lightning: false,     snow: false },
  301: {clouds: true,     rain: 'light',      lightning: false,     snow: false },
  302: {clouds: true,     rain: 'light' ,     lightning: false,     snow: false },
  310: {clouds: true,     rain: 'normal',     lightning: false,     snow: false },
  311: {clouds: true,     rain: 'normal',     lightning: false,     snow: false },
  312: {clouds: true,     rain: 'normal',     lightning: false,     snow: false },
  313: {clouds: true,     rain: 'normal',     lightning: false,     snow: false},
  314: {clouds: true,     rain: 'normal',     lightning: false,     snow: false},
  321: {clouds: true,     rain: 'normal',     lightning: false,     snow: false},

  500: {clouds: 'few',    rain: 'light',      lightning: false,     snow: false },
  501: {clouds: 'few',    rain: 'normal',     lightning: false,     snow: false },
  502: {clouds: 'few',    rain: 'heavy',      lightning: false,     snow: false },
  503: {clouds: 'few',    rain: 'very-heavy', lightning: false,     snow: false },
  504: {clouds: 'few',    rain: 'extreme',    lightning: false,     snow: false },
  511: {clouds: true,     rain: 'normal',     lightning: false,     snow: 'light'},
  520: {clouds: true,     rain: 'light',      lightning: false,     snow: false },
  521: {clouds: true,     rain: 'normal',     lightning: false,     snow: false },
  522: {clouds: true,     rain: 'heavy',      lightning: false,     snow: false },
  531: {clouds: true,     rain: 'normal',     lightning: false,     snow: false },

  600: {clouds: true,     rain: false,        lightning: false,     snow: 'light' },
  601: {clouds: true,     rain: false,        lightning: false,     snow: 'normal'},
  602: {clouds: true,     rain: false,        lightning: false,     snow: 'heavy'},
  611: {clouds: true,     rain: false,        lightning: false,     snow: 'light' },
  612: {clouds: true,     rain: false,        lightning: false,     snow: 'light' },
  615: {clouds: true,     rain: 'light',      lightning: false,     snow: 'light' },
  616: {clouds: true,     rain: 'light',      lightning: false,     snow: 'normal'},
  620: {clouds: true,     rain: false,        lightning: false,     snow: 'light' },
  621: {clouds: true,     rain: false,        lightning: false,     snow: 'normal'},
  622: {clouds: true,     rain: false,        lightning: false,     snow: 'heavy'},

  800: {clouds: false,    rain: false,        lightning: false,     snow: false},

  801: {clouds: 'few',    rain: false,        lightning: false,     snow: false},
  802: {clouds: 'normal', rain: false,        lightning: false,     snow: false},
  803: {clouds: 'lot',    rain: false,        lightning: false,     snow: false},
  804: {clouds: 'heavy',  rain: false,        lightning: false,     snow: false},
}

/* The Sun Component displays either the Sun or the Moon depending on the time.
 * The position of the Sun/Moon depends on the time of day/night              */
export class Sun extends Component {
  render() {
    /* Get the current time in hours                                          */
    let d = new Date()
    let h = d.getHours() + d.getMinutes()/60

    /* Get the sunrise and sunset time                                        */
    let sunrise = this.props.hours.sunrise || 6
    let sunset = this.props.hours.sunset || 18

    /* Offset the current time so that 'day' is from 0 to sunset, and night from
     * sunset to 24                                                           */
    h = (h - sunrise + 24) % 24

    /* Compute the length of day and night                                    */
    let dayLength = sunset - sunrise
    let nightLength = 24 - dayLength

    /* If the current time is greater than day length, then it's night and we
     * offset the time to be in the range of 0 to sunrise                     */
    if(h > dayLength)
      h -= dayLength

    /* Get the length corresponding to our current period                     */
    let length = this.props.time == 'day' ? dayLength : nightLength

    /* Get the corresponding half-length                                      */
    let halfLength = length / 2

    /* At the beginning of the period the sun/moon is completely in the West.
     * At the end of the period, it is completely in the East                 */
    let left = 100 * h / length - 5

    /* The sun/moon starts at the bottom of the sky. Then by half the period it
     * is at its highest, and then it goes down again                         */
    let top = (h - halfLength) / halfLength * 30

    if(h < halfLength) {
      top = 30 - (h / halfLength * 30)
    }

    /* Display the correctly positionned Sun or Moon                          */
    return <SunBody {...this.props} top={top} left={left}/>
  }
}

/* The Particle Component displays a cloud moving either from West to East or
 * from East to West depending on the wind                                    */
class Particle extends Component {
  constructor(props) {
    super(props)

    /* Get the speed of the wind from the props                               */
    let speed = Math.sqrt((props.wind || {speed: 2}).speed) / 2

    /* Create our React state holding the position of our particle, its speed
     * and a 'hide' state when it's out of the scope                          */
    this.state = {
      left: Math.random() * 110 - 10,
      top: Math.random()*30,
      speed: Math.random()*speed, /* Add a random factor to the speed         */
      hide: false,
    }

    /* Update the position of our particle every second                       */
    this.interval = setInterval(this.update, 1000)
  }

  /* Every second, compute the position of our particle based on its speed    */
  update = () => {
    let left = this.state.left + this.state.speed

    /* Reset our particle for reuse when it gets out of the screen            */
    if(left > 105)
      this.reset()
    else
      this.setState({left})
  }

  /* Create a new particle with a new top position and speed                  */
  reset = () => {
    /* Stop the update interval                                               */
    clearInterval(this.interval)
    /* Put the particle to the far left of the screen. Set hide to true to
     * destroy the old DOM element                                            */
    this.setState({left: -10, hide: true})

    /* Queue the new state generation for after the particles has been
     * destroyed                                                              */
    setTimeout(() => {
      let speed = Math.sqrt(this.props.wind.speed) / 2

      this.setState({speed: Math.random()*speed, top: Math.random()*30, hide: false})

      /* Re-program the update interval every second                          */
      this.interval = setInterval(this.update, 1000)
    }, 0)
  }

  /* Display our particle                                                     */
  render() {
    /* Do not display anything if the particle is currently hidden            */
    if(this.state.hide)
      return null

    /* Depending on the wind direction, invert the display                    */
    let direction = (this.props.wind || {}).deg > 180 ? 1 : -1
    let add = (direction == 1) ? 0 : 90


    return <ParticleBody
      particle={this.props.particle || 'clouds'}
      top={parseInt(this.state.top) + parseInt(this.props.offsetTop)}
      left={add + direction * this.state.left}
      {...this.props}
    />
  }
}

/* The Particles Component generate a list of particles based on the current
 * weather code                                                               */
export class Particles extends Component {
  render() {
    /* Get the configuration related to the current code                      */
    let config = WeatherID[this.props.config]

    /* Initialize an array of particles                                       */
    let particles = []

    /* Helper function to push a given number of particles into the array     */
    function addParticle(particle, number) {
      while(number--)
        particles.push(particle)
    }


    /* Check the clouds option to see how many clouds to add                  */
    switch(config.clouds) {
      case 'few':
        addParticle('clouds', 1)
        break
      case 'normal':
        addParticle('clouds', 2)
        break
      case 'lot':
        addParticle('clouds', 5)
        break
      case 'heavy':
        addParticle('clouds', 8)
        break
      case true:
        addParticle('clouds', 2)
    }

    /* Check the rain option to see how many rain clouds to add. No break
     * instructions to cummulate rain clouds between conditions. Also adds
     * lightning rain clouds for case of rain + lightning                     */
    switch(config.rain) {
      case 'extreme':
        addParticle('rain-heavy', 2)
        if(config.lightning)
          addParticle('lightning-rain-heavy', 2)
      case 'very-heavy':
        addParticle('rain-heavy', 1)
        if(config.lightning)
          addParticle('lightning-rain-heavy', 1)
      case 'heavy':
        addParticle('rain-heavy', 2)
        if(config.lightning)
          addParticle('lightning-rain-heavy', 2)
      case 'normal':
        addParticle('rain-normal', 2)
        if(config.lightning)
          addParticle('lightning-rain-normal', 2)
      case 'light':
        addParticle('rain-normal', 1)
        if(config.lightning)
          addParticle('lightning-rain-normal', 1)
    }

    /* When there is not rain, check the lightning condition to add lightning
     * clouds                                                                 */
    if(!config.rain) {
      switch(config.lightning) {
        case 'heavy':
          addParticle('lightning-heavy', 2)
        case 'normal':
          addParticle('lightning-normal', 2)
        case 'light':
          addParticle('lightning-normal', 1)
      }
    }

    /* Check the snow condition to add snowing clouds                         */
    switch(config.snow) {
      case 'heavy':
        addParticle('snow-heavy', 3)
      case 'normal':
        addParticle('snow-normal', 2)
      case 'light':
        addParticle('snow-normal', 1)
    }

    /* Render the array of particles                                          */
    return (
      <span>
        {particles.map(p => <Particle particle={p} {...this.props}/>)}
      </span>
    )
  }
}
