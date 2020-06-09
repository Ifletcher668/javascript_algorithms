/* 
  http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
  Array: Merge Sort
  visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n))
    - Average case: O(n log(n))
    - Worst case: O(n log(n))
steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
        - you do NOT need to work in place, ok to use a new array
    2. create merge sort function to sort the provided array
        - split the array in half and recursively merge the halves using the previously created merge function
        - splitting of arrays stops when array can no longer be split
        - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
useful methods
    - arr.concat(array2, array3, ..., arrayX)
    - combines array arg(s) with the array that concat is called on
    - returns new arr w/o mutating originals
    - arr.slice([begin[, end]])
    - returns a copy of the specified portion of the array
    - end is exclusive
    - if omitted, slices from provided 'begin' to end of array
*/

const mergeSort: (array: any[]) => any[] = (array: any[]) => {
    // checking for less than or equal to 1 because we need to assume the case of an empty list
    if (array.length <= 1) {
        return array;
    }
    let left = array.slice(0, Math.floor(array.length / 2));
    let right = array.slice(Math.floor(array.length / 2));

    return merge(mergeSort(left), mergeSort(right));
};

function merge(left: any[], right: any[]) {
    let result = [],
        leftIdx = 0,
        rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            result.push(left[leftIdx]);
            leftIdx++;
        } else {
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}
// split array in half
// array.length / 2
//

let test = mergeSort([100, 4, 25, 5, 6, 123, 2, -1]);
console.log(test);

/* function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) { 
        return unsortedArray; 
    }
    
    const middle = Math.floor(unsortedArray.length / 2);
    
    const left = unsortedArray.slice(0, middle); 
    const right = unsortedArray.slice(middle);

    return merge(
        mergeSort(left), mergeSort(right) 
    );
};

function merge(left, right) {
    // assign a new array, and a left and right 
    let mergedArray = [], leftIndex = 0, rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex]); 
            leftIndex ++; 
        } else {
            mergedArray.push(right[rightIndex]); 
            rightIndex ++; 
        }
    }

    return mergedArray
    .concat(left.slice([leftIndex]))
    .concat(right.slice([rightIndex]));
    
} */

/* function compareResults(unsortedArray, expectedResult) {
    let sortedArray = mergeSort(unsortedArray)
    console.log(sortedArray); 
}

testSuite();

function testSuite(){
compareResults([], []);    
compareResults([1], [1]);  
compareResults([1,2], [1,2]); 
compareResults([1,3,2], [1,2,3]); 
compareResults([3,2,1], [1,2,3]); 
compareResults([4,1,3,2], [1,2,3,4]); 
compareResults([1,2,3,-1], [-1,1,2,3]); 
compareResults([100,675,3,-6,12313], [-6,3,100,675, 12313]); 
compareResults([1,2,3,4,5,6,7,8,8,8,8,8,6,4,4,4,3,2,6,4,5,3,4,3,4,3,4], [1,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,6,6,6,7,8,8,8,8,8]); 
compareResults([1,2,3,5], 1,2,3,5); 
compareResults([1,2,5,5,6,5], [1,2,5,5,5,6]);  
compareResults(["string",2,3], ["string",2,3]); // false? 
compareResults([5,-1,33,54,31,56,-10,20,-20,55,30,2,-100,23-50], [-100, -50, -20, -10, -1, 2, 5, 20, 23, 30, 31, 33, 54, 55, 56])
} */
