function isPurelyPrime(n) {
    let arr = []
    for(let i = 2; i <= n; i++) {
        let flag = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if(flag){
            arr.push(i);
        }
    }
    return arr;
}
console.log(isPurelyPrime(10000))