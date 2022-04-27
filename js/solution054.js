function stringToArray(string){

  const splitStr = string.split(' ')
  return splitStr


}

// P: we need to pass through a string in our func
// R: we need to return an array of words when our function completes, each word of our parameter being
// its own string.
// E: "Robin Singh" ==> ["Robin", "Singh"]
//    "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
// P: We may have to create an empty array to push our strings to. <- did not, ended up being a nested
//    array. Split each string separated by a space to indicate beginning of new word. Return the array
//   of strings.
