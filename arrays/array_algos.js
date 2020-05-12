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



function unionSort(arr1,arr2) {
    const newArr = []
    let i = 0,
        j = 0;

        while (i < arr1.length || j < arr2.length) {
            if (arr2[j] > arr1[i]){
                newArr.push(arr1[i]);
                i++
            }
            else if (arr1[i] > arr2[j]){
                newArr.push(arr2[j])
                j++
            }
            else {
                if (arr1.length > arr2.length) {
                    newArr.push(arr1[i]);
                }
                else if (arr2.length > arr1.length) {
                    newArr.push(arr2[j]);
                }
                i++
                j++
            }
        }

    return newArr; 

}
const a1= [1,2,2,2,7,8];
const a2= [1,1,1,2,2,6,6,7,8,8,8,9]; 
// Output: [1,2,2,2,6,6,7]
console.log(unionSort(a1,a2))