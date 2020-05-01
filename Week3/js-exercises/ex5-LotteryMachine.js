'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach(number => {
    if (number.length % 3 === 0) {
      threeCallback();
    }
    else if (number.length % 5 === 0) {
      fiveCallback();
    }
    else if (number.length % 3 === 0 && number.length % 5 === 0) {
      threeCallback();
      fiveCallback();
    }
  });
}

threeFive(10, 15, sayThree, sayFive);