/*
===============================================================================
🧠 PROBLEM: “Sort Array of Objects by a Property”
===============================================================================
*/

const users = [
   { name: "Badal", age: 20 },
   { name: "Emon", age: 16 },
   { name: "Shaim", age: 19 },
   { name: "Milon", age: 12 }
]

const groupByKey = (arr, fn) => {

   return [...arr].sort((a, b) => {
      const valueA = fn(a)
      const valueB = fn(b)

      if (valueA < valueB) return -1
      if (valueA > valueB) return 1
      return 0
   })
}

const output = groupByKey(users, user => user.age)
console.log(output)

/*
-------------------------------------------------------->


*/