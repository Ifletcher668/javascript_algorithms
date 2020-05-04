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


Array.prototype.sort = function() { 
    if (this.length < 1) {
        return null;  
    }
    
        let isSorted = true; 
        while(isSorted) {
        for (let j = 0; j < this.length; j++) {
            if(this[j] > this[j+1]) {
                let temp = this[j+1];
                this[j+1] = this[j]; 
                this[j] = temp;
                isSorted = false; 
            } 
        }
        if (isSorted === true) {
            return this;  
        }
    }
    
}


let myArray = [5,1,2,4,3,5]; 
myArray.sort(); 



// 5 2 3 1 4 

// 2 5 3 1 4 
// 2 3 5 1 4 
// 2 3 1 5 4 
// 2 3 1 4 5 

