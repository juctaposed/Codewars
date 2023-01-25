// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

function factorial(n) {
    if (n < 2) {
        return 1
    }
    return n * factorial(n-1)
}


5 * factorial(5 - 1)
    4 * factorial(4 - 1)
        3 * factorial (3 - 1)
            2 * factorial (2 - 1)


// work until you solve it and then it bubbles up. We worked fibonacci like a tree - its on both sides
// factorial you arej ust worrying about one thing, and then you can 
// Type it out/draw it out. Get down to factorial of 1. Bubble back up
