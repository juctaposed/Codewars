// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
  return str.split('').splice(0, str.length - 1).splice(1).join('')
};



// P: we're passing through a string in our function
// R: We should return a string that has removed both the first and last character of the 
// string parameter
// E: 
//     assert.strictEqual(removeChar('eloquent'), 'loquen');
//     assert.strictEqual(removeChar('country'), 'ountr');
//     assert.strictEqual(removeChar('person'), 'erso');
//     assert.strictEqual(removeChar('place'), 'lac');
//     assert.strictEqual(removeChar('ooopsss'), 'oopss');
// P: We can split the string, creating an array of each letter. we can remove (splice) the c
// character at the end of the array, and the first character [0]. join the array and then return
