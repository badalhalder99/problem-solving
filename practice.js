const user = {
   name: "Asim",
   age: 30,
   address: {
      city: "Dhaka",
      country: "Bangladesh"
   },
   skills: ["JavaScript", "React"]
};

const deepClone = (obj) => {

   if (obj === null || typeof obj !== 'object') {
      return obj
   }

   return JSON.parse(JSON.stringify(obj))
}

const output = deepClone(user)
console.log(output)
