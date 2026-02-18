// - Problem: Find the most frequent element in an array?

const arr = [4, 4, 5, 6, 5, 4, 6, 6, 6]

const findMostFrequentElement = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let element
   let count = 0

   for (let item of arr) {
      if (arr.includes(item)) {
         count ++
      } else {
         
      }
   }

   const movedAllZeroToEnd = [...nonZero, ...zero]

   return movedAllZeroToEnd
}

const output = findMostFrequentElement(arr)
console.log(output)

