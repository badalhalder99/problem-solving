/*
===============================================================================
🧠 PROBLEM: “Group Array of Objects by a Key”
===============================================================================
*/

const users = [
   { name: "Badal", role: "admin" },
   { name: "Emon", role: "user" },
   { name: "Shaim", role: "admin" },
   { name: "Milon", role: "user" }
]

const groupByKey = (arr, key) => {

   let result = {}

   for (let item of arr) {

      const groupKey = item[key]

      if (!result[groupKey]) {
         result[groupKey] = []
      }

      result[groupKey].push(item)
   }

   return result
}

const output = groupByKey(users, "role")
console.log(output)

/*
-------------------------------------------------------->
{
   admin: [
      { name: "Badal", role: "admin" },
      { name: "Shaim", role: "admin" }
   ],
   user: [
      { name: "Emon", role: "user" },
      { name: "Milon", role: "user" }
   ]
}

*/