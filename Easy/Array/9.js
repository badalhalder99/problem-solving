// - Find the index of a value in an array?

const names = ["badal", 'asim', 'anik', 'sourof', 'rudro', 'tapos']

const checkValue = (arr, value) => {

   if (names.length === 0) return -1
   if (!value || typeof value !== 'string') return "plese enter value"

   const index = arr.indexOf(value)
   return index;
}

const output = checkValue(names, 'rudro')
console.log(output)


// solution- 02: (Most important)

const name = ["badal", 'asim', 'anik', 'sourof', 'rudro', 'tapos']

const checkValues = (arr, value) => {
   if (arr.length === 0) return -1
   if (!value || typeof value !== 'string') return "please enter value"

   let index = -1

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
         index = i
         break  // Stop once found
      }
   }

   return index
}

const result = checkValues(names, 'anik')
console.log(result)

// solution- 03:

const checkValuesAnother = (arr, value) => {
   if (arr.length === 0) return -1
   if (!value || typeof value !== 'string') return "please enter value"

   const index = arr.findIndex(item => item === value)
   return index;
}





