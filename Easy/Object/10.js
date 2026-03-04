/*
=============================================================================================================================
*Problem: Convert array of key-value pairs to object?
=============================================================================================================================
*/

/*
=============================================================================================================================
*Solution - 01: using Using for..in loop:
=============================================================================================================================
*/

const arr = [
  [ 'name', 'Asim Howlader' ],
  [ 'age', 30 ],
  [ 'salary', 30000 ],
  [ 'gender', 'male' ],
  [ 'country', 'Bangladesh' ],
  [ 'district', 'Barishal' ],
  [ 'education', 'MBA' ]
]

const convertArrToObject = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) {
      return {}
   }

   let obj = {}

   for (let item of arr) {
      obj[item[0]] = item[1]
   }

   return obj
};

const output = convertArrToObject(arr);
console.log(output)

/*
=============================================================================================================================
*Solution - 01: using Using for..in loop:
=============================================================================================================================
*/

const convertArrToObject2 = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) {
      return {}
   }

   let obj = {}

   for (let [key, value] of arr) {
      obj[key] = value;
   }

   return obj
};

const output2 = convertArrToObject2(arr);
console.log(output2)

/*
=============================================================================================================================
*Solution - 03: using Object.fromEntries() — the most direct, built exactly for this:
=============================================================================================================================
*/

const convertArrToObject3 = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return {};

   return Object.fromEntries(arr);
};

const show = convertArrToObject3(arr)
console.log(show)

/*
=============================================================================================================================
*Solution - 03: using forEach() — explicit iteration:
=============================================================================================================================
*/

const convertArrToObject4 = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return {};

   let obj = {}

   arr.forEach(([key, value]) => obj[key] = value)

   return obj
};

const shows = convertArrToObject3(arr)
console.log(shows)