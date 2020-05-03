


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
        this.data = data
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null; 
    };

    display() {
        if (this.head === null) {
            console.log("An empty list")
            return 
        }
        if(this.head.next === null) {
            console.log(`List contains a single node:\n\t\tData is "${this.head.data}";\n\t\tnext value is "${this.head.next}"`);
            return 
        }
        let runner = this.head;
        let values = ""; 
        while (runner) {
            if (runner.next === null) {
                values += `and '${runner.data}'.`
                break;
            };
            values += `'${runner.data}', `;
            runner = runner.next;
        };
        console.log(`List values are:\n\t\t${values}`);
    };

    seedFromArray(arr) {
        // check for empty array
        if (arr.length === 0) {
            console.log("empty array given, could not instantiate a Singly Linked List")
            return null
        } else {
            for (let i = 0; i < arr.length; i++) {
                let node = new Node(arr[i])
                // add to back 
                if (this.head === null) {
                    console.log("?")
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
    };

    addToFront(val) {
        // check if empty
        if (this.isEmpty()) {
            this.head = new Node(val);
        }
        // point val.next to this.head
        // redirect this.head to point to val 
        let newNode = new Node(val); 
        newNode.next = this.head
        this.head = newNode; 
        return this
    };

    addToBack(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode; 
            // this.display();
            // console.log(`\nFirst new Node instantiated:\n\t\tData is "${this.head.data}";\n\t\tnext value is "${this.head.next}"`); 
            return this
        }
        
        let runner = this.head; 
        while(runner.next !== null) {
            runner = runner.next;
        }
        
        runner.next = newNode; 
        // this.display();
        // console.log(`\nNew Node instantiated at back: \n\t\tData is "${runner.data}";\n\t\tnext value is "${runner.next.data}"`); 
        return this 
    };
    
    addToBackRecursive(val, runner = this.head) {
        const newNode = new Node(val);
        // base case, where do I want the recursion to end? 
        if (runner === null) {
            runner = newNode; 
            this.display();
            return this
        } else if (runner.next === null ) {
            runner.next = newNode; 
            this.display();
            return this 
        }
        runner = runner.next; 
        return this.addToBackRecursive(val, runner); 
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null 
        }
        else if (this.head.next === null) {
            return this.head
        }
        else {
            let head = this.head;
            let temp = head.next;
            head.next = null;
            this.head = temp;
            return head.data;
        };
    };


    removeFromBack() {
        if (this.isEmpty()) {
            console.log("List is empty")
            return null 
        } else if (this.head.next === null) {
            console.log("Removed the head, the only item in this list")
            let temp = this.head.data;
            this.head = null; 
            return temp
        }
        else {
            let runner = this.head;
            while (runner.next.next !== null) {
                runner = runner.next; 
            }
            let temp = runner.next.data; 
            runner.next = null;
            return temp 
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
        while(runner) {
            count ++;
            runner = runner.next; 
        }
        middle = Math.floor(count/2);
        runner = this.head; 
        for (let i = 0; i < middle; i++) {
            runner = runner.next; 
        }
        return runner.data; 
    }

    contains(val) {
        // check for empty
        // check for one value 
        // run through list looking for val 
        // what if val isn't found
        // find val 
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
        let runner = this.head 
        while(runner !== null) {
            if (runner.data === val) {
                console.log("value found")
                return true; 
            }
            runner = runner.next;
        }
        console.log("value not found")
        return false 

    }



};

const list = new LinkedList(); 
const array = [1,2,3,4,5,5,6,7,8,9,10,11,12,14,15,16,16];

// list.addToBack(100).addToBack(20).addToBack("string");
// list.display();
list.seedFromArray(array);
// list.addToFront(100).addToFront("string")
// list.addToBackRecursive(200).addToBackRecursive(300).addToBackRecursive(3112300).addToBackRecursive("3000").addToBack([1,2,3]).addToBack(100); 
// list.removeFromBack();
list.display();
let test = list.middleValue();
console.log(test); 


