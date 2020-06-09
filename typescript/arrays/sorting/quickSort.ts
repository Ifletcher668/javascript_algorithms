/* 
    Array: Quick Sort
Create a function that uses yesterday’s partition to fully sort an array in-place.
Time Complexity
    - Best: O(n log(n))
    - Average: O(n log(n))
    - Worst: O(n^2)

*/

// visualized https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
// src=https://itnext.io/a-sort-of-quick-guide-to-quicksort-and-hoares-partitioning-scheme-in-javascript-7792112c6d1

/* 
Steps:
    - start by partitioning the full array (use the previously built partition algo)
    - then partition the left side of the array (left of partition idx) and the right side (right of partition idx), recursively
*/
// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
/* 
Array: Partition

Assume you have access to a swap function or practice using array destructure notation to swap
Params: arr, left, right
    - for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition
    Steps:
1. Pick an item out of the arr to be your pivot value
    - usually the middle item or the last item
2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
    and all values greater than the pivot are to the right (not perfectly sorted)
3. return: new idx of the pivot value
*/

// pivot value parameter

/* const partition = (array, left = 0, right = array.length) => {
    const middle = Math.floor(array.length / 2);
    const pivot = array[middle];

    for (let i = 0; i < array.length; i++) {
        const temp = array[i];
        if (array[i] < pivot && i > middle) {
            console.log("if");
            console.log(i);
            array.splice(array[i], 1);
            array.unshift(temp);
        }
    }

    for (let i = array.length; i > 0; i--) {
        const temp = array[i];
        if (array[i] > pivot && i < middle) {
            console.log("else if");
            console.log(i);
            array.splice(array[i], 1);
            array.push(temp);
        }
    }
}; */

// Hoare's partition scheme. O(n^2)
function partitionHoare(arr: any[], left = 0, right = arr.length - 1) {
    const pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }

        while (arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left;
}

const testPartition = () => {
    let test = [1, 9, 3, 2, 6, 4, 5, 7];
    console.log(test);
    partitionHoare(test);
    console.log(test);
};
testPartition();
//
// 1 3 2 6 4 5 7
// 5 4 1 3 2 6 7

function quickSort(arr: any[], left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }
    const pivotIdx = partitionHoare(arr, left, right);

    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx, right);

    return arr;
}

console.log(quickSort([10, 51, 3, 444, 5, 6, 7, 8, 9, 1, 0, -11]));
