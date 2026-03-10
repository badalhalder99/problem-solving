/*
===============================================================================
🧠 PROBLEM: Transform object keys to snake_case?
===============================================================================
*/

const product = {
   productName: "Laptop",
   productPrice: 1200,
   stockQuantity: 50
}

const toSnakeCase = (obj) => {

   if (obj === null || typeof obj !== 'object') {
      return {}
   }

   const keys = Object.keys(obj)

   let newObj = {}

   for (let key of keys) {
      const chars = key.split("")

      let snake = ""

      for (let char of chars) {
         if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            snake += "_" + char.toLowerCase()
         } else {
            snake += char
         }
      }

      newObj[snake] = obj[key]
   }

   return newObj

}

const output = toSnakeCase(product)
console.log(output)



