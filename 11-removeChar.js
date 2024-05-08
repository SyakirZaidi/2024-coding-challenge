// WPU Coding Challenge 2024
// Day - 11/366 (Remove First and Last Character)
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// function removeChar(str) {
//   return str.slice(1, str.lastIndexOf());
// }

// const removeChar = (str) => {
//   return str.slice(1, str.lastIndexOf());
// };

const removeChar = (str) => str.slice(1, str.lastIndexOf());

console.log(removeChar("hello"));
