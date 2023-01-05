// Get the mean of an array

// passing in an array - no strings/special characters/nested arrays? No funny business only numbers
// in our numbers array, any floats/decimals? only whole numbers? will there ever be negative numbers or are we working with
// positive numbers only? Positive whole integers only

// will there ever be an empty array? No
// need the average
// round down the result -> 2.3 => 2, 2.6 => 3? No never round up only down.... so 2.6 => 2


function getAverage(array) {

  // reduce (find the sum of an array)
  let sum = array.reduce((acc, curr) => acc + curr, 0)
  // find the average from reduce
  let avg = sum / array.length
  // round the average down
  return Math.floor(avg)

}

// (getAverage([2,2,2,2]),2);
// (getAverage([1,2,3,4,5,]),3);
// (getAverage([1,1,1,1,1,1,1,2]),1);