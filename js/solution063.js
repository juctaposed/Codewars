// Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = function (num) {
  let newArr = []
  for(let i = 1; i <= num; i++){
    newArr.push(i)
    
  }
  return newArr.reduce((a, b) => a + b, 0)
  
}


// P: we're passing through a number, alway greater than 0?
// R: return the sum of all numbers leading up to this parameter starting from 1 
// E: 
// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// P: by using a for loop, we can begin at one and run until our condition is = to num (parameter). We 
// could use reduce as well since its great for working with sums. 