
/*
===============================================================================
PROBLEM: Find the second largest number in an array.?
===============================================================================

*/

const numbers = [15, 30, 55, 13, 27, 48, 35, 12, 17, 23, 36, 44, 93, 76]

const secondLargest = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let firstLarge = arr[0]
   let secondLarge = arr[1]

   for (let i = 0; i < arr.length; i++) {

      let current = arr[i]

      if (secondLarge > firstLarge) {
         secondLarge = current
      }
   }

   return secondLarge
}

const output = secondLargest(numbers)
console.log(output)

