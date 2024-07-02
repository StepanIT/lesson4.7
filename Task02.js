  'use strict'

  function generateRandomArray(length, n, m) {
    const result = [];
    const range = Math.abs(m - n) + 1;
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    let i = 0;
  
    while (i < length) {
      i++;
      const randomNum = Math.floor(Math.random() * range) + min;
      result.push(randomNum);
  
    }
    return result;
  }

  console.log(generateRandomArray(20, 50, 60));

