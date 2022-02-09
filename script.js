let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let inputs = document.querySelector('.inputs');
let output = document.querySelector('.output');
let firstNum = '';
let secondNum = '';
let symbol = '';
let answer = 0;
let displayEq = '';

// operate gets called when the = button is clicked
// this is a requirement of the homework assignment so I have to use it
function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
};

buttonList = document.querySelectorAll('button');

buttonList.forEach((button) => {
  button.addEventListener('click', calculate);
});

function calculate(e) {
  // this function is a series of ifs that progress the stages of calcultor use
  // the ifs check if the first operand, second operand, or operator exist to determine what to execute

  let input = e.target.className

  // if the input was a number button, and the second number and operator don't exist:
  if (input.includes('num') && !secondNum && !symbol) {
    firstNum += e.target.textContent;
    console.log(firstNum);
    inputs.textContent = firstNum;
  };

  // if the input was an operator button:
  if (!input.includes('num') && firstNum && !secondNum) {
    if (symbol) {
      inputs.textContent = inputs.textContent.replace(/.$/,e.target.textContent);
    } else {
      inputs.textContent += e.target.textContent;
    }
    symbol = e.target.className
    console.log(`the current operator is ${e.target.className}`);
  }

  // if the input is a number, and the first number and operator already exist
  if (input.includes('num') && firstNum && symbol) {
    secondNum += e.target.textContent;
    console.log(secondNum);
    inputs.textContent += e.target.textContent;
  }

  if (e.target.className.includes('clear')) {
    output.textContent = '';
    symbol = '';
    firstNum = '';
    secondNum = '';
    inputs.textContent = '';
  }
 
  // if all the operands and operator exist, and = is clicked, run this switch to calculate the result and display it
  if (input.includes('equals') && firstNum && secondNum && symbol) {
  switch (symbol) {
    case 'add':
      answer = operate(add, Number(firstNum), Number(secondNum));
      console.log(answer);
      output.textContent = answer;
      break;
    case 'sub':
      answer = operate(sub, Number(firstNum), Number(secondNum));
      console.log(answer);
      output.textContent = answer;
      break;
    case 'multiply':
      answer = operate(multiply, Number(firstNum), Number(secondNum));
      console.log(answer);
      output.textContent = answer;
      break;
    case 'divide':
      answer = operate(divide, Number(firstNum), Number(secondNum));
      console.log(answer);
      output.textContent = answer;
      break;
    default:
      console.log(`Sorry, we encountered a bug.`);
    }
  };
};