// - Remove the last element and return it?

const numbers = [1, 2, 3, 4, 5]

const removeLast = (arr) => {
   const lastElement = arr.pop()

   return lastElement;
}

console.log(removeLast(numbers))  // 5
console.log(numbers)      // [1, 2, 3, 4]

