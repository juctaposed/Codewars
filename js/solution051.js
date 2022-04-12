// Reversed Words

// Instructions - Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
 return str.split(" ").reverse("").join(" ") // reverse those words
}

// P:  We need to pass through a string as a parameter. 
// R:  Return a new string that reverses the order of each substring within the string
// E:  Input : --> "The greatest victory is that which requires no battle" 
//     Output: --> "battle no requires which that is victory greatest The"
// P: Divide the array of strings into substrings, separate substrings and reverse their order before rejoining