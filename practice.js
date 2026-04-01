/*
===============================================================================
🧠 PROBLEM: Remove duplicate objects from the array?
===============================================================================
*/

const users = [
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Badal", age: 20 },
  { name: "Shaim", age: 19 }
]

// - Solution - 01:
const removeDuplicateObj = (arr) => {
   if (!Array.isArray(arr)) return []

   let result = []
   let seen = new Set()

   for (let item of arr) {
      const key = JSON.stringify(item)

      if (!seen.has(key)) {
         seen.add(key)
         result.push(item)
      }
   }

   return result
}

const output = removeDuplicateObj(users)
console.log(output)

/*
-------------------------------------------------------->
[
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Shaim", age: 19 }
]

*/
