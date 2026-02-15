// - Problem: Rotate the array to the right by k positions?

const arr = [1, 2, 3, 4, 5]

const rightRotateByKPosition = (arr, position) => {
   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!position || typeof position !== 'number') return []

   let rightRotate = []

   for (let i = 0; i < arr.length; i++) {
      let current = arr[i]
      rightRotate.push(current + position)
   }

   return rightRotate;
}

const output = rightRotateByKPosition(arr, 2)
console.log(output)
