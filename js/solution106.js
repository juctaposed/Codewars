// Create Phone Number
// INSTRUCTIONS:

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// we're passing in an array of numbers. Will this array ever be anything other than an array? String, boolean, object, a number? 
// No always an array with 10 integers. Will these integers ever be negative? No always positive integers.
// will the array ever be empty? Nope, always 10 integers.

// our output should be a string - with these 10 numbers, formatted as a telephone number e.g. "(xxx) xxx-xxxx"
// the first 3 digits are wrapped in parens, followed by a space. the next 3 digits, then a hyphen (no space) followed by last 4 dig


function createPhoneNumber(arr) {
  // join the array to turn into a string
  // substring -> find particular characters in batches -> 0,3 for first 3, 3-6 for sequential 3, 6 for the last 4 digits
  let str = arr.join('')
  return `(${(str.substring(0,3))}) ${(str.substring(3,6))}-${(str.substring(6))}`
}


// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");