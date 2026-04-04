/*
===============================================================================
PROBLEM: Rotate an Array to the Left by 1 Position
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array of elements

Rotate the array to the LEFT by 1 position.

This means:
- The first element moves to the end
- All other elements shift one step to the left


EXAMPLE
-------
[1, 2, 3, 4, 5] → [2, 3, 4, 5, 1]
["a", "b", "c"] → ["b", "c", "a"]
[10] → [10]


KEY IDEA (BEGINNER WAY)
----------------------
Left rotation by 1 means:
1. Remove the first element
2. Put it at the end of the array


CORNER CASES TO HANDLE
---------------------
1. Not an array → return empty array
2. Empty array → return empty array
3. Array with one element → return same array


@params
-------
@param {Array} arr → input array

@returns
--------
@return {Array} → rotated array
*/


/*
===============================================================================
SOLUTION 1: MODERN (shift + push)
===============================================================================
*/

const rotateLeftModern = (arr) => {
   if (!Array.isArray(arr)) return [];
   if (arr.length <= 1) return arr;

   const first = arr.shift();
   arr.push(first);

   return arr;
};

console.log(rotateLeftModern([1, 2, 3, 4, 5])); // [2, 3, 4, 5, 1]
console.log(rotateLeftModern(["a", "b", "c"])); // ["b", "c", "a"]


/*
LINE BY LINE EXPLANATION — SOLUTION 1 (MODERN)
----------------------------------------------

const rotateLeftModern = (arr) => {

→ Create a function that rotates array left


if (!Array.isArray(arr)) return [];

→ If input is not an array, return empty array


if (arr.length <= 1) return arr;

→ If array has 0 or 1 element, rotation does nothing


const first = arr.shift();

→ shift() removes the FIRST element from the array
→ That removed element is stored in variable "first"

Example:
[1,2,3,4] → shift() → first = 1
Array becomes [2,3,4]


arr.push(first);

→ push() adds the element to the END of the array
→ Now array becomes [2,3,4,1]


return arr;

→ Return the rotated array
*/


/*
SOLUTION 1 — DIAGRAM
--------------------

Original Array:
[1, 2, 3, 4, 5]

Step 1: Remove first
first = 1
Array → [2, 3, 4, 5]

Step 2: Add to end
[2, 3, 4, 5, 1]

Result → [2, 3, 4, 5, 1]
*/


/*
SOLUTION 1 — PSEUDOCODE
----------------------
if input not array → return []

if array length <= 1 → return array

remove first element
add it to end

return array
*/

// - Problem: Rotate the array to the left by 1 position?

const arr = [1, 2, 3, 4, 5]

const leftRotateByOnePosition = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return []

   let leftRotate = []
   let first = arr[0]

   for (let i = 1; i < arr.length; i++) {
      let current = arr[i]
      leftRotate.push(current)
   }

   leftRotate.push(first)

   return leftRotate;
}

const output = leftRotateByOnePosition(arr)
console.log(output)
