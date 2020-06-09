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

// const intersectSortedArrays = (a1, a2) => {
//     const newArr = [];
//     const seen = {};
//     let i = 0,
//         j = 0;

//     if (a1.length > a2.length || a1.length === a2.length) {
//         while (a1[i]) {
//             const item = a1[i];
//             if (seen.hasOwnProperty(item) === false) {
//                 seen[item] = a1[i];
//             }
//             i++;
//         }
//         while (a2[j]) {
//             const item = a2[j];
//             if (seen.hasOwnProperty(item) === true) {
//                 newArr.push(a2[j]);
//             }
//             j++;
//         }
//     } else if (a2.length > a1.length) {
//         while (a2[i]) {
//             const item = a2[i];
//             if (seen.hasOwnProperty(item) === false) {
//                 seen[item] = a2[i];
//             }
//             i++;
//         }
//         while (a1[j]) {
//             const item = a1[j];
//             if (seen.hasOwnProperty(item) === true) {
//                 newArr.push(a1[j]);
//             }
//             j++;
//         }
//     }
//     return newArr;
// };

// const a1 = [1,2,3,4,5,7];
// const a2 = [1,12,1,2,3,4,5,6];

// console.log(intersectSortedArrays(a1, a2));

// function unionSort(arr1, arr2) {
//     const newArr = [];
//     let i = 0,
//         j = 0;

//     while (i < arr1.length || j < arr2.length) {
//         if (arr2[j] > arr1[i]) {
//             newArr.push(arr1[i]);
//             i++;
//         } else if (arr1[i] > arr2[j]) {
//             newArr.push(arr2[j]);
//             j++;
//         } else {
//             if (arr1.length > arr2.length) {
//                 newArr.push(arr1[i]);
//             } else if (arr2.length > arr1.length) {
//                 newArr.push(arr2[j]);
//             }
//             i++;
//             j++;
//         }
//     }

//     return newArr;
// }
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

// const symmetricDifferences = (a1, a2) => {
//     const newArray = [],
//         t1 = {};
//         t2 = {};

//     let i = 0,
//         j = 0;

//         for (const num of a1) {
//             // add everything to table one, duplicates are NOT added twice
//             t1[num] = num;
//         }

//         for (const num of a2) {
//             // add everything to table two, duplicates are NOT added twice
//             t2[num] = num
//         }

//         // checking both arrays at once, performing duplicate logic
//         // checks if table one has key and table two does NOT have that key
//         // if both conditions are met, push to newArray
//         // Same for table two
//         while(i < a1.length || j < a2.length) {
//             const num1 = t1[i];
//             const num2 = t2[j]
//             if(t1.hasOwnProperty(num1) === true && t2.hasOwnProperty(num1) === false) {
//                 newArray.push(num1)
//             }
//             if(t2.hasOwnProperty(num2) === true && t1.hasOwnProperty(num2) === false) {
//                 newArray.push(num2)
//             }
//             i++
//             j++
//         }
//         console.log("\nChecking...")
//         console.log(`values of t1:\n\t ${Object.values(t1)}`)
//         console.log(`values of t2:\n\t ${Object.values(t2)}`)
//         console.log(`newArray:\n\t ${newArray}`)
//     };
//     symmetricDifferences([1,1,2,3],[3,4,5,1,1,3]) // result 2,4,5
//     symmetricDifferences([1],[1]) // result []
//     symmetricDifferences([1,1,1,1,1],[1]) // result []
//     symmetricDifferences([1,1,1,1,1],[1,2]) // result [2]
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

// Interview Algo given to alumni

// findConsequentSums
/* 
    You are given a list of integers. Find all the consecutive set of 
    integers that adds up to the sum passed in as one of the inputs.
*/
/* 
    input: findConsqSums([2,5,3,6,7,23,12], 16)
    output: [
    [2,5,3,6],
    [3,6,7]
    ]

    bonus, what if there are zeros in the input
    input: findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 12], 16)
    output: [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]
*/

// [2,5,3,6,7,23,12]
// loop:
// 2 + 5 + 3 + 6 = 16
//

// loop through the array
// check if i + consequent indexes add up to 16
// create variable count
// add consequent indexes to count
// always check count at beginning of loop
// if it equals input sum value, then push that part of the array to return
// return an array of arrays

// possible solution

// const sumConsequent = (inArr, desiredSum) => {
//     const outArr = [];
//     for (let i = 0; i < inArr.length; i++) {
//         const temp = [];
//         let count = 0;
//         let j = i;
//         while(count <= desiredSum && j < inArr.length) {
//             if (count + inArr[j] <= desiredSum) {
//                 count += inArr[j]
//                 temp.push(inArr[j++])
//                 if(count === desiredSum) {
//                     outArr.push(temp.slice());
//                 }
//             }
//             else {
//                 break;
//             }

//             // j++
//         }
//     }
//     return outArr;
// }

// another possible solution

// const sumConsequent = (arr, expectedVal) => {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             let sum = 0;
//             let k = 0;
//             for (; k< j -i; k++) {
//                 sum += arr[i+k];
//             }
//             if (sum === expectedVal) {
//                 newArr.push(arr.slice(i, i+k))
//             }
//             if (sum > expectedVal) {
//                 break;
//             }
//         }
//     }
//     return newArr;
// }

// third possible solution

// const sumConsequent = (arr, expectedVal) => {
// const newArr = [];
// let i = 0, j = 0, sum = 0;
//
// while (j < arr.length) {
// sum += arr[j];
// if (sum === expectedVal) {
// newArr.push(arr.slice(i, j+1));
// j++
// }
// else if ( sum < expectedVal) {
// j++;
// }
// else {
// sum -= arr[i];
// sum -= arr[j];
// i++
// }
// }
// return newArr;
// }
// const test = sumConsequent([2, 5, 3, 6, 7, 0, 0, 23, 12], 16)
// console.log(test)
// input sum: 16
// [2,5,3,6]
// [3,6,7]

//

// to go both forward and backward in a loop...
// check for i and thing.length -i - i

/* 
  BONUS ALGO
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is not guaranteed to be sorted and the output does not need to be in any specific order
  
  Input: [1, 1, 1, 2, 2, 3], k = 2
  Output: [1, 2]
  Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements
  Input: [0, 0, 0, 2, 2, 3], k = 1
  Output: [0]
  Explanation: k being 1 means return the single most frequent element
  Input: [1, 1, 2, 2, 3, 3], k = 3
  Output: [1, 2, 3]
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints.
  HARD Bonus: Make it O(n) time
*/

// https://leetcode.com/problems/two-sum/

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/* 
  Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
  Easier version:
    return an array of the two numbers that add up to the target num
*/

// inside a for loop
// i
// if the the two numbers that add up to target sum, push i to new array
//

// O(n ^ 2)

// const indicesAddToSum = (arr, targetSum) => {
//     const indexArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === targetSum) {
//                 indexArr.push(i);
//                 indexArr.push(j);
//                 // break out of loop
//             }
//         }
//     }
//     console.log(indexArr);
//     return indexArr;
// };

// const nums = [2, 7, 11, 15];

// indicesAddToSum(nums, 9);

// i = 2
// j = 7 11 15

// if j + i === targetSum, then push j + i to array

// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
  Input: [1,2,3,4,6,7,8,10]
    - 6 and 10 are the only non-consecutive numbers
  Output: [
    {i: 4, n:6},
    {i: 7, n:10}
  ]
*/

const findNonConsecutiveInts = (arr: any[]) => {
    const nonConsecArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            const obj = {};
            nonConsecArr.push({ index: i, val: arr[i + 1] });
            //obj.index = i + 1;
            //obj.val = arr[i + 1];
            //nonConsecArr.push(obj);
        }
    }
    return nonConsecArr;
};

const nums = [1, 2, 3, 4, 6, 7, 8, 10, 11, 13, 15];
const nonConsecNums = findNonConsecutiveInts(nums);
console.log(nonConsecNums);
// Output: [
//   {i: 4, n:6},
//   {i: 7, n:10}
// ]
