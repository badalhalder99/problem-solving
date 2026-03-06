/*
===============================================================================
🧠 PROBLEM: “Deep Clone an Object (using basic JSON method)”
===============================================================================
*/

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

/*🔁 How It Works

return JSON.parse(JSON.stringify(obj))
```
JSON.stringify(obj)  →  converts object to JSON string
JSON.parse(string)   →  converts string back to a brand new object
*/
