// Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
  return string.split(' ')
  .map(value => {
    if (value.length >= 5)
      return value
        .split('')
        .reverse()
        .join('')
    return value
  })
   .join(' ')
}


// P: We're passing in a string of varying word count
// R: we need to return the string as is, unless a word in the string has 5 or more characters, then reverse the word
// E: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
//    spinWords( "This is a test") => returns "This is a test" 
//    spinWords( "This is another test" )=> returns "This is rehtona test"
// P: let split = split at each space within the string, forEach element check if length is >= 5, if yes reverse join.
// else, return string 