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
  displayCurrent.textContent = labelContent.substring(0, 15);
};

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", addToScreen);
});

//operations

let value1 = 0;
let operation = "";

//elementos
const btnSum = document.querySelector(".btn-sum");
const btnEqual = document.querySelector(".btn-result");
const btnSubstract = document.querySelector(".btn-sub");
const btnMulti = document.querySelector(".btn-multi");
const btnDivide = document.querySelector(".btn-divide");

//apretar una operacion

const pressOperation = (operator) => {
  //si apretamos un btn de operacion por segunda vez nos el calculo
  if (operation !== "") {
    pressEqual(operator);
  }

  //guarda el valor ,da la operacion y setea el label para escribir un nuevo numeor
  value1 = parseInt(displayCurrent.textContent);
  operation = operator;
  labelContent = "";
  console.log(operation);
};

//result

const pressEqual = () => {
  //guara el numero actual en el display para usarlo como valor 2
  const currentNum = parseInt(displayCurrent.textContent);

  //verifica que opercaion hay actualmente
  if (operation === "+") {
    const sum = operate("+", value1, currentNum);
    displayCurrent.textContent = sum;
    operation = "";
  }
  if (operation === "-") {
    const sub = operate("-", value1, currentNum);
    displayCurrent.textContent = sub;
    operation = "";
  }
  if (operation === "*") {
    const multi = operate("*", value1, currentNum);
    displayCurrent.textContent = multi;
    operation = "";
  }
  if (operation === "/") {
    //caso de division de 0
    if (currentNum === 0) {
      displayCurrent.textContent = "cant divide by 0";
      operation = "";
      labelContent = "";
      return;
    }
    const divi = operate("/", value1, currentNum).toString();
    displayCurrent.textContent = divi.substring(0, 15);
    operation = "";
  }
};

//uso una callback anonima para poder llamar a otra con argumentos

btnSum.addEventListener("click", () => pressOperation("+"));
btnSubstract.addEventListener("click", () => pressOperation("-"));
btnMulti.addEventListener("click", () => pressOperation("*"));
btnDivide.addEventListener("click", () => pressOperation("/"));
btnEqual.addEventListener("click", pressEqual);
