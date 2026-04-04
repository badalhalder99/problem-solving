// - Find the sum of all elements in an array? -> the sum of arr is 275:

// solution- 01
const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const sumAll = (arr) => {

   const sum = arr.reduce((acc, curr) => {
      return acc + curr
   }, 0)

   return sum
}

const output = sumAll(arr)
console.log(`Ouput is ${output}`)

// solution- 02:
const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const sumOfArrElement = (arr) => {

   let total = 0

   for (let digit of arr) {
      total += digit
   }

   return total
}

const result = sumOfArrElement(array)
console.log(`Ouput is ${result}`)



/*
===============================================================================
এখন আসল প্রশ্ন 🔥
CALLBACK থেকে return না লিখলে কী হবে?
===============================================================================

যদি কোডটা এমন হয়:

const sum = arr.reduce((acc, curr) => {
   acc + curr
}, 0)

👉 এখানে কোনো return নাই

===============================================================================
তাহলে কী হবে?
===============================================================================

JavaScript-এ:

👉 function যদি কিছু return না করে
👉 তাহলে default ভাবে return হয় "undefined"
*/
