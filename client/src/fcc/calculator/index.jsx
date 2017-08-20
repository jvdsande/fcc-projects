/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point and main component for the Calculator project                  */
/*    The solution chosen was to rely on RegEx for the computation, and on a  */
/*    Finite State Machine for handling key presses                           */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds   */
import {
  Body, Screen,
  Formula, Result,
  Button
} from './styles'


/* Create an enum of human-readable states for our FSM                        */
const [ANYTHING, DIGIT, OPERATOR, NOT_DOT_DIGIT, NOT_DOT_ANYTHING] = [0,1,2,3,4]

/* Calculator is the main component for the project. It renders the complete
 * page and handles the calculator's state                                    */
class Calculator extends Component {
  constructor() {
    super()

    /* React state, holding the currently input formula, and the last result  */
    this.state = {
      formula: '',
      result: ''
    }

    /* Our FSM's state                                                        */
    this.status = DIGIT

    /* A list of button to diwplay on the calculator                          */
    this.buttons = [
      { name: 'clear',  value: 'AC', double: true  },
      { name: 'delete',  value: 'DEL', double: true  },

      { name: 'c7',  value: '7'  },
      { name: 'c8',  value: '8'  },
      { name: 'c9',  value: '9'  },
      { name: 'plus',  value: '+'  },

      { name: 'c4',  value: '4'  },
      { name: 'c5',  value: '5'  },
      { name: 'c6',  value: '6'  },
      { name: 'minus',  value: '-'  },

      { name: 'c1',  value: '1'  },
      { name: 'c2',  value: '2'  },
      { name: 'c3',  value: '3'  },
      { name: 'multiply',  value: 'x'  },

      { name: 'dot',  value: '.'  },
      { name: 'c0',  value: '0'  },
      { name: 'equal',  value: '='  },
      { name: 'divide',  value: '/'  },
    ]
  }


  /* The compute function takes a literal formula and extracts the result     */
  compute() {
    /* Temporary copy of 'entry' to watch for a stable state                  */
    let temp

    /* Copy of the formula to parse                                           */
    let entry = this.state.formula

    /* The first step is to take care of all multiplications and divisions,
     * since we do not have parentheses                                       */
    do {
      /* Make a copy of the entry, before modifying it                        */
      temp = entry
    }
    /* Exit the loop once the modified entry is the same as the saved entry   */
    while(temp != (entry = entry.replace(
      /* Look for a multiplication or division of two numbers                 */
      /(-?[0-9.]+)([x/])(-?[0-9.]+)/,
      /* Get the a and b operands, and apply the correct operation.           */
      (f, a, op, b) => {
        a = parseFloat(a)
        b = parseFloat(b)

        /* Replace the operation with its result                              */
        return (op=='x')?a*b:a/b
      }
    )))


    /* When we reach this point, there is no more multiplication or division  */

    /* We can now look for additions and substractions                        */
    do {
      /* Make a copy of the entry, before modifying it                        */
      temp = entry
    }
    /* Exit the loop once the modified entry is the same as the saved entry   */
    while(temp != (entry = entry.replace(
      /* Look for an addition or substraction of two numbers                  */
      /(-?[0-9.]+)([-+])(-?[0-9.]+)/,
      /* Get the a and b operands, and apply the correct operation.           */
      (f, a, op, b) => {
        a = parseFloat(a)
        b = parseFloat(b)

        /* Replace the operation with its result                              */
        return (op=='+')?a+b:a-b
      }
    )));

    /* Return the final result, rounded at 10 digits                          */
    return (Math.round(entry * Math.pow(10, 10)) / Math.pow(10, 10)) + ''
  }

  /* Observe the end of the literal operation to determine what can be input
   * next, in case of delete                                                  */
  getPreviousStatus(f) {
    /* Get everything after the last operator                                 */
    f = f.split(/[+/x-]/g).pop()

    /* Get the last character                                                 */
    let c = f[f.length - 1] || ''

    /* If there is nothing after the last operator then only a digit can be
     * input                                                                  */
    if(f.length < 1)
      return DIGIT

    /* If the last character is a dot, only a digit can be input, and no more
     * dots                                                                   */
    if(c == '.')
      return NOT_DOT_DIGIT

    /* If there is a dot in the last number, then no more dots                */
    if(f.indexOf('.') > -1)
      return NOT_DOT_ANYTHING

    /* Otherwise, anything can be input                                       */
    return ANYTHING
  }

  /* Compute next status based on the clicked button                          */
  getNextStatus(b) {
    let {formula, result} = this.state

    /* Since we are in a Finite State Machine, the next status is computed based
     * on the current status, and the current input. We start by a switch on the
     * current status                                                         */
    switch(this.status) {
      /* If anything can be input, then we add it to the formula and act from
       * there. In case of 'NOT_DOT', then we simply ignore dot inputs        */
      case NOT_DOT_ANYTHING: if(b == '.') break
      case ANYTHING:
        /* Add the new input to the formula                                   */
        formula += b

        /* Find the next status based on the input                            */

        /* If the input is an operator, the we expect a digit next            */
        if(b.match(/[x+/-]/)) {
          this.status = DIGIT
        }
        /* If the input is a dot, then we expect a digit and no more dots     */
        else if(b == '.') {
          this.status = NOT_DOT_DIGIT
        }
        /* If the input is the equal sign, then we compute the formula and put
         * it as the last result. We then expect an operator to continue the
         * computation                                                        */
        else if(b == '=') {
          result = this.compute()
          formula = ''
          this.status = OPERATOR
        }
        break

      /* If only a digit can be input, then we only add to the formula if the
       * input is a digit. If the input is an operator, we replace the last
       * operator. If the input is a minus sign, we add it as sign if possible.
       * In case of 'NOT_DOT', then we simply ignore dot inputs               */
      case NOT_DOT_DIGIT: if(b == '.') break
      case DIGIT:
        /* If the input is a strict positive number, we add it to the formula */
        if(b.match(/[1-9]/)) {
          formula += b

          /* Make sure to respect the 'NOT_DOT' situation                     */
          this.status = this.status == DIGIT ? ANYTHING : NOT_DOT_ANYTHING
        }
        /* If the input is zero and the preceeding character is not the
         * division operator, we add it to the formula                        */
        else if(b == '0' && formula[formula.length - 1] != '/')
        {
          formula += b

          /* Make sure to respect the 'NOT_DOT' situation                     */
          this.status = this.status == DIGIT ? ANYTHING : NOT_DOT_ANYTHING
        }
        /* If the input is an operator other than minus, then we replace the
         * last operator                                                      */
        else if(b.match(/[x+/]/)) {
          formula = formula.substr(0, formula.length - 1) + b
        }
        /* If the input is a minus, and we can add the minus as sign, the we add
         * it to the formula                                                  */
        else if(b == '-' && this.canAddMinus(formula)) {
          formula += b
        }
        break

      /* If we are waiting for only an operator, then it means the formula is
       * empty and we are expecting to work with the previous result          */
      case OPERATOR:
        /* If the input is an operator, then we prepare the next formula      */
        if(b.match(/[x+/-]/)) {
          /* We add the operator to the previous result                       */
          formula = result + b

          /* We clear the result                                              */
          result = ''

          /* We now expect a digit                                            */
          this.status = DIGIT
        }
        break
    }

    /* Finally, we update our React state to display the new formula and/or
     * result                                                                 */
    this.setState({formula, result})
  }

  /* Check if it is possible to input a minus as sign, not as operator        */
  canAddMinus(f) {
    /* Get everything after the last number                                   */
    f = f.split(/[0-9.]+/g).pop()

    /* If there is less than 2 characters after the last number, we can add
     * minus as sign (max allowed is one operator before the minus sign)      */
    return f.length < 2
  }

  /* Resolve the next state of the app after a button press                   */
  onButtonClick = (button) => {
    /* If the button is AC or DEL, then we need to reset or rewind or FSM     */
    switch(button) {
      case 'AC':
        /* If the button is AC, we completely reset the FSM. The next status is
         * digit only, and the formula and result are cleared                 */
        this.status = DIGIT

        this.setState({formula: '', result: ''})
        break
      case 'DEL':
        /* If the DEL button is pressed, then we remove one character from the
         * formula and get the corresponding status                           */
        let formula = this.state.formula
        formula = formula.substr(0, formula.length-1)

        this.status = this.getPreviousStatus(formula)

        this.setState({formula})
        break
      default:
        /* If another button is pressed, then we compute the next status      */
        this.getNextStatus(button)
        break
    }
  }

  /* Render the current state of the calculator                               */
  render() {
    return(
      <Body>
        {/* Create the screen, which will hold the current formula and result */}
        <Screen>
          {/* Add the formula to the screen. Add spaces around operators for
            * clarity                                                         */}
          <Formula>
            {
              this.state.formula.replace(
                /(.)([+/x-])/g,
                (e,m1,m2) => m1+' '+m2+' '
              )
            }
          </Formula>
          {/* Add the current result                                          */}
          <Result>{this.state.result}</Result>
        </Screen>

        {/* Fill the calculator with its button                               */}

        {
          this.buttons.map((b) => <Button {...b} onClick={() => this.onButtonClick(b.value)}>{b.value}</Button>)
        }
      </Body>
    )
  }
}


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the Calculator project                                               */
ReactDOM.render(<Calculator />, target)
