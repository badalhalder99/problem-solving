/*
===============================================================================
PROBLEM: Move All Zeros To The End Of The Array?
===============================================================================

--------------------------------
PROBLEM STATEMENT
--------------------------------
তোমাকে একটা array দেওয়া হবে।
এই array-এর ভেতরে কিছু সংখ্যা থাকবে,
এবং কিছু 0 (zero) থাকবে।

তোমার কাজ হলো:
সব 0 গুলোকে array-এর একদম শেষে সরিয়ে নিতে হবে।

IMPORTANT:
✔ অন্য সংখ্যাগুলোর order (sequence) পরিবর্তন করা যাবে না।
✔ শুধু 0 গুলোকে শেষে নিতে হবে।
✔ নতুন array বানানো যাবে কিনা, সেটা problem অনুযায়ী বলা থাকতে পারে।

--------------------------------
EXAMPLE 1
--------------------------------

Input:
[0, 1, 0, 3, 12]

Goal:
সব 0 শেষে যাবে
কিন্তু 1, 3, 12 এর order ঠিক থাকবে

Expected Conceptual Output:
[1, 3, 12, 0, 0]

--------------------------------
EXAMPLE 2
--------------------------------

Input:
[4, 0, 5, 0, 0, 3]

After operation:
[4, 5, 3, 0, 0, 0]

--------------------------------
MAIN IDEA (Conceptually)
--------------------------------

তুমি array টাকে একবার ঘুরে দেখবে।

যখন 0 পাবে:
→ সেটাকে এখনই শেষে পাঠাবে না
→ আগে সব non-zero সংখ্যা ঠিকভাবে সাজাবে

সব non-zero সংখ্যা আগের মতো থাকবে
শুধু 0 গুলো পিছনে জমা হবে।

--------------------------------
VERY IMPORTANT CONDITION
--------------------------------

Order must be preserved.

উদাহরণ:

Input:
[2, 0, 1]

Wrong:
[1, 2, 0] ❌ (order change হয়ে গেছে)

Correct:
[2, 1, 0] ✅ (order ঠিক আছে)

--------------------------------
EDGE CASES
--------------------------------

1) Empty array:
[]

2) No zeros:
[1, 2, 3]
→ কিছুই বদলাবে না

3) All zeros:
[0, 0, 0]
→ একই থাকবে

4) Single element:
[0] or [5]

--------------------------------
REAL LIFE ANALOGY
--------------------------------

ভাবো একটা লাইনে দাঁড়ানো মানুষদের মধ্যে
কিছু মানুষ "0" লেখা টি-শার্ট পরে আছে।

তোমাকে করতে হবে:
সব 0 লেখা মানুষদের লাইনের শেষে পাঠাতে হবে
কিন্তু বাকি মানুষদের অবস্থান নষ্ট করা যাবে না।

--------------------------------
TIME COMPLEXITY EXPECTATION (Interview)
--------------------------------

সাধারণত interviewer চাইবে:
✔ O(n) time complexity
✔ Extra memory কম ব্যবহার

--------------------------------
ONE LINE SUMMARY
--------------------------------

"Array-এর সব zero-কে শেষে সরিয়ে নিতে হবে
কিন্তু non-zero element-এর order ঠিক রাখতে হবে।"

===============================================================================
*/

const arr = [4, 0, 5, 0, 0, 3]

const moveAllZeroEnd = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let movedZeroEnd = []

   for (let item of arr) {
      if (item !== 0) {
         movedZeroEnd.push(item)
      }
   }

   for (let item of arr) {
      if (item === 0) {
         movedZeroEnd.push(item)
      }
   }

   return movedZeroEnd
}

const output = moveAllZeroEnd(arr)
console.log(output) // [4, 5, 3, 0, 0, 0]

/**
 *---------------------------------------------------------------------------------------------------------------------------
 * SOLUTION - 02: (BEST SOLUTION)
 * --------------------------------------------------------------------------------------------------------------------------
**/

const array = [4, 0, 5, 0, 0, 3]

const moveAllZeroToEnd = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let nonZero = []
   let zero = []

   for (let item of arr) {
      if (item !== 0) {
         nonZero.push(item)
      } else if (item === 0){
         zero.push(item)
      }
   }

   const result = [...nonZero, ...zero]

   return result
}

const outputs = moveAllZeroToEnd(array)
console.log(outputs) // [4, 5, 3, 0, 0, 0]

/**
 *---------------------------------------------------------------------------------------------------------------------------
 * SOLUTION - 03:
 * --------------------------------------------------------------------------------------------------------------------------
**/

const moveAllZeroToEndModern = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   const movedZeroEnd = arr.filter(item => item !== 0)
   const zero = arr.filter(item => item === 0)

   return [...movedZeroEnd, ...zero]
}