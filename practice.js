// -  Count the number of keys in an object.?

const obj = {
   name: 'Badal',
   age: 30,
   job: "Software Engineer(Frontend)",
   education: 'MBA',
   salary: 30000,
   siblings: 4
}

const countKeyOfObject = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return 0
   }

   let count = 0

   for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         count++
      }
   }

   return count
}

const output = countKeyOfObject(obj)
console.log(`The object length is ${output}`)

