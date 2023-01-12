// Find the odd int -> https://www.codewars.com/kata/54da5a58ea159efa38000836

// INSTRUCTIONS:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// passing in an array of whole numbers
//   will these numbers always be integers? never floats? never an array of strings, special characters, etc?
//   will these numbers always have exactly one odd number? and the rest will always be even?
//     will the array ever be empty? No there will always be at least one int
  
  
// return the number that occurs an odd number of times in the array
  
  
function findOdd(arr) {
    // set up object to track frequency
    let frequency = {}
    // check every value in the list
    for(let i = 0; i <= arr.length; i++){
        // if element exist, add 1 to count
      if(frequency[arr[i]]){
        frequency[arr[i]] +=1
      // otherwise add the element to the object and set count
      } else {
        frequency[arr[i]] = 1
      }
    }
    // loop thru object using 'in' keyword
    for(let key in frequency) {
      // check if count of each property is odd
      if(frequency[key] % 2 === 1) {
        // key turns value into a string, return as num
        return Number(key)
      }
    }
  }
  
  //     doTest([7], 7);
  //     doTest([0], 0);
  //     doTest([1,1,2], 2);
  //     doTest([0,1,0,1,0], 0);
  //     doTest([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);



//   ----------------------------------


// function findOdd(arr) {
//     return arr.reduce((a,b) => a ^ b)
// }

// Bitwise XOR operator works because the problem specifically has 1 number an odd amount of times.
// Even number copies of numbers cancel eachother out within XOR. The odd entry will return.
