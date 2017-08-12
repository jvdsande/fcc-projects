import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import styled, {injectGlobal} from 'styled-components'

import get from 'simple-get'

const Background = styled.div`
  position: relative;
  background-color: ${props => props.time == 'day' ? '#B5DBFB' : '#040523'};
  margin: auto;
  display: block;

  @media (orientation:landscape) {
    & {
      height: 81vh;
      width: 108vh;
    }
  }

  @media (orientation:portrait) {
    & {
      width: 96vw;
      height: 64vw;
    }
  }

  max-width: 640px;
  max-height: 480px;

  overflow: hidden;
  background-size: cover;
  background-image: url('./base-${props => props.time}.png');
  border-radius: 1vmin;
  box-shadow: 0 0 20px 10px #171717;
`

const Foreground = styled.div`
  display: inline-block;
  position: relative;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  margin: -2px;
  background-size: cover;
  background-image: url('./base-${props => props.time}.png');
`

const Panel = styled.div`
  background: black;
  font-family: sans-serif;
  color: white;
  position: absolute;
  width: 200px;
  height: 150px;
  bottom: 3vmin;
  right: 3vmin;
  border-radius: 1vmin;
  opacity: 0.5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  font-size: 20px;
`

const City = styled.div`
  font-size: 140%;
  font-weight: bold;
`

const Type = styled.div`
  font-size: 110%;
`

const Temp = styled.div`
  font-size: 220%;
  padding: 4px;
  color: ${props => props.temp < 25 ? (props.temp < 10 ? '#0288D1' : '#00796B') : 'E64A19'};
`

const Unit = styled.span`
  cursor: pointer;
`

const SunBody = styled.div`
  background-image: url('./icons/${props => props.time == 'day' ? 'sun' : 'moon'}.png');
  background-size: cover;

  width: 10%;
  height: 13.3333%;

  position: absolute;

  top: ${props => props.top}%;
  left: ${props => props.left}%;
`

const ParticleBody = styled.div`
  background-image: url('./icons/${props => props.particle}.png');
  background-size: cover;

  width: 10%;
  height: 13.3333%;

  position: absolute;

  top: ${props => props.top}%;
  left: ${props => props.left}%;

  transition: all 2s;
  transition-timing-function: linear;
`

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

class Sun extends Component {
  render() {
    let d = new Date()
    let h = d.getHours() + d.getMinutes()/60
    h = h - 6

    if(h < 0)
      h += 24

    if(this.props.time == 'night')
      h -= 12


    let left = h * 90 / 12
    let top = (h < 6 ? ((6 - h) * 20) / 6 : ((h - 6) * 20) / 6) + 4


    return <SunBody {...this.props} top={top} left={left}/>
  }
}

class Particle extends Component {
  P = ParticleBody

  constructor(props) {
    super(props)

    this.state = {
      left: Math.random() * 110 - 10,
      top: Math.random()*30,
      speed: Math.random()*2,
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
      this.P = ParticleBody
      this.setState({speed: Math.random()*2, top: Math.random()*30})
      this.interval = setInterval(this.update, 1000)
    }, 1000)
  }

  render() {
    let P = this.P
    if(P)
      return <P particle={this.props.particle || 'clouds'} top={parseInt(this.state.top) + parseInt(this.props.offsetTop)} left={this.state.left} />
    return null
  }
}

class Particles extends Component {
  render() {
    let config = this.props.config

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


class Weather extends Component {
  constructor() {
    super()

    this.state = {
      weather: {},
      unit: 'C',
      error: '',
    }

    this.refresh()

    // Refresh every minute
    setInterval(this.refresh, 60 * 1000)
  }

  refresh = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        get.concat(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`, (err, res, data) => {
          let weather = (JSON.parse(data))
          this.setState({weather})
        })
      })
    } else {
      let error = 'Error: please enable your location.'
      this.setState({error})
    }
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
    let temp = celsius

    if(this.state.unit == 'F') {
      temp = Math.floor(celsius * 1.8 + 32)
    }

    let time = new Date().getHours()
    time = time > 6 ? time < 18 ? 'day' : 'night' : 'night'

    return(
      <Background time={time}>
        <Sun time={time} />
        <Particles time={time} offsetTop={0} config={WeatherID[code]} />
        <Foreground time={time}>
          <Panel>
            <br />
            <City>{city} <small>{country}</small></City>
            <Type>{type}</Type>
            <Temp temp={celsius}>{temp}<Unit onClick={this.changeUnit}> °{this.state.unit}</Unit></Temp>
            <br />
          </Panel>
        </Foreground>
        <Particles time={time} offsetTop={5} config={WeatherID[code]} />
      </Background>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<Weather />, target)

injectGlobal`
  body {
    position: fixed;
    top: 0; bottom: 0;
    right: 0; left: 0;
    margin: 0;
    padding: 0;
    background: #212121;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
