/*
===============================================================================
🧠 PROBLEM: Pick nested properties?
===============================================================================
*/


const user = {
   id: 1,
   profile: {
      name: "Badal",
         address: {
         city: "Dhaka"
      }
   }
}

const path = "profile.address.city"
const defaultValue = "Unknown"

const pickNestedProperties = (obj, path, defaultValue) => {

   if (obj === null || typeof obj !== "object") {
      return {}
   }

   const keys = path.split(".")
   let current = obj

   for (let key of keys) {

      if (current === null) {
         return defaultValue
      }

      current = current[key]
   }

   return current === undefined ? defaultValue : current
}

const output = pickNestedProperties(user, path, defaultValue)
console.log(output)
