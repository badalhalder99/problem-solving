const deepFreeze = (obj) => {

   if (obj === null || typeof obj !== 'object') {
      return obj
   }

   const keys = Object.getOwnPropertyNames(obj)

   for (let key of keys) {

      const value = obj[key]

      if (value && typeof value === 'object' && !Object.isFrozen(value)) {
         deepFreeze(value)
      }
   }

   return Object.freeze(obj)
};


/*
------------------------------------------------------------
📊 EXAMPLE
------------------------------------------------------------
*/

const user = {
   name: "Asim",
   address: {
      city: "Dhaka",
      location: {
         area: "Dhanmondi"
      }
   }
};

deepFreeze(user);

/*
------------------------------------------------------------
🧪 TEST
------------------------------------------------------------
*/

user.name = "Rahim";                  // ❌ blocked
user.address.city = "Sylhet";         // ❌ blocked
user.address.location.area = "Banani" // ❌ blocked

console.log(user);
