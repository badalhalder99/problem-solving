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

      result[groupKey] = (result[groupKey || 0]) + 1
   }

   return result
}

const output = countOccaranceValue(users, "role")
console.log(output)

/*
===============================================================================
📌 Example Input
===============================================================================

const users = [
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" },
  { name: "John", role: "admin" }
]

Count by:

"role"


===============================================================================
📌 Expected Output
===============================================================================

{
  admin: 3,
  user: 2
}
*/

const isPlainObject = (value) =>
   value !== null &&
   typeof value === "object" &&
   !Array.isArray(value)

   isPlainObject({})                // true
isPlainObject({ a: 1 })         // true
isPlainObject(new Object())     // true

isPlainObject([])               // false
isPlainObject(null)             // false
isPlainObject(() => {})         // false
isPlainObject(new Date())       // false
isPlainObject(new Map())        // false

isPlainObject(Object.create(null)) // true