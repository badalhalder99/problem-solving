// - Find the largest number in an array.

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const findLargest = (arr) => {

   let max = arr[0]

   for (let number of arr) {
      if (number > max) {
         max = number
      }
   }

   return max
}

const output = findLargest(numbers)
console.log(`The largest number is ${output}`)

// - Solution-02:
const numbers1 = [3, 7, 2, 9, 1, 5];
const largest = Math.max(...numbers1);
console.log(largest); // 9
