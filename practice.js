/*
===============================================================================
🧠 PROBLEM: Get object prototype name? / Get the prototype name of an object?
===============================================================================
*/


class Animal {}
class Dog extends Animal {}

const dog      = new Dog();
const arr      = [1, 2, 3];
const map      = new Map();
const set      = new Set();
const date     = new Date();
const plainObj = { name: "Nabil" };
const nullObj  = Object.create(null); // no prototype at all


function getPrototypeName_v1(obj) {
   if (obj === null || obj === undefined) return null

   const proto = Object.getPrototypeOf(obj)
   if (proto === null) return null

   return proto.constructor?.name ?? null
}

console.log(getPrototypeName_v1(dog));      // - "Dog"
console.log(getPrototypeName_v1(arr));      // - "Array"
console.log(getPrototypeName_v1(map));      // - "Map"
console.log(getPrototypeName_v1(date));     // - "Date"
console.log(getPrototypeName_v1(plainObj)); // - "Object"
console.log(getPrototypeName_v1(nullObj));  // - null
console.log(getPrototypeName_v1(null));     // - null
