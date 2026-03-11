/*
===============================================================================
🧠 PROBLEM: “Flatten a Nested Object One Level”
===============================================================================

📌 What does this mean?

You are given a JavaScript object that may contain nested objects.

Your task conceptually is to bring the properties of the nested object
up to the top level — but ONLY one level deep.

This means:

✔ Move inner object properties to the parent
✔ Do NOT deeply flatten everything
✔ Only flatten the first level of nesting


===============================================================================
📌 Example Input
===============================================================================

const obj = {
   a: 1,
   b: {
      c: 2,
      d: 3
   },
   e: 4
}

Here:
- "b" is a nested object.


===============================================================================
📌 Expected Output
===============================================================================

{
  a: 1,
  c: 2,
  d: 3,
  e: 4
}

Explanation:

Instead of keeping:

b: { c: 2, d: 3 }

We bring its properties directly into the parent object.


===============================================================================
🔍 Important Observation
===============================================================================

We flatten ONLY one level.

Example:

const obj = {
  a: 1,
  b: {
    c: {
      d: 5
    }
  }
}

After flattening one level:

{
  a: 1,
  c: { d: 5 }
}

Notice:
We did NOT flatten { d: 5 } further.

This is why it is called **flatten one level**.


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Value is NOT an object

Example:

{
  a: 1,
  b: "hello"
}

Nothing to flatten.


2️⃣ Arrays

Arrays are objects in JavaScript.

Example:

{
  a: 1,
  b: [1,2,3]
}

Arrays should usually remain unchanged
unless the problem specifically asks to flatten them.


3️⃣ Null values

Example:

{
  a: null
}

Since null is technically an object in JavaScript,
we must be careful not to treat it as a normal object.


4️⃣ Multiple nested objects

Example:

{
  a: { x: 1 },
  b: { y: 2 }
}

Flatten result:

{
  x: 1,
  y: 2
}


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to check if you understand:

- Object iteration
- Detecting objects vs primitive values
- Object restructuring
- Handling shallow transformations


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask yourself:

1️⃣ How do I loop through object keys?

2️⃣ How do I check if a value is an object?

3️⃣ If it IS an object:
    → move its keys into the parent

4️⃣ If it is NOT an object:
    → keep it as it is


===============================================================================
🧠 Conceptual Algorithm
===============================================================================

Step 1:
Create a new empty object to store the result.

Step 2:
Loop through the original object keys.

Step 3:
Check each value:

IF value is a nested object:
   → loop through its keys
   → copy them into the result object

ELSE:
   → copy the key-value pair directly


Step 4:
Return the final flattened object.


===============================================================================
✅ In Simple Words
===============================================================================

Flattening one level means:

👉 If a property contains an object,
   bring its properties up to the parent level.

👉 Keep everything else unchanged.

👉 Do NOT flatten deeper nested levels.
*/

// ──────────────────────────────────────────────────────────────────────────────────────────
// ✅ APPROACH 1 — for...in + spread (simple)
//  ─────────────────────────────────────────────────────────────────────────────────────────

const letters = {
   a: 1,
   b: {
      c: 2,
      d: 3
   },
   e: 4
}

const flattenOneLevel_v1 = (obj) => {

   if (obj === null || typeof obj !== "object") {
      return {}
   }

   const newObj = {}

   for (const key in obj) {

      if (typeof obj[key] === "object" && !Array.isArray(obj[key]) && obj[key] !== null) {
         Object.assign(result, obj[key])     // spread nested obj into result
      } else {
         newObj[key] = obj[key]              // keep value as-is
      }
   }

   return result
}

console.log("v1:", flattenOneLevel_v1(letters))

// ──────────────────────────────────────────────────────────────────────────────────────────
// ✅ APPROACH 2 — for...in + for..fo
//  ─────────────────────────────────────────────────────────────────────────────────────────

const flattenNestedObj = (obj) => {

   let newObj = {}

   if (obj && typeof obj === "object") {
      for (let key in obj) {
         console.log(key)

         const value = obj[key]

         if (value && typeof value === "object" && !Array.isArray(value)) {
            const keys = Object.keys(value)

            for (let i of keys) {
               newObj[i] = value[i]
            }

         } else {
            newObj[key] = obj[key]
         }
      }
   }

   return newObj

}

const output = flattenNestedObj(letters)
console.log(output) // ["Emon", "Milon", "Shaim", "Badol"]
