//Reverse Words

//Instructions -
// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//       assert.strictEqual(reverseWords('apple'), 'elppa');
//       assert.strictEqual(reverseWords('a b c d'), 'a b c d');
//       assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//     });
//   });
  

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

//P: We will be passing a string - assuming no integers/floats, etc
//R: We need to return a string, where the order of the words is the same BUT the spelling 
// is reversed. Also need to return capital letters
//E: "This is an example!" ==> "sihT si na !elpmaxe"
//    "double  spaces"      ==> "elbuod  secaps"
//P: We should take in a string, returning each word in the string reversed. 
//   Thinking split/reverse/join might work for more than reversing the entire string

// The first spl/rev/join reverses and joins the entire string, so its reading backwards - this is placing indexes opposite of what we want
// The second reverses it back to proper indexes but with words reversed.
