/*
===============================================================================
🧠 PROBLEM: Count occurrences of values in an array of objects?
===============================================================================
*/

const users = [
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" },
  { name: "John", role: "admin" }
]

// - Solution - 01:
const countOccaranceValue = (arr, key) => {
   if (!Array.isArray(arr)) return {}

   let result = {}

   for (let item of arr) {
      const groupKey = item?.[key]
      if (groupKey == null) continue

      result[groupKey] = (result[groupKey] || 0) + 1
   }

   return result
}

const output = countOccaranceValue(users, "role")
console.log(output)

/*
===============================================================================
📌 Example Input
===============================================================================


*/

const isObject = (val) => {
   return val !== null && typeof val === 'object' && !Array.isArray(val)
}

const result = isObject({})
console.log(result)
