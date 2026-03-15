/*
===============================================================================
🧠 PROBLEM: “How to do Deep Merge Two Objects?
===============================================================================
*/

const one = {
   a: 1,
   b: {
      x: 10,
      y: 20
   }
}

const two = {
   b: {
      y: 30,
      z: 40
   },
   c: 3
}

const deepMerge = (obj1, obj2) => {

   if (obj1 === null || typeof obj1 !== "object") return obj2
   if (obj2 === null || typeof obj2 !== "object") return obj1

   let result = {...obj1}

   for (let key in obj2) {

      const value1 = result[key]
      const value2 = obj2[key]

      if (value1 && value2 &&
         typeof obj1 === 'object' && typeof obj2 === "object" &&
         !Array.isArray(value1) && !Array.isArray(value2)
      ) {
         result[key] = deepMerge(value1, value2)
      } else {
         result[key] = value2
      }
   }
   return result
}

const output = deepMerge(one, two)
console.log(output)
