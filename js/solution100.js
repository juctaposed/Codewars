
// Sum of array singles
// INSTRUCTIONS:
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.



// we're passing in an array of numbers - will this array always consist of numbers? no strings, nested arrays, special 
// characters, etc? 
// Only numbers. Will these numbers be floats/decimal places or integers? Integers. Will these integers ever be negative?
// Only whole, positive integers. 
// Will the array ever be empty? No array never empty.

// we have repeating numbers - will there always be at least two numbers non repeating that we can sum? Yes
// Will there ever be less than two numbers that we need to sum? No, assume not.

function repeats(array) {
  //filter out repeating nums
  // check if current index of element is === to lastIndexOf to help filter repeating nums
  return array.filter(num => array.indexOf(num) === array.lastIndexOf(num)).reduce((acc, curr) => acc + curr, 0)
  //sum numbers not filtered
}

// (repeats([4,5,7,5,4,8]),15);
// (repeats([9, 10, 19, 13, 19, 13]),19);
// (repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// (repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// (repeats([5, 10, 19, 13, 10, 13]),24);