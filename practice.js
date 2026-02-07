
// - Remove falsy values from an array?

// 0 → falsy
// "" → falsy
// null → falsy
// undefined → falsy
// false → falsy
// NaN → falsy

// - Soluton - 02:

const numbers = [15, 30, 0, 13, NaN, 48, undefined, null, 17, false, 36, 44, 93, ""]

const removeFalsyValue = (arr = []) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let newArr = []

   for (let item of arr) {
      if (item) {
         newArr.push(item)
      }
   }

   return newArr

}

const output = removeFalsyValue(numbers)
console.log(output)
