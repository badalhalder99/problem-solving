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

const userMap = new Map([
   ["name", "Badal"],
   ["age", 26],
   ["country", "Bangladesh"]
]);

const convertMapToObj = (map) => {

   if (!(map instanceof Map)) {
      throw new TypeError("Enter valid map")
   }

   const newObj = {}


   for (let [key, value] of map) {
      newObj[key] = value
   }

   return newObj

}

const output = convertMapToObj(userMap)
console.log(output) //
