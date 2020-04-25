'use strict';

const fruitBasket = ['Apple', ' Lemon', ' Grapefruit', ' Lemon', ' Banana', ' Watermelon', ' Lemon'];

function takeOutLemons(basket) {
  const filteredBasket = basket.filter((allergic) => allergic !== ' Lemon');
  return `my mom bought me a fruit basket, containing ${filteredBasket}!`;
};

console.log(takeOutLemons(fruitBasket));