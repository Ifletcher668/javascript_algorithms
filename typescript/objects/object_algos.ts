// Given a 'search for' object whose values will only be primitives (ints, strings, bools)
// and a list of objects, return any object that has the same key value pairs as the 'search for' object

// given searchFor and items
// const searchFor = {
//     firstName: "Bob",
//     age: 31,
// };

// const items = [
//     {
//         firstName: "Bob",
//         lastName: "Bobbert",
//         age: 31,
//     },
//     {
//         firstName: "John",
//         lastName: "Smith",
//         age: 25,
//     },
//     {
//         firstName: "Bob",
//         lastName: "Smith",
//         age: 27,
//     },
//     {
//         firstName: "Bob",
//         lastName: "White",
//         age: 31,
//     },
// ];

// let foundItems = findOjbects(searchFor, items);
// console.log(foundItems);
/* foundItems should be:
  [
    { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    { firstName: 'Bob', lastName: 'White', age: 31 }   
  ]
*/

/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
  Examples:
*/

// const students = [
//     {
//         id: 1,
//         name: "student1",
//         isLateToday: false,
//         lateCount: 15,
//         redBeltStatus: false,
//     },
//     {
//         id: 2,
//         name: "student2",
//         isLateToday: false,
//         lateCount: 1,
//         redBeltStatus: false,
//     },
//     {
//         id: 3,
//         name: "student3",
//         isLateToday: false,
//         lateCount: 0,
//         redBeltStatus: false,
//     },
// ];

/* 
  Input: 3, { redBeltStatus: true }, students
  Output: {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: true
  }
  Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
  Output: {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false
  }
  Input: 5, {}, students
  Output: null
*/

//! Neil's Answers Below
// ! ############################################################
/* function findObjects(criteria, collection) {
  const foundDocuments = [];

  for (const doc of collection) {
    let isMatch = true;

    for (const searchKey in criteria) {
      const searchVal = criteria[searchKey];

      if (
        doc.hasOwnProperty(searchKey) === false ||
        doc[searchKey] !== searchVal
      ) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      foundDocuments.push(doc);
    }
  }
  return foundDocuments;
}

function findObjectsFilter(criteria, collection) {
  return collection.filter((doc) => {
    for (const searchKey in criteria) {
      if (
        !doc.hasOwnProperty(searchKey) ||
        doc[searchKey] !== criteria[searchKey]
      ) {
        return false;
      }
    }
    return true;
  });
} */

/* function findByIdAndUpdate(id, updatedVals, collection) {
  for (const doc of collection) {
    if (doc.id === id) {
      for (const keyToUpdate in updatedVals) {
        const newVal = updatedVals[keyToUpdate];

        if (doc.hasOwnProperty(keyToUpdate)) {
          doc[keyToUpdate] = newVal;
        }
      }
      return doc;
    }
  }
  return null;
} */

// ! ############################################################

/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      isInfected[bool]

    return a new array of the names of people who are at high risk of infection
    A person is at high risk of catching the virus if they:
    1. are not practicing social distancing
    2. have a friend who is not practicing social distancing, and is infected
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

// const friend1 = {
//     firstName: "Friend",
//     lastName: "One",
//     isSocialDistancing: false,
//     isInfected: true,
// };

// const friend2 = {
//     firstName: "Friend",
//     lastName: "Two",
//     isSocialDistancing: false,
//     isInfected: true,
// };

// const friend3 = {
//     firstName: "Friend",
//     lastName: "Three",
//     isSocialDistancing: false,
//     isInfected: false,
// };

// // Input:
// const persons = [
//     {
//         firstName: "Person",
//         lastName: "One",
//         isSocialDistancing: false,
//         friends: [friend2, friend3],
//     },
//     {
//         firstName: "Person",
//         lastName: "Two",
//         isSocialDistancing: true,
//         friends: [friend2, friend1],
//     },
//     {
//         firstName: "Person",
//         lastName: "Three",
//         isSocialDistancing: false,
//         friends: [friend2, friend1],
//     },
// ];
// // Output: ["Person One", "Person Three"]

// // person isSocialDistancing has to equal false
// // AND they have to have a friend who isInfected
// //

// const SARS_cov1Checkpoint = (persons) => {
//     //   const isAtRisk = [];

//     //   if (persons.length === 0) {
//     //       return null;
//     //   }

//     //   ! not working
//     //   persons.forEach((person) => {
//     //       if (!person.isSocialDistancing) {
//     //           person.friends.filter((friend) => {
//     //               if (friend.isInfected) {
//     //                   return isAtRisk.push(person);
//     //               }
//     //           });
//     //   * working
//     //           // for (const friend of person.friends) {
//     //           //     if (friend.isInfected) {
//     //           //         isAtRisk.push(person);
//     //           //         break;
//     //           //     }
//     //           // }
//     //       }
//     //   });
//     //   return isAtRisk;
//     // };

//     return persons
//         .filter(
//             (person) =>
//                 !person.isSocialDistancing &&
//                 person.friends.findIndex(
//                     (friend) => !friend.isSocialDistancing && friend.isInfected
//                 ) > -1
//         )
//         .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
// };

// // const map = new Map();

// console.log(SARS_cov1Checkpoint(persons));

/* 
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.
  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

// const students = [
//     {
//         firstName: "FN1",
//         lastName: "LN1",
//         habits: [
//             "doesn't wash dishes",
//             "falls asleep in lecture",
//             "shows up early",
//         ],
//     },
//     {
//         firstName: "FN2",
//         lastName: "LN2",
//         habits: ["shows up late", "washes dishes", "helps peers"],
//     },
//     {
//         firstName: "FN3",
//         lastName: "LN3",
//         habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
//     },
//     {
//         firstName: "FN4",
//         lastName: "LN4",
//         habits: ["shows up early", "helps peers", "washes dishes"],
//     },
// ];

// Input: students, "doesn't wash dishes"
// Output: ["FN1 LN1", "FN3 LN3"]

// Input: students, "shows up late"
// Output: ["FN2 LN2", "FN3 LN3"]

// Input: students, "vapes too much"
// Output: []

// function maxServingSize(recipe, available) {
//     // Output: 1 because only 1 live squid is available
//     // Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
//     // Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

//     // check the values of all matching keys between the two objects

//     // also check if the recipe has an ingredient that is not in the available object
//     // do I have everything this recipe requires?
//     // if no, exit (and go to store)
//     // if yes, check how many we can make?
//     //

//     const recipeArr = Object.entries(recipe);
//     const availableArr = Object.entries(available);

//     console.log(recipeArr);
//     console.log("\n");
//     console.log(availableArr);

//     const maxServing = [];
//     // recipeArr[1]
//     for (let i = 0; i < recipeArr.length; i++) {
//         const recipe = recipeArr[i];

//         for (let j = 0; j < availableArr.length; j++) {
//             const available = available[j];

//             if (recipe[0] === available[0] && recipe[1] <= available[1]) {
//                 // count how many times recipe goes into available
//                 // divide recipe by available and floor
//                 maxServing.push(Math.floor(recipe[1] / available[1]));
//             }
//         }
//     }
// }
