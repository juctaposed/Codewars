// Can we divide it?
// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true


function isDivideBy(number, a, b) {
  if (number % a == 0 && number % b == 0) {
      return true
      }
  else {
    return false
  }
}


// P: we are passing in three numbers -> A whole number, positive or negative, that will be divided by two sequential numbers 
// R: We should return a boolean value based on whether the first number is divsisible by the next 2.
// E: isDivideBy(20, 10, 2) = true
//    isDivideBy(6, 2, 5) = false
// P: If num1 is divisible by both num2 AND num3, return true. Else, return false