// - Problem:  Insert an element at a specific index?

const arr = [10, 20, 40, 50]

const insertElementAtSpecificIndex = (arr, insertedElement, indexNumber) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!indexNumber || typeof indexNumber !== 'number') return []


   const beforeIndex = arr.slice(0, indexNumber)
   const afterIndex = arr.slice(indexNumber)

   const newArr = [...beforeIndex, insertedElement , ...afterIndex]

   return newArr
}

const output = insertElementAtSpecificIndex(arr, 30, 2)
console.log(output)

