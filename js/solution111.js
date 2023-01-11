// Count the Monkeys! -> https://www.codewars.com/kata/56f69d9f9400f508fb000ba7


function monkeyCount(n) {
    //working with an array -> loop through and push each iteration, return array
    let arr = []
    for(let i = 1; i <= n; i++) {
      arr.push(i)
    }
    return arr
  }
  
  
  // pass in n (number of monkeys)
  //   RETURN an array of each number starting from 1 to n
    
  // whole numbers? only positive? Excluding zero.
  // returning an array of numbers? never anything els? no funny biz?
    