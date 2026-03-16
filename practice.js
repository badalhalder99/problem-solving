/*
===============================================================================
🧠 PROBLEM: “Find the Difference Between Two Objects” ?
===============================================================================
*/

const obj1 = {
   a: 1,
   b: 2,
   c: {
      x: 10,
      y: 20
   }
}

const obj2 = {
   a: 1,
   b: 5,
   c: {
      x: 10,
      y: 30
   },
   d: 4
}

const isObject = (val) => {
   return val !== null && typeof val === "object" && !Array.isArray(val)
}

const diffObjects = (obj1, obj2) => {
   let result = {}

   const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])

   for (let key of allKeys) {
      const val1 = obj1[key]
      const val2 = obj2[key]

      if (isObject(val1) && isObject(val2)) {
         const nested = diffObjects(val1, val2)
         if (Object.keys(nested).length > 0) result[key] = nested
      } else if (val1 !== val2) {
         result[key] = {
            obj1: val1,
            obj2: val2
         }
      }
   }

   return result
}

const output = diffObjects(obj1, obj2)
console.log(output)

/*
-------------------------------------------------------->
- Output -2:
{
  b: { obj1: 2, obj2: 5 },
  c: { y: { obj1: 20, obj2: 30 } },
  d: { obj1: undefined, obj2: 4 }
}

*/