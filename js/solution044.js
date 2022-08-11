// Counting sheep...
// Instructions - Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep 
// present in the array (true means present).
// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let count = 0
  for (let i = 0; i <= arrayOfSheep.length; i++) {
    if(arrayOfSheep[i]===true){
      count += 1
    }
  }
  return count
}




// P: We're passing an array of true/false
// R: We need to return the sum of all sheep present (with a true value)
// E: [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
//  return sheepPresent -> 17
// P: Iterate through an array (null/undefined possible), count & add all returns of true. Return count