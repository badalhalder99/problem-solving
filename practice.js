/*
===============================================================================
🧠 PROBLEM: Flatten a Nested Object One Level?
===============================================================================
*/


const letters = {
   a: 1,
   b: {
      c: 2,
      d: 3
   },
   e: 4
}

const flattenNestedObj = (obj) => {

   let newObj = {}

   if (obj && typeof obj === "object") {
      for (let key in obj) {

         const value = obj[key]

         if (value && typeof value === "object" && !Array.isArray(value)) {
            Object.assign(newObj, value)

         } else {
            newObj[key] = obj[key]
         }
      }
   }

   return newObj
}

const output = flattenNestedObj(letters)
console.log(output) // ["Emon", "Milon", "Shaim", "Badol"]
