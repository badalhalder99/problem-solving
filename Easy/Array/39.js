/*
===============================================================================
PROBLEM: Find Union of Two Arrays?
===============================================================================

🧠 What does “Find union of two arrays” mean?

In JavaScript, this question is asking you to:

👉 Take two arrays
👉 Combine their elements
👉 Return all unique elements that appear in either array

Union means:
Everything from both arrays — without duplicates.


===============================================================================
📌 Example to Understand

Example 1:

Array A → [1, 2, 3]
Array B → [3, 4, 5]

Union means:

Take all values from both arrays:
[1, 2, 3, 3, 4, 5]

Remove duplicates:
[1, 2, 3, 4, 5]

Final Answer:
[1, 2, 3, 4, 5]


Example 2:

Array A → [1, 1, 2]
Array B → [2, 3]

Union:
[1, 2, 3]
===============================================================================

🔑 KEY IDEA (Beginner Way to Think)

Step 1:
First, think — union means “everything from both”.

So combine both arrays into one big array.

Step 2:
Now think — union does NOT allow duplicates.

So remove duplicate values.

That’s it.

In simple thinking:
👉 Merge
👉 Remove duplicates
👉 Return result

===============================================================================

🔍 What the Interviewer is Testing

When this question is asked, they want to check:

• Can you merge arrays?
• Do you understand uniqueness?
• Can you remove duplicates?
• Do you know how to use:
  - Set
  - spread operator (...)
  - filter
  - loops
• Can you handle edge cases?


===============================================================================
⚠️ Important Things That May Vary

1️⃣ Should duplicates be removed?
   Usually YES (true union concept)

2️⃣ Should order be preserved?
   Sometimes they expect:
   - First array order first
   - Then second array's new elements

3️⃣ What about different data types?
   - numbers
   - strings
   - objects (harder case)

4️⃣ Large arrays?
   They may check performance.


===============================================================================
CORNER CASES TO THINK ABOUT

1️⃣ One array is empty
   A = []
   B = [1,2]
   Union = [1,2]

2️⃣ Both arrays empty
   Union = []

3️⃣ Arrays contain same elements
   A = [1,2]
   B = [1,2]
   Union = [1,2]

4️⃣ Negative numbers or zero
   Should work normally


===============================================================================
@params

arr1 → First array
arr2 → Second array

Example:
arr1 = [1,2,3]
arr2 = [3,4,5]


===============================================================================
@returns

A new array containing all unique elements
that appear in either arr1 or arr2.

Example:
Input:
[1,2,3] and [3,4,5]

Return:
[1,2,3,4,5]


===============================================================================
GOAL SUMMARY

Union means:

👉 Everything from both arrays
👉 But no duplicates
👉 Return as a new array

That’s it.
===============================================================================
*/

// *************************************************************************************************************************/
// - Solution - 01:

const arr1 = [1, 2, 3, 4]
const arr2 = [3, 4, 5, 6]


function getUnion(arr1, arr2) {

   if (!Array.isArray(arr1) || arr1.length === 0) return []
   if (!Array.isArray(arr2) || arr2.length === 0) return []

   const combined = [...arr1, ...arr2]

   const result = []

   for (let item of combined) {
      if (!result.includes(item)) {
         result.push(item)
      }
   }

   return result
}

console.log(getUnion(arr1, arr2));

// *************************************************************************************************************************/
// - Solution - 02:

const arrOne = [1, 2, 3, 4]
const arrTwo = [3, 4, 5, 6]


function getUnion(arr1, arr2) {

   if (!Array.isArray(arr1) || arr1.length === 0) return []
   if (!Array.isArray(arr2) || arr2.length === 0) return []

   const combined = [...arr1, ...arr2]

   const set = new Set(combined)

   const unique = [...set]

   return unique
}

console.log(getUnion(arrOne, arrTwo));
