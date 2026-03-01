// -  Count the number of keys in an object.?

// - Solution -01: using Object.keys():

const obj = {
   name: 'Badal',
   age: 30,
   job: "Software Engineer(Frontend)",
   education: 'MBA',
   salary: 30000
}

const countKeyOfObject = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return 0;
   }

   const arr = Object.keys(obj)
   const length = arr.length

   return length
}

const output = countKeyOfObject(obj)
console.log(`The object length is ${output}`)

// - Solution -02: using Object.entries():

const countKeyOfObject2 = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return 0;
   }

   const arr = Object.entries(obj)
   console.log(arr)
   const length = arr.length

   return length
}

const output2 = countKeyOfObject(obj)
console.log(`The object length is ${output2}`)

// - Solution -03: using for..in loop(Manually):
const countKeyOfObject3 = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return 0;
   }

   let count = 0;

   for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         count++;
      }
   }

   return count;
};

const output3 = countKeyOfObject3(obj)
console.log(`The object length is ${output3}`)
