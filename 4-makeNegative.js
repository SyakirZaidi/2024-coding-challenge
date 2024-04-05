// WPU Coding Challenge 2024
// Day - 4/366 (Return Negative)
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// function makeNegative(num) {
//   if (num > 0) {
//     return num - num * 2;
//   } else {
//     return num;
//   }
// }

// const makeNegative = (num) => {
//   if (num > 0) {
//     return num - num * 2;
//   } else {
//     return num;
//   }
// };

const makeNegative = (num) => (num > 0 ? num - num * 2 : num);

console.log(makeNegative(325456));
