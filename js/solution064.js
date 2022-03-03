// Convert a String to a Number!
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
  return Number(str)
}



// P: we're passing throguh a string, assuming every input is a string representing integers
// R: we need to return a number translated from that string
// E: 
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
// P: there may be tricks with concatenation - when adding a string to a number, or vice versa, they 
// will concatenate instead of add - will this turn the primitive type to a string or number?
// alternatively, we could use the Number() constructor to return a conversion to
// call a primitive number type.