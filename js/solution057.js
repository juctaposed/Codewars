// Odd or Even?

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


function oddOrEven(array) {
    const sumOfArray = array.reduce((sum, current) => sum + current, 0)
    if (sumOfArray % 2 == 0){
      return "even"
    }else {
      return "odd"
    }
 }

// P: We will pass through a list, or array, of positively or negatively signed integers and 0
// R: We will make a decision to return one of two strings, "odd" or "even"
// E: Input: [0]
//   Output: "even"

//   Input: [0, 1, 4]
//   Output: "odd"

//   Input: [0, -1, -5]
//   Output: "even"
// P: Since we're dealing with a sum, we can likely reduce the array, then consider conditionals: 
//  If sum of elements is divisible by 2 (mod2), OR if it == 0, return 'even'
//   Else return 'odd'

//   it('Edge tests', () => {
//     assert.strictEqual(oddOrEven([0]), 'even')
//     assert.strictEqual(oddOrEven([1]), 'odd')
//     assert.strictEqual(oddOrEven([]), 'even')
//   });
  
//   it('Even tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
//     assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
//     assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
//   });
  
//   it('Negative Even tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
//     assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
//     assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
//   });
  
//   it('Odd tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
//     assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
//     assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
//   });
  
//   it('Negative Odd tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
//     assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
//     assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
//   });