

const condition = (n) => {
   return n % 2 === 0
}

const splitArray = (arr, condition) => {
   if (!Array.isArray(arr) || typeof condition !== "function") return [[], []];

   const pass = [];
   const fail = [];

   for (const item of arr) {
      condition(item) ? pass.push(item) : fail.push(item);
      console.log(condition(item))
   }

   return [pass, fail];
}

const output = splitArray([1, 2, 3, 4, 5, 6], condition)
console.log(output)

