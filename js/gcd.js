// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)


// greatest common divisor = largest positive integer that divides each of the integers


// two nums are inputs, always numbers no funny business . whole positive integers only

// function gcd(x, y) {
//     let r = x % y;
//     while (r !== 0) {
//       x = y;
//       y = r;
//       r = x % y;
//     }
//     return y;
//   }


// clarify -> will you give us numbers that dont have a GCD? if yes, you will have to just return 1
//Traditional for loop
  // start with biggest number, check to see if divisible by both numbers (evenly)
  function gcd(x,y) {
    //take the smaller number, divide it evenly into both nums till we reach 0
    for(let i = Math.min(x,y); i > 0; i--) {
        // if they are evenly divided into eachother, you know you found GCD -> essentially our base case
        if ( x % i === 0 && y % i === 0 ) {
            return i
        }
    }
}

//specific Euclidian Algorithm used for GCD -> find the value that enables the number to go into the other with some remainder
// e.g. 30 = 12 * q + r
// 12 goes into 30 two times. 12 * 2 = 24, with a remainder of 6. 
// shift our window so that 12 is now the greater number, the remainder becomes the value we want ot multiply by q
// 12 = 6 * 2 + 0
// we get a remainder of 0, and go to the previous remainder, which is the GCD
// function gcd(x,y) {
    
// }

//recursive solution
// function gdc(x,y) {
//     let r = x % y
//     if(r < 1) {
//         return y
//     }

// }

console.log(gcd(30,12),6) // 12, 11, 10, 9, 8, 7, 6 ... 6 goes evenyl into 30 and 12, so we return i
console.log(gcd(8,9),1) // there is no GCD, return 1
console.log(gcd(1,1),1) 


// The while loop in the implementation of the GCD function performs the core calculation of the Euclidean algorithm. It uses the modulo operator to determine the remainder of the division of one number by another, and repeatedly updates the values of x and y until the remainder r is equal to 0.

// In each iteration of the loop:

    // The value of x is assigned to y
    // The value of the remainder r is assigned to y
    // The value of y is divided by r and the result is assigned to r
// The loop continues until r is equal to 0, which means that y is the GCD of x and y. At that point, the function returns y as the result.

// This algorithm is an efficient way of finding the GCD of two numbers because it reduces the problem of finding the GCD to smaller subproblems, making it possible to find the answer in a finite number of steps.