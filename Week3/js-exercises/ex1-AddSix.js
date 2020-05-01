'use strict';

function createBase(number) {
  return function addSix() {
    number += 9;
    return number;
  }
}

const addSix = createBase(6);

console.log(addSix());
console.log(addSix());
console.log(addSix());