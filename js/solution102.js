// Even numbers in an array -> https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/javascript
// INSTRUCTIONS:
// iven an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.



// an array of numbers -> numbers? Ever be strings, special characters, nested arrays, etc? No - no funny business
// Will these numbers be positive or negative? Both
// Will these numbers ever be decimals/floats? No always integers
// So the numbers in our array will always be Whole, Positive or Negative numbers, no funny business, no empty array

// num -> represents the LAST number of even numbers in the array
// Nothing that looks like a number that isnt actually a number? like '6'?
// will we always return an array? Never returning a number, string, no funny business here?
// And we arent returning just any number, but the last 'num' numbers that are even in the array
// e.g. ([2,4], 2) -> '[2,4]' ([1,2,3,4,5], 1) -> '[4]'

// We are returning num in the same order as it appears in the array

// evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), '[4, 6, 8]');
// evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), '[-8, 26]');
// evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), '[6]');

// function evenNumbers(array, num) {
//   // filter out odd numbers
//   // return the last num of even numbers - slice(-num)
//   return array.filter(e => e % 2 === 0).slice(-num)
// }

// Do you use ES6 on the job? Does the team typically prefer one liners? Do you like having comments for code?
const evenNumbers = (array, num) => array.filter(e => e % 2 === 0).slice(-num)