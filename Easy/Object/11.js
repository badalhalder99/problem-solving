/*
=============================================================================================================================
*Problem: How to invert object keys and values?
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

const invertObj = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return {}
   }

   let newObj = {}

   for (let key in obj) {
      newObj[obj[key]] = key
   }

   return newObj
};

const output = invertObj(person);
console.log(output)

/*
=============================================================================================================================
*Solution - 02: using Using for..in loop:
=============================================================================================================================
*/

const invertObj2 = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return {}
   }

   const arr = Object.keys(obj)

   let newObj = {}

   for (let item of arr) {

      const value = obj[item]

      newObj[String(value)] = item
   }

   return newObj
};

const output2 = invertObj2(person);
console.log(output2)

/*
=============================================================================================================================
*Solution - 03: Object.fromEntries() + map() / for..of loop — most concise::
=============================================================================================================================
*/

const invertObject = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return {}

   const arr = Object.entries(obj)
   let newArr = []

   for (let [key, value] of arr) {
      newArr.push([value, key])
   }

   // const result = arr.map(([key, value]) => [value, key]) // this line is alternative of line 42 to 46

   const invertedObj = Object.fromEntries(newArr)

   return invertedObj
};

const show = invertObject(person)
console.log(show)
