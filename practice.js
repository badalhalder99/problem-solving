/*
===============================================================================
🧠 PROBLEM: “Remove all occurrences of a value from an array”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An array of values
2️⃣ A specific value that needs to be removed

Your task is to make sure that this value does NOT exist in the array anymore.

Not even once ❌

Every time it appears — it must be removed.


===============================================================================
🔍 Understanding “occurrences”
===============================================================================

An occurrence simply means:

➡️ Every time that value shows up in the array.

Example:

Array → [2, 5, 2, 7, 2, 9]

Value to remove → 2

Here, the number 2 appears in multiple positions.

These are ALL occurrences:
Index → 0, 2, 4

All of them must be removed.


===============================================================================
🎯 Expected Result Concept
===============================================================================

After removing all occurrences:

The array should contain ONLY the values
that are NOT equal to the given value.

Example:

Before → [2, 5, 2, 7, 2, 9]
After  → [5, 7, 9]

✔ Order of remaining elements stays the same
✔ Only the unwanted value disappears
✔ Array length becomes smaller


===============================================================================
🚫 What This Problem is NOT Asking
===============================================================================

It is NOT asking to:

❌ Remove only the first match
❌ Remove only the last match
❌ Replace the value
❌ Remove by index

It is ONLY about removing by VALUE everywhere it exists.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to see if you understand:

- How to scan through an entire array
- How to compare each element with a target value
- How to keep only the elements you want
- The difference between:
  👉 removing one item
  👉 removing all matching items


===============================================================================
⚠️ Important Edge Cases You Must Think About
===============================================================================

1️⃣ Value does not exist in the array
   → Array should remain unchanged.

2️⃣ All elements are the value to remove
   → Result will be an empty array.

3️⃣ Empty array
   → Still empty, nothing to remove.

4️⃣ Different data types
   Example:
   → 2 vs "2" (number vs string)

5️⃣ Value appears only once
   → Remove that single occurrence.


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask:

- What value do I need to remove?
- How many times does it appear?
- How do I check every element?
- How do I keep only the allowed values?


===============================================================================
✅ In Simple Words
===============================================================================

👉 Look at every element in the array.
👉 If it matches the unwanted value → remove it.
👉 If it does NOT match → keep it.

Final array should contain zero occurrences of that value.
*/


//- Problem: Remove all occurrences of a value.?

const arr = [2, 5, 2, 7, 2, 9]

const removeAllOccurance = (arr, target) => {
   if (!Array.isArray(arr) || arr.length === 0) return [];
   if (!target || typeof target !== 'number') return []

   let result = []

   for (let i = 0; i < arr.length; i++) {
      let item = arr[i]

      if (item !== target) {
         result.push(item)
      }
   }

   return result
};

const output = removeAllOccurance(arr, 2)
console.log(output);

// - Solution - 02: Using filter():

const arr2 = [1, 2, 3, 4, 5, 6, 5, 23, 12, 5, 9, 5, 4, 20, 5, 25, 2, 5]
const target = 5

const removeAllOccuranceModern = (arr, target) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!target || typeof target !== 'number') []

   const result = arr.filter(item => item !== target)

   return result

}

const output2 = removeAllOccuranceModern(arr2, target)
console.log(output2)
