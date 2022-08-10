// Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.


const number=function(array){
  return array.map((element, index) => {
    return `${index + 1}: ${element}`
  })
  
}


// P: Pass through a list of strings
// R: Return a list of strings with numbering (beginning at 1) added to the start of each element in the array
// E: [] --> []
//    ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
// P: Set an empty array so we can add data. Find index[0], add "1: " within the string at the beginning. Loop 
//   through the entire array, adding 1 to both index and number added until we reach end of the array.
//   Return the new array with n: string format added.
// Alternatively, use map to pair element and index without having to create new instance through for loop/forEach. 