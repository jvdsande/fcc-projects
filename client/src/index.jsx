import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'

import {Portfolio} from './app'


let ReactRoot = ReactDOM.render(<Portfolio />, document.getElementById('root'))

injectGlobal `
  * {
    font-family: sans-serif;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    background: #888888;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }


  h2 {
    color: #009688;
    font-size: 130%;
  }

  h3 {
    color: #00796B;
    text-align: left;
    font-size: 150%;
    font-weight: bold;
  }
`
