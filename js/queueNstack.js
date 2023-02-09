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
        this.size = 0
    }
    push(element) {
        this.size++
        this.storage[this.size] = element
    }
    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }
}

const queue = new Queue()
const stack = new Stack()