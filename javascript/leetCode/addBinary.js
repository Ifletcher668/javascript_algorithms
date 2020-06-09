"use strict";
// Given two binary strings, return their sum (also a binary string).
// The input strings are both non-empty and contains only characters 1 or 0.
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
// Constraints:
//     Each string consists only of '0' or '1' characters.
//     1 <= a.length, b.length <= 10^4
//     Each string is either "0" or doesn't contain any leading zero.
// 0 = one bit
// 00000001 = one byte
// digits    1 0 1 1 0 1 0 1 0
// numbering 8 7 6 5 4 3 2 1 0
//                     1 0 1 1
//        128 64 32 16 8 4 2 1
//                     8 + 2 1
// '86520';
// 00000011;
// ('10');
// ('1');
// 00000001;
// ('0');
// ('100');
// '10' + '0';
// Input: a = "1010", b = "1011"
// Output: "10101"
// a = 00001010;
// 0000 = 1('31');
// b = 0001011;
// ('310');
// ('31310');
// 1011;
// take the number, divide by 2 and write down the remainder, until your number is at 0
// 1011;
// 1011;
// 10101;
// 1010
// (1*2^3) + (0*2^2) + (1* 2^1) + (0 * 2^0)
// 8 + 0 + 2 + 0
// = 10
// 1011
// (1*2^3) + (0*2^2) + (1* 2^1) + (1 * 2^0)
// 8 + 0 + 2 + 1
// = 11
// what 21 in binary?
// 21 / 2 rem 1
// 10 / 2 rem 0
// 5 / 2  rem 1
// 2 / 2  rem 0
// 1 / 2  rem 1
// convert binary string to decimal
// add decimals
// convert sum back to binary
// return sum string
// convert binary string to decimal
// 1
// [128, 64, 32, 16, 8, 4, 2, 1];
// '00010111'
// // loop over string
// // take strings length and add remainder of string length to 8 from array
// // 1010
// string.length = 4
// Array.length = 8
// if (string.length !== Array.length) {
//     let n = string.length - Array.length
//     array[string[1 + n]]
// }
// string[i] array[i+n] 4
// const addBinary = (s1, s2) => {
//     const powersOfTwo = [128, 64, 32, 16, 8, 4, 2, 1];
//     let n = 0,
//         m = 0,
//         binarySum = '',
//         a = 0,
//         b = 0;
//     if (s1.length < powersOfTwo.length || s2.length < powersOfTwo.length) {
//         n = powersOfTwo.length - s1.length;
//         m = powersOfTwo.length - s2.length;
//     }
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== '0') a += parseInt(powersOfTwo[i + n]);
//     }
//     for (let i = 0; i < s2.length; i++) {
//         if (s2[i] !== '0') b += parseInt(powersOfTwo[i + m]);
//     }
//     let c = a + b;
//     while (c > 0) {
//         if (c % 2 === 1) binarySum += '1';
//         else binarySum += '0';
//         c = Math.floor(c / 2);
//     }
//     return binarySum;
// };
// 2 is because we want it to be in base 2 (binary)
const addBinary = (s1, s2) => (parseInt(s1, 2) + parseInt(s2, 2)).toString(2); // doesn't actually work
const addBinaryManually = (bs1, bs2) => {
    let sum = '', carry = 0, i = bs1.length - 1, j = bs2.length - 1;
    while (i >= 0 || j >= 0) {
        const a = bs1[i] ? bs1[i] : '0';
        const b = bs2[j] ? bs2[j] : '0';
        sum = String(parseInt(a) ^ parseInt(b) ^ carry) + sum;
        if (a === b && a !== String(carry)) {
            carry = Number(!carry);
        }
        i--;
        j--;
    }
    return carry ? String(carry) + sum : sum;
};
console.log(addBinary('1010', '1011'));
// truth table?
/*
XOR (^) - same: 0, diff : 1
a b c = s c
0 0 0 = 0 0
0 0 1 = 1 0
1 0 0 = 1 0
1 0 1 = 0 1
1 1 0 = 0 1
1 1 1 = 1 1
*/
// need a carry
// need a sum
// need to track indices
// 23
// 128 64 32 16 8 4 2 1
//           16
// 23 - 16 = 7
//                4
// 7 - 4 = 3
//                 2
// 3 - 2 = 1
// 16 4 2 1 = 23
// 1 0 1 1 1
//
//
//
// 339
// 256 128 64 32 16 8 4 2 1
// 256
// 339 - 256 = 83
//         64
// 83 - 64 = 19
//               16
// 19 - 16 = 3
//                     2
// 3 - 2 = 1
// 256 + 64  + 16 + 2 + 1
// 1 0 1 0 1 0 0 1 1
