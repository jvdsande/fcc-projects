import React, {Component} from 'react'

import {Back} from './styles'

export default class Background extends Component {
  constructor() {
    super()

    function randomPoint() {
      let x = Math.floor(Math.random() * 250 - 50)
      let y = Math.floor(Math.random() * 250 - 50)
      return x + "," + y
    }

    let pa = randomPoint()
    let pb = randomPoint()

    this.triangles = []

    let i = 300
    while(i--) {
      let pc = randomPoint()
      this.triangles.push({pa,pb,pc})
      pa = pb
      pb = pc
    }
  }

  shouldComponentUpdate(nProps) {
    return (nProps.color != this.props.color)
  }

  render()
  {
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1
        ? "0" + hex
        : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
    }

    const colors = [
      [ // Grey
        '#78909C',
        '#607D8B',
        '#546E7A',
        '#455A64',
        '#37474F',
       '#263238'
     ],
      [ // Green
        '#66BB6A',
        '#4CAF50',
        '#43A047',
        '#388E3C',
        '#2E7D32',
        '#1B5E20'
      ],
      [ // Red
        '#EF5350',
        '#F44336',
        '#E53935',
        '#D32F2F',
        '#C62828',
        '#B71C1C'
      ],
    ]

    let idx = 0
    let c = this.props.color
    function randomColor() {
      idx = (idx+1)%6
      return colors[c][idx]
    }

    function createTriangle(i) {
      let t = <polygon points={i.pa + " " + i.pb + " " + i.pc} style={{
        fill: randomColor(),
        transition: "all 1s"
      }}/>
      return t
    }


    return (
      <Back>
        <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <polygon points="-100,-100 300,-100 300,300" style={{
            fill: randomColor(),
            transition: "all 1s"
          }}/>
          <polygon points="-100,-100 300,300 -100,300" style={{
            fill: randomColor(),
            transition: "all 1s"
          }}/>
          {
            this.triangles.map(function(i) {
              return createTriangle(i)
            })
          }
        </svg>
      </Back>
    )
  }
}
