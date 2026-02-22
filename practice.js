// - 🧠 PROBLEM EXPLANATION: Find a pair of numbers that sum to target?
const arr = [35, 21, 56, 29, 14]

const findPair = (arr, target) => {

   if (!Array.isArray(arr) || arr.length < 2) return []
   if (!target || typeof target !== 'number') return null

   for (let i = 0; i < arr.length; i++) {

      for (let j = i + 1; j < arr.length; j++) {

         if (arr[i] + arr[j] === target) {
            return [arr[i], arr[j]]
         }
      }
   }

}

const output = findPair(arr, 35)
console.log(output)
