'use strict';

function createBase(number) {
  var number;
  function increaseNumber() {
    return number += 9;
  }
  return increaseNumber;
}

const addSix = createBase(6);

console.log(addSix());
console.log(addSix());
console.log(addSix());