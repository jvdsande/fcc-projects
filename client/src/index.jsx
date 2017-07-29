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

  #portfolio {
    display: block;
    box-sizing: border-box;
    background: white;
    width: calc(100% - 64px);
    padding: 24px;
    margin: 0;
    margin-left: 64px;
    border-radius: 2px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin-bottom: 420px;
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

  .achievements {
    display: flex;
    background: #CCCCCC;
    padding: 8px;
    margin-left: -24px;
    margin-right: -24px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.16), inset 0 1px 3px rgba(0,0,0,0.23);
    flex-direction: horizontal;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  p {
    text-align: justify;
  }


  .achievement {
    position: relative;
    display: block;
    width: 420px;
    height: 320px;
    margin-bottom: 16px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    overflow: hidden;
  }

  .achievement h1 {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    line-height: 48px;
    color: #00695C;
    font-size: 160%;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  .achievement h1::after {
    display: none;
  }

  
  .achievement-hidden {
    display: block;
    width: 420px;
    height: 0px;
  }


  footer {
    margin-top: 16px;
    margin-bottom: -16px;
    text-align: right;
    width: 100%;
    display: block;
  }
`
