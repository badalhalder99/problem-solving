/*
=============================================================================================================================
*Problem: How to get value by dot notation string ("user.name")?
=============================================================================================================================
*/

const obj = {
   user: {
      name: 'Asim Howlader',
      age: 30,
      address: {
         city: 'Barishal',
         country: 'Bangladesh'
      }
   }
};

const getValueByDotNotation = (obj, path) => {

   if (obj === null || typeof obj !== 'object' || typeof path !== 'string' || path.trim() === '') {
      return undefined
   }

   const keys = path.split('.')

   let current = obj

   for (let key of keys) {
      if (current === null || typeof current !== 'object' || !current.hasOwnProperty(key)) {
         return undefined
      }

      current = current[key]
   }

   return current
};

console.log("user.name                   :", getValueByDotNotation(obj, 'user.name'));             // - 'Asim Howlader'
console.log("user.age                    :", getValueByDotNotation(obj, 'user.age'));              // - 30
console.log("user.address.city           :", getValueByDotNotation(obj, 'user.address.city'));     // - 'Barishal'
console.log("user.address.country        :", getValueByDotNotation(obj, 'user.address.country')); // - 'Bangladesh'
console.log("user.address.zip (missing)  :", getValueByDotNotation(obj, 'user.address.zip'));     // - undefined
console.log("user.phone (missing)        :", getValueByDotNotation(obj, 'user.phone'));           // - undefined
console.log("null object                 :", getValueByDotNotation(null, 'user.name'));            // - undefined
console.log("empty path                  :", getValueByDotNotation(obj, ''));                      // - undefined

