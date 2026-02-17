// - Problem: Find the missing number in the array from 1 to n?



// const findMissingNumber = (arr, n) => {

//    if (!Array.isArray(arr) || arr.length === 0) return []
//    if (!n || typeof n !== 'number') return []

//    const set = new Set(arr)
//    let missingArr = []

//    for (let i = 1; i <= n; i++) {
//       if (!set.has(i)) {
//          missingArr.push(i)
//       }
//    }

//    return missingArr
// }

// const arr = [1, 3, 6, 7, 8, 9, 10]
// const output = findMissingNumber(arr, 10)
// console.log(output) // [2, 4, 5]


const findMissingNumberModern = (arr, n) => {
   if (!Array.isArray(arr) || arr.length === 0) return null
   if (typeof n !== "number") return null

   const expectedSum = (n * (n + 1)) / 2
   const actualSum = arr.reduce((sum, num) => sum + num, 0)

   return expectedSum - actualSum
}


// Test cases
console.log(findMissingNumberModern([1, 2, 5, 7, 8, 9, 10], 7))
