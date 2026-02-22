
const arr = [1, 2, 3, 4, 5]

const shuffleArry = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   const result = [...arr]

   for (let i = result.length - 1; i > 0; i--) {

      let randomIndex = Math.floor(Math.random() * (i + 1));

      [result[i], result[randomIndex]] = [result[randomIndex], result[i]]
   }

   return result
}

const output = shuffleArry(arr)
console.log(output)
