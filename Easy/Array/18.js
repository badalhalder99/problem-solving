/*
===============================================================================>
 PROBLEM: Create an array of n zeros??
===============================================================================>

Falsy values in JavaScript:

0 → falsy
"" → falsy
null → falsy
undefined → falsy
false → falsy
NaN → falsy


// Create empty array
let arr1 = new Array();           // same as []
let arr2 = new Array(10);         // creates array with 10 empty slots (length = 10)

// Create array with specific elements
let arr3 = new Array(1, 2, 3, 4); // [1, 2, 3, 4]
let arr4 = new Array("apple", "banana");

*/


const numbers = [15, 30, 55, 13, 27, 48, 35, 12, 17, 23, 36, 44, 93, 76]

const createArr = (count, number) => {

   if (typeof number !== 'number' || typeof count !== 'number') return []

   let result = []

   for (let i = 0; i < count; i++) {
      result.push(number)
   }

   return result
}

const output = createArr(12, 0)
console.log(output)

// - Soluton - 02:
const createArr2 = (count, number) => {
   if (typeof number !== 'number' || typeof count !== 'number') return []

   return new Array(count).fill(number)
}

const output2 = createArr(0, 12)
console.log(output2)  // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
