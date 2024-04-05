// WPU Coding Challenge 2024
// Day - 1/366 (Even or Odd)
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// const evenOrOdd = (x) => {
//     if(x % 2 == 0){
//         return "Even";
//     } else {
//         return "Odd"
//     }
// }

const evenOrOdd = (x) => (x % 2 == 0 ? "Even" : "Odd");

console.log(evenOrOdd(5));
