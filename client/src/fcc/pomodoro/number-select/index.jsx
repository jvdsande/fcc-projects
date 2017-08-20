/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Number Selector with an increment and decrement button                     */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {
  Body, Main,
  Title,
  Button, Value,
} from './styles'

export default class NumberSelect extends Component {
  /* Emit the 'onChange' event with the 'step' added to the current value     */
  increase = () => {
    /* The step defaults to 1 if omitted                                      */
    let step = this.props.step || 1

    /* Only trigger the onChange event if it exists                           */
    if(this.props.onChange)
      this.props.onChange(this.props.value + step)
  }

  /* Emit the 'onChange' event with the 'step' substracted from the value     */
  decrease = () => {
    /* The step defaults to 1 if omitted                                      */
    let step = this.props.step || 1

    /* Only trigger the onChange event if it exists                           */
    if(this.props.onChange)
      this.props.onChange(this.props.value - step)
  }

  /* Render the NumberSelect component                                        */
  render()
  {
    return (
      <Body>
        {/* Use the children content as Title                                 */}
        {this.props.children?(<Title>{this.props.children}</Title>):''}
        <Main>
          {/* Create a button for the decrement function                      */}
          <Button onClick={this.decrease} disabled={this.props.value == this.props.min}> - </Button>
          {this.props.value}
          {/* Create a button for the increment function                      */}
          <Button onClick={this.increase} disabled={this.props.value == this.props.max}> + </Button>
        </Main>
      </Body>
    )
  }
}
