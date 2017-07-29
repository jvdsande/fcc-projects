import React from 'react'
import ReactDOM from 'react-dom'

import styled, {injectGlobal} from 'styled-components'

const CalculatorBody = styled.div`
  position: relative;
  display: inline-block;
  max-width: 440px;
  min-width: 240px;
  width: 95%;
  background: #ECEFF1;
  margin-top: 5%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
  padding-bottom: 10px;
`

const Screen = styled.div`
  display: block;
  position: relative;
  margin: 15px;
  height: 96px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
  border-radius: 5px;
  background: #009688;
  font-weight: bold;
  color: white;
`

const Formula = styled.div`
  height: 40%;
  padding: 10px;
  text-align: left;
  font-size: 140%;
  width: 100%;
  box-sizing: border-box;
`

const Result = styled.div`
  height: 60%;
  padding: 10px;
  padding-top: 5px;
  text-align: right;
  font-size: 200%;
  width: 100%;
  box-sizing: border-box;
`

const Button = styled.div`
  display: inline-block;
  position: relative;;
  width: ${props => props.double? 'calc(50% - 20px)':'calc(25% - 15px)'};
  height: 70px;
  line-height: 70px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
  border-radius: 4px;
  text-align: center;
  font-size: 48px;
  background: #FFFFFF;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 5px;

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
  }
`



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
        r = this.compute()+""
        this.status = OPERATOR
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
          this.status = DIGIT_OR_OPERATOR
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
      <CalculatorBody>
        <Screen>
          <Formula>{this.state.formula.replace(/(.)([+/x-])/g, function(e,m1,m2) {return m1+" "+m2+" "})}</Formula>
          <Result>{this.state.result}</Result>
        </Screen>
        {
          this.buttons.map(function(b) {
            return <Button {...b} onClick={this.onButtonClick.bind(this)}>{b.value}</Button>
          }.bind(this))
        }
      </CalculatorBody>
    )
  }
}

let target = document.getElementById('root')

let ReactRoot = ReactDOM.render(
    <Calculator/>, target)


injectGlobal`
body {
  font-family: 'Open Sans', sans-serif;
  background: #555555;
  text-align: center;
}

`
