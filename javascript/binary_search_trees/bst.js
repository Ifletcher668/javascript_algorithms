"use strict";
/*
  w4d2
    - create the BST class and the BSTNode class
      - a BST has a root instead of a head (because it's a tree)
      - a BSTNode has a left, right, and val or data instead of next
    - BST Max return the max with and without recursion
    - BST Min return the min with and without recursion
  w4d3
    - BST Contains (with & without recursion)
    - min of right sub tree (how can non-recursive min & max be adapted to work for this?)
    - max of left sub tree
*/
// class BSTNode {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BSTree {
//     constructor(data = null) {
//         this.root = null;
//     }
//     isEmpty() {
//         return this.root === null;
//     }
//     addNode(val) {
//         const newNode = new BSTNode(val);
//         if (this.isEmpty()) {
//             this.root = newNode;
//         }
//         let runner = this.root;
//         let working = true;
//         while (working) {
//             if (val > runner.data) {
//                 if (runner.right === null) {
//                     runner.right = newNode;
//                     working = false;
//                 }
//                 else {
//                     runner = runner.right;
//                 }
//             }
//             else {
//                 if (runner.left === null) {
//                     runner.left = newNode;
//                     working = false;
//                 }
//                 else {
//                     runner = runner.left;
//                 }
//             }
//             return this;
//         }
//     }
//     showMax(runner = this.root) {
//         if (this.isEmpty()) {
//             return null;
//         }
//         let runner = this.root;
//         while (runner.right !== null) {
//             runner = runner.right;
//         }
//         return runner.data;
//     }
//     showMaxRecursive(runner = this.root) {
//         if (this.isEmpty()) {
//             return null;
//         }
//         if (runner.right === null) {
//             return runner.data
//         }
//         return this.showMaxRecursive(runner.right);
//     }
//     showMin(runner = this.root) {
//         if (this.isEmpty()) {
//             return null;
//         }
//         let runner = this.root;
//         while (runner.left) {
//             runner = runner.left;
//         }
//         return runner.data;
//     }
//     showMinRecursive(runner = this.root) {
//         if (this.isEmpty()) {
//             return null;
//         }
//         if (runner.left === null) {
//             return runner.data
//         }
//         return this.showMinRecursive(runner.left);
//     }
//     contains(val) {
//         let runner = this.root;
//         while (runner !== null) {
//             if (val === runner.data) {
//                 return true;
//             }
//             if (val > runner.data) {
//                 // looking to the right
//                 runner = runner.right;
//             }
//             else { // val < runner.data
//                 runner = runner.left;
//             }
//         }
//         return false;
//     }
//     containsRecursively(val, runner = this.root) {
//         if (this.isEmpty()) {
//             return false;
//         }
//         if (runner.data === val) {
//             return true;
//         }
//         else if (runner === null) {
//             return false;
//         }
//         if (val > runner.data) {
//             return this.containsRecursively(runner.right);
//         }
//         else if (val < runner.data) {
//             return this.containsRecursively(runner.left);
//         }
//     }
// }
/*
  w4d2
    - create the BST class and the BSTNode class
      - a BST has a root instead of a head (because it's a tree)
      - a BSTNode has a left, right, and val or data instead of next
    - BST Max return the max with and without recursion
    - BST Min return the min with and without recursion
  w4d3
    - BST Contains (with & without recursion)
    - min of right sub tree (how can non-recursive min & max be adapted to work for this?)
    - max of left sub tree
  w4d4
    - BST Add
      - add a new value to the appropriate place in the tree, if the new value is equal to an existing value, add it to the left
    - BST Range
      

      w4d5
    - print all vals as one space separated string
    - BST Size (recursive: total number of nodes)
*/
/*
                  50
                /   \
              40    60
            /  \    / \
          30   45 55  70
        /   \        /
      20    35     65
        \
        25
*/
class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    printValues(node = this.root, separator = ', ', first = true) {
        if (!node) {
            return '';
        }
        const nodeString = first ? node.val : separator + node.val;
        return `${node.val} ${this.printValues(node.left, separator, false)} ${this.printValues(node.right, separator, false)}`;
    }
    // size() {
    // }
    add(val) {
        const newNode = new BSTNode(val);
        if (this.isEmpty()) {
            this.root = newNode;
        }
        else {
            let current = this.root;
            while (current) {
                if (current.val > val) {
                    //move left
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (current.val < val) {
                    // move right
                    if (current.right === null) {
                        current.right = newNode;
                        break;
                    }
                    else {
                        current = current.right;
                    }
                }
                else {
                    // if duplicate, place left, but don't replace
                    // always place left
                    newNode.left = current.left;
                    current.left = newNode;
                    break;
                }
            }
        }
        return this;
    }
    // bst.min(myBst.root.right) would let us get the min value of the right sub-tree
    min(current = this.root) {
        if (current === null) {
            return null;
        }
        while (current.left) {
            current = current.left;
        }
        return current.val;
    }
    minRecursive(current = this.root) {
        if (current === null) {
            return null;
        }
        if (current.left === null) {
            return current.val;
        }
        return this.minRecursive(current.left);
    }
    // bst.max(myBst.root.left) would let us get the max vlaue of the right sub-tree
    max(current = this.root) {
        if (current === null) {
            return null;
        }
        while (current.right) {
            current = current.right;
        }
        return current.val;
    }
    maxRecursive(current = this.root) {
        if (current === null) {
            return null;
        }
        if (current.right === null) {
            return current.val;
        }
        return this.minRecursive(current.right);
    }
    range() {
        if (this.isEmpty()) {
            return 0;
        }
        return this.max() - this.min();
    }
    contains(searchVal) {
        let current = this.root;
        while (current) {
            if (current.val === searchVal) {
                return true;
            }
            if (searchVal < current.val) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    }
    containsRecursive(searchVal, current = this.root) {
        if (current === null) {
            return false;
        }
        if (current.val === searchVal) {
            return true;
        }
        if (searchVal < current.val) {
            return this.containsRecursive(searchVal, current.left);
        }
        if (searchVal > current.val) {
            return this.containsRecursive(searchVal, current.right);
        }
    }
}
let testBST = new BST();
testBST.add(10).add(1).add(50).add(4).add(1).add(25).add(7).add(15).add(1).add(1).add(7).add(50);
console.log(testBST.printValues());
/*
                                                      10
                                                     / \
                                                   4    25
                                                 / \   / \
                                                1   7 15  50
                                              /   /     /
                                             1  7      50
                                            /
                                           1
                                          /
                                         1

*/
