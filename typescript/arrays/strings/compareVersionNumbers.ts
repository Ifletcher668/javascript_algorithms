/* 
  https://leetcode.com/problems/compare-version-numbers/
  Given two strings, version1, and version2, both representing version numbers
  If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
  Helpful methods:
    - .split(characterToSplitOn)
      - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt
      - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
  Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
// Output: -1

const test2V1 = "1.0.1";
const test2V2 = "1";
// Output: 1

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
// Output: -1

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
// Output: 1

const test5V1 = "1.01";
const test5V2 = "1.001";
// Output: 0
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
// Output: 1
