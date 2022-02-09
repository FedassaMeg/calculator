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
function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
};



buttonList = document.querySelectorAll('button');

buttonList.forEach((button) => {
  button.addEventListener('click', logTest);
});

function logTest (e) {

  let input = e.target.className

  if (input.includes('num') && !secondNum && !symbol) {
    firstNum += e.target.textContent;
    console.log(firstNum);
    inputs.textContent = firstNum;
  };
  //display numtemp at top
  // when an op is clicked, assign numTemp to firstNum, assign op to symbol.
  if (!input.includes('num') && firstNum && !secondNum) {
    if (symbol) {
      inputs.textContent = inputs.textContent.replace(/.$/,e.target.textContent);
    } else {
      inputs.textContent += e.target.textContent;
    }
    symbol = e.target.className
    console.log(`the current operator is ${e.target.className}`);
  }
  if (input.includes('num') && firstNum && symbol) {
    secondNum += e.target.textContent;
    console.log(secondNum);
    inputs.textContent += e.target.textContent;
  }
 


  if (input.includes('equals') && firstNum && secondNum && symbol) {
  switch (symbol) {
    case 'add':
      answer = operate(add, Number(firstNum), Number(secondNum));
      console.log(answer);
      break;
    case 'sub':
      answer = operate(sub, Number(firstNum), Number(secondNum));
      console.log(answer);
      break;
    case 'multiply':
      answer = operate(multiply, Number(firstNum), Number(secondNum));
      console.log(answer);
      break;
    case 'divide':
      answer = operate(divide, Number(firstNum), Number(secondNum));
      console.log(answer);
      break;
    default:
      console.log(`Sorry, we encountered a bug.`);
}
  };
  // if op has a value and a num is clicked, assign it to secondNum
  // when an op or = is clicked after 2 #s exist, 
  // display it as result (or result AND firstNum if op was used and not =)
  

};


  // console.log(e.target.className);
  // console.log(e.target.textContent)




function displayNum() {
  // when a num button is pressed
  // assign the corresponding num to a value
  // make the display show the value 
};