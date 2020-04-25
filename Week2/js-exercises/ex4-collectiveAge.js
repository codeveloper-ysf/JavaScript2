'use strict';

const hackYourFutureMembers = [{
  name: 'Wouter',
  age: 33
},
{
  name: 'Federico',
  age: 32
},
{
  name: 'Noer',
  age: 27
},
{
  name: 'Tjebbe',
  age: 22
},
];

function collectiveAge(people) {
  const combineOfAges = people.map(person => person.age).reduce((sum, age) => {
    return sum + age;
  },0)
  return combineOfAges;
}

console.log("The collective age of the HYF team is: " + collectiveAge(hackYourFutureMembers));