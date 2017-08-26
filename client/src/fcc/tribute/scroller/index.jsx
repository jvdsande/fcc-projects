/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point for the Scroller component                                     */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {
  Body, Image,
} from './styles'

/* The Scroller Component allows the creation of a Parallax element which
 * scrolls more slowly (70%) than the rest of the page                        */
export default class Scroller extends Component {
  constructor() {
    super()

    /* Prepare a reference to the root element                                */
    this.body = null

    /* Add a 'scroll' listener to the whole window event                      */
    window.addEventListener('scroll', () => {
      /* If the root element has been rendered, use the scroll position of the
       * window to move the element accordingly                               */
      if(this.body) {
        this.body.scrollTop = window.scrollY * 0.7
      }
    })
  }

  /* Never re-render the component  */
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Body innerRef={(b) => {
        /* Get the reference to the <Body> element. 'innerRef' is used to work
         * with styled-components                                             */
        this.body = b

        /* Place the element correctly for its first render, in case the page is
         * reloaded while scrolled                                            */
        b.scrollTop = window.scrollY * 0.7
      }}>

        {/* Render the children of the element                                */}
        {this.props.children}
      </Body>
    )
  }
}
