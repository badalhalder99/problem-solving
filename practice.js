// - Problem:  Sort Array by Parity (Even First)

const arr = [5, 7, 2, 8, 11, 20]

const sortArrayByParity = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let evens = []
   let odds = []

   for (let item of arr) {
      if (item % 2 === 0) {
         evens.push(item)
      } else {
         odds.push(item)
      }
   }

   const sorted = [...evens, ...odds]

   return sorted
}

const output = sortArrayByParity(arr)
console.log(output)

const sortArrayByParity2 = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   const evens = arr.filter(item => item % 2 === 0)
   const odds = arr.filter(item => item % 2 !== 0)

   return [...evens, ...odds]
}

const result = sortArrayByParity2(arr)
console.log(result)
