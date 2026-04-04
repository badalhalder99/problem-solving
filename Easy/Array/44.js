
// - Problem: Merge two arrays and remove duplicates?

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 2, 3, 7, 8]

const merageArrayAndRemoveDuplicate = (arr1, arr2) => {
   if (!Array.isArray(arr1) || arr1.length === 0) return []
   if (!Array.isArray(arr2) || arr2.length === 0) return []

   const combinedArray = [...arr1, ...arr2]
   console.log(combinedArray)

   let uniqueArr = []

   for (let item of combinedArray) {
      if (!uniqueArr.includes(item)) {
         uniqueArr.push(item)
      }
   }

   return uniqueArr
}

const output = merageArrayAndRemoveDuplicate(arr1, arr2)
console.log(output)

// - Solution - 02:------------------------------------------------------------------------------------------------------

// - Option 2: Using Set (best and simplest)
const mergeArrayAndRemoveDuplicate = (arr1, arr2) => {
   if (!Array.isArray(arr1) || arr1.length === 0) return []
   if (!Array.isArray(arr2) || arr2.length === 0) return []

   const combinedArray = [...arr1, ...arr2]
   return [...new Set(combinedArray)]
}

// - Option 4: Using filter:
const mergeArrayAndRemoveDuplicate2 = (arr1, arr2) => {
   if (!Array.isArray(arr1) || arr1.length === 0) return []
   if (!Array.isArray(arr2) || arr2.length === 0) return []

   const combinedArray = [...arr1, ...arr2]
   return combinedArray.filter((item, index) => combinedArray.indexOf(item) === index)
}
