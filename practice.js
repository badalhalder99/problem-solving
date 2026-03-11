/*
===============================================================================
🧠 PROBLEM: Convert object to Map
===============================================================================
*/

/**
 *
 * ---------------------------------------------------------------------
📌 INPUT EXAMPLE
---------------------------------------------------------------------

const userMap = new Map([
  ["name", "Badal"],
  ["age", 26],
  ["country", "Bangladesh"]
]);


---------------------------------------------------------------------
📌 EXPECTED OUTPUT
---------------------------------------------------------------------

{
  name: "Badal",
  age: 26,
  country: "Bangladesh"
}
*/

// const userMap = new Map([
//    ["name", "Badal"],
//    ["age", 26],
//    ["country", "Bangladesh"]
// ]);

// const convertMapToObj = (map) => {

//    const newObj = {}

//    const entries = Object.entries(map)

//    for (let [key, value] of entries) {
//       newObj[key] = value
//    }

//    return newObj

// }

// const output = convertMapToObj(userMap)
// console.log(output) //

const user = {
  name: "Badal",
  age: 26,
  country: "Bangladesh"
}

const convertObjToMap = (obj) => {

   if (obj === null || typeof obj !== "object") {
      throw new TypeError("Input must be a non-null object");
   }

   const entries = Object.entries(obj)

   const result = new Map(entries)

   return result
}

const output = convertObjToMap(user)
console.log(output)