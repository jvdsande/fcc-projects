# FreeCodeCamp Frontend Certification Projects
## Project: Build a JavaScript Calculator
### Overview
For this project, it was decided to adopt a material-design styling.
As for the rest of the projects, I used React to build the Calculator. I also used Regular Expressions to transform the natural-writing formula to a computable formula.

The live demo for the calculator can be accessed here: [Calculator](http://jvdsande.github.io/fcc-projects/fcc/calculator)

### User Stories
#### I can add, subtract, multiply and divide two numbers.
The implemented calculator has the Add, Subtract, Multiply and Divide buttons. All those operations are correctly handled.
It is possible to chain any number of operations, and the mathematical order of operations is taken into account.

#### I can clear the input field with a clear button.
The calculator features an DEL button used to clean the input field, and an AC function which will reset the calculator

#### I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.
The calculator can chain any number of signed number, integer and floating. It will then execute each operation, in the correct mathematical order. The output received from pressing "=" can then be fed to the next chain of operations, just by adding a new operator
