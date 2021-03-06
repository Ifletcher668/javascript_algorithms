////     1. SList: Add Back
////     2. seedFromArr: SList: Convert Array to SList
////     3. Bonus: addBack recursive
////     4. List: Add Front
////     5. List: Remove Front
/////     7. List: Contains (with & without recursion)
/////       - check if the list contains a value
////     8. SList: Remove Back
////       - remove the last node from the list
////       - bonus: return the removed val, or null if nothing was removed
//     9. Bonus:
//       - SList: Split on Value
//       - splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be a new list containing (5=>2=>4)
//     10. SList: Move Min to Front
//     11. SList: Remove Val
//         - remove the node with the specified value, return the removed val, or null if nothing was removed
//     12. Bonus:
//         - displayPeople: in a linked list containing person objects, write a method to print a comma separated string of all the people's firstName

class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    display() {
        if (this.head === null) {
            return console.log('An empty list');
        }
        if (this.head.next === null) {
            return console.log(
                `List contains a single node:\n\t\tData is "${this.head.data}";\n\t\tnext value is "${this.head.next}"`
            );
        }
        let runner = this.head;
        let values = '';
        while (runner) {
            if (runner.next === null) {
                values += `and '${runner.data}'.`;
                break;
            }
            values += `'${runner.data}', `;
            runner = runner.next;
        }
        console.log(`List values are:\n\t\t${values}`);
    }

    seedFromArray(arr) {
        // check for empty array
        if (arr.length === 0) {
            console.log('empty array given, could not instantiate a Singly Linked List');
            return null;
        } else {
            for (let i = 0; i < arr.length; i++) {
                let node = new Node(arr[i]);
                // add to back
                if (this.head === null) {
                    this.head = node;
                } else {
                    let runner = this.head;
                    while (runner.next !== null) {
                        runner = runner.next;
                    }
                    runner.next = node;
                }
            }
        }
    }

    addToFront(val) {
        let newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    addToBack(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            // this.display();
            // console.log(`\nFirst new Node instantiated:\n\t\tData is "${this.head.data}";\n\t\tnext value is "${this.head.next}"`);
            return this;
        }

        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }

        runner.next = newNode;
        // this.display();
        // console.log(`\nNew Node instantiated at back: \n\t\tData is "${runner.data}";\n\t\tnext value is "${runner.next.data}"`);
        return this;
    }

    addToBackRecursive(val, runner = this.head) {
        const newNode = new Node(val);
        // base case, where do I want the recursion to end?
        if (runner === null) {
            runner = newNode;
            this.display();
            return this;
        } else if (runner.next === null) {
            runner.next = newNode;
            this.display();
            return this;
        }
        runner = runner.next;
        return this.addToBackRecursive(val, runner);
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        } else if (this.head.next === null) {
            return this.head;
        } else {
            let head = this.head;
            let temp = head.next;
            head.next = null;
            this.head = temp;
            return head.data;
        }
    }

    removeFromBack() {
        if (this.isEmpty()) {
            console.log('List is empty');
            return null;
        } else if (this.head.next === null) {
            console.log('Removed the head, the only item in this list');
            let temp = this.head.data;
            this.head = null;
            return temp;
        } else {
            let runner = this.head;
            while (runner.next.next !== null) {
                runner = runner.next;
            }
            let temp = runner.next.data;
            runner.next = null;
            return temp;
        }
    }

    // middleValue() {
    //     if (this.isEmpty() || this.head.next === null || this.head.next.next === null) {
    //         return null
    //     }
    //     else if (this.head.next.next.next === null) {
    //         return this.head.next.data
    //     }
    //     else {
    //         let count = 0;
    //         let runner = this.head;
    //         while (runner) {
    //             count += 1;
    //             runner = runner.next
    //         }
    //         runner = this.head;
    //         if (count % 2 === 0) {
    //             count /= 2;
    //             let list = [];
    //             for (let i = 0; i < count; i++) {
    //                 if(i + 1 === count) {
    //                     break;
    //                 }
    //                      runner = runner.next
    //             }
    //             list.push(runner.data)
    //             list.push(runner.next.data)
    //             return list
    //         }
    //         else {
    //             count = Math.floor(count / 2);
    //             for (let i = 0; i < count; i++) {
    //                 runner = runner.next
    //             }
    //             return runner.data
    //         }

    //     }
    // };

    middleValue() {
        if (this.isEmpty() || this.head.next === null) {
            return null;
        }
        let count, runner, middle;
        count = 0;
        runner = this.head;
        while (runner) {
            count++;
            runner = runner.next;
        }
        middle = Math.floor(count / 2);
        runner = this.head;
        for (let i = 0; i < middle; i++) {
            runner = runner.next;
        }
        return runner.data;
    }

    contains(val) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.next === null) {
            if (this.head === val) {
                return true;
            } else {
                return false;
            }
        }
        let runner = this.head;
        while (runner !== null) {
            if (runner.data === val) {
                console.log('value found');
                return true;
            }
            runner = runner.next;
        }
        console.log('value not found');
        return false;
    }
    // duplicates removed in place, but time sacrificed. Is this actually O(n) or is it O(log(n)?
    removeDuplicates() {
        if (this.isEmpty() || this.head.next === null) {
            return;
        }

        let count, runner1, runner2, check;

        runner1 = this.head;
        count = 0;

        while (runner1) {
            count++;
            runner1 = runner1.next;
        }

        runner1 = this.head;
        runner2 = this.head;
        check = runner2.data;

        for (let i = 0; i < count; i++) {
            while (runner1.next) {
                if (runner1.next.data === check) {
                    if (runner1.next.next === null) {
                        runner1.next = null;
                        break;
                    }
                    runner1.next = runner1.next.next;
                } else {
                    runner1 = runner1.next;
                }
            }
            if (runner2.next !== null) {
                runner2 = runner2.next;
                runner1 = runner2;
                check = runner2.data;
            }
        }
    }

    // currently not working, but is a far better way of doing the function
    removeDuplicatesHash() {
        if (this.isEmpty() || this.head.next === null) {
            return null;
        }

        const seen = {};
        let runner = this.head;
        let buffer = new LinkedList();
        while (runner) {
            let item = runner.data;
            if (seen.hasOwnProperty(item) === false) {
                seen[item] = true;
                buffer.addToBack(item);
            }
            runner = runner.next;
        }
        return buffer;
    }

    // each number is represented by a linked list. The numbers are stored backwards, so they read left to right. I assume that's because they're added to the front
}

const sumLists = (l1, l2) => {
    // 633 + 33 = 666 (stored backward, so 677 would be 776 )
    // 3 3 6
    // 3 3
    let r1 = l1.head,
        r2 = l2.head,
        sumArray = [];
    while (r1 || r2) {
        r1 && r2 ? sumArray.push(r1.data + r2.data) : null;
        r1 && !r2 ? sumArray.push(r1.data) : null;
        r2 && !r1 ? sumArray.push(r2.data) : null;
        r1 ? (r1 = r1.next) : null;
        r2 ? (r2 = r2.next) : null;
    }

    const sum = new LinkedList();
    for (const number of sumArray) {
        sum.addToFront(number);
    }
    return sum;
    // still working on it.
    // how can I extract the values of my list and represent it as a number?
};

let listOne = new LinkedList();
let listTwo = new LinkedList();
listOne.addToFront(6).addToFront(3).addToFront(3).addToFront(3).addToFront(9).addToFront(3);
listTwo.addToFront(3).addToFront(3);
// sumLists(listOne, listTwo).display();
listOne.removeDuplicatesHash().display();
