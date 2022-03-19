// Convert a Boolean to a String
// Instructions - Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  return b.toString()
}

// P: we will pass in a boolean value (true/false) as a parameter of our function
// R: We need to return a string -> since its a boolean it will either output 'true' or 'false'
// E: Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
//    Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
// P: Since there are only two possible boolean values we could make a decision for each one (if this value return x,
//  else return y) or we could work with a toString method for less code 

// function booleanToString(b){
//   if (b == true) {
//     return 'true'
//   }else {
//     return 'false'
//   }
// }