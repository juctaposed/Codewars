// Count the divisors of a number

// Instructions - Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

function getDivisorsCnt(n){
    for(var d = 0, i = n; i > 0; i--){
      if(n % i == 0) d++
      
    }
    return d
}

//p our parameters will be a single whole number (integer) that will always be positive up to 500,000
//r we want to return all whole numbers that can go into a number
//e  4 --> 3 (1, 2, 4)
//   5 --> 2 (1, 5)
//   12 --> 6 (1, 2, 3, 4, 6, 12)
//   30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
//p take in a number within a function, check in a for loop up to 500,000 IF divisible 
//  by i and a whole number, return a count of those numbers