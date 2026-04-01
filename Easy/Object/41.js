/*
===============================================================================
🧠 PROBLEM: “Check if a Value is a Plain Object”
===============================================================================

📌 What does this mean?

You need to determine whether a given value is a **plain object**.

A plain object is:

👉 Created using `{}` or `new Object()`

Examples:

✔ {}
✔ { a: 1 }
✔ new Object()

NOT plain objects:

❌ [] (array)
❌ null
❌ function() {}
❌ Date, Map, Set, etc.
❌ instances of custom classes


===============================================================================
📌 Why This Matters
===============================================================================

In many problems (like deep merge, deep clone, etc.), you only want to:

👉 treat **real objects** specially

👉 ignore arrays, functions, or special objects


===============================================================================
🔍 Important Observation
===============================================================================

In JavaScript:

typeof {}        → "object"
typeof []        → "object"
typeof null      → "object"

👉 So `typeof` alone is NOT enough.


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ null
typeof null === "object" → true ❌
Must exclude.

------------------------------------------------------------

2️⃣ Arrays
Array.isArray([]) → true
Must exclude.

------------------------------------------------------------

3️⃣ Functions
typeof fn === "function"
Not objects.

------------------------------------------------------------

4️⃣ Built-in objects
new Date()
new Map()
new Set()

These are objects but NOT plain objects.

------------------------------------------------------------

5️⃣ Objects with no prototype
Object.create(null)

👉 No prototype — still considered plain in many cases


===============================================================================
🧠 What the Question is Testing
===============================================================================

• Understanding of JavaScript types
• Object detection
• Edge case awareness
• Defensive coding


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

To identify a plain object, check:

1️⃣ It is NOT null
2️⃣ It is of type "object"
3️⃣ It is NOT an array
4️⃣ Its prototype is Object.prototype OR null


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1:
If value is null → return false

Step 2:
If typeof value is not "object" → return false

Step 3:
If value is an array → return false

Step 4:
Get prototype using Object.getPrototypeOf(value)

Step 5:
If prototype === Object.prototype OR null → return true
Else → return false


===============================================================================
✅ APPROACH 1 — Object.getPrototypeOf (strictest) (Strict & Recommended)
===============================================================================
*/

const isPlainObject = (val) => {
   if (val === null || typeof val !== "object") {
      return false
   }

   const proto = Object.getPrototypeOf(val)

   return proto === Object.prototype || proto === null  // only pure {} or Object.create(null)
}


/*
==========================================================================================
📌 Examples
==========================================================================================
*/

isPlainObject({})                     // true
isPlainObject({ a: 1 })              // true
isPlainObject(new Object())          // true

isPlainObject([])                    // false
isPlainObject(null)                  // false
isPlainObject(() => {})              // false
isPlainObject(new Date())            // false
isPlainObject(new Map())             // false

isPlainObject(Object.create(null))   // true


/*
==========================================================================================
🧠 Alternative (Simple but Less Strict) && APPROACH 2 — typeof + null check (simplest)
==========================================================================================
*/

const isPlainObject_v1 = (val) => {
  return val !== null && typeof val === "object" && !Array.isArray(val)
}

console.log("v1:", isPlainObject_v1({ name: "Nabil" }))  // - output: true
console.log("v1:", isPlainObject_v1([1, 2, 3]))           // - output: false
console.log("v1:", isPlainObject_v1(null))                // - output: false
console.log("v1:", isPlainObject_v1("string"))            // - output: false


/*
⚠️ Note:

This version is easier but NOT fully accurate.

It will return true for:
❌ Date
❌ Map
❌ Set

So prefer the strict version in interviews.


===============================================================================
✅ In Simple Words
===============================================================================

A plain object is:

👉 A simple key-value object created using `{}`

👉 Not an array, not null, not special objects

👉 Best way to detect:
   → Check its prototype
*/
