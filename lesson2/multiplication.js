const num1 = 10;
const num2 = 5;

const divideFunc = require("./division");

function multiplyNums(number1, number2) {
  console.log(`answer is : ${number1 * number2}`);
}

multiplyNums(num1, num2);
divideFunc.divideNums(num1, num2);
