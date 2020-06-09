"use strict";
// Given a 32-bit signed integer, reverse digits of an integer.
// A 32-bit signed integer is an integer whose value is represented in 32 bits (4 bytes).
// Bits are binary; they can be only 0s and 1s.
// A 32-bit signed integer is a string of 32 zeros and ones
// The signed part means it can represent both positive and negative values.
// A positive integer will have its most significant bit (the leading bit) be zero
// A negative integer will have its most significant bit (the leading bit) be one
// thus, the leading bit is typically referred to as the 'signed bit'
// the largest value it can represent is (2^31) - 1
// the smallest value it can represent is -(2^32)
// Assume we are dealing with an environment which could only store integers
// within the 32-bit signed integer range: [−(2^31),  (2^31)-1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
// example 1:
// input 123
// output 321
// example 2:
// input -123
// output -321
// example 3:
// input 120
// output 21
// What do I know?
// this will be a string of numbers
// when reversed, if the first number is zero, drop it
// strings are immutable. Once I put something into the string, I can't take it out
// I can loop through a string
// helpful string methods:
// str.length
// str.startsWith()
// str.endsWith()
// const reverse = (numStr) => {
//     let reversed = '';
//     for (let i = numStr.length - 1; i >= 0; i--) {
//         if (numStr[i] === '-') {
//             reversed = '-' + reversed;
//             break;
//         }
//         reversed += numStr[i];
//     }
//     let i = 0;
//     while (reversed[i] === '0') {
//         i++;
//     }
//     let cleanedReverse = reversed.slice(i);
//     return cleanedReverse;
// };
const reverse = (num) => {
    if (num > Math.pow(2, 32) || num === 0)
        return 0;
    let reversed = '';
    let numStr = num.toString();
    for (let i = numStr.length - 1; i >= 0; i--) {
        if (numStr[i] === '-') {
            reversed = '-' + reversed;
            break;
        }
        reversed += numStr[i];
    }
    let i = 0;
    while (reversed[i] === '0') {
        i++;
    }
    let cleanedReverse = parseInt(reversed.slice(i));
    if (cleanedReverse > 0 && cleanedReverse > Math.pow(2, 32) / 2)
        return 0;
    if (cleanedReverse < 0 && cleanedReverse < -Math.pow(2, 32) / 2)
        return 0;
    else
        return cleanedReverse;
};
// console.log(reverse(1563847412));
// // console.log(reverse(9646324351));
// console.log(reverse(-2147483648));
// // console.log(reverse(-8463847412));
// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(1200));
// console.log(
//     reverse(
//         999999999999999999999999999999999999999999999999999999999999999999999999999999999999999934236469455654564545353453453453543453453405
//     )
// );
// console.log(reverse(0));
// take an integer, append it to our result
// 1s place, 10s place, 100s place
// let negative = false
// if(num < 0) {
// negative = true;
// num *= -1
// }
// TODO: does not work currently. num isn't dividing correctly
// const reverseInt = (num) => {
//     let negative = false;
//     if (num < 0) {
//         negative = true;
//         num *= -1;
//     }
//     let reversed = 0;
//     while (num > 0) {
//         reversed = reversed * 10 + (num % 10);
//         console.log(num % 10);
//         num = num % 10;
//     }
//     // if (reversed > Number.MAX_VALUE) return 0;
//     return negative ? -1 * reversed : reversed;
// };
// console.log(reverseInt(123));
const reverseInt = (num) => {
    let reversed = 0, remainder = 0; // <-- initialize the remainder
    while (num > 0) {
        reversed *= 10;
        remainder = num % 10; // <-- this grabs last digit
        num = (num - remainder) / 10; // <-- eliminate zero in num
        reversed += remainder; // <-- 'push' remainder onto end of reversed
    }
    return reversed;
    // dividing by ten eliminates the last digit in a number (because it's the 10s place)
};
console.log(reverseInt(123));
//TODO: Check for the edge cases
//TODO: larger than positive 32-bit
// TODO: Smaller than negative 32-bit
// TODO: if zero, return 0
