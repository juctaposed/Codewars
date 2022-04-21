// Count of positives / sum of negatives
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.


function countPositivesSumNegatives(input) {
    let newArr = []
    let count = 0
    let sum = 0
    if (input == null || input.length < 1){
        return []
    }
    for(let i = 0; i < input.length; i++){
      if (input[i] > 0) {
        count++
        
    } else if (input[i] < 0) {
        sum += input[i]
      } 
    } 
    newArr.push(count)
    newArr.push(sum)
    return newArr
  }
  
  
  // P: we're passing through an array of integers
  // R: we need to return an array including - count of positive numbers, sum of negative numbers. 0 is not positive nor negative, [] = []
  // E: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  // P: We can create a new, empty array. Loop through our input. Account for null/no array. add one to a count increment if number
  // is > 0. If negative, sum those amounts. Push both count and sum, respectively into new array. return the array


// P: we're passing through an array of integers
// R: we need to return an array including - count of positive numbers, sum of negative numbers. 0 is not positive nor negative, [] = []
// E: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// P: We can create a new, empty array. Loop through our input. Account for null/no array. add one to a count increment if number
// is > 0. If negative, sum those amounts. Push both count and sum, respectively into new array. return the array