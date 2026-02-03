// - Check if an array contains a specific value?

const numbers = [1, 2, 3, 4, 5]

const checkValue = (arr, search) => {

   if (!arr.includes(search)) {
      return false
   } else {
      return true
   }
}

const output = checkValue(numbers, 5)
console.log(output)

// simplier approach:

const numbers2 = [10, 20, 30, 40, 50]

const checkValues = (arr, search) => {
   return arr.includes(search);
}

const outputs = checkValue(numbers2, 30)
console.log(outputs)





















