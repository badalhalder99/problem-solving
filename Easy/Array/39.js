/*
===============================================================================
PROBLEM: Rotate the array to the right by K positions
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array `arr`
- a number `k`

Rotate the array to the RIGHT by `k` positions.

That means:
- The last `k` elements move to the front
- The rest shift to the right


EXAMPLE
-------
[1,2,3,4,5], k = 2 → [4,5,1,2,3]
["a","b","c","d"], k = 1 → ["d","a","b","c"]


KEY IDEA (BEGINNER WAY)
----------------------
1. Take the last `k` elements
2. Put them into a new array
3. Then add the remaining elements after them


CORNER CASES TO HANDLE
---------------------
1. Not an array → return []
2. Empty array → return []
3. k is not a number → return []
4. k larger than length → use modulo (k % length)


@params
-------
@param {Array} arr → input array
@param {number} k  → number of right rotations

@returns
--------
@return {Array}
*/


/*
===============================================================================
SOLUTION (CUSTOM — LOOP BASED)
===============================================================================
*/

const rightRotateByKPosition = (arr, k) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!k || typeof k !== 'number') return []

   k = k % arr.length

   let rightRotate = []

   // push the last k elements first
   for (let i = arr.length - k; i < arr.length; i++) {
      rightRotate.push(arr[i])
   }

   // then push the remaining elements
   for (let i = 0; i < arr.length - k; i++) {
      rightRotate.push(arr[i])
   }

   return rightRotate
}

const rightRotateByKPosition2 = (arr, k) => {
  if (!Array.isArray(arr) || arr.length === 0) return []
  if (!k || typeof k !== 'number') return []

  k = k % arr.length

  return [...arr.slice(-k), ...arr.slice(0, -k)]
}

/*
===============================================================================
LINE BY LINE EXPLANATION
===============================================================================

const rightRotateByKPosition = (arr, k) => {

→ Create a function that takes:
   arr = array
   k   = number of positions to rotate


if (!Array.isArray(arr) || arr.length === 0) return []

→ If input is not an array OR array is empty
→ Return empty array
→ Because rotation is not possible


if (!k || typeof k !== 'number') return []

→ If k is missing or not a number
→ Return empty array
→ Rotation needs a valid number

----------------------------------------------->
k = k % arr.length

→ Prevent unnecessary extra rotations

Example:
arr = [1,2,3,4,5]
length = 5
k = 7

7 % 5 = 2
So rotating 7 times = rotating 2 times

🧠 Real Life Analogy

ধরো ঘড়ি আছে 🕒

12 টা বাজে।

তুমি 15 ঘণ্টা এগাও।

15 % 12 = 3

মানে এখন 3 টা বাজবে।

ঘড়ির মতো array-ও circular।
------------------------------------------------->

let rightRotate = []

→ Create a new array to store rotated result


// push the last k elements first
for (let i = arr.length - k; i < arr.length; i++) {

→ Start from index (length - k)
→ Go until the last index

Example:
arr = [1,2,3,4,5]
k = 2
length = 5

5 - 2 = 3

Loop runs:
i = 3 → arr[3] = 4
i = 4 → arr[4] = 5

rightRotate = [4,5]


rightRotate.push(arr[i])

→ Add last k elements into new array


// then push the remaining elements
for (let i = 0; i < arr.length - k; i++) {

→ Now loop from start (0)
→ Stop before (length - k)

Example:
i = 0 → 1
i = 1 → 2
i = 2 → 3

rightRotate becomes:
[4,5,1,2,3]


return rightRotate

→ Return the final rotated array
*/


/*
===============================================================================
DIAGRAM
===============================================================================

Original:
[1, 2, 3, 4, 5]
 length = 5
 k = 2

Step 1:
Start from index = 5 - 2 = 3

Take:
[4, 5]

Step 2:
Take remaining:
[1, 2, 3]

Final:
[4, 5, 1, 2, 3]
*/


/*
===============================================================================
PSEUDOCODE
===============================================================================

if not array OR empty → return []

if k invalid → return []

reduce k using modulo

create empty result array

for i from length - k to length - 1
   push arr[i]

for i from 0 to length - k - 1
   push arr[i]

return result
*/
