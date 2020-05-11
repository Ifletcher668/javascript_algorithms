/* 
    Intersect Sorted Arrays (dedupe)
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).

    Input: [1,2,2,2,7], [2,2,6,6,7]
    Output: [2,7]
*/

// 

const intersectSortedArrays = (a1, a2) => {
    const newArr = [];
    const seen = {};
    let i = 0, j = 0;

    if(a1.length > a2.length || a1.length === a2.length) {
        while(a1[i]) {
            const item = a1[i];
            if (seen.hasOwnProperty(item) === false) {
                seen[item] = a1[i]; 
            }
            i++
        } 
        while (a2[j]) {
            const item = a2[j];
            if (seen.hasOwnProperty(item) === true) {
                newArr.push(a2[j]);  
            }
            j++
        } 
    }
    else if (a2.length > a1.length) {
        while(a2[i]) {
            const item = a2[i];
            if (seen.hasOwnProperty(item) === false) {
                seen[item] = a2[i];
            }
            i++
        }
        while(a1[j]) {
            const item = a1[j];
            if (seen.hasOwnProperty(item) === true) {
                newArr.push(a1[j]);  
            }
            j++
        }
    }
    return newArr; 
}

const a1 = [1,2,3,4,5,7];
const a2 = [1,12,1,2,3,4,5,6];

console.log(intersectSortedArrays(a1, a2)); 