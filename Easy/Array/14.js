const numbers1 = [1, 2, 3, 4, 5]

const removeLast1 = (arr) => {
   const lastElement = arr.pop()

   return lastElement;
}

console.log(removeLast1(numbers1))  // 5
console.log(numbers)      // [1, 2, 3, 4]

// - ----------------------------------------------------------------------------------------------------------------------->

const numbers = [1, 2, 3, 4, 5]

const removeLast = (arr) => {
   if (arr.length === 0) return undefined

   const lastElement = arr[arr.length - 1]

   // Remove the last element by reducing the array length
   arr.length = arr.length - 1

   return lastElement
}

const last = removeLast(numbers)
console.log(last)     // 5
console.log(numbers)  // [1, 2, 3, 4]
