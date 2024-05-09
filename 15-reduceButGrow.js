// WPU Coding Challenge 2024
// Day - 15/366 (Beginner - Reduce but Grow)
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// function grow(x) {
//   return x.reduce((sum, n) => sum * n);
// }

const grow = (x) => x.reduce((sum, n) => sum * n);

console.log(grow([1, 2, 3, 4]));
