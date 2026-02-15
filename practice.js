// - Problem: Rotate the array to the right by k positions?

const arr = [1, 2, 3, 4, 5]

const rightRotateByKPosition = (arr, k) => {
   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!k || typeof k !== 'number') return []

   k = k % arr.length

   let rightRotate = []

   for (let i = arr.length - k; i < arr.length; i++) {
      let current = arr[i]
      rightRotate.push(current)
   }

   for (let i = 0; i < arr.length - k; i++) {
      let current = arr[i]
      rightRotate.push(current)
   }

   return rightRotate;
}

const output = rightRotateByKPosition(arr, 2)
console.log(output)
