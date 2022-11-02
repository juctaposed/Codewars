// Sum of Positive


//arr of numbers, sum all positive ones
// all numbers , no funny business. both positive and negative numbers, whole nums (no decimals...no floats only integers) 
// is there a range of numbers we can expect our array to be? will it ever be empty? Will the range ever be all positive or all negative?
// return one number -> sum of all positive numbers

function positiveSum (arrayOfNumbers){
  //filter out negative values
  const filteredArray = arrayOfNumbers.filter(element => element > 0)
    //dealing with a sum of numbers instantly has me thinking, ok, we could probably use .reduce() method here
    return filteredArray.reduce((acc, c) => acc + c, 0)
}

// console.log(sumOfPositiveNum([1, 5, -12, 14], '20'))
// console.log(sumOfPositiveNum([0, 0], '0'))
// console.log(sumOfPositiveNum([100, 200, 300, -400, 500, 900], '2000'))