// Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

function century(year) {
  let count = 0
  for(let i = 0; i < year; i+=100){
    console.log(i)
    count++
  }
  return count
}

// this passed some and failed some others, also infinite loop crashed me browser


// P: We're passing in a year (number/integer) into our function. 
// R: Based on the range (i.e. 101-200) we are returning the century (a num) that year took place in.
// E: 
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// P: We could loop through *year*, starting at 0, by 100 each increment spanning a century each increment.
// Since we're returning a number, we could return the century, as n + 1, n being the number of times
// we looped through (count the loops).... so one loop would suffice for the first 100 years, 
// and return 0 + 1 for the first century.


function century(year) {
    return Math.ceil(year/100)
    
}
  
  // lol