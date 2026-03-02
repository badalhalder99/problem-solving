/*
=============================================================================================================================
*Problem: How to merge two objects?
=============================================================================================================================
*/

const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "Dhaka", age: 30 };

const mergeWithForIn = (a, b) => {
   if (a === null || typeof a !== 'object' || Array.isArray(a)) {
      return null
   }

   if (b === null || typeof b !== 'object' || Array.isArray(b)) {
      return null
   }

   let result = {};

   for (const key in a) {
      if (Object.hasOwn(a, key)) {
         result[key] = a[key];
      }
   }

   for (const key in b) {
      if (Object.hasOwn(b, key)) {
         result[key] = b[key];
      }
   }

   return result;
};

console.log(mergeWithForIn(obj1, obj2));
// { name: "Alice", age: 30, city: "Dhaka" }

