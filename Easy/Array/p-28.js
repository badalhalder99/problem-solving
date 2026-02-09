// - Problem: Find common elements between two arrays?

// - Option 2: Using loop - (Custom):

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 2, 3, 7, 8]

const commonElements = (arr1, arr2) => {
   if (!Array.isArray(arr1) || arr1.length === 0) return []
   if (!Array.isArray(arr2) || arr2.length === 0) return []

   let common = []

   for (let item of arr1) {
      if (arr2.includes(item)) { // Check if item from arr1 exists in arr2
         common.push(item)
      }
   }

   return common
}

const output = commonElements(arr1, arr2)
console.log(output)

// - Solution - 02:

// - Option 2: Using filter (cleaner):

const commonElementsOfTwoArrays = (arr1, arr2) => {
   if (!Array.isArray(arr1) || arr1.length === 0) return []
   if (!Array.isArray(arr2) || arr2.length === 0) return []

   return arr1.filter(item => arr2.includes(item))
}
