
// - Problem: Count occurrences of a value in an array?

const numbers = [1, 2, 3, 4, 5, 6, 7, 3, 9, 10, 11, 12, 3, 10, 3, 4 , 1, 1, 4, 4, 3, 3, 9,7]

const countOccurrence = (arr, value) => {
   if (!Array.isArray(arr) || arr.length === 0) return 0

   let count = 0

   for (let item of arr) {
      if (item === value) {
         count++
      }
   }

   return count
}

const output = countOccurrence(numbers, 7)
console.log(output)

// Using filter
const countOccurrence2 = (arr, value) => {
   if (!Array.isArray(arr)) return 0

   return arr.filter(item => item === value).length
}

const output2 = countOccurrence2(numbers, 7)
console.log(output2)
