// - Problem: Move all zeros to the end of the array?

const arr = [4, 0, 5, 0, 0, 3]

const movedZeroEnd = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let nonZero = []
   let zero = []

   for (let item of arr) {
      if (item !== 0) {
         nonZero.push(item)
      } else {
         zero.push(item)
      }
   }

   const movedAllZeroToEnd = [...nonZero, ...zero]

   return movedAllZeroToEnd
}

const output = movedZeroEnd(arr)
console.log(output)

