// WPU Coding Challenge 2024
// Day - 5/366 (Sum of positive)
// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let nArr = [0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      nArr.push(arr[i]);
    }
  }

  const result = nArr.reduce((a, r) => a + r);
  return result;
}

// function positiveSum(arr) {
//     var total = 0;
//     for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//       if (arr[i] > 0) {                   // if arr[i] is greater than zero
//         total += arr[i];                  // add arr[i] to total
//       }
//     }
//     return total;                         // return total
// }

// function positiveSum(arr) {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// }

const arr = [1, -2, 3, 4, 5];
console.log(positiveSum(arr));
