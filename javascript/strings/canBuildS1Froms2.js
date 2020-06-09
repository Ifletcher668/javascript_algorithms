"use strict";
/*
  Given two strings,
  return true if the first string can be built from the letters in the 2nd string
  Ignore case
  .indexOf will only tell you if the letter is found one time
*/
const input1StrA = "Hello World";
const input1StrB = "lloeh wordl";
// Output: true
const input2StrA = "Hey";
const input2StrB = "hello";
// Output: false, second string is missing a "y"
const input3StrA = "hello";
const input3StrB = "helo";
// Output: false, second string doesn't have enough "l" letters
