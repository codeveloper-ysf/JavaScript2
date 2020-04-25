'use strict';

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

function createHTMLList(arr) {
  const hobbyList = document.createElement('ul');
  document.body.appendChild(hobbyList);
  arr.forEach(hobby => {
    const newHobby = document.createElement('li');
    newHobby.innerText = hobby;
    hobbyList.appendChild(newHobby);
  });
};

createHTMLList(myHobbies);