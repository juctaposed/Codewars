//Binary Addition

// Instructions - 
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a,b) {
  return (a+b).toString(2)
}

//P: We will be passing through two numbers, whole numbers, no integers?
//R: Return a string that is the sum of two numbers as a whole number in binary
//E: 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//   5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
//P: Take in two numbers. Add them. Divide by 2 -> repeat in loop until you have a quotient of zero.
// For each loop iteration, take note of the remainder as you divide.  Reverse the remainders
// for each division to return the number in binary.

// Alternatively, we could use a radix parameter to specify a binary return through toString.