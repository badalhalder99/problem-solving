/*
=============================================================================================================================
*Problem: How to get all keys of an object.
=============================================================================================================================
*/

const person = {
   name: 'Asim Howlader',
   age: 30,
   salary: 30000,
   gender: "male",
   country: "Bangladesh",
   district: "Barishal",
   education: 'MBA'
}

// Using Object.keys()
// Object.keys(person).forEach(key => {
//   console.log(`${key}: ${person[key]}`);
// });

// // Using Object.entries()
// Object.entries(person).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// Using Object.keys()
Object.keys(person).forEach(key => {
   console.log(`${key}: ${person[key]}`)
})

console.log("New approach is given below:::::::::::::::::::::::::::::::::::::::::::::::::::::")

Object.entries(person).forEach(([key, value]) => {
   console.log(`${key}: ${value}`)
})
