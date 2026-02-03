// - Find the index of a value in an array?


const nameArray = ["badal", 'asim', 'anik', 'sourof', 'rudro', 'tapos']

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

const result = checkValues(nameArray, 'anik')
console.log(result)



