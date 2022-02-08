let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let inputs = document.querySelector('.inputs');
let currentNum;

// operate gets called when the = button is clicked
function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
};







buttonList = document.querySelectorAll('button');

buttonList.forEach((button) => {
  button.addEventListener('click', logTest);
});

function logTest (e) {
  currentNum = Number(e.target.textContent);
  console.log(currentNum);
  inputs.textContent = currentNum;
  // console.log(e.target.className);
  // console.log(e.target.textContent)
};







function displayNum() {
  // when a num button is pressed
  // assign the corresponding num to a value
  // make the display show the value 
};