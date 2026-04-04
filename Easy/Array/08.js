/*
===============================================================================
PROBLEM: Find the first non-repeating element in an array
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array

Return the FIRST element that appears only once.

If no such element exists → return null


EXAMPLE
-------
[4, 5, 1, 2, 0, 4] → 5
[1, 2, 2, 1, 3]    → 3
[7, 7, 7]          → null


KEY IDEA (BEGINNER WAY)
----------------------
1️⃣ Count how many times each element appears
2️⃣ Loop again in original order
3️⃣ Return the first element whose count is 1


CORNER CASES TO HANDLE
---------------------
1. Invalid array → return null
2. Empty array → return null
3. All repeating → return null
4. Works with numbers & strings


@params
-------
@param {Array} arr

@returns
--------
@return {number|string|null}
*/

const arr = [4, 5, 4, 6, 7, 5, 8];

const firstNonRepeating = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return null;

   for (let num of arr) {
      if (arr.indexOf(num) === arr.lastIndexOf(num)) return num;
   }

   return null;
};

const output = firstNonRepeating(arr);
console.log(output); // 6

```js
| num | indexOf | lastIndexOf | unique? |
|---|---|---|---|
| 4 | 0 | 2 | ✗ |
| 5 | 1 | 5 | ✗ |
| 4 | 0 | 2 | ✗ |
| 6 | 3 | 3 | ✓ → return 6 |
```

const firstNonRepeatingElement = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return null;

   let freq = {};

   // Step 1: Count frequency
   for (let num of arr) {
      freq[num] = (freq[num] || 0) + 1;
   }

   // Step 2: Find first element with count 1
   for (let num of arr) {
      if (freq[num] === 1) {
         return num;
      }
   }

   return null;
};


console.log(firstNonRepeatingElement([4, 5, 1, 2, 0, 4])); // 5
console.log(firstNonRepeatingElement([1, 1, 2, 2]));       // null
console.log(firstNonRepeatingElement([7]));                // 7
