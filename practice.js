/*
=============================================================================================================================
*Problem: Delete a property from an object?
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

const removeProperty = (obj, wantToRemoveKey) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return null
   }

   let newObj = {}

   for (let key in obj) {
      if (key !== wantToRemoveKey) {
         newObj[key] = obj[key]
      }
   }

   return newObj
};

const output = removeProperty(person, "age");
console.log(output)




