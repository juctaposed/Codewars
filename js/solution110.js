// Sort by Last Char -> https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 


// so we're grabbing the last letter - and this last letter is the only thing that counts in ordering the resulting array.
// we're passing in a string - are we alwasy taking in a string? will it not always be words? never empty? No funny business like special characters, booleans, spaces?
// we're returning a sorted array based on last letter of each word.

// all the alarms are going off for split - we need to return an array to separate each word.
// we also need to sort - so we can just use the sort method on the array


// function sortLastChar(x) {
    // split -> sort
    // what are we splitting by? Since split is lexagraphical it is checking the letters, and their position in the alphabet. We can look for char codes
    // If we just grab the letter, sort can handle this itself. 
    // sort -> char codes
    // return x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
    // charCode is 0 index, treating it as an index value -> we apply -1 because it starts at 0
    // look at the wrod, grab last letter, compare to next word and its last letter - check lexagraphically if it comes further along, if not sort it in order
// }
const sortLastChar = x => x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))


console.log(sortLastChar('man i need a taxi up to ubud'), "['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']")
console.log(sortLastChar('what time are we climbing up the volcano'), "['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']")
console.log(sortLastChar('take me to semynak'), "['take', 'me', 'semynak', 'to']")


// There was a neat discussion on codewars for a charAt solution. Apparently, using letters in a sort gets funky because it involves switching boolean results to 1s and 0s like the sort method is expecting. Sometimes they stay boolean and it breaks.
// It's because charAt returns the character itself and not a number.
