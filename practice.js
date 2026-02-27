
//- Problem:  “Create a Range Array from Start to End”


const rangeArray = (start, end) => {
   if (typeof start !== "number") return []
   if (typeof end !== "number") return []
   if (start > end) return []

   let result = []

   for (let i = start; i <= end; i++) {
      result.push(i)
   }

   return result
};

const output = rangeArray(2, 7)
console.log(output);


