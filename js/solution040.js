//Beginner Series #4 Cockroach

// Instructions - The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, 
// rounded down to the integer (= floored).

// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  let centimeterPerSec = 27.7777777778
  return Math.floor(centimeterPerSec * s) 
}


// 1km/h = 27.7778 cm/s

//P: We are passing in a real, whole number equal to or greater than 0.
//R: We are returning a number (integer) by multiplying a variable by the parameter. Use math.floor to round 
//   the int.
//E: 1.08(km/h) --> 30(cm/s)
//P: We found the conversion by dividing the example CM/s by KM/h. Return output from a function that 
// calculates cm/s from km/h by MULTIPLYING how many cm/s are in 1 km/h.
//  Return as an integer and use math.floor to round