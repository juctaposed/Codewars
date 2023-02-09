class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(item) {
        this.storage[this.tail] = item
        this.tail++
    }
    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}


class Stack {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    push(item) {
        this.storage[this.tail] = item
        this.tail++
    }
    pop() {
        let removed = this.storage[this.tail]
        this.tail--
        delete this.storage[this.tail]
        return removed
    }
}

const queue = new Queue()
const stack = new Stack()