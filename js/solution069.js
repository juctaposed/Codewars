// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// P: we need to pass in a String
// R: return either a 0 or 1 based on if the digit is above or below 5
// E: console.log(fakeBin('123789')) // 000111
// P: Split the string so we can check individual characters. run a check -> is this element less than 5? if so return 0.
// otherwise, return 1. Join back the string and return the new string
