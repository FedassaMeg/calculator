let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

// operate gets called when the = button is clicked
function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
};

