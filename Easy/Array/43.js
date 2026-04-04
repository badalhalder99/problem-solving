/*
===============================================================================
PROBLEM: Return Unique Values from the Array
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array containing numbers (may have duplicates)

Return:
- an array with only unique values (no duplicates)


EXAMPLE
-------
arr = [1, 2, 2, 3, 4, 4, 5]

Expected → [1, 2, 3, 4, 5]


KEY IDEA (BEGINNER WAY)
-----------------------
1. Loop through the array
2. Check if we've already seen this number
3. If not seen → add it to result
4. If already seen → skip it


CORNER CASES TO HANDLE
----------------------
1. Not an array          → return []
2. Empty array           → return []
3. No duplicates         → return array as is
4. All same values       → return single element


@params
-------
@param {Array} arr → input array containing numbers (may have duplicates)

@returns
--------
@return {Array} → array with only unique values
*/


/*
===============================================================================
SOLUTION 1 — MODERN
===============================================================================
*/

const getUniqueValuesModern = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   return [...new Set(arr)]
}

console.log(getUniqueValuesModern([1, 2, 2, 3, 4, 4, 5]))      // [1, 2, 3, 4, 5]
console.log(getUniqueValuesModern([1, 1, 1, 1]))               // [1]
console.log(getUniqueValuesModern([1, 2, 3]))                  // [1, 2, 3]


/*
===============================================================================
LINE BY LINE EXPLANATION — SOLUTION 1
===============================================================================

const getUniqueValuesModern = (arr) => {
→ Create a function
→ arr = input array


if (!Array.isArray(arr) || arr.length === 0) return []
→ If arr is not an array OR empty
→ return []


new Set(arr)
→ Set is a built-in JavaScript object
→ Automatically removes duplicates
→ Only keeps unique values

Example:
arr = [1, 2, 2, 3, 4, 4, 5]
new Set(arr) → Set { 1, 2, 3, 4, 5 }


[...new Set(arr)]
→ Spread operator converts Set back to Array
→ Because Set is not an array, it's a Set object

Example:
Set { 1, 2, 3, 4, 5 } → [1, 2, 3, 4, 5]


return [...new Set(arr)]
→ Return the unique values as an array
*/


/*
===============================================================================
DIAGRAM — SOLUTION 1
===============================================================================

arr = [1, 2, 2, 3, 4, 4, 5]

Step 1 — Create Set:
1 → new, add to Set → Set { 1 }
2 → new, add to Set → Set { 1, 2 }
2 → duplicate, skip → Set { 1, 2 }
3 → new, add to Set → Set { 1, 2, 3 }
4 → new, add to Set → Set { 1, 2, 3, 4 }
4 → duplicate, skip → Set { 1, 2, 3, 4 }
5 → new, add to Set → Set { 1, 2, 3, 4, 5 }

Set { 1, 2, 3, 4, 5 }

Step 2 — Convert to Array:
Set { 1, 2, 3, 4, 5 } → [1, 2, 3, 4, 5]

Result: [1, 2, 3, 4, 5] ✅
*/


/*
===============================================================================
PSEUDOCODE — SOLUTION 1
===============================================================================

if input is invalid → return []

create a Set from arr (removes duplicates)
convert Set back to array using spread operator

return unique array
*/




/*
===============================================================================
SOLUTION 2 — CUSTOM (BEGINNER FRIENDLY)
===============================================================================
*/

const getUniqueValuesBeginner = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let unique = []

   for (let item of arr) {
      if (!unique.includes(item)) {
         unique.push(item)
      }
   }

   return unique
}

console.log(getUniqueValuesBeginner([1, 2, 2, 3, 4, 4, 5]))    // [1, 2, 3, 4, 5]
console.log(getUniqueValuesBeginner([1, 1, 1, 1]))             // [1]
console.log(getUniqueValuesBeginner([1, 2, 3]))                // [1, 2, 3]


/*
===============================================================================
LINE BY LINE EXPLANATION — SOLUTION 2
===============================================================================

const getUniqueValuesBeginner = (arr) => {
→ Create a function
→ arr = input array


if (!Array.isArray(arr) || arr.length === 0) return []
→ If arr is not an array OR empty
→ return []


let unique = []
→ Empty array to store unique values


for (let item of arr) {
→ Loop through every item in array


if (!unique.includes(item)) {
→ Check if item does NOT exist in unique array
→ includes() returns true if item exists, false if not

Example:
item = 1, unique = []
unique.includes(1) → false → not in array yet


unique.push(item)
→ If item is not in unique array
→ Add it to unique array

Example:
item = 1 → unique = [1]
item = 2 → unique = [1, 2]
item = 2 → already in unique, skip
item = 3 → unique = [1, 2, 3]


return unique
→ Return array with only unique values
*/


/*
===============================================================================
DIAGRAM — SOLUTION 2
===============================================================================

arr = [1, 2, 2, 3, 4, 4, 5]

Loop through each item:

item = 1 → unique.includes(1) → false → push → unique = [1]
item = 2 → unique.includes(2) → false → push → unique = [1, 2]
item = 2 → unique.includes(2) → true  → skip → unique = [1, 2]
item = 3 → unique.includes(3) → false → push → unique = [1, 2, 3]
item = 4 → unique.includes(4) → false → push → unique = [1, 2, 3, 4]
item = 4 → unique.includes(4) → true  → skip → unique = [1, 2, 3, 4]
item = 5 → unique.includes(5) → false → push → unique = [1, 2, 3, 4, 5]

Result: [1, 2, 3, 4, 5] ✅
*/


/*
===============================================================================
PSEUDOCODE — SOLUTION 2
===============================================================================

if input is invalid → return []

create empty unique array

loop through arr
   if item is not in unique array
      push item to unique array

return unique array
*/


/*
===============================================================================
⚠️ PERFORMANCE NOTE
===============================================================================

Solution 1 (Set)      → O(n) time, faster
Solution 2 (includes) → O(n²) time, slower (includes loops every time)

For large arrays, Solution 1 is much better.
For small arrays or learning, Solution 2 is more readable.
*/
