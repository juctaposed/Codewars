// String transformer
//INSTRUCTIONS:
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// --------------------------------------------------------------------------

// string -> new string

// change case of every character - lower to upper, upper to lower
// reverse order of words from original string

// passing in a string numbers? spec char? any funny business? No normal letters in a string
// these letters will form words, and those words will be separated by a space? Correct
// We wont ever have to deal with recognizing words that are mushed together? Nope
// Will the input ever be an empty string? No
// Will it always have two + words then? Yes
// Multiple spaces and leading/trailing spaces are a possibility

// return a new string (no funny biz), switch casings from Upper to Lower, or Lower to Upper (make a decision)
// reversing the order in which our words are presented in our new string



// function stringTransformer(str) {
//   // reverse method -> split the string into an array, reverse, join back
//   // making decisions on each character - if uppercase apply toLowerCase(), if lowercase apply toUpperCase()
//   let reversedStr = str.split(' ').reverse().join(' ')
//   let stringTransformed = reversedStr.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
//   return stringTransformed
// }
// How do you and teammates feel about comments in code for thought processes and documentation? Do you care for it at all?
// Do you use ES6 Syntax? do you prefer one liners? Awesome
const stringTransformer = str => str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
    
console.log(stringTransformer('Example string'), 'STRING eXAMPLE')
console.log(stringTransformer('Test Input'), 'iNPUT tEST')
console.log(stringTransformer('Foo Bar bAr Baz'), 'bAZ BaR bAR fOO')