// - PROBLEM: Flatten a Nested Array One Level
// - Output:
// - [1, 2, 3, 4, 5, 6]

const arr = [1, [2, 3], [4, 5], 6]

const flaternArr = (arr) => {

   let newArr = []

   for (let outerItem of arr) {
      if (Array.isArray(outerItem)) {

         for (let item of outerItem) {
            newArr.push(item)
         }

      } else {
         newArr.push(outerItem)
      }
   }

   return newArr
}

const output = flaternArr(arr)
console.log(output)
