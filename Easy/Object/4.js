/*
=============================================================================================================================
*Problem: How to merge two objects?
=============================================================================================================================
*/

/*
=============================================================================================================================
Solution: ✅ 1. Using spread operator (most used):
=============================================================================================================================
*/
const person = {
   name: 'Sakib Al Hasan',
   age: 37,
   salary: 300000
}

const details = {
   city: "NYC",
   job: "Dev"
}

const mergeTwoObjects = (obj1, obj2) => {

   if (obj1 === null || typeof obj1 !== 'object' || Array.isArray(obj1)) {
      return null
   }

   if (obj2 === null || typeof obj2 !== 'object' || Array.isArray(obj2)) {
      return null
   }

   const mergedObject = { ...obj1, ...obj2 }

   return mergedObject

};

const output = mergeTwoObjects(person, details)
console.log(output)

/*
=============================================================================================================================
Solution: ✅ 2. Using Object.assign():
=============================================================================================================================
*/
const person2 = {
   name: 'Sakib Al Hasan',
   age: 37,
   salary: 300000
}

const details2 = {
   city: "NYC",
   job: "Dev"
}

const mergeTwoObjects2 = (obj1, obj2) => {

   if (obj1 === null || typeof obj1 !== 'object' || Array.isArray(obj1)) {
      return null
   }

   if (obj2 === null || typeof obj2 !== 'object' || Array.isArray(obj2)) {
      return null
   }

   const mergedObject = Object.assign({}, obj1, obj2)

   return mergedObject

};

const output2 = mergeTwoObjects2(person2, details2)
console.log(output2)

/*
=============================================================================================================================
Solution: ✅ SHALLOW MERGE WARNING ⚠️ Nested objects are still referenced:
=============================================================================================================================
*/


const user1 = {
  name: "Alice",
  address: { city: "NYC" }
};

const user2 = {
  address: { country: "USA" }
};

const merged5 = { ...user1, ...user2 };

console.log(merged5);
// { name: "Alice", address: { country: "USA" } }
//❗address.city is LOST (not merged deeply)

/*
=============================================================================================================================
Solution: ✅ 3. MANUAL MERGE USING for...in (INTERVIEW STYLE)
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


