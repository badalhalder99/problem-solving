// - Problem:  Remove element at specific index?

const arr = [10, 20, 30, 40, 50]

const removeElementAtSpecificIndex = (arr, indexNumber) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!indexNumber || typeof indexNumber !== 'number') return []


   const beforeIndex = arr.slice(0, indexNumber)
   const afterIndex = arr.slice(indexNumber + 1)

   const newArr = [...beforeIndex , ...afterIndex]

   return newArr
}

const output = removeElementAtSpecificIndex(arr, 2)
console.log(output)

// - Problem:  Remove element at specific index?

const arr2 = [10, 20, 30, 40, 50]

const removeElementAtSpecificIndex2 = (arr, indexNumber) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!indexNumber || typeof indexNumber !== 'number') return []


   const beforeIndex = arr.slice(0, indexNumber)
   const afterIndex = arr.slice(indexNumber + 1)

   const newArr = arr.filter( (item, index) => index !== indexNumber)

   return newArr
}

const output2 = removeElementAtSpecificIndex2(arr2, 2)
console.log(output2)

// - Problem:  Remove element at specific index?

const arr3 = [10, 20, 30, 40, 50]

const removeElementAtSpecificIndex3 = (arr, indexNumber) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!indexNumber || typeof indexNumber !== 'number') return []

   let newArr = []

   for (let item of arr) {
      if (arr.indexOf(item) !== indexNumber) {
         newArr.push(item)
      }
   }

   return newArr
}

const output3 = removeElementAtSpecificIndex3(arr3, 2)
console.log(output3)
