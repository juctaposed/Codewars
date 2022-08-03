// Fizz Buzz  - Instructions --> 
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:
// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n){
  let newArr = []
  for(let i = 1; i <= n; i++){
    
    if(i % 15 == 0) {newArr.push("FizzBuzz")}
    else if(i % 3 == 0) {newArr.push("Fizz")}
    else if(i % 5 == 0) {newArr.push("Buzz")}
    else {newArr.push(i)}
  }
  return newArr
}


//P: A whole number, always greater than one 
//R: Return an array of numbers containing 1 through our parameter declaration. Replace multiples of 3 with
// "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz"
//E:  fizzbuzz(5) --> [1,2,"Fizz", 4, "Buzz"]
//P: Make four decisions - returning either Fizz, Buzz, FizzBuzz, or a number depending on whether the number
// is a multiple of 3, 5, both 3 and 5, or none.