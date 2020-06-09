"use strict";
/*
  Optional chaining is a newer syntax that also solves this problem: https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d
  The more you deal with objects, especially ones with many nested objects, where you
  are chaining dot notation to access nested values, the more you run into these errors:
    Uncaught TypeError: Cannot read property 'keyName' of undefined
    Uncaught TypeError: Cannot read property 'keyName' of null
  
  These errors mean, somewhere along your chain of dots, one of the keys did not exist
  on the object so it returned undefined, and then the next dot was trying to access
  a key on undefined, or the key did exist but null was it's value.
  One example of how this might happen is getting JSON data back from an API. Sometimes,
  the record you requested has more data so there are more levels of nesting, which you get used to,
  so you write your code to access the nested data but then you request a different record, and
  less data is available, so your code breaks when trying to access nested data that isn't there.
  There is an entire library dedicated to solving this problem, the solution is referred to as a "lens",
  you look through a "lens" to help you see into an object and safely attempt to access a nested value.
  Without a lens, you would need to interrupt your dot chaining and check the value after each dot,
  one at a time, to make sure it is not undefined or null before going to the next dot.
  Input:
    Object,
    Array of strings representing a path of keys in the Object
  Output:
    - Value from traversing the object to the last key
    - null if at any point accessing a key returns undefined
      - this means a key was not found / the Object was not nested as deep as the path of keys goes
    - the given object if array of keys is empty
*/
// Input:
const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX',
        },
    },
};
const keys1 = ['personalInfo', 'address', 'city'];
// Output: 'wallas'
const keys2 = ['personalInfo', 'address', 'country'];
// Output: null
const keys3 = ['personalInfo', 'mainHobby', 'yearsActive'];
// Output: null
const keys4 = ['address', 'city'];
// Output: null
const keys5 = [];
// Output: the provided obj
