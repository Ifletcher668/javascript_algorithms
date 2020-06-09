"use strict";
// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
/*
  Array: Insertion Sort
*/
/*
    - visualization with playing cards (scroll down): https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - array / bar visualization: https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - see other visualizion linked in README
    - efficient for small data sets
    - constant memory / space O(1)
Time Complexity
    - Best: n when array is already sorted
    - Average: O(n^2)
    - Worst: O(n^2) when the array is reverse sorted
    - this sort splits the array into two portions (conceptually, not literally)
    - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted
  // can shift or swap target element until it reaches desired position


  // shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position availale to shift items)
  4. if item to the left of current is greater than current item, shift the left item to the right
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat
  */
const insertionSortShift = (arr) => {
    if (arr.length < 1) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        let right = arr[i + 1];
        let left = arr[i];
        if (right < left) {
            arr[i + 1] = left;
            arr[i] = right;
        }
        for (let j = 0; j < arr.length; j++) {
            let right = arr[j + 1];
            let left = arr[j];
            if (right < left) {
                arr[j + 1] = left;
                arr[j] = right;
            }
        }
    }
    return arr;
};
function insertSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
            }
            else {
                break;
            }
        }
        arr[j + 1] = temp;
    }
    return arr;
}
// 7 2 1 4 3   from here
// 2 7 1 4 3
// 2 1 7 4 3
// 1 2 7 4 3
// 1 2 4 7 3
// 1 2 4 3 7
// 1 2 3 4 7    to here
// swap steps:
//  1. consider the first item as sorted
//  2. move to the next item
//  4. if item to left of current item is less than current, swap
//  5. repeat step 4 until item to left is less than current item
//  6. move to next item and repeat
// sample arrs
const arrRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrReversed = [10, 9, -100, 8, 7, -1, 6, 5, 4, 3, 2, 1];
console.log(arrReversed);
// insertSort(arrReversed);
console.log(arrReversed);
