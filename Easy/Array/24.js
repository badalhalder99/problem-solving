/*
===============================================================================
Problem: Remove falsy values from an array?

FULL CODE + BUG EXPLANATION + CORRECT LOGIC
সবকিছু JS MULTILINE DOC এর ভিতরে (Beginner Friendly, বাংলা)
===============================================================================

--------------------------------
PROBLEM
--------------------------------

একটা array দেওয়া আছে।
এই array থেকে সব falsy value remove করতে হবে।

Falsy values কী কী?
- 0
- undefined
- null
- ""
- false
- NaN

--------------------------------
INPUT ARRAY
--------------------------------

const numbers = [
  15, 30, 0, 13, NaN,
  48, undefined, null,
  17, false, 36, 44,
  93, ""
]

--------------------------------
❌ YOUR ORIGINAL LOGIC (PROBLEMATIC)
--------------------------------

const removeFalsyValue = (arr = []) => {

  if (!Array.isArray(arr) || arr.length === 0) return []

  let newArr = []

  for (let item of arr) {
    if (
      item !== 0 ||
      item !== NaN ||
      item !== undefined ||
      item !== null ||
      item !== false ||
      item !== ""
    ) {
      newArr.push(item)
    }
  }

  return newArr
}

👉 এই logic টা ভুল ❌

--------------------------------
❌ কেন ভুল?
--------------------------------

👉 এখানে OR (||) ব্যবহার করা হয়েছে

একটা item কখনোই একসাথে:
0, NaN, undefined, null, false, "" — সব হতে পারে না

উদাহরণ:
item = 0 হলে,

item !== NaN  → true
item !== null → true

একটা condition true হলেই OR পুরোটা true হয়ে যায়

👉 তাই সব value-ই newArr তে ঢুকে যাচ্ছে
👉 falsy values remove হচ্ছে না

--------------------------------
IMPORTANT TRUTH 🧠
--------------------------------

👉 JavaScript এ falsy values check করার সবচেয়ে সহজ উপায়:

if (item) ❌ falsy
if (!item) ✅ falsy

*/

/*
-----------------------------------------------------------------------------------------------------------------------------
✅ CORRECT & SIMPLE SOLUTION (BEST WAY):
-----------------------------------------------------------------------------------------------------------------------------
*/

const removeFalsyValue = (arr = []) => {

  if (!Array.isArray(arr) || arr.length === 0) return []

  let newArr = []

  for (let item of arr) {

    if (item) { // 👉 item truthy হলে push হবে 👉 falsy হলে skip হবে
      newArr.push(item)
    }
  }

  return newArr
}

const output = removeFalsyValue(numbers)
console.log(output)

/*
--------------------------------
STEP BY STEP EXECUTION
--------------------------------

15        → truthy → keep
30        → truthy → keep
0         → falsy  → remove
13        → truthy → keep
NaN       → falsy  → remove
48        → truthy → keep
undefined → falsy  → remove
null      → falsy  → remove
17        → truthy → keep
false     → falsy  → remove
36        → truthy → keep
44        → truthy → keep
93        → truthy → keep
""        → falsy  → remove

--------------------------------
FINAL OUTPUT
--------------------------------

[
  15, 30, 13,
  48, 17, 36,
  44, 93
]

--------------------------------
INTERVIEW NOTES
--------------------------------

✔ `if (item)` → easiest falsy filter
✔ Clean & readable
✔ O(n) time complexity
✔ No extra conditions needed
✔ Very common JS interview question

======================================================================================================================
*/
// - Solution - 02:

const removeFalsyValues = (arr = []) => {
   if (!Array.isArray(arr) || arr.length === 0) return []

   return arr.filter(Boolean)  // Boolean constructor filters out falsy values
}

// - Solution - 03:
const removeFalsyValue2 = (arr = []) => {
   if (!Array.isArray(arr) || arr.length === 0) return []

   let newArr = []
   for (let item of arr) {
      if (item !== 0 && item !== "" && item !== null &&
          item !== undefined && item !== false && !Number.isNaN(item)) {
         newArr.push(item)
      }
   }
   return newArr
}
