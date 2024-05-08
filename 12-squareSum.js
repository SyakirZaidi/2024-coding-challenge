// WPU Coding Challenge 2024
// Day - 12/366 (Square(n) Sum)
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// function squareSum(numbers) {
//   if (numbers == 0) {
//     return 0;
//   } else {
//     return numbers.reduce((sum, n) => sum + Math.pow(n, 2), 0);
//   }
// }

const squareSum = (numbers) =>
  numbers == 0 ? 0 : numbers.reduce((sum, n) => sum + Math.pow(n, 2), 0);

console.log(squareSum([6, 12, -1, -2, 12, -8, -9, -5]));
