
/*
===============================================================================
PROBLEM: Double every element in an array?
===============================================================================

*/

const numbers = [15, 30, 55, 13, 27, 48, 35, 12, 17, 23, 36, 44, 93, 76]

const double = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return 0

   let result = []

   for (let item of arr) {
      result.push(item * 2)
   }

   return result
}

const output = double(numbers)
console.log(output)

// - Solution -02:
const numbers2 = [1, 2, 3, 4, 5]

const doubled = numbers2.map(num => num * 2)

console.log(doubled)
console.log(numbers)
