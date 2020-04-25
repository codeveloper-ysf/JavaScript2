'use strict';

const myNumbers = [1, 2, 3, 4];

const evenNumbers = myNumbers.filter (number => number % 2 === 0);

const doubleEvenNumbers = evenNumbers.map(newNumber => newNumber * 2);

console.log(doubleEvenNumbers);