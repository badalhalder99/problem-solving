

/*
===============================================================================
🧠 PROBLEM: Rename property in object with edge case handling
===============================================================================
*/

const product = {
   productName: "Laptop",
   productPrice: 1200,
   stockQuantity: 50
}

const renameObjKey = (obj, oldKey, newKey) => {

   // Edge Case 1: Invalid object
   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return {}
   }

   // Edge Case 2: Keys must be valid strings
   if (typeof oldKey !== "string" || typeof newKey !== "string") {
      return { ...obj }
   }

   // Edge Case 3: Empty keys
   if (oldKey.length === 0 || newKey.length === 0) {
      return { ...obj }
   }

   // Edge Case 4: oldKey does not exist
   if (!Object.hasOwn(obj, oldKey)) {
      return { ...obj }
   }

   // Edge Case 5: oldKey and newKey are same
   if (oldKey === newKey) {
      return { ...obj }
   }

   const newObj = {}

   for (let key in obj) {

      if (key === oldKey) {
         newObj[newKey] = obj[key]
      } else {
         newObj[key] = obj[key]
      }

   }

   return newObj
}

const output = renameObjKey(product, "productName", "name")
console.log(output)
