  'use strict'

const getLeapYears = (n, m) => Array
  .from({ length: m - n + 1 }, (x, i) => n + i)
  .filter(x => ((x % 100) && !(x % 4)) || !(x % 400));

console.log(getLeapYears(2010, 2024));