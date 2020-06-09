/* 
  http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140

  Array: Bubble Sort
  Time Complexity
    - Best: n when array is already sorted
    - Average: O(n^2)
    - Worst: O(n^2) when the array is reverse sorted
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

function bubbleSort(arr: number[]) {
    if (arr.length < 1) {
        return null;
    }

    let sorting = true;

    while (sorting) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                sorting = false;
            }
        }

        return arr;
    }
}

let myArray = [5, 1, 2, 4, 3, 5];
bubbleSort(myArray);

// 5 2 3 1 4

// 2 5 3 1 4
// 2 3 5 1 4
// 2 3 1 5 4
// 2 3 1 4 5
