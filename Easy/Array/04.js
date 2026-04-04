// - Find the largest and smallest number from an array ?

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const findMaxMin = (arr) => {

   let max = arr[0]
   let min = arr[0]

   for (let number of arr) {
      if (number > max) {
         max = number
      } else if (number < min) {
         min = number
      }
   }

   return `The max number is ${max} and The min number is ${min}`
}

const output = findMaxMin(numbers)
console.log(`Ouput is ${output}`)
