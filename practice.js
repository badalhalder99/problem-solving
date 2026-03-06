const deepFreeze = (obj) => {
   
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
