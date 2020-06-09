class SLLNode {
    public data: any;
    public next: SLLNode | null;

    public constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    public head: SLLNode | null;
    public constructor() {
        this.head = null;
    }

    private isEmpty() {
        return this.head === null;
    }

    public display() {
        if (this.isEmpty()) return console.log('empty');
        if (this.head!.next === null) return console.log(`data: ${this.head!.data}`);
        let data: string = '';

        let runner: SLLNode = this.head!;

        while (runner) {
            if (runner.next === null) {
                data += `and ${runner.data}`;
                return console.log(`data: ${data}`);
            } else {
                data += `${runner.data}, `;
                runner = runner.next;
            }
        }
    }

    public seedFromArray(arr: any[]) {
        for (const element of arr) {
            this.insertAtBack(element);
        }
        return this;
    }

    public insertAtFront(val: any) {
        const newNode: SLLNode = new SLLNode(val);

        if (this.head === null) {
            this.head = newNode;
            return this;
        }

        const temp: SLLNode = this.head;
        this.head = newNode;
        this.head.next = temp;
        return this;
    }

    public insertAtBack(val: any) {
        const newNode: SLLNode = new SLLNode(val);
        if (this.head === null) {
            this.head = newNode;
            return this;
        }

        let runner: SLLNode = this.head!;

        while (runner.next) {
            runner = runner.next;
        }

        runner.next = newNode;
        return this;
    }

    public removeFromFront() {
        if (this.isEmpty()) return null;

        if (this.head!.next === null) {
            const temp = this.head;
            this.head = null;
            return temp;
        }

        const removedNode = this.head!;
        const temp = removedNode.next;
        removedNode.next = null;
        const newHead: SLLNode = temp!;
        this.head = newHead;

        return removedNode;
    }

    public removeFromBack() {
        if (this.isEmpty()) return null;

        if (this.head!.next === null) {
            const temp: SLLNode = this.head!;
            this.head = null;
            return temp;
        }

        let runner: SLLNode = this.head!;

        while (runner.next!.next) {
            runner = runner.next!;
        }

        const removedNode: SLLNode = runner.next!;
        runner.next = null;

        return removedNode;
    }

    public middleValue() {
        if (this.isEmpty() || this.head!.next === null) return null;
        // or, return the head, since it could be considered the middle value.

        let runner: SLLNode = this.head!;
        let count: number = 0;

        while (runner) {
            count++;
            runner = runner.next!;
        }

        let middle: number = Math.floor(count / 2);
        runner = this.head!;

        for (let i = 0; i < middle; i++) {
            runner = runner.next as SLLNode;
        }

        return runner.data;
    }

    public contains(val: number) {
        if (this.isEmpty()) return null;

        let runner = this.head!;

        while (runner) {
            if (runner.data === val) return true;
            else runner = runner.next!;
        }

        return false;
    }

    // public numToList(num: number) {}

    // sumLists(l1: SLL, l2: SLL) {}
}

const list: SLL = new SLL();
list.display();
// list.insertAtFront(100).insertAtFront(35).insertAtFront(50);
const arr: any[] = [1, 4, 3, 2, 6, 2, 3, 9];
list.seedFromArray(arr);
list.display();
// console.log(list.middleValue());
// for (let i: number = 0; i < arr.length; i++) {
//     list.removeFromBack();
//     list.display();
// }
