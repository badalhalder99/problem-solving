/*
===============================================================================
🧠 PROBLEM: Count total properties including nested?”
===============================================================================
*/

const user = {
   profile: {
      name: "Asim",
      address: {
         city: "Dhaka"
      }
   }
};

const countObjectProperties = (obj) => {

   if (obj === null || typeof obj !== 'object') {
      return 0
   }

   let count = 0

   for (let key in obj) {

      if (Object.hasOwn(obj, key)) {
         count++

         if (obj[key] !== null && typeof obj[key] === "object" && !Array.isArray(value)) {
            count += countObjectProperties(obj[key])
         }
      }
   }

   return count
}

const output = countObjectProperties(user)
console.log(output)

