/*
===============================================================================
🧠 PROBLEM: Convert object to (array of objects) with key
===============================================================================
*/

/*
=============================================================================================================================
 ###: Solution - 01: Using Object.keys() and for..in
=============================================================================================================================
*/

const product = {
   productName: "Laptop",
   productPrice: 1200,
   stockQuantity: 50
}

const convertObjToArrayOfObject = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return []
   }

   const result = []

   for (let key in obj) {
      result.push({
         key: key,
         value: obj[key]
      })
   }

   return result
}

const output = convertObjToArrayOfObject(product)
console.log(output)

/*
=============================================================================================================================
 ###: Solution - 02: Using Object.keys() and for..of
=============================================================================================================================
*/

const convertObjToArrayOfObject2 = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return []
   }

   const keys = Object.entries(obj)

   const result = []

   for (let [key, value] of keys) {
      result.push({
         key: key,
         value: value
      })
   }

   return result
}

const output2 = convertObjToArrayOfObject2(product)
console.log(output2)
