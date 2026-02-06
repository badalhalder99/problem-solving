
/*
===============================================================================
PROBLEM: Create an array of n zeros??
===============================================================================

*/

const numbers = [15, 30, 55, 13, 27, 48, 35, 12, 17, 23, 36, 44, 93, 76]

const createArr = (count, number) => {

   if (!count || typeof count !== 'number' ) return []

   let result = []

   for (let i = 0; i < count; i++) {
      result.push(number)
   }

   return result
}

const output = createArr(12, 0)
console.log(output)

