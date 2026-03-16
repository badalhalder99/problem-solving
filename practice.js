/*
===============================================================================
🧠 PROBLEM: “Find the Difference Between Two Objects” ?
===============================================================================
*/

// const obj1 = {
//    a: 1,
//    b: 2,
//    c: {
//       x: 10,
//       y: 20
//    }
// }

// const obj2 = {
//    a: 1,
//    b: 5,
//    c: {
//       x: 10,
//       y: 30
//    },
//    d: 4
// }

const obj1 = {
   a: 1,
   b: 2,
   c: 3
}

const obj2 = {
   a: 1,
   b: 5,
   d: 4
}

const isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val)

const diffObjects = (obj1, obj2) => {

   let result = {}

   const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])

   for (const key of allKeys) {
      const val1 = obj1[key]
      const val2 = obj2[key]

      // If both values are objects → compare recursively
      if (isObject(val1) && isObject(val2)) {
         const nested = diffObjects(val1, val2)        // recurse into nested objects

         if (Object.keys(nested).length > 0) result[key] = nested
      }
      // If values are different
      else if (val1 !== val2) {
         result[key] = { obj1: val1, obj2: val2 }         // values differ → record both
      }
   }

   return result
}

const output = diffObjects(obj1, obj2)
console.log(output)
