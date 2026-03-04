/*
=============================================================================================================================
*Problem: Convert object to array of key - value pairs?
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

const convertObjToArr = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return []
   }

   const arr = Object.entries(obj)

   return arr
};

const output = convertObjToArr(person);
console.log(output)




