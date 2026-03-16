/*
===============================================================================
🧠 PROBLEM: “Find the Difference Between Two Objects”
===============================================================================

📌 What does this mean?

You are given **two JavaScript objects**.

Your task conceptually is to determine **what has changed between them**.

In other words:

👉 Identify keys where the values are different
👉 Identify keys that exist in one object but not the other


===============================================================================
📌 Example Input
===============================================================================

const obj1 = {
  a: 1,
  b: 2,
  c: 3
}

const obj2 = {
  a: 1,
  b: 5,
  d: 4
}


===============================================================================
📌 Conceptual Output (Not the Implementation)
===============================================================================

{
  b: 5,
  c: undefined,
  d: 4
}

Explanation:

• "a" → same in both objects → ignore
• "b" → value changed → include difference
• "c" → exists in obj1 but missing in obj2
• "d" → new key in obj2


===============================================================================
🔍 Important Observation
===============================================================================

This problem is about **comparison**, not merging.

You must compare:

✔ keys
✔ values


There are three possible situations:

1️⃣ Key exists in both objects but values are different.

2️⃣ Key exists in obj1 but not in obj2.

3️⃣ Key exists in obj2 but not in obj1.


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Objects with identical values

Example:

obj1 = { a:1 }
obj2 = { a:1 }

Result:

No difference.


------------------------------------------------------------

2️⃣ Nested objects

Example:

{
  a: { x:1 }
}

vs

{
  a: { x:2 }
}

Should the comparison be **shallow** or **deep**?


------------------------------------------------------------

3️⃣ Arrays

Example:

{
  list: [1,2]
}

vs

{
  list: [1,2]
}

Are arrays compared by:

• reference
• content


------------------------------------------------------------

4️⃣ Missing keys

Example:

obj1 = { a:1, b:2 }
obj2 = { a:1 }

Key "b" disappeared.


------------------------------------------------------------

5️⃣ Null vs undefined

Example:

{ a: null }

vs

{ a: undefined }

Are these considered equal or different?


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers usually want to evaluate:

• Object traversal
• Comparison logic
• Handling missing keys
• Understanding deep vs shallow comparison


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask yourself:

1️⃣ How do I collect all keys from both objects?

2️⃣ How do I compare values?

3️⃣ How do I handle nested objects?

4️⃣ How do I represent the differences?


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1
Collect keys from both objects.

Step 2
Iterate through those keys.

Step 3
For each key:

IF values are equal
   → ignore

IF values are different
   → record the difference

Step 4
Return the object containing only the differences.


===============================================================================
✅ In Simple Words
===============================================================================

Finding the difference between two objects means:

👉 Compare all keys and values.

👉 Identify what changed, what was removed,
   and what was added.

👉 Return only the parts that are different.
*/


// const obj1 = {
//    a: 1,
//    b: 2,
//    c: {
//       x: 10,
//       y: 20
//    }
// }

// const obj2 = {
//    a: 1,
//    b: 5,
//    c: {
//       x: 10,
//       y: 30
//    },
//    d: 4
// }

const obj1 = {
   a: 1,
   b: 2,
   c: 3
}

const obj2 = {
   a: 1,
   b: 5,
   d: 4
}

const isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val)

const diffObjects = (obj1, obj2) => {

   let result = {}

   const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])

   for (const key of allKeys) {
      const val1 = obj1[key]
      const val2 = obj2[key]

      // If both values are objects → compare recursively
      if (isObject(val1) && isObject(val2)) {
         const nested = diffObjects(val1, val2)        // recurse into nested objects

         if (Object.keys(nested).length > 0) result[key] = nested
      }
      // If values are different
      else if (val1 !== val2) {
         result[key] = { obj1: val1, obj2: val2 }         // values differ → record both
      }
   }

   return result
}

const output = diffObjects(obj1, obj2)
console.log(output)
