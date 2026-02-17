// - Problem: How to find the missing number in the array from 1 to n?

/*
===============================================================================
PROBLEM: Find the missing number in the array from 1 to n
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array containing numbers from 1 to n
- one or more numbers are missing

Return:
- the missing number(s)


EXAMPLE
-------
arr = [1, 3, 6, 7, 8, 9, 10], n = 10

Expected → [2, 4, 5]


KEY IDEA (BEGINNER WAY)
----------------------
We know the full range should be:

1 → n

So:
1. Loop from 1 to n
2. For each number:
   check if it exists in the array
3. If it does NOT exist → it is missing


CORNER CASES TO HANDLE
---------------------
1. Not an array → return []
2. Empty array → return []
3. n is not a number → return []


@params
-------
@param {Array} arr → input array
@param {number} n  → max number

@returns
--------
@return {Array}
*/


/*
===============================================================================
CORRECT SOLUTION (CUSTOM — BEGINNER FRIENDLY)
===============================================================================
*/

const findMissingNumber = (arr, n) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!n || typeof n !== 'number') return []

   let missingArr = []

   for (let i = 1; i <= n; i++) {
      if (!arr.includes(i)) {
         missingArr.push(i)
      }
   }

   return missingArr
}

const arr = [1, 3, 6, 7, 8, 9, 10]
const output = findMissingNumber(arr, 10)
console.log(output) // [2, 4, 5]


/*
===============================================================================
LINE BY LINE EXPLANATION
===============================================================================

const findMissingNumber = (arr, n) => {

→ Create a function
→ arr = input array
→ n   = last number of the range


if (!Array.isArray(arr) || arr.length === 0) return []

→ If arr is not an array OR empty
→ return []


if (!n || typeof n !== 'number') return []

→ If n is missing or not a number
→ return []


let missingArr = []

→ Create an empty array
→ This will store missing numbers


for (let i = 1; i <= n; i++) {

→ Start from 1
→ Go up to n
→ Because full range should be 1 → n


if (!arr.includes(i)) {

→ Check if current number i
→ does NOT exist in the array

Example:
i = 2
arr = [1,3,6,7,8,9,10]

arr.includes(2) → false
So 2 is missing


missingArr.push(i)

→ Add missing number into result array


return missingArr

→ Return all missing numbers
*/


/*
===============================================================================
DIAGRAM
===============================================================================

arr = [1, 3, 6, 7, 8, 9, 10]
n = 10

We check:

1 → exists
2 → missing ✅
3 → exists
4 → missing ✅
5 → missing ✅
6 → exists
7 → exists
8 → exists
9 → exists
10 → exists

Result:
[2, 4, 5]
*/


/*
===============================================================================
PSEUDOCODE
===============================================================================

if input is invalid → return []

create empty missing array

loop from 1 → n
   if number not in arr
      add to missing array

return missing array
*/


/*
===============================================================================
Here's the simplest modern solution:
===============================================================================
*/

const arr1 = [1, 3, 6, 7, 8, 9, 10]

const findMissingNumber1 = (arr, n) => {
   
   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!n || typeof n !== 'number') return []

   const set = new Set(arr)
   let missingArr = []

   for (let i = 1; i <= n; i++) {
      if (!set.has(i)) {
         missingArr.push(i)
      }
   }

   return missingArr
}

const result = findMissingNumber1(arr1, 10)
console.log(result)  // [2, 4, 5]
