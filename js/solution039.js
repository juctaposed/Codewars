//Break camelCase
// Instructions -
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let newS = ""
  for (letter of string){
    if(letter == letter.toUpperCase()){
      newS += " "
      newS += letter
    }else {
      newS += letter
    }
  }
  return newS
}


//P: We are passing through a string, correct assuming no numbers or or other types?
//R: We will return a new string spacing only to break up camel Casing.
//E: "camelCasing" -> "camel Casing"
//   "totallyCoolGuy" -> "totally Cool Guy"
//P: Perhaps iterate through a string, checking for capital letters, place a space between any
// capital letters 