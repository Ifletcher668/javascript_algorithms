/* 
    Intersect Sorted Arrays (dedupe)
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).

    Input: [1,2,2,2,7], [2,2,6,6,7]
    Output: [2,7]
*/

/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurences from one array.
  Input: [1,2,2,2,7], [2,2,6,6,7]
  Output: [1,2,2,2,6,6,7]
  Explanation: 2 occurs at most in ONE set, three times, so 2 is included three times
    6 occurs at most two times in one set, so 6 is included 2 times, 7 occurs at most 1 time, so one 7 is included
*/

//

const intersectSortedArrays = (a1, a2) => {
    const newArr = [];
    const seen = {};
    let i = 0,
        j = 0;

    if (a1.length > a2.length || a1.length === a2.length) {
        while (a1[i]) {
            const item = a1[i];
            if (seen.hasOwnProperty(item) === false) {
                seen[item] = a1[i];
            }
            i++;
        }
        while (a2[j]) {
            const item = a2[j];
            if (seen.hasOwnProperty(item) === true) {
                newArr.push(a2[j]);
            }
            j++;
        }
    } else if (a2.length > a1.length) {
        while (a2[i]) {
            const item = a2[i];
            if (seen.hasOwnProperty(item) === false) {
                seen[item] = a2[i];
            }
            i++;
        }
        while (a1[j]) {
            const item = a1[j];
            if (seen.hasOwnProperty(item) === true) {
                newArr.push(a1[j]);
            }
            j++;
        }
    }
    return newArr;
};

// const a1 = [1,2,3,4,5,7];
// const a2 = [1,12,1,2,3,4,5,6];

// console.log(intersectSortedArrays(a1, a2));

function unionSort(arr1, arr2) {
    const newArr = [];
    let i = 0,
        j = 0;

    while (i < arr1.length || j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            newArr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        } else {
            if (arr1.length > arr2.length) {
                newArr.push(arr1[i]);
            } else if (arr2.length > arr1.length) {
                newArr.push(arr2[j]);
            }
            i++;
            j++;
        }
    }

    return newArr;
}
// const a1= [1,2,2,2,7,8];
// const a2= [1,1,1,2,2,6,6,7,8,8,8,9];
// // Output: [1,2,2,2,6,6,7]
// console.log(unionSort(a1,a2))

/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the ovlerapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included
  Examples:
  Input: [1, 2], [2, 1]
  Output: []
  Input: [1, 2, 3], [4, 5, 6]
  Output: [1, 2, 3, 4, 5, 6]
  Input: [4, 1, 2, 3, 4], [1, 2, 3, 5, 5]
  Output: [4, 5]
  Bonus: Make it work when given a set of sets (array of arrays of ints)
  
*/

const symmetricDifferences = (a1, a2) => {
    const newArray = [],
        t1 = {};
        t2 = {}; 
        
    let i = 0,
        j = 0;

        for (const num of a1) {
            // add everything to table one, duplicates are NOT added twice
            t1[num] = num;
        }

        for (const num of a2) {
            // add everything to table two, duplicates are NOT added twice
            t2[num] = num
        }

        // checking both arrays at once, performing duplicate logic
        // checks if table one has key and table two does NOT have that key
        // if both conditions are met, push to newArray
        // Same for table two 
        while(i < a1.length || j < a2.length) {
            const num1 = t1[i];
            const num2 = t2[j]
            if(t1.hasOwnProperty(num1) === true && t2.hasOwnProperty(num1) === false) {
                newArray.push(num1)
            }
            if(t2.hasOwnProperty(num2) === true && t1.hasOwnProperty(num2) === false) {
                newArray.push(num2)
            }
            i++
            j++
        }
        console.log("\nChecking...")
        console.log(`values of t1:\n\t ${Object.values(t1)}`)
        console.log(`values of t2:\n\t ${Object.values(t2)}`)
        console.log(`newArray:\n\t ${newArray}`)
    };
    symmetricDifferences([1,1,2,3],[3,4,5,1,1,3]) // result 2,4,5
    symmetricDifferences([1],[1]) // result []
    symmetricDifferences([1,1,1,1,1],[1]) // result []
    symmetricDifferences([1,1,1,1,1],[1,2]) // result [2]
    // return Object.values(seen); 

//     while(i < a1.length) {
//         const num1 = a1[i];
//         // how do we check if it's in the other array?
//         if(seen.hasOwnProperty(num1) === false) {
//             seen[num1] = a1[i]; 
//         }            
//         i++
        
//     }
//     while(j < a2.length) {
//         const num2 = a2[j];
//         // how do we check if it's in the other array?
//         if(seen.hasOwnProperty(num2) === false) {
//             seen[num2] = a2[j]; 
//         }            
//         j++
//     }
//     // for (const i in seen) {
//     //     newArray.push(i)
//     // }
//     console.log(seen)
//     console.log(newArray); 
    
    
// return newArray;