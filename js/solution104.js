// Nth Smallest Element (Array Series #4)

// INSTRUCTIONS:
// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 



// passing in an array of integers -> positive/negative, will there ever be an empty array? No, minimum 3 elements
// Will the array ever contain non-integers like strings, booleans, special characters, objects, otehr arrays? No only integers

// Along with the array, we're passing in a number representing the element we need to grab out of the array
// Will this ever not be a number? e.g. string, boolean? No always a number. Will it always be an integer? Yes, no floats/decimals
// Will this integer ever be negative? No, we'll always pass a positive integer as num

  
// return the Nth smallest element in array

// array size = min 3, dupes possible, 

// function nthSmallest(arr, n) {
//   //sort the array
//   //we need to account for arrays beginning at 0 index, n-1
//   let sorted = arr.sort((a,b) => a - b)
//   return sorted[n-1]
//   return arr.sort((a,b) => a-b)[n-1]
  
// }

// Do you find comments in code helpful for communicating or prefer none?
// Do you and the team use ES6 snytax frequently?  Would you prefer a one liner for this function? 
const nthSmallest = (arr, n) => arr.sort((a,b) => a-b)[n-1]

// nthSmallest(arr=[3,1,2]            n=2    ==> return 2)
// nthSmallest(arr=[15,20,7,10,4,3]   n=3    ==> return 7)
// nthSmallest(arr=[2,169,13,-5,0,-1] n=4    ==> return 2)
// nthSmallest(arr=[2,1,3,3,1,2],     n=3    ==> return 2)
  