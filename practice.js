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

const checkObjectKey = (obj, searchKey) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return null
   }

   for (let key in obj) {
      if (Object.hasOwn(obj, key) && key === searchKey) {
         return true
      } else {
         return false
      }
   }
};

const output = checkObjectKey(person, "age")
console.log(output)




