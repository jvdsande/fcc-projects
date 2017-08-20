/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Background component with on-load shape generation and on-prop color       */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {Back} from './styles'

export default class Background extends Component {
  constructor() {
    super()

    /* Generate a random point in the range of (-50;-50) to (0:0) or
       (100;100) to (150;150)                                                 */
    function randomPoint() {
      let x = Math.floor(Math.random() * -50)
      let y = Math.floor(Math.random() * -50)
      x += Math.floor(Math.random() * 2) * 200
      y += Math.floor(Math.random() * 2) * 200
      return x + "," + y
    }

    let pa = randomPoint()
    let pb = randomPoint()

    this.triangles = []

    /* Create three triangles                                                 */
    let i = 3
    while(i--) {
      let pc = randomPoint()
      this.triangles.push({pa,pb,pc})
      pa = pb
      pb = pc
    }
  }

  /* Only update the component when the color changes                         */
  shouldComponentUpdate(nProps) {
    return (nProps.color != this.props.color)
  }

  render()
  {
    /* Array of colors to be chosen from. Each cell is an array of gradients  */
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

    /* Cycle through the color gradients                                      */
    let idx = Math.floor(Math.random()*6)
    let c = this.props.color
    function nextColor() {
      idx = (idx+1)%6
      return colors[c][idx]
    }

    /* Create the polygon element with a random color                         */
    function createTriangle(i) {
      let t = <polygon points={i.pa + " " + i.pb + " " + i.pc} style={{
        fill: nextColor(),
        transition: "all 1s"
      }}/>
      return t
    }


    return (
      <Back>
        {/* Create an SVG element with a (0;0) -> (100;100 viewport)          */}
        <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Fill the viewport will a first color                            */}
          <polygon points="-100,-100 300,-100 300,300, -100,300" style={{
            fill: nextColor(),
            transition: "all 1s"
          }}/>

          {/* Add a first stripe                                              */}
          <polygon points="-100,-100 300,300 -100,300" style={{
            fill: nextColor(),
            transition: "all 1s"
          }}/>

          {/* Draw all triangles                                              */}
          {
            this.triangles.map(i => createTriangle(i))
          }
        </svg>
      </Back>
    )
  }
}
