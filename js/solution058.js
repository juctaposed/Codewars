// Sort by Last Char
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
  return x.split(" ").sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))

}

// P: string of wirds
// R: array of words sorted alphabetically by last character in each string
// E: ('man i need a taxi up to ubud'),-> ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
//    ('what time are we climbing up the volcano') -> ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
//    ('take me to semynak') -> ['take', 'me', 'semynak', 'to'])
// P: we pass through a string, that we need to split into an array - iterate through this array, 
//   checking the last character (slice-1) then sorting alphabetically (.sort())

// did not need to slice last character, would need to rejoin strings to the array anyway.
// Sort by comparing two elements charCode at the last index using length - 1 