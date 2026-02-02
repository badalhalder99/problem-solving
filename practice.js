// - Reverse an array in place?

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const reverseArr = (arr) => {

   let reversed = []

   for (let i = arr.length - 1; i < arr.length; i--) {
      const current = arr[i]
      reversed.push(current)
   }

   return reversed
}

const output = reverseArr(numbers)
console.log(output)


// Solution - 02:
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]























