/*
===============================================================================
🧠 PROBLEM: “Filter Array of Objects by Property Value”
===============================================================================
*/

const users = [
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" }
]

const filterArr = (arr, key, value) => {
   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!key || value === undefined) return []
   
   return arr.filter(item => item[key] === value)
}

const output = filterArr(users, "role", "admin")
console.log(output)

// - Solution - 02:
const filterArr2 = (arr, key, value) => {
   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!key || value === undefined) return []

   let result = []

   for (let item of arr) {
      if (item[key] === value) {
         result.push(item)
      }
   }

   return result
}

const output2 = filterArr2(users, "role", "admin")
console.log(output2)

/*
-------------------------------------------------------->
[
  { name: "Badal", role: "admin" },
  { name: "Shaim", role: "admin" }
]

*/