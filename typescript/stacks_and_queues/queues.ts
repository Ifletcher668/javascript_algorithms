interface Queue {
    enqueuePriority: (val: any, priority: number) => Queue;
    dequeuePriority: any;
}

class Queue {
    public items: any[];
    constructor(items = []) {
        this.items = items;
    }
    dequeuePriority;
    enqueue(item: any) {
        this.items.push(item);
        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Underflow';
        }

        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return null;
        else return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        const obj = JSON.stringify(this.items);
        const str = this.items.join('  ');
        console.log(str);
        return str;
    }

    compareQueues(q2: Queue) {
        if (this.size() !== q2.size()) {
            return false;
        }
        let count = 0;
        let isEqual = true;
        const len = this.size();

        while (count < len) {
            const dequeued1 = this.dequeue();
            const dequeued2 = q2.dequeue();

            if (dequeued1 !== dequeued2) {
                isEqual = false;
            }

            this.enqueue(dequeued1);
            q2.enqueue(dequeued2);
            count++;
        }

        return isEqual;
    }

    // isSumOfHalvesEqual() {
    //     const len = this.size();

    //     if (len % 2 !== 0) {
    //         return false;
    //     }

    //     const halfLen = len / 2;
    //     let leftSum = 0;
    //     let rightSum = 0;
    //     let count = 0;

    //         if (count < halfLen) {
    //             leftSum += dequeued;
    //         } else {
    //             rightSum += dequeued;
    //         }

    //         count++;
    //         this.enqueue(dequeued);
    //         return leftSum === rightSum;
    //     }
}

Queue.prototype.enqueuePriority = function (val: any, priority: number) {
    let obj = {
        value: val,
        priority: priority,
    };
    if (this.isEmpty()) {
        this.items.push();
    }
    let i = 0;
    while (this.items[i]['priority'] <= priority) {
        i++;
    }
    this.items.splice(i, 0, obj);
    return this;
};

Queue.prototype.dequeuePriority = function (priority: number) {
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i]['priority'] === priority) {
            const data = this.items[i];
            this.items.splice(i, 1);
            console.log(data);
            return data;
        }
    }
    console.log('Priority number not found');
    return null;
};

function testEnqueuePriority() {
    console.log('Beginning enqueue testing');
    let testPriorityQueue = new Queue();
    testPriorityQueue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5);
    testPriorityQueue.print();
    testPriorityQueue.enqueuePriority(11, 3);
    testPriorityQueue.print();
    testPriorityQueue.enqueuePriority(2, 2);
    testPriorityQueue.print();
    testPriorityQueue.enqueuePriority(11, 1);
    testPriorityQueue.print();
    testPriorityQueue.enqueuePriority([1, 2], 2);
    testPriorityQueue.print();
    testPriorityQueue.enqueuePriority('test', 1);
    testPriorityQueue.print();
    testPriorityQueue.enqueuePriority(12, 1);
    testPriorityQueue.print();
    testPriorityQueue.enqueuePriority(6, 2);
    testPriorityQueue.print();
    testPriorityQueue.enqueuePriority(6, 3);
    testPriorityQueue.print();
    testPriorityQueue.enqueuePriority(6, 2);
    testPriorityQueue.print();
    testDequeuePriority(testPriorityQueue);
}

testEnqueuePriority();

function testDequeuePriority(queue: Queue) {
    console.log('\nDequeue testing');
    queue.print();
    queue.dequeuePriority(3);
    queue.print();
    queue.dequeuePriority(2);
    queue.print();
    queue.dequeuePriority(1);
    queue.print();
    queue.dequeuePriority(2);
    queue.print();
    queue.dequeuePriority(1);
    queue.print();
    queue.dequeuePriority(1);
    queue.print();
    queue.dequeuePriority(2);
    queue.print();
    queue.dequeuePriority(3);
    queue.print();
    queue.dequeuePriority(2);
    queue.print();
}
