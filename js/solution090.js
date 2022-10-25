// Sort and Star

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// passing an array of strings 
// return a string sorted by case/ASCII values -> place '***' before each letter in this string.

// will the array ever not be of strings? Any numbers, spec characters, booleans, objects, etc? No funny business only strings
// Will teh array ever be empty? No

// When we return a value it'll be a string of the first sorted index, with *** before each letter, e.g.
// ['baby', 'crocodile', ...] -> 'b***a***b***y'

// function twoSort(arr) {
//   // apply sort method to array 
//   // grab index at 0, or the first value
//   // split by character, join back with *** between each char
//   return arr.sort()[0].split('').join('***')
  
// }
// Do you and the team like comments in the code explaining thought processes or typically leave them out?
// Do you all use ES6 syntax? Do you use one liners in your code? Ok awesome lets refactor -
const twoSort = arr => arr.sort()[0].split('').join('***')


// twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');