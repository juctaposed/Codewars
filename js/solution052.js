// Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question 
// is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  return cc.slice(0, -4).replace(/\w/g, '#') + cc.slice(-4)
}



// P: Our parameters will be a string - including characters such as letters and numbers
// R: We need to return the string that was passed through as a parameter, but with all
//   characters replaced by '#', with the exception of the last four in the sequence
// E: Input: "4556364607935616" --> Output: "############5616"
//    Input: "64607935616" -->      Output: "#######5616"
//    Input:   "1" -->              Output: "1"
//    Input:"" -->                  Output: ""
// // "What was the name of your first pet?"
//    Input:"Skippy" --> Output: "##ippy"

//    Input:"Nananananananananananananananana Batman!"
//    Output: "####################################man!"
// P: We need to write a function that passes in a string of sensitive information. 
// we need to return that string, censored by replacing all characters with '#', exception
// being up to the last 4 characters in sequence. (if only 1 character the whole string is
// returned)