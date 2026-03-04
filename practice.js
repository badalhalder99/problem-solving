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

   let arr = []

   for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         arr.push([key, obj[key]])
      }
   }

   return arr
};

const output = convertObjToArr(person);
console.log(output)




