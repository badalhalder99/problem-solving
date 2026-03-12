/*
===============================================================================
🧠 PROBLEM: Pick nested properties?
===============================================================================
*/


const user = {
   a: 1,
   b: {
      c: 2,
      d: 3
   },
   e: 4
}

const pickNestedProperties = (obj) => {
   
   if (obj === null || typeof obj !== "object") {
      return {}
   }

}

const output = pickNestedProperties(letters)
console.log(output)
