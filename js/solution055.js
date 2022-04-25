// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
  if (url.includes('#')){
    return url.split('#')[0]
  } else {
    return url
  }
}



// P: pass through a URL (string).. will likely include numbers/special characters as well as letters
// R: return a string that is equal to the parameter string, except if URL contains '#', remove any
//    part of the string after that character.
// E: "www.codewars.com#about" --> "www.codewars.com"
//    "www.codewars.com?page=1" -->"www.codewars.com?page=1"
// P: We need to make a decision based on some checks. If url includes '#', split the string at that 
// character. Else, return the entire string.

// *Notes: easier than I thought, we can split at a given character, and return the string from the first element

// includes()
// charCode for # = 35
// charCode()
// charCodeAt()
// .split()