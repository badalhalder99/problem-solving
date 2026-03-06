const user = {
  name: "Asim",
  age: 30,
  salary: 30000,
  country: "Bangladesh"
}

const listKeys = ["name", "country"]

const pickSpecificKey = (obj, listKeys) => {
   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return obj
   }

   if (listKeys.length === 0 || !Array.isArray(listKeys)) {
      return {}
   }

   let newObj = {}

   for (let key of listKeys) {
      if (Object.hasOwn(obj, key)) {
         newObj[key] = obj[key]
      }
   }

   return newObj
}

const show = pickSpecificKey(user, listKeys)
console.log(show)


/*
Expected Result:

{
  name: "Asim",
  country: "Bangladesh"
}
*/
