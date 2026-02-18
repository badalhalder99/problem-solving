// - Problem: Find the most frequent element in an array?

const arr = [4, 4, 5, 6, 5, 4, 6, 6, 6]

const findMostFrequentElement = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   // Step 1: Count frequencies
   let frequencyObj = {}

   for (let item of arr) {
      if (frequencyObj[item]) {
         frequencyObj[item] = frequencyObj[item] + 1
      } else {
         frequencyObj[item] = 1
      }
   }

   // Step 2: Find max frequency
   let maxElement = null
   let maxCount = 0

   for (let key in frequencyObj) {
      if (frequencyObj[key] > maxCount) {
         maxCount = frequencyObj[key]
         maxElement = key
      }
   }

   return Number(maxElement)
}

const output = findMostFrequentElement(arr)
console.log(output)

