'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

const removeDuplicates = array => array.filter((value, index) => array.indexOf(value) === index);

removeDuplicates(letters);

if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")