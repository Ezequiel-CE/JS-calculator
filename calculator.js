//basic operations

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) return "cant divide by 0";
  return a / b;
};

const operate = (operator, value1, value2) => {
  if (operator === "+") return add(value1, value2);

  if (operator === "-") return subtract(value1, value2);

  if (operator === "*") return multiply(value1, value2);

  if (operator === "/") return divide(value1, value2);
};

const btnNumbers = document.querySelectorAll(".btn-num");
const displayCurrent = document.querySelector(".calculator-current-operation");

let labelContent = "";

const addToScreen = (e) => {
  num = e.target.textContent;
  labelContent += num;
  displayCurrent.textContent = labelContent;
};

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", addToScreen);
});

//operations

let value1 = false;

//sum
const btnSum = document.querySelector(".btn-sum");

const pressSum = () => {
  console.log("hello");

  if (value1 === false) {
    value1 = parseInt(labelContent);
    labelContent = "";
    return;
  }

  let actualNum = parseInt(labelContent);
  let sum = operate("+", value1, actualNum);
  labelContent = sum;
  displayCurrent.textContent = sum;
  value1 = sum;
};

btnSum.addEventListener("click", pressSum);
