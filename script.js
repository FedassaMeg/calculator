// I need to refactor everything into sub funcs because calculate() is way too long
// and there's tons of repeated code.

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

// this many global vars has to be bad
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

  let input = e.target.className;
  let inputText = e.target.textContent;

  // if the input was a number button, and the second number and operator don't exist:
  if (input.includes('num') && !secondNum && !symbol) {
    firstNum += e.target.textContent;
    console.log(firstNum);
    inputs.textContent = firstNum;
  };

  // if the input was an operator button and the first num exists but not secondNum:
  if (!input.includes('num') && firstNum && !secondNum) {
    if (symbol) { // if symbol exists, replace it
      inputs.textContent = inputs.textContent.replace(/.$/,e.target.textContent);
    } else { // if symbol doesn't exist, append it
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
    answer = '';
    output.textContent = '';
    symbol = '';
    firstNum = '';
    secondNum = '';
    inputs.textContent = '';
  }

  // if you press an operator after there's an answer, make the answer num1 and clear everything else
  // if (answer && input.includes('add')) {
  if (answer && /sub|add|multiply|divide/.test(e.target.className)) {
    console.log('cleared via operator input');
    // replace with callback
    output.textContent = '';
    inputs.textContent = '';
    symbol = input;
    firstNum = answer;
    answer = 0;
    secondNum = '';
    inputs.textContent = firstNum;
    inputs.textContent += inputText;
  }

  // if you press a number after there's an answer, clear everything and set that e.# to the first num
  if (input.includes('num') && answer) {
    console.log('num post answer');
    answer = '';
    output.textContent = '';
    symbol = '';
    firstNum = '';
    secondNum = '';
    inputs.textContent = '';
    firstNum += e.target.textContent;
    inputs.textContent = firstNum;
  };
 
  // if all the operands and operator exist, and = is clicked, run this switch to calculate the result and display it
  if (input.includes('equals') && firstNum && secondNum && symbol) {
    answer = returnTruncAnswer();
    output.textContent = answer;
  };
};

function returnTruncAnswer() {
  let result = '';
  switch (symbol) {
    case 'add':
      result = operate(add, Number(firstNum), Number(secondNum));
      break;
    case 'sub':
      result = operate(sub, Number(firstNum), Number(secondNum));
      break;
    case 'multiply':
      result = operate(multiply, Number(firstNum), Number(secondNum));
      break;
    case 'divide':
      result = operate(divide, Number(firstNum), Number(secondNum));
      break;
    default:
      console.log(`Sorry, we encountered a bug.`);
    }
   result = parseFloat(result.toFixed(4));
   return result;
};


