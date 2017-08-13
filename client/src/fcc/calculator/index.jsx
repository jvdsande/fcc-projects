import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {
  Body, Screen,
  Formula, Result,
  Button
} from './styles'


let [DIGIT, ANYTHING, DIGIT_OR_OPERATOR, OPERATOR] = [0,1,2,3]
class Calculator extends React.Component {
  constructor() {
    super()

    this.state = {
      formula: "",
      result: ""
    }

    this.status = DIGIT

    this.buttons = [
    { name: "clear",  value: "AC", double: true  },
    { name: "delete",  value: "DEL", double: true  },

    { name: "c7",  value: "7"  },
    { name: "c8",  value: "8"  },
    { name: "c9",  value: "9"  },
    { name: "plus",  value: "+"  },

    { name: "c4",  value: "4"  },
    { name: "c5",  value: "5"  },
    { name: "c6",  value: "6"  },
    { name: "minus",  value: "-"  },

    { name: "c1",  value: "1"  },
    { name: "c2",  value: "2"  },
    { name: "c3",  value: "3"  },
    { name: "multiply",  value: "x"  },

    { name: "dot",  value: "."  },
    { name: "c0",  value: "0"  },
    { name: "equal",  value: "="  },
    { name: "divide",  value: "/"  },
    ]
  }


  compute() {
    let temp
    let entry = this.state.formula
    do {
      temp = entry;
    } while(temp != (entry = entry.replace(
      /([0-9.]+)([x/])(-?[0-9.]+)/,
      function(f, a, op, b) {
        a = parseFloat(a)
        b = parseFloat(b)
        return (op=='x')?a*b:a/b;
      }
    )));
    do {
      temp = entry;
    } while(temp != (entry = entry.replace(
      /([0-9.]+)([-+])(-?[0-9.]+)/,
      function(f, a, op, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        return (op=='+')?a+b:a-b;
      }
    )));

    return entry;
  }

  getNextStatus(f) {
    f = f.split(/[+/x-]/g).pop()
    let c = f[f.length - 1]
    switch(c) {
      case ".":
        return DIGIT_OR_OPERATOR
      case "+":
      case "-":
      case "/":
      case "x":
        return DIGIT
      default:
        if(f.indexOf('.') > -1)
          return DIGIT_OR_OPERATOR
        return ANYTHING
    }
  }

  canAddMinus(f) {
    f = f.split(/[0-9.]+/g).pop()
    return f.length<2
  }

  onButtonClick(button) {
    let f = this.state.formula
    let r = this.state.result
    let b = button.target.innerHTML
    switch(b) {
      case "AC":
        f = ""
        r = ""
        this.status = DIGIT
        break
      case "DEL":
        f = f.substr(0, f.length-1)
        r = ""
        this.status = this.getNextStatus(f)
        break
      case "=":
        if(this.status != DIGIT) {
          r = this.compute()+""
          this.status = OPERATOR
        }
        break
      case "+":
      case "/":
      case "x":
        if(this.status == OPERATOR) {
          f = r+b
          r = ""
        }
        else if(this.status != DIGIT) {
          f += b
        } else if(f.length){
          f = f.substr(0, f.length-1)+b
        }
        this.status = DIGIT
        break
      case "-":
        if(this.status == OPERATOR) {
          f = r+b
          r = ""
          this.status = DIGIT
        }
        else if(this.canAddMinus(f)) {
          f += b
          this.status = DIGIT
        }
        break
      case ".":
        if(this.status == ANYTHING) {
          f += b
          this.status = DIGIT
        }
        break
      default:
        if(this.status != OPERATOR) {
          f += b
          if(this.status == DIGIT)
            this.status = ANYTHING
        }
        break
    }
    this.setState({formula: f, result: r})
  }

  render() {
    return(
      <Body>
        <Screen>
          <Formula>{this.state.formula.replace(/(.)([+/x-])/g, function(e,m1,m2) {return m1+" "+m2+" "})}</Formula>
          <Result>{this.state.result}</Result>
        </Screen>
        {
          this.buttons.map(function(b) {
            return <Button {...b} onClick={this.onButtonClick.bind(this)}>{b.value}</Button>
          }.bind(this))
        }
      </Body>
    )
  }
}

let target = document.getElementById('root')

let ReactRoot = ReactDOM.render(
    <Calculator/>, target)
