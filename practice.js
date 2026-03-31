/*
===============================================================================
🧠 PROBLEM: Map array of objects to array of values?
===============================================================================
*/

const users = [
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Shaim", age: 19 }
]

// - Solution - 01:
const mapArr = (arr, key) => {
   if (!Array.isArray(arr)) return []
   if (typeof key !== "string") return []

   let result = []

   for (let item of arr) {
      result.push(item[key])
   }

   return result
}

const output = mapArr(users, "name")
console.log(output) // [ 'Badal', 'Emon', 'Shaim' ]

/*
-------------------------------------------------------->
[
  { name: "Badal", role: "admin" },
  { name: "Shaim", role: "admin" }
]

*/