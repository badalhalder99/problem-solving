// -  Find longest consecutive sequence (basic)?

const arr = [10, 5, 12, 3, 55, 4, 11]

const consecutiveSequence = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return [];

   const sorted = arr.sort((a, b) => a - b)

   let result = []

   let prev = sorted[0]
   let next = sorted[1]

   for (const item of sorted) {
      if (prev += 1 === next) {
         result.push(item)
      }
   }
    console.log(result)
   return result.length;
}

const output = consecutiveSequence(arr)
console.log(output)

