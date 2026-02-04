/*
====================================================
PROBLEM: Flatten a Nested Array One Level
====================================================

PROBLEM STATEMENT
Given an array that may contain nested arrays, flatten the array by only ONE level.
Do NOT deeply flatten the array.

----------------------------------------------------
EXAMPLE
----------------------------------------------------
Input:
[1, [2, 3], [4, 5], 6]

Output:
[1, 2, 3, 4, 5, 6]

----------------------------------------------------
KEY IDEA (Beginner Way)
----------------------------------------------------
- We go through each element of the array
- If the element is an array, we open it ONE time
- If it is not an array, we keep it as it is
- We do NOT touch deeper nested arrays

----------------------------------------------------
CORNER CASES
----------------------------------------------------
1. Empty array → []
2. No nested array → remains same
3. Deep nesting → only first level is flattened

Example:
[1, [2, [3, 4]]] → [1, 2, [3, 4]]

----------------------------------------------------
@params
----------------------------------------------------
@param {Array} arr - input array with possible nested arrays

----------------------------------------------------
@returns
----------------------------------------------------
@return {Array} - new array flattened one level only


====================================================
SOLUTION 1 — Modern (Using flat)
====================================================

*/
const flattenOneLevelModern = (arr) => {
  return arr.flat(1);
};

console.log(flattenOneLevelModern([1, [2, 3], [4, 5], 6]));
console.log(flattenOneLevelModern([1, [2, [3, 4]]]));
console.log(flattenOneLevelModern([]));
console.log(flattenOneLevelModern([1, 2, 3]));

/*
=============================================================================================================================
SOLUTION 2 — Modern (Using loop)
=============================================================================================================================

---------------------------------------------------------------------->
PSEUDOCODE
---------------------------------------------------------------------->

START
   Create empty result array
   FOR each element in input array
   IF element is array
      add its items to result
   ELSE
      add element to result
   RETURN result
END

*/

const arr = [1, [2, 3], [4, 5], 6]

const flattenArr = (arr) => {
   let newArr = []

   for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
         // If it's an array, push each element
         for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j])
         }
      } else {
         // If it's a number, push directly
         newArr.push(arr[i])
      }
   }

   return newArr
}

const output = flattenArr(arr)
console.log(output)  // [1, 2, 3, 4, 5, 6]

/*
====================================================
SOLUTION 3 — Modern (Using spreed operator)
====================================================
*/

const flattenArr2 = (arr) => {

   let newArr = []

   for (let item of arr) {
      if (Array.isArray(item)) {
         newArr.push(...item)  // Spread the array elements
      } else {
         newArr.push(item)
      }
   }
   return newArr
}

/*
====================================================
SOLUTION 4 — Modern (Using bulit in loop)
====================================================
*/

const arrs = [1, [2, 3], [4, 5], 6]

const flattenArrs = (arr) => {
   let newArr = []

   for (let outerItem of arr) {
      if (Array.isArray(outerItem)) {
         for (let innerItem of outerItem) {
            newArr.push(innerItem)  // ✅ Correct! item is already the value
         }
      } else {
         newArr.push(outerItem)
      }
   }

   return newArr
}

const outputs = flattenArr(arr)
console.log(outputs)  // [1, 2, 3, 4, 5, 6]

/*
====================================================
SOLUTION 5 — Modern (Using concat())
====================================================
*/

const flattenArrss = (arr) => {

   let newArr = []

   for (let item of arr) {
      newArr = newArr.concat(item)  // concat handles both arrays and values
   }

   return newArr
}
