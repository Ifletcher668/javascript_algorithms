"use strict";
// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice
// Brute Force method
var twoSum = function (nums, target) {
    const answerIndices = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (answerIndices.length > 0) {
                return answerIndices;
            }
            if (nums[i] + nums[j] === target) {
                answerIndices.push(i, j);
            }
        }
    }
    return null;
};
// runtime: 124 ms
// console.log(twoSum([1, 7, 11, 2, 7, 15], 9));
// Refactor level 1
const twoSum1 = (nums, target) => {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        if (!seen.hasOwnProperty(nums[i])) {
            seen[nums[i]] = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.hasOwnProperty(complement) && nums[i] !== i) {
            return [i, seen[complement]];
        }
    }
    return null;
};
// const test = twoSum1([1, 7, 11, 2, 7, 15], 9);
// console.log(test);
// console.log(twoSum1([1, 7, 11, 2, 7, 15], 9));
// time complexity: O(n). We traverse the list containing n elements exactly twice
// Since the hash table reduces the look up time
// to O(1), the time complexity is O(n)
// Space complexity: O(n). The extra space required depends on the
// number of items stored in the hash table, which stores exactly n elements
const twoSum2 = (nums, target) => {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.hasOwnProperty(complement))
            return [i, seen[complement]];
        if (!seen.hasOwnProperty(nums[i])) {
            seen[nums[i]] = i;
        }
    }
    return null;
};
console.log(twoSum2([3, 2, 4], 6));
// runtime: 72ms
