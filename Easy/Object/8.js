/*
=============================================================================================================================
*Problem: Delete a property from an object?
=============================================================================================================================
*/
/*
=============================================================================================================================
*Solution - 01: using Using delete keyword:
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

const removeProperty = (obj, key) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return null
   }

   const clone = { ...obj }

   delete clone[key]

   return clone
};

const output = removeProperty(person, "district");
console.log(output)

/*
=============================================================================================================================
*Solution - 02: using Using for..in loop:
=============================================================================================================================
*/

const removeWithForIn = (obj, wantToRemoveKey) => {
   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) return null;

   const newObj = {};

   for (let key in obj) {
      if (key !== wantToRemoveKey) {
         newObj[key] = obj[key];
      }
   }

   return newObj;
};

const show = removeWithForIn(person, "age")
console.log(show)
