

// - Soluton - 02:

const numbers2 = [15, 30, 55, 13, 27, 48, 35, 12, 17, 23, 36, 44, 93, 76]

const getFirstAndSecondLargestNumber = (arr = []) => {

   const result = arr.sort((a, b) => a - b).reverse()

   const largest = result[0]
   const secondLargest = result[1]

   return `The firstLargest number is ${largest} and The secondLargest number is ${secondLargest}`
}

const output2 = getFirstAndSecondLargestNumber(numbers2)
console.log(output2)
