/*
=============================================================================================================================
*Problem: How to get all values of an object?
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

const getAllValues = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return null
   }

   const values = Object.values(obj)

   return values
};

const output = getAllValues(person)
console.log(output) // [ 'Asim Howlader', 30, 30000, 'male', 'Bangladesh', 'Barishal', 'MBA' ]

/*
=============================================================================================================================
Solution: ✅ 2️. USING for...in LOOP (WITH hasOwn CHECK) — INTERVIEW STYLE
=============================================================================================================================
*/

const getAllValues2 = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return null
   }

   const values = []

   for (let key in obj) {
      if (Object.hasOwn(obj, key)) {
         values.push(obj[key])
      }
   }

   return values
};

const output2 = getAllValues2(person) // [ 'Asim Howlader', 30, 30000, 'male', 'Bangladesh', 'Barishal', 'MBA' ]
console.log(output2)

/*
=============================================================================================================================
Solution: ✅ 3. Real approach:
=============================================================================================================================
*/

// Using Object.keys():
Object.keys(person).forEach(key => {
  console.log(`${person[key]}`);
});

// Using Object.entries():
Object.entries(person).forEach(([key, value]) => {
  console.log(`${value}`);
});
