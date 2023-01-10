// Duplicate Encoder

// INSTRUCTIONS:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



// pass in a string -> always a string? never a number, special characters, array, object, boolean? Always a string but can contain special characters in that string
// May contain capital letters.
// Will it ever be an empty string? No. Will it always be just one string? yes.

// we should return a new string: replacing characters that are dupes with ) and not dupes with (
  
// function duplicateEncode(str) {
//   // toLowerCase
//   // in order to map, we need an array -> split the string via each char into an array of letters
//   // map -> change each letter to a paren
//   // compare: indexOf with lastIndexOf, if ===, return '('. Else return ')'
//   // join back each letter into one string
//   return str.toLowerCase()
//     .split('')
//     .map(( l, i, a ) => a.indexOf(l) === a.lastIndexOf(l) ? '(' : ')' )
//     .join('')
  
// }
// Do you appreciate comments in your codebase? For thought processes or no? Ok
// Does the team use ES6 Syntax? Are one-liners common in the codebase? Ok here let's try this:
const duplicateEncode = str => str.toLowerCase().split('').map(( l, i, a) => a.indexOf(l) === a.lastIndexOf(l) ? '(' : ')' ).join('')
  
  
// duplicateEncode("din"),"(((");
// duplicateEncode("recede"),"()()()");
// duplicateEncode("Success"),")())())","should ignore case");
// duplicateEncode("(( @"),"))((");