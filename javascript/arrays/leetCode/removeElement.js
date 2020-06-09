"use strict";
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
// Example 1:
// Given nums = [3,2,2,3], val = 3,
// Your function should return length = 2, with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length.
// Example 2:
// Given nums = [0,1,2,2,3,0,4,2], val = 2,
// Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
// Note that the order of those five elements can be arbitrary.
// It doesn't matter what values are set beyond the returned length.
// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
// Internally you can think of this:
// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeElement(nums, val);
// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }
const removeElement = (nums, val) => {
    // remove all instances of element
    // check if element doesn't have val
    // assume worst case scenario: all elements of nums is val
    // loop through nums
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element === val) {
            nums.splice(i, 1); // <-- I did it again, taking element instead of i. I need the position, not the value!
            i--;
        }
    }
    console.log(`nums after splice: ${nums}`);
    return nums.length;
};
console.log(removeElement([1, 3, 3, 3, 6, 3, 4, 0, 0, 9, 8, 6, 3, 0, 3], 3));
