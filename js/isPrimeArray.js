// function isPrime(n) {
//     let arr = []
//     for(let i = 1; i <= n; i++) {
//         if (i <= 1) {
//             arr.push(i + ' is not prime');
//         }
//         if (i === 2) {
//             arr.push(i + ' is prime');
//         }
//         if (i % 2 === 0 || i !== 2) {
//             arr.push(i + ' is not prime');
//         }
//         for (let j = 5; j * j <= n; j += 6) {
//             if (i % j === 0 || i % (j + 2) === 0) {
//                 arr.push(j + ' is not prime');
//                 break;
//             }
//         }
//     }
//     return arr;
// }


// console.log(isPrime(7))



function isPrime(n) {
    let arr = []
    for(let i = 1; i <= n; i++) {
        if (i <= 1) {
            arr.push(i + ' is not prime');
        }
        else if (i === 2) {
            arr.push(i + ' is prime');
        }
        else {
            let flag = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    arr.push(i + ' is not prime');
                    flag = false;
                    break;
                }
            }
            if(flag){
               arr.push(i + ' is prime');
            }
        }
    }
    return arr;
}
console.log(isPrime(50))