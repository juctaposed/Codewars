
// Ones and Zeros
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  
  return parseInt(arr.join(''),2)
};
// binaryArrayToNumber([1, 1, 1, 1])
// binaryArrayToNumber([0, 1, 1, 0])

// P: We are passing through arrays of varying lengths containing 0's and 1's
// R: We should return an integer, presumably greater than or equal to 0, equivalent to the binary input
// E: Testing: [0, 0, 0, 1] ==> 1 0001 as a string 1 as a number
//    Testing: [0, 0, 1, 0] ==> 2 0010 as a string 10 as a number
//    Testing: [0, 1, 0, 1] ==> 5
//    Testing: [1, 0, 0, 1] ==> 9
//    Testing: [0, 0, 1, 0] ==> 2
//    Testing: [0, 1, 1, 0] ==> 6
//    Testing: [1, 1, 1, 1] ==> 15
//    Testing: [1, 0, 1, 1] ==> 11
// P: Pass through an array, join the elements as a string, convert the string to binary and 
//    return the integer at that binary code/expression