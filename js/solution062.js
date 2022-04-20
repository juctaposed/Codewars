// String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


function repeatStr (n, s) {
  return s.repeat(n)
  
}



// P: We need to pass through an integer and a string.
// R: Return the string being passed, n times (dependant on integer parameter)
// E: 
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"
// P: Repeat s (string) n number of times