/*
===============================================================================
PROBLEM: Find Duplicates in an Array
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array of values

Return a new array containing ONLY the duplicate values.
Each duplicate should appear only once in the result.

EXAMPLE
-------
[1, 2, 3, 2, 4, 5, 1] → [2, 1]
["a", "b", "a", "c", "b"] → ["a", "b"]
[1, 2, 3] → []


KEY IDEA (BEGINNER WAY)
----------------------
A duplicate is a value that appears more than once.

We can:
1. Count how many times each value appears
2. If a value appears more than once, it's a duplicate


CORNER CASES TO HANDLE
---------------------
1. Not an array → return empty array
2. Empty array → return empty array
3. Works with numbers, strings, booleans


@params
-------
@param {Array} arr → input array

@returns
--------
@return {Array} → array of duplicate values
*/


/*
===============================================================================
SOLUTION 1: MODERN (Set + filter)
===============================================================================
*/

const findDuplicatesModern = (arr) => {
   if (!Array.isArray(arr)) return [];

   const seen = new Set();
   const duplicates = new Set();

   arr.forEach(item => {
      if (seen.has(item)) {
         duplicates.add(item);
      } else {
         seen.add(item);
      }
   });

   return [...duplicates];
};

console.log(findDuplicatesModern([1, 2, 3, 2, 4, 5, 1])); // [2, 1]
console.log(findDuplicatesModern(["a", "b", "a", "c", "b"])); // ["a", "b"]
console.log(findDuplicatesModern([1, 2, 3])); // []


/*
LINE BY LINE EXPLANATION — SOLUTION 1 (MODERN)
----------------------------------------------

const findDuplicatesModern = (arr) => {

→ Create a function that takes an array as input


if (!Array.isArray(arr)) return [];

→ If input is not an array, return empty array


const seen = new Set();

→ "seen" stores values we have already visited


const duplicates = new Set();

→ "duplicates" stores values that appear more than once
→ Set automatically avoids duplicate entries


arr.forEach(item => {

→ Loop through each element in the array


if (seen.has(item)) {

→ If we've already seen this value before, it's a duplicate


duplicates.add(item);

→ Add it to duplicates set


} else {

→ Otherwise, first time seeing it


seen.add(item);

→ Store it in seen set
}


return [...duplicates];

→ Convert Set to array using spread operator
*/


/*
SOLUTION 1 — DIAGRAM
--------------------

Input: [1, 2, 3, 2, 4, 5, 1]

Step-by-step:

Seen Set       Duplicates Set
--------       ---------------
1              -
1,2            -
1,2,3          -
1,2,3          2
1,2,3,4        2
1,2,3,4,5      2
1,2,3,4,5      2,1

Result → [2, 1]
*/


/*
SOLUTION 1 — PSEUDOCODE
----------------------
if input is not array → return []

create empty set seen
create empty set duplicates

for each item in array
   if item already in seen
      add to duplicates
   else
      add to seen

return duplicates as array
*/


// - Problem - Find duplicates in an array?
const findDuplicates = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return []

   let seen = []
   let duplicate = []

   for (let item of arr) {
      if (seen.includes(item)) {
         // Already seen = it's a duplicate
         if (!duplicate.includes(item)) {
               duplicate.push(item)
         }
      } else {
         seen.push(item)
      }
   }

   return duplicate
}

const arr = [1, 2, 3, 4, 5, 2, 3]
console.log(findDuplicates(arr))  // [2, 3]

// - Solution - 02:

const findDuplicates2 = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return []

   return arr.filter((item, index) => arr.indexOf(item) !== index)
}

