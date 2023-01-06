function fib(n, memo) {
    if (memo[n] != null) {
        return memo[n]
    }
    let result = 0
    if (n == 1 || n == 2) {
        result = 1
    } else {
        result = fib(n-1, memo) + fib(n-2, memo)
    }
    memo[n] = result
    return result
}

console.log(fib(1423, {}))