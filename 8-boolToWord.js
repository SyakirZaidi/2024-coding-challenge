// WPU Coding Challenge 2024
// Day - 8/366 (Convert boolean values to strings 'Yes' or 'No'.)
// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

// function boolToWord(bool) {
//   if (bool == true) {
//     return "Yes";
//   } else if (bool == false) {
//     return "No";
//   }
// }

// const boolToWord = (bool) => {
//   if (bool == true) {
//     return "Yes";
//   } else if (bool == false) {
//     return "No";
//   }
// };

const boolToWord = (bool) => (bool == true ? "Yes" : "No");

console.log(boolToWord(false));
