/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point of the Portfolio project, and main page of www.jeremie-vds.com */
/******************************************************************************/


/* Import React as our main framework                                         */
import React from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import the Portfolio component                                             */
import {Portfolio} from './app'


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the Portfolio project                                               */
ReactDOM.render(<Portfolio />, target)
