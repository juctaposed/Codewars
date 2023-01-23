function isDifferencePrime(n) {
    let arr = []
    let lastPrime = 2;
    for(let i = 2; i <= n; i++) {
        let flag = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if(flag){
            arr.push(i - lastPrime);
            lastPrime = i;
        }
    }
    // arr.shift() // remove 0 to show a cleaner array proscribing the difference between each prime number.
    return arr;
}
console.log(isDifferencePrime(10000))


