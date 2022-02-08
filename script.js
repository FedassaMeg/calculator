let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let inputs = document.querySelector('.inputs');
let output = document.querySelector('.output');
let firstNum;
let secondNum;
let operator;

// operate gets called when the = button is clicked
function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
};







buttonList = document.querySelectorAll('button');

buttonList.forEach((button) => {
  button.addEventListener('click', logTest);
});

function logTest (e) {
  // firstNum = e.target.textContent;
  // console.log(firstNum);
  // inputs.textContent += firstNum;
  
  let input = e.target.textContent; 
  // firstInput = whatever # btn was pressed. ignore ops
   if (!isNaN(input) || input === '.') { //working period
     console.log(input);
   };
  // when an op is clicked, assign it to operand. clicking another op reassigns it
  // if op has a value and a num is clicked, assign it to secondNum
  // when an op or = is clicked after 2 #s exist, 
  // display it as result (or result AND firstNum if op was used and not =)

  



  // console.log(e.target.className);
  // console.log(e.target.textContent)
};







function displayNum() {
  // when a num button is pressed
  // assign the corresponding num to a value
  // make the display show the value 
};