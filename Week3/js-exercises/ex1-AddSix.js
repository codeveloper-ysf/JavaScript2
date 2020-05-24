'use strict';

function createBase(number) {
  var number;
  function addSix() {
    return number += 9;
  }
  return addSix;
}

const myFunc = createBase(6);

console.log(myFunc());
console.log(myFunc());
console.log(myFunc());