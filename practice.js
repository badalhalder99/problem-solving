/*
===============================================================================
🧠 PROBLEM: Count total properties including nested?”
===============================================================================
*/

const product = {
  search: "laptop",
  page: 1,
  category: "electronics"
}

const convertQuestString = (obj) => {

   if (obj === null || typeof obj !== 'object') {
      return ""
   }

   const arr = Object.keys(obj) // ["search", "page", "category"]

   let result = []

   for (let item of arr) {

      const store = item + "=" + obj[item]
      console.log(store)
      result.push(store)
   }

   console.log("result", result)

   const queryStr = result.join("&")

   return queryStr
}

const output = convertQuestString(product)
console.log(output) // name=Asim&age=30&country=Bangladesh
