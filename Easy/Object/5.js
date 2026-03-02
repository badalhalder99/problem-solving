/*
=============================================================================================================================
*Problem: How to get all keys of an object.
=============================================================================================================================
*/

/*
=============================================================================================================================
Solution: ✅ 1. Using Object.keys()
=============================================================================================================================
*/

const person = {
   name: 'Asim Howlader',
   age: 30,
   salary: 30000,
   gender: "male",
   country: "Bangladesh",
   district: "Barishal",
   education: 'MBA'
}

const getAllKeys = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return null
   }

   const keys = Object.keys(obj)

   return keys
};

const output = getAllKeys(person)
console.log(output) // ['name','age','salary','gender','country','district','education']

/*
=============================================================================================================================
Solution: ✅ 2️. USING for...in LOOP (WITH hasOwn CHECK) — INTERVIEW STYLE
=============================================================================================================================
*/

const getAllKeys2 = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return null
   }

   const keys = []

   for (let key in obj) {
      if (Object.hasOwn(obj, key)) {
         keys.push(key)
      }
   }

   return keys
};

const output2 = getAllKeys2(person) // ['name','age','salary','gender','country','district','education']
console.log(output2)

/*
=============================================================================================================================
Solution: ✅ 3. Real approach:
=============================================================================================================================
*/

// Using Object.keys():
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// Using Object.entries():
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
