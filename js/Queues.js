// const queue = [] 

// //enqueue
// queue.push('lobster')
// queue.push('tuna')
// queue.push('seaturtle')

// // console.log(queue) = ['lobster', 'tuna', 'seaturtle']

// //dequeue
// queue.shift() // ['tuna', 'seaturtle']
// queue.shift() // ['seaturtle']


//Using JS classes -> Create a queue using objects instead of arrays, allowing us to dequeue in constant time instead of linear. 

class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }   
    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head] // dont need this in js?? atleast not in codewar solution
        this.head++
        return removed
    }
}
// dealing with size using the object solution? -> this.tail - this.head

const queue = new Queue() 

queue.enqueue('lobster')
queue.enqueue('tuna')
queue.enqueue('seaturtle')
console.log(queue)


queue.dequeue() 
console.log(queue)
queue.dequeue()
console.log(queue)

// Theorize what is happening during each call of enqueue and dequeue using the Object method in particular. 
// Head and tail can be set to not just numbers, but numbers are a useful way of keeping track of each's position as clearly as possible.
// Are head and tail diverged? Do we need to worry about stepping on the toes of one to calculate the other? Why? 

