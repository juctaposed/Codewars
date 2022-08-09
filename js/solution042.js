// Multiples of 3 or 5
// Instructions - If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  let newArr = []
  for (let i = 1; i < number; i++) {
    if (number < 0) {
      return 0
    }
    if (i % 3 == 0) {
      newArr.push(i)
    } else if (i % 5 == 0){
      newArr.push(i)
    }
  }
  console.log(newArr)
  let sum = newArr.reduce((a,b) => (a + b) , 0)
  return sum
}


//P: We are passing through a number. Will this number always be whole? >0? 
//R: Return an array of numbers that are multiples of either 3 or 5 within the number passed. 
// If negative return 0
//    -> Sum the numbers in this array to return as the solution.
//E: n = 10 -> [3,5,6,9] -> solution = 23
//P: We pass through a number. Set an empty array so we can store the multiples of 3 & 5 that go into
//  that number. Sum (reduce) all items in the array.  Else if number is -, return 0 