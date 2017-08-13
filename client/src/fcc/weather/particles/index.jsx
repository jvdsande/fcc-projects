import React, {Component} from 'react'
import {SunBody, ParticleBody} from './styles'


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

export class Sun extends Component {
  render() {
    let d = new Date()
    let h = d.getHours() + d.getMinutes()/60

    let sunrise = this.props.hours.sunrise || 6
    let sunset = this.props.hours.sunset || 18

    h = (h - sunrise + 24) % 24

    let dayLength = sunset - sunrise
    let nightLength = 24 - dayLength

    if(h > dayLength)
      h -= dayLength

    let length = this.props.time == 'day' ? dayLength : nightLength
    let halfLength = length / 2

    let left = 100 * h / length - 5

    let top = (h - halfLength) / halfLength * 30
    if(h < halfLength) {
      top = 30 - (h / halfLength * 30)
    }

    return <SunBody {...this.props} top={top} left={left}/>
  }
}

class Particle extends Component {
  P = ParticleBody

  constructor(props) {
    super(props)

    let speed = Math.sqrt((props.wind || {}).speed) / 2
    this.state = {
      left: Math.random() * 110 - 10,
      top: Math.random()*30,
      speed: Math.random()*speed,
    }

    this.interval = setInterval(this.update, 1000)
  }

  update = () => {
    let left = this.state.left + this.state.speed
    if(left > 105)
      this.reset()
    else
      this.setState({left})
  }

  reset = () => {
    clearInterval(this.interval)
    this.P = null
    this.setState({left: -10})
    setTimeout(() => {
      let speed = Math.sqrt(this.props.wind.speed) / 2

      this.P = ParticleBody
      this.setState({speed: Math.random()*speed, top: Math.random()*30})
      this.interval = setInterval(this.update, 1000)
    }, 1000)
  }

  render() {
    let P = this.P
    let direction = (this.props.wind || {}).deg > 180 ? 1 : -1
    let add = 0

    if(direction < 0)
      add = 90

    if(P)
      return <P particle={this.props.particle || 'clouds'} top={parseInt(this.state.top) + parseInt(this.props.offsetTop)} left={add + direction * this.state.left} {...this.props}/>
    return null
  }
}

export class Particles extends Component {
  render() {
    let config = WeatherID[this.props.config]

    let particles = []

    function addParticle(particle, number) {
      while(number--)
        particles.push(particle)
    }

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

    switch(config.snow) {
      case 'heavy':
        addParticle('snow-heavy', 3)
      case 'normal':
        addParticle('snow-normal', 2)
      case 'light':
        addParticle('snow-normal', 1)
    }

    return (
      <span>
        {particles.map(p => <Particle particle={p} {...this.props}/>)}
      </span>
    )
  }
}
