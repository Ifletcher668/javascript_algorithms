"use strict";
/* w2d4
- sumOfHalvesEqual
  - create a method on the Queue class that returns whether or not the sum of the first half of the queue is equal to the sum of the second half
  - DO NOT manually index the queue items, only use the provided queue methods, use no additional arrays or objects for storage
  - restore the queue to it's original state before returning
- nextQueue
  - Design a Queue class that automatically sends every 3rd dequeued person object to a next queue that can be specified
  - Imagine a security queue where every 3rd person is randomly sent to an additional security queue */
class Stack {
    constructor(arr = []) {
        this.stack = arr;
    }
    isEmpty() {
        if (this.stack.length === 0) {
            console.log('Stack is empty');
            return null;
        }
        else {
            console.log('Stack contains values');
            return;
        }
    }
    push(val) {
        this.stack[this.stack.length] = val;
    }
    pop() {
        if (this.isEmpty()) {
            return;
        }
        this.stack.length -= 1;
        return this.stack.length;
    }
    size() {
        return this.stack.length;
    }
    peek() {
        console.log(`Value at Top of the stack: ${this.stack[this.stack.length - 1]}`);
        return this.stack[this.stack.length - 1];
    }
}
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class StackSLL {
    constructor() {
        this.head = null;
    }
}
// stack from an SLL
class SllStack {
    constructor() {
        this.stack = new SllStack();
    }
}
