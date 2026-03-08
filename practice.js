/*
===============================================================================
🧠 PROBLEM: Transform object keys to camelCase?”
===============================================================================
*/

const product = {
   product_name: "Laptop",
   product_price: 1200,
   stock_quantity: 50
}

const convertKeyToCamelCase = (obj) => {

   if (obj === null || typeof obj !== 'object') {
      return {}
   }

   const keys = Object.keys(obj)

   let newObj = {}

   for (let key of keys) {
      const words = key.split("_")

      const camelKey = words.map((word, index) => {
         if (index === 0) return word
         return word.charAt(0).toUpperCase() + word.slice(1)
      }).join("")

      newObj[camelKey] = obj[key]
   }

   return newObj

}

const output = convertKeyToCamelCase(product)
console.log(output)




