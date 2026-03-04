/*
=============================================================================================================================
*Problem: How to check if two objects are equal (shallow).?
=============================================================================================================================
*/

// const person = {
//    name: 'Asim Howlader',
//    age: 30,
//    salary: 30000,
//    gender: "male",
//    country: "Bangladesh",
//    district: "Barishal",
//    education: 'MBA'
// }

/*
=============================================================================================================================
*Solution - 02: Approach 2: JSON.stringify() (simple but limited)
=============================================================================================================================
*/

const shallowEqual = (obj1, obj2) => {
   if (obj1 === null || typeof obj1 !== 'object' || Array.isArray(obj1)) {
      return false;
   }

   if (obj2 === null || typeof obj2 !== 'object' || Array.isArray(obj2)) {
      return false;
   }

   return JSON.stringify(obj1) === JSON.stringify(obj2)
};

console.log("Equal objects:", shallowEqual({ name: 'Asim', age: 30 }, { name: 'Asim', age: 30 })); // - true
console.log("Different order:", shallowEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));                     // - false ⚠️
console.log("Different values:", shallowEqual({ name: 'Asim' }, { name: 'Nabil' }));               // - false
console.log("Different key count:", shallowEqual({ a: 1 }, { a: 1, b: 2 }));                       // - false
console.log("Nested objects:", shallowEqual({ a: { x: 1 } }, { a: { x: 1 } }));                    // - true  ⚠️
console.log("null vs object:", shallowEqual(null, { a: 1 }));                                      // - false
console.log("Arrays:", shallowEqual([1, 2], [1, 2]));                                              // - false

