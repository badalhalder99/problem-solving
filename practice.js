// - Reverse an array in place?

const numbers = [1, 2, 3, 4, 5]

const reverseArr = (arr) => {

   let left = 0
   let right = arr.length - 1

   while (left < right) {

      [arr[left], arr[right]] = [arr[right], arr[left]]

      left++
      right--
   }

   return arr;
}

const output = reverseArr(numbers)
console.log(output)
























