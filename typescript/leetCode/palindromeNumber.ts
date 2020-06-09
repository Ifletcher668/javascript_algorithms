// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true

// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Could you solve it without converting the integer to a string?

// * this works, but leetCode is dumb and wants me to reverse the place of the -
// const isPalindrome = (num) => {
//     let numClone = num,
//         reversed = 0,
//         remainder = 0,
//         negative = false;

//     if (numClone < 0) {
//         numClone *= -1;
//         negative = true;
//     }

//     while (numClone > 0) {
//         remainder = numClone % 10;
//         reversed *= 10;
//         numClone = (numClone - remainder) / 10;
//         reversed += remainder;
//     }

//     reversed = negative ? (reversed *= -1) : reversed;

//     return reversed === num ? true : false;
// };

const isPalindrome = (num: number) => {
    let numClone: number = num,
        reversed: number = 0,
        remainder: number = 0;

    if (num < 0) return false;
    while (numClone > 0) {
        remainder = numClone % 10;
        reversed *= 10;
        numClone = (numClone - remainder) / 10;
        reversed += remainder;
    }

    return reversed === num ? true : false;
};

console.log(isPalindrome(-101101));
