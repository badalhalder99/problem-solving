const shallowCopyWithForIn = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return null
   }

   let shallowCopy = {}

   for (let key in obj) {
      if (Object.hasOwn(obj, key)) {
         shallowCopy[key] = obj[key]
      }
   }

   return shallowCopy
};

console.log(shallowCopyWithForIn({ a: 1, b: 2 }))            // { a: 1, b: 2 }
console.log(shallowCopyWithForIn({}))                        // {}
console.log(shallowCopyWithForIn({ name: "Badal" }))         // { name: "Badal" }
console.log(shallowCopyWithForIn({ user: { id: 1 } }))       // { user: { id: 1 } }
console.log(shallowCopyWithForIn(null))                      // null
console.log(shallowCopyWithForIn(undefined))                 // null
console.log(shallowCopyWithForIn(123))                       // null
console.log(shallowCopyWithForIn("hello"))                   // null
console.log(shallowCopyWithForIn(true))                      // null
console.log(shallowCopyWithForIn([1, 2, 3]))                 // null
console.log(shallowCopyWithForIn(Object.create({ a: 1 })))   // {}
console.log(shallowCopyWithForIn({ [Symbol("id")]: 100 }))   // { [Symbol(id)]: 100 }