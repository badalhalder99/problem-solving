// -  Check if an object is empty?

const checkEmptyObject = (obj) => {
   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return false;
   }

   for (let key in obj) {
      if (Object.hasOwn(obj, key)) {
      return false; // found a key → NOT empty
      }
   }

   return true; // no keys found → empty
};

console.log(checkEmptyObject({})) // true
console.log(checkEmptyObject({ a: 1 }) ) // false
console.log(checkEmptyObject(Object.create({a:1}))) // true (no own keys)
console.log(checkEmptyObject([])) // false
console.log(checkEmptyObject(null)) // false

console.log("Solution two is bottom")

// - Solution -02:

const checkEmptyObjects = (obj) => {
   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return false;
   }

   const arr = Object.keys(obj)

   return arr.length === 0
};

console.log(checkEmptyObjects({})) // true
console.log(checkEmptyObjects({ a: 1 }) ) // false
console.log(checkEmptyObjects(Object.create({a:1}))) // true (no own keys)
console.log(checkEmptyObjects([])) // false
console.log(checkEmptyObjects(null)) // false
