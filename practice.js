// - Problem: Problem - Find duplicates in an array?

const arr = [1, 2, 3, 4, 5, 2, 3]

const findDuplicates = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return []

   let seen = []
   let duplicate = []

   for (let item of arr) {
      if (seen.includes(item)) {
         if (!duplicate.includes(item)) {
            duplicate.push(item)
         }
      } else {
         seen.push(item)
      }
   }

   return duplicate;
}

const output = findDuplicates(arr)
console.log(output)
