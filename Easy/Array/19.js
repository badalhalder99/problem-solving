
/*
===============================================================================
PROBLEM: Filter even numbers from an array.?
===============================================================================

*/

const numbers = [15, 30, 55, 13, 27, 48, 35, 12, 17, 23, 36, 44, 93, 76]

const findEven = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return 0

   let even = []
   let odd = []

   for (let item of arr) {
      if (item % 2 === 0) {
         even.push(item)
      } else if (item % 2 !== 0 || item % 2 === 1) {
         odd.push(item)
      }
   }

   return `The even number is ${even} and The odd number is ${odd}`
}

const output = findEven(numbers)
console.log(output)

// - Solution- 02:

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers2.filter(num => num % 2 === 0)

console.log(evenNumbers)  // [2, 4, 6, 8, 10]
