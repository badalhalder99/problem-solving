
//- Problem: Convert array to object with index as key??

const arr = ["a", "b", "c", "d", "e"]

const convertArrayToObject = (arr, target) => {
   if (!Array.isArray(arr) || arr.length === 0) return {}

   let newObj = {}

   for (let i = 0; i < arr.length; i++) {
      newObj[i] = arr[i]
   }

   return newObj

};

const output = convertArrayToObject(arr)
console.log(output);

// const arr = ["a", "b", "c", "d", "e"]

// const convertArrayToObject = (arr, target) => {
//    if (!Array.isArray(arr) || arr.length === 0) return {}


//    // for (let i = 0; i < arr.length; i++) {
//    //    i = newObj[i]
//    // }

//    return arr.forEach((item, index) => {
//        return {
//          newObj[index] : newObj[item]
//       }
//    });

// };

// const output = convertArrayToObject(arr)
// console.log(output);