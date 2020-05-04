function mergeSort(unsortedArray) {
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
    
}


function compareResults(unsortedArray, expectedResult) {
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
}

