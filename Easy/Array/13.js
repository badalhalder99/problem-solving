/*
===============================================================================
PROBLEM: Insert an Element at a Specific Index?
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array
- an element to insert
- an index position

Return:
- new array with element inserted at the specified index


EXAMPLE
-------
arr = [10, 20, 40, 50]
element = 30
index = 2

Expected → [10, 20, 30, 40, 50]


KEY IDEA (BEGINNER WAY)
-----------------------
1. Split array into two parts at the index
2. Part 1: everything before the index
3. Part 2: everything from the index onwards
4. Combine: Part 1 + new element + Part 2


CORNER CASES TO HANDLE
----------------------
1. Not an array             → return []
2. Empty array              → return []
3. Index is not a number    → return []
4. Index is 0               → insert at beginning
5. Index >= array length    → insert at end


@params
-------
@param {Array}  arr             → input array
@param {number} insertedElement → element to insert
@param {number} indexNumber     → position to insert at

@returns
--------
@return {Array} → new array with element inserted
*/


/*
===============================================================================
SOLUTION 1 — MODERN
===============================================================================
*/

const insertElementAtSpecificIndexModern = (arr, insertedElement, indexNumber) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (typeof indexNumber !== 'number') return []

   const beforeIndex = arr.slice(0, indexNumber)
   const afterIndex = arr.slice(indexNumber)

   const newArr = [...beforeIndex, insertedElement , ...afterIndex]

   return newArr
}

console.log(insertElementAtSpecificIndexModern([10, 20, 40, 50], 30, 2))  // [10, 20, 30, 40, 50]
console.log(insertElementAtSpecificIndexModern([10, 20, 40, 50], 5, 0))   // [5, 10, 20, 40, 50]
console.log(insertElementAtSpecificIndexModern([10, 20, 40, 50], 60, 4))  // [10, 20, 40, 50, 60]


/*
===============================================================================
LINE BY LINE EXPLANATION — SOLUTION 1
===============================================================================

const insertElementAtSpecificIndexModern = (arr, insertedElement, indexNumber) => {
→ Create a function
→ arr             = input array
→ insertedElement = element to insert
→ indexNumber     = position to insert at


if (!Array.isArray(arr) || arr.length === 0) return []
→ If arr is not an array OR empty
→ return []


if (typeof indexNumber !== 'number') return []
→ If indexNumber is not a number
→ return []


arr.slice(0, indexNumber)
→ Get all elements from start to index (not including index)

Example:
arr = [10, 20, 40, 50]
indexNumber = 2
arr.slice(0, 2) → [10, 20]


arr.slice(indexNumber)
→ Get all elements from index to end (including index)

Example:
arr = [10, 20, 40, 50]
indexNumber = 2
arr.slice(2) → [40, 50]


return [
   ...arr.slice(0, indexNumber),
   insertedElement,
   ...arr.slice(indexNumber)
]
→ Combine three parts:
→ 1. Elements before index
→ 2. New element
→ 3. Elements from index onwards

Example:
[10, 20] + 30 + [40, 50] → [10, 20, 30, 40, 50]
*/


/*
===============================================================================
DIAGRAM — SOLUTION 1
===============================================================================

arr = [10, 20, 40, 50]
insertedElement = 30
indexNumber = 2

Step 1 — Split at index 2:
Before index: arr.slice(0, 2) → [10, 20]
From index:   arr.slice(2)    → [40, 50]

Step 2 — Insert element:
[10, 20] + 30 + [40, 50]

Step 3 — Combine:
[10, 20, 30, 40, 50]

Result: [10, 20, 30, 40, 50] ✅
*/


/*
===============================================================================
PSEUDOCODE — SOLUTION 1
===============================================================================

if input is invalid → return []

split array at index into two parts
combine: before + new element + after

return new array
*/




/*
===============================================================================
SOLUTION 2 — CUSTOM (BEGINNER FRIENDLY)
===============================================================================
*/

const insertElementAtSpecificIndexBeginner = (arr, insertedElement, indexNumber) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (typeof indexNumber !== 'number') return []

   let newArr = []

   // Add elements before the index
   for (let i = 0; i < indexNumber; i++) {
      newArr.push(arr[i])
   }

   // Add the new element
   newArr.push(insertedElement)

   // Add elements from the index onwards
   for (let i = indexNumber; i < arr.length; i++) {
      newArr.push(arr[i])
   }

   return newArr
}

console.log(insertElementAtSpecificIndexBeginner([10, 20, 40, 50], 30, 2))  // [10, 20, 30, 40, 50]
console.log(insertElementAtSpecificIndexBeginner([10, 20, 40, 50], 5, 0))   // [5, 10, 20, 40, 50]
console.log(insertElementAtSpecificIndexBeginner([10, 20, 40, 50], 60, 4))  // [10, 20, 40, 50, 60]


/*
===============================================================================
LINE BY LINE EXPLANATION — SOLUTION 2
===============================================================================

const insertElementAtSpecificIndexBeginner = (arr, insertedElement, indexNumber) => {
→ Create a function
→ arr             = input array
→ insertedElement = element to insert
→ indexNumber     = position to insert at


if (!Array.isArray(arr) || arr.length === 0) return []
→ If arr is not an array OR empty
→ return []


if (typeof indexNumber !== 'number') return []
→ If indexNumber is not a number
→ return []


let newArr = []
→ Empty array to build the result


for (let i = 0; i < indexNumber; i++) {
   newArr.push(arr[i])
}
→ Loop from 0 to index (not including index)
→ Push all elements before the index

Example:
arr = [10, 20, 40, 50]
indexNumber = 2
i=0 → newArr.push(arr[0]) → newArr = [10]
i=1 → newArr.push(arr[1]) → newArr = [10, 20]


newArr.push(insertedElement)
→ Add the new element at the index position

Example:
insertedElement = 30
newArr = [10, 20, 30]


for (let i = indexNumber; i < arr.length; i++) {
   newArr.push(arr[i])
}
→ Loop from index to end of array
→ Push all remaining elements

Example:
i=2 → newArr.push(arr[2]) → newArr = [10, 20, 30, 40]
i=3 → newArr.push(arr[3]) → newArr = [10, 20, 30, 40, 50]


return newArr
→ Return the new array with inserted element
*/


/*
===============================================================================
DIAGRAM — SOLUTION 2
===============================================================================

arr = [10, 20, 40, 50]
insertedElement = 30
indexNumber = 2

Step 1 — Add elements before index:
i=0 → push arr[0] → newArr = [10]
i=1 → push arr[1] → newArr = [10, 20]

Step 2 — Add new element:
push 30 → newArr = [10, 20, 30]

Step 3 — Add elements from index onwards:
i=2 → push arr[2] → newArr = [10, 20, 30, 40]
i=3 → push arr[3] → newArr = [10, 20, 30, 40, 50]

Result: [10, 20, 30, 40, 50] ✅
*/


/*
===============================================================================
PSEUDOCODE — SOLUTION 2
===============================================================================

if input is invalid → return []

create empty newArr

loop from 0 to index (not including index)
   push arr[i] to newArr

push insertedElement to newArr

loop from index to end of array
   push arr[i] to newArr

return newArr
*/


/*
===============================================================================
⚠️ ALTERNATIVE — Using splice() (Mutates Original Array)
===============================================================================

const insertWithSplice = (arr, element, index) => {
   arr.splice(index, 0, element)  // mutates original array
   return arr
}

⚠️ Note: This changes the original array!
If you want to keep the original array unchanged, use the solutions above.
*/