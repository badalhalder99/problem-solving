/*
=============================================================================================================================
*Problem: Check if an object has a specific key?
=============================================================================================================================
*/

/*
=============================================================================================================================
*Solution - 01: using Object.keys() and arr.includes()
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
      return false
   }

   const keys = Object.keys(obj)

   if (keys.includes(searchKey)) {
      return true
   } else {
      return false
   }
};

const output = checkObjectKey(person, "gender")
console.log(output)

/*
=============================================================================================================================
*Solution - 02: using Object.hasOwnProperty()
=============================================================================================================================
*/

const checkObjectKey2 = (obj, searchKey) => {
   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return false;

   return obj.hasOwnProperty(searchKey); // returns true or false directly ✅
};

const output2 = checkObjectKey2(person, "education")
console.log(output2)

/*
=============================================================================================================================
*Solution - 03: using Using in operator:
=============================================================================================================================
*/

const checkObjectKey3 = (obj, searchKey) => {
   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return false;

   return searchKey in obj; // ✅ using "in" operator
};

const output3 = checkObjectKey3(person, "gender")
console.log(output3) // true

/*
=============================================================================================================================
*Solution - 04: using Object.hasOwn()
=============================================================================================================================
*/

const checkObjectKey4 = (obj, searchKey) => {
   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return false;

   return Object.hasOwn(obj, searchKey) // returns true or false directly ✅
};

const output4 = checkObjectKey2(person, "education")
console.log(output4)

/*
=============================================================================================================================
* Problem: Check if an object has a specific key (using for...in)
=============================================================================================================================
*/

const hasKey = (obj, targetKey) => {
   if (obj === null || typeof obj !== "object") {
      return false;
   }

   for (const key in obj) {
      if (Object.hasOwn(obj, key) && key === targetKey) {
         return true;
      }
   }

   return false;
};

const show = hasKey(person, 'district')
console.log(show)

