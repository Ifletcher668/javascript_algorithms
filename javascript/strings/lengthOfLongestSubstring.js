"use strict";
/*
  Given a string, find the length of the longest substring without repeating characters.
*/
const test1 = 'abcabcbb';
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
const test2 = 'bbbbb';
// Output: 1
// Explanation: The answer is "b", with the length of 1.
const test3 = 'pwwkew';
// Output: 3
/* Explanation: The answer is "wke", with the length of 3.
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */
const test4 = 'dvadf';
// Output: 4
// Explanation: "vadf"
// the substring is a string within the string,
// and we're finding a substring whose
// .slice()
// look through each char of the string
//
const lenOfLongestSubstr = (str) => {
    let count = 0;
    let substr = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (substr.includes(str[j])) {
                break;
            }
            else {
                substr += str[j];
                count++;
            }
        }
        console.log(substr);
        if (substr.length > count) {
            count = substr.length;
        }
    }
    return count;
};
console.log(lenOfLongestSubstr(test1));
console.log(lenOfLongestSubstr(test2));
console.log(lenOfLongestSubstr(test3));
console.log(lenOfLongestSubstr(test4));
