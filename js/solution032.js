// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. 
// You should find the N-th power of the element in the array with the index N. 
// If N is outside of the array, then return -1. Don't forget that the first element has 
// the index 0.

// Let's look at a few examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
  if (array.length - 1 - n < 0){
    return -1
  } else {
    return Math.pow(array[n], n)
    }
}

// P: an array and a number (non-negative integer)
// R: return the number within the index of the array, raised to the power of that index
// E: array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//    array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
// P: Pass an array and a number. Search that array, point to the index of the number being passed 
// through. If valid index (index exists in our array), return element with an exponent of the index.
// If index does not exist, return -1
// Since we're dealing with exponents, we'll be using math.pow
