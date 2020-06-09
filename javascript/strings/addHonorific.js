"use strict";
/*
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format
  
  Return a new array of strings in this format: "Honorific FirstName LastName"
  Bonus: avoid built in methods besides simple ones like .push
*/
// Inputs
const honorific1 = 'Mr.';
const names1 = [];
// Output: []
// Inputs
const honorific2 = 'Sir';
const names2 = ['Sanchez, Rick', 'Smith, Jerry'];
// Output: ["Sir Rich Sanchez", "Sir Jerry Smith"]
// Inputs
const honorific3 = 'Mrs.';
const names3 = ['HorseDoctor, Beth'];
// Output: ["Mrs. Beth HorseDoctor"]
//
// lastName += character
// firstName += character
// newarray.push(honorific+' '+firstName + ' ' lastName)
// for name of array
// .strip will remove spaces
// will always be given only one first name and one last name
function addHonorific(fullNames, honorific) {
    const reorganizedNames = [];
    for (const fullName of fullNames) {
        let firstName = '';
        let lastName = '';
        let lengthOfLastName = 0;
        // grabbing last name
        for (const character of fullName) {
            if (character === ',') {
                break;
            }
            lastName += character;
            lengthOfLastName++;
        }
        for (let i = lengthOfLastName; i < fullName.length; i++) {
            if (fullName.charAt(i) !== ',' && fullName.charAt(i) !== ' ') {
                // why the hell does this work?
                firstName += fullName.charAt(i);
            }
        }
        // console.log(`Last Name: ${lastName}`);
        // console.log(`First Name: ${firstName}`);
        reorganizedNames.push(`${honorific} ${firstName} ${lastName}`);
    }
    return reorganizedNames;
}
const addHonorificEasier = (fullNames, honorific) => {
    const honorificNames = [];
    for (const fullName of fullNames) {
        const [lastName, firstName] = fullName.split(', ');
        honorificNames.push(`${honorific} ${firstName} ${lastName}`);
    }
    return honorificNames;
};
// console.log(addHonorific(names1, honorific1));
// console.log(addHonorific(names2, honorific2));
// console.log(addHonorific(names3, honorific3));
console.log(addHonorificEasier(names1, honorific1));
console.log(addHonorificEasier(names2, honorific2));
console.log(addHonorificEasier(names3, honorific3));
