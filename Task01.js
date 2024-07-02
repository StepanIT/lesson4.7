  'use strict'


const randomArr = (length) => (
  [...new Array(length)].map(() => Math.ceil(Math.random() * 100)));
  const numbers = randomArr(50);

console.log(numbers);
