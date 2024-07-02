  'use strict'

const getLeapYears = (n, m) => Array
  .from({ length: Math.abs(m - n) + 1 }, (x, i) => n + i)
  .filter(x => ((x % 100) && !(x % 4)) || !(x % 400));

console.log(getLeapYears(1900, -1900));