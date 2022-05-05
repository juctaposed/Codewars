// How good are you really?

// Instructions - There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a,b) => a + b, 0) / classPoints.length
  }
  
  
  // P: We will pass through an array of classmates scores (ours included in array), as well as our standalone score
  // R: We will return the average of the array, and True if we have a higher score, False if lower.
  // E: Example: ([100, 40, 30, 25, 50, 30, 70, 58, 88], 75) -> true
  // P: Take in an array - start from empty. run conditional -> add numbers in array/divide by arr.length, < or >?