  'use strict'

  function generateRandomArray(length, n, m, line) {
    const result = [];
    const range = Math.abs(m - n) + 1;
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    let i = 0;
  
    while (result.length < length) {
      const randomNum = Math.floor(Math.random() * range) + min;
      if (randomNum % 2 === 0 && line === 'even')  {
        result.push(randomNum);
      } else if (!(randomNum % 2 === 0) && line === 'odd') {
        result.push(randomNum);
      }
    }
    return result;
  }

  console.log(generateRandomArray(10, 10, 12, 'even'));
  console.log(generateRandomArray(20, 10, 13, 'odd'));