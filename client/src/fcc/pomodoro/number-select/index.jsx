import React, {Component} from 'react'

import {
  Body, Main,
  Title,
  Button, Value,
} from './styles'

export default class NumberSelect extends Component {
  increase = () => {
    let step = this.props.step || 1
    if(this.props.onChange)
      this.props.onChange(this.props.value + step)
  }

  decrease = () => {
    let step = this.props.step || 1
    if(this.props.onChange)
      this.props.onChange(this.props.value - step)
  }
  render()
  {
    return (
      <Body>
        {this.props.title?(<Title>{this.props.title}</Title>):''}
        <Main>
          <Button onClick={this.decrease} disabled={this.props.value == this.props.min}> - </Button>
          <Value>{this.props.value}</Value>
          <Button onClick={this.increase} disabled={this.props.value == this.props.max}> + </Button>
        </Main>
      </Body>
    )
  }
}
