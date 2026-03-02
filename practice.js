/*
=============================================================================================================================
*Problem: Check if an object has a specific key?
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

const checkObjectKey = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return null
   }

   const values = Object.values(obj)

   return values
};

const output = checkObjectKey(person)
console.log(output) 


