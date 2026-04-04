// - Remove the first element and return it?

const arr = [10, 20, 30, 40, 50, 60]

const firstElementRemove = (arr) => {

   const firstElement = arr.shift()

   console.log(arr)

   return firstElement
}

const result = firstElementRemove(arr)
console.log(result);

// - Solution - 02:--------------------------------------------------------------------------------------------------------->

const numbers2 = [1, 2, 3, 4, 5]

const [firstElement, ...rest] = numbers2

console.log(firstElement)  // 1
console.log(rest)          // [2, 3, 4, 5]
console.log(numbers)       // [1, 2, 3, 4, 5] - original unchanged

// - Solution -03:---------------------------------------------------------------------------------------------------------->

const numbers = [1, 2, 3, 4, 5]

const removeFirst = (arr) => {
   if (arr.length === 0) return undefined

   const firstElement = arr[0]

   // Shift all elements one position to the left
   for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1]
   }

   // Remove the last element (now duplicate)
   arr.length = arr.length - 1

   return firstElement
}

const first = removeFirst(numbers)
console.log(first)    // 1
console.log(numbers)  // [2, 3, 4, 5]
