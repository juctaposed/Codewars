// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.



function sumMix(x){
  return Number(x.reduce((a,b)=>Number(a)+Number(b)))
}

// P: we are passing an array of strings and numbers
// R: return the sum of every value as if they were numbers
// E:  assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//     assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
//     assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
// P: Since we're treating all the values as if they were numbers, use the Numbers constructor to 
// verify the array is entirely numbers. Working with a sum in an array -> use reduce and return the sum
