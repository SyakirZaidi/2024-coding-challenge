// WPU Coding Challenge 2024
// Day - 3/366 (Sentence Smash)
// Write a function that takes an array of words and smashes them together into a sentence
// and returns the sentence. You can ignore any need to sanitize words or add punctuation,
// but you should add spaces between each word. Be careful, there shouldn't be a space at
// the beginning or the end of the sentence!
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

// function smash(words) {
//   return words.join(" ");
// }

const smash = (words) => words.join(" ");

console.log(smash(["hello", "world", "this", "is", "great"]));
