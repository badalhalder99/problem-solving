/*
===============================================================================
🧠 PROBLEM: “Create a Deep Readonly Object (Conceptual)”
===============================================================================

📌 What does this mean?

You want to make an object:

👉 Completely immutable
👉 At ALL levels (deep)

This means:

❌ Cannot change top-level properties
❌ Cannot change nested properties
❌ Cannot add/delete anything


===============================================================================
📌 Example Input
===============================================================================

const obj = {
  user: {
    name: "Badal",
    age: 20
  }
}


===============================================================================
📌 Expected Behavior
===============================================================================

After making it deep readonly:

❌ obj.user.age = 30      (not allowed)
❌ obj.user = {}          (not allowed)
❌ obj.newProp = 123      (not allowed)

✔ Everything is locked recursively


===============================================================================
🔍 Important Observation
===============================================================================

👉 `Object.freeze()` is ONLY shallow

Example:

const obj = {
  user: { age: 20 }
}

Object.freeze(obj)

obj.user.age = 30  // ✅ still allowed ❌ (NOT deep)


===============================================================================
🧠 Key Idea
===============================================================================

To make it **deep readonly**, you must:

👉 Recursively freeze ALL nested objects


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1:
Check if value is an object

Step 2:
Freeze the current object

Step 3:
Loop through all keys

Step 4:
For each value:

IF value is object
   → recursively apply deep freeze

Step 5:
Return the frozen object


===============================================================================
🧠 Implementation (Deep Readonly)
===============================================================================
*/

const deepReadonly = (obj) => {
   if (obj === null || typeof obj !== "object") return obj

   Object.freeze(obj)

   for (let key in obj) {
      deepReadonly(obj[key])
   }

   return obj
}

const data = {
   user: {
      name: "Badal",
      age: 20
   }
}

deepReadonly(data)

// Try changes
data.user.age = 30     // ❌ blocked
data.user = {}         // ❌ blocked

console.log(data)


/*
===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Arrays

Arrays are objects → must also be frozen


------------------------------------------------------------

2️⃣ Circular references

obj.self = obj

👉 Infinite recursion risk


------------------------------------------------------------

3️⃣ Functions

Functions are objects → may or may not need freezing


------------------------------------------------------------

4️⃣ Non-object values

Return as-is


/*
===============================================================================
✅ In Simple Words
===============================================================================

Deep readonly means:

👉 Freeze EVERYTHING (not just top-level)

👉 Recursively lock all nested objects

👉 Prevent any modification anywhere
*/