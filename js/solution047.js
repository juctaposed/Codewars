
// Calculate average
// Instructions - Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(array) {
    if(array.length == 0){
      return 0
    }else
     return array.reduce((acc, curr) => acc + curr, 0) / array.length
   }



// P: We will pass through an array of numbers 
// R: We should return the calculated average of numbers in the array
// E: find_average([100, 50, 50, 0]) = 50 
// P: Write instructions to calculate the average of a set of numbers. Calculate the sum of all elements, divide by array length