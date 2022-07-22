// Remove the minimum

// Instructions:
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up 
// with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest 
// rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a 
// program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple 
// elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty 
// array/list.
// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  let indexOfMinimum = numbers.indexOf(Math.min(...numbers))
  return [...numbers.slice(0, indexOfMinimum), ...numbers.slice(indexOfMinimum + 1)]
}

// P: an array of integers
// R: an array of integers, less the smallest value that also has the lowest index WITHOUT modifying the original array
// E: * Input: [1,2,3,4,5], output= [2,3,4,5]
//    * Input: [5,3,2,1,4], output = [5,3,2,4]
//    * Input: [2,2,1,2,1], output = [2,2,2,1]
// P: pass through the data via array, in this case our exhibitions with their ratings. 
// filter/slice out the index that is the minimum number in the array.
// If there are duplicate minimums, remove first index passed on. 
// Return shadow copy / new array
