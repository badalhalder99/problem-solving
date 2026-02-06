/*
===============================================================================
PROBLEM: Sort an array of numbers in ascending order
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array of numbers

Return the array sorted from smallest to largest.


EXAMPLE
-------
[5, 2, 9, 1]      → [1, 2, 5, 9]
[10, -3, 7, 4]    → [-3, 4, 7, 10]
[1]               → [1]
[]                → []


KEY IDEA (BEGINNER WAY)
----------------------
Ascending order means:
SMALL → BIG

We compare numbers and move smaller numbers to the front.


CORNER CASES TO HANDLE
---------------------
1. Not an array → return empty array
2. Array with 0 or 1 element → already sorted


@params
-------
@param {number[]} arr → array of numbers

@returns
--------
@return {number[]}
*/



/*
===============================================================================
SOLUTION 1: MODERN (Built-in sort with compare function)
===============================================================================
*/

const sortAscendingModern = (arr) => {

   if (!Array.isArray(arr)) return [];

   return arr.sort((a, b) => a - b);
};

const nums1 = [5, 2, 9, 1];
console.log(sortAscendingModern(nums1)); // [1, 2, 5, 9]



/*
LINE BY LINE EXPLANATION — SOLUTION 1 (MODERN)
----------------------------------------------

const sortAscendingModern = (arr) => {
→ Function that takes an array of numbers

if (!Array.isArray(arr)) return [];
→ Safety check: if input is not an array, return empty array

return arr.sort((a, b) => a - b);
→ sort() is a built-in JavaScript array method

→ By default, sort() treats values as STRINGS (wrong for numbers)
   Example: [10, 2] → [10, 2]

→ So we provide a compare function:
   (a, b) => a - b

How compare works:
- If result < 0 → a comes before b
- If result > 0 → b comes before a
- If result = 0 → order stays same

So:
2 - 5 = -3 → 2 comes before 5
9 - 1 = 8  → 1 comes before 9

This sorts numbers in ascending order
*/



/*
SOLUTION 1 — DIAGRAM
--------------------

Before: [5, 2, 9, 1]

Comparisons reorder values →

After:  [1, 2, 5, 9]
*/



/*
SOLUTION 1 — PSEUDOCODE
----------------------
if input is not array → return []

sort array using compare function (a - b)

return array
*/

/*
===============================================================================
PROBLEM: Sort an array of numbers in decending order
===============================================================================
*/

const sortDecending = (arr) => {

   if (!Array.isArray(arr)) return [];

   return arr.sort((a, b) => b - a);
};

const numbers = [5, 2, 9, 1];
console.log(sortDecending(numbers));
