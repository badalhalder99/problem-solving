// - // - Find the smallest number in an array.

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const findSmallest = (arr) => {

   let min = arr[0]

   for (let number of arr) {
      if (number < min) {
         min = number
      }
   }

   return min
}

const output = findSmallest(numbers)
console.log(`The smallest number is ${output}`)

// - Solution-02:
const numbers1 = [3, 7, 2, 9, 1, 5];
const largest = Math.min(...numbers1);
console.log(largest); // 9
