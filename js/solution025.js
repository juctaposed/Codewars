//Count by X
//Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).


//P: Our functions parameters will be the two variables x and n, n being the multiple of x for our array length.
//R: Return an array that counts by the multiple stated in parameter. x > 0 && n > 0 
//E: countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//   countBy(2,5) === [2,4,6,8,10]
//P: iterate through a loop until condition equals our variables multiplied, return the each iteration of multiplication, or "count"

function countBy(x, n) {
  const z = [];
  for (let i = 1; i <= n * x; i++) 
    if(i % x === 0) 
    z.push(i);
    return z;
}