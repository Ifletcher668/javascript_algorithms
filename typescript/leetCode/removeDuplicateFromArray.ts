// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the returned length.

// Example 2:
// Given nums = [0,0,1,1,1,2,2,3,3,4],
// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
// It doesn't matter what values are set beyond the returned length.

// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

// O(n^3) time; O(1) space
const removeDuplicates = (nums: number[]) => {
    for (let i = 0; i < nums.length; i++) {
        const current: number = nums[i];
        const next: number = nums[i + 1];
        while (current === next) {
            nums.splice(next, 1);
            break;
        }
    }

    return nums.length;
};

const removeDuplicatesImproved = (nums: number[]) => {
    const seen: any = {};

    for (let i = 0; i < nums.length; i++) {
        if (seen.hasOwnProperty(nums[i])) {
            seen[nums[i]] = true;
        }

        if (!seen.hasOwnProperty(nums[i])) {
            seen[nums[i]] = false;
        }
        if (seen[nums[i]] === true) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

// const nums = [-1, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let length = nums.length;
// console.log(`length before function: ${length}`);
// length = removeDuplicatesImproved(nums);
// console.log(`length after function: ${length}`);
