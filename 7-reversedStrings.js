// WPU Coding Challenge 2024
// Day - 7/366 (Reversed Strings)
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// function solution(str) {
//   let nStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     nStr += str[i];
//   }
//   return nStr;
// }

// const solution = (str) => {
//   return str.split("").reverse().join("");
// }

const solution = (str) => str.split("").reverse().join("");

console.log(solution("hello"));
