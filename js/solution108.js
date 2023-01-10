// FizzBuzz
// INSTRUCTIONS:

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// 1 to n,n param

// will n ever be a string? a boolean? array? object? special characters? no
// n will always be a positive number? yes
// will n ever be a float? no
// always returning a string or a number 

// if n = multiple of 3, return 'Fizz'
// if n = multiple of 5, return 'Buzz'
// if n = multiple of 3 and 5, return 'FizzBuzz'
// else return n


function fizzbuzz(n) {
//   if n = multiple of 3, return 'Fizz'
//   if n = multiple of 5, return 'Buzz'
//   if n = multiple of 3 and 5, return 'FizzBuzz'
//   else return all the numbers up to n
  let arr = []
  for (let i = 1; i <= n; i++) {
    
    if (i % 3 === 0 && i % 5 === 0){
      arr.push('FizzBuzz')
    } 
    else if (i % 5 === 0) {
      arr.push('Buzz')
    }
    else if (i % 3 === 0) {
      arr.push('Fizz')
    } 
    else {
      arr.push(i)
    }
    
  }
  return arr
  console.log(arr)
}