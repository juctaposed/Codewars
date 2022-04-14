// Is there a vowel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


// pass in array of numbers, only numbers (no strings/nested arrays), no funny business
// whole numbers? only integers. empty array? no there will always be numbers.

// return character codes, check if number === lower case letter of vowels code, 
// if so return the vowel instead of a number
// 

//Regex
// function isVow(arr) {
  
//   return arr.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x)

  // make a decision for each vowel, if a number is === the ASCII for that lowercase vowel, return the lowercase vowel as a string
  function isVow(a){
    return a.map(i => {
    if (String.fromCharCode(i) === 'a')
    return 'a';
    else if (String.fromCharCode(i) === 'e')
    return 'e';
    else if (String.fromCharCode(i) === 'i')
    return 'i';
    else if (String.fromCharCode(i) === 'o')
    return 'o';
    else if (String.fromCharCode(i) === 'u')
    return 'u';
    else 
    return i;
    })
    }
  // if not a vowel, return that number
// }


// isVow([118, 111, 108, 116], 'volt', [118, 'o', 108, 116])
// isVow([098, 107, 098, 109, 112, 098, 122, 120 ], 'bkbmpbzx', [098, 107, 098, 109, 112, 098, 122, 120])
// isVow([097, 099, 105, 106, 100, 111, 117, 105, 101], 'acijdouie', ['a', 099, 'i', 106, 100, 'o', 'u', 'i', 'e'])