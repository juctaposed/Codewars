// You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  return a.includes(x);
}

// P: we need to pass through an array containing numbers or strings, and a value - either a number or a string
// R: we should return true/false if the array contains x
// E:     
//     assert.strictEqual(check([66, 101], 66), true);
//     assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
//     assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
//     assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
// P: We could loop through our array or check if the array has the value x via includes method