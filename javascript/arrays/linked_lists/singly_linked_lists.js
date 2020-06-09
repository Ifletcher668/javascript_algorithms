"use strict";
class SLLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }
    display() {
        if (this.isEmpty())
            return console.log('empty');
        if (this.head.next === null)
            return console.log(`data: ${this.head.data}`);
        let data = '';
        let runner = this.head;
        while (runner) {
            if (runner.next === null) {
                data += `and ${runner.data}`;
                return console.log(`data: ${data}`);
            }
            else {
                data += `${runner.data}, `;
                runner = runner.next;
            }
        }
    }
    seedFromArray(arr) {
        for (const element of arr) {
            this.insertAtBack(element);
        }
        return this;
    }
    insertAtFront(val) {
        const newNode = new SLLNode(val);
        if (this.head === null) {
            this.head = newNode;
            return this;
        }
        const temp = this.head;
        this.head = newNode;
        this.head.next = temp;
        return this;
    }
    insertAtBack(val) {
        const newNode = new SLLNode(val);
        if (this.head === null) {
            this.head = newNode;
            return this;
        }
        let runner = this.head;
        while (runner.next) {
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
    }
    removeFromFront() {
        if (this.isEmpty())
            return null;
        if (this.head.next === null) {
            const temp = this.head;
            this.head = null;
            return temp;
        }
        const removedNode = this.head;
        const temp = removedNode.next;
        removedNode.next = null;
        const newHead = temp;
        this.head = newHead;
        return removedNode;
    }
    removeFromBack() {
        if (this.isEmpty())
            return null;
        if (this.head.next === null) {
            const temp = this.head;
            this.head = null;
            return temp;
        }
        let runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        const removedNode = runner.next;
        runner.next = null;
        return removedNode;
    }
    middleValue() {
        if (this.isEmpty() || this.head.next === null)
            return null;
        // or, return the head, since it could be considered the middle value.
        let runner = this.head;
        let count = 0;
        while (runner) {
            count++;
            runner = runner.next;
        }
        let middle = Math.floor(count / 2);
        runner = this.head;
        for (let i = 0; i < middle; i++) {
            runner = runner.next;
        }
        return runner.data;
    }
    contains(val) {
        if (this.isEmpty())
            return null;
        let runner = this.head;
        while (runner) {
            if (runner.data === val)
                return true;
            else
                runner = runner.next;
        }
        return false;
    }
}
const list = new SLL();
list.display();
// list.insertAtFront(100).insertAtFront(35).insertAtFront(50);
const arr = [1, 4, 3, 2, 6, 2, 3, 9];
list.seedFromArray(arr);
list.display();
// console.log(list.middleValue());
// for (let i: number = 0; i < arr.length; i++) {
//     list.removeFromBack();
//     list.display();
// }
