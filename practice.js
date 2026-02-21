// - Problem: Find Union of Two Arrays?

const arr1 = [1, 2, 3, 4]
const arr2 = [3, 4, 5, 6]


function getUnion(arr1, arr2) {

   if (!Array.isArray(arr1) || arr1.length === 0) return []
   if (!Array.isArray(arr2) || arr2.length === 0) return []

   const combined = [...arr1, ...arr2]

   const set = new Set(combined)

   const unique = [...set]

   return unique
}

console.log(getUnion(arr1, arr2));





