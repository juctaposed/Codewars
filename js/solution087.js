
// Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}


// P: we need to make a function that passes through a name - two strings separated by a space
// R: We need to return initials based on the first characters of each string
// E: Sam Harris => S.H
//   patrick feeney => P.F
// P: split or separate the two strings starting at the space, grab the character at index 0
//    for each string. Convert to uppercase, join with a '.' between