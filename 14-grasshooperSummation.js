// WPU Coding Challenge 2024
// Day - 14/366 (Grasshopper - Summation)
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
  // Code here
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }

  return sum;
};

console.log(summation(8));
