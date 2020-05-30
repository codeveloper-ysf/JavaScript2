'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach((number) => {
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
  });
}
const sayThree = function (num) {
  console.log(`number ${num} is divisible by 3!`);
};
const sayFive = function (num) {
  console.log(`number ${num} is divisible by 5!`);
};

threeFive(10, 15, sayThree, sayFive);